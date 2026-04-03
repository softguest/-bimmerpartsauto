import { Car } from "@/types";

const PHOTOS = [
  "photo-1544636331-e26879cd4d9b",
  "photo-1503376780353-7e6692767b70",
  "photo-1555215695-3004980ad54e",
  "photo-1618843479313-40f8afb4b4d8",
  "photo-1560958089-b8a1929cea89",
  "photo-1583121274602-3e2820c69888",
  "photo-1606664515524-ed2f786a0bd6",
  "photo-1552519507-da3b142c6e3d",
  "photo-1580273916550-e323be2ae537",
  "photo-1605559424843-9e4c228bf1c2",
  "photo-1617531653332-bd46c24f2068",
  "photo-1542362567-b07e54358753",
  "photo-1494976388531-d1058494cdd8",
  "photo-1502877338535-766e1452684a",
  "photo-1525609004556-c46c70d0d62f",
  "photo-1563720223185-11003d516935",
  "photo-1549399542-7e3f8b79c341",
  "photo-1553440569-bcc63803a83d",
  "photo-1535732820275-9ffd998cac22",
  "photo-1492144534655-ae79c964c9d7",
];

function img(index: number, w = 800, h = 600): string {
  return `https://images.unsplash.com/${PHOTOS[index % PHOTOS.length]}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;
}

function gallery(start: number): string[] {
  return Array.from({ length: 6 }, (_, i) => img(start + i, 1200, 800));
}

export const cars: Car[] = [
  {
    id: "1",
    name: "Lamborghini Aventador SVJ",
    category: "Hypercar",
    description:
      "The Aventador SVJ pushes the boundaries of technology and performance, featuring an aggressive aerodynamic design with the iconic V12 engine delivering 770 horsepower of pure adrenaline.",
    condition: "New",
    price: 517770,
    discountedPrice: 489900,
    images: gallery(0),
  },
  {
    id: "2",
    name: "Porsche 911 GT3 RS",
    category: "Sports",
    description:
      "Born on the racetrack, refined for the road. The 911 GT3 RS features a naturally aspirated 4.0L flat-six producing 518 hp with motorsport-derived aerodynamics for unmatched precision.",
    condition: "New",
    price: 223800,
    discountedPrice: 214500,
    images: gallery(2),
  },
  {
    id: "3",
    name: "BMW M8 Competition Gran Coupé",
    category: "Luxury",
    description:
      "A masterpiece of power and elegance. The M8 Competition delivers 617 hp through its twin-turbo V8, wrapped in a stunning four-door grand tourer silhouette with premium craftsmanship.",
    condition: "New",
    price: 130000,
    discountedPrice: 122500,
    images: gallery(4),
  },
  {
    id: "4",
    name: "Mercedes-AMG GT Black Series",
    category: "Sports",
    description:
      "The most powerful AMG V8 production engine ever. 720 hp channeled through race-bred engineering, advanced active aerodynamics, and a chassis tuned on the Nürburgring Nordschleife.",
    condition: "New",
    price: 325000,
    discountedPrice: 309900,
    images: gallery(6),
  },
  {
    id: "5",
    name: "Tesla Model S Plaid",
    category: "Electric",
    description:
      "The quickest production car ever made. Tri-motor all-wheel drive with 1,020 hp launches from 0-60 in under 2 seconds, with a minimalist interior centered around a 17-inch cinematic display.",
    condition: "New",
    price: 108490,
    discountedPrice: 99990,
    images: gallery(8),
  },
  {
    id: "6",
    name: "Ferrari SF90 Stradale",
    category: "Hypercar",
    description:
      "Ferrari's first plug-in hybrid supercar combines a twin-turbo V8 with three electric motors for a combined 986 hp. A revolutionary leap forward in performance and technology.",
    condition: "New",
    price: 625000,
    discountedPrice: 599000,
    images: gallery(10),
  },
  {
    id: "7",
    name: "Audi RS e-tron GT",
    category: "Electric",
    description:
      "Electrifying performance meets Audi's legendary design language. Dual electric motors produce 637 hp with quattro all-wheel drive, delivering exhilarating acceleration in whisper-quiet refinement.",
    condition: "New",
    price: 139900,
    discountedPrice: 131500,
    images: gallery(12),
  },
  {
    id: "8",
    name: "Chevrolet Corvette Z06",
    category: "Sports",
    description:
      "America's supercar redefined. The flat-plane crank 5.5L V8 screams to 8,600 RPM producing 670 hp, paired with race-proven aerodynamics and mid-engine precision handling.",
    condition: "New",
    price: 111100,
    discountedPrice: 104900,
    images: gallery(14),
  },
  {
    id: "9",
    name: "Maserati MC20 Cielo",
    category: "Convertible",
    description:
      "Italian artistry meets cutting-edge innovation. The MC20 Cielo features a retractable glass roof, the revolutionary Nettuno twin-combustion V6 engine with 621 hp, and timeless elegance.",
    condition: "New",
    price: 260000,
    discountedPrice: 245000,
    images: gallery(16),
  },
  {
    id: "10",
    name: "Rolls-Royce Ghost",
    category: "Luxury",
    description:
      "The purest expression of automotive luxury. A 6.75L twin-turbo V12 delivers effortless power while the cabin crafted from the finest materials creates an unparalleled sanctuary of serenity.",
    condition: "New",
    price: 332500,
    discountedPrice: 319000,
    images: gallery(18),
  },
  {
    id: "11",
    name: "Range Rover Autobiography",
    category: "SUV",
    description:
      "The pinnacle of refined capability. A 4.4L twin-turbo V8 with 523 hp, combined with peerless off-road prowess and an interior that rivals the finest luxury sedans.",
    condition: "New",
    price: 185500,
    discountedPrice: 174900,
    images: gallery(1),
  },
  {
    id: "12",
    name: "Bentley Continental GT Speed",
    category: "Luxury",
    description:
      "Handcrafted perfection at breathtaking pace. The W12 engine produces 650 hp, clothed in a body of timeless proportions with an interior of unrivaled British craftsmanship and heritage.",
    condition: "New",
    price: 274900,
    discountedPrice: 259900,
    images: gallery(3),
  },
  {
    id: "13",
    name: "McLaren 720S Spider",
    category: "Convertible",
    description:
      "Aerodynamic artistry meets open-air exhilaration. The 4.0L twin-turbo V8 delivers 710 hp through a carbon fiber monocoque, with a retractable hardtop that transforms the experience.",
    condition: "Used",
    price: 315000,
    discountedPrice: 279900,
    images: gallery(5),
  },
  {
    id: "14",
    name: "Aston Martin DB12",
    category: "Coupe",
    description:
      "The world's first super tourer. A twin-turbo V8 producing 671 hp married to Aston Martin's most advanced chassis ever, wrapped in breathtakingly sculpted aluminum bodywork.",
    condition: "New",
    price: 245000,
    discountedPrice: 234900,
    images: gallery(7),
  },
  {
    id: "15",
    name: "Bugatti Chiron Sport",
    category: "Hypercar",
    description:
      "Engineering beyond imagination. The legendary 8.0L quad-turbo W16 produces 1,500 hp, propelling this masterpiece to speeds that redefine what's mechanically possible.",
    condition: "Used",
    price: 3300000,
    discountedPrice: 2990000,
    images: gallery(9),
  },
  {
    id: "16",
    name: "Lexus LC 500",
    category: "Coupe",
    description:
      "Where concept-car beauty meets production-car reality. A naturally aspirated 5.0L V8 with 471 hp delivers an emotional driving experience wrapped in jaw-dropping design.",
    condition: "New",
    price: 93050,
    discountedPrice: 87500,
    images: gallery(11),
  },
  {
    id: "17",
    name: "Jaguar F-Type R75",
    category: "Sports",
    description:
      "A celebration of 75 years of Jaguar sports cars. The supercharged 5.0L V8 with 575 hp delivers savage performance with distinctly British charm and a soundtrack to match.",
    condition: "New",
    price: 103200,
    discountedPrice: 96800,
    images: gallery(13),
  },
  {
    id: "18",
    name: "Porsche Taycan Turbo S",
    category: "Electric",
    description:
      "Electric performance, Porsche soul. Dual electric motors produce 750 hp with overboost, delivering the iconic Porsche driving experience in a stunning all-electric package.",
    condition: "New",
    price: 185000,
    discountedPrice: 176500,
    images: gallery(15),
  },
  {
    id: "19",
    name: "Mercedes-Maybach S 680",
    category: "Sedan",
    description:
      "The absolute zenith of automotive luxury. A handcrafted twin-turbo V12, rear-seat first-class experience, and technology that anticipates your every desire before you think it.",
    condition: "New",
    price: 229000,
    discountedPrice: 219500,
    images: gallery(17),
  },
  {
    id: "20",
    name: "BMW iX M60",
    category: "Electric",
    description:
      "The future of luxury electric mobility. Dual motors with 610 hp, cutting-edge technology wrapped in sustainable materials, and a range that makes every journey effortless.",
    condition: "New",
    price: 108900,
    discountedPrice: 99900,
    images: gallery(19),
  },
  {
    id: "21",
    name: "Lamborghini Urus Performante",
    category: "SUV",
    description:
      "The world's first Super SUV, evolved. A 4.0L twin-turbo V8 with 657 hp, aggressive styling, and race-inspired engineering make this the apex predator of luxury SUVs.",
    condition: "New",
    price: 260676,
    discountedPrice: 248900,
    images: gallery(0),
  },
  {
    id: "22",
    name: "Ferrari Roma Spider",
    category: "Convertible",
    description:
      "La Dolce Vita, reimagined. The elegant lines of the Roma meet open-top freedom with a twin-turbo V8 producing 612 hp and Ferrari's most refined grand touring experience.",
    condition: "New",
    price: 272000,
    discountedPrice: 259900,
    images: gallery(5),
  },
  {
    id: "23",
    name: "Audi R8 V10 Performance",
    category: "Sports",
    description:
      "A naturally aspirated 5.2L V10 masterpiece producing 602 hp at a soul-stirring 8,700 RPM. Quattro all-wheel drive with rear-biased torque for pure driving engagement.",
    condition: "Used",
    price: 196700,
    discountedPrice: 174900,
    images: gallery(6),
  },
  {
    id: "24",
    name: "Tesla Cybertruck",
    category: "Electric",
    description:
      "Radically reimagining what a truck can be. Ultra-hard stainless steel exoskeleton, tri-motor AWD with 845 hp, and adaptive air suspension for supreme versatility.",
    condition: "New",
    price: 99990,
    discountedPrice: 96490,
    images: gallery(10),
  },
  {
    id: "25",
    name: "Cadillac Escalade-V",
    category: "SUV",
    description:
      "American luxury taken to the extreme. A supercharged 6.2L V8 with 682 hp transforms this iconic luxury SUV into the most powerful full-size SUV ever produced.",
    condition: "New",
    price: 149990,
    discountedPrice: 142900,
    images: gallery(14),
  },
  {
    id: "26",
    name: "Nissan GT-R Nismo",
    category: "Sports",
    description:
      "Godzilla, the ultimate iteration. Hand-assembled twin-turbo V6 with 600 hp, NISMO-tuned suspension, and aerodynamics born from decades of motorsport dominance at every level.",
    condition: "Used",
    price: 212435,
    discountedPrice: 189900,
    images: gallery(2),
  },
  {
    id: "27",
    name: "Porsche Cayenne Turbo GT",
    category: "SUV",
    description:
      "The sports car of SUVs. A twin-turbo V8 with 631 hp, active aerodynamics, and Porsche's motorsport DNA deliver lap times that embarrass many dedicated sports cars.",
    condition: "New",
    price: 186800,
    discountedPrice: 179900,
    images: gallery(1),
  },
  {
    id: "28",
    name: "McLaren Artura",
    category: "Sports",
    description:
      "McLaren's new-era hybrid supercar. A twin-turbo V6 paired with an E-motor delivers 671 hp through a revolutionary carbon fiber architecture weighing just 1,395 kg.",
    condition: "New",
    price: 237500,
    discountedPrice: 224900,
    images: gallery(9),
  },
  {
    id: "29",
    name: "Lucid Air Sapphire",
    category: "Electric",
    description:
      "The world's most powerful electric sedan. Three motors produce 1,234 hp with a quarter-mile time under 9 seconds, redefining what's possible in electric luxury performance.",
    condition: "New",
    price: 249000,
    discountedPrice: 239900,
    images: gallery(4),
  },
  {
    id: "30",
    name: "Rimac Nevera",
    category: "Hypercar",
    description:
      "The electric hypercar that changed everything. Four motors deliver 1,914 hp with 2,360 Nm of torque, hand-built in Croatia as a testament to human innovation.",
    condition: "New",
    price: 2400000,
    discountedPrice: 2290000,
    images: gallery(8),
  },
];

export function getCarById(id: string): Car | undefined {
  return cars.find((car) => car.id === id);
}

export function getPaginatedCars(page: number, perPage = 10) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return {
    cars: cars.slice(start, end),
    totalPages: Math.ceil(cars.length / perPage),
    currentPage: page,
    total: cars.length,
  };
}