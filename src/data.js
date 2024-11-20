const data = [
  // {
  //   id: 1048,
  //   brand: 'colourpop',
  //   name: 'Lippie Pencil',
  //   price: '5.0',
  //   price_sign: '$',
  //   currency: 'CAD',
  //   image_link:
  //     'https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769',
  //   product_link: 'https://colourpop.com/collections/lippie-pencil',
  //   website_link: 'https://colourpop.com',
  //   description:
  //     'Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!',
  //   rating: null,
  //   category: 'pencil',
  //   product_type: 'lip_liner',
  //   tag_list: ['cruelty free', 'Vegan'],
  //   created_at: '2018-07-08T23:45:08.056Z',
  //   updated_at: '2018-07-09T00:53:23.301Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1048.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/048/original/open-uri20180708-4-13okqci?1531093614',
  //   product_colors: [
  //     {
  //       hex_value: '#B28378',
  //       colour_name: 'BFF Pencil'
  //     },
  //     {
  //       hex_value: '#A36B5E',
  //       colour_name: '951 Pencil'
  //     },
  //     {
  //       hex_value: '#966A60',
  //       colour_name: 'Beeper Pencil'
  //     },
  //     {
  //       hex_value: '#8F5954',
  //       colour_name: 'Oh Snap Pencil'
  //     },
  //     {
  //       hex_value: '#975348',
  //       colour_name: 'Curvii Pencil'
  //     },
  //     {
  //       hex_value: '#865B69',
  //       colour_name: 'Lumiere Pencil'
  //     },
  //     {
  //       hex_value: '#8E474D',
  //       colour_name: 'Bumble Pencil'
  //     },
  //     {
  //       hex_value: '#5F2820',
  //       colour_name: 'BFF Pencil 3'
  //     },
  //     {
  //       hex_value: '#C095BC',
  //       colour_name: 'Brills Pencil'
  //     },
  //     {
  //       hex_value: '#743A6A',
  //       colour_name: 'Are N Be Pencil'
  //     },
  //     {
  //       hex_value: '#965564',
  //       colour_name: 'Contempo Pencil'
  //     },
  //     {
  //       hex_value: '#BF2C7E',
  //       colour_name: 'Heart On Pencil'
  //     },
  //     {
  //       hex_value: '#CE435D',
  //       colour_name: 'Trixie Pencil'
  //     },
  //     {
  //       hex_value: '#DA6952',
  //       colour_name: 'Chi Chi Pencil'
  //     },
  //     {
  //       hex_value: '#A33C37',
  //       colour_name: 'Clique Pencil'
  //     },
  //     {
  //       hex_value: '#C23D3C',
  //       colour_name: 'Frenchie Pencil'
  //     },
  //     {
  //       hex_value: '#AF4051',
  //       colour_name: 'Bossy Pencil'
  //     },
  //     {
  //       hex_value: '#914B4C',
  //       colour_name: 'Wild Nothing Pencil'
  //     },
  //     {
  //       hex_value: '#6D414B',
  //       colour_name: 'Dopey Pencil'
  //     },
  //     {
  //       hex_value: '#4D2D28',
  //       colour_name: 'Toolips Pencil'
  //     },
  //     {
  //       hex_value: '#361927',
  //       colour_name: 'Mamacita Pencil'
  //     },
  //     {
  //       hex_value: '#714B41',
  //       colour_name: 'Pitch Pencil'
  //     },
  //     {
  //       hex_value: '#762F50',
  //       colour_name: 'LBB Pencil'
  //     },
  //     {
  //       hex_value: '#8C4A47',
  //       colour_name: 'Love Bug Pencil'
  //     },
  //     {
  //       hex_value: '#702E2D',
  //       colour_name: 'Poison Pencil'
  //     },
  //     {
  //       hex_value: '#93283C',
  //       colour_name: 'Bichette Pencil'
  //     },
  //     {
  //       hex_value: '#653E44',
  //       colour_name: 'Dukes Pencil'
  //     },
  //     {
  //       hex_value: '#5C3357',
  //       colour_name: 'Leather Pencil'
  //     },
  //     {
  //       hex_value: '#242225',
  //       colour_name: 'Bull Chic Pencil'
  //     },
  //     {
  //       hex_value: '#B5716A',
  //       colour_name: 'Brink Pencil'
  //     },
  //     {
  //       hex_value: '#B0516F',
  //       colour_name: 'I Heart This Pencil'
  //     },
  //     {
  //       hex_value: '#542328',
  //       colour_name: 'Ellarie Pencil'
  //     },
  //     {
  //       hex_value: '#DFAC9B',
  //       colour_name: 'Toy Pencil'
  //     },
  //     {
  //       hex_value: '#AB7164',
  //       colour_name: 'BFF Pencil 2'
  //     }
  //   ]
  // },
  // {
  //   id: 1047,
  //   brand: 'colourpop',
  //   name: 'Blotted Lip',
  //   price: '5.5',
  //   price_sign: '$',
  //   currency: 'CAD',
  //   image_link:
  //     'https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076',
  //   product_link:
  //     'https://colourpop.com/collections/lippie-stix?filter=blotted-lip',
  //   website_link: 'https://colourpop.com',
  //   description:
  //     'Blotted Lip Sheer matte lipstick that creates the perfect popsicle pout! Formula is lightweight, matte and buildable for light to medium coverage.',
  //   rating: null,
  //   category: 'lipstick',
  //   product_type: 'lipstick',
  //   tag_list: ['cruelty free', 'Vegan'],
  //   created_at: '2018-07-08T22:01:20.178Z',
  //   updated_at: '2018-07-09T00:53:23.287Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1047.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/047/original/open-uri20180708-4-e7idod?1531087336',
  //   product_colors: [
  //     {
  //       hex_value: '#b72227',
  //       colour_name: "Bee's Knees"
  //     },
  //     {
  //       hex_value: '#BB656B',
  //       colour_name: 'Brain Freeze'
  //     },
  //     {
  //       hex_value: '#8E4140',
  //       colour_name: 'Drip'
  //     },
  //     {
  //       hex_value: '#A12A33',
  //       colour_name: 'On a Stick'
  //     },
  //     {
  //       hex_value: '#904550',
  //       colour_name: 'Ice Cube'
  //     },
  //     {
  //       hex_value: '#452222',
  //       colour_name: 'Lolly'
  //     },
  //     {
  //       hex_value: '#7C3F35',
  //       colour_name: 'Candyfloss'
  //     }
  //   ]
  // },
  // {
  //   id: 1046,
  //   brand: 'colourpop',
  //   name: 'Lippie Stix',
  //   price: '5.5',
  //   price_sign: '$',
  //   currency: 'CAD',
  //   image_link:
  //     'https://cdn.shopify.com/s/files/1/1338/0845/collections/blottedlip-lippie-stix_grande.jpg?v=1512588803',
  //   product_link: 'https://colourpop.com/collections/lippie-stix',
  //   website_link: 'https://colourpop.com',
  //   description:
  //     'Lippie Stix Formula contains Vitamin E, Mango, Avocado, and Shea butter for added comfort and moisture. None of our Lippie formulas contain any nasty ingredients like Parabens or Sulfates.',
  //   rating: null,
  //   category: 'lipstick',
  //   product_type: 'lipstick',
  //   tag_list: ['cruelty free', 'Vegan'],
  //   created_at: '2018-07-08T21:47:49.858Z',
  //   updated_at: '2018-07-09T00:53:23.274Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1046.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/046/original/open-uri20180708-4-1f333k1?1531086651',
  //   product_colors: [
  //     {
  //       hex_value: '#F2DEC3',
  //       colour_name: 'Fair 05'
  //     },
  //     {
  //       hex_value: '#793C36',
  //       colour_name: 'Ziggie'
  //     },
  //     {
  //       hex_value: '#723739',
  //       colour_name: 'Goldie'
  //     },
  //     {
  //       hex_value: '#BF3A30',
  //       colour_name: 'Love Life'
  //     },
  //     {
  //       hex_value: '#94372D',
  //       colour_name: 'Who Run this'
  //     },
  //     {
  //       hex_value: '#9E574D',
  //       colour_name: 'Aquarius'
  //     },
  //     {
  //       hex_value: '#C68176',
  //       colour_name: 'Brink'
  //     },
  //     {
  //       hex_value: '#AA6968',
  //       colour_name: 'Cami'
  //     },
  //     {
  //       hex_value: '#E28474',
  //       colour_name: 'Sike'
  //     },
  //     {
  //       hex_value: '#9A2B24',
  //       colour_name: 'Fly-Fi'
  //     },
  //     {
  //       hex_value: '#B97271',
  //       colour_name: 'Goal Digger'
  //     },
  //     {
  //       hex_value: '#BA7378',
  //       colour_name: 'After Shock'
  //     },
  //     {
  //       hex_value: '#D68B99',
  //       colour_name: 'Little Tings'
  //     },
  //     {
  //       hex_value: '#C07D6B',
  //       colour_name: 'Ink Blot'
  //     },
  //     {
  //       hex_value: '#A3595E',
  //       colour_name: 'Candy Paint'
  //     },
  //     {
  //       hex_value: '#5D2318',
  //       colour_name: 'Ellarie'
  //     },
  //     {
  //       hex_value: '#C17773',
  //       colour_name: 'Daydream'
  //     },
  //     {
  //       hex_value: '#C08892',
  //       colour_name: 'Oh Snap'
  //     },
  //     {
  //       hex_value: '#BC6E6B',
  //       colour_name: 'Faded'
  //     },
  //     {
  //       hex_value: '#CF8D98',
  //       colour_name: 'Bound'
  //     },
  //     {
  //       hex_value: '#762554',
  //       colour_name: 'Party Foul'
  //     },
  //     {
  //       hex_value: '#B67367',
  //       colour_name: 'Parker'
  //     },
  //     {
  //       hex_value: '#852528',
  //       colour_name: 'Bichette'
  //     },
  //     {
  //       hex_value: '#B86A82',
  //       colour_name: 'Sauce'
  //     },
  //     {
  //       hex_value: '#B75E59',
  //       colour_name: 'Topanga'
  //     },
  //     {
  //       hex_value: '#EA5151',
  //       colour_name: 'Lullaby'
  //     },
  //     {
  //       hex_value: '#C08586',
  //       colour_name: 'Contempo'
  //     },
  //     {
  //       hex_value: '#B82485',
  //       colour_name: 'Heart on'
  //     },
  //     {
  //       hex_value: '#C5314F',
  //       colour_name: 'I Heart this Lippie'
  //     },
  //     {
  //       hex_value: '#8F6557',
  //       colour_name: 'Tootsi'
  //     },
  //     {
  //       hex_value: '#AF7564',
  //       colour_name: 'Cookie'
  //     },
  //     {
  //       hex_value: '#AA4E79',
  //       colour_name: 'Persuasion'
  //     },
  //     {
  //       hex_value: '#442A26',
  //       colour_name: 'Pitch'
  //     },
  //     {
  //       hex_value: '#5C4761',
  //       colour_name: 'Leather'
  //     },
  //     {
  //       hex_value: '#D12C35',
  //       colour_name: 'Frenchie'
  //     },
  //     {
  //       hex_value: '#AB3E61',
  //       colour_name: 'Mirror, Mirror'
  //     },
  //     {
  //       hex_value: '#621F20',
  //       colour_name: 'Poison'
  //     },
  //     {
  //       hex_value: '#623343',
  //       colour_name: 'LBB'
  //     },
  //     {
  //       hex_value: '#864740',
  //       colour_name: 'Grunge'
  //     },
  //     {
  //       hex_value: '#C5282D',
  //       colour_name: 'Bossy'
  //     },
  //     {
  //       hex_value: '#DC4A3C',
  //       colour_name: 'Chi Chi'
  //     },
  //     {
  //       hex_value: '#CB2931',
  //       colour_name: 'Trust Me'
  //     },
  //     {
  //       hex_value: '#AB223E',
  //       colour_name: "Poppin'"
  //     },
  //     {
  //       hex_value: '#A05F6A',
  //       colour_name: 'Lumiere'
  //     },
  //     {
  //       hex_value: '#763A31',
  //       colour_name: 'Taurus'
  //     },
  //     {
  //       hex_value: '#975450',
  //       colour_name: 'Kapish'
  //     }
  //   ]
  // },
  // {
  //   id: 1045,
  //   brand: 'colourpop',
  //   name: 'No Filter Foundation',
  //   price: '12.0',
  //   price_sign: '$',
  //   currency: 'CAD',
  //   image_link:
  //     'https://cdn.shopify.com/s/files/1/1338/0845/products/foundations-lineup_800x1200.jpg?v=1528927785',
  //   product_link: 'https://colourpop.com/products/no-filter-matte-foundation',
  //   website_link: 'https://colourpop.com/products/no-filter-matte-foundation',
  //   description:
  //     'Developed for the Selfie Age, our buildable full coverage, natural matte foundation delivers flawless looking skin from day-to-night. The oil-free, lightweight formula blends smoothly and is easily customizable to create the coverage you want. Build it up or sheer it out, it was developed with innovative soft-blurring pigments to deliver true color while looking and feeling natural. The lockable pump is easy to use and keeps your routine mess-free! As always, 100% cruelty-free and vegan.',
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'foundation',
  //   tag_list: ['cruelty free', 'Vegan'],
  //   created_at: '2018-07-08T18:22:25.273Z',
  //   updated_at: '2018-07-09T00:53:23.313Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1045.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/045/original/open-uri20180708-4-4bvqii?1531074237',
  //   product_colors: [
  //     {
  //       hex_value: '#F2DEC3',
  //       colour_name: 'Fair 05'
  //     },
  //     {
  //       hex_value: '#F3DAC4',
  //       colour_name: 'Fair 10'
  //     },
  //     {
  //       hex_value: '#F1D9C0',
  //       colour_name: 'Fair 15'
  //     },
  //     {
  //       hex_value: '#EFD2BA',
  //       colour_name: 'Fair 20'
  //     },
  //     {
  //       hex_value: '#F1D7B3',
  //       colour_name: 'Fair 25'
  //     },
  //     {
  //       hex_value: '#EDD0B4',
  //       colour_name: 'Fair 30'
  //     },
  //     {
  //       hex_value: '#D9B295',
  //       colour_name: 'Fair 35'
  //     },
  //     {
  //       hex_value: '#CAA17B',
  //       colour_name: 'Light 45'
  //     },
  //     {
  //       hex_value: '#E8C2A4',
  //       colour_name: 'Light 50'
  //     },
  //     {
  //       hex_value: '#E8C3A6',
  //       colour_name: 'Light 55'
  //     },
  //     {
  //       hex_value: '#E9C2A4',
  //       colour_name: 'Light 60'
  //     },
  //     {
  //       hex_value: '#E1B68E',
  //       colour_name: 'Light 65'
  //     },
  //     {
  //       hex_value: '#E4C096',
  //       colour_name: 'Light 70'
  //     },
  //     {
  //       hex_value: '#E0B492',
  //       colour_name: 'Light 75'
  //     },
  //     {
  //       hex_value: '#E0C1A1',
  //       colour_name: 'Medium 80'
  //     },
  //     {
  //       hex_value: '#E4C1A9',
  //       colour_name: 'Medium 85'
  //     },
  //     {
  //       hex_value: '#E5C6A8',
  //       colour_name: 'Medium 90'
  //     },
  //     {
  //       hex_value: '#D3A784',
  //       colour_name: 'Medium 95'
  //     },
  //     {
  //       hex_value: '#E2C2A1',
  //       colour_name: 'Medium 100'
  //     },
  //     {
  //       hex_value: '#D7B297',
  //       colour_name: 'Medium 105'
  //     },
  //     {
  //       hex_value: '#D4B194',
  //       colour_name: 'Medium 110'
  //     },
  //     {
  //       hex_value: '#DCBFA5',
  //       colour_name: 'Medium Dark 115'
  //     },
  //     {
  //       hex_value: '#D7B59A',
  //       colour_name: 'Medium Dark 120'
  //     },
  //     {
  //       hex_value: '#C69676',
  //       colour_name: 'Medium Dark 125'
  //     },
  //     {
  //       hex_value: '#D9B498',
  //       colour_name: 'Medium Dark 130'
  //     },
  //     {
  //       hex_value: '#D9B191',
  //       colour_name: 'Medium Dark 135'
  //     },
  //     {
  //       hex_value: '#D1AA90',
  //       colour_name: 'Medium Dark 140'
  //     },
  //     {
  //       hex_value: '#BF8E63',
  //       colour_name: 'Medium Dark 145'
  //     },
  //     {
  //       hex_value: '#C69B83',
  //       colour_name: 'Dark 150'
  //     },
  //     {
  //       hex_value: '#C29879',
  //       colour_name: 'Dark 155'
  //     },
  //     {
  //       hex_value: '#B99179',
  //       colour_name: 'Dark 160'
  //     },
  //     {
  //       hex_value: '#C39981',
  //       colour_name: 'Dark 165'
  //     },
  //     {
  //       hex_value: '#B99078',
  //       colour_name: 'Dark 170'
  //     },
  //     {
  //       hex_value: '#B6927D',
  //       colour_name: 'Dark 175'
  //     },
  //     {
  //       hex_value: '#B38A79',
  //       colour_name: 'Dark 180'
  //     },
  //     {
  //       hex_value: '#AC8875',
  //       colour_name: 'Deep Dark 115'
  //     },
  //     {
  //       hex_value: '#A07967',
  //       colour_name: 'Deep Dark 115'
  //     },
  //     {
  //       hex_value: '#946D5A',
  //       colour_name: 'Deep Dark 115'
  //     },
  //     {
  //       hex_value: '#865F4D',
  //       colour_name: 'Deep Dark 115'
  //     },
  //     {
  //       hex_value: '#896A5A',
  //       colour_name: 'Deep Dark 80'
  //     },
  //     {
  //       hex_value: '#795F52',
  //       colour_name: 'Deep Dark 80'
  //     },
  //     {
  //       hex_value: '#6B5148',
  //       colour_name: 'Deep Dark 80'
  //     }
  //   ]
  // },
  // {
  //   id: 1044,
  //   brand: 'boosh',
  //   name: 'Lipstick',
  //   price: '26.0',
  //   price_sign: '$',
  //   currency: 'CAD',
  //   image_link:
  //     'https://cdn.shopify.com/s/files/1/1016/3243/products/LIPBALM_LID_grande.jpg?v=1496848378',
  //   product_link: 'https://www.boosh.ca/collections/all',
  //   website_link: 'https://www.boosh.ca/',
  //   description:
  //     'All of our products are free from lead and heavy metals, parabens, phthalates, artificial colourants, and synthetic fragrances.  Boosh lipstick glides on smoothly for clean & protective SPF coverage. They are filled with hydrating oils and butters to preserve and enhance your lips natural surface. Organic sweet orange oil gives a light and cheerful scent.',
  //   rating: null,
  //   category: 'lipstick',
  //   product_type: 'lipstick',
  //   tag_list: ['Chemical Free', 'Organic'],
  //   created_at: '2018-07-08T17:32:28.088Z',
  //   updated_at: '2018-09-02T22:52:06.669Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1044.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/044/original/data?1531071233',
  //   product_colors: [
  //     {
  //       hex_value: '#CB4975',
  //       colour_name: 'Babs'
  //     },
  //     {
  //       hex_value: '#B6636F',
  //       colour_name: 'Bobbie'
  //     },
  //     {
  //       hex_value: '#B37072',
  //       colour_name: 'Rosie'
  //     },
  //     {
  //       hex_value: '#C6727C',
  //       colour_name: 'Ellie'
  //     },
  //     {
  //       hex_value: '#AF2257',
  //       colour_name: 'Dahlia'
  //     },
  //     {
  //       hex_value: '#573F53',
  //       colour_name: 'Kat'
  //     },
  //     {
  //       hex_value: '#875672',
  //       colour_name: 'Brie'
  //     },
  //     {
  //       hex_value: '#BC88A5',
  //       colour_name: 'Emmy'
  //     },
  //     {
  //       hex_value: '#BB8A88',
  //       colour_name: 'Dusty rose'
  //     },
  //     {
  //       hex_value: '#8D5C58',
  //       colour_name: 'Kylie'
  //     },
  //     {
  //       hex_value: '#C86775',
  //       colour_name: 'Leah'
  //     },
  //     {
  //       hex_value: '#F8D7D6',
  //       colour_name: 'Lip Plumping Balm'
  //     },
  //     {
  //       hex_value: '#8F6065',
  //       colour_name: 'Luna'
  //     },
  //     {
  //       hex_value: '#C79289',
  //       colour_name: 'Nova'
  //     },
  //     {
  //       hex_value: '#9D3F47',
  //       colour_name: 'Ruby'
  //     }
  //   ]
  // },
  // {
  //   id: 1043,
  //   brand: 'deciem',
  //   name: 'Serum Foundation',
  //   price: '6.7',
  //   price_sign: '$',
  //   currency: 'CAD',
  //   image_link:
  //     'https://3bc01d2807fb1bc0d25c-a86d2521f1af8989841b9619f5314be5.ssl.cf1.rackcdn.com/products/market-img/rdn-serum-foundation-30-r-30ml.png?v=6ab9fcb8ca2abb9828afcf9dcdad9f94',
  //   product_link: 'https://deciem.com/product/rdn-serum-foundation-30-r-30ml',
  //   website_link: 'https://deciem.com/',
  //   description:
  //     'Serum Foundations are lightweight medium-coverage formulations available in a comprehensive shade range across 21 shades. These foundations offer moderate coverage that looks natural with a very lightweight serum feel. They are very low in viscosity and are dispensed with the supplied pump or with the optional glass dropper available for purchase separately if preferred. ',
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'foundation',
  //   tag_list: [
  //     'water free',
  //     'cruelty free',
  //     'alcohol free',
  //     'oil free',
  //     'silicone free',
  //     'Vegan',
  //     'Gluten Free'
  //   ],
  //   created_at: '2018-07-06T23:16:12.698Z',
  //   updated_at: '2018-09-02T22:52:06.882Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1043.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/043/original/open-uri20180706-4-nszgw9?1530919194',
  //   product_colors: [
  //     {
  //       hex_value: '#f4e5d6',
  //       colour_name: '1.0P'
  //     },
  //     {
  //       hex_value: '#f3e8d1',
  //       colour_name: '1.0N'
  //     },
  //     {
  //       hex_value: '#f3e8d1',
  //       colour_name: '1.0NS'
  //     },
  //     {
  //       hex_value: '#f2d7ba',
  //       colour_name: '1.1P'
  //     },
  //     {
  //       hex_value: '#efdbba',
  //       colour_name: '1.1N'
  //     },
  //     {
  //       hex_value: '#f0d5af',
  //       colour_name: '1.2N'
  //     },
  //     {
  //       hex_value: '#e5c5a1',
  //       colour_name: '1.2P'
  //     },
  //     {
  //       hex_value: '#e6c796',
  //       colour_name: '1.2Y'
  //     },
  //     {
  //       hex_value: '#e6c796',
  //       colour_name: '1.2YG'
  //     },
  //     {
  //       hex_value: '#e3be8e',
  //       colour_name: '2.0P'
  //     },
  //     {
  //       hex_value: '#e5cb9f',
  //       colour_name: '2.0N'
  //     },
  //     {
  //       hex_value: '#dcc399',
  //       colour_name: '2.0YG'
  //     },
  //     {
  //       hex_value: '#ddb279',
  //       colour_name: '2.1P'
  //     },
  //     {
  //       hex_value: '#dcad6d',
  //       colour_name: '2.1Y'
  //     },
  //     {
  //       hex_value: '#d59c62',
  //       colour_name: '3.0R'
  //     },
  //     {
  //       hex_value: '#d19e61',
  //       colour_name: '3.0Y'
  //     },
  //     {
  //       hex_value: '#b3754a',
  //       colour_name: '3.1R'
  //     },
  //     {
  //       hex_value: '#c28651',
  //       colour_name: '3.1Y'
  //     },
  //     {
  //       hex_value: '#916C4F',
  //       colour_name: '3.2N'
  //     },
  //     {
  //       hex_value: '#8E6346',
  //       colour_name: '3.2R'
  //     },
  //     {
  //       hex_value: '#664A37',
  //       colour_name: '3.3N'
  //     }
  //   ]
  // },
  // {
  //   id: 1042,
  //   brand: 'deciem',
  //   name: 'Coverage Foundation',
  //   price: '6.9',
  //   price_sign: '$',
  //   currency: 'CAD',
  //   image_link:
  //     'https://3bc01d2807fb1bc0d25c-a86d2521f1af8989841b9619f5314be5.ssl.cf1.rackcdn.com/products/market-img/rdn-coverage-foundation-33-n-30ml.png?v=daa322f179d80e450613c75826602292',
  //   product_link:
  //     'https://deciem.com/product/rdn-coverage-foundation-33-n-30ml',
  //   website_link: 'https://deciem.com/',
  //   description:
  //     'Coverage Foundations are full-coverage formulations available in a comprehensive shade range across 21 shades. These foundations contain higher pigment levels than our Serum Foundations but still offer a smooth finish that avoids the heavy makeup look that can make skin appear more aged. The texture is that of a lightweight, non-oily cream.',
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'foundation',
  //   tag_list: [
  //     'water free',
  //     'cruelty free',
  //     'alcohol free',
  //     'oil free',
  //     'silicone free',
  //     'Vegan',
  //     'Gluten Free'
  //   ],
  //   created_at: '2018-07-06T22:27:54.541Z',
  //   updated_at: '2018-09-02T22:52:06.865Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1042.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/042/original/open-uri20180706-4-1e74943?1530916234',
  //   product_colors: [
  //     {
  //       hex_value: '#f4e5d6',
  //       colour_name: '1.0P'
  //     },
  //     {
  //       hex_value: '#f3e8d1',
  //       colour_name: '1.0N'
  //     },
  //     {
  //       hex_value: '#f3e8d1',
  //       colour_name: '1.0NS'
  //     },
  //     {
  //       hex_value: '#f2d7ba',
  //       colour_name: '1.1P'
  //     },
  //     {
  //       hex_value: '#efdbba',
  //       colour_name: '1.1N'
  //     },
  //     {
  //       hex_value: '#f0d5af',
  //       colour_name: '1.2N'
  //     },
  //     {
  //       hex_value: '#e5c5a1',
  //       colour_name: '1.2P'
  //     },
  //     {
  //       hex_value: '#e6c796',
  //       colour_name: '1.2Y'
  //     },
  //     {
  //       hex_value: '#e6c796',
  //       colour_name: '1.2YG'
  //     },
  //     {
  //       hex_value: '#e3be8e',
  //       colour_name: '2.0P'
  //     },
  //     {
  //       hex_value: '#e5cb9f',
  //       colour_name: '2.0N'
  //     },
  //     {
  //       hex_value: '#dcc399',
  //       colour_name: '2.0YG'
  //     },
  //     {
  //       hex_value: '#ddb279',
  //       colour_name: '2.1P'
  //     },
  //     {
  //       hex_value: '#dcad6d',
  //       colour_name: '2.1Y'
  //     },
  //     {
  //       hex_value: '#d59c62',
  //       colour_name: '3.0R'
  //     },
  //     {
  //       hex_value: '#d19e61',
  //       colour_name: '3.0Y'
  //     },
  //     {
  //       hex_value: '#b3754a',
  //       colour_name: '3.1R'
  //     },
  //     {
  //       hex_value: '#c28651',
  //       colour_name: '3.1Y'
  //     },
  //     {
  //       hex_value: '#916C4F',
  //       colour_name: '3.2N'
  //     },
  //     {
  //       hex_value: '#8E6346',
  //       colour_name: '3.2R'
  //     },
  //     {
  //       hex_value: '#664A37',
  //       colour_name: '3.3N'
  //     }
  //   ]
  // },
  // {
  //   id: 1041,
  //   brand: 'zorah biocosmetiques',
  //   name: 'Liquid Liner',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/06/Zorah-Biocosmetiques-Liquid-Liner.png',
  //   product_link:
  //     'https://www.purpicks.com/product/zorah-biocosmetiques-liquid-liner/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     "<strong>12 hours of long-lasting</strong> intense color, transfer-free (leaves no trace on crease above the eyelid) <strong>Pure Light Capture®</strong> <strong>minerals</strong> deliver color and radiance. Silky lines and refreshingly light, Pure Argan eyeliner leaves a weightless feel on the eyelids.<p align='LEFT'>Natural cosmetic certified by Ecocert Greenlife according to Ecocert Standard available at: http://cosmetiques.ecocert.com</p>98% of the total ingredients are from natural origin 5% of total ingredients are from organic farming",
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'eyeliner',
  //   tag_list: ['purpicks', 'EcoCert'],
  //   created_at: '2018-06-30T19:19:32.312Z',
  //   updated_at: '2018-09-02T22:52:06.723Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1041.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/041/original/open-uri20180630-4-1huiv9y?1530390387',
  //   product_colors: [
  //     {
  //       hex_value: '#000000',
  //       colour_name: 'Black'
  //     }
  //   ]
  // },
  // {
  //   id: 1040,
  //   brand: 'zorah biocosmetiques',
  //   name: 'Eyeshadow',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/02/Ombre-Amazonie-CC.png',
  //   product_link: 'https://www.purpicks.com/product/zorah-eyeshadow/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     "<strong>Product Description</strong>Anti-aging formula made with organic Pure Argan oil and Pure Light Capture<sup>®</sup> pigments. 24 Hour crease-free intensity (no build-up increase of eyelid), no running. Pure Light Capture® pigments deliver color and luminosity. Silky and refreshingly light feel, Pure Argan eyeshadow is weightless on the eyelids. Pure Argan eyeshadow <strong>soothes</strong>, <strong>hides redness </strong>and <strong>slows the appearance of the signs of aging on the skin.</strong><p align='LEFT'>Natural cosmetic certified by Ecocert Greenlife according to Ecocert Standard available at: http://cosmetiques.ecocert.com</p>100% of the total ingredients are from natural origin5% of total ingredients are from organic farming",
  //   rating: null,
  //   category: '',
  //   product_type: 'eyeshadow',
  //   tag_list: ['purpicks', 'EcoCert'],
  //   created_at: '2018-06-30T19:19:32.252Z',
  //   updated_at: '2018-09-02T22:52:06.714Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1040.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/040/original/open-uri20180630-4-1afkyee?1530390386',
  //   product_colors: [
  //     {
  //       hex_value: '#966A54',
  //       colour_name: 'Sahara'
  //     },
  //     {
  //       hex_value: '#6B7475',
  //       colour_name: 'Evrest'
  //     },
  //     {
  //       hex_value: '#444446',
  //       colour_name: 'Casablanca'
  //     }
  //   ]
  // },
  // {
  //   id: 1039,
  //   brand: 'w3llpeople',
  //   name: ' Realist Invisible Setting Powder',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/06/w3llpeople-Realist-Invisible-Setting-Powder.jpg',
  //   product_link:
  //     'https://www.purpicks.com/product/w3llpeople-realist-invisible-setting-powder/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     '<span style="font-weight: 400;">Keep it real with a polished, soft-focus look using this superfine, loose mineral powder. The healing properties of organic aloe help soothe and calm stressed out skin. Instantly minimize pores, soften imperfections, and creates a matte finish with superfine powder. Use by itself for an air-brushed look, or to set foundation for ultra-long wear.</span><span style="font-weight: 400;">* Set makeup or by itself for matte air-brushed effect</span><span style="font-weight: 400;">* Absorbs excess oil while softening fine lines</span><span style="font-weight: 400;">* Organic aloe creates radiant, rejuvenated skin</span><span style="font-weight: 400;">* Hypoallergenic, Chemical Free, Cruelty Free &amp; Noncomedogenic </span><span style="font-weight: 400;">* EWG Verified for non-toxic health and safety</span><span style="font-weight: 400;">* Free From: Parabens, Gluten, GMO, Phthalates, Sulfates, Fragrance, Pheonoxyethanol, Dimethicone, PEG, Propylene Glycol, Butylene Glycol, Lead, Mineral Oil, Talc</span>',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'foundation',
  //   tag_list: ['EWG Verified', 'purpicks', 'Gluten Free'],
  //   created_at: '2018-06-30T19:19:32.191Z',
  //   updated_at: '2018-06-30T20:26:26.417Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1039.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/039/original/open-uri20180630-4-rfmkzd?1530390386',
  //   product_colors: [
  //     {
  //       hex_value: '#E8E6E7',
  //       colour_name: 'Translucent'
  //     }
  //   ]
  // },
  // {
  //   id: 1038,
  //   brand: "sally b's skin yummies",
  //   name: 'B Smudged',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/06/Sally-B_s-Skin-Yummies-B-Smudged-1.jpg',
  //   product_link:
  //     'https://www.purpicks.com/product/sally-bs-skin-yummies-b-smudged/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     "Let your eyes naturally pop with our B Smudged, a subtle eye color that adds a tint of color to the base of your lashes. An organic, cream eye color, B Smudged eliminates the inevitable uneven line from traditional eyeliners, and does not require expert blending techniques of messy, powder-based shadows. Simply 'smudge' along lash line for color that stays in place for a long lasting look.",
  //   rating: null,
  //   category: '',
  //   product_type: 'eyeshadow',
  //   tag_list: ['EWG Verified', 'purpicks'],
  //   created_at: '2018-06-30T19:19:32.132Z',
  //   updated_at: '2018-09-02T22:52:06.697Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1038.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/038/original/open-uri20180630-4-xhqdne?1530390385',
  //   product_colors: [
  //     {
  //       hex_value: '#485376',
  //       colour_name: 'B smudged'
  //     }
  //   ]
  // },
  // {
  //   id: 1037,
  //   brand: "sally b's skin yummies",
  //   name: 'B Glossy Lip Gloss',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/06/Sally-B_s-Skin-Yummies-B-Glossy-Lip-Gloss.jpg',
  //   product_link:
  //     'https://www.purpicks.com/product/sally-bs-skin-yummies-b-glossy-lip-gloss/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     "Intensify your natural lip color with Sally B's B Glossy Lip Gloss, an organic lip gloss that adds a silky smooth hint of color and shimmer to lips. Formulated with 98% certified organic, moisture-rich ingredients our B Glossy Lip Gloss works to enrich lip health for lips that feel good and look even better.",
  //   rating: null,
  //   category: 'lip_gloss',
  //   product_type: 'lipstick',
  //   tag_list: ['EWG Verified', 'purpicks'],
  //   created_at: '2018-06-30T19:19:32.053Z',
  //   updated_at: '2018-09-02T22:52:06.687Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1037.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/037/original/open-uri20180630-4-1fa1p2f?1530390384',
  //   product_colors: [
  //     {
  //       hex_value: '#BF5D7F',
  //       colour_name: "Every Blonde's Pink"
  //     },
  //     {
  //       hex_value: '#D84945',
  //       colour_name: 'Primrose'
  //     },
  //     {
  //       hex_value: '#E1A2A0',
  //       colour_name: 'Soft Kiss'
  //     },
  //     {
  //       hex_value: '#B82F42',
  //       colour_name: "Ruby's Red"
  //     },
  //     {
  //       hex_value: '#BE5F37',
  //       colour_name: 'Copper Penny'
  //     },
  //     {
  //       hex_value: '#8F4636',
  //       colour_name: 'Sweet Plum'
  //     }
  //   ]
  // },
  // {
  //   id: 1036,
  //   brand: 'rejuva minerals',
  //   name: 'Multi Purpose Powder - Blush & Eye',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/06/Rejuva-Minerals-Multi-Purpose-Powder-Blush-_-Eye-1.jpg',
  //   product_link:
  //     'https://www.purpicks.com/product/rejuva-minerals-multi-purpose-powder-blush-eye/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     "Our Multi Purpose Pressed Powders may be used for blush or eye shadow. Blended with antioxidants from Certified Organic Fruits, Berries &amp; Botanicals*. Made without any gluten containing ingredients. Mica free Pink Parfait and Papaya will offer a natural, ultra sheer semi-matte finish. The petals from beautiful crushed red roses that are found in Pink Parfait, are valued for their natural color and delightful aroma that they provide! Acai Berry will offer a natural, ultra sheer satin finish (mica added). VEGAN. Image one is Pink Parfait. Image two is Papaya, and image three is Acai Berry. Model in image four is wearing Papaya. Model in image five is wearing Acai Berry. To see a demonstration of Papaya, click on the video and fast forward to 3:44. Enjoy! This product is EWG VERIFIED&#x2122; and rated 'CLEAN'in the Think Dirty app! BPA and Phthalate free packaging. Plastic parts of compacts are recyclable. *Tiny flecks of fruit and botanical particles may be visible in powder. Pink Parfait and Papaya are Titanium Dioxide and Mica free. Net Weight: 2.8 gm.",
  //   rating: null,
  //   category: '',
  //   product_type: 'eyeshadow',
  //   tag_list: ['purpicks', 'EWG Verified', 'Hypoallergenic', 'No Talc'],
  //   created_at: '2018-06-30T19:19:31.988Z',
  //   updated_at: '2018-09-02T22:52:06.678Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1036.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/036/original/open-uri20180630-4-ign3hh?1530390384',
  //   product_colors: [
  //     {
  //       hex_value: '#E1BFC0',
  //       colour_name: 'Pink Parfait'
  //     },
  //     {
  //       hex_value: '#D7A7A3',
  //       colour_name: 'Papaya'
  //     },
  //     {
  //       hex_value: '#E6C3CB',
  //       colour_name: 'Acai Berry'
  //     }
  //   ]
  // },
  // {
  //   id: 1035,
  //   brand: 'rejuva minerals',
  //   name: 'Multi Purpose Powder - Blush & Eye',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/06/Rejuva-Minerals-Multi-Purpose-Powder-Blush-_-Eye-1.jpg',
  //   product_link:
  //     'https://www.purpicks.com/product/rejuva-minerals-multi-purpose-powder-blush-eye/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     "Our Multi Purpose Pressed Powders may be used for blush or eye shadow. Blended with antioxidants from Certified Organic Fruits, Berries &amp; Botanicals*. Made without any gluten containing ingredients. Mica free Pink Parfait and Papaya will offer a natural, ultra sheer semi-matte finish. The petals from beautiful crushed red roses that are found in Pink Parfait, are valued for their natural color and delightful aroma that they provide! Acai Berry will offer a natural, ultra sheer satin finish (mica added). VEGAN. Image one is Pink Parfait. Image two is Papaya, and image three is Acai Berry. Model in image four is wearing Papaya. Model in image five is wearing Acai Berry. To see a demonstration of Papaya, click on the video and fast forward to 3:44. Enjoy! This product is EWG VERIFIED&#x2122; and rated 'CLEAN'in the Think Dirty app! BPA and Phthalate free packaging. Plastic parts of compacts are recyclable. *Tiny flecks of fruit and botanical particles may be visible in powder. Pink Parfait and Papaya are Titanium Dioxide and Mica free. Net Weight: 2.8 gm.",
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'blush',
  //   tag_list: ['purpicks', 'EWG Verified', 'Hypoallergenic', 'No Talc'],
  //   created_at: '2018-06-30T19:19:31.909Z',
  //   updated_at: '2018-09-02T22:52:06.855Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1035.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/035/original/open-uri20180630-4-n6wb0y?1530390383',
  //   product_colors: [
  //     {
  //       hex_value: '#E1BFC0',
  //       colour_name: 'Pink Parfait'
  //     },
  //     {
  //       hex_value: '#D7A7A3',
  //       colour_name: 'Papaya'
  //     },
  //     {
  //       hex_value: '#E6C3CB',
  //       colour_name: 'Acai Berry'
  //     }
  //   ]
  // },
  // {
  //   id: 1034,
  //   brand: 'rejuva minerals',
  //   name: 'Multi Purpose Powder - Eye Shadow & Face',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/06/Rejuva-Minerals-Multi-Purpose-Powder-Eye-Shadow-Face-1.jpg',
  //   product_link:
  //     'https://www.purpicks.com/product/rejuva-minerals-multi-purpose-powder-eye-shadow-face/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     "Our Multi Purpose Pressed Powders may be used as eye shadow, brow powder, eye liner, or for highlighting. Blended with antioxidants from Certified Organic Fruits, Berries &amp; Botanicals*. No gluten derived ingredients. VEGAN. All shades will offer a semi-matte finish, with the exception of White Diamond. White Diamond will offer a shimmery finish. Image one shows shade in Iris. This product is EWG VERIFIED&#x2122; and rated 'CLEAN' in the Think Dirty app! BPA and Phthalate free packaging. Plastic parts of compacts are recyclable.",
  //   rating: null,
  //   category: '',
  //   product_type: 'eyeshadow',
  //   tag_list: ['purpicks', 'EWG Verified', 'Vegan', 'Organic'],
  //   created_at: '2018-06-30T19:19:31.827Z',
  //   updated_at: '2018-09-02T22:52:06.661Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1034.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/034/original/open-uri20180630-4-1n63e1y?1530390382',
  //   product_colors: [
  //     {
  //       hex_value: '#F7F8F3',
  //       colour_name: 'White Diamond'
  //     },
  //     {
  //       hex_value: '#E8B49B',
  //       colour_name: 'Tropical Sunset'
  //     },
  //     {
  //       hex_value: '#292627',
  //       colour_name: 'Moonless Night'
  //     },
  //     {
  //       hex_value: '#A17E69',
  //       colour_name: 'Mocha Latte'
  //     },
  //     {
  //       hex_value: '#8C666E',
  //       colour_name: 'Iris'
  //     },
  //     {
  //       hex_value: '#615349',
  //       colour_name: 'Brazillian Brown'
  //     },
  //     {
  //       hex_value: '#F7DEC4',
  //       colour_name: 'Beach Bum'
  //     }
  //   ]
  // },
  // {
  //   id: 1033,
  //   brand: 'rejuva minerals',
  //   name: 'Pressed Powder Foundation',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/06/Rejuva-Minerals-Multi-Purpose-Powder-Eye-Shadow-Face-1.jpg',
  //   product_link:
  //     'https://www.purpicks.com/product/rejuva-minerals-multi-purpose-powder-eye-shadow-face/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     "Coconut Cream - Warm Undertones (yellow) Light Shade. May also be used as a highlighting shade! About our pressed foundations:<ul><li>Provides a silky smooth, natural 'semi-matte' finish</li><li>All skin types</li><li>Will not dry out skin (apply light moisturizer underneath for best results)</li><li>Resists caking and settling in lines and pores</li><li>Layers to provide a light-medium (buildable) coverage</li><li>Eco-friendly, biodegradable compact</li><li>Colored with minerals and enhanced with organic fruits and botanicals</li><li>Infused with conditioning organic jojoba oil</li><li>Formulated without common skin irritants.</li></ul>",
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'foundation',
  //   tag_list: ['purpicks', 'EWG Verified', 'Hypoallergenic', 'No Talc'],
  //   created_at: '2018-06-30T19:19:31.736Z',
  //   updated_at: '2018-09-02T22:52:06.652Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1033.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/033/original/open-uri20180630-4-1mibdm?1530390382',
  //   product_colors: [
  //     {
  //       hex_value: '#FBE9CD',
  //       colour_name: 'Coconut Cream'
  //     },
  //     {
  //       hex_value: '#E6B588',
  //       colour_name: 'Dune'
  //     },
  //     {
  //       hex_value: '#EBC8A0',
  //       colour_name: 'Glow'
  //     },
  //     {
  //       hex_value: '#F8E3D5',
  //       colour_name: 'Nude'
  //     },
  //     {
  //       hex_value: '#D8B39B',
  //       colour_name: 'Radiance'
  //     },
  //     {
  //       hex_value: '#E7CDBA',
  //       colour_name: 'Sand'
  //     },
  //     {
  //       hex_value: '#F1C4A8',
  //       colour_name: 'Sea Shell'
  //     },
  //     {
  //       hex_value: '#D1B594',
  //       colour_name: 'Taffy'
  //     },
  //     {
  //       hex_value: '#9C7248',
  //       colour_name: 'Bahama Mama'
  //     },
  //     {
  //       hex_value: '#DDA983',
  //       colour_name: 'St Tropez'
  //     }
  //   ]
  // },
  // {
  //   id: 1032,
  //   brand: 'rejuva minerals',
  //   name: 'Bronzer - loose',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/03/rejuva-minerals-bronzer.jpg',
  //   product_link:
  //     'https://www.purpicks.com/product/rejuva-minerals-bronzer-caribbean/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'Caribbean is a multi-purpose shade that is suitable for medium-tan skin tones. This shade may be used as a bronzer, or as a contour shade. <ul><li>Our bronzer has been enhanced with Fruits, Botanicals and Clays for their natural color, fragrance and antioxidant benefits!</li><li>Blended with Certified Organics Fruits and Botanicals</li><li>Formulated with common skin irritants.</li><li>Our bronzer will offer a natural “ultra sheer” semi-matte finish.</li><li>Made without any gluten containing ingredients</li><li>VEGAN!</li><li>Eco Friendly jars!</li></ul>',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'bronzer',
  //   tag_list: ['purpicks', 'EWG Verified', 'Vegan', 'Gluten Free'],
  //   created_at: '2018-06-30T19:19:31.682Z',
  //   updated_at: '2018-09-02T22:52:06.643Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1032.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/032/original/open-uri20180630-4-1bl3btv?1530390381',
  //   product_colors: [
  //     {
  //       hex_value: '#A37948',
  //       colour_name: 'Caribbean'
  //     }
  //   ]
  // },
  // {
  //   id: 1031,
  //   brand: 'rejuva minerals',
  //   name: 'Bronzer - pressed',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/03/rejuva-minerals-bronzer.jpg',
  //   product_link: 'https://www.purpicks.com/product/rejuva-bronzer-light/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     "Our bronzer has been enhanced with Fruits, Botanicals and Clays for their natural color, fragrance and antioxidant benefits! Blended with Certified Organics Fruits and Botanicals Formulated with common skin irritants. Our bronzer will offer a natural 'ultra sheer' semi-matte finish. Made without any gluten containing ingredients VEGAN! Eco Friendly jars!",
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'bronzer',
  //   tag_list: ['purpicks', 'EWG Verified', 'Vegan', 'Gluten Free'],
  //   created_at: '2018-06-30T19:19:31.624Z',
  //   updated_at: '2018-09-02T22:52:06.629Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1031.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/031/original/open-uri20180630-4-1axfay6?1530390380',
  //   product_colors: [
  //     {
  //       hex_value: '#DDA983',
  //       colour_name: 'St Tropez'
  //     },
  //     {
  //       hex_value: '#9C7248',
  //       colour_name: 'Bahama Mama'
  //     }
  //   ]
  // },
  // {
  //   id: 1030,
  //   brand: 'penny lane organics',
  //   name: 'Lip Gloss',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/csm/sunset-bronze-pennylaneorganics1.jpg',
  //   product_link:
  //     'https://www.purpicks.com/product/penny-lane-organics-lip-gloss/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'For fuller healthier lips! Long lasting colour! This colour is a good choice for any skin tone. It can be made lighter by wiping some off after application.Please note that our Vitamin E is extracted from non-GMO soy bean oil and therefore is gluten-free.',
  //   rating: null,
  //   category: 'lip_gloss',
  //   product_type: 'lipstick',
  //   tag_list: [
  //     'purpicks',
  //     'CertClean',
  //     'Vegan',
  //     'Chemical Free',
  //     'Gluten Free'
  //   ],
  //   created_at: '2018-06-30T19:19:31.534Z',
  //   updated_at: '2018-09-02T22:52:06.618Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1030.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/030/original/open-uri20180630-4-ucbwbt?1530390380',
  //   product_colors: [
  //     {
  //       hex_value: '#2F1513',
  //       colour_name: 'Black Cherry'
  //     },
  //     {
  //       hex_value: '#4F1314',
  //       colour_name: 'Fiery Red'
  //     },
  //     {
  //       hex_value: '#6F2633',
  //       colour_name: 'Pearl Pink'
  //     },
  //     {
  //       hex_value: '#B05665',
  //       colour_name: 'Pink Shimmer'
  //     },
  //     {
  //       hex_value: '#783F30',
  //       colour_name: 'Sunset Bronze'
  //     },
  //     {
  //       hex_value: '#511617',
  //       colour_name: 'Sweet Cherry'
  //     },
  //     {
  //       hex_value: '#8E2432',
  //       colour_name: 'Tropical Fuschia'
  //     }
  //   ]
  // },
  // {
  //   id: 1029,
  //   brand: 'nudus',
  //   name: 'Amalia',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/06/Nudus-Amalia.jpg',
  //   product_link: 'https://www.purpicks.com/product/nudus-amalia/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'named after my beautiful mum, delicately pink that displays sophistication. a perfect sheer wash of gorgeous colour that brings a new texture to the lip euphoria range. <strong>lipstick benefits</strong> a unique handcrafted lipstick blended with certified organic ingredients. beautifully pigmented with ancient ayurvedic bioactive colour extracts, leaving your lips soft and deliciously hydrated.<strong>key benefits</strong><ul><li>vitamins, A, B, C, D, E and K</li><li>antioxidants, including pomegranate, raspberry and kiwi cold pressed oils</li><li>27 active natural ingredients, helping against environmental stress</li><li>colours made from flowers, fruits, herbs and minerals</li><li>free from parabens, petro-chemicals, lanolin, hydrogenated oils,fd&amp;c and lake dyes, nano-particles, gmo, pesticides and fungicides</li><li>not tested on animals</li><li>gluten free</li></ul>',
  //   rating: null,
  //   category: 'lipstick',
  //   product_type: 'lipstick',
  //   tag_list: ['purpicks'],
  //   created_at: '2018-06-30T19:19:31.441Z',
  //   updated_at: '2018-09-02T22:52:06.839Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1029.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/029/original/open-uri20180630-4-1rfkucb?1530390379',
  //   product_colors: [
  //     {
  //       hex_value: '#7C524F',
  //       colour_name: '27 Kisses'
  //     },
  //     {
  //       hex_value: '#884955',
  //       colour_name: 'Amalia'
  //     },
  //     {
  //       hex_value: '#9F3D2A',
  //       colour_name: 'Bitter Sweet'
  //     },
  //     {
  //       hex_value: '#542A26',
  //       colour_name: 'Dirty Diana'
  //     },
  //     {
  //       hex_value: '#793D48',
  //       colour_name: 'Dreamtime'
  //     },
  //     {
  //       hex_value: '#BB6E60',
  //       colour_name: 'Fairy Tale'
  //     },
  //     {
  //       hex_value: '#BA8285',
  //       colour_name: 'Halo'
  //     },
  //     {
  //       hex_value: '#71474E',
  //       colour_name: 'Just Like Jade'
  //     },
  //     {
  //       hex_value: '#AF8475',
  //       colour_name: 'Naked'
  //     },
  //     {
  //       hex_value: '#D65572',
  //       colour_name: 'Precious'
  //     },
  //     {
  //       hex_value: '#8F1A23',
  //       colour_name: 'Revenge'
  //     },
  //     {
  //       hex_value: '#8B383D',
  //       colour_name: 'Ruby Rose'
  //     },
  //     {
  //       hex_value: '#C83752',
  //       colour_name: 'Survivor'
  //     },
  //     {
  //       hex_value: '#784F5F',
  //       colour_name: 'Viva'
  //     },
  //     {
  //       hex_value: '#672F57',
  //       colour_name: 'Zo Zo'
  //     }
  //   ]
  // },
  // {
  //   id: 1028,
  //   brand: 'marienatie',
  //   name: 'Pressed Foundation',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/csm/caramel_1024x1024_e5fbf151-0cfd-42c9-a5ec-f49d6104bcbc1.jpg',
  //   product_link:
  //     'https://www.purpicks.com/product/marie-natie-pressed-foundation/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'A pressed foundation by MarieNatie providing a silky and flawless finish – it provides great coverage and protects skin with SPF 10.  Titanium dioxide acts as an absorbent of oil and jojoba oil helps to cleanse and moisturize the skin.',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'foundation',
  //   tag_list: ['purpicks', 'CertClean'],
  //   created_at: '2018-06-30T19:19:31.368Z',
  //   updated_at: '2018-09-02T22:52:06.609Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1028.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/028/original/open-uri20180630-4-1u219s0?1530390378',
  //   product_colors: [
  //     {
  //       hex_value: '#F8DBC3',
  //       colour_name: 'Ivory'
  //     },
  //     {
  //       hex_value: '#ECBFA3',
  //       colour_name: 'Natural Beige'
  //     },
  //     {
  //       hex_value: '#FAE3C9',
  //       colour_name: 'Sunny Beige'
  //     },
  //     {
  //       hex_value: '#F3D2B7',
  //       colour_name: 'Warm Tan'
  //     },
  //     {
  //       hex_value: '#E7C09D',
  //       colour_name: 'Tan'
  //     },
  //     {
  //       hex_value: '#F4D3B8',
  //       colour_name: 'Honey'
  //     },
  //     {
  //       hex_value: '#D4AD8C',
  //       colour_name: 'Caramel'
  //     },
  //     {
  //       hex_value: '#D8AD91',
  //       colour_name: 'Chocolate'
  //     },
  //     {
  //       hex_value: '#C29F90',
  //       colour_name: 'Deep Golden'
  //     }
  //   ]
  // },
  // {
  //   id: 1027,
  //   brand: 'marienatie',
  //   name: 'Pressed Eye Shadow',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/csm/pressed_eyeshadow_LORES_1024x1024_55deb6c3-b7cd-4cb5-9ede-f2931c07312a1.jpg',
  //   product_link:
  //     'https://www.purpicks.com/product/marie-natie-pressed-eye-shadow/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'Hypoallergenic shadows that are rich in colour with a lightweight texture.  These MarieNatie shadows are fragrance-free and will stay on all day.   Compact comes with a mini brush that can be stored away.  Titanium dioxide acts as an absorbent of oil and jojoba cleanses and moisturizes the skin.',
  //   rating: null,
  //   category: '',
  //   product_type: 'eyeshadow',
  //   tag_list: ['purpicks', 'CertClean'],
  //   created_at: '2018-06-30T19:19:31.278Z',
  //   updated_at: '2018-09-02T22:52:06.599Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1027.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/027/original/open-uri20180630-4-2ii6k2?1530390377',
  //   product_colors: [
  //     {
  //       hex_value: '#FDFAF9',
  //       colour_name: 'Blanc'
  //     },
  //     {
  //       hex_value: '#F9F5F2',
  //       colour_name: 'A la mode'
  //     },
  //     {
  //       hex_value: '#C5BEBA',
  //       colour_name: 'Soiree'
  //     },
  //     {
  //       hex_value: '#DFC99C',
  //       colour_name: 'Oro'
  //     },
  //     {
  //       hex_value: '#635152',
  //       colour_name: 'Cafe'
  //     },
  //     {
  //       hex_value: '#DADFBF',
  //       colour_name: 'Emerald'
  //     },
  //     {
  //       hex_value: '#A2AA93',
  //       colour_name: 'Foret'
  //     },
  //     {
  //       hex_value: '#8E6771',
  //       colour_name: 'Tres Beau'
  //     },
  //     {
  //       hex_value: '#9886A3',
  //       colour_name: "C'est Bon"
  //     },
  //     {
  //       hex_value: '#5B739C',
  //       colour_name: 'Lune'
  //     },
  //     {
  //       hex_value: '#464342',
  //       colour_name: 'Minuit'
  //     },
  //     {
  //       hex_value: '#CBDDE3',
  //       colour_name: 'Mon Amour'
  //     },
  //     {
  //       hex_value: '#E2CED1',
  //       colour_name: 'Fleur'
  //     }
  //   ]
  // },
  // {
  //   id: 1026,
  //   brand: 'marienatie',
  //   name: 'Mineral Blush',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/csm/Blush_copy_1024x1024_edd99d6d-301e-4ba1-aa74-a33d21147b7c1.jpg',
  //   product_link: 'https://www.purpicks.com/product/marie-natie-mineral-blush/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'Formulated to reduce the appearance of pores while creating a long-lasting natural finish.  This MarieNatie brush protects skin with SPF15.  Sericite mica is great for absorbing oil and won’t clog up pores.  Mica is a natural mineral that helps to enhance the skin tone.',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'blush',
  //   tag_list: ['purpicks', 'CertClean'],
  //   created_at: '2018-06-30T19:19:31.234Z',
  //   updated_at: '2018-09-02T22:52:06.590Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1026.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/026/original/open-uri20180630-4-18e9ua7?1530390377',
  //   product_colors: [
  //     {
  //       hex_value: '#C97D66',
  //       colour_name: 'Blushing Apple'
  //     },
  //     {
  //       hex_value: '#DF9A84',
  //       colour_name: 'Desert Rose'
  //     }
  //   ]
  // },
  // {
  //   id: 1025,
  //   brand: 'marienatie',
  //   name: 'Perfect Lash Mascara',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2017/06/marie-natie-perfect-lash-mascara.png',
  //   product_link:
  //     'https://www.purpicks.com/product/marie-natie-perfect-lash-mascara/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'Marie Natie Perfect Lash Mascara is made with all natural ingredients that will not only condition your lashes but lengthen and thicken your every lash with every stroke.  Oregano, rosemary and thyme extract are great antioxidants and helps to maintain skin health.  Cinnamon bark extracts helps to fight infection.  Lemon peel extract contains natural healing and soothing properties.',
  //   rating: null,
  //   category: '',
  //   product_type: 'mascara',
  //   tag_list: ['purpicks', 'CertClean'],
  //   created_at: '2018-06-30T19:19:31.192Z',
  //   updated_at: '2018-09-02T22:52:06.828Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1025.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/025/original/open-uri20180630-4-yxmmga?1530390376',
  //   product_colors: [
  //     {
  //       hex_value: '#000000',
  //       colour_name: 'Black'
  //     }
  //   ]
  // },
  // {
  //   id: 1024,
  //   brand: 'marienatie',
  //   name: 'Loose Mineral Eyeshadow',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/csm/Loose_MineralEyeshadow_1024x1024_a958d62b-c518-4548-a2cd-9c8981f5edee1.jpg',
  //   product_link:
  //     'https://www.purpicks.com/product/marie-natie-loose-mineral-eyeshadow/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'Long-lasting eye colours delivering an instant glam and shimmer.  Silky and soft texture of MarieNatie glides on easily when applied wet or dry.  Magnesium stearate repels water and will help keep your eye shadow on all day and absorb any extra oil.  Kaolin clay will help to purify, soothe different skin types.',
  //   rating: null,
  //   category: '',
  //   product_type: 'eyeshadow',
  //   tag_list: ['purpicks', 'CertClean'],
  //   created_at: '2018-06-30T19:19:31.101Z',
  //   updated_at: '2018-09-02T22:52:06.518Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1024.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/024/original/open-uri20180630-4-13b5ehh?1530390375',
  //   product_colors: [
  //     {
  //       hex_value: '#D1A390',
  //       colour_name: 'Bisque'
  //     },
  //     {
  //       hex_value: '#E4C2C4',
  //       colour_name: 'Rose'
  //     },
  //     {
  //       hex_value: '#CBD0D0',
  //       colour_name: 'Jade'
  //     },
  //     {
  //       hex_value: '#9F9686',
  //       colour_name: 'K aki'
  //     },
  //     {
  //       hex_value: '#92A281',
  //       colour_name: 'Emerald'
  //     },
  //     {
  //       hex_value: '#C57F70',
  //       colour_name: 'Oam'
  //     },
  //     {
  //       hex_value: '#8D6255',
  //       colour_name: 'Chocolate'
  //     },
  //     {
  //       hex_value: '#AB9A9E',
  //       colour_name: 'Riz Violet'
  //     },
  //     {
  //       hex_value: '#808193',
  //       colour_name: 'Aubergine'
  //     },
  //     {
  //       hex_value: '#F8DDAE',
  //       colour_name: 'Oro'
  //     },
  //     {
  //       hex_value: '#B0A9AC',
  //       colour_name: 'Argent'
  //     },
  //     {
  //       hex_value: '#8B5966',
  //       colour_name: 'Mauve'
  //     },
  //     {
  //       hex_value: '#47404A',
  //       colour_name: 'Noir'
  //     }
  //   ]
  // },
  // {
  //   id: 1023,
  //   brand: 'marienatie',
  //   name: 'Lipstick',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/csm/Evelyn_Pic1.jpg',
  //   product_link: 'https://www.purpicks.com/product/marie-natie-lipstick/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'A pure and creamy lipstick by MarieNatie formulated with organic jojoba, avocado, and coconut oil which are rich in anti-oxidants and have moisturizing benefits. Enriched with naturally derived organic mango and cocoa butters that will soothe, hydrate and regenerate dry lips.',
  //   rating: null,
  //   category: 'lipstick',
  //   product_type: 'lipstick',
  //   tag_list: ['purpicks', 'CertClean', 'Vegan', 'Gluten Free'],
  //   created_at: '2018-06-30T19:19:31.034Z',
  //   updated_at: '2018-09-02T22:52:06.510Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1023.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/023/original/open-uri20180630-4-149dwc3?1530390375',
  //   product_colors: [
  //     {
  //       hex_value: '#9D5E4F',
  //       colour_name: 'Evelyn'
  //     },
  //     {
  //       hex_value: '#B03B3E',
  //       colour_name: 'Rosie'
  //     },
  //     {
  //       hex_value: '#9A1C24',
  //       colour_name: 'Giselle'
  //     },
  //     {
  //       hex_value: '#B4556E',
  //       colour_name: 'Ava'
  //     }
  //   ]
  // },
  // {
  //   id: 1022,
  //   brand: 'marienatie',
  //   name: 'Lip Gloss',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link: 'https://www.purpicks.com/wp-content/uploads/csm/Envy1.jpg',
  //   product_link: 'https://www.purpicks.com/product/lip-gloss/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'MarieNatie offers a gluten free and vegan lip gloss providing rich colours and shine without the stickiness. The natural oils will offer moisturizing properties and lasting hydration for your lips. Contains grape seed oil to reduce aging and wrinkles and sunflower oil has the ability to heal skin. Vitamin E is a great antioxidant that will protect and repair skin.',
  //   rating: null,
  //   category: 'lip_gloss',
  //   product_type: 'lipstick',
  //   tag_list: ['purpicks', 'CertClean'],
  //   created_at: '2018-06-30T19:19:30.964Z',
  //   updated_at: '2018-09-02T22:52:06.502Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1022.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/022/original/data?1530390374',
  //   product_colors: [
  //     {
  //       hex_value: '#D5A291',
  //       colour_name: 'Posh'
  //     },
  //     {
  //       hex_value: '#D5A3A1',
  //       colour_name: 'Flair'
  //     },
  //     {
  //       hex_value: '#E89EA2',
  //       colour_name: 'Tickled'
  //     },
  //     {
  //       hex_value: '#8B5B5F',
  //       colour_name: 'Envy'
  //     },
  //     {
  //       hex_value: '#99696C',
  //       colour_name: 'Lush'
  //     },
  //     {
  //       hex_value: '#F1B8BE',
  //       colour_name: 'Pure'
  //     },
  //     {
  //       hex_value: '#D37B92',
  //       colour_name: 'Babe'
  //     },
  //     {
  //       hex_value: '#CA5774',
  //       colour_name: 'Wild'
  //     }
  //   ]
  // },
  // {
  //   id: 1021,
  //   brand: 'marienatie',
  //   name: 'Gel Liner',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/csm/Photo10_12001.jpg',
  //   product_link: 'https://www.purpicks.com/product/marie-natie-gel-liner/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'This smooth and creamy formula from MarieNatie will provide a silky soft and non-oily finish. It glides on evenly to deliver immediate results.',
  //   rating: null,
  //   category: 'gel',
  //   product_type: 'eyeliner',
  //   tag_list: ['purpicks', 'CertClean', 'Vegan', 'Gluten Free'],
  //   created_at: '2018-06-30T19:19:30.898Z',
  //   updated_at: '2018-09-02T22:52:06.494Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1021.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/021/original/open-uri20180630-4-10sgmvz?1530390373',
  //   product_colors: [
  //     {
  //       hex_value: '#000000',
  //       colour_name: 'Black'
  //     }
  //   ]
  // },
  // {
  //   id: 1020,
  //   brand: 'marienatie',
  //   name: 'Eyeliner',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/csm/Eyeliner-Group_300dpi_1024x1024_a2ac069c-f517-46bf-a215-8d31f5e948c91.jpg',
  //   product_link: 'https://www.purpicks.com/product/marie-natie-eyeliner/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'An eyeliner that offers long lasting colour and a natural smooth finish.  Both jojoba oil and meadowfoam oil have amazing moisturizing properties to help repair skin.  Beeswax is known for its healing properties and will help to improve skin conditions.',
  //   rating: null,
  //   category: 'pencil',
  //   product_type: 'eyeliner',
  //   tag_list: ['purpicks', 'CertClean'],
  //   created_at: '2018-06-30T19:19:30.847Z',
  //   updated_at: '2018-09-02T22:52:06.484Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1020.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/020/original/open-uri20180630-4-y548d5?1530390373',
  //   product_colors: [
  //     {
  //       hex_value: '#000000',
  //       colour_name: 'Black'
  //     },
  //     {
  //       hex_value: '#393230',
  //       colour_name: 'Brown'
  //     },
  //     {
  //       hex_value: '#353234',
  //       colour_name: 'Smoke'
  //     }
  //   ]
  // },
  // {
  //   id: 1019,
  //   brand: "maia's mineral galaxy",
  //   name: 'Mineral Eye Brow Liner Charcoal Brown',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/06/Maia%E2%80%99s-Mineral-Galaxy-Mineral-Eye-Brow-Liner-Charcoal-Brown.jpg',
  //   product_link:
  //     'https://www.purpicks.com/product/maias-mineral-galaxy-mineral-eye-brow-liner-charcoal-brown/',
  //   website_link: 'https://purpicks.com/',
  //   description: '',
  //   rating: null,
  //   category: 'pencil',
  //   product_type: 'eyebrow',
  //   tag_list: ['EWG Verified', 'purpicks'],
  //   created_at: '2018-06-30T19:19:30.782Z',
  //   updated_at: '2018-09-02T22:52:06.474Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1019.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/019/original/open-uri20180630-4-1h8zp2k?1530390372',
  //   product_colors: [
  //     {
  //       hex_value: '#5B4439',
  //       colour_name: 'Charcoal Brown'
  //     },
  //     {
  //       hex_value: '#000000',
  //       colour_name: 'Black'
  //     },
  //     {
  //       hex_value: '#5E3C30',
  //       colour_name: 'Cocoa'
  //     },
  //     {
  //       hex_value: '#4D4D4B',
  //       colour_name: 'Dark Gray'
  //     },
  //     {
  //       hex_value: '#6E4E2A',
  //       colour_name: 'Hazel Brown'
  //     }
  //   ]
  // },
  // {
  //   id: 1018,
  //   brand: 'lotus cosmetics usa',
  //   name: 'Mascara',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/03/lotus-cosmetics-usa-mascara-black.png',
  //   product_link:
  //     'https://www.purpicks.com/product/lotus-cosmetics-usa-mascara/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'All natural mascara lengthens, thickens, and defines lashes. Created with coffee extract, rice proteins and sunflower oil to condition lashes. Smudge proof and water resistant for lashes that will all day. Made with natural and organic ingredients. In Black, and Brown.',
  //   rating: null,
  //   category: '',
  //   product_type: 'mascara',
  //   tag_list: ['purpicks', 'Organic', 'USDA Organic'],
  //   created_at: '2018-06-30T19:19:30.735Z',
  //   updated_at: '2018-09-02T22:52:06.816Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1018.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/018/original/open-uri20180630-4-g58t74?1530390371',
  //   product_colors: [
  //     {
  //       hex_value: '#000000',
  //       colour_name: 'Black'
  //     }
  //   ]
  // },
  // {
  //   id: 1017,
  //   brand: 'lotus cosmetics usa',
  //   name: 'Creme to Powder Blush',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/03/lotus-cosmetics-usa-creme-to-powder-blush.png',
  //   product_link:
  //     'https://www.purpicks.com/product/lotus-cosmetics-usa-creme-powder-blush/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'A cream to powder blush made with all natural ingredients that applies like a soft cream but finishes like a silky powder. Antioxidant-rich botanicals help moisturize the skin, while natural pigments provide long-lasting buildable color for a healthy, radiant glow. Made with natural and organic ingredients.',
  //   rating: null,
  //   category: 'cream',
  //   product_type: 'blush',
  //   tag_list: ['purpicks', 'Organic', 'USDA Organic'],
  //   created_at: '2018-06-30T19:19:30.678Z',
  //   updated_at: '2018-09-02T22:52:06.437Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1017.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/017/original/open-uri20180630-4-1r5paz3?1530390370',
  //   product_colors: [
  //     {
  //       hex_value: '#C7766F',
  //       colour_name: 'Plum'
  //     },
  //     {
  //       hex_value: '#DF925C',
  //       colour_name: 'Apricot'
  //     },
  //     {
  //       hex_value: '#E89B7C',
  //       colour_name: 'Rose'
  //     }
  //   ]
  // },
  // {
  //   id: 1016,
  //   brand: 'lotus cosmetics usa',
  //   name: 'Eye Shadow Palette Mesmerize',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'http://www.purpicks.com/wp-content/uploads/2018/03/lotus-cosmetics-usa-eye-shadow-palette-mesmerize.png',
  //   product_link: 'https://www.purpicks.com/product/lotus-cosmetics-usa/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'A four-color eyeshadow palette infused with natural minerals and antioxidant rich extracts to help prevent fine lines and wrinkles. Easily blendable shades give you the ability to create effortlessly natural or dramatic looks. Made with natural and organic ingredients.',
  //   rating: null,
  //   category: 'palette',
  //   product_type: 'eyeshadow',
  //   tag_list: ['purpicks', 'Organic', 'USDA Organic'],
  //   created_at: '2018-06-30T19:19:30.618Z',
  //   updated_at: '2018-09-02T22:52:06.804Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1016.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/016/original/open-uri20180630-4-1mmjptw?1530390369',
  //   product_colors: [
  //     {
  //       hex_value: '#FDF5EB',
  //       colour_name: 'Color 1'
  //     },
  //     {
  //       hex_value: '#F5CFBC',
  //       colour_name: 'Color 2'
  //     },
  //     {
  //       hex_value: '#B57F57',
  //       colour_name: 'Color 3'
  //     },
  //     {
  //       hex_value: '#A39796',
  //       colour_name: 'Color 4'
  //     }
  //   ]
  // },
  // {
  //   id: 1015,
  //   brand: 'lotus cosmetics usa',
  //   name: 'Eye Shadow Palette Deluxe',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'http://www.purpicks.com/wp-content/uploads/2018/03/lotus-cosmetics-usa-eye-shadow-palette-deluxe.png',
  //   product_link: 'https://www.purpicks.com/product/lotus-cosmetics-usa/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'A four-color eyeshadow palette infused with natural minerals and antioxidant rich extracts to help prevent fine lines and wrinkles. Easily blendable shades give you the ability to create effortlessly natural or dramatic looks. Made with natural and organic ingredients.',
  //   rating: null,
  //   category: 'palette',
  //   product_type: 'eyeshadow',
  //   tag_list: ['purpicks', 'Organic', 'USDA Organic'],
  //   created_at: '2018-06-30T19:19:30.555Z',
  //   updated_at: '2018-09-02T22:52:06.788Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1015.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/015/original/open-uri20180630-4-egfs2g?1530390369',
  //   product_colors: [
  //     {
  //       hex_value: '#F4DACA',
  //       colour_name: 'Color 1'
  //     },
  //     {
  //       hex_value: '#C89281',
  //       colour_name: 'Color 2'
  //     },
  //     {
  //       hex_value: '#4F7386',
  //       colour_name: 'Color 3'
  //     },
  //     {
  //       hex_value: '#9D9484',
  //       colour_name: 'Color 4'
  //     }
  //   ]
  // },
  // {
  //   id: 1014,
  //   brand: 'lotus cosmetics usa',
  //   name: 'Eye Shadow Palette Smokey',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'http://www.purpicks.com/wp-content/uploads/2018/03/lotus-cosmetics-usa-eye-shadow-palette-smokey.png',
  //   product_link: 'https://www.purpicks.com/product/lotus-cosmetics-usa/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'A four-color eyeshadow palette infused with natural minerals and antioxidant rich extracts to help prevent fine lines and wrinkles. Easily blendable shades give you the ability to create effortlessly natural or dramatic looks. Made with natural and organic ingredients.',
  //   rating: null,
  //   category: 'palette',
  //   product_type: 'eyeshadow',
  //   tag_list: ['purpicks', 'Organic', 'USDA Organic'],
  //   created_at: '2018-06-30T19:19:30.490Z',
  //   updated_at: '2018-09-02T22:52:06.773Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1014.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/014/original/open-uri20180630-4-1y604g6?1530390368',
  //   product_colors: [
  //     {
  //       hex_value: '#7F946E',
  //       colour_name: 'Color 1'
  //     },
  //     {
  //       hex_value: '#C8B38A',
  //       colour_name: 'Color 2'
  //     },
  //     {
  //       hex_value: '#668D9F',
  //       colour_name: 'Color 3'
  //     },
  //     {
  //       hex_value: '#36312C',
  //       colour_name: 'Color 4'
  //     }
  //   ]
  // },
  // {
  //   id: 1013,
  //   brand: 'lotus cosmetics usa',
  //   name: 'Eye Shadow Palette Seduction',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'http://www.purpicks.com/wp-content/uploads/2018/03/lotus-cosmetics-usa-eye-shadow-palette-seduction.png',
  //   product_link: 'https://www.purpicks.com/product/lotus-cosmetics-usa/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'A four-color eyeshadow palette infused with natural minerals and antioxidant rich extracts to help prevent fine lines and wrinkles. Easily blendable shades give you the ability to create effortlessly natural or dramatic looks. Made with natural and organic ingredients.',
  //   rating: null,
  //   category: 'palette',
  //   product_type: 'eyeshadow',
  //   tag_list: ['purpicks', 'Organic', 'USDA Organic'],
  //   created_at: '2018-06-30T19:19:30.422Z',
  //   updated_at: '2018-09-02T22:52:06.762Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1013.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/013/original/open-uri20180630-4-1x4t7kg?1530390367',
  //   product_colors: [
  //     {
  //       hex_value: '#EBBC9D',
  //       colour_name: 'Color 1'
  //     },
  //     {
  //       hex_value: '#EFB1B0',
  //       colour_name: 'Color 2'
  //     },
  //     {
  //       hex_value: '#5E3A31',
  //       colour_name: 'Color 3'
  //     },
  //     {
  //       hex_value: '#72504A',
  //       colour_name: 'Color 4'
  //     }
  //   ]
  // },
  // {
  //   id: 1012,
  //   brand: 'lotus cosmetics usa',
  //   name: 'Eye Shadow Palette Cocoa',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/03/lotus-cosmetics-usa-eye-shadow-palette-cocoa.png',
  //   product_link: 'https://www.purpicks.com/product/lotus-cosmetics-usa/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'A four-color eyeshadow palette infused with natural minerals and antioxidant rich extracts to help prevent fine lines and wrinkles. Easily blendable shades give you the ability to create effortlessly natural or dramatic looks. Made with natural and organic ingredients.',
  //   rating: null,
  //   category: 'palette',
  //   product_type: 'eyeshadow',
  //   tag_list: ['purpicks', 'Organic', 'USDA Organic'],
  //   created_at: '2018-06-30T19:19:30.347Z',
  //   updated_at: '2018-09-02T22:52:06.753Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1012.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/012/original/open-uri20180630-4-1rlpw5a?1530390367',
  //   product_colors: [
  //     {
  //       hex_value: '#E7CBB7',
  //       colour_name: 'Color 1'
  //     },
  //     {
  //       hex_value: '#BE9794',
  //       colour_name: 'Color 2'
  //     },
  //     {
  //       hex_value: '#B5816B',
  //       colour_name: 'Color 3'
  //     },
  //     {
  //       hex_value: '#9E6D64',
  //       colour_name: 'Color 4'
  //     }
  //   ]
  // },
  // {
  //   id: 1011,
  //   brand: 'green people',
  //   name: 'Volumising Mascara',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/06/Green-People-Volumising-Mascara-Black.jpg',
  //   product_link:
  //     'https://www.purpicks.com/product/green-people-volumising-mascara-black/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'Natural mineral pigments for intense natural black colour. Nourish roots and condition lashes with 98percent natural ingredients. Unique precision brush offers excellent lash definition Natural cellulose micro spheres give outstanding volume Vitamin E, Sunflower oil & Organic Beeswax',
  //   rating: null,
  //   category: '',
  //   product_type: 'mascara',
  //   tag_list: ['purpicks', 'EcoCert'],
  //   created_at: '2018-06-30T19:19:30.303Z',
  //   updated_at: '2018-09-02T22:52:06.581Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1011.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/011/original/open-uri20180630-4-ojcehy?1530390366',
  //   product_colors: [
  //     {
  //       hex_value: '#000000',
  //       colour_name: 'Black'
  //     }
  //   ]
  // },
  // {
  //   id: 1010,
  //   brand: 'coastal classic creation',
  //   name: 'Conch Lipstick',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/06/coastal-classic-creations-conch-lipstick.png',
  //   product_link:
  //     'https://www.purpicks.com/product/coastal-classic-creations-conch-lipstick/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     "Coastal Classic Creations Conch Lipstick is a flattering, stylish, rich winterberry color. This lipstick is paraben-free and vegan and contains sunflower oil which is rich in Vitamin E and which may protect against damage from the sun. To boost the product's effectiveness, we add sesame seed oil which contains Vitamins E, D, and B complex to provide moisture and neutralize free radicals. Companions well with Boysenberry Lip Crayon.",
  //   rating: null,
  //   category: 'lipstick',
  //   product_type: 'lipstick',
  //   tag_list: ['purpicks', 'EWG Verified', 'Hypoallergenic', 'No Talc'],
  //   created_at: '2018-06-30T19:19:30.184Z',
  //   updated_at: '2018-09-02T22:52:06.571Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1010.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/010/original/open-uri20180630-4-dywvay?1530390364',
  //   product_colors: [
  //     {
  //       hex_value: '#822A42',
  //       colour_name: 'Raspberry'
  //     },
  //     {
  //       hex_value: '#8D394F',
  //       colour_name: 'Conch'
  //     },
  //     {
  //       hex_value: '#9F4353',
  //       colour_name: 'Crushed Rose'
  //     },
  //     {
  //       hex_value: '#A15F55',
  //       colour_name: 'Tender Toffee'
  //     },
  //     {
  //       hex_value: '#F09178',
  //       colour_name: 'Deja Vu'
  //     },
  //     {
  //       hex_value: '#B83037',
  //       colour_name: 'Sun Dial'
  //     },
  //     {
  //       hex_value: '#AD4C46',
  //       colour_name: 'Terra Gold'
  //     },
  //     {
  //       hex_value: '#A96B67',
  //       colour_name: 'Cowry'
  //     },
  //     {
  //       hex_value: '#B73849',
  //       colour_name: 'Tender'
  //     },
  //     {
  //       hex_value: '#D06C89',
  //       colour_name: 'Nautilus'
  //     },
  //     {
  //       hex_value: '#C49082',
  //       colour_name: 'Extremely Nude'
  //     },
  //     {
  //       hex_value: '#B78592',
  //       colour_name: 'Ginger Snap'
  //     },
  //     {
  //       hex_value: '#DD786A',
  //       colour_name: 'Coral Shell'
  //     },
  //     {
  //       hex_value: '#E5A4BF',
  //       colour_name: 'Twilight'
  //     },
  //     {
  //       hex_value: '#954D44',
  //       colour_name: 'Sand Dollar'
  //     }
  //   ]
  // },
  // {
  //   id: 1009,
  //   brand: "c'est moi",
  //   name: 'Reflect Lip Gloss',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/04/cest-moi-reflect-lip-gloss-1.png',
  //   product_link: 'https://www.purpicks.com/product/reflect-lip-gloss/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'These essential lip gloss shades are enriched with a blend of natural and organic oils to deliver the perfect amount of sheer color and shine to lips. Enriched with a blend of natural and organic oils, this essential gloss delivers a wash of sheer color and promises shine—not stickiness. Made for Young Delicate Skin Types NO – Talc, Fragrance, Parabens, Phthalates, Sulfates, Mineral oil or Propylene Glycol Dermatologist Tested Clinically Tested on Sensitive Skin, Hypoallergenic, Made with Natural & Organic Ingredients',
  //   rating: null,
  //   category: 'lip_gloss',
  //   product_type: 'lipstick',
  //   tag_list: ['purpicks', 'EWG Verified', 'Hypoallergenic', 'No Talc'],
  //   created_at: '2018-06-30T19:19:30.116Z',
  //   updated_at: '2018-09-02T22:52:06.562Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1009.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/009/original/open-uri20180630-4-xznfso?1530390363',
  //   product_colors: [
  //     {
  //       hex_value: '#DF585A',
  //       colour_name: 'Rise'
  //     },
  //     {
  //       hex_value: '#E4CFCE',
  //       colour_name: 'Opulence'
  //     },
  //     {
  //       hex_value: '#D6474B',
  //       colour_name: 'Bliss'
  //     }
  //   ]
  // },
  // {
  //   id: 1008,
  //   brand: "c'est moi",
  //   name: 'Muse Mascara',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/04/cest-moi-muse-mascara.png',
  //   product_link: 'https://www.purpicks.com/product/muse-mascara/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'Define, lengthen and nourish lashes with organic shea butter, grapeseed and jojoba oils. Lashes are coated gently and evenly without clumping, transferring or flaking. Long, lush lashes begin with this luxe mascara that is formulated with organic shea butter and oils of grape and jojoba seed to help nourish and condition as it lengthens and defines. Velvety and smooth, it coats lashes gently and evenly without clumping, transferring, or flaking. Made for Young Delicate Skin Types. NO – Talc, Fragrance, Parabens, Phthalates, Sulfates, Mineral oil or Propylene Glycol',
  //   rating: null,
  //   category: '',
  //   product_type: 'mascara',
  //   tag_list: ['purpicks', 'EWG Verified', 'Hypoallergenic', 'No Talc'],
  //   created_at: '2018-06-30T19:19:30.056Z',
  //   updated_at: '2018-09-02T22:52:06.553Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1008.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/008/original/open-uri20180630-4-bk6ign?1530390362',
  //   product_colors: [
  //     {
  //       hex_value: '#000000',
  //       colour_name: 'Black'
  //     }
  //   ]
  // },
  // {
  //   id: 1007,
  //   brand: "c'est moi",
  //   name: 'Luminary Lip Crayon',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/04/cest-moi-luminary-lip-crayon.png',
  //   product_link: 'https://www.purpicks.com/product/luminary-lip-crayon/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'These nourishing and creamy lip crayons come in 6 perfectly pigmented shades that go from subtle to statement. This easy-to-use lip crayon delivers velvety application and perfectly pigmented color, plus a nourishing formula with a creamy, consistent texture designed to make your lips appear soft and smooth. Apply sparingly for a subtle look, or generously to make a statement—either way, your lips will feel as beautiful as they look! Made for Young Delicate Skin Types NO – Talc, Fragrance, Parabens, Phthalates, Sulfates, Mineral oil or Propylene Glycol Dermatologist Tested Clinically Tested On Sensitive Skin Hypoallergenic',
  //   rating: null,
  //   category: 'pencil',
  //   product_type: 'lip_liner',
  //   tag_list: ['purpicks', 'EWG Verified', 'Hypoallergenic', 'No Talc'],
  //   created_at: '2018-06-30T19:19:29.975Z',
  //   updated_at: '2018-09-02T22:52:06.545Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1007.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/007/original/open-uri20180630-4-1m2hvd7?1530390361',
  //   product_colors: [
  //     {
  //       hex_value: '#B89093',
  //       colour_name: 'Fresh'
  //     },
  //     {
  //       hex_value: '#CB7579',
  //       colour_name: 'True'
  //     },
  //     {
  //       hex_value: '#EB5D92',
  //       colour_name: 'Fierce'
  //     },
  //     {
  //       hex_value: '#E74857',
  //       colour_name: 'Vivid'
  //     },
  //     {
  //       hex_value: '#CC5257',
  //       colour_name: 'Brave'
  //     },
  //     {
  //       hex_value: '#65373E',
  //       colour_name: 'Courage'
  //     }
  //   ]
  // },
  // {
  //   id: 1006,
  //   brand: "c'est moi",
  //   name: 'Fearless Eyeliner',
  //   price: '0.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.purpicks.com/wp-content/uploads/2018/04/cest-moi-fearless-eyeliner-pencil.png',
  //   product_link: 'https://www.purpicks.com/product/fearless-eyeliner/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     'Make eyes pop with this velvety smooth eyeliner that glides on effortlessly and precisely. Make your eyes pop with this sleek, easy-to-use eyeliner. Formulated with both jojoba seed oil and shea butter, its velvety smooth formula glides on effortlessly and precisely. To sharpen, place inside sharpener and turn the pencil gently to create a working tip. Made for Young Delicate Skin Types NO – Talc, Fragrance, Parabens, Phthalates, Sulfates, Mineral oil or Propylene Glycol  Dermatologist Tested Clinically Tested on Sensitive Skin Hypoallergenic Made with Natural Ingredients',
  //   rating: null,
  //   category: 'pencil',
  //   product_type: 'eyeliner',
  //   tag_list: ['purpicks', 'EWG Verified', 'Hypoallergenic', 'No Talc'],
  //   created_at: '2018-06-30T19:19:29.910Z',
  //   updated_at: '2018-09-02T22:52:06.537Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1006.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/006/original/open-uri20180630-4-u4c1jh?1530390360',
  //   product_colors: [
  //     {
  //       hex_value: '#B8A89A',
  //       colour_name: 'Fearless'
  //     }
  //   ]
  // },
  // {
  //   id: 1005,
  //   brand: 'alva',
  //   name: 'Liquid Eye Shadow',
  //   price: '9.95',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'http://www.purpicks.com/wp-content/uploads/2018/06/Alva-Liquid-Eye-Shadow-1-Pale-Almond.png',
  //   product_link:
  //     'http://www.purpicks.com/product/alva-liquid-eye-shadow-1-pale-almond/',
  //   website_link: 'https://purpicks.com/',
  //   description:
  //     "Our Liquid Edition Eye Shadows have been a real winner since their launch and are a real first of their kind in natural and organic make-up. Whether you're looking for a striking or glamorous look for night time, or something more subtle and natural for wearing during the day, there is a shade for everyone. They dry quickly, and depending on the depth of colour desired, can be blended in on application or left to dry before blending for a more vivid look. Layering is also possible, but however you choose to use these liquid eye shadows they won't gather in crow's feet or fine lines around the eyes. The inclusion of patented beta glucan also means they're perfect for sensitive eyes. Pale Almond is subtle, natural, and perfect for daytime wear, and compliments our Bronzed Hazel liquid eye shadow if a duo tone is desired.",
  //   rating: null,
  //   category: 'cream',
  //   product_type: 'eyeshadow',
  //   tag_list: ['purpicks', 'Organic', 'Vegan'],
  //   created_at: '2018-06-30T19:19:29.708Z',
  //   updated_at: '2018-09-02T22:52:06.744Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1005.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/005/original/open-uri20180630-4-1eau5wj?1530390360',
  //   product_colors: [
  //     {
  //       hex_value: '#B8A89A',
  //       colour_name: 'Pale Almond'
  //     }
  //   ]
  // },
  // {
  //   id: 1004,
  //   brand: 'glossier',
  //   name: 'Stretch Concealer',
  //   price: '22.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://static-assets.glossier.com/production/spree/images/attachments/000/001/631/portrait_normal/SC_Carousel_1_copy_2.jpg?1506948615',
  //   product_link: 'https://www.glossier.com/products/stretch-concealer',
  //   website_link: 'https://www.glossier.com',
  //   description:
  //     'A traditional concealer sets to a stiff, flat, dry finish—a dead giveaway that you’re wearing it. Ours is a new type of concealer with elastic micro waxes that move with your face instead of caking on top of it, and nourishing oils that give a dewy, glowing finish. The buildable formula covers everything from dark circles to redness and blemishes. In five shades painstakingly developed to enhance, brighten, and—most importantly—completely disappear into the widest range of skin tones.',
  //   rating: null,
  //   category: 'concealer',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-27T03:11:01.369Z',
  //   updated_at: '2017-12-27T03:12:42.235Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1004.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/004/original/open-uri20171227-4-1wp63cr?1514344255',
  //   product_colors: [
  //     {
  //       hex_value: '#96644A',
  //       colour_name: 'Deep'
  //     },
  //     {
  //       hex_value: '#4F3425',
  //       colour_name: 'Rich'
  //     },
  //     {
  //       hex_value: '#BC8E5A',
  //       colour_name: 'Dark'
  //     },
  //     {
  //       hex_value: '#E5BE93',
  //       colour_name: 'Medium'
  //     },
  //     {
  //       hex_value: '#F1DBC3',
  //       colour_name: 'Light'
  //     }
  //   ]
  // },
  // {
  //   id: 1003,
  //   brand: 'glossier',
  //   name: 'Cloud Paint',
  //   price: '22.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://static-assets.glossier.com/production/spree/images/attachments/000/001/241/portrait_normal/CP_PDP_02.jpg?1488382023',
  //   product_link: 'https://www.glossier.com/products/cloud-paint',
  //   website_link: 'https://www.glossier.com',
  //   description:
  //     'With Cloud Paint, we set out to make blush the high point of your routine. The pillowy, gel-cream formula is designed to be the most user-friendly cheek color in existence. If you can finger paint, you can Cloud Paint—simply dab it onto cheeks wherever you please. It’s seamless, sheer, and buildable (i.e. it’s hard to accidentally apply too much). Inspired by gradient pink NYC sunsets, the shades are optimized to work across a wide range of skin tones for a healthy, flushed-from-within glow.',
  //   rating: null,
  //   category: 'cream',
  //   product_type: 'blush',
  //   tag_list: [],
  //   created_at: '2017-12-27T03:04:32.907Z',
  //   updated_at: '2017-12-27T03:05:09.354Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1003.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/003/original/open-uri20171227-4-13ivnwv?1514343870',
  //   product_colors: [
  //     {
  //       hex_value: '#C78B7C',
  //       colour_name: 'Dusk'
  //     },
  //     {
  //       hex_value: '#F3D1E0',
  //       colour_name: 'Puff'
  //     },
  //     {
  //       hex_value: '#F1BB9E',
  //       colour_name: 'Beam'
  //     },
  //     {
  //       hex_value: '#B65F79',
  //       colour_name: 'Haze'
  //     }
  //   ]
  // },
  // {
  //   id: 1002,
  //   brand: 'glossier',
  //   name: 'Wowder',
  //   price: '27.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://static-assets.glossier.com/production/spree/images/attachments/000/001/476/portrait_normal/carousel-1.jpg?1501534121',
  //   product_link: 'https://www.glossier.com/products/wowder',
  //   website_link: 'https://www.glossier.com',
  //   description:
  //     'It’s not powder, it’s Wowder—for non-dewy days. Wowder will: cut shine, blur the appearance of pores, set makeup, look like skin. Wowder won’t: leave a chalky film, cake into fine lines, flatten skin’s texture, or announce its presence in photographs (no camera flashback). In three sheer, glowy, adaptable shades...because no skin tone is HD-white. Pair with the angelically soft Wowder Brush for all-over and targeted application—perfect size, perfect shape, perfect density for the optimal matte-not-flat finish.',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-27T02:50:48.250Z',
  //   updated_at: '2017-12-27T02:53:24.450Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1002.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/002/original/open-uri20171227-4-1ne7r73?1514343097',
  //   product_colors: [
  //     {
  //       hex_value: '#EABC98',
  //       colour_name: 'Light/Medium'
  //     },
  //     {
  //       hex_value: '#9B674E',
  //       colour_name: 'Dark/Deep'
  //     },
  //     {
  //       hex_value: '#714831',
  //       colour_name: 'Rich'
  //     }
  //   ]
  // },
  // {
  //   id: 1001,
  //   brand: 'glossier',
  //   name: 'Haloscope',
  //   price: '27.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://static-assets.glossier.com/production/spree/images/attachments/000/001/109/portrait_normal/Haloscope_01-compressor.jpg?1498613775',
  //   product_link: 'https://www.glossier.com/products/haloscope',
  //   website_link: 'https://www.glossier.com',
  //   description:
  //     'Skincare + makeup = Haloscope, the galaxy’s first dew effect highlighter. It’s a dual-delivery formula: the outer halo is infused with genuine crystal extracts for all-day enlightenment, with a solid oil core of vitamin-rich moisturizers for a hydrated, dewy finish. Expect an otherworldly sheen that’s never dry, never glittery. Comes in…',
  //   rating: null,
  //   category: 'highlighter',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-27T02:44:12.059Z',
  //   updated_at: '2017-12-27T02:58:27.019Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1001.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/001/original/open-uri20171227-4-1das33x?1514342770',
  //   product_colors: [
  //     {
  //       hex_value: '#D19668',
  //       colour_name: 'Topaz'
  //     },
  //     {
  //       hex_value: '#FBE9E1',
  //       colour_name: 'Quartz'
  //     },
  //     {
  //       hex_value: '#F0EDEB',
  //       colour_name: 'Moonstone'
  //     }
  //   ]
  // },
  // {
  //   id: 1000,
  //   brand: 'glossier',
  //   name: 'Perfecting Skin Tint',
  //   price: '32.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://static-assets.glossier.com/production/spree/images/attachments/000/000/726/portrait_normal/PST_Carousel_02-compressor.jpg?1470088244',
  //   product_link: 'https://www.glossier.com/products/perfecting-skin-tint',
  //   website_link: 'https://www.glossier.com',
  //   description:
  //     'In the land between bare skin and makeup makeup exists the imperceptible wash of color that is our Perfecting Skin Tint. What does it do? Evens out discoloration and leaves your face looking toned, smooth, and dewy. The breathable, ultra thin formula auto-fits to skin, making application as simple as throwing on moisturizer. What won’t it do? Hide your freckles, spackle your pores, or erase any other evidence that you are, in fact, a real human being.',
  //   rating: null,
  //   category: null,
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-27T02:34:21.781Z',
  //   updated_at: '2017-12-27T02:57:42.311Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/1000.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/000/original/open-uri20171227-4-14arcgf?1514342096',
  //   product_colors: [
  //     {
  //       hex_value: '#F1DBC3',
  //       colour_name: 'Light'
  //     },
  //     {
  //       hex_value: '#E5BE93',
  //       colour_name: 'Medium'
  //     },
  //     {
  //       hex_value: '#4F3425',
  //       colour_name: 'Rich'
  //     },
  //     {
  //       hex_value: '#BC8E5A',
  //       colour_name: 'Dark'
  //     },
  //     {
  //       hex_value: '#96644A',
  //       colour_name: 'Deep'
  //     }
  //   ]
  // },
  // {
  //   id: 999,
  //   brand: 'glossier',
  //   name: 'Generation G',
  //   price: '20.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://static-assets.glossier.com/production/spree/images/attachments/000/001/239/portrait_normal/GenG2.jpg?1487709747',
  //   product_link: 'https://www.glossier.com/products/generation-g',
  //   website_link: 'https://www.glossier.com',
  //   description:
  //     "Generation G is a new kind of lip color that gives the look and finish of just-blotted lipstick, without the blot. We’ve created a short list of the six most important shades, with dialed-down pigment loads for a casual look: Zip, Leo, Crush, and Jam, along with the super subtle Cake and Like, which give some oomph to lighter lip tones. They’re lipsticks that adapt to you, not the other way around, so they'll appear a bit different on everyone as your natural lip color shows through. The effect? Diffused, matte goodness—just swipe it on.",
  //   rating: null,
  //   category: null,
  //   product_type: 'lipstick',
  //   tag_list: [],
  //   created_at: '2017-12-27T02:21:55.363Z',
  //   updated_at: '2017-12-27T02:55:18.719Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/999.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/999/original/open-uri20171227-4-2ul0s6?1514341420',
  //   product_colors: [
  //     {
  //       hex_value: '#F4E1D7',
  //       colour_name: 'Cake'
  //     },
  //     {
  //       hex_value: '#E5C2CF',
  //       colour_name: 'Like'
  //     },
  //     {
  //       hex_value: '#CB6382',
  //       colour_name: 'Crush'
  //     },
  //     {
  //       hex_value: '#974A72',
  //       colour_name: 'Jam'
  //     },
  //     {
  //       hex_value: '#A46C58',
  //       colour_name: 'Leo'
  //     },
  //     {
  //       hex_value: '#DE6262',
  //       colour_name: 'Zip'
  //     }
  //   ]
  // },
  // {
  //   id: 998,
  //   brand: 'nyx',
  //   name: 'Fly With Me Mascara',
  //   price: '9.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwd5e25f68/ProductImages/Eyes/Fly_With_Me_Mascara/800897141431_flywithmemascara_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/fly-with-me-mascara/NYX_018.html?cgid=mascara',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Your lashes will reach new heights with our Fly With Me Mascara. Lashes appear more dramatic making average lashes look super-long and ultra dark. Pros adore the intense yet lightweight coverage and how the unique volumizing wand boosts even the wimpiest of the eyelashes.',
  //   rating: null,
  //   category: null,
  //   product_type: 'mascara',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:33:07.960Z',
  //   updated_at: '2017-12-24T02:33:08.735Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/998.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/998/original/data?1514082787',
  //   product_colors: []
  // },
  // {
  //   id: 997,
  //   brand: 'nyx',
  //   name: 'Propel My Eyes Mascara',
  //   price: '9.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw8068dbc4/ProductImages/Eyes/Propel_My_Eyes_Mascara/propelmyeyesmascara_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/propel-my-eyes-mascara/NYX_020.html?cgid=mascara',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Get ready for aerodynamic lashes! The brush boasts a four-way pinwheel design that lifts lashes up and coats them in a conditioning formula enriched with Pro Vitamin B5 D-Panthenol and Green Tea Extract. Take it for a spin and enjoy!',
  //   rating: null,
  //   category: null,
  //   product_type: 'mascara',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:33:07.488Z',
  //   updated_at: '2017-12-24T02:33:07.828Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/997.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/997/original/data?1514082787',
  //   product_colors: []
  // },
  // {
  //   id: 996,
  //   brand: 'nyx',
  //   name: 'Proof It! Waterproof Mascara Top Coat',
  //   price: '7.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw31cb2063/ProductImages/Eyes/Proof_It_Waterproof_Mascara_Top_Coat/proofitwaterproofmascaratopcoat_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/proof-it-waterproof-mascara-top-coat/NYX_179.html?cgid=mascara',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'With just two swipes our lash top coat transforms your favorite mascara from being conventional to waterproof! Our formula helps prevent clumping and leaves lashes looking gorgeous.',
  //   rating: null,
  //   category: null,
  //   product_type: 'mascara',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:33:06.827Z',
  //   updated_at: '2017-12-24T02:33:07.353Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/996.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/996/original/data?1514082786',
  //   product_colors: []
  // },
  // {
  //   id: 995,
  //   brand: 'nyx',
  //   name: 'Big & Loud Lash Primer',
  //   price: '7.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwa4949d3a/ProductImages/Eyes/Big_And_Loud_Lash_Primer/bigandloudlashprimer_alt1.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/big-and-loud-lash-primer/NYX_166.html?cgid=mascara',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Give your lashes a boost with our Big & Loud Lash Primer. It works hand in hand with your favorite NYX Professional Makeup mascara to enhance the length and volume of lashes.',
  //   rating: null,
  //   category: null,
  //   product_type: 'mascara',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:33:06.023Z',
  //   updated_at: '2017-12-24T02:33:06.430Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/995.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/995/original/data?1514082785',
  //   product_colors: []
  // },
  // {
  //   id: 994,
  //   brand: 'nyx',
  //   name: 'Double Stacked Mascara',
  //   price: '15.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw255fbdae/ProductImages/2016/Eyes/Double_Stacked_Mascara/doublestackedmascara_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/double-stacked-mascara/NYX_341.html?cgid=mascara',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description: '',
  //   rating: null,
  //   category: null,
  //   product_type: 'mascara',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:33:05.545Z',
  //   updated_at: '2017-12-24T02:33:05.848Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/994.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/994/original/open-uri20171224-4-1shcfum?1514082785',
  //   product_colors: []
  // },
  // {
  //   id: 993,
  //   brand: 'nyx',
  //   name: 'Doll Eye Mascara',
  //   price: '9.5',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw2e036256/ProductImages/Eyes/Doll_Eye_Mascara/800897123543_dolleyemascara_longlash_black_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/doll-eye-mascara/NYX_017.html?cgid=mascara',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Hello, dollface! For irresistibly fluttery eyelashes, try this mascara on for size. Doll Eye Mascara uses a unique blend of natural oil and nylon fibers to extend lashes to almost faux proportions. Choose from our Doll Eye Mascara in Long Lash, Volume or Waterproof.',
  //   rating: null,
  //   category: null,
  //   product_type: 'mascara',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:33:04.665Z',
  //   updated_at: '2017-12-24T02:33:05.096Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/993.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/993/original/data?1514082784',
  //   product_colors: [
  //     {
  //       hex_value: '#141414',
  //       colour_name: 'Waterproof - Black'
  //     }
  //   ]
  // },
  // {
  //   id: 992,
  //   brand: 'nyx',
  //   name: 'The Skinny Mascara',
  //   price: '7.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwcb91e11f/ProductImages/Eyes/The_Skinny_Mascara/theskinnymascara_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/the-skinny-mascara/NYX_183.html?cgid=mascara',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Our ultra-skinny mascara brush is perfect for coating hard to reach lashes from root to tipâ€”even along the bottom lash line! Finally the smallest, thinnest lashes can get extra special attention too. The water resistant formula and micro brush work together to create the appearance of long beautifully defined lashes.',
  //   rating: null,
  //   category: null,
  //   product_type: 'mascara',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:33:02.793Z',
  //   updated_at: '2017-12-24T02:33:04.446Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/992.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/992/original/data?1514082782',
  //   product_colors: []
  // },
  // {
  //   id: 991,
  //   brand: 'nyx',
  //   name: 'Worth the Hype Volumizing & Lengthening Mascara',
  //   price: '8.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwb654afff/ProductImages/2018/Eyes/Worth_The_Hype_Volumizing_Mascara/800897140250_worththehypevolumizingmascara_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/worth-the-hype-volumizing-lengthening-mascara/NYX_590.html?cgid=mascara',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Take our word for it: if you want your lashes to look darker, fuller and lethally gorgeous all day long, then our new Worth the Hype Volumizing & Lengthening Mascara is your jam. A breeze to apply and comfortable to wear, this buildable formula actually does what it promises, making it “worth the hype” in every which way. It also features a brush that tapers at the tip, so you can brush, build, and lengthen even the littlest baby lashes at the inner corners of your eyes.',
  //   rating: null,
  //   category: null,
  //   product_type: 'mascara',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:33:02.251Z',
  //   updated_at: '2017-12-24T02:33:02.648Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/991.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/991/original/data?1514082782',
  //   product_colors: []
  // },
  // {
  //   id: 990,
  //   brand: 'nyx',
  //   name: 'Boudoir Mascara Collection',
  //   price: '6.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwda9f6cec/ProductImages/Eyes/Boudoir_Mascara_Collection/boudoirmascaracollection_main.jpg.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/boudoir-mascara-collection/NYX_060.html?cgid=mascara',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Every powder room should have our luxurious Boudoir Mascara Collection available in 7 elite formulas. Whether you want to darken, amp up the volume, or lengthen your lashes - we have a mascara that meets all your needs.',
  //   rating: null,
  //   category: null,
  //   product_type: 'mascara',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:33:00.623Z',
  //   updated_at: '2017-12-24T02:33:01.097Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/990.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/990/original/open-uri20171224-4-1xdrjhl?1514082780',
  //   product_colors: [
  //     {
  //       hex_value: '#131315',
  //       colour_name: 'Le Frou Frou'
  //     },
  //     {
  //       hex_value: '#232323',
  //       colour_name: 'Pin-Up Tease'
  //     },
  //     {
  //       hex_value: '#0D0D0D',
  //       colour_name: 'Provocateur'
  //     },
  //     {
  //       hex_value: '#141414',
  //       colour_name: 'Faux Lashes'
  //     },
  //     {
  //       hex_value: '#151515',
  //       colour_name: 'Le Chick Flick'
  //     },
  //     {
  //       hex_value: '#2B2B2B',
  //       colour_name: 'La Amoureux'
  //     },
  //     {
  //       hex_value: '#121212',
  //       colour_name: 'Za Za Zu'
  //     }
  //   ]
  // },
  // {
  //   id: 989,
  //   brand: 'nyx',
  //   name: 'Color Mascara',
  //   price: '7.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw8044f7e7/ProductImages/Eyes/Color_Mascara/colormascara_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/color-mascara/NYX_124.html?cgid=mascara',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Think beyond the ordinary with these fun and vibrant new mascara options from NYX Professional Makeup. Packed full of pigments and delivering on the promise of intense color payoff, everyone will notice your fabulous eye lash color. Go for it - we dare you to try all eight shades!',
  //   rating: null,
  //   category: null,
  //   product_type: 'mascara',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:59.193Z',
  //   updated_at: '2017-12-24T02:32:59.610Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/989.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/989/original/open-uri20171224-4-1gh72x0?1514082779',
  //   product_colors: [
  //     {
  //       hex_value: '#FFFAFF',
  //       colour_name: 'Purple'
  //     },
  //     {
  //       hex_value: '#FBFCFF',
  //       colour_name: 'Blue'
  //     },
  //     {
  //       hex_value: '#FFF9F3',
  //       colour_name: 'Brown'
  //     },
  //     {
  //       hex_value: '#FEFBF6',
  //       colour_name: 'Perfect Pear'
  //     },
  //     {
  //       hex_value: '#FBFAF6',
  //       colour_name: 'Coral Reef'
  //     },
  //     {
  //       hex_value: '#F4FAF6',
  //       colour_name: 'Mint Julep'
  //     },
  //     {
  //       hex_value: '#F7F5F8',
  //       colour_name: 'Forget Me Not'
  //     },
  //     {
  //       hex_value: '#F5F3F4',
  //       colour_name: 'Pink Petals'
  //     }
  //   ]
  // },
  // {
  //   id: 988,
  //   brand: 'nyx',
  //   name: 'Super Luscious Mascara',
  //   price: '7.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw97d7c9f2/ProductImages/Eyes/Super_Luscious_Mascara/superlusciousmascara_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/super-luscious-mascara/NYX_122.html?cgid=mascara',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Everyone will notice your gorgeous lashes with our Super Luscious Mascara Collection. Featuring seven different brushes, each fragrance-free mascara has something unique to offer. (Plus, they’re formulated with keratins, vitamins and naturally-derived waxes to nourish lashes!) There’s a Super Luscious Mascara for your essential lash looks.',
  //   rating: null,
  //   category: null,
  //   product_type: 'mascara',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:57.547Z',
  //   updated_at: '2017-12-24T02:32:57.912Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/988.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/988/original/open-uri20171224-4-1lbpgue?1514082777',
  //   product_colors: [
  //     {
  //       hex_value: '#252525',
  //       colour_name: 'XXL'
  //     },
  //     {
  //       hex_value: '#0E0E0E',
  //       colour_name: 'Badunkadunk'
  //     },
  //     {
  //       hex_value: 'gray7',
  //       colour_name: 'Voluptuous'
  //     },
  //     {
  //       hex_value: '#373737',
  //       colour_name: 'Full Figured'
  //     },
  //     {
  //       hex_value: '#191919',
  //       colour_name: 'Curvaceous'
  //     },
  //     {
  //       hex_value: '#101010',
  //       colour_name: 'More To Love'
  //     }
  //   ]
  // },
  // {
  //   id: 987,
  //   brand: 'nyx',
  //   name: 'Eyebrow Marker',
  //   price: '9.75',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwe10bfffa/ProductImages/Eyes/Eyebrow_Marker/eyebrowmarker_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/eyebrow-marker/NYX_034.html?cgid=brows',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Sculpt fill in and enhance your natural eyebrows with our felt-tip Eyebrow Marker. The color resists smearing and smudging and wears all day long.',
  //   rating: null,
  //   category: null,
  //   product_type: 'eyebrow',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:56.532Z',
  //   updated_at: '2017-12-24T02:32:56.924Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/987.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/987/original/data?1514082776',
  //   product_colors: [
  //     {
  //       hex_value: '#8B6534',
  //       colour_name: 'Medium'
  //     },
  //     {
  //       hex_value: '#4D2712',
  //       colour_name: 'Deep'
  //     }
  //   ]
  // },
  // {
  //   id: 986,
  //   brand: 'nyx',
  //   name: 'Eyebrow Kit With Stencil',
  //   price: '15.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw2636bb00/ProductImages/Eyes/Eyebrow_Kit_with_Stencils/800897142957_eyebrowkitstencil_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/eyebrow-kit-with-stencil/NYX_033.html?cgid=brows',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Our all-in-one eyebrow kit has everything you need to keep your brows looking on point. The kit includes 4 universally flattering shades for all brow tones a slanted eyebrow brush an eyebrow comb and 3 different stencils to help you get the perfect shape for your face. Now you can fill define and shape your brows like never before!',
  //   rating: null,
  //   category: null,
  //   product_type: 'eyebrow',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:56.029Z',
  //   updated_at: '2017-12-24T02:32:56.324Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/986.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/986/original/open-uri20171224-4-14z5x4y?1514082775',
  //   product_colors: []
  // },
  // {
  //   id: 985,
  //   brand: 'nyx',
  //   name: 'Eyebrow Push-Up Bra',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwadba3ae6/ProductImages/Eyes/Eyebrow_Push_Up_Bra/eyebrowpushupbra_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/eyebrow-push-up-bra/NYX_030.html?cgid=brows',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Play up your natural assets with this dual-sided pencil that delivers sensual eyebrows in just a few minutes. Use the universally flattering brow pencil to draw and fill in your arches and the highlighting end to lift and brighten. Like the LBD of pencils the effect is captivating and undeniably sexy.',
  //   rating: null,
  //   category: null,
  //   product_type: 'eyebrow',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:55.489Z',
  //   updated_at: '2017-12-24T02:32:55.884Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/985.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/985/original/data?1514082775',
  //   product_colors: []
  // },
  // {
  //   id: 984,
  //   brand: 'nyx',
  //   name: '3-Dimensional Brow Marker',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw1e63b16f/ProductImages/2017/Eyes/3Dimensional_Brow_Marker/3dimensionalbrowmarker_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/3-dimensional-brow-marker/NYX_499.html?cgid=brows',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description: '',
  //   rating: null,
  //   category: null,
  //   product_type: 'eyebrow',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:54.098Z',
  //   updated_at: '2017-12-24T02:32:54.491Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/984.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/984/original/open-uri20171224-4-1uh3nw7?1514082773',
  //   product_colors: [
  //     {
  //       hex_value: '#B78F69',
  //       colour_name: 'Blonde'
  //     },
  //     {
  //       hex_value: '#99663A',
  //       colour_name: 'Auburn'
  //     },
  //     {
  //       hex_value: '#56382D',
  //       colour_name: 'Chocolate Brown'
  //     },
  //     {
  //       hex_value: '#403028',
  //       colour_name: 'Charcoal'
  //     },
  //     {
  //       hex_value: '#765948',
  //       colour_name: 'Brunette'
  //     },
  //     {
  //       hex_value: '#8A6554',
  //       colour_name: 'Soft Brown'
  //     }
  //   ]
  // },
  // {
  //   id: 983,
  //   brand: 'nyx',
  //   name: 'Eyebrow Shaper',
  //   price: '8.75',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw7bb4049d/ProductImages/Eyes/Eyebrow_Shaper/eyebrowshaper_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/eyebrow-shaper/NYX_031.html?cgid=brows',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Tame unruly eyebrows with this ingenious wax pencil. The blend of waxes is enriched with Vitamin E and leaves arches in tip-top condition and impeccable shape with just a few strokes.',
  //   rating: null,
  //   category: null,
  //   product_type: 'eyebrow',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:53.558Z',
  //   updated_at: '2017-12-24T02:32:53.894Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/983.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/983/original/data?1514082773',
  //   product_colors: []
  // },
  // {
  //   id: 982,
  //   brand: 'nyx',
  //   name: "Build 'Em Up Brow Powder",
  //   price: '8.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw837424ec/ProductImages/2017/Eyes/Build_Em_Up_Brow_Powder/buildemupbrowpowder_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/build-em-up-brow-powder/NYX_446.html?cgid=brows',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description: '',
  //   rating: null,
  //   category: null,
  //   product_type: 'eyebrow',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:52.257Z',
  //   updated_at: '2017-12-24T02:32:52.646Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/982.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/982/original/open-uri20171224-4-15afdg3?1514082772',
  //   product_colors: [
  //     {
  //       hex_value: '#7B5C3F',
  //       colour_name: 'Blonde'
  //     },
  //     {
  //       hex_value: '#5E4C3E',
  //       colour_name: 'Taupe'
  //     },
  //     {
  //       hex_value: '#4C392B',
  //       colour_name: 'Soft Brown'
  //     },
  //     {
  //       hex_value: '#4F2F22',
  //       colour_name: 'Auburn'
  //     },
  //     {
  //       hex_value: '#151419',
  //       colour_name: 'Brunette'
  //     },
  //     {
  //       hex_value: '#0C160E',
  //       colour_name: 'Espresso'
  //     },
  //     {
  //       hex_value: '#0B0D0A',
  //       colour_name: 'Ash Brown'
  //     },
  //     {
  //       hex_value: 'gray3',
  //       colour_name: 'Black'
  //     }
  //   ]
  // },
  // {
  //   id: 981,
  //   brand: 'nyx',
  //   name: '3-in-1 Brow Pencil',
  //   price: '13.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw840d556c/ProductImages/2017/Eyes/3_in_1_Brow_Pencil/3in1browpencil_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/3-in-1-brow-pencil/NYX_407.html?cgid=brows',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'One unbeatable brow beautifier, three go-to goodies. Our versatile 3-in-1 Brow includes everything you need to build exquisite arches. A retractable pencil, Powder, and brow mascara, available in 10 pigmented shades. Achieve eyebrows that are as natural-looking or bold as you desire by applying these essentials alone or together. To combine ’em all, simply outline with the pencil and fill in with the Powder. Complete the look by setting your brows with a swipe of mascara.',
  //   rating: null,
  //   category: null,
  //   product_type: 'eyebrow',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:50.424Z',
  //   updated_at: '2017-12-24T02:32:50.840Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/981.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/981/original/open-uri20171224-4-1i8mko9?1514082770',
  //   product_colors: [
  //     {
  //       hex_value: '#FAFBF6',
  //       colour_name: 'Blonde'
  //     },
  //     {
  //       hex_value: '#FFFEFD',
  //       colour_name: 'Taupe'
  //     },
  //     {
  //       hex_value: '#FCFFFF',
  //       colour_name: 'Auburn'
  //     },
  //     {
  //       hex_value: '#FFFEFB',
  //       colour_name: 'Brunette'
  //     },
  //     {
  //       hex_value: '#FFFEFF',
  //       colour_name: 'Espresso'
  //     },
  //     {
  //       hex_value: '#FFFFFD',
  //       colour_name: 'Ash Brown'
  //     },
  //     {
  //       hex_value: 'white',
  //       colour_name: 'Black'
  //     }
  //   ]
  // },
  // {
  //   id: 980,
  //   brand: 'nyx',
  //   name: 'Proof It! Waterproof Eyebrow Primer',
  //   price: '7.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwa61027e6/ProductImages/Eyes/Proof_It_Waterproof_Eyebrow_Primer/proofitwaterproofeyebrowprimer_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/proof-it-waterproof-eyebrow-primer/NYX_153.html?cgid=brows',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Smooth and conditioning our clear eyebrow gel sets your brows in place all day, rain or shine. Apply over brows before shaping with powder to keep them in control. Our formulation was made specially formulated for thin sparse brows.',
  //   rating: null,
  //   category: null,
  //   product_type: 'eyebrow',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:49.631Z',
  //   updated_at: '2017-12-24T02:32:50.126Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/980.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/980/original/data?1514082769',
  //   product_colors: []
  // },
  // {
  //   id: 979,
  //   brand: 'nyx',
  //   name: 'Eyebrow Powder Pencil',
  //   price: '6.5',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw85601149/ProductImages/2017/Eyes/Eyebrow_Powder_Pencil/eyebrowpowderpencil_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/eyebrow-powder-pencil/NYX_408.html?cgid=brows',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Close your eyes and picture the perfect brows. Are they defined, yet delicate? Create the brows of this daydream with the brand new Eyebrow Powder Pencil. Our unique pencil’s superfine texture provides a powdery-soft, matte finish. Put the finishing touches on your arches by using the included spoolie brush to smooth out the rich color.',
  //   rating: null,
  //   category: null,
  //   product_type: 'eyebrow',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:46.856Z',
  //   updated_at: '2017-12-24T02:32:47.732Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/979.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/979/original/open-uri20171224-4-1wo69r1?1514082766',
  //   product_colors: [
  //     {
  //       hex_value: '#FFF0E2',
  //       colour_name: 'Blonde'
  //     },
  //     {
  //       hex_value: '#F7EFE4',
  //       colour_name: 'Taupe'
  //     },
  //     {
  //       hex_value: '#F5EBE2',
  //       colour_name: 'Soft Brown'
  //     },
  //     {
  //       hex_value: '#FBEFE3',
  //       colour_name: 'Caramel'
  //     },
  //     {
  //       hex_value: '#FBEBDB',
  //       colour_name: 'Auburn'
  //     },
  //     {
  //       hex_value: '#F6EDE4',
  //       colour_name: 'Brunette'
  //     },
  //     {
  //       hex_value: '#F6EBE5',
  //       colour_name: 'Espresso'
  //     },
  //     {
  //       hex_value: '#F7EDE4',
  //       colour_name: 'Ash Brown'
  //     },
  //     {
  //       hex_value: '#E1E1E1',
  //       colour_name: 'Black'
  //     }
  //   ]
  // },
  // {
  //   id: 978,
  //   brand: 'nyx',
  //   name: 'Precision Brow Pencil',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw9929b8e6/ProductImages/2017/Eyes/Precision_Brow_Pencil/precisionbrowpencil_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/precision-brow-pencil/NYX_450.html?cgid=brows',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description: '',
  //   rating: null,
  //   category: null,
  //   product_type: 'eyebrow',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:44.747Z',
  //   updated_at: '2017-12-24T02:32:45.190Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/978.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/978/original/open-uri20171224-4-odtm98?1514082764',
  //   product_colors: [
  //     {
  //       hex_value: '#C6B7B0',
  //       colour_name: 'Blonde'
  //     },
  //     {
  //       hex_value: '#C2B4A9',
  //       colour_name: 'Taupe'
  //     },
  //     {
  //       hex_value: '#BDB5AA',
  //       colour_name: 'Soft Brown'
  //     },
  //     {
  //       hex_value: '#BBAEA5',
  //       colour_name: 'Ash Brown'
  //     },
  //     {
  //       hex_value: '#A09488',
  //       colour_name: 'Espresso'
  //     },
  //     {
  //       hex_value: '#8D8988',
  //       colour_name: 'Black'
  //     },
  //     {
  //       hex_value: '#A79B9D',
  //       colour_name: 'Charcoal'
  //     },
  //     {
  //       hex_value: '#D5A8AB',
  //       colour_name: 'Auburn'
  //     }
  //   ]
  // },
  // {
  //   id: 977,
  //   brand: 'nyx',
  //   name: 'Sculpt & Highlight Brow Contour',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw2d356326/ProductImages/2016/Eyes/Sculpt_And_Highlight_Brow_Contour/sculptandhighlightbrowcontour_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/sculpt-and-highlight-brow-contour/NYX_322.html?cgid=brows',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Nothing pulls together a look quite like beautifully defined brows. Enter the sleek new Sculpt & Highlight Brow Contour, our 2-in-1 pencil that defines, fills and uses shadow and light to lift the brows to eyebrow perfection.',
  //   rating: null,
  //   category: null,
  //   product_type: 'eyebrow',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:42.715Z',
  //   updated_at: '2017-12-24T02:32:43.114Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/977.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/977/original/open-uri20171224-4-ylht42?1514082762',
  //   product_colors: [
  //     {
  //       hex_value: '#FFF6E3',
  //       colour_name: 'Blonde/Ivory'
  //     },
  //     {
  //       hex_value: '#FFF8E6',
  //       colour_name: 'Taupe/Vanilla'
  //     },
  //     {
  //       hex_value: '#FFF3E9',
  //       colour_name: 'Soft Brown/Rose'
  //     },
  //     {
  //       hex_value: '#FFF5E8',
  //       colour_name: 'Auburn/Soft Pink'
  //     },
  //     {
  //       hex_value: '#FFF2DF',
  //       colour_name: 'Brunette/Cream'
  //     },
  //     {
  //       hex_value: '#FFF5E2',
  //       colour_name: 'Espresso/Light Beige'
  //     },
  //     {
  //       hex_value: '#FEF1DE',
  //       colour_name: 'Ash Brown/Medium Beige'
  //     },
  //     {
  //       hex_value: '#FFF1E7',
  //       colour_name: 'Black/Golden Peach'
  //     }
  //   ]
  // },
  // {
  //   id: 976,
  //   brand: 'nyx',
  //   name: 'Control Freak Eyebrow Gel',
  //   price: '6.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwdf8d06a2/ProductImages/Eyes/Control_Freak_Eyebrow_Gel/controlfreakeyebrowgel_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/control-freak-eyebrow-gel/NYX_123.html?cgid=brows',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     "Out of control brows have you flustered? NYX Professional Makeup's Control Freak Brow Gel offers a new way to tame them fast. The clear formula works well over powder or pencil to seal the deal and make a statement with your brows that you will be proud of. The unique non-sticky formula is comfortable to wear all day and can also be used as a clear mascara that defines, separates and enhances the natural curl of lashes.",
  //   rating: null,
  //   category: null,
  //   product_type: 'eyebrow',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:42.032Z',
  //   updated_at: '2017-12-24T02:32:42.514Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/976.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/976/original/data?1514082761',
  //   product_colors: []
  // },
  // {
  //   id: 975,
  //   brand: 'nyx',
  //   name: 'Eyebrow Cake Powder',
  //   price: '6.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw0e17c958/ProductImages/Eyes/Eyebrow_Cake_Powder/800897123864_eyebrowcakepowder_blackgrey_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/eyebrow-cake-powder/NYX_032.html?cgid=brows',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Our recipe for cooking up exquisite eyebrows includes wax tools and a pair of complementary powders which can be customized to create the ideal shade. Each Eyebrow Cake Powder kit includes a slanted brush and a spoolie to shape style and tame eyebrows.',
  //   rating: null,
  //   category: null,
  //   product_type: 'eyebrow',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:40.217Z',
  //   updated_at: '2017-12-24T02:32:40.712Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/975.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/975/original/open-uri20171224-4-1c3376k?1514082760',
  //   product_colors: [
  //     {
  //       hex_value: '#1C150F',
  //       colour_name: 'Black/ Grey'
  //     },
  //     {
  //       hex_value: '#29170B',
  //       colour_name: 'Dark Brown/ Brown'
  //     },
  //     {
  //       hex_value: '#412D15',
  //       colour_name: 'Taupe / Ash'
  //     },
  //     {
  //       hex_value: '#471C09',
  //       colour_name: 'Auburn / Red'
  //     },
  //     {
  //       hex_value: '#442914',
  //       colour_name: 'Brunette'
  //     },
  //     {
  //       hex_value: '#3C260F',
  //       colour_name: 'Blonde'
  //     }
  //   ]
  // },
  // {
  //   id: 974,
  //   brand: 'nyx',
  //   name: 'Tinted Brow Mascara',
  //   price: '7.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw4093ace1/ProductImages/Eyes/Tinted_Brow_Mascara/tintedbrowmascara_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/tinted-brow-mascara/NYX_169.html?cgid=brows',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'No shame in wishing for a strong beautiful brow! Our foolproof tinted brow mascara helps your dream come true. It sets, tames and tints brows for natural-looking wear. Our dependable formula leaves brows feeling soft while maintaining complete control.',
  //   rating: null,
  //   category: null,
  //   product_type: 'eyebrow',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:38.324Z',
  //   updated_at: '2017-12-24T02:32:39.337Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/974.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/974/original/open-uri20171224-4-10ft6nl?1514082758',
  //   product_colors: [
  //     {
  //       hex_value: '#D4B8A0',
  //       colour_name: 'Blonde'
  //     },
  //     {
  //       hex_value: '#A88774',
  //       colour_name: 'Chocolate'
  //     },
  //     {
  //       hex_value: '#AF937E',
  //       colour_name: 'Brunette'
  //     },
  //     {
  //       hex_value: '#7C665B',
  //       colour_name: 'Espresso'
  //     },
  //     {
  //       hex_value: '#64574F',
  //       colour_name: 'Black'
  //     }
  //   ]
  // },
  // {
  //   id: 973,
  //   brand: 'nyx',
  //   name: 'Auto Eyebrow Pencil',
  //   price: '4.75',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw2a31f0af/ProductImages/Eyes/Auto_Eyebrow_Pencil/autoeyebrowpencil_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/auto-eyebrow-pencil/NYX_029.html?cgid=brows',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Create flawless arches with this eyebrow pencil, a blend of vegetable coconut and soy bean oil that guarantees a fluid application and sensational color. Use the built-in brush to blend color and style your eyebrows to perfection.',
  //   rating: null,
  //   category: null,
  //   product_type: 'eyebrow',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:34.961Z',
  //   updated_at: '2017-12-24T02:32:35.432Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/973.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/973/original/open-uri20171224-4-13idccu?1514082754',
  //   product_colors: [
  //     {
  //       hex_value: '#B8957F',
  //       colour_name: 'Light Brown'
  //     },
  //     {
  //       hex_value: '#B3907C',
  //       colour_name: 'Auburn'
  //     },
  //     {
  //       hex_value: '#9E8370',
  //       colour_name: 'Medium Brown'
  //     },
  //     {
  //       hex_value: '#8D725F',
  //       colour_name: 'Brown'
  //     },
  //     {
  //       hex_value: '#826A5E',
  //       colour_name: 'Dark Brown'
  //     },
  //     {
  //       hex_value: '#AD9382',
  //       colour_name: 'Taupe'
  //     },
  //     {
  //       hex_value: '#909090',
  //       colour_name: 'Charcoal'
  //     },
  //     {
  //       hex_value: '#3A3A3A',
  //       colour_name: 'Black'
  //     }
  //   ]
  // },
  // {
  //   id: 972,
  //   brand: 'nyx',
  //   name: 'Eyebrow Gel',
  //   price: '7.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw9ad6ed1a/ProductImages/Eyes/Eyebrow_Gel/800897831585_eyebrowgel_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/eyebrow-gel/NYX_159.html?cgid=brows',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Keep your misbehaving brows in place with our discreet and easy-to-use brow gel! The lightweight waterproof formula creates thicker, fuller, natural-looking brows and comes in five versatile shades.',
  //   rating: null,
  //   category: null,
  //   product_type: 'eyebrow',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:33.622Z',
  //   updated_at: '2017-12-24T02:32:34.056Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/972.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/972/original/open-uri20171224-4-10rp9z1?1514082753',
  //   product_colors: [
  //     {
  //       hex_value: '#BD9E81',
  //       colour_name: 'Blonde'
  //     },
  //     {
  //       hex_value: '#805741',
  //       colour_name: 'Chocolate'
  //     },
  //     {
  //       hex_value: '#755B44',
  //       colour_name: 'Brunette'
  //     },
  //     {
  //       hex_value: '#5E3F2B',
  //       colour_name: 'Espresso'
  //     },
  //     {
  //       hex_value: '#2E251C',
  //       colour_name: 'Black'
  //     }
  //   ]
  // },
  // {
  //   id: 971,
  //   brand: 'nyx',
  //   name: 'Tame & Frame Brow Pomade',
  //   price: '7.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw3f349e2f/ProductImages/Eyes/Tame_And_Frame_Brow_Pomade/tameandframebrowpomade_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/tame-and-frame-brow-pomade/NYX_173.html?cgid=brows',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Give extra life to your brows with our easy-to-use brow pomade that glides onto skin and hair. Our smudge-proof, waterproof formula comes in five shades to coax brows into prime shape. Stand up to humidity in style!',
  //   rating: null,
  //   category: null,
  //   product_type: 'eyebrow',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:32.312Z',
  //   updated_at: '2017-12-24T02:32:32.796Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/971.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/971/original/open-uri20171224-4-18gctvx?1514082752',
  //   product_colors: [
  //     {
  //       hex_value: '#9E8469',
  //       colour_name: 'Blonde'
  //     },
  //     {
  //       hex_value: '#855F4C',
  //       colour_name: 'Chocolate'
  //     },
  //     {
  //       hex_value: '#7F634E',
  //       colour_name: 'Brunette'
  //     },
  //     {
  //       hex_value: '#5B4337',
  //       colour_name: 'Espresso'
  //     },
  //     {
  //       hex_value: '#403730',
  //       colour_name: 'Black'
  //     }
  //   ]
  // },
  // {
  //   id: 970,
  //   brand: 'nyx',
  //   name: 'Micro Brow Pencil',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw14cbffac/ProductImages/Eyes/Micro_Brow_Pencil/microbrowpencil_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/micro-brow-pencil/NYX_181.html?cgid=brows',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Build full beautiful brows with our ultra-thin Micro Brow Pencil. So precise it coats even the finest hairs with color for a natural-looking finish.',
  //   rating: null,
  //   category: null,
  //   product_type: 'eyebrow',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:30.884Z',
  //   updated_at: '2017-12-24T02:32:31.284Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/970.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/970/original/open-uri20171224-4-1jdhvhr?1514082750',
  //   product_colors: [
  //     {
  //       hex_value: '#AD927F',
  //       colour_name: 'Taupe'
  //     },
  //     {
  //       hex_value: '#BCA28B',
  //       colour_name: 'Blonde'
  //     },
  //     {
  //       hex_value: '#A1856D',
  //       colour_name: 'Auburn'
  //     },
  //     {
  //       hex_value: '#8C7160',
  //       colour_name: 'Chocolate'
  //     },
  //     {
  //       hex_value: '#827262',
  //       colour_name: 'Ash Brown'
  //     },
  //     {
  //       hex_value: '#756158',
  //       colour_name: 'Brunette'
  //     },
  //     {
  //       hex_value: '#584B42',
  //       colour_name: 'Espresso'
  //     },
  //     {
  //       hex_value: '#2C2C2C',
  //       colour_name: 'Black'
  //     }
  //   ]
  // },
  // {
  //   id: 969,
  //   brand: 'nyx',
  //   name: 'Holographic Halo Cream Eyeliner',
  //   price: '11.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwc135311a/ProductImages/2018/Eyes/Holographic_Halo_Cream_Liner/holographichalocreamliner_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/holographic-halo-cream-eyeliner/NYX_582.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Line your lids in holographic color with our Holographic Halo Cream Eyeliners! Inspired by all-things-unicorn, this unique formula uses ultra-fine, pigmented pearls to create a sleek, shimmering line, or it can be blended out to an intense, holographic eyeshadow. Available in five of the prettiest pastels you’ve ever seen.',
  //   rating: null,
  //   category: 'cream',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:29.656Z',
  //   updated_at: '2017-12-24T02:32:30.086Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/969.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/969/original/open-uri20171224-4-59b48d?1514082749',
  //   product_colors: [
  //     {
  //       hex_value: '#E29F8C',
  //       colour_name: 'Palisade Paradise'
  //     },
  //     {
  //       hex_value: '#6CB5AA',
  //       colour_name: 'Killing It'
  //     },
  //     {
  //       hex_value: '#D4AAC0',
  //       colour_name: 'Cotton Candy'
  //     },
  //     {
  //       hex_value: '#DDD5D3',
  //       colour_name: 'Frost'
  //     },
  //     {
  //       hex_value: '#A3ABB6',
  //       colour_name: 'Crystal Vault'
  //     }
  //   ]
  // },
  // {
  //   id: 968,
  //   brand: 'nyx',
  //   name: 'Cake That! Powder Eyeliner',
  //   price: '8.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwb7f857fa/ProductImages/2017/Eyes/Cake_That_Powder_Eyeliner/cakethatpowdereyeliner_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/cake-that-powder-eyeliner/NYX_448.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description: '',
  //   rating: null,
  //   category: 'cream',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:29.030Z',
  //   updated_at: '2017-12-24T02:32:29.408Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/968.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/968/original/open-uri20171224-4-159mdg6?1514082748',
  //   product_colors: []
  // },
  // {
  //   id: 967,
  //   brand: 'nyx',
  //   name: 'Epic Black Mousse Liner',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw1f473566/ProductImages/Eyes/Epic_Black_Mousse_Liner/800897832162_epicblackmousseliner_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/epic-black-mousse-liner/NYX_158.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Amazingly fluffy and lightweight, our innovative Epic Black Mousse Liner glides on oh-so-soft and smooth! This waterproof eyeliner dries to a pigmented matte finish that looks totally EPIC.',
  //   rating: null,
  //   category: 'cream',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:28.161Z',
  //   updated_at: '2017-12-24T02:32:28.770Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/967.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/967/original/data?1514082747',
  //   product_colors: []
  // },
  // {
  //   id: 966,
  //   brand: 'nyx',
  //   name: 'Cosmic Gel Liner',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw62a7d3b0/ProductImages/2016/Eyes/Cosmic_Gel_Liner/800897016364_cosmicgelliner_interstellar_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/cosmic-gel-liner/NYX_335.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Swap your standard wing for eyes that twinkle like stars! A beam of Cosmic Gel Eye Liner makes an out of this world statement through an intense burst of sparkle and bold color. Available in three shades packed with interstellar shimmer, this formula glides on silky-smooth and is super easy to blend. Like our fan fave Gel Liner and Smudger, these rich colors stay put for strong galactic glam.',
  //   rating: null,
  //   category: 'gel',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:26.896Z',
  //   updated_at: '2017-12-24T02:32:27.267Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/966.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/966/original/open-uri20171224-4-kpqxp4?1514082746',
  //   product_colors: [
  //     {
  //       hex_value: '#D64262',
  //       colour_name: 'Interstellar'
  //     },
  //     {
  //       hex_value: '#06ADE4',
  //       colour_name: 'Supernatural'
  //     },
  //     {
  //       hex_value: '#262B51',
  //       colour_name: 'Infinite Star'
  //     }
  //   ]
  // },
  // {
  //   id: 965,
  //   brand: 'nyx',
  //   name: 'Gel Liner And Smudger',
  //   price: '9.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw7fa3d736/ProductImages/Eyes/Gel_Liner_And_Smudger/gellinerandsmudger_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/gel-liner-and-smudger/NYX_080.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Our Gel Liner & Smudger delivers bold color that won’t quit. Whether you’re after a perfectly defined line or a smokey eye, these silky shades blend easily and don’t crease or fade. This pigmented formula is now available in two brand new shades.',
  //   rating: null,
  //   category: 'gel',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:25.619Z',
  //   updated_at: '2017-12-24T02:32:25.974Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/965.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/965/original/open-uri20171224-4-8mqi9p?1514082745',
  //   product_colors: [
  //     {
  //       hex_value: '#E8E7E3',
  //       colour_name: 'Emma'
  //     },
  //     {
  //       hex_value: '#444444',
  //       colour_name: 'Betty'
  //     },
  //     {
  //       hex_value: '#725C47',
  //       colour_name: 'Charlotte'
  //     },
  //     {
  //       hex_value: '#03C7B9',
  //       colour_name: 'Danielle'
  //     },
  //     {
  //       hex_value: '#496CBE',
  //       colour_name: 'Samantha'
  //     },
  //     {
  //       hex_value: '#512F16',
  //       colour_name: 'Scarlette'
  //     },
  //     {
  //       hex_value: '#583668',
  //       colour_name: 'Annie'
  //     }
  //   ]
  // },
  // {
  //   id: 964,
  //   brand: 'nyx',
  //   name: 'Metallic Eyeliner',
  //   price: '8.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw1a50507a/ProductImages/2018/Eyes/Metallic_Eyeliner/metalliceyeliner_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/metallic-eyeliner/NYX_602.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Spend some quality glam time with our Metallic Eyeliners. From copper to rose gold and silver, this creamy-soft pencil is available in six dazzling shades. Each pigment rich eyeliner slides on effortlessly and loads your lids with a metallic-matte finish. Down to the last swipe? Sharpen your go-to hue to uncover more intense color.',
  //   rating: null,
  //   category: 'pencil',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:24.051Z',
  //   updated_at: '2017-12-24T02:32:24.479Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/964.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/964/original/open-uri20171224-4-11fb0s4?1514082743',
  //   product_colors: [
  //     {
  //       hex_value: '#B15A47',
  //       colour_name: 'Copper'
  //     },
  //     {
  //       hex_value: '#99949A',
  //       colour_name: 'Silver'
  //     },
  //     {
  //       hex_value: '#B69A8F',
  //       colour_name: 'Rose Gold'
  //     },
  //     {
  //       hex_value: '#B88B47',
  //       colour_name: 'Gold'
  //     },
  //     {
  //       hex_value: '#2F2F2F',
  //       colour_name: 'Gunmetal'
  //     },
  //     {
  //       hex_value: '#2D2D2D',
  //       colour_name: 'Black Metal'
  //     }
  //   ]
  // },
  // {
  //   id: 963,
  //   brand: 'nyx',
  //   name: 'Tres Jolie Gel Pencil Liner',
  //   price: '12.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw85212794/ProductImages/Eyes/Tres_Jolie_Gel_Pencil_Liner/tresjoliegelpencilliner_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/tres-jolie-gel-pencil-liner/NYX_182.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Our high-powered twist-up gel liner has the same payoff and precision as a pot without having to use a brush. It comes with a sharpener to ensure precise application every time.',
  //   rating: null,
  //   category: 'pencil',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:22.094Z',
  //   updated_at: '2017-12-24T02:32:22.578Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/963.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/963/original/data?1514082741',
  //   product_colors: [
  //     {
  //       hex_value: '#191919',
  //       colour_name: 'Pitch Black'
  //     },
  //     {
  //       hex_value: '#43281D',
  //       colour_name: 'Brown'
  //     }
  //   ]
  // },
  // {
  //   id: 962,
  //   brand: 'nyx',
  //   name: 'Faux Whites Eye Brightener',
  //   price: '8.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwd6f5e770/ProductImages/2017/Eyes/Faux_Whites_Eye_Brightener/fauxwhiteseyebrightener_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/faux-whites-eye-brightener/NYX_404.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Brighten up those beautiful eyes! Our all-new collection of Faux Whites features a variety of white liners with an exquisite hint of color—from blush, to lavender, and mint. This bouquet of tones may be delicate, yet each one is anything but subtle. Every color glides on velvety-soft and provides a striking matte finish. Pencil the corners of the eyes using these vibrant brighteners for a fresh highlight.',
  //   rating: null,
  //   category: 'pencil',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:20.444Z',
  //   updated_at: '2017-12-24T02:32:20.789Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/962.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/962/original/open-uri20171224-4-gpuczn?1514082740',
  //   product_colors: [
  //     {
  //       hex_value: '#FFE0E3',
  //       colour_name: 'Seashell'
  //     },
  //     {
  //       hex_value: '#FFE3D8',
  //       colour_name: 'Linen'
  //     },
  //     {
  //       hex_value: '#FCF4CF',
  //       colour_name: 'Vanilla'
  //     },
  //     {
  //       hex_value: '#F0F4D9',
  //       colour_name: 'Honeydew'
  //     },
  //     {
  //       hex_value: '#E3F1E4',
  //       colour_name: 'Mint Cream'
  //     },
  //     {
  //       hex_value: '#D8EBFC',
  //       colour_name: 'Baby Powder'
  //     },
  //     {
  //       hex_value: '#F9E1EE',
  //       colour_name: 'Lavender Blush'
  //     },
  //     {
  //       hex_value: '#E7E3FE',
  //       colour_name: 'White Smoke'
  //     }
  //   ]
  // },
  // {
  //   id: 961,
  //   brand: 'nyx',
  //   name: 'Faux Blacks Eyeliner',
  //   price: '8.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw52b6a577/ProductImages/2017/Eyes/Faux_Blacks_Eyeliner/fauxblackseyeliner_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/faux-blacks-eyeliner/NYX_405.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'The go-to goodie in every beauty’s makeup bag? A little black liner, of course! Inspired by this enduring essential, the new Faux Blacks collection puts a bold twist on a classic that will forever be a chic choice. Available in eight deep matte shades with a hint of rich color—from midnight blue to dark olive—these striking eyeliners are creamy and go on smooth, which makes drawing a precise line or smudging it out totally simple.',
  //   rating: null,
  //   category: 'pencil',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:19.213Z',
  //   updated_at: '2017-12-24T02:32:19.632Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/961.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/961/original/open-uri20171224-4-3q32qt?1514082739',
  //   product_colors: [
  //     {
  //       hex_value: '#A06362',
  //       colour_name: 'Oxblood'
  //     },
  //     {
  //       hex_value: '#975873',
  //       colour_name: 'Burnt Sienna'
  //     },
  //     {
  //       hex_value: '#7D7C60',
  //       colour_name: 'Black Olive'
  //     },
  //     {
  //       hex_value: '#3C665C',
  //       colour_name: 'Onyx'
  //     },
  //     {
  //       hex_value: '#3C7296',
  //       colour_name: 'Midnight'
  //     },
  //     {
  //       hex_value: '#3B608C',
  //       colour_name: 'Obsidian'
  //     },
  //     {
  //       hex_value: '#956E83',
  //       colour_name: 'Blackberry'
  //     },
  //     {
  //       hex_value: '#766B8B',
  //       colour_name: 'Black Hole'
  //     }
  //   ]
  // },
  // {
  //   id: 960,
  //   brand: 'nyx',
  //   name: 'Collection Noir',
  //   price: '6.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw5a58329e/ProductImages/Eyes/Collection_Noir/collectionnoir_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/collection-noir/NYX_065.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Finally a collection of 8 Noir liners to create any dramatic look. This assortment of liners includes 7 of the blackest black liner formulations ranging from matte to glossy. There is even a powder soft brown for more subtle looks. Create dramatic sultry looks, precise cat-eyes, and subtle yet smokey eyes. This sexy dark collection has a liner for everyone’s needs.',
  //   rating: null,
  //   category: 'pencil',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:17.469Z',
  //   updated_at: '2017-12-24T02:32:17.814Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/960.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/960/original/open-uri20171224-4-xkjlku?1514082737',
  //   product_colors: [
  //     {
  //       hex_value: '#363636',
  //       colour_name: 'Glossy Black Liner'
  //     },
  //     {
  //       hex_value: '#161616',
  //       colour_name: 'Matte Black Liner'
  //     },
  //     {
  //       hex_value: '#2F2F2F',
  //       colour_name: 'Satin Finish Black Liner'
  //     },
  //     {
  //       hex_value: '#F2F2F2',
  //       colour_name: 'Kohl Kajal Black Liner'
  //     },
  //     {
  //       hex_value: '#4D4D4D',
  //       colour_name: 'Powdery Black Liner'
  //     },
  //     {
  //       hex_value: '#FFFFFD',
  //       colour_name: 'Powdery Brown Liner'
  //     }
  //   ]
  // },
  // {
  //   id: 959,
  //   brand: 'nyx',
  //   name: 'Slim Eye Pencil',
  //   price: '4.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwd6b2499f/ProductImages/Eyes/Slim_Eye_Pencil/slimeyepencil_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/slim-eye-pencil/NYX_023.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Slim, trim, but never prim. Our Slim Eye Pencils come in a variety of entrancing shades—from seafoam green to black shimmer. The creamy long-wearing eye liner formula goes on easily and resists bleeding. Available in 31 stunning shades!',
  //   rating: null,
  //   category: 'pencil',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:09.470Z',
  //   updated_at: '2017-12-24T02:32:10.343Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/959.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/959/original/open-uri20171224-4-o680lz?1514082729',
  //   product_colors: [
  //     {
  //       hex_value: '#9BC98B',
  //       colour_name: 'Green Shimmer'
  //     },
  //     {
  //       hex_value: '#BBC89D',
  //       colour_name: 'Moss'
  //     },
  //     {
  //       hex_value: '#477E6B',
  //       colour_name: 'Emerald City'
  //     },
  //     {
  //       hex_value: '#ADCEC7',
  //       colour_name: 'Seafoam Green'
  //     },
  //     {
  //       hex_value: '#7ED8B2',
  //       colour_name: 'Teal'
  //     },
  //     {
  //       hex_value: '#7BDBDA',
  //       colour_name: 'Aqua Shimmer'
  //     },
  //     {
  //       hex_value: '#B1E0EA',
  //       colour_name: 'Baby Blue'
  //     },
  //     {
  //       hex_value: '#9ED6E7',
  //       colour_name: 'Sky Shimmer'
  //     },
  //     {
  //       hex_value: '#48B3E1',
  //       colour_name: 'Electric Blue'
  //     },
  //     {
  //       hex_value: '#8DBDE5',
  //       colour_name: 'Satin Blue'
  //     },
  //     {
  //       hex_value: '#5C88AF',
  //       colour_name: 'Sapphire'
  //     },
  //     {
  //       hex_value: '#C094D3',
  //       colour_name: 'Purple'
  //     },
  //     {
  //       hex_value: '#BFB2E7',
  //       colour_name: 'Lavender Shimmer'
  //     },
  //     {
  //       hex_value: '#C69D7F',
  //       colour_name: 'Bronze Shimmer'
  //     },
  //     {
  //       hex_value: '#AB7B64',
  //       colour_name: 'Cafe'
  //     },
  //     {
  //       hex_value: '#AB8369',
  //       colour_name: 'Auburn'
  //     },
  //     {
  //       hex_value: '#A78C71',
  //       colour_name: 'Light Brown'
  //     },
  //     {
  //       hex_value: '#8B7462',
  //       colour_name: 'Medium Brown'
  //     },
  //     {
  //       hex_value: '#8E7356',
  //       colour_name: 'Brown'
  //     },
  //     {
  //       hex_value: '#866D59',
  //       colour_name: 'Dark Brown'
  //     },
  //     {
  //       hex_value: '#BB9B86',
  //       colour_name: 'Taupe'
  //     },
  //     {
  //       hex_value: '#E8BE82',
  //       colour_name: 'Gold Shimmer'
  //     },
  //     {
  //       hex_value: '#DCC3AF',
  //       colour_name: 'Velvet'
  //     },
  //     {
  //       hex_value: '#F9FAF5',
  //       colour_name: 'White'
  //     },
  //     {
  //       hex_value: '#F7F6F2',
  //       colour_name: 'White Pearl'
  //     },
  //     {
  //       hex_value: '#CDCDCD',
  //       colour_name: 'Silver'
  //     },
  //     {
  //       hex_value: '#909090',
  //       colour_name: 'Gray'
  //     },
  //     {
  //       hex_value: '#7F7F7F',
  //       colour_name: 'Charcoal'
  //     },
  //     {
  //       hex_value: '#76685D',
  //       colour_name: 'Black Brown'
  //     },
  //     {
  //       hex_value: '#545454',
  //       colour_name: 'Black Shimmer'
  //     },
  //     {
  //       hex_value: '#575757',
  //       colour_name: 'Black'
  //     }
  //   ]
  // },
  // {
  //   id: 958,
  //   brand: 'nyx',
  //   name: 'Retractable Eye Liner',
  //   price: '5.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw83169760/ProductImages/Eyes/Retractable_Eye_Liner/retractableeyeliner_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/retractable-eye-liner/NYX_021.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Twist and shout! Renowned for its extreme lasting power this creamy liner delivers intense pigmentation and precise application in an easy twist-up tube that never needs sharpening.',
  //   rating: null,
  //   category: 'pencil',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:05.574Z',
  //   updated_at: '2017-12-24T02:32:06.056Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/958.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/958/original/open-uri20171224-4-18m7lgt?1514082725',
  //   product_colors: [
  //     {
  //       hex_value: '#776F26',
  //       colour_name: 'Golden Olive'
  //     },
  //     {
  //       hex_value: '#159C9F',
  //       colour_name: 'Aqua Green'
  //     },
  //     {
  //       hex_value: '#045F71',
  //       colour_name: 'Gypsy Blue'
  //     },
  //     {
  //       hex_value: '#0A466A',
  //       colour_name: 'Deep Blue'
  //     },
  //     {
  //       hex_value: '#4A4480',
  //       colour_name: 'Purple'
  //     },
  //     {
  //       hex_value: '#442F5A',
  //       colour_name: 'Deep Purple'
  //     },
  //     {
  //       hex_value: '#3D2316',
  //       colour_name: 'Brown'
  //     },
  //     {
  //       hex_value: '#5C3C23',
  //       colour_name: 'Bronze'
  //     },
  //     {
  //       hex_value: '#CA8F33',
  //       colour_name: 'Gold'
  //     },
  //     {
  //       hex_value: '#F4F5F0',
  //       colour_name: 'White'
  //     },
  //     {
  //       hex_value: '#C1C1C1',
  //       colour_name: 'Silver'
  //     },
  //     {
  //       hex_value: '#525252',
  //       colour_name: 'Gray'
  //     },
  //     {
  //       hex_value: '#1C1C1C',
  //       colour_name: 'Black'
  //     }
  //   ]
  // },
  // {
  //   id: 957,
  //   brand: 'nyx',
  //   name: 'Slide On Pencil',
  //   price: '8.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwbdf94a20/ProductImages/Eyes/Slide_On_Pencil/slideonpencil_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/slide-on-pencil/NYX_022.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     "Don’t let the softness of this pencil fool you. This formula doesn't smear or smudge and delivers powerful robust colors. It’s like a liquid eye liner without the mess. Available in 18 sleek shades. Our Slide on Pencils can be sharpened with a sharpener that has an opening for a small pencil. Get your NYX Professional Makeup Sharpener",
  //   rating: null,
  //   category: 'pencil',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:32:01.071Z',
  //   updated_at: '2017-12-24T02:32:01.692Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/957.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/957/original/open-uri20171224-4-1md5yaa?1514082720',
  //   product_colors: [
  //     {
  //       hex_value: '#A88089',
  //       colour_name: 'Jewel'
  //     },
  //     {
  //       hex_value: '#51A66D',
  //       colour_name: 'Esmeralda'
  //     },
  //     {
  //       hex_value: '#519181',
  //       colour_name: 'Tropical Green'
  //     },
  //     {
  //       hex_value: '#43CCD6',
  //       colour_name: 'Azure'
  //     },
  //     {
  //       hex_value: '#4E99C3',
  //       colour_name: 'Sunrise Blue'
  //     },
  //     {
  //       hex_value: '#A886C2',
  //       colour_name: 'Pretty Violet'
  //     },
  //     {
  //       hex_value: '#9A7EB8',
  //       colour_name: 'Purple Blaze'
  //     },
  //     {
  //       hex_value: '#D6B185',
  //       colour_name: 'Glitzy Gold'
  //     },
  //     {
  //       hex_value: '#A78A62',
  //       colour_name: 'Golden Olive'
  //     },
  //     {
  //       hex_value: '#B07D62',
  //       colour_name: 'Golden Bronze'
  //     },
  //     {
  //       hex_value: '#907761',
  //       colour_name: 'Brown Perfection'
  //     },
  //     {
  //       hex_value: '#F9FAF5',
  //       colour_name: 'Pure White'
  //     },
  //     {
  //       hex_value: '#D5D9D8',
  //       colour_name: 'Platinum'
  //     },
  //     {
  //       hex_value: '#83847F',
  //       colour_name: 'Gun Metal'
  //     },
  //     {
  //       hex_value: '#707271',
  //       colour_name: 'Black Sparkle'
  //     },
  //     {
  //       hex_value: '#626262',
  //       colour_name: 'Jet Black'
  //     }
  //   ]
  // },
  // {
  //   id: 956,
  //   brand: 'nyx',
  //   name: 'Jumbo Eye Pencil',
  //   price: '4.5',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwda543a41/ProductImages/Eyes/Jumbo_Eye_Pencil/jumboeyepencil_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/jumbo-eye-pencil/NYX_001.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description: '',
  //   rating: null,
  //   category: 'pencil',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:53.675Z',
  //   updated_at: '2017-12-24T02:31:54.390Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/956.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/956/original/open-uri20171224-4-1sgu8lk?1514082713',
  //   product_colors: [
  //     {
  //       hex_value: '#FFACC1',
  //       colour_name: 'Strawberry Milk'
  //     },
  //     {
  //       hex_value: '#C95254',
  //       colour_name: 'Rust'
  //     },
  //     {
  //       hex_value: '#9CBF00',
  //       colour_name: 'Cucumber'
  //     },
  //     {
  //       hex_value: '#C3D17A',
  //       colour_name: 'Lime'
  //     },
  //     {
  //       hex_value: '#8DDF95',
  //       colour_name: 'Horseradish'
  //     },
  //     {
  //       hex_value: '#04A057',
  //       colour_name: 'Rocky Mountain Green'
  //     },
  //     {
  //       hex_value: '#1B9775',
  //       colour_name: 'Sparkle Green'
  //     },
  //     {
  //       hex_value: '#3ACFED',
  //       colour_name: 'Baby Blue'
  //     },
  //     {
  //       hex_value: '#05A9CE',
  //       colour_name: 'Electric Blue'
  //     },
  //     {
  //       hex_value: '#0096B7',
  //       colour_name: 'Peacock'
  //     },
  //     {
  //       hex_value: '#2C86B8',
  //       colour_name: 'Cobalt'
  //     },
  //     {
  //       hex_value: '#EBB4EE',
  //       colour_name: 'Oyster'
  //     },
  //     {
  //       hex_value: '#EFC2ED',
  //       colour_name: 'Lavender'
  //     },
  //     {
  //       hex_value: '#8F9AD0',
  //       colour_name: 'Pacific'
  //     },
  //     {
  //       hex_value: '#834C8D',
  //       colour_name: 'Purple Velvet'
  //     },
  //     {
  //       hex_value: '#634988',
  //       colour_name: 'Purple'
  //     },
  //     {
  //       hex_value: '#FCCAA7',
  //       colour_name: 'Cashmere'
  //     },
  //     {
  //       hex_value: '#F2A49A',
  //       colour_name: 'Yogurt'
  //     },
  //     {
  //       hex_value: '#F5B695',
  //       colour_name: 'Sparkle Nude'
  //     },
  //     {
  //       hex_value: '#F7AF65',
  //       colour_name: 'Pure Gold'
  //     },
  //     {
  //       hex_value: '#F59E57',
  //       colour_name: 'Gold'
  //     },
  //     {
  //       hex_value: '#CA8B62',
  //       colour_name: 'Sparkle Leopard'
  //     },
  //     {
  //       hex_value: '#D67552',
  //       colour_name: 'Bronze'
  //     },
  //     {
  //       hex_value: '#A96E50',
  //       colour_name: 'French Fries'
  //     },
  //     {
  //       hex_value: '#E1A686',
  //       colour_name: 'Iced Mocha'
  //     },
  //     {
  //       hex_value: '#E2E1DD',
  //       colour_name: 'Cottage Cheese'
  //     },
  //     {
  //       hex_value: '#F5F6F1',
  //       colour_name: 'Milk'
  //     },
  //     {
  //       hex_value: '#BBC4C3',
  //       colour_name: 'Pots & Pans'
  //     },
  //     {
  //       hex_value: '#5C6063',
  //       colour_name: 'Slate'
  //     },
  //     {
  //       hex_value: '#645C59',
  //       colour_name: 'Knight'
  //     },
  //     {
  //       hex_value: '#613E28',
  //       colour_name: 'Dark Brown'
  //     },
  //     {
  //       hex_value: '#2D2D2D',
  //       colour_name: 'Black Bean'
  //     }
  //   ]
  // },
  // {
  //   id: 955,
  //   brand: 'nyx',
  //   name: 'Two Timer Dual Ended Eyeliner',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwcd8987df/ProductImages/Eyes/Two_Timer_Dual_Ended_Eyeliner/twotimerdualendedeyeliner_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/two-timer-dual-ended-eyeliner/NYX_135.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Having it all is possible with this incredibly edgy new makeup weapon. The combination of the precision of liquid liner with the ease of application of a kohl pencil is the perfect match to create a variety of dramatic looks. When the cat eye meets the smoldering intensity of a smoky eye look - who knows where the night will take you?',
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:51.431Z',
  //   updated_at: '2017-12-24T02:31:52.376Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/955.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/955/original/data?1514082711',
  //   product_colors: []
  // },
  // {
  //   id: 954,
  //   brand: 'nyx',
  //   name: 'Strictly Vinyl Eyeliner',
  //   price: '7.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw1498d09f/ProductImages/2018/Eyes/Strictly_Vinyl_Eyeliner/strictlyvinyleyeliner_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/strictly-vinyl-eyeliner/NYX_600.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Ready to give Strictly Vinyl Eyeliner a spin? Take your pick from the eight epic colors included in our vibrant catalog. Featuring a flexible and slim brush, this high-shine liquid eyeliner glides on effortlessly and delivers an intensely lacquered look you’ll want to rock again…and again!',
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:48.739Z',
  //   updated_at: '2017-12-24T02:31:49.218Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/954.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/954/original/open-uri20171224-4-stg3ec?1514082708',
  //   product_colors: [
  //     {
  //       hex_value: '#2B3043',
  //       colour_name: 'Anchor'
  //     },
  //     {
  //       hex_value: '#424146',
  //       colour_name: 'Dauntless'
  //     },
  //     {
  //       hex_value: '#443844',
  //       colour_name: 'Crone'
  //     },
  //     {
  //       hex_value: '#32486D',
  //       colour_name: 'Visceral'
  //     },
  //     {
  //       hex_value: '#593E35',
  //       colour_name: 'Alliance'
  //     },
  //     {
  //       hex_value: '#792B29',
  //       colour_name: 'Hazy'
  //     },
  //     {
  //       hex_value: '#493966',
  //       colour_name: 'Extra'
  //     },
  //     {
  //       hex_value: '#31443E',
  //       colour_name: 'Savvy'
  //     }
  //   ]
  // },
  // {
  //   id: 953,
  //   brand: 'nyx',
  //   name: 'Collection Chocolate',
  //   price: '6.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwbccef58f/ProductImages/Eyes/Collection_Chocolate/collectionchocolate_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/collection-chocolate/NYX_090.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'What’s better than a guilt-free treat! Feast your eyes on our Collection Chocolate in 6 of our most delectable liners. The mouthwatering formula is smudge proof and comes in satin matte glossy or liquid.',
  //   rating: null,
  //   category: 'pencil',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:47.604Z',
  //   updated_at: '2017-12-24T02:32:22.990Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/953.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/953/original/open-uri20171224-4-1xyp0ge?1514082742',
  //   product_colors: [
  //     {
  //       hex_value: '#3B2C25',
  //       colour_name: 'Glossy Brown Liner'
  //     },
  //     {
  //       hex_value: '#27160F',
  //       colour_name: 'Matte Brown Liner'
  //     },
  //     {
  //       hex_value: '#36251B',
  //       colour_name: 'Satin Finish Brown Liner'
  //     },
  //     {
  //       hex_value: '#E7E7DF',
  //       colour_name: 'Kohl Kajal Brown Liner'
  //     },
  //     {
  //       hex_value: '#281409',
  //       colour_name: 'Skinny Brown Liner'
  //     },
  //     {
  //       hex_value: '#442B24',
  //       colour_name: 'Liquid Brown Liner'
  //     }
  //   ]
  // },
  // {
  //   id: 952,
  //   brand: 'nyx',
  //   name: 'Super Fat Eye Marker',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw8c640821/ProductImages/Eyes/Super_Fat_Eye_Marker/superfateyemarker_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/super-fat-eye-marker/NYX_026.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Here’s a real magic marker: The extra wide felt tip eye liner is perfect for creating a dramatic cat-eye look. The eye marker application is smooth and the striking results are long-lasting.',
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:46.839Z',
  //   updated_at: '2017-12-24T02:31:47.269Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/952.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/952/original/data?1514082706',
  //   product_colors: []
  // },
  // {
  //   id: 951,
  //   brand: 'nyx',
  //   name: 'Super Skinny Eye Marker',
  //   price: '9.5',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwea7c51df/ProductImages/Eyes/Super_Skinny_Eye_Marker/superskinnyeyemarker_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/super-skinny-eye-marker/NYX_027.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'The micro-fine felt tip on this eyeliner means you can use it for everything from filling in your eyelash line to a subtle cat-eye look.The eye marker application is flawless and the results are fabulous.',
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:46.060Z',
  //   updated_at: '2017-12-24T02:31:46.619Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/951.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/951/original/data?1514082705',
  //   product_colors: []
  // },
  // {
  //   id: 950,
  //   brand: 'nyx',
  //   name: 'Felt Tip Liner',
  //   price: '9.5',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw16b77618/ProductImages/Eyes/Felt_Tip_Liner/feltipliner_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/felt-tip-liner/NYX_024.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Our Felt Tip Eyeliner gives you the ultimate control in creating bold and precise lines in 3 opulent shades—extreme black dark brown and jet black. The eyeliner marker releases the ideal amount of ink for decidedly dramatic eyes.',
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:44.985Z',
  //   updated_at: '2017-12-24T02:31:45.557Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/950.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/950/original/open-uri20171224-4-1tptkdg?1514082704',
  //   product_colors: [
  //     {
  //       hex_value: '#131313',
  //       colour_name: 'Extreme Black'
  //     },
  //     {
  //       hex_value: '#49201A',
  //       colour_name: 'Dark Brown'
  //     },
  //     {
  //       hex_value: '#202020',
  //       colour_name: 'Jet Black'
  //     }
  //   ]
  // },
  // {
  //   id: 949,
  //   brand: 'nyx',
  //   name: 'The Curve',
  //   price: '15.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw6a4af1d6/ProductImages/Eyes/The_Curve/thecurve_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/the-curve/NYX_084.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'The original – The Curve! An innovative ergonomic shape that makes applying liquid liner mistake-proof. The grip zone provides just the right hold to make application precise secure and best of all...beautifully effortless results.',
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:44.277Z',
  //   updated_at: '2017-12-24T02:31:44.655Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/949.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/949/original/data?1514082704',
  //   product_colors: []
  // },
  // {
  //   id: 948,
  //   brand: 'nyx',
  //   name: 'Colored Felt Tip Liner',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwa801b855/ProductImages/2016/Eyes/Colored_Felt_Tip_Liner/coloredfelttipliner_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/colored-felt-tip-liner/NYX_307.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Line your lids with style and rock a range of captivating looks with our new Colored Felt Tip Liners. Available in six brilliant shades, each liquid liner features a precision felt-tip brush and an easy-to-use “grip zone” for precise, clean, pro-level application every time.',
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:43.106Z',
  //   updated_at: '2017-12-24T02:31:43.448Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/948.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/948/original/open-uri20171224-4-1cdu2rb?1514082702',
  //   product_colors: [
  //     {
  //       hex_value: '#003D37',
  //       colour_name: 'Teal'
  //     },
  //     {
  //       hex_value: '#052363',
  //       colour_name: 'Royal Blue'
  //     },
  //     {
  //       hex_value: '#0B5489',
  //       colour_name: 'Cobalt Blue'
  //     },
  //     {
  //       hex_value: '#F9F9F9',
  //       colour_name: 'White'
  //     },
  //     {
  //       hex_value: '#363636',
  //       colour_name: 'Grey'
  //     },
  //     {
  //       hex_value: '#4E2D1C',
  //       colour_name: 'Chocolate Brown'
  //     }
  //   ]
  // },
  // {
  //   id: 947,
  //   brand: 'nyx',
  //   name: 'Vinyl Liquid Liner',
  //   price: '7.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw9723d9ae/ProductImages/Eyes/Vinyl_Liquid_Liner/vinylliquidliner_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/vinyl-liquid-liner/NYX_187.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Rock and roll with our pure shine liquid liner! The extra fine flexible brush helps ensure a flawless even line with a high gloss finish.',
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:42.089Z',
  //   updated_at: '2017-12-24T02:31:42.474Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/947.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/947/original/data?1514082701',
  //   product_colors: []
  // },
  // {
  //   id: 946,
  //   brand: 'nyx',
  //   name: "That's The Point Eyeliner",
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwed5f712e/ProductImages/2017/Eyes/Thats_The_Point_Eyeliner/thatsthepointeyeliner_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/thats-the-point-eyeliner/NYX_452.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description: '',
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:40.465Z',
  //   updated_at: '2017-12-24T02:31:40.930Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/946.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/946/original/open-uri20171224-4-18to599?1514082700',
  //   product_colors: [
  //     {
  //       hex_value: '#303030',
  //       colour_name: 'Put A Wing On It'
  //     },
  //     {
  //       hex_value: '#2D2D2D',
  //       colour_name: 'Super Edgy'
  //     },
  //     {
  //       hex_value: '#171717',
  //       colour_name: 'A Bit Edgy'
  //     },
  //     {
  //       hex_value: '#575757',
  //       colour_name: 'Quite The Bender'
  //     },
  //     {
  //       hex_value: '#232323',
  //       colour_name: 'On The Dot'
  //     },
  //     {
  //       hex_value: '#0E0E0E',
  //       colour_name: 'Super Sketchy'
  //     },
  //     {
  //       hex_value: '#FFFFFF',
  //       colour_name: 'Hella Fine'
  //     }
  //   ]
  // },
  // {
  //   id: 945,
  //   brand: 'nyx',
  //   name: 'White Liquid Liner',
  //   price: '7.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw0fd19ef1/ProductImages/Eyes/White_Liquid_Liner/whiteliquidliner_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/white-liquid-liner/NYX_188.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Get bright-eyed in a blink with our opaque water resistant liquid white liner. Perfect for the lash or waterline the precision brush helps create a defined white line leaving you with standout eyes and a lasting matte finish.',
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:39.840Z',
  //   updated_at: '2017-12-24T02:31:40.217Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/945.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/945/original/data?1514082699',
  //   product_colors: []
  // },
  // {
  //   id: 944,
  //   brand: 'nyx',
  //   name: 'Studio Liquid Liner',
  //   price: '4.5',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw1a631541/ProductImages/Eyes/Studio_Liquid_Liner/studioliquidliner_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/studio-liquid-liner/NYX_028.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Transform your look in seconds with this super-pigmented eyeliner that highlights eyes with an electrifying stroke of color. The fine brush tip allows for precision application and can be used to create lines of varying thickness. Go subtle or go glam.',
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:37.926Z',
  //   updated_at: '2017-12-24T02:31:38.426Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/944.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/944/original/open-uri20171224-4-1ld4vd9?1514082697',
  //   product_colors: [
  //     {
  //       hex_value: '#EDB3B2',
  //       colour_name: 'Extreme Pink'
  //     },
  //     {
  //       hex_value: '#52A749',
  //       colour_name: 'Extreme Green'
  //     },
  //     {
  //       hex_value: '#61A9CF',
  //       colour_name: 'Extreme Sky Blue'
  //     },
  //     {
  //       hex_value: '#1078AF',
  //       colour_name: 'Extreme Sapphire'
  //     },
  //     {
  //       hex_value: '#1F5BBD',
  //       colour_name: 'Extreme Blue'
  //     },
  //     {
  //       hex_value: '#6953A8',
  //       colour_name: 'Extreme Purple'
  //     },
  //     {
  //       hex_value: '#693C8F',
  //       colour_name: 'Extreme Plum Purple'
  //     },
  //     {
  //       hex_value: '#75401E',
  //       colour_name: 'Extreme Coffee'
  //     },
  //     {
  //       hex_value: '#D2982C',
  //       colour_name: 'Extreme Gold'
  //     },
  //     {
  //       hex_value: '#AAAAAA',
  //       colour_name: 'Extreme Silver'
  //     },
  //     {
  //       hex_value: '#4A4A4A',
  //       colour_name: 'Extreme Smokey Gray'
  //     },
  //     {
  //       hex_value: '#2A2A2A',
  //       colour_name: 'Extreme Black'
  //     }
  //   ]
  // },
  // {
  //   id: 943,
  //   brand: 'nyx',
  //   name: 'Epic Ink Liner',
  //   price: '8.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw1c0eb02f/ProductImages/2017/Eyes/Epic_Ink_Liner/800897085605_epicinkliner_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/epic-ink-liner/NYX_409.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Live for super-sharp wing inspo? Don’t just “like” all your faves, draw ’em yourself using Epic Ink Liner. Featuring a slender and supple brush tip, this intensely pigmented, waterproof pen lets you achieve black liquid lines effortlessly. Every stroke is unbelievably fluid for a defined finish. Control the thickness of your lines by pressing down just a touch. Fine and natural, broad and bold—the look is always up to you!',
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:37.256Z',
  //   updated_at: '2017-12-24T02:31:37.606Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/943.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/943/original/data?1514082697',
  //   product_colors: []
  // },
  // {
  //   id: 942,
  //   brand: 'nyx',
  //   name: 'Glam Liner Aqua Luxe Collection',
  //   price: '5.5',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw37148f7b/ProductImages/Eyes/Glam_Liner_Aqua_Luxe_Collection/glamlineraqualuxecollection_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/glam-liner-aqua-luxe-collection/NYX_073.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Stand out from the crowd with these new eye-catching liquid liners. Available in 9 vivacious shades these shimmering long-wearing liners have a flexible brush tip for perfectly precise surprisingly smooth application.',
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:34.919Z',
  //   updated_at: '2017-12-24T02:31:36.334Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/942.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/942/original/open-uri20171224-4-e2ezc8?1514082694',
  //   product_colors: [
  //     {
  //       hex_value: '#03A6C7',
  //       colour_name: 'Glam Azure'
  //     },
  //     {
  //       hex_value: '#088C90',
  //       colour_name: 'Glam Lagoon'
  //     },
  //     {
  //       hex_value: '#8F73B0',
  //       colour_name: 'Glam Purple'
  //     },
  //     {
  //       hex_value: '#DEB21B',
  //       colour_name: 'Glam 24 Karat'
  //     },
  //     {
  //       hex_value: '#1F1F1F',
  //       colour_name: 'Glam Black'
  //     },
  //     {
  //       hex_value: '#EFBDC6',
  //       colour_name: 'Glam Pink'
  //     },
  //     {
  //       hex_value: '#D2BEA6',
  //       colour_name: 'Glam Nude'
  //     },
  //     {
  //       hex_value: '#886514',
  //       colour_name: 'Glam Golden'
  //     },
  //     {
  //       hex_value: '#BBBBBB',
  //       colour_name: 'Glam Platinum'
  //     }
  //   ]
  // },
  // {
  //   id: 941,
  //   brand: 'nyx',
  //   name: 'Matte Liquid Liner',
  //   price: '7.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwac1a91b0/ProductImages/Eyes/Matte_Liquid_Liner/800897836573_matteliquidliner_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/matte-liquid-liner/NYX_189.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Line and define with expert precision using our Matte Liquid Liner. A makeup artist must-have for bold and classic looks the precision brush tip allows you to effortlessly achieve an ultra-fine and exquisite matte finish.',
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:34.335Z',
  //   updated_at: '2017-12-24T02:31:34.687Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/941.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/941/original/data?1514082694',
  //   product_colors: []
  // },
  // {
  //   id: 940,
  //   brand: 'nyx',
  //   name: 'Vivid Brights Liner',
  //   price: '7.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw5b4da1c3/ProductImages/2016/Eyes/Vivid_Brights_Liner/vividbrightsliner_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/vivid-brights-liner/NYX_326.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Line your lids with vibrant color with our new Vivid Brights Liners. Available in nine incredible shades, these pro-level liners deliver instant and intense color payoff.',
  //   rating: null,
  //   category: 'liquid',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:32.843Z',
  //   updated_at: '2017-12-24T02:31:33.274Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/940.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/940/original/open-uri20171224-4-1i4qv4y?1514082692',
  //   product_colors: [
  //     {
  //       hex_value: '#F9FDFE',
  //       colour_name: 'Vivid Petal'
  //     },
  //     {
  //       hex_value: '#FEFEFF',
  //       colour_name: 'Vivid Fire'
  //     },
  //     {
  //       hex_value: '#FEFFFF',
  //       colour_name: 'Vivid Delight'
  //     },
  //     {
  //       hex_value: '#FBFFFB',
  //       colour_name: 'Vivid Halo'
  //     },
  //     {
  //       hex_value: '#FFF8FF',
  //       colour_name: 'Vivid Envy'
  //     },
  //     {
  //       hex_value: '#FFF9FB',
  //       colour_name: 'Vivid Sapphire'
  //     },
  //     {
  //       hex_value: '#FFFEFF',
  //       colour_name: 'Vivid Violet'
  //     },
  //     {
  //       hex_value: '#F6FFF5',
  //       colour_name: 'Vivid Blossom'
  //     }
  //   ]
  // },
  // {
  //   id: 939,
  //   brand: 'nyx',
  //   name: 'SFX Setting Powder',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwd3ce6c29/ProductImages/2016/More/SFX_Setting_Powder/sfxsettingpowder_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/sfx-setting-powder/NYX_391.html?cgid=powder',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description: '',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:31.850Z',
  //   updated_at: '2017-12-24T02:31:32.238Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/939.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/939/original/open-uri20171224-4-1mv4cht?1514082691',
  //   product_colors: []
  // },
  // {
  //   id: 938,
  //   brand: 'nyx',
  //   name: 'Holographic Halo Finishing Powder',
  //   price: '12.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw2945b62d/ProductImages/2018/Face/Holographic_Halo_Finishing_Powder/holographichalofinishingpowder_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/holographic-halo-finishing-powder/NYX_607.html?cgid=powder',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Glow your own way using Holographic Halo Finishing Powder! This ultra-fine loose powder comes in two pearly shades and delivers an ethereal look that’s crazy gorgeous. Lightly dust it all over your complexion to set and softly illuminate, or along the highest points of the face—like the bridge of the nose, cheekbones or Cupid’s bow—to add a touch of radiance here and there.',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:30.972Z',
  //   updated_at: '2017-12-24T02:31:31.434Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/938.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/938/original/open-uri20171224-4-52epl7?1514082690',
  //   product_colors: [
  //     {
  //       hex_value: '#DDE9F5',
  //       colour_name: 'Mermazing'
  //     },
  //     {
  //       hex_value: '#E3AA8F',
  //       colour_name: 'Magical'
  //     }
  //   ]
  // },
  // {
  //   id: 937,
  //   brand: 'nyx',
  //   name: 'Blotting Powder',
  //   price: '12.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw1f4a57e0/ProductImages/Face/Blotting_Powder/800897822620_blottingpowder_light_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/blotting-powder/NYX_125.html?cgid=powder',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Kissed with the barest hint of pigment Blotting Powder takes down the shine without settling into fine lines polishing skin to satin matte perfection.',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:29.788Z',
  //   updated_at: '2017-12-24T02:31:30.246Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/937.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/937/original/open-uri20171224-4-9ujiam?1514082689',
  //   product_colors: [
  //     {
  //       hex_value: '#B27959',
  //       colour_name: 'Deep'
  //     },
  //     {
  //       hex_value: '#F9DDC9',
  //       colour_name: 'Light'
  //     },
  //     {
  //       hex_value: '#E4B881',
  //       colour_name: 'Medium/Dark'
  //     },
  //     {
  //       hex_value: '#F3C6B1',
  //       colour_name: 'Light/Medium'
  //     }
  //   ]
  // },
  // {
  //   id: 936,
  //   brand: 'nyx',
  //   name: '#NOFILTER Finishing Powder',
  //   price: '12.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwd7e25eb8/ProductImages/2016/Face/No_Filter_Finishing_Powder/nofilterfinishingpowder_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/no-filter-finishing-powder/NYX_358.html?cgid=powder',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Introduce us to someone who doesn’t love a good photo filter, and we’ll introduce you to our secret herd of pet unicorns. Our point? When it comes to getting our picture taken, we all love a good filter. That’s why we created #NoFilter Finishing Powder--our amazing new product that delivers a finish as flawless and soft as the most flattering filters on Instagram and beyond.',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:26.988Z',
  //   updated_at: '2017-12-24T02:31:27.575Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/936.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/936/original/open-uri20171224-4-h5gd5x?1514082686',
  //   product_colors: [
  //     {
  //       hex_value: '#F1D3B9',
  //       colour_name: 'Alabaster'
  //     },
  //     {
  //       hex_value: '#ECC8A8',
  //       colour_name: 'Porcelain'
  //     },
  //     {
  //       hex_value: '#EFC8AB',
  //       colour_name: 'Ivory'
  //     },
  //     {
  //       hex_value: '#F0C4A7',
  //       colour_name: 'Light'
  //     },
  //     {
  //       hex_value: '#EBC09E',
  //       colour_name: 'Light Beige'
  //     },
  //     {
  //       hex_value: '#E6B897',
  //       colour_name: 'Beige'
  //     },
  //     {
  //       hex_value: '#E1B693',
  //       colour_name: 'Medium Olive'
  //     },
  //     {
  //       hex_value: '#E1B18B',
  //       colour_name: 'Honey Beige'
  //     },
  //     {
  //       hex_value: '#E5B090',
  //       colour_name: 'Caramel Beige'
  //     },
  //     {
  //       hex_value: '#E3A984',
  //       colour_name: 'Classic Tan'
  //     },
  //     {
  //       hex_value: '#DEA57A',
  //       colour_name: 'Golden'
  //     },
  //     {
  //       hex_value: '#D99D7B',
  //       colour_name: 'Sand'
  //     },
  //     {
  //       hex_value: '#CF8B68',
  //       colour_name: 'Deep Golden'
  //     },
  //     {
  //       hex_value: '#B4816C',
  //       colour_name: 'Mahogany'
  //     },
  //     {
  //       hex_value: '#AA7D68',
  //       colour_name: 'Cocoa'
  //     }
  //   ]
  // },
  // {
  //   id: 935,
  //   brand: 'nyx',
  //   name: 'Color Correcting Powder',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw78639528/ProductImages/Face/Color_Correcting_Powder/colorcorrectingpowder_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/color-correcting-powder/NYX_167.html?cgid=powder',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Even out your complexion using our ultra-fine translucent loose Color Correcting Powder. This lightweight easy to use powder can be applied before or after your foundation. The paraben and talc-free formula helps you achieve a natural matte finish.',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:25.255Z',
  //   updated_at: '2017-12-24T02:31:26.019Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/935.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/935/original/open-uri20171224-4-15dpuwm?1514082684',
  //   product_colors: [
  //     {
  //       hex_value: '#FFE8BD',
  //       colour_name: 'Banana'
  //     },
  //     {
  //       hex_value: '#EEDDEF',
  //       colour_name: 'Lavender'
  //     },
  //     {
  //       hex_value: '#EAE9D5',
  //       colour_name: 'Green'
  //     }
  //   ]
  // },
  // {
  //   id: 934,
  //   brand: 'nyx',
  //   name: 'High Definition Finishing Powder Mini',
  //   price: '3.5',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw63a5fdce/ProductImages/2017/Face/High_Definition_Finishing_Powder_Mini/800897846015_highdefinitionfinishingpowdermini_translucent_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/high-definition-finishing-powder-mini/NYX_507.html?cgid=powder',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Your favorite beauty essential is now available in a convenient travel sized mini. A lightweight, translucent finishing powder that helps soften the appearance of fine lines and pores. This silky pressed powder has a fresh matte finish.',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:23.561Z',
  //   updated_at: '2017-12-24T02:31:23.991Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/934.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/934/original/open-uri20171224-4-1b8y84r?1514082683',
  //   product_colors: [
  //     {
  //       hex_value: '#F6F6F6',
  //       colour_name: 'Translucent'
  //     },
  //     {
  //       hex_value: '#F8E7C9',
  //       colour_name: 'Banana'
  //     },
  //     {
  //       hex_value: '#E1EDDF',
  //       colour_name: 'Mint Green'
  //     }
  //   ]
  // },
  // {
  //   id: 933,
  //   brand: 'nyx',
  //   name: 'Primal Colors',
  //   price: '5.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw2872d6ca/ProductImages/Eyes/Primal_Colors/primalcolors_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/primal-colors/NYX_108.html?cgid=powder',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Unleash your inner theatrical makeup artist with these incredible pressed pigments. Creates a variety of special effects with the ultimate staying power.',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:21.681Z',
  //   updated_at: '2017-12-24T02:31:22.481Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/933.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/933/original/open-uri20171224-4-18zslbp?1514082681',
  //   product_colors: [
  //     {
  //       hex_value: '#D73469',
  //       colour_name: 'Hot Pink'
  //     },
  //     {
  //       hex_value: '#B40D17',
  //       colour_name: 'Hot Red'
  //     },
  //     {
  //       hex_value: '#DA4F32',
  //       colour_name: 'Hot Orange'
  //     },
  //     {
  //       hex_value: '#F4D65C',
  //       colour_name: 'Hot Yellow'
  //     },
  //     {
  //       hex_value: '#369D41',
  //       colour_name: 'Hot Green'
  //     },
  //     {
  //       hex_value: '#3D5DB0',
  //       colour_name: 'Hot Blue'
  //     },
  //     {
  //       hex_value: '#BA4A9C',
  //       colour_name: 'Hot Fuchsia'
  //     },
  //     {
  //       hex_value: '#1B1B1B',
  //       colour_name: 'Hot Black'
  //     }
  //   ]
  // },
  // {
  //   id: 932,
  //   brand: 'nyx',
  //   name: 'Radiant Finishing Powder',
  //   price: '9.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwf8ec0855/ProductImages/Face/Radiant_Finishing_Powder/radiantfinishingpowder_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/radiant-finishing-powder/NYX_138.html?cgid=powder',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Two ways to get your glow on. A luminous multicolored finishing powder to brighten and perfect and a warm shimmering shade for sunkissed radiance.',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:20.618Z',
  //   updated_at: '2017-12-24T02:31:21.184Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/932.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/932/original/open-uri20171224-4-tpsvw?1514082680',
  //   product_colors: [
  //     {
  //       hex_value: '#D0C3BB',
  //       colour_name: 'Brighten'
  //     },
  //     {
  //       hex_value: '#F9B2AC',
  //       colour_name: 'Sunkissed'
  //     }
  //   ]
  // },
  // {
  //   id: 931,
  //   brand: 'nyx',
  //   name: 'Mineral Finishing Powder',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw66d2b512/ProductImages/Face/Mineral_Finishing_Powder/800897815455_mineralfinishingpowder_lightmedium_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/mineral-finishing-powder/NYX_081.html?cgid=powder',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'A mineral finishing powder that sets your favorite look with a flawless finish; skin appears fresh and radiant throughout the day. Just a hint of color provides enough coverage to be worn over makeup or on bare moisturized skin.',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:13.900Z',
  //   updated_at: '2017-12-24T02:31:14.353Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/931.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/931/original/open-uri20171224-4-1crem3m?1514082673',
  //   product_colors: [
  //     {
  //       hex_value: '#FFE5C7',
  //       colour_name: 'Light/Medium'
  //     },
  //     {
  //       hex_value: '#E6B896',
  //       colour_name: 'Medium/Dark'
  //     }
  //   ]
  // },
  // {
  //   id: 930,
  //   brand: 'nyx',
  //   name: 'High Definition Finishing Powder',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw090ffa50/ProductImages/Face/High_Definition_Finishing_Power/800897834661_highdefinitionfinishingpowder_translucent_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/high-definition-finishing-powder/NYX_186.html?cgid=powder',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'A lightweight, translucent finishing powder that helps soften the appearance of fine lines and pores. This silky pressed powder has a fresh matte finish.',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:12.680Z',
  //   updated_at: '2017-12-24T02:31:13.176Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/930.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/930/original/open-uri20171224-4-1se55cy?1514082672',
  //   product_colors: [
  //     {
  //       hex_value: '#F6F6F6',
  //       colour_name: 'Translucent'
  //     },
  //     {
  //       hex_value: '#F8E7C9',
  //       colour_name: 'Banana'
  //     },
  //     {
  //       hex_value: '#E1EDDF',
  //       colour_name: 'Mint Green'
  //     }
  //   ]
  // },
  // {
  //   id: 929,
  //   brand: 'nyx',
  //   name: 'Studio Finishing Powder',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw3aaafbb3/ProductImages/Face/Studio_Finishing_Powder/studiofinishingpowder_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/studio-finishing-powder/NYX_079.html?cgid=powder',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'A miracle in a jar! This 100% pure mineral silica finishing powder is perfect for setting your foundation or wearing alone. The luminous white powder goes on neutral and works on all skin tones. It leaves your skin looking radiant and luminous. Use lightly...a little goes a long way.',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:11.703Z',
  //   updated_at: '2017-12-24T02:31:12.282Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/929.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/929/original/open-uri20171224-4-vwf6hc?1514082671',
  //   product_colors: []
  // },
  // {
  //   id: 928,
  //   brand: 'nyx',
  //   name: 'Tango With Bronzing Powder',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw99f3e999/ProductImages/Face/Tango_With_Bronzing_Powder/tangowithbronzingpowder_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/tango-with-bronzing-powder/NYX_014.html?cgid=bronzer',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'It takes two to tango with our brilliant bronzing powder to kickstart your look. Our mosaic bronzer shades create a golden glow on the face and body—like you’ve just returned from a Caribbean getaway. Sun-kissed never looked this beautiful.',
  //   rating: null,
  //   category: null,
  //   product_type: 'bronzer',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:31:03.619Z',
  //   updated_at: '2017-12-24T02:31:04.587Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/928.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/928/original/open-uri20171224-4-1jps0th?1514082663',
  //   product_colors: [
  //     {
  //       hex_value: '#D1AE8E',
  //       colour_name: 'Confessions Of Tanaholic'
  //     },
  //     {
  //       hex_value: '#AB7C62',
  //       colour_name: 'Bronze Ensemble'
  //     },
  //     {
  //       hex_value: '#D59DA8',
  //       colour_name: 'When Leopard Gets A Tan'
  //     },
  //     {
  //       hex_value: '#D6988D',
  //       colour_name: 'Tan Enthusiasm'
  //     },
  //     {
  //       hex_value: '#A97D64',
  //       colour_name: 'Tribal Odyssey'
  //     }
  //   ]
  // },
  // {
  //   id: 927,
  //   brand: 'nyx',
  //   name: 'Illuminator',
  //   price: '9.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw5248da3f/ProductImages/Face/Illuminator/800897809003_illuminator_narcissistic_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/illuminator/NYX_062.html?cgid=bronzer',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Brighten up your complexion! The radiant shimmer of this illuminator diffuses light so your skin looks vibrant and refreshed while adding a subtle glow. Available in 5 radiant colors.',
  //   rating: null,
  //   category: null,
  //   product_type: 'bronzer',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:30:59.587Z',
  //   updated_at: '2017-12-24T02:31:00.034Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/927.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/927/original/open-uri20171224-4-firpx4?1514082659',
  //   product_colors: [
  //     {
  //       hex_value: '#DDA284',
  //       colour_name: 'Narcissistic'
  //     },
  //     {
  //       hex_value: '#E99D8F',
  //       colour_name: 'Chaotic'
  //     },
  //     {
  //       hex_value: '#E5A083',
  //       colour_name: 'Magnetic'
  //     },
  //     {
  //       hex_value: '#E7CAB8',
  //       colour_name: 'Ritualistic'
  //     },
  //     {
  //       hex_value: '#DD9E95',
  //       colour_name: 'Enigmatic'
  //     }
  //   ]
  // },
  // {
  //   id: 926,
  //   brand: 'nyx',
  //   name: 'Matte Bronzer',
  //   price: '9.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwed153ea9/ProductImages/Face/Matte_Bronzer/800897809058_mattebronzer_light_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/matte-bronzer/NYX_063.html?cgid=bronzer',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Perfect for Spring Summer and beyond – the Matte Bronzers have arrived! Achieve a natural and healthy looking complexion using any of the powder bronzers available in five russet shades. Perfect for that desired honey glow all year long!',
  //   rating: null,
  //   category: null,
  //   product_type: 'bronzer',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:51.848Z',
  //   updated_at: '2017-12-24T02:30:56.462Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/926.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/926/original/open-uri20171224-4-6mx0la?1514082656',
  //   product_colors: [
  //     {
  //       hex_value: '#C58965',
  //       colour_name: 'Light'
  //     },
  //     {
  //       hex_value: '#AC7D63',
  //       colour_name: 'Deep'
  //     },
  //     {
  //       hex_value: '#BB805E',
  //       colour_name: 'Medium'
  //     },
  //     {
  //       hex_value: '#B27759',
  //       colour_name: 'Dark Tan'
  //     },
  //     {
  //       hex_value: '#B17752',
  //       colour_name: 'Deep Tan'
  //     }
  //   ]
  // },
  // {
  //   id: 924,
  //   brand: 'nyx',
  //   name: 'Sweet Cheeks Blush Palette',
  //   price: '20.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwa0a9cf48/ProductImages/2016/Face/Sweet_Cheeks_Blush_Palette/sweetcheeksblushpalette_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/sweet-cheeks-blush-palette/NYX_359.html?cgid=blush',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Get swept away by our drop-dead gorgeous Sweet Cheeks Blush Palette. This collection features eight highly pigmented and buttery-smooth colors that flawlessly suit any skin tone. Perfect for everyone from the pro on the go to the budding beauty guru, our irreplaceable set brings together a variety of exclusive shades in both matte and shimmery finishes. It’s true--we’ve got a serious blush crush!',
  //   rating: null,
  //   category: null,
  //   product_type: 'blush',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:47.814Z',
  //   updated_at: '2017-12-24T02:30:48.645Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/924.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/924/original/open-uri20171224-4-7p4zdp?1514082648',
  //   product_colors: []
  // },
  // {
  //   id: 923,
  //   brand: 'nyx',
  //   name: 'Cheek Contour Duo Palette',
  //   price: '9.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwb9e0511a/ProductImages/2016/Face/Cheek_Contour_Duo_Palette/800897012007_cheekcontourduopalette_doubledate_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/cheek-contour-duo-palette/NYX_309.html?cgid=blush',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Create natural-looking contours, sun-kissed cheeks and a gorgeous, lit-from-within glow with our new Cheek Contour Duos. Available in six silky shade combinations, each luxurious compact makes it easy to perfect your complexion on the go.',
  //   rating: null,
  //   category: null,
  //   product_type: 'blush',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:46.474Z',
  //   updated_at: '2017-12-24T02:30:46.419Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/923.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/923/original/open-uri20171224-4-13zuxu4?1514082646',
  //   product_colors: [
  //     {
  //       hex_value: '#8F4D3D',
  //       colour_name: 'Perfect Match'
  //     },
  //     {
  //       hex_value: '#A45340',
  //       colour_name: 'Two To Tango'
  //     },
  //     {
  //       hex_value: '#6D3D3B',
  //       colour_name: 'Ginger & Pepper'
  //     },
  //     {
  //       hex_value: '#6B4530',
  //       colour_name: 'Wine & Dine'
  //     },
  //     {
  //       hex_value: '#7A4C32',
  //       colour_name: 'Cheek On Cheek'
  //     }
  //   ]
  // },
  // {
  //   id: 922,
  //   brand: 'nyx',
  //   name: 'High Definition Blush Pro Refills',
  //   price: '6.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw587b93a7/ProductImages/Face/High_Definition_Pro_Blush_Refills/highdefinitionproblushrefills_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/high-definition-blush-pro-refills/NYX_254.html?cgid=blush',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description: '',
  //   rating: null,
  //   category: null,
  //   product_type: 'blush',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:44.070Z',
  //   updated_at: '2017-12-24T02:30:42.574Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/922.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/922/original/open-uri20171224-4-1fun686?1514082642',
  //   product_colors: [
  //     {
  //       hex_value: '#FACFD0',
  //       colour_name: 'Pastel Chic'
  //     },
  //     {
  //       hex_value: '#F4A38D',
  //       colour_name: 'Soft Spoken'
  //     },
  //     {
  //       hex_value: '#F38D9B',
  //       colour_name: 'Baby Doll'
  //     },
  //     {
  //       hex_value: '#F5948E',
  //       colour_name: 'Hamptons'
  //     },
  //     {
  //       hex_value: '#E58581',
  //       colour_name: 'Intuition'
  //     },
  //     {
  //       hex_value: '#F34395',
  //       colour_name: 'Electro'
  //     },
  //     {
  //       hex_value: '#F58F83',
  //       colour_name: 'Amber'
  //     },
  //     {
  //       hex_value: '#D6826B',
  //       colour_name: 'Bronzed'
  //     },
  //     {
  //       hex_value: '#E68B84',
  //       colour_name: "Mauve N' Out"
  //     },
  //     {
  //       hex_value: '#CB7A79',
  //       colour_name: 'Deep Plum'
  //     },
  //     {
  //       hex_value: '#DC7675',
  //       colour_name: 'Bitten'
  //     },
  //     {
  //       hex_value: '#EA3034',
  //       colour_name: 'Crimson'
  //     },
  //     {
  //       hex_value: '#E34A57',
  //       colour_name: 'Tuscan'
  //     },
  //     {
  //       hex_value: '#EB6C63',
  //       colour_name: 'Summer'
  //     },
  //     {
  //       hex_value: '#FA694B',
  //       colour_name: 'Double Dare'
  //     },
  //     {
  //       hex_value: '#F49178',
  //       colour_name: 'Coraline'
  //     },
  //     {
  //       hex_value: '#F99282',
  //       colour_name: 'Pink The Town'
  //     },
  //     {
  //       hex_value: '#E28F81',
  //       colour_name: 'Rose Gold'
  //     },
  //     {
  //       hex_value: '#F49877',
  //       colour_name: 'Down To Earth'
  //     },
  //     {
  //       hex_value: '#F08F75',
  //       colour_name: 'Bright Lights'
  //     },
  //     {
  //       hex_value: '#D5967B',
  //       colour_name: "Nude'Tude"
  //     },
  //     {
  //       hex_value: '#CC8774',
  //       colour_name: 'Glow'
  //     },
  //     {
  //       hex_value: '#CB896E',
  //       colour_name: 'Beach Babe'
  //     },
  //     {
  //       hex_value: '#BC9178',
  //       colour_name: 'Taupe'
  //     }
  //   ]
  // },
  // {
  //   id: 921,
  //   brand: 'nyx',
  //   name: 'Bright Idea Illuminating Stick',
  //   price: '8.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwc8112b7d/ProductImages/2016/Face/Bright_Idea_Illuminating_Stick/brightideailluminatingstick_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/bright-idea-illuminating-stick/NYX_347.html?cgid=bronzer',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Brighten things up with one of our new Bright Idea Illuminating Sticks! Available in a range of radiating hues--including four highlighters, four blushes and four bronzers--each creamy-soft shade goes on smoothly and sets right away for an instant, lit-from-within glow. Petite, portable and perfect for strobing, it’s the makeup must-have of the season.',
  //   rating: null,
  //   category: null,
  //   product_type: 'bronzer',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:42.079Z',
  //   updated_at: '2017-12-24T02:31:01.364Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/921.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/921/original/open-uri20171224-4-wm9lld?1514082660',
  //   product_colors: [
  //     {
  //       hex_value: '#E6C2C6',
  //       colour_name: 'Lavender Lust'
  //     },
  //     {
  //       hex_value: '#F4D0B8',
  //       colour_name: 'Chardonnay Shimmer'
  //     },
  //     {
  //       hex_value: '#FBC4AF',
  //       colour_name: 'Pearl Pink Lace'
  //     },
  //     {
  //       hex_value: '#F8BAA3',
  //       colour_name: 'Pinkie Dust'
  //     },
  //     {
  //       hex_value: '#FD876D',
  //       colour_name: 'Coralicious'
  //     },
  //     {
  //       hex_value: '#FD7373',
  //       colour_name: 'Rose Petal Pop'
  //     },
  //     {
  //       hex_value: '#C03731',
  //       colour_name: 'Brick Red Blaze'
  //     },
  //     {
  //       hex_value: '#EFB381',
  //       colour_name: 'Sun Kissed Crush'
  //     },
  //     {
  //       hex_value: '#E9A47A',
  //       colour_name: 'Bermuda Bronze'
  //     },
  //     {
  //       hex_value: '#DD9861',
  //       colour_name: 'Maui Suntan'
  //     },
  //     {
  //       hex_value: '#CE8A5B',
  //       colour_name: 'Sandy Glow'
  //     },
  //     {
  //       hex_value: '#C38451',
  //       colour_name: 'Topaz Tan'
  //     }
  //   ]
  // },
  // {
  //   id: 920,
  //   brand: 'nyx',
  //   name: 'Rouge Cream Blush',
  //   price: '6.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw91979480/ProductImages/Face/Rouge_Cream_Blush/rougecreamblush_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/rouge-cream-blush/NYX_010.html?cgid=blush',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'More delicious than peaches and cream? We like to think so. Our velvety smooth mineral Rouge Cream Blush offers a sheer wash of radiant color. The glorious payoff is dewy sultry and long-lasting.',
  //   rating: null,
  //   category: null,
  //   product_type: 'blush',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:39.285Z',
  //   updated_at: '2017-12-24T02:30:35.745Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/920.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/920/original/open-uri20171224-4-11ndp61?1514082635',
  //   product_colors: [
  //     {
  //       hex_value: '#E4878F',
  //       colour_name: 'Boho Chic'
  //     },
  //     {
  //       hex_value: '#F08E8B',
  //       colour_name: 'Natural'
  //     },
  //     {
  //       hex_value: '#D27772',
  //       colour_name: 'Rose Petal'
  //     },
  //     {
  //       hex_value: '#D36A6F',
  //       colour_name: 'Glow'
  //     },
  //     {
  //       hex_value: '#FF3986',
  //       colour_name: 'Hot Pink'
  //     },
  //     {
  //       hex_value: '#FF1850',
  //       colour_name: 'Red Cheeks'
  //     },
  //     {
  //       hex_value: '#EB6B50',
  //       colour_name: 'Orange'
  //     },
  //     {
  //       hex_value: '#EC6E71',
  //       colour_name: 'Tickled'
  //     },
  //     {
  //       hex_value: '#CA7769',
  //       colour_name: 'Tea Rose'
  //     }
  //   ]
  // },
  // {
  //   id: 919,
  //   brand: 'nyx',
  //   name: 'Mosaic Powder Blush',
  //   price: '7.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw5b50439f/ProductImages/Face/Mosaic_Powder_Blush/800897124533_mosaicpowderblush_highlighter_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/mosaic-powder-blush/NYX_008.html?cgid=bronzer',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'This medley of 9 matte and shimmery colors creates a flush of color and dazzling glow for every skin tone. Use to highlight enhance brighten and bronze. Each mosaic of color blends beautifully with magical results.',
  //   rating: null,
  //   category: null,
  //   product_type: 'bronzer',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:37.401Z',
  //   updated_at: '2017-12-24T02:30:57.868Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/919.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/919/original/open-uri20171224-4-1lhzgye?1514082657',
  //   product_colors: [
  //     {
  //       hex_value: '#B7AB9F',
  //       colour_name: 'Highlighter'
  //     },
  //     {
  //       hex_value: '#B07C6E',
  //       colour_name: 'Peachy'
  //     },
  //     {
  //       hex_value: '#EDB698',
  //       colour_name: 'Silk'
  //     },
  //     {
  //       hex_value: '#FFC4C0',
  //       colour_name: 'Rosey'
  //     },
  //     {
  //       hex_value: '#C2928E',
  //       colour_name: 'Spice'
  //     },
  //     {
  //       hex_value: '#FECEC0',
  //       colour_name: 'Paradise'
  //     },
  //     {
  //       hex_value: '#FF7D5F',
  //       colour_name: 'Love'
  //     },
  //     {
  //       hex_value: '#CBA984',
  //       colour_name: 'Truth'
  //     },
  //     {
  //       hex_value: '#E6908F',
  //       colour_name: 'Dare'
  //     }
  //   ]
  // },
  // {
  //   id: 918,
  //   brand: 'nyx',
  //   name: 'Baked Blush',
  //   price: '7.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwfdfb0cd6/ProductImages/Face/Baked_Blush/800897824181_bakedblush_fullonfemme_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/baked-blush/NYX_128.html?cgid=blush',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Baked to sheer perfection this luxurious formula is packed full of pigments to provide a natural glow and highlight to the face. Uniquely designed to be used wet or dry depending upon the makeup statement you want to make. When used dry with a brush the look is light and fresh. Want more color? No Problem! Apply wet with a makeup sponge for more intensity.',
  //   rating: null,
  //   category: null,
  //   product_type: 'blush',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:34.896Z',
  //   updated_at: '2017-12-24T02:30:31.495Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/918.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/918/original/open-uri20171224-4-1g2payx?1514082631',
  //   product_colors: [
  //     {
  //       hex_value: '#F9D1D1',
  //       colour_name: 'Full-On Femme'
  //     },
  //     {
  //       hex_value: '#FAD1CD',
  //       colour_name: 'Ladylike'
  //     },
  //     {
  //       hex_value: '#F4D5D2',
  //       colour_name: 'Journey'
  //     },
  //     {
  //       hex_value: '#FAD1CF',
  //       colour_name: 'Spanish Rose'
  //     },
  //     {
  //       hex_value: '#F4C6B9',
  //       colour_name: 'Foreplay'
  //     },
  //     {
  //       hex_value: '#F2BDC7',
  //       colour_name: 'Pink Fetish'
  //     },
  //     {
  //       hex_value: '#F8B7BD',
  //       colour_name: 'Statement Red'
  //     },
  //     {
  //       hex_value: '#E2C2B7',
  //       colour_name: 'Chiffon'
  //     },
  //     {
  //       hex_value: '#F0CBC3',
  //       colour_name: 'Wanderlust'
  //     },
  //     {
  //       hex_value: '#F9D9C4',
  //       colour_name: 'Sugar Mama'
  //     },
  //     {
  //       hex_value: '#E8C7B6',
  //       colour_name: 'Solstice'
  //     },
  //     {
  //       hex_value: '#E5C0A6',
  //       colour_name: 'Ignite'
  //     }
  //   ]
  // },
  // {
  //   id: 917,
  //   brand: 'nyx',
  //   name: 'Bronzer & Blusher Combo',
  //   price: '9.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwa51d41b7/ProductImages/Face/Bronzer_And_Blusher_Combo/bronzerandblushercombo_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/bronzer-and-blusher-combo/NYX_066.html?cgid=bronzer',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Get the perfect sun-kissed glow with complementing color combinations from our Bronzer/Blusher Combo. Each blush and bronzer pairing features flattering and natural-looking hues. With 5 shades to choose from it is easier than ever to achieve an impeccable Springtime and Summertime glow.',
  //   rating: null,
  //   category: null,
  //   product_type: 'bronzer',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:33.939Z',
  //   updated_at: '2017-12-24T02:30:55.011Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/917.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/917/original/open-uri20171224-4-1e7o792?1514082654',
  //   product_colors: [
  //     {
  //       hex_value: '#CC846C',
  //       colour_name: 'Bora Bora'
  //     },
  //     {
  //       hex_value: '#F5A493',
  //       colour_name: 'Marbella'
  //     },
  //     {
  //       hex_value: '#F19E96',
  //       colour_name: 'Phi Phi Island'
  //     }
  //   ]
  // },
  // {
  //   id: 916,
  //   brand: 'nyx',
  //   name: 'High Definition Blush',
  //   price: '6.5',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw565af449/ProductImages/Face/High_Definition_Blush/highdefinitionblush_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/high-definition-blush/NYX_178.html?cgid=blush',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'A high definition lightweight blush that blends evenly. This vibrant and silky blush delivers a beautiful flush of color and is paraben free.',
  //   rating: null,
  //   category: null,
  //   product_type: 'blush',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:30.659Z',
  //   updated_at: '2017-12-24T02:30:23.527Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/916.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/916/original/open-uri20171224-4-12rfxs8?1514082623',
  //   product_colors: [
  //     {
  //       hex_value: '#FACFD0',
  //       colour_name: 'Pastel Chic'
  //     },
  //     {
  //       hex_value: '#F4A38D',
  //       colour_name: 'Soft Spoken'
  //     },
  //     {
  //       hex_value: '#F38D9B',
  //       colour_name: 'Baby Doll'
  //     },
  //     {
  //       hex_value: '#F5948E',
  //       colour_name: 'Hamptons'
  //     },
  //     {
  //       hex_value: '#E58581',
  //       colour_name: 'Intuition'
  //     },
  //     {
  //       hex_value: '#F34395',
  //       colour_name: 'Electro'
  //     },
  //     {
  //       hex_value: '#F58F83',
  //       colour_name: 'Amber'
  //     },
  //     {
  //       hex_value: '#D6826B',
  //       colour_name: 'Bronzed'
  //     },
  //     {
  //       hex_value: '#E68B84',
  //       colour_name: "Mauve N' Out"
  //     },
  //     {
  //       hex_value: '#CB7A79',
  //       colour_name: 'Deep Plum'
  //     },
  //     {
  //       hex_value: '#DC7675',
  //       colour_name: 'Bitten'
  //     },
  //     {
  //       hex_value: '#EA3034',
  //       colour_name: 'Crimson'
  //     },
  //     {
  //       hex_value: '#E34A57',
  //       colour_name: 'Tuscan'
  //     },
  //     {
  //       hex_value: '#EB6C63',
  //       colour_name: 'Summer'
  //     },
  //     {
  //       hex_value: '#FA694B',
  //       colour_name: 'Double Dare'
  //     },
  //     {
  //       hex_value: '#F49178',
  //       colour_name: 'Coraline'
  //     },
  //     {
  //       hex_value: '#F99282',
  //       colour_name: 'Pink The Town'
  //     },
  //     {
  //       hex_value: '#E28F81',
  //       colour_name: 'Rose Gold'
  //     },
  //     {
  //       hex_value: '#F49877',
  //       colour_name: 'Down To Earth'
  //     },
  //     {
  //       hex_value: '#F08F75',
  //       colour_name: 'Bright Lights'
  //     },
  //     {
  //       hex_value: '#D5967B',
  //       colour_name: "Nude'Tude"
  //     },
  //     {
  //       hex_value: '#CC8774',
  //       colour_name: 'Glow'
  //     },
  //     {
  //       hex_value: '#CB896E',
  //       colour_name: 'Beach Babe'
  //     },
  //     {
  //       hex_value: '#BC9178',
  //       colour_name: 'Taupe'
  //     }
  //   ]
  // },
  // {
  //   id: 915,
  //   brand: 'nyx',
  //   name: 'Ombre Blush',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw87fb4a6b/ProductImages/2016/Face/Ombre_Blush/ombreblush_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/ombre-blush/NYX_318.html?cgid=blush',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Treat your cheeks to a radiant flush of color with our Ombré Blush, a new gradient blush inspired by the ombré trend. This must-have formula features two silky colors blended into one perfectly coordinated shade combo. (It’s like they were meant for each other.)',
  //   rating: null,
  //   category: null,
  //   product_type: 'blush',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:28.955Z',
  //   updated_at: '2017-12-24T02:30:22.315Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/915.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/915/original/open-uri20171224-4-uv4oww?1514082622',
  //   product_colors: [
  //     {
  //       hex_value: '#FA7586',
  //       colour_name: 'Sweet Spring'
  //     },
  //     {
  //       hex_value: '#F15B67',
  //       colour_name: 'Insta Flame'
  //     },
  //     {
  //       hex_value: '#EC6BBD',
  //       colour_name: 'Code breaker'
  //     },
  //     {
  //       hex_value: '#C5867F',
  //       colour_name: 'Mauve Me'
  //     },
  //     {
  //       hex_value: '#F26746',
  //       colour_name: 'Feel The Heat'
  //     },
  //     {
  //       hex_value: '#F56958',
  //       colour_name: 'Soft Flush'
  //     },
  //     {
  //       hex_value: '#E18866',
  //       colour_name: 'Strictly Chic'
  //     },
  //     {
  //       hex_value: '#C0764F',
  //       colour_name: 'Nude To Me'
  //     }
  //   ]
  // },
  // {
  //   id: 914,
  //   brand: 'nyx',
  //   name: 'Stick Blush',
  //   price: '6.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwb08ab0fe/ProductImages/Face/Stick_Blush/stickblush_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/stick-blush/NYX_064.html?cgid=blush',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Add a touch of color with our creamy and extremely pigmented Stick Blush! Available in eight rich shades! Apply and receive the perfect glow every day!',
  //   rating: null,
  //   category: null,
  //   product_type: 'blush',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:27.562Z',
  //   updated_at: '2017-12-24T02:30:20.870Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/914.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/914/original/open-uri20171224-4-15kclri?1514082620',
  //   product_colors: [
  //     {
  //       hex_value: '#CF0E61',
  //       colour_name: 'Magnolia'
  //     },
  //     {
  //       hex_value: '#DE056E',
  //       colour_name: 'Pink Lotus'
  //     },
  //     {
  //       hex_value: '#DA1D71',
  //       colour_name: 'Tulip'
  //     },
  //     {
  //       hex_value: '#D81758',
  //       colour_name: 'Pink Poppy'
  //     },
  //     {
  //       hex_value: '#8B161E',
  //       colour_name: 'Tea Rose'
  //     },
  //     {
  //       hex_value: '#B70543',
  //       colour_name: 'Orchid'
  //     },
  //     {
  //       hex_value: '#7A1E13',
  //       colour_name: 'Hibiscus'
  //     },
  //     {
  //       hex_value: '#7C2617',
  //       colour_name: 'Water Lily'
  //     }
  //   ]
  // },
  // {
  //   id: 913,
  //   brand: 'nyx',
  //   name: 'Powder Blush',
  //   price: '5.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw12ca4942/ProductImages/Face/Powder_Blush/powderblush_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/powder-blush/NYX_009.html?cgid=bronzer',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Our pressed powder blush delivers sheer silky color that glides on easily blends beautifully and creates a natural glow. The formula is richly-pigmented and lasts for hours.',
  //   rating: null,
  //   category: null,
  //   product_type: 'bronzer',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:25.043Z',
  //   updated_at: '2017-12-24T02:30:52.742Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/913.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/913/original/open-uri20171224-4-lupzlr?1514082652',
  //   product_colors: [
  //     {
  //       hex_value: '#DD7F97',
  //       colour_name: 'Rose Garden'
  //     },
  //     {
  //       hex_value: '#BA356C',
  //       colour_name: 'Pinky'
  //     },
  //     {
  //       hex_value: '#E07F88',
  //       colour_name: 'Pinched'
  //     },
  //     {
  //       hex_value: '#AB0A33',
  //       colour_name: 'Red'
  //     },
  //     {
  //       hex_value: '#D19E9D',
  //       colour_name: 'Angel'
  //     },
  //     {
  //       hex_value: '#C27B67',
  //       colour_name: 'Terra Cotta'
  //     }
  //   ]
  // },
  // {
  //   id: 912,
  //   brand: 'nyx',
  //   name: 'Gotcha Covered Concealer Pencil',
  //   price: '7.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw8ad0514f/ProductImages/2016/Face/Gotcha_Covered_Concealer_Pencil/gotchacoveredconcealerpencil_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/gotcha-covered-concealer-pencil/NYX_346.html?cgid=concealer',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Skin imperfections, beware! When it comes to covering up discoloration, our new Gotcha Covered Concealer Pencil does NOT mess around. Available in 20 blendable shades, this luxurious concealer is a master at spot concealing.',
  //   rating: null,
  //   category: 'concealer',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:21.007Z',
  //   updated_at: '2017-12-24T02:30:17.143Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/912.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/912/original/open-uri20171224-4-abiui6?1514082616',
  //   product_colors: [
  //     {
  //       hex_value: '#F8DFC0',
  //       colour_name: 'Alabaster'
  //     },
  //     {
  //       hex_value: '#F3D0B2',
  //       colour_name: 'Light Ivory'
  //     },
  //     {
  //       hex_value: '#EFCBB1',
  //       colour_name: 'Ivory'
  //     },
  //     {
  //       hex_value: '#EDC7A2',
  //       colour_name: 'Light'
  //     },
  //     {
  //       hex_value: '#DDB997',
  //       colour_name: 'Nude Beige'
  //     },
  //     {
  //       hex_value: '#DCBA97',
  //       colour_name: 'Medium Olive'
  //     },
  //     {
  //       hex_value: '#DBB795',
  //       colour_name: 'Honey Beige'
  //     },
  //     {
  //       hex_value: '#DDB174',
  //       colour_name: 'Caramel Beige'
  //     },
  //     {
  //       hex_value: '#D7A568',
  //       colour_name: 'Classic Tan'
  //     },
  //     {
  //       hex_value: '#D1A278',
  //       colour_name: 'Golden'
  //     },
  //     {
  //       hex_value: '#CB9A6F',
  //       colour_name: 'Sand'
  //     },
  //     {
  //       hex_value: '#B9884D',
  //       colour_name: 'Deep Golden'
  //     },
  //     {
  //       hex_value: '#AA5E2A',
  //       colour_name: 'Mahogany'
  //     },
  //     {
  //       hex_value: '#804F31',
  //       colour_name: 'Cappuccino'
  //     },
  //     {
  //       hex_value: '#7B5236',
  //       colour_name: 'Cocoa'
  //     },
  //     {
  //       hex_value: '#69442A',
  //       colour_name: 'Deep Rich'
  //     },
  //     {
  //       hex_value: '#673C2B',
  //       colour_name: 'Espresso'
  //     },
  //     {
  //       hex_value: '#653A29',
  //       colour_name: 'Deep Espresso'
  //     },
  //     {
  //       hex_value: '#F4D1B3',
  //       colour_name: 'Beige'
  //     }
  //   ]
  // },
  // {
  //   id: 911,
  //   brand: 'nyx',
  //   name: 'Conceal, Correct, Contour Palette',
  //   price: '12.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwbef45c94/ProductImages/Face/Conceal_Correct_Contour_Palette/800897831479_concealcorrectcontourpalette_light_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/conceal-correct-contour-palette/NYX_170.html?cgid=concealer',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Color-match your skin using our perfecting and correcting palettes to conceal, correct, or contour. With six shades to choose from in each set you can cover up problem spots even out imperfections and accentuate your best features in a flash. Use these buildable colors on their own or combine them to create the ideal tone.',
  //   rating: null,
  //   category: 'concealer',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:19.928Z',
  //   updated_at: '2017-12-24T02:30:15.919Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/911.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/911/original/open-uri20171224-4-lx4vmq?1514082615',
  //   product_colors: [
  //     {
  //       hex_value: '#FFFEFC',
  //       colour_name: 'Light'
  //     },
  //     {
  //       hex_value: '#FDF9F6',
  //       colour_name: 'Medium'
  //     },
  //     {
  //       hex_value: '#F1F2F4',
  //       colour_name: 'Deep'
  //     }
  //   ]
  // },
  // {
  //   id: 910,
  //   brand: 'nyx',
  //   name: 'Wonder Pencil',
  //   price: '4.5',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw5e345fad/ProductImages/Face/Wonder_Pencil/wonderpencil_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/wonder-pencil/NYX_091.html?cgid=eyeliner',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Wonder Pencil…the essential pencil that fulfills all of your beauty desires. Conquer 3 critical make-up tasks with one product: CONCEAL flaws and blemishes with creamy precision; LINE your lips against lipstick bleeding and fading; and BRIGHTEN your eyes along the water line. Will wonders never cease? Not with the Wonder Pencil in your bag!',
  //   rating: null,
  //   category: 'pencil',
  //   product_type: 'eyeliner',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:18.879Z',
  //   updated_at: '2017-12-24T02:32:16.275Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/910.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/910/original/open-uri20171224-4-1f18cvd?1514082735',
  //   product_colors: [
  //     {
  //       hex_value: '#E5C19F',
  //       colour_name: 'Light'
  //     },
  //     {
  //       hex_value: '#C49D7E',
  //       colour_name: 'Medium'
  //     },
  //     {
  //       hex_value: '#AF8F76',
  //       colour_name: 'Deep'
  //     }
  //   ]
  // },
  // {
  //   id: 909,
  //   brand: 'nyx',
  //   name: 'Dark Circle Concealer',
  //   price: '6.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw477d3d9a/ProductImages/Face/Dark_Circle_Concealer/800897822958_darkcircleconcealer_light_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/dark-circle-concealer/NYX_133.html?cgid=concealer',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'A serious solution for one of beauty’s most challenging problems! No fancy names just a product that can be counted on to do the job. The product glides on without looking thick or obvious. The subtle hint of orange counteracts the appearance of dark circles while natural skin-toned pigments work in unison to provide the ultimate coverage.',
  //   rating: null,
  //   category: 'concealer',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:17.702Z',
  //   updated_at: '2017-12-24T02:30:13.878Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/909.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/909/original/open-uri20171224-4-vt9rh6?1514082613',
  //   product_colors: [
  //     {
  //       hex_value: '#ECAA87',
  //       colour_name: 'Fair'
  //     },
  //     {
  //       hex_value: '#EA9B70',
  //       colour_name: 'Light'
  //     },
  //     {
  //       hex_value: '#E5895A',
  //       colour_name: 'Medium'
  //     },
  //     {
  //       hex_value: '#A96540',
  //       colour_name: 'Deep'
  //     }
  //   ]
  // },
  // {
  //   id: 908,
  //   brand: 'nyx',
  //   name: 'Gotcha Covered Concealer',
  //   price: '6.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw947da0d5/ProductImages/Face/Gotcha_Covered_Concealer/gotchacoveredconcealer_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/gotcha-covered-concealer/NYX_203.html?cgid=concealer',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Gotcha Covered Concealer always has your back! Now available in 10 more gorgeous shades, our waterproof, full coverage concealer effectively covers up discolorations and imperfections without creasing or caking. Infused with coconut oil, this highly blendable concealer also leaves your face with a healthy-looking glow.',
  //   rating: null,
  //   category: 'concealer',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:15.481Z',
  //   updated_at: '2017-12-24T02:30:12.047Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/908.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/908/original/open-uri20171224-4-1980tbf?1514082611',
  //   product_colors: [
  //     {
  //       hex_value: '#E9CFB6',
  //       colour_name: 'Alabaster'
  //     },
  //     {
  //       hex_value: '#E7C7AE',
  //       colour_name: 'Ivory'
  //     },
  //     {
  //       hex_value: '#E0C2AA',
  //       colour_name: 'Soft Ivory'
  //     },
  //     {
  //       hex_value: '#D6B79B',
  //       colour_name: 'Light'
  //     },
  //     {
  //       hex_value: '#E0C1A5',
  //       colour_name: 'Natural'
  //     },
  //     {
  //       hex_value: '#DCB18F',
  //       colour_name: 'Beige'
  //     },
  //     {
  //       hex_value: '#D1A77D',
  //       colour_name: 'Medium'
  //     },
  //     {
  //       hex_value: '#CFA984',
  //       colour_name: 'Medium Olive'
  //     },
  //     {
  //       hex_value: '#D5AB81',
  //       colour_name: 'Fresh Beige'
  //     },
  //     {
  //       hex_value: '#C9A37E',
  //       colour_name: 'Golden'
  //     },
  //     {
  //       hex_value: '#B99774',
  //       colour_name: 'Tan'
  //     },
  //     {
  //       hex_value: '#BB906D',
  //       colour_name: 'Sand'
  //     },
  //     {
  //       hex_value: '#B08767',
  //       colour_name: 'Deep Honey'
  //     },
  //     {
  //       hex_value: '#957151',
  //       colour_name: 'Deep'
  //     },
  //     {
  //       hex_value: '#A47C59',
  //       colour_name: 'Cappuccino'
  //     },
  //     {
  //       hex_value: '#997551',
  //       colour_name: 'Deep Caramel'
  //     },
  //     {
  //       hex_value: '#937052',
  //       colour_name: 'Mocha'
  //     },
  //     {
  //       hex_value: '#715138',
  //       colour_name: 'Ebony'
  //     },
  //     {
  //       hex_value: '#72573C',
  //       colour_name: 'Cocoa'
  //     },
  //     {
  //       hex_value: '#5E4433',
  //       colour_name: 'Espresso'
  //     }
  //   ]
  // },
  // {
  //   id: 907,
  //   brand: 'nyx',
  //   name: 'Color Correcting Palette',
  //   price: '12.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwb6d96368/ProductImages/Face/Color_Correcting_Palette/800897834722_colorcorrectingpalette_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/color-correcting-palette/NYX_171.html?cgid=concealer',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Treat your face to the ultimate concealer palette in six color correcting shades. Customizable to create your ideal shade to cover imperfections the lightweight formula glides on for an ultra-smooth finish and leaves skin feeling soft and supple.',
  //   rating: null,
  //   category: 'concealer',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:14.774Z',
  //   updated_at: '2017-12-24T02:30:11.232Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/907.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/907/original/open-uri20171224-4-1b7ug0q?1514082611',
  //   product_colors: []
  // },
  // {
  //   id: 906,
  //   brand: 'nyx',
  //   name: 'Concealer Jar',
  //   price: '5.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw04c31800/ProductImages/Face/Concealer_Jar/concealerjar_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/concealer-jar/NYX_011.html?cgid=concealer',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Obscure imperfections and blur away problem areas with one of our Concealer Jars. Now available in 10 more shades to accommodate an even wider range of skin tones, this creamy formula stands up to the villains of unwelcome imperfections with a vengeance.',
  //   rating: null,
  //   category: 'concealer',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:11.932Z',
  //   updated_at: '2017-12-24T02:30:08.254Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/906.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/906/original/open-uri20171224-4-gko26q?1514082608',
  //   product_colors: [
  //     {
  //       hex_value: '#FCDAB5',
  //       colour_name: 'Alabaster'
  //     },
  //     {
  //       hex_value: '#FCCAA5',
  //       colour_name: 'Porcelain'
  //     },
  //     {
  //       hex_value: '#FCCEAD',
  //       colour_name: 'Fair'
  //     },
  //     {
  //       hex_value: '#EFB590',
  //       colour_name: 'Light'
  //     },
  //     {
  //       hex_value: '#DAA677',
  //       colour_name: 'Nude Beige'
  //     },
  //     {
  //       hex_value: '#D9A073',
  //       colour_name: 'Beige'
  //     },
  //     {
  //       hex_value: '#CDA170',
  //       colour_name: 'Sand Beige'
  //     },
  //     {
  //       hex_value: '#CB885E',
  //       colour_name: 'Medium'
  //     },
  //     {
  //       hex_value: '#DB9A74',
  //       colour_name: 'Glow'
  //     },
  //     {
  //       hex_value: '#CC9D69',
  //       colour_name: 'Fresh Beige'
  //     },
  //     {
  //       hex_value: '#D0925F',
  //       colour_name: 'Golden'
  //     },
  //     {
  //       hex_value: '#BC8B50',
  //       colour_name: 'Caramel'
  //     },
  //     {
  //       hex_value: '#BB7B4B',
  //       colour_name: 'Tan'
  //     },
  //     {
  //       hex_value: '#B9743D',
  //       colour_name: 'Deep Golden'
  //     },
  //     {
  //       hex_value: '#A76938',
  //       colour_name: 'Nutmeg'
  //     },
  //     {
  //       hex_value: '#B1703A',
  //       colour_name: 'Cappuccino'
  //     },
  //     {
  //       hex_value: '#A76C40',
  //       colour_name: 'Cocoa'
  //     },
  //     {
  //       hex_value: '#885333',
  //       colour_name: 'Deep Rich'
  //     },
  //     {
  //       hex_value: '#805332',
  //       colour_name: 'Espresso'
  //     },
  //     {
  //       hex_value: '#71482C',
  //       colour_name: 'Deep Espresso'
  //     },
  //     {
  //       hex_value: '#F8D383',
  //       colour_name: 'Yellow'
  //     },
  //     {
  //       hex_value: '#D5BCE6',
  //       colour_name: 'Lavender'
  //     },
  //     {
  //       hex_value: '#BDE0C0',
  //       colour_name: 'Green'
  //     },
  //     {
  //       hex_value: '#FB772F',
  //       colour_name: 'Orange'
  //     }
  //   ]
  // },
  // {
  //   id: 905,
  //   brand: 'nyx',
  //   name: 'HD Photogenic Concealer Wand',
  //   price: '5.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw10ab1d12/ProductImages/2016/Face/HD_Photogenic_Concealer_Wand/concealerwand_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/hd-photogenic-concealer-wand/NYX_013.html?cgid=concealer',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Now available in 12 more shades to accommodate an even wider range of skin tones, our best-selling HD Studio Photogenic Concealer effectively covers imperfections, discoloration and under-eye circles without ever looking cakey or obvious. The result is beautiful, natural-looking coverage you can count on.',
  //   rating: null,
  //   category: 'concealer',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:08.470Z',
  //   updated_at: '2017-12-24T02:30:04.357Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/905.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/905/original/open-uri20171224-4-1tmsfyh?1514082604',
  //   product_colors: [
  //     {
  //       hex_value: '#EBC7A3',
  //       colour_name: 'Alabaster'
  //     },
  //     {
  //       hex_value: '#ECC3A5',
  //       colour_name: 'Porcelain'
  //     },
  //     {
  //       hex_value: '#EABF9D',
  //       colour_name: 'Fair'
  //     },
  //     {
  //       hex_value: '#E6B897',
  //       colour_name: 'Light'
  //     },
  //     {
  //       hex_value: '#DEB391',
  //       colour_name: 'Nude Beige'
  //     },
  //     {
  //       hex_value: '#DAB08A',
  //       colour_name: 'Beige'
  //     },
  //     {
  //       hex_value: '#D2A67F',
  //       colour_name: 'Sand Beige'
  //     },
  //     {
  //       hex_value: '#D5A080',
  //       colour_name: 'Medium'
  //     },
  //     {
  //       hex_value: '#D49F7D',
  //       colour_name: 'Glow'
  //     },
  //     {
  //       hex_value: '#CD9E74',
  //       colour_name: 'Fresh Beige'
  //     },
  //     {
  //       hex_value: '#CE9872',
  //       colour_name: 'Golden'
  //     },
  //     {
  //       hex_value: '#C5966A',
  //       colour_name: 'Caramel'
  //     },
  //     {
  //       hex_value: '#BE895F',
  //       colour_name: 'Tan'
  //     },
  //     {
  //       hex_value: '#BB8255',
  //       colour_name: 'Deep Golden'
  //     },
  //     {
  //       hex_value: '#B2794C',
  //       colour_name: 'Nutmeg'
  //     },
  //     {
  //       hex_value: '#945D3F',
  //       colour_name: 'Cappuccino'
  //     },
  //     {
  //       hex_value: '#93633F',
  //       colour_name: 'Cocoa'
  //     },
  //     {
  //       hex_value: '#83573E',
  //       colour_name: 'Deep Rich'
  //     },
  //     {
  //       hex_value: '#7C4F38',
  //       colour_name: 'Espresso'
  //     },
  //     {
  //       hex_value: '#6B3E27',
  //       colour_name: 'Deep Espresso'
  //     },
  //     {
  //       hex_value: '#F2CC8E',
  //       colour_name: 'Yellow'
  //     },
  //     {
  //       hex_value: '#BFB3C9',
  //       colour_name: 'Lavender'
  //     },
  //     {
  //       hex_value: '#A0C8AD',
  //       colour_name: 'Green'
  //     }
  //   ]
  // },
  // {
  //   id: 904,
  //   brand: 'nyx',
  //   name: 'Tinted Moisturizer',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw8cbca26c/ProductImages/Face/Tinted_Moisturizer/tintedmoisturizer_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/tinted-moisturizer/NYX_131.html?cgid=foundation',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Lightweight with just a hint of sheer color this hydrating formula makes skin feel softer and smoother. The dewy natural glow provides a “no-makeup” look and feel yet covers imperfections with a natural hydrating touch.',
  //   rating: null,
  //   category: null,
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:06.246Z',
  //   updated_at: '2017-12-24T02:30:02.241Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/904.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/904/original/open-uri20171224-4-afx6c?1514082602',
  //   product_colors: [
  //     {
  //       hex_value: '#9D4527',
  //       colour_name: 'Almond'
  //     },
  //     {
  //       hex_value: '#B96849',
  //       colour_name: 'Tan'
  //     },
  //     {
  //       hex_value: '#BA7B59',
  //       colour_name: 'Warm Beige'
  //     },
  //     {
  //       hex_value: '#CC805B',
  //       colour_name: 'Natural Beige'
  //     },
  //     {
  //       hex_value: '#C49261',
  //       colour_name: 'Soft Beige'
  //     },
  //     {
  //       hex_value: '#E5A990',
  //       colour_name: 'Buff'
  //     },
  //     {
  //       hex_value: '#CEA26D',
  //       colour_name: 'Nude'
  //     }
  //   ]
  // },
  // {
  //   id: 903,
  //   brand: 'nyx',
  //   name: 'Define & Refine Powder Foundation',
  //   price: '12.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwe1ce6d79/ProductImages/Face/Define_And_Refine_Powder_Foundation/defineandrefinepowderfoundation_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/define-and-refine-powder-foundation/NYX_172.html?cgid=powder',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'This essential medium to full coverage compact features a deeper crescent of color with a hint of pearl. Blend them together to customize your look for perfection year-round.',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:04.203Z',
  //   updated_at: '2017-12-24T02:31:19.051Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/903.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/903/original/open-uri20171224-4-1rbb28u?1514082678',
  //   product_colors: [
  //     {
  //       hex_value: '#CBAD95',
  //       colour_name: 'Light'
  //     },
  //     {
  //       hex_value: '#CEAB86',
  //       colour_name: 'Golden'
  //     },
  //     {
  //       hex_value: '#CEAA81',
  //       colour_name: 'Beige'
  //     },
  //     {
  //       hex_value: '#B18461',
  //       colour_name: 'Deep'
  //     },
  //     {
  //       hex_value: '#DBC0A2',
  //       colour_name: 'Fair'
  //     },
  //     {
  //       hex_value: '#CAA687',
  //       colour_name: 'Sand'
  //     }
  //   ]
  // },
  // {
  //   id: 902,
  //   brand: 'nyx',
  //   name: 'BB Cream',
  //   price: '13.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwa8106b14/ProductImages/Face/BB_Cream/800897822927_bbcream_natural_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/bb-cream/NYX_137.html?cgid=foundation',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Perfect the “no makeup” look with our BB Cream. Specially formulated without oil, this mineral-infused formula hydrates the skin and helps the complexion appear smoother. Wear it as a primer under your foundation, or alone for a touch of lightweight color.',
  //   rating: null,
  //   category: null,
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:28:01.955Z',
  //   updated_at: '2017-12-24T02:29:59.892Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/902.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/902/original/open-uri20171224-4-1v926lt?1514082599',
  //   product_colors: [
  //     {
  //       hex_value: '#E4CFBA',
  //       colour_name: 'Nude'
  //     },
  //     {
  //       hex_value: '#E5C6AA',
  //       colour_name: 'Natural'
  //     },
  //     {
  //       hex_value: '#DEBFA0',
  //       colour_name: 'Golden'
  //     }
  //   ]
  // },
  // {
  //   id: 901,
  //   brand: 'nyx',
  //   name: 'Invincible Fullest Coverage Foundation',
  //   price: '12.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw84635185/ProductImages/2016/Face/Invincible_Foundation/invinciblefoundation_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/invincible-fullest-coverage-foundation/NYX_140.html?cgid=foundation',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Have something to hide? We’ve got just the thing for you. Now available in five more shades to accommodate a wider range of skin tones, NYX Professional Makeup Invincible Fullest Coverage Foundation offers exceptional coverage with natural-looking finish. The incredibly high-pigment load has the super powers to hide even the most challenging cover-ups, including skin discolorations and more. The finished look is soft, matte, beautiful and flawless.',
  //   rating: null,
  //   category: null,
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:27:59.656Z',
  //   updated_at: '2017-12-24T02:29:57.215Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/901.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/901/original/open-uri20171224-4-1dx6w5e?1514082597',
  //   product_colors: [
  //     {
  //       hex_value: '#F2C59B',
  //       colour_name: 'Ivory'
  //     },
  //     {
  //       hex_value: '#EFBF97',
  //       colour_name: 'Fair'
  //     },
  //     {
  //       hex_value: '#EEB991',
  //       colour_name: 'Porcelain'
  //     },
  //     {
  //       hex_value: '#E8AF84',
  //       colour_name: 'Light'
  //     },
  //     {
  //       hex_value: '#DBA67C',
  //       colour_name: 'Light Medium'
  //     },
  //     {
  //       hex_value: '#CF9A72',
  //       colour_name: 'Medium'
  //     },
  //     {
  //       hex_value: '#CF9468',
  //       colour_name: 'Medium Beige'
  //     },
  //     {
  //       hex_value: '#CF8F63',
  //       colour_name: 'Golden Beige'
  //     },
  //     {
  //       hex_value: '#CC8C5E',
  //       colour_name: 'Cool Tan'
  //     },
  //     {
  //       hex_value: '#C58557',
  //       colour_name: 'Honey Beige'
  //     },
  //     {
  //       hex_value: '#C3865A',
  //       colour_name: 'Warm Tan'
  //     },
  //     {
  //       hex_value: '#BE8558',
  //       colour_name: 'Tan'
  //     },
  //     {
  //       hex_value: '#B77A4E',
  //       colour_name: 'Caramel'
  //     },
  //     {
  //       hex_value: '#A16438',
  //       colour_name: 'Chestnut'
  //     },
  //     {
  //       hex_value: '#753F1B',
  //       colour_name: 'Cocoa'
  //     },
  //     {
  //       hex_value: '#FAD0A6',
  //       colour_name: 'Alabaster'
  //     },
  //     {
  //       hex_value: '#D1A278',
  //       colour_name: 'Nude Beige'
  //     },
  //     {
  //       hex_value: '#D59B69',
  //       colour_name: 'Warm Nude'
  //     },
  //     {
  //       hex_value: '#653C1E',
  //       colour_name: 'Deep'
  //     },
  //     {
  //       hex_value: '#513118',
  //       colour_name: 'Espresso'
  //     }
  //   ]
  // },
  // {
  //   id: 900,
  //   brand: 'nyx',
  //   name: 'Mineral Stick Foundation',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw25bdfa2c/ProductImages/Face/Mineral_Stick_Foundation/mineralstickfoundation_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/mineral-stick-foundation/NYX_130.html?cgid=foundation',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Portable and buildable, our Mineral Stick Foundation is ideal when you’re on the move. The luxurious formula is easy to apply and extremely blendable, which allows for flawless highlighting and contouring. You can also use this versatile foundation on the entire face or in isolated areas that need a little extra attention – it’s all up to you! Our creamy foundation is now available in six new shades.',
  //   rating: null,
  //   category: null,
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:27:57.842Z',
  //   updated_at: '2017-12-24T02:29:54.044Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/900.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/900/original/open-uri20171224-4-1byvmqd?1514082593',
  //   product_colors: [
  //     {
  //       hex_value: '#ECCAB1',
  //       colour_name: 'Fair'
  //     },
  //     {
  //       hex_value: '#E9C6A8',
  //       colour_name: 'Porcelain'
  //     },
  //     {
  //       hex_value: '#E7BA99',
  //       colour_name: 'Light'
  //     },
  //     {
  //       hex_value: '#D9AF85',
  //       colour_name: 'Light Medium'
  //     },
  //     {
  //       hex_value: '#D3A97F',
  //       colour_name: 'Medium Beige'
  //     },
  //     {
  //       hex_value: '#D3A776',
  //       colour_name: 'Golden Beige'
  //     },
  //     {
  //       hex_value: '#CF9A6E',
  //       colour_name: 'Cool Tan'
  //     },
  //     {
  //       hex_value: '#CF9B6B',
  //       colour_name: 'Warm Tan'
  //     },
  //     {
  //       hex_value: '#C38F5F',
  //       colour_name: 'Caramel'
  //     },
  //     {
  //       hex_value: '#BB8757',
  //       colour_name: 'Deep Honey'
  //     },
  //     {
  //       hex_value: '#AB814F',
  //       colour_name: 'Warm Almond'
  //     },
  //     {
  //       hex_value: '#A6754C',
  //       colour_name: 'Cool Chestnut'
  //     },
  //     {
  //       hex_value: '#9D6C43',
  //       colour_name: 'Rich'
  //     },
  //     {
  //       hex_value: '#8E643E',
  //       colour_name: 'Espresso'
  //     },
  //     {
  //       hex_value: '#815838',
  //       colour_name: 'Cocoa'
  //     }
  //   ]
  // },
  // {
  //   id: 899,
  //   brand: 'nyx',
  //   name: 'Stay Matte But Not Flat Liquid Foundation',
  //   price: '7.5',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw98d18f1b/ProductImages/Face/Stay_Matte_But_Not_Flat_Liquid_Foundation/staymattebutnotflatliquidfoundation_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/stay-matte-but-not-flat-liquid-foundation/NYX_067.html?cgid=foundation',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Now available in 10 more gorgeous shades, Stay Matte But Not Flat Liquid Foundation provides full coverage with a mineral enriched matte finish and accommodates more skin tones than ever before. The oil-free and water-based formula is perfect for both day and nighttime wear.',
  //   rating: null,
  //   category: null,
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:27:53.726Z',
  //   updated_at: '2017-12-24T02:29:50.833Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/899.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/899/original/open-uri20171224-4-1ni57md?1514082590',
  //   product_colors: [
  //     {
  //       hex_value: '#EDCBA6',
  //       colour_name: 'Ivory'
  //     },
  //     {
  //       hex_value: '#EAC6A2',
  //       colour_name: 'Alabaster'
  //     },
  //     {
  //       hex_value: '#E1B696',
  //       colour_name: 'Porcelain'
  //     },
  //     {
  //       hex_value: '#E1AF8C',
  //       colour_name: 'Creamy Natural'
  //     },
  //     {
  //       hex_value: '#E3B896',
  //       colour_name: 'Light Beige'
  //     },
  //     {
  //       hex_value: '#D2A07F',
  //       colour_name: 'Soft Beige'
  //     },
  //     {
  //       hex_value: '#D3A886',
  //       colour_name: 'Nude Beige'
  //     },
  //     {
  //       hex_value: '#CBA076',
  //       colour_name: 'Nude'
  //     },
  //     {
  //       hex_value: '#D8A27C',
  //       colour_name: 'Natural'
  //     },
  //     {
  //       hex_value: '#DAAC8B',
  //       colour_name: 'Warm'
  //     },
  //     {
  //       hex_value: '#D8A787',
  //       colour_name: 'Medium'
  //     },
  //     {
  //       hex_value: '#C39876',
  //       colour_name: 'Soft Sand'
  //     },
  //     {
  //       hex_value: '#CD986C',
  //       colour_name: 'Warm Beige'
  //     },
  //     {
  //       hex_value: '#C6996F',
  //       colour_name: 'Fresh Beige'
  //     },
  //     {
  //       hex_value: '#C59974',
  //       colour_name: 'Medium Beige'
  //     },
  //     {
  //       hex_value: '#CA936A',
  //       colour_name: 'Golden Beige'
  //     },
  //     {
  //       hex_value: '#C6946F',
  //       colour_name: 'Tan'
  //     },
  //     {
  //       hex_value: '#BA8F6C',
  //       colour_name: 'Olive'
  //     },
  //     {
  //       hex_value: '#B78968',
  //       colour_name: 'Caramel'
  //     },
  //     {
  //       hex_value: '#B78D67',
  //       colour_name: 'Beige'
  //     },
  //     {
  //       hex_value: '#B28564',
  //       colour_name: 'Sienna'
  //     },
  //     {
  //       hex_value: '#9E7150',
  //       colour_name: 'Tawny'
  //     },
  //     {
  //       hex_value: '#B9835F',
  //       colour_name: 'Cinnamon Spice'
  //     },
  //     {
  //       hex_value: '#A97C5B',
  //       colour_name: 'Nutmeg'
  //     },
  //     {
  //       hex_value: '#AA754B',
  //       colour_name: 'Deep Golden'
  //     },
  //     {
  //       hex_value: '#A07356',
  //       colour_name: 'Chestnut'
  //     },
  //     {
  //       hex_value: '#8E5D3D',
  //       colour_name: 'Deep Olive'
  //     },
  //     {
  //       hex_value: '#895A3E',
  //       colour_name: 'Deep Rich'
  //     },
  //     {
  //       hex_value: '#784B36',
  //       colour_name: 'Cocoa'
  //     },
  //     {
  //       hex_value: '#6C4838',
  //       colour_name: 'Deep Dark'
  //     }
  //   ]
  // },
  // {
  //   id: 898,
  //   brand: 'nyx',
  //   name: 'Stay Matte But Not Flat Powder Foundation',
  //   price: '9.5',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw7771a0c9/ProductImages/Face/Stay_Matte_But_Not_Flat_Powder_Foundation/staymattebutnotflatpowderfoundation_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/stay-matte-but-not-flat-powder-foundation/NYX_002.html?cgid=powder',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Want a matte finish to help you achieve a flawless-looking complexion? Now available in 10 more gorgeous shades, our Stay Matte But Not Flat Powder Foundation provides the perfect finish to flatter more skin tones than ever before. You’ll look naturally flawless with minimal effort!',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:27:50.586Z',
  //   updated_at: '2017-12-24T02:31:06.445Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/898.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/898/original/open-uri20171224-4-1bzitts?1514082666',
  //   product_colors: [
  //     {
  //       hex_value: '#F1D1BA',
  //       colour_name: 'Ivory'
  //     },
  //     {
  //       hex_value: '#F4D8C2',
  //       colour_name: 'Alabaster'
  //     },
  //     {
  //       hex_value: '#EFC6B0',
  //       colour_name: 'Porcelain'
  //     },
  //     {
  //       hex_value: '#EFCAB7',
  //       colour_name: 'Creamy Natural'
  //     },
  //     {
  //       hex_value: '#F5D0B5',
  //       colour_name: 'Light Beige'
  //     },
  //     {
  //       hex_value: '#F0C2A1',
  //       colour_name: 'Soft Beige'
  //     },
  //     {
  //       hex_value: '#EECAAA',
  //       colour_name: 'Nude Beige'
  //     },
  //     {
  //       hex_value: '#EECAB0',
  //       colour_name: 'Nude'
  //     },
  //     {
  //       hex_value: '#F3CDB6',
  //       colour_name: 'Natural'
  //     },
  //     {
  //       hex_value: '#E7B89A',
  //       colour_name: 'Warm'
  //     },
  //     {
  //       hex_value: '#E9B39B',
  //       colour_name: 'Medium'
  //     },
  //     {
  //       hex_value: '#F0BE9D',
  //       colour_name: 'Soft Sand'
  //     },
  //     {
  //       hex_value: '#F1BB97',
  //       colour_name: 'Warm Beige'
  //     },
  //     {
  //       hex_value: '#E9AF7D',
  //       colour_name: 'Fresh Beige'
  //     },
  //     {
  //       hex_value: '#ECBB9B',
  //       colour_name: 'Medium Beige'
  //     },
  //     {
  //       hex_value: '#F0BA98',
  //       colour_name: 'Golden Beige'
  //     },
  //     {
  //       hex_value: '#EDB38E',
  //       colour_name: 'Tan'
  //     },
  //     {
  //       hex_value: '#D6A57D',
  //       colour_name: 'Olive'
  //     },
  //     {
  //       hex_value: '#E9AD88',
  //       colour_name: 'Caramel'
  //     },
  //     {
  //       hex_value: '#D19E73',
  //       colour_name: 'Beige'
  //     },
  //     {
  //       hex_value: '#F0AC7D',
  //       colour_name: 'Sienna'
  //     },
  //     {
  //       hex_value: '#E8A475',
  //       colour_name: 'Tawny'
  //     },
  //     {
  //       hex_value: '#D7986D',
  //       colour_name: 'Cinnamon Spice'
  //     },
  //     {
  //       hex_value: '#CF8B64',
  //       colour_name: 'Nutmeg'
  //     },
  //     {
  //       hex_value: '#C18B5C',
  //       colour_name: 'Deep Golden'
  //     },
  //     {
  //       hex_value: '#D6956D',
  //       colour_name: 'Chestnut'
  //     },
  //     {
  //       hex_value: '#C88B5C',
  //       colour_name: 'Deep Olive'
  //     },
  //     {
  //       hex_value: '#BA855D',
  //       colour_name: 'Deep Rich'
  //     },
  //     {
  //       hex_value: '#BA7B5A',
  //       colour_name: 'Cocoa'
  //     },
  //     {
  //       hex_value: '#A56A48',
  //       colour_name: 'Deep Dark'
  //     }
  //   ]
  // },
  // {
  //   id: 897,
  //   brand: 'nyx',
  //   name: 'HD Studio Photogenic Foundation',
  //   price: '18.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw37943ebb/ProductImages/2017/Face/High_Definition_Foundation/800897051822_highdefinitionfoundation_chestnut_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/hd-studio-photogenic-foundation/NYX_185.html?cgid=foundation',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Flawless-looking skin is no longer just for celebrities and models! Now available in 20 blendable shades, our HD Studio Photogenic Foundation uses light-diffusing technology to enhance the appearance of silky-smooth skin. Achieve a picture-perfect look anytime you’re in the spotlight.',
  //   rating: null,
  //   category: null,
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:27:47.335Z',
  //   updated_at: '2017-12-24T02:29:45.476Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/897.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/897/original/data?1514082585',
  //   product_colors: [
  //     {
  //       hex_value: '#E9AF8A',
  //       colour_name: 'Nude'
  //     },
  //     {
  //       hex_value: '#DEB48E',
  //       colour_name: 'Warm Ivory'
  //     },
  //     {
  //       hex_value: '#D8956B',
  //       colour_name: 'Soft Beige'
  //     },
  //     {
  //       hex_value: '#D8A786',
  //       colour_name: 'Vanilla'
  //     },
  //     {
  //       hex_value: '#D08B62',
  //       colour_name: 'Natural'
  //     },
  //     {
  //       hex_value: '#D0A37A',
  //       colour_name: 'Sand Beige'
  //     },
  //     {
  //       hex_value: '#D99F77',
  //       colour_name: 'True Beige'
  //     },
  //     {
  //       hex_value: '#D5A16F',
  //       colour_name: 'Warm Beige'
  //     },
  //     {
  //       hex_value: '#CA976A',
  //       colour_name: 'Medium'
  //     },
  //     {
  //       hex_value: '#C28769',
  //       colour_name: 'Natural Beige'
  //     },
  //     {
  //       hex_value: '#B8795A',
  //       colour_name: 'Warm Sand'
  //     },
  //     {
  //       hex_value: '#CA935D',
  //       colour_name: 'Golden Honey'
  //     },
  //     {
  //       hex_value: '#BF8756',
  //       colour_name: 'Caramel'
  //     },
  //     {
  //       hex_value: '#A16448',
  //       colour_name: 'California Tan'
  //     },
  //     {
  //       hex_value: '#AE7548',
  //       colour_name: 'Soft Mocha'
  //     },
  //     {
  //       hex_value: '#A56C41',
  //       colour_name: 'Maple'
  //     },
  //     {
  //       hex_value: '#975C3E',
  //       colour_name: 'Cappuccino'
  //     },
  //     {
  //       hex_value: '#865B3B',
  //       colour_name: 'Chestnut'
  //     },
  //     {
  //       hex_value: '#6F452F',
  //       colour_name: 'Cocoa'
  //     },
  //     {
  //       hex_value: '#553528',
  //       colour_name: 'Deep Espresso'
  //     }
  //   ]
  // },
  // {
  //   id: 896,
  //   brand: 'nyx',
  //   name: 'Hydra Touch Powder Foundation',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw0bf2e8ad/ProductImages/Face/Hydra_Touch_Powder_Foundation/hydratouchpowderfoundation_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/hydra-touch-powder-foundation/NYX_229.html?cgid=powder',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'A weightless pressed powder that offers buildable coverage with a matte finish. Now available in five more silky shades, Hydra Touch Powder Foundation can be applied dry or wet. Our innovative formula also contains moisturizing botanical extracts to leave skin looking soft and fresh.',
  //   rating: null,
  //   category: 'powder',
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:27:42.746Z',
  //   updated_at: '2017-12-24T02:31:15.383Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/896.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/896/original/open-uri20171224-4-133ccrb?1514082674',
  //   product_colors: [
  //     {
  //       hex_value: '#F3D5BB',
  //       colour_name: 'Porcelain'
  //     },
  //     {
  //       hex_value: '#ECC8A4',
  //       colour_name: 'Natural'
  //     },
  //     {
  //       hex_value: '#F5C8A7',
  //       colour_name: 'Beige'
  //     },
  //     {
  //       hex_value: '#F3C1A0',
  //       colour_name: 'Medium Beige'
  //     },
  //     {
  //       hex_value: '#EEC3A3',
  //       colour_name: 'Buff Beige'
  //     },
  //     {
  //       hex_value: '#EDB697',
  //       colour_name: 'Tan'
  //     },
  //     {
  //       hex_value: '#E9B897',
  //       colour_name: 'Soft Tan'
  //     },
  //     {
  //       hex_value: '#E6B887',
  //       colour_name: 'Golden Beige'
  //     },
  //     {
  //       hex_value: '#EDB38B',
  //       colour_name: 'Golden'
  //     },
  //     {
  //       hex_value: '#EBB996',
  //       colour_name: 'Warm Beige'
  //     },
  //     {
  //       hex_value: '#F2AD84',
  //       colour_name: 'Fawn'
  //     },
  //     {
  //       hex_value: '#EBAC81',
  //       colour_name: 'Amber'
  //     },
  //     {
  //       hex_value: '#DEA675',
  //       colour_name: 'Deep Honey'
  //     },
  //     {
  //       hex_value: '#EAAD7E',
  //       colour_name: 'Honey'
  //     },
  //     {
  //       hex_value: '#E19865',
  //       colour_name: 'Caramel'
  //     },
  //     {
  //       hex_value: '#C98860',
  //       colour_name: 'Sable'
  //     },
  //     {
  //       hex_value: '#C88165',
  //       colour_name: 'Nutmeg'
  //     },
  //     {
  //       hex_value: '#B6846B',
  //       colour_name: 'Cocoa'
  //     },
  //     {
  //       hex_value: '#AB725F',
  //       colour_name: 'Deep Espresso'
  //     },
  //     {
  //       hex_value: '#E8CCB1',
  //       colour_name: 'Ivory'
  //     }
  //   ]
  // },
  // {
  //   id: 895,
  //   brand: 'nyx',
  //   name: 'Pro Foundation Mixer',
  //   price: '10.0',
  //   price_sign: '$',
  //   currency: 'USD',
  //   image_link:
  //     'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw9dcfebd8/ProductImages/2016/Face/Pro_Foundation_Mixer/profoundationmixer_main.jpg?sw=390&sh=390&sm=fit',
  //   product_link:
  //     'https://www.nyxcosmetics.com/pro-foundation-mixer/NYX_320.html?cgid=foundation',
  //   website_link: 'https://www.nyxcosmetics.com',
  //   description:
  //     'Your custom shade is just a Pro Foundation Mixer away! Our new shade mixers are designed to adjust the tone, shade and finish of any liquid foundation, resulting in a truly perfect match.',
  //   rating: null,
  //   category: null,
  //   product_type: 'foundation',
  //   tag_list: [],
  //   created_at: '2017-12-24T02:27:41.018Z',
  //   updated_at: '2017-12-24T02:29:39.387Z',
  //   product_api_url:
  //     'https://makeup-api.herokuapp.com/api/v1/products/895.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/895/original/open-uri20171224-4-1hvbqwz?1514082579',
  //   product_colors: [
  //     {
  //       hex_value: '#FBFBFD',
  //       colour_name: 'White'
  //     },
  //     {
  //       hex_value: '#FBF4EA',
  //       colour_name: 'Opalescent'
  //     },
  //     {
  //       hex_value: '#F1CFB6',
  //       colour_name: 'Luminous'
  //     },
  //     {
  //       hex_value: '#B7683F',
  //       colour_name: 'Warmth'
  //     },
  //     {
  //       hex_value: '#B58867',
  //       colour_name: 'Olive'
  //     },
  //     {
  //       hex_value: '#6B4F3A',
  //       colour_name: 'Deep'
  //     }
  //   ]
  // },
  {
    id: 894,
    brand: 'nyx',
    name: 'Total Control Drop Foundation',
    price: '14.0',
    price_sign: '$',
    currency: 'USD',
    image_link:
      'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw2afa7b45/ProductImages/2017/Face/Total_Control_Drop_Foundation/800897068837_totalcontroldropfoundation_buff_main.jpg?sw=390&sh=390&sm=fit',
    product_link:
      'https://www.nyxcosmetics.com/total-control-drop-foundation/NYX_413.html?cgid=foundation',
    website_link: 'https://www.nyxcosmetics.com',
    description: '',
    rating: null,
    category: null,
    product_type: 'foundation',
    tag_list: [],
    created_at: '2017-12-24T02:27:38.676Z',
    updated_at: '2017-12-24T02:29:35.768Z',
    product_api_url:
      'https://makeup-api.herokuapp.com/api/v1/products/894.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/894/original/data?1514082575',
    product_colors: [
      {
        hex_value: '#F5DBC0',
        colour_name: 'Pale'
      },
      {
        hex_value: '#EBCCB0',
        colour_name: 'Alabaster'
      },
      {
        hex_value: '#E2C2A9',
        colour_name: 'Porcelain'
      },
      {
        hex_value: '#EEC5A9',
        colour_name: 'Light Ivory'
      },
      {
        hex_value: '#E7BDA7',
        colour_name: 'Light'
      },
      {
        hex_value: '#E6C1A4',
        colour_name: 'Vanilla'
      },
      {
        hex_value: '#C7A987',
        colour_name: 'Nude'
      },
      {
        hex_value: '#DEB08C',
        colour_name: 'Natural'
      },
      {
        hex_value: '#C69A7D',
        colour_name: 'Soft Beige'
      },
      {
        hex_value: '#DCB083',
        colour_name: 'True Beige'
      },
      {
        hex_value: '#D1A683',
        colour_name: 'Medium Olive'
      },
      {
        hex_value: '#CBA07D',
        colour_name: 'Buff'
      },
      {
        hex_value: '#C89F73',
        colour_name: 'Beige'
      },
      {
        hex_value: '#C6956A',
        colour_name: 'Classic Tan'
      },
      {
        hex_value: '#BB8E71',
        colour_name: 'Camel'
      },
      {
        hex_value: '#C59263',
        colour_name: 'Golden'
      },
      {
        hex_value: '#BD8856',
        colour_name: 'Golden Honey'
      },
      {
        hex_value: '#BE8D55',
        colour_name: 'Caramel'
      },
      {
        hex_value: '#B28566',
        colour_name: 'Cinnamon'
      },
      {
        hex_value: '#B17B4D',
        colour_name: 'Mahogany'
      },
      {
        hex_value: '#A37A5A',
        colour_name: 'Nutmeg'
      },
      {
        hex_value: '#A97647',
        colour_name: 'Cappuccino'
      },
      {
        hex_value: '#9C7151',
        colour_name: 'Sienna'
      },
      {
        hex_value: '#9D6E40',
        colour_name: 'Deep Sable'
      },
      {
        hex_value: '#96663E',
        colour_name: 'Mocha'
      },
      {
        hex_value: '#935F38',
        colour_name: 'Deep Rich'
      },
      {
        hex_value: '#895837',
        colour_name: 'Cocoa'
      },
      {
        hex_value: '#915732',
        colour_name: 'Deep Cool'
      },
      {
        hex_value: '#7F4D2C',
        colour_name: 'Chestnut'
      },
      {
        hex_value: '#6F4326',
        colour_name: 'Deep Espresso'
      }
    ]
  },
  {
    id: 893,
    brand: 'nyx',
    name: '#LOTD Lip Of The Day Liquid Lip Liner',
    price: '7.0',
    price_sign: '$',
    currency: 'USD',
    image_link:
      'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw226b9283/ProductImages/2016/Lips/Lip_Of_The_Day_Liquid_Lip_Liner/lipoftheday_main.jpg?sw=390&sh=390&sm=fit',
    product_link:
      'https://www.nyxcosmetics.com/lotd-lip-of-the-day-liquid-lip-liner/NYX_350.html?cgid=lip-liner',
    website_link: 'https://www.nyxcosmetics.com',
    description:
      'Bring the party to your pout with our new Lip of the Day Liquid Lip Liner! Available in ten gorgeously vivid shades, these versatile lip liners are absolute must-haves for anyone looking to take their lip artistry skills to the next level.',
    rating: null,
    category: null,
    product_type: 'lip_liner',
    tag_list: [],
    created_at: '2017-12-24T02:27:36.382Z',
    updated_at: '2017-12-24T02:27:37.542Z',
    product_api_url:
      'https://makeup-api.herokuapp.com/api/v1/products/893.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/893/original/open-uri20171224-4-1xaya6j?1514082456',
    product_colors: [
      {
        hex_value: '#E1B44E',
        colour_name: 'Sunlit'
      },
      {
        hex_value: '#D28F69',
        colour_name: 'Gem'
      },
      {
        hex_value: '#AC5F28',
        colour_name: 'Hex'
      },
      {
        hex_value: '#8F1C11',
        colour_name: 'Heatwave'
      },
      {
        hex_value: '#5D2E94',
        colour_name: 'Taboo'
      },
      {
        hex_value: '#7388AD',
        colour_name: 'Kinetic'
      },
      {
        hex_value: '#A5A8B0',
        colour_name: 'Magnetic'
      },
      {
        hex_value: '#6B8F78',
        colour_name: 'Enchanted'
      },
      {
        hex_value: '#B19E5D',
        colour_name: 'Python'
      },
      {
        hex_value: '#C38181',
        colour_name: 'Cherished'
      }
    ]
  },
  {
    id: 892,
    brand: 'nyx',
    name: 'Slide On Lip Pencil',
    price: '8.0',
    price_sign: '$',
    currency: 'USD',
    image_link:
      'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw2696bfe3/ProductImages/2017/Lips/Slide_On_Lip_Pencil_2017/slideonlippencil_main.jpg?sw=390&sh=390&sm=fit',
    product_link:
      'https://www.nyxcosmetics.com/slide-on-lip-pencil/NYX_234.html?cgid=lip-liner',
    website_link: 'https://www.nyxcosmetics.com',
    description:
      'Draw out your pout with a stroke of rich color. Our Slide On Lip Pencil is now available in 14 all-new shades—from bold blue-green to deep nude and pastel lilac. Like the much-loved eyeliner it’s named after, this waterproof lip pencil glides on super-smooth and delivers a highly pigmented Matte finish. Line your lips or fill ’em in for defined and enriched lip color using any of these 28 incredible shades. Our Slide on Lip Pencils can be sharpened with a sharpener that has an opening for a small pencil. Get your NYX Professional Makeup Sharpener',
    rating: null,
    category: null,
    product_type: 'lip_liner',
    tag_list: [],
    created_at: '2017-12-24T02:27:31.408Z',
    updated_at: '2017-12-24T02:27:31.788Z',
    product_api_url:
      'https://makeup-api.herokuapp.com/api/v1/products/892.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/892/original/open-uri20171224-4-1vxfgx0?1514082451',
    product_colors: [
      {
        hex_value: '#F5AFB1',
        colour_name: 'Timid'
      },
      {
        hex_value: '#EC687D',
        colour_name: 'Rosey Sunset'
      },
      {
        hex_value: '#E9688F',
        colour_name: 'Sweet Pink'
      },
      {
        hex_value: '#E05B90',
        colour_name: 'Disco Rage'
      },
      {
        hex_value: '#E06291',
        colour_name: 'Fluorescent'
      },
      {
        hex_value: '#BF727A',
        colour_name: 'Cheeky'
      },
      {
        hex_value: '#BF807B',
        colour_name: 'Bedrose'
      },
      {
        hex_value: '#B67772',
        colour_name: 'Alluring'
      },
      {
        hex_value: '#BD6D70',
        colour_name: 'High Standards'
      },
      {
        hex_value: '#C74454',
        colour_name: 'Knock Em Red'
      },
      {
        hex_value: '#C24155',
        colour_name: 'Red Tape'
      },
      {
        hex_value: '#8B4543',
        colour_name: 'Brick House'
      },
      {
        hex_value: '#714947',
        colour_name: 'Dark Soul'
      },
      {
        hex_value: '#F6B1A2',
        colour_name: 'Pink Canteloupe'
      },
      {
        hex_value: '#E1787F',
        colour_name: 'Crushed'
      },
      {
        hex_value: '#E06263',
        colour_name: 'Summer Tease'
      },
      {
        hex_value: '#1F725E',
        colour_name: 'Revolution'
      },
      {
        hex_value: '#B0A2D5',
        colour_name: 'Live In Pastel'
      },
      {
        hex_value: '#954C91',
        colour_name: 'Brazen'
      },
      {
        hex_value: '#6E446C',
        colour_name: 'Revamp'
      },
      {
        hex_value: '#674651',
        colour_name: 'Nebula'
      },
      {
        hex_value: '#E9A59C',
        colour_name: 'Staged'
      },
      {
        hex_value: '#BA857D',
        colour_name: 'Nude Suede Shoes'
      },
      {
        hex_value: '#B48979',
        colour_name: 'Sugar Glass'
      },
      {
        hex_value: '#AD796C',
        colour_name: 'Beyond Nude'
      },
      {
        hex_value: '#AB7D70',
        colour_name: 'Need Me'
      },
      {
        hex_value: '#A37568',
        colour_name: 'Intimidate'
      },
      {
        hex_value: '#745038',
        colour_name: 'Urban Café'
      }
    ]
  },
  {
    id: 891,
    brand: 'nyx',
    name: 'Retractable Lip Liner',
    price: '5.0',
    price_sign: '$',
    currency: 'USD',
    image_link:
      'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw2524f26b/ProductImages/Lips/Retractable_Lip_Liner/retractablelipliner_main.jpg?sw=390&sh=390&sm=fit',
    product_link:
      'https://www.nyxcosmetics.com/retractable-lip-liner/NYX_051.html?cgid=lip-liner',
    website_link: 'https://www.nyxcosmetics.com',
    description:
      'Love your lips! Create the perfect pout with our creamy, richly pigmented liner in an easy twist-up pencil. Renowned for its staying power! Available in 19 irresistible shades.',
    rating: null,
    category: null,
    product_type: 'lip_liner',
    tag_list: [],
    created_at: '2017-12-24T02:27:28.905Z',
    updated_at: '2017-12-24T02:27:29.477Z',
    product_api_url:
      'https://makeup-api.herokuapp.com/api/v1/products/891.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/891/original/open-uri20171224-4-mgfb2y?1514082448',
    product_colors: [
      {
        hex_value: '#E17F7C',
        colour_name: 'Pinky Beige'
      },
      {
        hex_value: '#D86B7E',
        colour_name: 'Soft Pink'
      },
      {
        hex_value: '#E67D84',
        colour_name: 'Peony'
      },
      {
        hex_value: '#D45F65',
        colour_name: 'Pretty In Pink'
      },
      {
        hex_value: '#C4686B',
        colour_name: 'Nectar'
      },
      {
        hex_value: '#BE595F',
        colour_name: 'Nude Pink'
      },
      {
        hex_value: '#AC4A4B',
        colour_name: 'Jewel'
      },
      {
        hex_value: '#C1386C',
        colour_name: 'Hot Pink'
      },
      {
        hex_value: '#77182E',
        colour_name: 'Plum'
      },
      {
        hex_value: '#7E101D',
        colour_name: 'Dark Red'
      },
      {
        hex_value: '#964436',
        colour_name: 'Sienna'
      },
      {
        hex_value: '#A81F27',
        colour_name: 'Red'
      },
      {
        hex_value: '#D11E21',
        colour_name: 'Ruby'
      },
      {
        hex_value: '#A96D51',
        colour_name: 'Vanilla Sky'
      },
      {
        hex_value: '#A16644',
        colour_name: 'Natural'
      },
      {
        hex_value: '#A36348',
        colour_name: 'Nude'
      },
      {
        hex_value: '#90583D',
        colour_name: 'Sand Beige'
      },
      {
        hex_value: '#713E2B',
        colour_name: 'Cocoa'
      },
      {
        hex_value: 'gray14',
        colour_name: 'Black Lips'
      }
    ]
  },
  {
    id: 890,
    brand: 'nyx',
    name: 'Suede Matte Lip Liner',
    price: '4.0',
    price_sign: '$',
    currency: 'USD',
    image_link:
      'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw7477bc7c/ProductImages/2016/Lips/Suede_Matte_Lip_Liner/suedemattelipliner_main.jpg?sw=390&sh=390&sm=fit',
    product_link:
      'https://www.nyxcosmetics.com/suede-matte-lip-liner/NYX_355.html?cgid=lip-liner',
    website_link: 'https://www.nyxcosmetics.com',
    description:
      'Buh-bye creamy lip colors! See ya shimmery shades! A velvety, matte lip is an absolute must and we’ve got just the goodie to help you get it done right: Suede Matte Lip Liner. Available in 36 richly pigmented hues, these pencils were created with colors from a few NYX Professional Makeup fan faves in mind--our Liquid Suede Cream Lipstick, Matte Lipstick and Soft Matte Lip Cream to be exact. Every shade goes on super smooth and provides the perfect base for our much-loved matte lippies.',
    rating: null,
    category: null,
    product_type: 'lip_liner',
    tag_list: [],
    created_at: '2017-12-24T02:27:25.440Z',
    updated_at: '2017-12-24T02:27:25.858Z',
    product_api_url:
      'https://makeup-api.herokuapp.com/api/v1/products/890.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/890/original/open-uri20171224-4-1p3hisz?1514082445',
    product_colors: [
      {
        hex_value: '#C66B70',
        colour_name: 'Tea & Cookies'
      },
      {
        hex_value: '#A54F52',
        colour_name: 'Cannes'
      },
      {
        hex_value: '#A15056',
        colour_name: 'Whipped Cavier'
      },
      {
        hex_value: '#F3665C',
        colour_name: "Life's A Beach"
      },
      {
        hex_value: '#BD5065',
        colour_name: 'Sao Paulo'
      },
      {
        hex_value: '#C2586E',
        colour_name: 'Milan'
      },
      {
        hex_value: '#DA4076',
        colour_name: 'Pink Lust'
      },
      {
        hex_value: '#8F2762',
        colour_name: 'Aria'
      },
      {
        hex_value: '#761D39',
        colour_name: 'Prune'
      },
      {
        hex_value: '#8D1E2F',
        colour_name: 'Cherry Skies'
      },
      {
        hex_value: '#6D132C',
        colour_name: 'Copenhagen'
      },
      {
        hex_value: '#842D24',
        colour_name: 'Alabama'
      },
      {
        hex_value: '#AB1F12',
        colour_name: 'Kitten Heels'
      },
      {
        hex_value: '#EE5F37',
        colour_name: 'Orange County'
      },
      {
        hex_value: '#FF6C4A',
        colour_name: 'Foiled Again'
      },
      {
        hex_value: '#0098CD',
        colour_name: 'Little Denim Dress'
      },
      {
        hex_value: '#00347F',
        colour_name: 'Jet Set'
      },
      {
        hex_value: '#3A4758',
        colour_name: 'Foul Mouth'
      },
      {
        hex_value: '#D36997',
        colour_name: 'Respect The Pink'
      },
      {
        hex_value: '#8B5AB5',
        colour_name: 'Sway'
      },
      {
        hex_value: '#8E2D8C',
        colour_name: 'Run The World'
      },
      {
        hex_value: '#553394',
        colour_name: 'Amethyst'
      },
      {
        hex_value: '#6B1B4E',
        colour_name: 'Subversive Socialite'
      },
      {
        hex_value: '#392A4B',
        colour_name: 'Oh, Put It On'
      },
      {
        hex_value: '#B5654A',
        colour_name: 'Stockholm'
      },
      {
        hex_value: '#BC7B53',
        colour_name: 'London'
      },
      {
        hex_value: '#A56B57',
        colour_name: 'Sandstorm'
      },
      {
        hex_value: '#A05D4D',
        colour_name: 'Soft-Spoken'
      },
      {
        hex_value: '#895150',
        colour_name: 'Los Angeles'
      },
      {
        hex_value: '#822D32',
        colour_name: 'Vintage'
      },
      {
        hex_value: '#6D4A2E',
        colour_name: 'Downtown Beauty'
      },
      {
        hex_value: '#6E3C33',
        colour_name: 'Maison'
      },
      {
        hex_value: '#5A342B',
        colour_name: 'Club Hopper'
      },
      {
        hex_value: '#62473C',
        colour_name: 'Brooklyn Thorn'
      },
      {
        hex_value: '#3C3C3C',
        colour_name: 'Stone Fox'
      },
      {
        hex_value: '#2E2E2E',
        colour_name: 'Alien'
      }
    ]
  },
  {
    id: 889,
    brand: 'nyx',
    name: 'Slim Lip Pencil',
    price: '4.0',
    price_sign: '$',
    currency: 'USD',
    image_link:
      'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwbbca9dd2/ProductImages/Lips/Slim_Lip_Pencil/Slim_Lip_Pencil/slimlippencil_main.jpg?sw=390&sh=390&sm=fit',
    product_link:
      'https://www.nyxcosmetics.com/slim-lip-pencil/NYX_052.html?cgid=lip-liner',
    website_link: 'https://www.nyxcosmetics.com',
    description:
      'Slim, trim, but never prim our lip pencils come in a variety of dashing shades - from auburn to orange and traffic-stopping red. The buttery long-wearing lip liner formula goes on easily and resists bleeding.',
    rating: null,
    category: null,
    product_type: 'lip_liner',
    tag_list: [],
    created_at: '2017-12-24T02:27:20.536Z',
    updated_at: '2017-12-24T02:27:20.940Z',
    product_api_url:
      'https://makeup-api.herokuapp.com/api/v1/products/889.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/889/original/open-uri20171224-4-1jtkojq?1514082440',
    product_colors: [
      {
        hex_value: '#E89FB0',
        colour_name: 'Flower'
      },
      {
        hex_value: '#D26987',
        colour_name: 'Dolly Pink'
      },
      {
        hex_value: '#D87079',
        colour_name: 'Rose'
      },
      {
        hex_value: '#F04B76',
        colour_name: 'Hot Pink'
      },
      {
        hex_value: '#CB5E5B',
        colour_name: 'Citrine'
      },
      {
        hex_value: '#D87683',
        colour_name: 'Sand Pink'
      },
      {
        hex_value: '#CF476B',
        colour_name: 'Pinky'
      },
      {
        hex_value: '#CA315D',
        colour_name: 'Edge Pink'
      },
      {
        hex_value: '#C03E6A',
        colour_name: 'Fuchsia'
      },
      {
        hex_value: '#A9305B',
        colour_name: 'Bloom'
      },
      {
        hex_value: '#9F366E',
        colour_name: 'Purple Rain'
      },
      {
        hex_value: '#CC7C7D',
        colour_name: 'Pale Pink'
      },
      {
        hex_value: '#8E4745',
        colour_name: 'Mauve'
      },
      {
        hex_value: '#A3432D',
        colour_name: 'Ever'
      },
      {
        hex_value: '#8F1C29',
        colour_name: 'Plum'
      },
      {
        hex_value: '#790C2B',
        colour_name: 'Deep Purple'
      },
      {
        hex_value: '#792139',
        colour_name: 'Prune'
      },
      {
        hex_value: '#781833',
        colour_name: 'Currant'
      },
      {
        hex_value: '#873B3B',
        colour_name: 'Mahogany'
      },
      {
        hex_value: '#77393A',
        colour_name: 'Never'
      },
      {
        hex_value: '#40281E',
        colour_name: 'Y2K'
      },
      {
        hex_value: '#922F10',
        colour_name: 'Deep Red'
      },
      {
        hex_value: '#932027',
        colour_name: 'Cabaret'
      },
      {
        hex_value: '#8B262A',
        colour_name: 'Auburn'
      },
      {
        hex_value: '#902630',
        colour_name: 'Burgundy'
      },
      {
        hex_value: '#C13C4D',
        colour_name: 'Plush Red'
      },
      {
        hex_value: '#D11C23',
        colour_name: 'Hot Red'
      },
      {
        hex_value: '#C9532F',
        colour_name: 'Pumpkin'
      },
      {
        hex_value: '#D6551E',
        colour_name: 'Orange'
      },
      {
        hex_value: '#DC744D',
        colour_name: 'Tangerine'
      },
      {
        hex_value: '#BC6F55',
        colour_name: 'Beige'
      },
      {
        hex_value: '#D07876',
        colour_name: 'Nude Pink'
      },
      {
        hex_value: '#C47266',
        colour_name: 'Peekaboo Neutral'
      },
      {
        hex_value: '#C57B5E',
        colour_name: 'Natural'
      },
      {
        hex_value: '#C17456',
        colour_name: 'Soft Brown'
      },
      {
        hex_value: '#96463F',
        colour_name: 'Coffee'
      },
      {
        hex_value: '#99624E',
        colour_name: 'Nude Beige'
      },
      {
        hex_value: '#8C5340',
        colour_name: 'Nude Truffle'
      },
      {
        hex_value: '#874934',
        colour_name: 'Nutmeg'
      },
      {
        hex_value: '#745237',
        colour_name: 'Brown Cafe'
      },
      {
        hex_value: '#7F4925',
        colour_name: 'Brown'
      },
      {
        hex_value: '#85532E',
        colour_name: 'Toast'
      },
      {
        hex_value: '#67452C',
        colour_name: 'Cappuccino'
      },
      {
        hex_value: '#7B412B',
        colour_name: 'Cocoa'
      },
      {
        hex_value: '#5E3F23',
        colour_name: 'Chestnut'
      },
      {
        hex_value: '#663320',
        colour_name: 'Hot Cocoa'
      },
      {
        hex_value: '#553327',
        colour_name: 'Espresso'
      },
      {
        hex_value: '#523C25',
        colour_name: 'Dark Brown'
      },
      {
        hex_value: '#331C16',
        colour_name: 'Black Brown'
      },
      {
        hex_value: '#1C110D',
        colour_name: 'Black Berry'
      }
    ]
  },
  {
    id: 888,
    brand: 'nyx',
    name: 'Luv Out Loud Liquid Lipstick',
    price: '7.0',
    price_sign: '$',
    currency: 'USD',
    image_link:
      'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw063995a2/ProductImages/2017/Lips/Luv_Out_Loud_Liquid_Lipstick/luvoutloudliquidlipstick_main.jpg?sw=390&sh=390&sm=fit',
    product_link:
      'https://www.nyxcosmetics.com/luv-out-loud-liquid-lipstick/NYX_512.html?cgid=lipstick',
    website_link: 'https://www.nyxcosmetics.com',
    description:
      'What qualities make a person beautiful? Passion, confidence and fearlessness, to name a few. Available in six velvety-matte shades, our new Luv Out Loud Liquid Lipsticks capture the attributes we at NYX Professional Makeup find truly beautiful. Gift one, two-or all six lippies to a friend who rocks these amazing qualities and inspires you to live (and luv!) out loud.',
    rating: null,
    category: 'lipstick',
    product_type: 'lipstick',
    tag_list: [],
    created_at: '2017-12-24T02:27:19.139Z',
    updated_at: '2017-12-24T02:27:19.592Z',
    product_api_url:
      'https://makeup-api.herokuapp.com/api/v1/products/888.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/888/original/open-uri20171224-4-zjnp6o?1514082438',
    product_colors: [
      {
        hex_value: '#8C6989',
        colour_name: 'Fearless'
      },
      {
        hex_value: '#773950',
        colour_name: 'Passionate'
      },
      {
        hex_value: '#963673',
        colour_name: 'Extraordinary'
      },
      {
        hex_value: '#543A61',
        colour_name: 'Brave'
      },
      {
        hex_value: '#9A5953',
        colour_name: 'Brilliant'
      },
      {
        hex_value: '#C87F76',
        colour_name: 'Confident'
      }
    ]
  },
  {
    id: 887,
    brand: 'nyx',
    name: "V'Amped Up! Lip Top Coat",
    price: '6.0',
    price_sign: '$',
    currency: 'USD',
    image_link:
      'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw88030be7/ProductImages/Lips/Vamped_Up_Lip_Top_Coat/vampedupliptopcoat_main.jpg?sw=390&sh=390&sm=fit',
    product_link:
      'https://www.nyxcosmetics.com/vamped-up-lip-top-coat/NYX_174.html?cgid=lipstick',
    website_link: 'https://www.nyxcosmetics.com',
    description:
      "Cast a spell on your neutral lippies with a swipe of our wicked V'Amped Up! Lip Top Coat. Infused with shea butter and Vitamin E this glossy pencil moisturizes while transforming light lip colors to deep vampy shades.",
    rating: null,
    category: 'lipstick',
    product_type: 'lipstick',
    tag_list: [],
    created_at: '2017-12-24T02:27:18.408Z',
    updated_at: '2017-12-24T02:27:18.750Z',
    product_api_url:
      'https://makeup-api.herokuapp.com/api/v1/products/887.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/887/original/data?1514082438',
    product_colors: []
  },
  {
    id: 886,
    brand: 'nyx',
    name: 'Simply Pink Lip Cream',
    price: '6.5',
    price_sign: '$',
    currency: 'USD',
    image_link:
      'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw013dc65e/ProductImages/Lips/Simply_Pink_Lip_Cream/simplypinklipcream_main.jpg?sw=390&sh=390&sm=fit',
    product_link:
      'https://www.nyxcosmetics.com/simply-pink-lip-cream/NYX_162.html?cgid=lipstick',
    website_link: 'https://www.nyxcosmetics.com',
    description:
      'Get ready to look seriously pretty in pink. From natural to extreme pick your favorite shade from our Simply Pink Lip Creams for a rosy and glossy finish.',
    rating: null,
    category: 'lipstick',
    product_type: 'lipstick',
    tag_list: [],
    created_at: '2017-12-24T02:27:17.373Z',
    updated_at: '2017-12-24T02:27:17.853Z',
    product_api_url:
      'https://makeup-api.herokuapp.com/api/v1/products/886.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/886/original/open-uri20171224-4-1pbaddr?1514082437',
    product_colors: [
      {
        hex_value: '#FA7B84',
        colour_name: 'Flushed'
      },
      {
        hex_value: '#F86F9D',
        colour_name: 'Primrose'
      },
      {
        hex_value: '#EA7F9B',
        colour_name: 'First Base'
      },
      {
        hex_value: '#F94E9A',
        colour_name: 'French Kiss'
      },
      {
        hex_value: '#F45863',
        colour_name: 'XOXO'
      },
      {
        hex_value: '#FE8483',
        colour_name: 'Enchanted'
      }
    ]
  },
  {
    id: 885,
    brand: 'nyx',
    name: 'Simply Red Lip Cream',
    price: '6.5',
    price_sign: '$',
    currency: 'USD',
    image_link:
      'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw4879365d/ProductImages/Lips/Simply_Red_Lip_Cream/simplyredlipcream_main.jpg?sw=390&sh=390&sm=fit',
    product_link:
      'https://www.nyxcosmetics.com/simply-red-lip-cream/NYX_163.html?cgid=lipstick',
    website_link: 'https://www.nyxcosmetics.com',
    description:
      'A classic red pout never goes out of style! Our Simply Red Lip Cream collection gives you loads of color options varying from deep bright or pure red that you can’t go wrong with.',
    rating: null,
    category: 'lipstick',
    product_type: 'lipstick',
    tag_list: [],
    created_at: '2017-12-24T02:27:16.374Z',
    updated_at: '2017-12-24T02:27:16.822Z',
    product_api_url:
      'https://makeup-api.herokuapp.com/api/v1/products/885.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/885/original/open-uri20171224-4-j5xh6b?1514082436',
    product_colors: [
      {
        hex_value: '#D43748',
        colour_name: 'Maraschino'
      },
      {
        hex_value: '#E62E50',
        colour_name: 'Candy Apple'
      },
      {
        hex_value: '#F2626C',
        colour_name: 'Russian Roulette'
      },
      {
        hex_value: '#FE5A50',
        colour_name: 'Seduction'
      },
      {
        hex_value: '#D33556',
        colour_name: 'Leading Lady'
      },
      {
        hex_value: '#C4605E',
        colour_name: 'Knock Out'
      }
    ]
  },
  {
    id: 884,
    brand: 'nyx',
    name: 'Simply Nude Lip Cream',
    price: '6.5',
    price_sign: '$',
    currency: 'USD',
    image_link:
      'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw6790cad4/ProductImages/Lips/Simply_Nude_Lip_Cream/simplynudlipcream_main.jpg?sw=390&sh=390&sm=fit',
    product_link:
      'https://www.nyxcosmetics.com/simply-nude-lip-cream/NYX_161.html?cgid=lipstick',
    website_link: 'https://www.nyxcosmetics.com',
    description:
      'Bare is beautiful with our Simply Nude Lip Creams available in six earthy shades. Swipe on this velvety and moisturizing cream to leave your lips with a subtle satin finish.',
    rating: null,
    category: 'lipstick',
    product_type: 'lipstick',
    tag_list: [],
    created_at: '2017-12-24T02:27:14.778Z',
    updated_at: '2017-12-24T02:27:15.139Z',
    product_api_url:
      'https://makeup-api.herokuapp.com/api/v1/products/884.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/884/original/open-uri20171224-4-1b2b0di?1514082434',
    product_colors: [
      {
        hex_value: '#EBA38B',
        colour_name: 'Fairest'
      },
      {
        hex_value: '#FAA893',
        colour_name: 'Peaches'
      },
      {
        hex_value: '#ED9B8F',
        colour_name: 'Disrobed'
      },
      {
        hex_value: '#C16E5E',
        colour_name: 'Sable'
      },
      {
        hex_value: '#DE9079',
        colour_name: 'Exposed'
      },
      {
        hex_value: '#EAA88E',
        colour_name: 'Honey'
      }
    ]
  }
];

export default data;
