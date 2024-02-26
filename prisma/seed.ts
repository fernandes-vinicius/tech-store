import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: `Mouses`,
        slug: `mouses`,
        imageUrl: `https://utfs.io/f/0538be70-2b6d-48ff-9458-86d7ab6ee692-ho0xw2.png`,
      },
    })

    const mouses = [
      {
        name: `G Pro X Superlight`,
        slug: `g-pro-x-superlight`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.`,
        imageUrls: [
          `https://utfs.io/f/c8e0eb10-c994-44e1-800d-705edaf58a6f-ezqvue.png`,
          `https://utfs.io/f/c8e0eb10-c994-44e1-800d-705edaf58a6f-ezqvue.png`,
          `https://utfs.io/f/c8e0eb10-c994-44e1-800d-705edaf58a6f-ezqvue.png`,
          `https://utfs.io/f/c8e0eb10-c994-44e1-800d-705edaf58a6f-ezqvue.png`,
        ],
        basePrice: 680,
        categoryId: mousesCategory.id,
        discountPercentage: 55, // 55% discount
      },
      {
        name: `Logitech MX Master 3s`,
        slug: `logitech-mx-master-3s`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.`,
        imageUrls: [
          `https://utfs.io/f/b5d7c2e3-8a94-4444-913d-f1fd8e4d2db6-idjntb.png`,
          `https://utfs.io/f/ed4ef110-cad2-49d6-b952-3ae66ff7348b-w2grqo.png`,
          `https://utfs.io/f/53268fe7-f5dc-40d2-832a-3ac2c18d02e6-bhd5bj.png`,
          `https://utfs.io/f/5c56e8f8-46c4-4e40-abdc-3ff3500af463-93qh3m.png`,
        ],
        basePrice: 719.9,
        categoryId: mousesCategory.id,
        discountPercentage: 35, // 35% discount
      },
      {
        name: `Logitech M720 Triathlon`,
        slug: `logitech-m720-triathlon`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.`,
        imageUrls: [
          `https://utfs.io/f/6eb291f6-cc55-4336-b477-103bb8c15230-o540sy.png`,
          `https://utfs.io/f/6eb291f6-cc55-4336-b477-103bb8c15230-o540sy.png`,
          `https://utfs.io/f/6eb291f6-cc55-4336-b477-103bb8c15230-o540sy.png`,
          `https://utfs.io/f/6eb291f6-cc55-4336-b477-103bb8c15230-o540sy.png`,
        ],
        basePrice: 352.93,
        categoryId: mousesCategory.id,
        discountPercentage: 26, // 26% discount
      },
      {
        name: `Hyperx Pulsefire Dart`,
        slug: `hyperx-pulsefire-dart`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.`,
        imageUrls: [
          `https://utfs.io/f/644d821a-067e-4220-aee5-c5222186ebc1-bd2hk2.png`,
          `https://utfs.io/f/644d821a-067e-4220-aee5-c5222186ebc1-bd2hk2.png`,
          `https://utfs.io/f/644d821a-067e-4220-aee5-c5222186ebc1-bd2hk2.png`,
          `https://utfs.io/f/644d821a-067e-4220-aee5-c5222186ebc1-bd2hk2.png`,
        ],
        basePrice: 705.87,
        categoryId: mousesCategory.id,
        discountPercentage: 22, // 22% discount
      },
      {
        name: `G305 Lightspeed`,
        slug: `g305-lightspeed`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.`,
        imageUrls: [
          `https://utfs.io/f/91c7a922-da80-48ac-b92f-30088fa4063a-sy3asz.png`,
          `https://utfs.io/f/91c7a922-da80-48ac-b92f-30088fa4063a-sy3asz.png`,
          `https://utfs.io/f/91c7a922-da80-48ac-b92f-30088fa4063a-sy3asz.png`,
          `https://utfs.io/f/91c7a922-da80-48ac-b92f-30088fa4063a-sy3asz.png`,
        ],
        basePrice: 376.46,
        categoryId: mousesCategory.id,
        discountPercentage: 20, // 20% discount
      },
      {
        name: `Razer Basilisk Ultimate`,
        slug: `razer-basilisk-ultimate`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.`,
        imageUrls: [
          `https://utfs.io/f/ed034c76-42d0-47f6-9fe8-9ebb4c29f513-mb8tb3.png`,
          `https://utfs.io/f/ed034c76-42d0-47f6-9fe8-9ebb4c29f513-mb8tb3.png`,
          `https://utfs.io/f/ed034c76-42d0-47f6-9fe8-9ebb4c29f513-mb8tb3.png`,
          `https://utfs.io/f/ed034c76-42d0-47f6-9fe8-9ebb4c29f513-mb8tb3.png`,
        ],
        basePrice: 809.99,
        categoryId: mousesCategory.id,
        discountPercentage: 0, // 0% discount
      },
    ]

    await prisma.product.createMany({
      data: mouses,
    })

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: `Teclados`,
        slug: `keyboards`,
        imageUrl: `https://utfs.io/f/f33c6dc5-0c75-4493-b6a8-1a32a28ed21b-pv4uj8.png`,
      },
    })

    const keyboards = [
      {
        name: `Logitech MX Keys Mini`,
        slug: `logitech-mx-keys-mini`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.`,
        imageUrls: [
          `https://utfs.io/f/df5e7ef6-b5a2-45ae-b25e-1829d3f8edaa-ayc11c.png`,
          `https://utfs.io/f/df5e7ef6-b5a2-45ae-b25e-1829d3f8edaa-ayc11c.png`,
          `https://utfs.io/f/df5e7ef6-b5a2-45ae-b25e-1829d3f8edaa-ayc11c.png`,
          `https://utfs.io/f/df5e7ef6-b5a2-45ae-b25e-1829d3f8edaa-ayc11c.png`,
        ],
        basePrice: 719.99,
        categoryId: keyboardsCategory.id,
        discountPercentage: 30, // 30% discount
      },
      {
        name: `Epomaker TH80`,
        slug: `epomaker-th80`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.`,
        imageUrls: [
          `https://utfs.io/f/8a7f38b9-4726-4177-82fa-10d25a367835-joofi1.png`,
          `https://utfs.io/f/8a7f38b9-4726-4177-82fa-10d25a367835-joofi1.png`,
          `https://utfs.io/f/8a7f38b9-4726-4177-82fa-10d25a367835-joofi1.png`,
          `https://utfs.io/f/8a7f38b9-4726-4177-82fa-10d25a367835-joofi1.png`,
        ],
        basePrice: 882.57,
        categoryId: keyboardsCategory.id,
        discountPercentage: 14, // 14% discount
      },
      {
        name: `Logitech MX Keys S`,
        slug: `logitech-mx-keys-s`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.`,
        imageUrls: [
          `https://utfs.io/f/1147cc4d-4082-4df5-8ab3-44bcf2f4af7f-fuj63u.png`,
          `https://utfs.io/f/1147cc4d-4082-4df5-8ab3-44bcf2f4af7f-fuj63u.png`,
          `https://utfs.io/f/1147cc4d-4082-4df5-8ab3-44bcf2f4af7f-fuj63u.png`,
          `https://utfs.io/f/1147cc4d-4082-4df5-8ab3-44bcf2f4af7f-fuj63u.png`,
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: keyboards,
    })

    const headphonesCategory = await prisma.category.create({
      data: {
        name: `Fones`,
        slug: `headphones`,
        imageUrl: `https://utfs.io/f/cf78f4da-383e-48a2-96ba-d4876184f0b1-x99mxn.png`,
      },
    })

    const headphones = [
      {
        name: `Logitech Zone Vibe 100`,
        slug: `logitech-zone-vibe-100`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.`,
        imageUrls: [
          `https://utfs.io/f/51161f87-c03c-4640-85be-8904d344279f-g12t9z.png`,
          `https://utfs.io/f/51161f87-c03c-4640-85be-8904d344279f-g12t9z.png`,
          `https://utfs.io/f/51161f87-c03c-4640-85be-8904d344279f-g12t9z.png`,
          `https://utfs.io/f/51161f87-c03c-4640-85be-8904d344279f-g12t9z.png`,
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: `Logitech Pro X 2 Lightspeed`,
        slug: `logitech-pro-x-2-lightspeed`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.`,
        imageUrls: [
          `https://utfs.io/f/1fd20ec9-b97c-4120-9e10-e3fed1430709-l7dmab.png`,
          `https://utfs.io/f/1fd20ec9-b97c-4120-9e10-e3fed1430709-l7dmab.png`,
          `https://utfs.io/f/1fd20ec9-b97c-4120-9e10-e3fed1430709-l7dmab.png`,
          `https://utfs.io/f/1fd20ec9-b97c-4120-9e10-e3fed1430709-l7dmab.png`,
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: `Logitech Astro A30`,
        slug: `logitech-astro-a30`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.`,
        imageUrls: [
          `https://utfs.io/f/e212daa2-1017-420c-acc6-be40ee931507-2knd0i.png`,
          `https://utfs.io/f/e212daa2-1017-420c-acc6-be40ee931507-2knd0i.png`,
          `https://utfs.io/f/e212daa2-1017-420c-acc6-be40ee931507-2knd0i.png`,
          `https://utfs.io/f/e212daa2-1017-420c-acc6-be40ee931507-2knd0i.png`,
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: `Logitech Zone Wired Earbuds`,
        slug: `logitech-zone-wired-earbuds`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.`,
        imageUrls: [
          `https://utfs.io/f/cac52969-71d5-4b4d-a9f5-c7e0ebb18d31-z1j8bp.png`,
          `https://utfs.io/f/cac52969-71d5-4b4d-a9f5-c7e0ebb18d31-z1j8bp.png`,
          `https://utfs.io/f/cac52969-71d5-4b4d-a9f5-c7e0ebb18d31-z1j8bp.png`,
          `https://utfs.io/f/cac52969-71d5-4b4d-a9f5-c7e0ebb18d31-z1j8bp.png`,
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 5% discount
      },
    ]

    await prisma.product.createMany({
      data: headphones,
    })

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: `Mousepads`,
        slug: `mousepads`,
        imageUrl: `https://utfs.io/f/9143bcaf-e80a-4254-98fb-429b1405cd36-9plgmd.png`,
      },
    })

    const mousepads = [
      {
        name: `Logitech Powerplay`,
        slug: `logitech-powerplay`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.`,
        imageUrls: [
          `https://utfs.io/f/5e3020d9-4fb0-4fdc-a997-16f74c557ed5-v2l0ih.png`,
          `https://utfs.io/f/5e3020d9-4fb0-4fdc-a997-16f74c557ed5-v2l0ih.png`,
          `https://utfs.io/f/5e3020d9-4fb0-4fdc-a997-16f74c557ed5-v2l0ih.png`,
          `https://utfs.io/f/5e3020d9-4fb0-4fdc-a997-16f74c557ed5-v2l0ih.png`,
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: `Logitech Desk Mat`,
        slug: `logitech-desk-mat`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.`,
        imageUrls: [
          `https://utfs.io/f/6758cc05-dc58-48a3-a1ec-490aea5d02c5-9qaqrm.png`,
          `https://utfs.io/f/6758cc05-dc58-48a3-a1ec-490aea5d02c5-9qaqrm.png`,
          `https://utfs.io/f/6758cc05-dc58-48a3-a1ec-490aea5d02c5-9qaqrm.png`,
          `https://utfs.io/f/6758cc05-dc58-48a3-a1ec-490aea5d02c5-9qaqrm.png`,
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0, // 0% discount
      },
    ]

    await prisma.product.createMany({
      data: mousepads,
    })

    const monitorsCategory = await prisma.category.create({
      data: {
        name: `Monitores`,
        slug: `monitors`,
        imageUrl: `https://utfs.io/f/84c66b24-85cf-4224-96e6-1558d645f27b-5franb.png`,
      },
    })

    const monitors = [
      {
        name: `Dell S2421HN`,
        slug: `dell-s2421hn`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.`,
        imageUrls: [
          `https://utfs.io/f/78a1f6be-3dd7-4dbc-961b-813782c68489-jhn02a.png`,
          `https://utfs.io/f/78a1f6be-3dd7-4dbc-961b-813782c68489-jhn02a.png`,
          `https://utfs.io/f/78a1f6be-3dd7-4dbc-961b-813782c68489-jhn02a.png`,
          `https://utfs.io/f/78a1f6be-3dd7-4dbc-961b-813782c68489-jhn02a.png`,
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15, // 15% discount
      },
    ]

    await prisma.product.createMany({
      data: monitors,
    })

    const speakersCategory = await prisma.category.create({
      data: {
        name: `Speakers`,
        slug: `speakers`,
        imageUrl: `https://utfs.io/f/974f7f6b-a1c9-4c50-bcfa-d6c10deea008-zax8ks.png`,
      },
    })

    const speakers = [
      {
        name: `Logitech Surround Sound Z607`,
        slug: `logitech-surround-sound-z607`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.`,
        imageUrls: [
          `https://utfs.io/f/835addd8-36f6-45d9-9eda-363ef642999a-65v17i.png`,
          `https://utfs.io/f/835addd8-36f6-45d9-9eda-363ef642999a-65v17i.png`,
          `https://utfs.io/f/835addd8-36f6-45d9-9eda-363ef642999a-65v17i.png`,
          `https://utfs.io/f/835addd8-36f6-45d9-9eda-363ef642999a-65v17i.png`,
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5, // 5% discount
      },
    ]

    await prisma.product.createMany({
      data: speakers,
    })

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
