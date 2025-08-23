import p_img1 from "./1.jpg";
import p_img1_1 from "./2.jpg";
import p_img1_2 from "./3.jpg";
import p_img1_3 from "./4.jpg";
import p_img2_1 from "./5.jpg";
import p_img2_2 from "./6.jpg";
import p_img2_3 from "./7.jpg";
import p_img3_1 from "./8.jpg";
import p_img3_2 from "./9.jpg";
import p_img3_3 from "./10.jpg";
import p_img4_1 from "./11.jpg";
import p_img4_2 from "./12.jpg";
import p_img5_1 from "./13.jpg";
import p_img5_2 from "./14.jpg";
import p_img5_3 from "./15.jpg";
import p_img6_1 from "./16.jpg";
import p_img6_2 from "./17.jpg";
import p_img6_3 from "./18.jpg";
import p_img7 from "./19.jpg";
import p_img8_1 from "./20.jpg";
import p_img8_2 from "./21.jpg";
import p_img9_1 from "./22.jpg";
import p_img9_2 from "./23.jpg";
import p_img10 from "./24.jpg";
import p_img11 from "./25.jpg";
import p_img12_1 from "./26.jpg";
import p_img12_2 from "./27.jpg";
import p_img13 from "./28.jpg";
import p_img14 from "./29.jpg";
import p_img15_1 from "./30.jpg";
import p_img15_2 from "./31.jpg";
import p_img15_3 from "./32.jpg";
import p_img16_1 from "./33.jpg";
import p_img16_2 from "./34.jpg";
/*import p_img32 from "./p_img32.png";
import p_img33 from "./p_img33.png";
import p_img34 from "./p_img34.png";
import p_img35 from "./p_img35.png";
import p_img36 from "./p_img36.png";
import p_img37 from "./p_img37.png";
import p_img38 from "./p_img38.png";
import p_img39 from "./p_img39.png";
import p_img40 from "./p_img40.png";
import p_img41 from "./p_img41.png";
import p_img42 from "./p_img42.png";
import p_img43 from "./p_img43.png";
import p_img44 from "./p_img44.png";
import p_img45 from "./p_img45.png";
import p_img46 from "./p_img46.png";
import p_img47 from "./p_img47.png";
import p_img48 from "./p_img48.png";
import p_img49 from "./p_img49.png";
import p_img50 from "./p_img50.png";
import p_img51 from "./p_img51.png";
import p_img52 from "./p_img52.png";*/

import logo from "./bglogo.png";
import hero_img from "./hero.png";
import cart_icon from "./cart_icon.png";
import bin_icon from "./bin_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import profile_icon from "./profile_icon.png";
import quality_icon from "./quality_icon.png";
import search_icon from "./search_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import support_img from "./support_img.png";
import menu_icon from "./menu_icon.png";
import about_img from "./8flow.jpg";
import contact_img from "./nk.jpg";
import razorpay_logo from "./razorpay_logo.png";
import stripe_logo from "./stripe_logo.png";
import cross_icon from "./cross_icon.png";

export const assets = {
  logo,
  hero_img,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  support_img,
  menu_icon,
  about_img,
  contact_img,
  razorpay_logo,
  stripe_logo,
  cross_icon,
};

