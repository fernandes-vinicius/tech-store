import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: 'Mouses',
        slug: 'mouses',
        imageUrl:
          'https://utfs.io/f/e8589108-ed67-4900-a24e-329bfb88594b-ho0xw2.png',
      },
    })

    const mouses = [
      {
        name: 'Logitech MX Master 3s',
        slug: 'logitech-mx-master-3s',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/970db1bd-d96a-47b9-ae7d-19c71899ca6e-otetkp.png',
          'https://utfs.io/f/5c977695-5156-493f-a5e4-c3e042b39080-x6ep3u.png',
          'https://utfs.io/f/ff114f44-6a28-41dc-8db0-1e69f82733ad-thphc5.png',
          'https://utfs.io/f/5cc004c4-bb1a-4c0d-853d-4c9c7e09b83a-l4plt0.png',
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10,
      },
      {
        name: 'Logitech Pro X Superlight',
        slug: 'logitech-pro-x-superlight',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/dd253ef1-472e-4f18-9f53-7faec3ad878b-idaumz.png',
          'https://utfs.io/f/332b0d77-20ec-4544-b5a3-a282cf2fa99b-40f9t2.png',
          'https://utfs.io/f/04c9bb3c-3a15-4ea6-83ad-bfdd37d8a1f4-qe5e93.png',
          'https://utfs.io/f/faeceee4-e9ee-4473-aa8c-3f6c29bd701e-m98ja0.png',
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: 'Logitech G305 Lightspeed',
        slug: 'logitech-g305-lightspeed',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/e5960624-2c84-4ecc-953b-792c3bd09376-6pfvtn.png',
          'https://utfs.io/f/dfdcc6a0-d7ed-4835-90fa-55a36c70f10e-t3609o.png',
          'https://utfs.io/f/ca80ac82-c2d0-492f-ade4-714c3b1c8e63-jk7x9f.png',
          'https://utfs.io/f/b78c67b2-6b2b-4621-992d-928bf5aa43da-2ti76m.png',
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: 'Hyperx Pulsefire Dart',
        slug: 'hyperx-pulsefire-dart',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/de29d82b-3a02-4da8-975e-aeff6bddb142-1xd5uq.png',
          'https://utfs.io/f/eeae020b-ac52-4e37-97ad-f69bfb2731e3-2xbhct.png',
          'https://utfs.io/f/7d6ab2c3-fa3a-4883-a0ec-ef1fdd8f2ff8-7s04kc.png',
          'https://utfs.io/f/aa3ca278-9164-4288-81cf-851736aafe56-cmorrv.png',
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10,
      },
      {
        name: 'Razer Deathadder V2 Pro',
        slug: 'razer-deathadder-v2-pro',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/0b45d508-70e9-4283-8541-444b947c98b2-5jk68j.png',
          'https://utfs.io/f/f456bbaa-4513-40ad-8b36-234bb843fbcd-m16w6s.png',
          'https://utfs.io/f/816e0110-a34a-42b4-bba4-e993808fa47d-wiafu3.png',
          'https://utfs.io/f/daf428f5-93f7-45bd-b260-07ba36d67d20-g0npvu.png',
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ]

    await prisma.product.createMany({ data: mouses })

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: 'Teclados',
        slug: 'keyboards',
        imageUrl:
          'https://utfs.io/f/3289f31a-73e3-4a19-9357-aeef11506c09-pv4uj8.png',
      },
    })

    const keyboards = [
      {
        name: 'Logitech MX Keys Mini',
        slug: 'logitech-mx-keys-mini',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/cbbef218-9e30-453d-85b0-532a209b049e-33zg48.png',
          'https://utfs.io/f/d110b0e5-4f04-408d-8b3d-5daf87ad4e00-ausijr.png',
          'https://utfs.io/f/9c84739c-2490-40f2-8b26-e177d5d2c67c-otkh7q.png',
          'https://utfs.io/f/49c1c267-6eef-445c-a0ae-845c6f230b75-w8rm3f.png',
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10,
      },
      {
        name: 'Logitech MX Keys S',
        slug: 'logitech-mx-keys-s',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/906ef6b8-2509-49e6-b564-d3d3b8b9e3ea-m9yl8y.png',
          'https://utfs.io/f/767a4a87-84e4-4f8b-94a9-0d117f1960cf-du02k1.png',
          'https://utfs.io/f/66f0adf6-e54c-4e7e-bf6c-c34438965d72-5e1jv4.png',
          'https://utfs.io/f/52acd5f3-5ce0-4241-99c5-973fbd38e7a0-31wytt.png',
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10,
      },
      {
        name: 'Logitech Pop Keys',
        slug: 'logitech-pop-keys',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/0f318314-3f7f-43fc-add0-d18f39e58d45-u67teu.png',
          'https://utfs.io/f/ca4a6e95-384a-4260-a9ca-b12321acae29-58nqzp.png',
          'https://utfs.io/f/b5ee50ec-2565-448e-a266-a353bf571761-jowbfg.png',
          'https://utfs.io/f/c558f9cc-9ed0-4e61-ace6-7b0dc94baafd-qeno4j.png',
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5,
      },
      {
        name: 'Logitech MX Mechanical',
        slug: 'logitech-mx-mechanical',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/d97abf91-a106-4dd9-8ef2-c390b7a6b19e-tbfuuf.png',
          'https://utfs.io/f/1e634d2a-2cf0-456d-ac3c-55bbccc1f4b7-mk1c1y.png',
          'https://utfs.io/f/aa1f013f-76ff-4823-a294-9bd918c72e40-fsmt9h.png',
          'https://utfs.io/f/579b56ed-b776-4b82-a6ae-09a487b04ac7-918ah0.png',
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15,
      },
      {
        name: 'Epomaker TH80',
        slug: 'epomaker-th80',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/44372d48-1eae-4a79-a581-af8a1ed08fa3-t8tglh.png',
          'https://utfs.io/f/714da430-05fc-4417-9b6e-2290118fdde8-4b9e6c.png',
          'https://utfs.io/f/75f00072-6712-431a-9546-19cbee9adf6e-kmao8t.png',
          'https://utfs.io/f/7edf62ec-2517-425c-915f-1d122f39e6f7-ph9bb6.png',
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5,
      },
      {
        name: 'Redragon Gamer Ashe',
        slug: 'redragon-gamer-ashe',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/ed13aaa1-4101-4ae9-bf14-915e9ecb2d6b-b14pyz.png',
          'https://utfs.io/f/7db807f5-e25a-4a2a-a620-100961a9fa6d-7jaqka.png',
          'https://utfs.io/f/1b6b5375-d636-40c0-b4d5-9d44552a9695-41gr5l.png',
          'https://utfs.io/f/03135818-5f43-4aa2-a328-27a6bcc5c8f1-jmrqw.png',
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25,
      },
    ]

    await prisma.product.createMany({ data: keyboards })

    const headphonesCategory = await prisma.category.create({
      data: {
        name: 'Fones',
        slug: 'headphones',
        imageUrl:
          'https://utfs.io/f/e8520378-b7c3-4ca1-9e21-c4a653e19b51-x99mxn.png',
      },
    })

    const headphones = [
      {
        name: 'Logitech Zone Vibe 100',
        slug: 'logitech-zone-vibe-100',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/c76523e7-2527-4976-95d5-8ac455aec8b5-cuwa00.png',
          'https://utfs.io/f/63d11621-abc4-4bd1-9ba1-43d288aa69d2-guymjj.png',
          'https://utfs.io/f/1d47dd6b-fcd9-4ab7-920a-afe9f16eb50b-ogaiw2.png',
          'https://utfs.io/f/10f623c1-d378-47ac-82c4-b188d4917849-59kdnh.png',
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10,
      },
      {
        name: 'Logitech Pro X 2 Lightspeed',
        slug: 'logitech-pro-x-2-lightspeed',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/5a80aa95-0724-4bb8-a79b-f0d56ef81775-cnu60s.png',
          'https://utfs.io/f/b28cd8a7-a49d-4e21-97f5-bb543db3f0bd-x8xsfx.png',
          'https://utfs.io/f/d0d27dae-9354-43a9-bf9a-481281fa81bf-h72n42.png',
          'https://utfs.io/f/2df202ba-4405-4776-b23a-19d3565be8c7-3e0zb3.png',
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5,
      },
      {
        name: 'Logitech Astro A30',
        slug: 'logitech-astro-a30',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/8bc644cf-b3d7-4715-994a-d7eec2a46a5f-3us24m.png',
          'https://utfs.io/f/0a6a55d7-5478-4cda-95aa-3f23d20eebb4-4l6gkb.png',
          'https://utfs.io/f/d13533a1-6770-4eff-86de-25acc8de291a-d14z98.png',
          'https://utfs.io/f/d7df856b-be52-4fdf-b2ad-95389da9af8f-lh3hy5.png',
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15,
      },
      {
        name: 'Logitech Zone Wired Earbuds',
        slug: 'logitech-zone-wired-earbuds',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/1566f557-d7a3-46ce-b726-af177aa8010f-l6h1vy.png',
          'https://utfs.io/f/a8e8d282-b25f-4558-81cc-70c320ba3069-cth6ct.png',
          'https://utfs.io/f/7a97177b-6738-42da-9754-8251fb5a2ffc-4ghato.png',
          'https://utfs.io/f/62915624-9650-4284-976b-6971d884cd7f-3wikph.png',
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5,
      },
      {
        name: 'Hyperx Cloud Stinger 2',
        slug: 'hyperx-cloud-stinger-2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/fd841d14-ce03-4606-acd9-6781905d046c-oxvmyz.png',
          'https://utfs.io/f/7d000701-557a-4840-9473-31afd0f5ce87-ghx4a2.png',
          'https://utfs.io/f/f3876f94-e47b-48af-9b37-d7b5a8036f1e-81yll5.png',
          'https://utfs.io/f/aa86ca47-f44e-45d6-a5f5-c6dc9ae1c0a4-dzx3s.png',
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0,
      },
      {
        name: 'Razer Kraken X',
        slug: 'razer-kraken-x',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/5b487943-5bff-4015-8e17-109556adb175-pbckc3.png',
          'https://utfs.io/f/6de9cdc6-e245-4c31-89d2-cacb9850a45e-xocfv8.png',
          'https://utfs.io/f/a93171e4-a0b4-4f6b-b275-1ea38a77226c-szrqkr.png',
          'https://utfs.io/f/61c31ed0-5497-4da6-8495-3963aeaafce1-kmrv1m.png',
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0,
      },
    ]

    await prisma.product.createMany({ data: headphones })

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: 'Mousepads',
        slug: 'mousepads',
        imageUrl:
          'https://utfs.io/f/0d70c766-2ad8-41b8-8942-dce97cdbf413-9plgmd.png',
      },
    })

    const mousepads = [
      {
        name: 'Logitech Powerplay',
        slug: 'logitech-powerplay',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/ad2c11fb-bc1a-491b-b7ae-3d965bf9dfd5-on5ldd.png',
          'https://utfs.io/f/b9ba8544-4770-46a9-84f7-0620ff788955-x3442a.png',
          'https://utfs.io/f/fcbd97d4-c357-4295-84c0-e81bfafff139-ti1f7x.png',
          'https://utfs.io/f/e88fe49d-6b88-47e5-9f4c-cdcbc18afe79-l22wj0.png',
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10,
      },
      {
        name: 'Logitech Desk Mat',
        slug: 'logitech-desk-mat',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/0dab4489-01b0-4bc4-adaf-285a32d0453e-n9raei.png',
          'https://utfs.io/f/bb0e49fd-061a-4bf6-946c-4f1f7407182b-1nss0n.png',
          'https://utfs.io/f/0eb291a2-d004-4d59-9003-1c95ab919620-qlcufs.png',
          'https://utfs.io/f/ca243d83-345f-4227-aea4-79d3ae427ae6-ji7547.png',
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0,
      },
      {
        name: 'Logitech G740',
        slug: 'logitech-g740',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/96b64890-3883-43a0-9984-24280da02d42-culmza.png',
          'https://utfs.io/f/78fa620f-351a-406c-be01-9e5b47caa773-gv99k9.png',
          'https://utfs.io/f/049e812f-04e9-4cb6-852f-0f0c51628188-ofzvvc.png',
          'https://utfs.io/f/27b013ae-a8d6-4205-8d71-ab516faaaa4a-59v0o7.png',
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5,
      },
      {
        name: 'Logitech Mousepad Studio Series',
        slug: 'logitech-mousepad-studio-series',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/3e473f1a-56cc-488f-9e4c-535c5fc2da02-k45quc.png',
          'https://utfs.io/f/924eebda-25ee-467c-a851-ba42dac11044-dcr81v.png',
          'https://utfs.io/f/40d2e904-b609-4fb5-a6b0-887f1c1613aa-6lcp9e.png',
          'https://utfs.io/f/3f72bf69-c9bf-4c29-8842-8c79072b1e32-61tj3.png',
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15,
      },
      {
        name: 'Force One Skyhawk Dark',
        slug: 'force-one-skyhawk-dark',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/59247b11-7eff-481c-9d8e-19a11368472f-x7k2s6.png',
          'https://utfs.io/f/984fb298-52b9-48d6-b0ac-3b581f972a26-zcern9.png',
          'https://utfs.io/f/42a91aff-8f80-41ca-ac9d-6d2cd578a8b8-xjulgs.png',
          'https://utfs.io/f/37288a3d-23c1-4617-b2a5-ddb8fc0e9f5f-vezwlp.png',
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10,
      },
      {
        name: 'Force One Skyhawk Snow',
        slug: 'force-one-skyhawk-snow',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/f058dfdd-1812-466d-ae1c-8b2f743d24ff-x7tx5v.png',
          'https://utfs.io/f/39d8adb5-f8c2-4ff4-872d-d379431cdc33-zcom0y.png',
          'https://utfs.io/f/6cc000d7-8b90-4e5b-b82e-95ed43b63761-xjkr33.png',
          'https://utfs.io/f/ae37d6fb-57eb-4570-9ae9-1248e65b3cfc-veq280.png',
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5,
      },
    ]

    await prisma.product.createMany({ data: mousepads })

    const monitorsCategory = await prisma.category.create({
      data: {
        name: 'Monitores',
        slug: 'monitors',
        imageUrl:
          'https://utfs.io/f/2429bd7c-7386-46a0-8ee6-25e888b36e1a-5franb.png',
      },
    })

    const monitors = [
      {
        name: 'Dell S2421HN',
        slug: 'dell-s2421hn',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/522f20ab-d1df-4b52-92db-5193f400f923-l17xro.png',
          'https://utfs.io/f/ae31ae98-769b-409c-8a9a-670c6276e7ca-te7tat.png',
          'https://utfs.io/f/81ad8e38-286f-4964-aba6-75976accfd9f-x9wd56.png',
          'https://utfs.io/f/7944fc73-6dcd-4b44-9767-aa9f9d5ff588-owwhm1.png',
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15,
      },
      {
        name: 'Dell P2422H',
        slug: 'dell-p2422h',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/36ea3eff-ce5c-4d1f-87e1-0055b1ad6a92-rax9q4.png',
          'https://utfs.io/f/c079e7b5-b71b-4ac3-8604-f0566afee66c-w5lwxn.png',
          'https://utfs.io/f/caaea990-e788-4f95-964b-8109a72e3015-y0thty.png',
          'https://utfs.io/f/b25e8cd3-4d0b-4f2b-af00-97c400061cd3-t64umf.png',
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5,
      },
      {
        name: 'Dell P2723QE',
        slug: 'dell-p2723qe',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/b54bab44-59c3-42a9-9fd2-1b872c41686d-60cp0c.png',
          'https://utfs.io/f/69d2ec4a-1a05-4f5d-9ba8-314a9532c2b0-2cn6it.png',
          'https://utfs.io/f/c0843afa-6465-4fe4-a310-cc5bd725561e-apn21y.png',
          'https://utfs.io/f/b9aecaef-ec38-460e-b857-63321d306f06-j2mxl3.png',
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0,
      },
      {
        name: 'Dell S3422DWG',
        slug: 'dell-s3422dwg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/7356d312-5cf0-48f2-a0b9-dc807a1ab981-1wl9gu.png',
          'https://utfs.io/f/b49e6f2d-dae2-4ed3-9863-0009733fe1db-qu5bvz.png',
          'https://utfs.io/f/bd0f5be8-37ac-4486-8f23-1617dd031876-j9eno0.png',
          'https://utfs.io/f/dc33cf86-baa2-4514-9fe0-fc9a59b62d25-5o5er5.png',
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0,
      },
      {
        name: 'Dell S3222DGM',
        slug: 'dell-s3222dgm',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/648f4a36-13e2-4b92-90c8-6d2b196209bb-yi0au.png',
          'https://utfs.io/f/3903cf94-f132-402b-90ec-2ec5daa10f1d-pw22pz.png',
          'https://utfs.io/f/b96904d7-f7f1-4665-a841-fbaaa221fc10-k7hwu0.png',
          'https://utfs.io/f/b465ec7e-e724-4aed-88a9-d208e8285ce6-4q25l5.png',
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0,
      },
      {
        name: 'Dell AW2524HF',
        slug: 'dell-aw2524hf',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/591b2476-a1ce-4e01-9707-2764f3e0a8a5-al6r5z.png',
          'https://utfs.io/f/3f91115a-e660-489f-a627-6df9216d17df-zid8e0.png',
          'https://utfs.io/f/52b800ec-0ea1-4602-9ae1-bb6a802ccfff-akt5yv.png',
          'https://utfs.io/f/48ebaef7-0392-42c7-8467-f5aee1ea6e1b-ecqwga.png',
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10,
      },
    ]

    await prisma.product.createMany({ data: monitors })

    const speakersCategory = await prisma.category.create({
      data: {
        name: 'Speakers',
        slug: 'speakers',
        imageUrl:
          'https://utfs.io/f/a395a062-6f8e-4a75-b6d5-024515a76467-zax8ks.png',
      },
    })

    const speakers = [
      {
        name: 'Logitech Surround Sound Z607',
        slug: 'logitech-surround-sound-z607',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/870989fa-08c3-4ef8-afd9-3cbf3c84b40f-b5j8co.png',
          'https://utfs.io/f/8ed76397-1b71-4508-9a75-56a8e81f1cd3-4e4pk7.png',
          'https://utfs.io/f/08a887a6-7cf0-41aa-9308-6d8c75002750-2d9t8a.png',
          'https://utfs.io/f/5724505f-5bab-4776-8109-24cee7f68b64-94oc0r.png',
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5,
      },
      {
        name: 'Logitech Dock',
        slug: 'logitech-dock',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/8ec86608-675a-49aa-94ca-6a828ba9c046-cukwpp.png',
          'https://utfs.io/f/d4e4ca36-4697-4e52-a322-e91ef29f7aaa-gv9ztu.png',
          'https://utfs.io/f/b6943041-aa44-44c8-bd29-48790c92a18c-ofz5lr.png',
          'https://utfs.io/f/fa754b56-84f6-439e-b33f-3ccf4f5fe496-59vqxs.png',
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15,
      },
      {
        name: 'Sony SA-Z9R Speakers',
        slug: 'sony-sa-z9r-speakers',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/4d76d7d7-9218-4cd3-83e8-3d0074886c87-o2pxdo.png',
          'https://utfs.io/f/60bc8963-b8f8-45e2-9867-d6dd60929183-j81a65.png',
          'https://utfs.io/f/3f4ba540-4de4-453d-9339-dc104cc74957-edcmym.png',
          'https://utfs.io/f/a0118e6d-4c32-407f-9d5a-c20f4ea8aa72-9inzr3.png',
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10,
      },
      {
        name: 'Sony XB43 Extra Bass',
        slug: 'sony-xb43-extra-bass',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/a0b3a20d-0c0a-433f-a744-68905d09dd54-gxgbj0.png',
          'https://utfs.io/f/d951516a-db01-4ed2-8ded-e942ae293716-5g9sx1.png',
          'https://utfs.io/f/76dc5b93-ec69-4915-b15f-4451baa1cf30-rtzxd2.png',
          'https://utfs.io/f/b3acd2e4-d44c-492e-81c8-d5a21709119a-kte061.png',
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0,
      },
      {
        name: 'Sony XB23 Extra Bass',
        slug: 'sony-xb23-extra-bass',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/a6a83cb9-68cd-48a2-ab50-2aa6f660531d-f1tve5.png',
          'https://utfs.io/f/25df3969-c6b9-4365-b40e-3cfed1c2453f-q9fa1g.png',
          'https://utfs.io/f/4ca41f92-24f0-4687-ac0d-5e728d29f0d5-3gfmi3.png',
          'https://utfs.io/f/c7ba6b25-c29d-4b31-894d-4e52557e3573-x6aj1m.png',
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0,
      },
      {
        name: 'Sony HT-S200F Soundbar',
        slug: 'sony-ht-s200f-soundbar',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://utfs.io/f/35f1ebed-438c-477a-91d0-3b93802e38de-uk14e7.png',
          'https://utfs.io/f/60768473-e107-43ee-8c61-5eb30b44e8ed-wovt9a.png',
          'https://utfs.io/f/89ba25b6-709c-4cef-826f-aa28b21f624e-ytqi4d.png',
          'https://utfs.io/f/6cdb9b44-9d1a-427f-8ced-dbd3334f4bd2-y2iuzo.png',
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0,
      },
    ]

    await prisma.product.createMany({ data: speakers })

    console.log('Seed completed successfully')
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
