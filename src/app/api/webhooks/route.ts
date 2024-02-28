import { env } from '@/lib/env'
import { db } from '@/lib/prisma'
import { stripe } from '@/lib/stripe'

async function handler(request: Request) {
  const response = Response

  const signature = request.headers.get('Stripe-Signature')

  if (!signature) {
    return response.json(
      { message: 'Missing Stripe-Signature' },
      { status: 400 },
    )
  }

  try {
    const payload = await request.text()

    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      env.STRIPE_WEBHOOK_SECRET_KEY,
    )

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        {
          const eventDataObj = event.data.object
          const sessionId = eventDataObj.id

          await stripe.checkout.sessions.retrieve(sessionId, {
            expand: ['line_items', 'line_items.data.price.product'],
          })

          await db.order.update({
            where: {
              id: eventDataObj.metadata?.orderId,
            },
            data: {
              status: 'PAYMENT_CONFIRMED',
            },
          })
        }
        break
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    return response.json({ received: true })
  } catch (error) {
    return response.json(
      { message: 'Stripe signature verification error' },
      { status: 400 },
    )
  }
}

export { handler as POST }