export const products = [
  {
    _id: "aaaaa",
    name: "Jordan 14 Retro 'Ferrari' 2025",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 100,
    image: [p_img1, p_img1_1, p_img1_2, p_img1_3],
    category: "Women",
    subCategory: "Jordan",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: true,
    status: "shipped",
  },
  {
    _id: "aaaab",
    name: "JORDAN 5 Retro 'GRAPE' 2025",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 200,
    image: [p_img2_1, p_img2_2, p_img2_3],
    category: "Men",
    subCategory: "Jordan",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: true,
    status: "shipped",
  },
  {
    _id: "aaaac",
    name: "Jordan 4 Retro OG 'White Cement'",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 220,
    image: [p_img3_1, p_img3_2, p_img3_3],
    category: "Kids",
    subCategory: "Jordan",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: true,
    status: "shipped",
  },
  {
    _id: "aaaad",
    name: "Kobe 8 Protro ",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 110,
    image: [p_img4_1, p_img4_2],
    category: "Men",
    subCategory: "Random",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: true,
    status: "delivered",
  },
  {
    _id: "aaaae",
    name: "Air Max 95 OG",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 130,
    image: [p_img5_1, p_img5_2, p_img5_3],
    category: "Women",
    subCategory: "Nike",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: true,
    status: "cancelled",
  },
  {
    _id: "aaaaf",
    name: "Jordan 3 Retro 'Black Cat' 2025",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 140,
    image: [p_img6_1, p_img6_2, p_img6_3],
    category: "Kids",
    subCategory: "Jordan",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: true,
    status: "pending",
  },
  {
    _id: "aaaag",
    name: "Jordan 3 Retro",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 190,
    image: [p_img7],
    category: "Men",
    subCategory: "Jordan",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: true,
    status: "cancelled",
  },
  {
    _id: "aaaah",
    name: "Caitlin Clark x Zoom Kobe 5 Protro",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 200,
    image: [p_img8_1, p_img8_2],
    category: "Men",
    subCategory: "Random",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
    status: "pending",
  },

  {
    _id: "aaaai",
    name: "Kobe 9 EM Protro 'Mambacita'",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 100,
    image: [p_img9_1, p_img9_2],
    category: "Kids",
    subCategory: "Random",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
    status: "shipped",
  },

  {
    _id: "aaaaj",
    name: "Jordan 5 Retro 'Fire Red' 2025",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 110,
    image: [p_img10],
    category: "Men",
    subCategory: "Jordan",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: true,
  },

  {
    _id: "aaaak",
    name: "Jordan 4 Retro SE 'Wet Cement'",
    description:
      "The Air Jordan 4 Retro SE 'Wet Cement' also known as 'Paris Olympics' rocks a monochromatic design, paying tribute to the 2024 Summer Olympics. Multiple shades of grey appear on the nubuck upper, including a suede forefoot overlay and a debossed grid pattern on the side panel. Speckled details on the support wings and molded back tab add a touch of flair, while a Jumpman logo adorns the tongue. These shoes sport a grey midsole with an exposed Air-sole heel unit for plush cushioning.",
    price: 120,
    image: [p_img11],
    category: "Men",
    subCategory: "Jordan",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaaal",
    name: "The Union LA x Air Jordan 1 Retro High",
    description:
      "The Union LA x Air Jordan 1 Retro High OG SP 'Chicago Shadow' combines two OG colorways. Part of the upper is based on the original 'Chicago' colorway, using a white leather upper with contrasting red overlays and a black Swoosh. Separated via exposed zigzag stitches, the collar borrows from the AJ1 'Shadow,' complemented by grey overlays on a black background. The opposite side gets a Wings logo and a yellow 'UN/LA' label, while a Nike Air tongue tag adds to the signature look. A vintage-style midsole finishes the look.",
    price: 150,
    image: [p_img12_1, p_img12_2],
    category: "Men",
    subCategory: "Jordan",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: true,
  },
  {
    _id: "aaaam",
    name: "Gel Kayano 14",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 130,
    image: [p_img13],
    category: "Women",
    subCategory: "Random",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaaan",
    name: "Jordan 8 Retro 'Aqua' 2015",
    description:
      "The Jordan 8 ' Aqua ' was released in 1993 as one of three OG colorways. At the All-Star game in 1993, where Jordan dropped 30 points, the sneaker made its first and only appearance on court. Before its release on Black Friday as part of Jordan's 2015 Holiday Collection, the ' Aqua ' was only retro'd in 2007. The sneaker includes premium materials and authentic details as part of the Nike's ' Remastered ' program.",
    price: 160,
    image: [p_img14],
    category: "Kids",
    subCategory: "Jordan",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaaao",
    name: "Jordan 3 Retro 'Cement Grey'",
    description:
      "The Air Jordan 3 Retro 'Cement Grey' rocks white tumbled leather on the upper, accented with a dark grey elephant print on the eyestay and forefoot and heel overlay. A red Jumpman logo decortes the tongue and heel tab. The foam midsole partners with an encapsulated Air-sole forefoot unit and a visible Air bag heel unit for all-around cushioning.",
    price: 140,
    image: [p_img15_1, p_img15_2, p_img15_3],
    category: "Men",
    subCategory: "Jordan",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },

  {
    _id: "aaaap",
    name: "Air Force 1 '07 'Triple White'",
    description:
      "The Nike Air Force 1 '07 'Triple White' refreshes the classic design with an all-white look that highlights its timeless style. The rubber outsole’s pivot-point traction pairs with a white rubber sole with cushioning in the heel. The shoe’s upper is crafted from white leather and features classic elements like shiny silver lace hardware, a perforated toe box and adjustable laces.",
    price: 170,
    image: [p_img16_1, p_img16_2],
    category: "Kids",
    subCategory: "Nike",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
];

/* {
    _id: "aaaaq",
    name: "Men Tapered Fit Flat-Front Trousers",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 150,
    image: [p_img17],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaaar",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 180,
    image: [p_img18],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaaas",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 160,
    image: [p_img19],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaaat",
    name: "Women Palazzo Pants with Waist Belt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 190,
    image: [p_img20],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaaau",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 170,
    image: [p_img21],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaaav",
    name: "Women Palazzo Pants with Waist Belt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 200,
    image: [p_img22],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaaaw",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 180,
    image: [p_img23],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaaax",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 210,
    image: [p_img24],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaaay",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 190,
    image: [p_img25],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaaaz",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 220,
    image: [p_img26],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaaba",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 200,
    image: [p_img27],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabb",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 230,
    image: [p_img28],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabc",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 210,
    image: [p_img29],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabd",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 240,
    image: [p_img30],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabe",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 220,
    image: [p_img31],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabf",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 250,
    image: [p_img32],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabg",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 230,
    image: [p_img33],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabh",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 260,
    image: [p_img34],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabi",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 240,
    image: [p_img35],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabj",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 270,
    image: [p_img36],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabk",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 250,
    image: [p_img37],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabl",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 280,
    image: [p_img38],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabm",
    name: "Men Printed Plain Cotton Shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 260,
    image: [p_img39],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabn",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 290,
    image: [p_img40],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabo",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 270,
    image: [p_img41],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabp",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 300,
    image: [p_img42],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabq",
    name: "Kid Tapered Slim Fit Trouser",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 280,
    image: [p_img43],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabr",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 310,
    image: [p_img44],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabs",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 290,
    image: [p_img45],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabt",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 320,
    image: [p_img46],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabu",
    name: "Kid Tapered Slim Fit Trouser",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 300,
    image: [p_img47],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabv",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 330,
    image: [p_img48],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabw",
    name: "Kid Tapered Slim Fit Trouser",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 310,
    image: [p_img49],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabx",
    name: "Kid Tapered Slim Fit Trouser",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 340,
    image: [p_img50],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaaby",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 320,
    image: [p_img51],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
  {
    _id: "aaabz",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 350,
    image: [p_img52],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["6.5", "7", "7.5", "8", "9", "10"],
    orderDate: "2025-05-25",
    bestseller: false,
  },
];*/
