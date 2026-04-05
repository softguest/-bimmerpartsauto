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

function img(index: number, w = 1200, h = 800): string {
  return `https://images.unsplash.com/${PHOTOS[index % PHOTOS.length]}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;
}

function gallery(start: number): string[] {
  return Array.from({ length: 6 }, (_, i) => img(start + i));
}

function generateVIN(): string {
  const chars = "ABCDEFGHJKLMNPRSTUVWXYZ0123456789";
  return Array.from({ length: 17 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");
}

export const cars: Car[] = [
  {
    id: "1",
    name: "Lamborghini Aventador SVJ",
    brand: "Lamborghini",
    category: "Hypercar",
    tagline: "The Pinnacle of V12 Performance",
    description:
      "The Aventador SVJ pushes the boundaries of technology and performance, featuring an aggressive aerodynamic design with the iconic V12 engine delivering 770 horsepower of pure adrenaline.",
    fullDescription: `The Lamborghini Aventador SVJ represents the absolute pinnacle of Lamborghini's naturally aspirated V12 legacy. The "SVJ" designation stands for "Superveloce Jota," combining the Italian word for superfast with the "J" that pays homage to the legendary Miura Jota.

At the heart of this masterpiece lies a 6.5-liter naturally aspirated V12 engine that produces an earth-shattering 770 horsepower and 531 lb-ft of torque. This powerplant propels the SVJ from 0 to 60 mph in just 2.8 seconds, with a top speed exceeding 217 mph.

The Aventador SVJ features Lamborghini's revolutionary ALA 2.0 (Aerodinamica Lamborghini Attiva) system, which provides active aerodynamic capabilities. The system can vary the aerodynamic load in real-time, optimizing downforce or reducing drag depending on driving conditions.

Every surface of the SVJ has been sculpted for maximum aerodynamic efficiency. The aggressive front splitter, massive rear wing, and redesigned rear diffuser work in harmony to generate over 40% more downforce than the standard Aventador SV.

Inside, the cabin features a perfect blend of racing-focused minimalism and Italian luxury. Carbon fiber dominates the interior, from the racing seats to the center console, while Alcantara and premium leather provide tactile comfort.`,
    condition: "New",
    year: 2024,
    mileage: 127,
    exteriorColor: "Verde Mantis",
    interiorColor: "Nero Ade / Verde",
    vin: generateVIN(),
    price: 517770,
    discountedPrice: 489900,
    images: gallery(0),
    specifications: {
      engine: "6.5L Naturally Aspirated V12",
      power: "770 hp @ 8,500 rpm",
      torque: "531 lb-ft @ 6,750 rpm",
      acceleration: "0-60 mph in 2.8 seconds",
      topSpeed: "217+ mph",
      transmission: "7-Speed ISR Automated Manual",
      drivetrain: "All-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 2,
    },
    features: [
      "ALA 2.0 Active Aerodynamics",
      "Lamborghini Dynamic Steering",
      "Magnetorheological Suspension",
      "Carbon Ceramic Brakes",
      "Full Carbon Fiber Monocoque",
      "Digital Instrument Cluster",
      "Apple CarPlay Integration",
      "Sensonum Premium Audio",
      "Rear View Camera",
      "Lifting System for Front Axle",
      "Transparent Engine Bonnet",
      "Alcantara Interior Trim",
    ],
    highlights: [
      "Nürburgring Nordschleife Production Car Record Holder",
      "Limited Production Run",
      "Hand-Built in Sant'Agata Bolognese, Italy",
      "Full Carbon Fiber Body Panels",
    ],
  },
  {
    id: "2",
    name: "Porsche 911 GT3 RS",
    brand: "Porsche",
    category: "Sports",
    tagline: "Born on the Racetrack",
    description:
      "Born on the racetrack, refined for the road. The 911 GT3 RS features a naturally aspirated 4.0L flat-six producing 518 hp with motorsport-derived aerodynamics for unmatched precision.",
    fullDescription: `The Porsche 911 GT3 RS represents the ultimate expression of Porsche's racing DNA translated into a street-legal package. Every component has been developed with a singular focus: to deliver the most exhilarating driving experience possible while maintaining everyday usability.

The heart of the GT3 RS is its legendary 4.0-liter naturally aspirated flat-six engine. This high-revving masterpiece produces 518 horsepower at a screaming 8,400 rpm and 346 lb-ft of torque at 6,250 rpm. The engine's ability to rev to 9,000 rpm creates an auditory experience unlike anything else on the road.

Porsche's engineers equipped the GT3 RS with the most aggressive aerodynamics ever fitted to a production 911. The enormous rear wing, with its distinctive swan-neck mounts, generates significant downforce at speed. Combined with the front lip spoiler and optimized underbody, the GT3 RS produces 409 kg of downforce at 177 mph.

The chassis features a double-wishbone front axle derived from the 911 RSR race car, providing unprecedented steering precision and feedback. The rear axle uses a multi-link design with ball joints instead of rubber bushings for maximum responsiveness.

Inside, the GT3 RS features carbon fiber full bucket seats, a GT Sport steering wheel with shift paddles, and the distinctive Weissach Package trim. Every element serves the car's performance mission while maintaining Porsche's renowned build quality.`,
    condition: "New",
    year: 2024,
    mileage: 342,
    exteriorColor: "Python Green",
    interiorColor: "Black / Guards Red",
    vin: generateVIN(),
    price: 223800,
    discountedPrice: 214500,
    images: gallery(2),
    specifications: {
      engine: "4.0L Naturally Aspirated Flat-Six",
      power: "518 hp @ 8,400 rpm",
      torque: "346 lb-ft @ 6,250 rpm",
      acceleration: "0-60 mph in 3.0 seconds",
      topSpeed: "184 mph",
      transmission: "7-Speed PDK Dual-Clutch",
      drivetrain: "Rear-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 2,
    },
    features: [
      "Active Rear Axle Steering",
      "Porsche Ceramic Composite Brakes (PCCB)",
      "Sport Chrono Package",
      "Clubsport Package",
      "Front Axle Lift System",
      "LED Matrix Headlights",
      "Track Precision App",
      "Carbon Fiber Full Bucket Seats",
      "Roll Cage",
      "Fire Extinguisher",
      "Six-Point Harness Preparation",
      "Weissach Package Available",
    ],
    highlights: [
      "Race-Derived Double-Wishbone Front Suspension",
      "DRS-Inspired Active Aerodynamics",
      "Center-Lock Wheels",
      "Magnesium Roof",
    ],
  },
  {
    id: "3",
    name: "BMW M8 Competition Gran Coupé",
    brand: "BMW",
    category: "Luxury",
    tagline: "Power Meets Prestige",
    description:
      "A masterpiece of power and elegance. The M8 Competition delivers 617 hp through its twin-turbo V8, wrapped in a stunning four-door grand tourer silhouette with premium craftsmanship.",
    fullDescription: `The BMW M8 Competition Gran Coupé represents the perfect fusion of breathtaking performance and luxurious grand touring capability. This four-door coupe embodies BMW's vision of a no-compromise vehicle that excels in every situation.

Powering this elegant machine is BMW's masterful 4.4-liter twin-turbocharged V8 engine, producing a staggering 617 horsepower and 553 lb-ft of torque. The engine's twin-scroll turbochargers eliminate lag, delivering immediate response and relentless acceleration that pushes you back into the sumptuous leather seats.

The M8 Competition Gran Coupé sprints from 0 to 60 mph in just 2.9 seconds, making it one of the fastest four-door cars money can buy. The M xDrive all-wheel-drive system provides exceptional traction while allowing rear-biased dynamics for driving enthusiasts.

BMW's engineers have created a chassis that defies physics. The adaptive M suspension with electronically controlled dampers provides a comfortable ride for daily driving while transforming into a razor-sharp track weapon at the press of a button.

The interior is a masterclass in luxury and technology. The BMW Live Cockpit Professional features a 12.3-inch digital instrument cluster and a 10.25-inch central display. Premium Merino leather, carbon fiber trim, and ambient lighting create an atmosphere of sophistication.`,
    condition: "New",
    year: 2024,
    mileage: 856,
    exteriorColor: "Frozen Black Metallic",
    interiorColor: "Silverstone Merino Leather",
    vin: generateVIN(),
    price: 130000,
    discountedPrice: 122500,
    images: gallery(4),
    specifications: {
      engine: "4.4L Twin-Turbocharged V8",
      power: "617 hp @ 6,000 rpm",
      torque: "553 lb-ft @ 1,800-5,800 rpm",
      acceleration: "0-60 mph in 2.9 seconds",
      topSpeed: "190 mph (with M Driver's Package)",
      transmission: "8-Speed M Steptronic",
      drivetrain: "M xDrive All-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 4,
      cargo: "14.0 cu ft",
    },
    features: [
      "M Carbon Ceramic Brakes",
      "Adaptive M Suspension Professional",
      "M Sport Exhaust System",
      "BMW Laserlight Headlights",
      "Head-Up Display",
      "Bowers & Wilkins Diamond Surround Sound",
      "Gesture Control",
      "Parking Assistant Plus",
      "Night Vision Assistant",
      "Active Driving Assistant Professional",
      "Wireless Charging",
      "Four-Zone Climate Control",
    ],
    highlights: [
      "Carbon Fiber Roof",
      "M Driver's Package for Increased Top Speed",
      "Individual M Competition Seats",
      "M Carbon Exterior Package",
    ],
  },
  {
    id: "4",
    name: "Mercedes-AMG GT Black Series",
    brand: "Mercedes-AMG",
    category: "Sports",
    tagline: "The Most Powerful AMG Ever",
    description:
      "The most powerful AMG V8 production engine ever. 720 hp channeled through race-bred engineering, advanced active aerodynamics, and a chassis tuned on the Nürburgring Nordschleife.",
    fullDescription: `The Mercedes-AMG GT Black Series stands as the ultimate expression of AMG's performance philosophy. This road-legal race car represents over five decades of motorsport expertise distilled into a singular, uncompromising machine.

At its heart beats the most powerful AMG V8 ever produced: a 4.0-liter twin-turbocharged engine producing 720 horsepower and 590 lb-ft of torque. The flat-plane crankshaft enables the engine to rev higher and respond faster than conventional crossplane designs, while also creating a distinctive exhaust note.

The Black Series features the most sophisticated aerodynamic package ever fitted to an AMG road car. The enormous rear wing is manually adjustable, while active aerodynamic elements at the front continuously optimize downforce and drag. At maximum attack, the Black Series generates over 400 kg of downforce.

AMG's engineers developed an entirely new suspension system for the Black Series, featuring carbon fiber wishbones and racing-derived coilover dampers. The result is a car that feels telepathically connected to the driver, with precision that borders on the supernatural.

The interior has been stripped to its essentials while maintaining the quality Mercedes-Benz is known for. Carbon fiber racing seats, exposed carbon fiber structures, and an AMG Performance steering wheel create a focused cockpit designed purely for driving enjoyment.`,
    condition: "New",
    year: 2024,
    mileage: 89,
    exteriorColor: "Magno Grey",
    interiorColor: "Neon Green / Black Nappa",
    vin: generateVIN(),
    price: 325000,
    discountedPrice: 309900,
    images: gallery(6),
    specifications: {
      engine: "4.0L Twin-Turbocharged V8 (Flat-Plane Crank)",
      power: "720 hp @ 6,700-6,900 rpm",
      torque: "590 lb-ft @ 2,000-6,000 rpm",
      acceleration: "0-60 mph in 3.1 seconds",
      topSpeed: "202 mph",
      transmission: "7-Speed AMG Speedshift DCT",
      drivetrain: "Rear-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 2,
    },
    features: [
      "AMG Active Aerodynamics",
      "Carbon Ceramic Brakes",
      "AMG Coilover Suspension",
      "Carbon Fiber Wishbones",
      "AMG Track Pace App",
      "Carbon Fiber Torque Tube",
      "Adjustable Rear Wing",
      "AMG Carbon Fiber Exterior Package",
      "AMG Carbon Bucket Seats",
      "Exclusive Black Series Interior",
      "AMG Performance Exhaust",
      "Carbon Fiber Hood with Vents",
    ],
    highlights: [
      "Nürburgring Nordschleife Record for Production Mercedes-Benz",
      "Most Powerful AMG V8 Ever",
      "Race-Derived Flat-Plane Crankshaft",
      "Limited Production",
    ],
  },
  {
    id: "5",
    name: "Tesla Model S Plaid",
    brand: "Tesla",
    category: "Electric",
    tagline: "The Quickest Car Ever Made",
    description:
      "The quickest production car ever made. Tri-motor all-wheel drive with 1,020 hp launches from 0-60 in under 2 seconds, with a minimalist interior centered around a 17-inch cinematic display.",
    fullDescription: `The Tesla Model S Plaid redefines what's possible in automotive performance while maintaining the practicality of a luxury sedan. With three independent motors and over 1,000 horsepower, it holds the distinction of being the quickest production car ever manufactured.

The tri-motor powertrain produces a combined 1,020 horsepower and instantly available torque that propels the Model S Plaid from 0 to 60 mph in an astonishing 1.99 seconds. This is achieved through Tesla's innovative carbon-sleeved rotors, which can spin at higher speeds than any previous electric motor design.

Range anxiety is a thing of the past with the Model S Plaid's estimated 396 miles of EPA range. Tesla's Supercharger network provides convenient high-speed charging, adding up to 200 miles of range in just 15 minutes of charging.

The interior represents a dramatic evolution of Tesla's minimalist design philosophy. The centerpiece is a stunning 17-inch cinematic display with 2200x1300 resolution and exceptional processing power capable of running AAA video games. The unique yoke steering wheel provides an unobstructed view of the road ahead.

Advanced features include adaptive air suspension, active noise cancellation, and Tesla's industry-leading Autopilot system with Full Self-Driving capability. The minimalist cabin features premium materials throughout, including three-zone climate control and a 22-speaker, 960-watt audio system.`,
    condition: "New",
    year: 2024,
    mileage: 234,
    exteriorColor: "Ultra Red",
    interiorColor: "Cream Premium Interior",
    vin: generateVIN(),
    price: 108490,
    discountedPrice: 99990,
    images: gallery(8),
    specifications: {
      engine: "Tri Motor All-Electric",
      power: "1,020 hp Combined",
      torque: "Instant Electric Torque",
      acceleration: "0-60 mph in 1.99 seconds",
      topSpeed: "200 mph",
      transmission: "Single-Speed Direct Drive",
      drivetrain: "All-Wheel Drive",
      fuelType: "Electric (396 mi range)",
      seating: 5,
      cargo: "28 cu ft",
    },
    features: [
      "17-inch Cinematic Display",
      "Full Self-Driving Capability",
      "Autopilot",
      "Yoke Steering Wheel",
      "22-Speaker Premium Audio",
      "Adaptive Air Suspension",
      "Glass Roof",
      "Supercharging Network Access",
      "Over-the-Air Updates",
      "Sentry Mode",
      "Dog Mode",
      "Camp Mode",
    ],
    highlights: [
      "Quickest Production Car Ever Made",
      "Sub-2-Second 0-60 Time",
      "Over 1,000 Horsepower",
      "Nearly 400 Miles of Range",
    ],
  },
  {
    id: "6",
    name: "Ferrari SF90 Stradale",
    brand: "Ferrari",
    category: "Hypercar",
    tagline: "The Future of Ferrari",
    description:
      "Ferrari's first plug-in hybrid supercar combines a twin-turbo V8 with three electric motors for a combined 986 hp. A revolutionary leap forward in performance and technology.",
    fullDescription: `The Ferrari SF90 Stradale marks a revolutionary moment in the Prancing Horse's storied history as the brand's first series-production plug-in hybrid. This technological tour de force combines a twin-turbocharged V8 with three electric motors to create Ferrari's most powerful road car ever.

The powertrain is nothing short of extraordinary. The 4.0-liter twin-turbo V8 produces 769 horsepower on its own, while three electric motors contribute an additional 217 horsepower for a combined system output of 986 horsepower. Two motors drive the front wheels independently, enabling advanced torque vectoring capabilities never before seen on a Ferrari.

The SF90 Stradale accelerates from 0 to 60 mph in just 2.0 seconds and reaches 124 mph from standstill in 6.7 seconds. Despite its hybrid powertrain adding weight, the SF90 is actually lighter than the 812 Superfast thanks to extensive use of carbon fiber and innovative engineering solutions.

Ferrari's engineers developed an entirely new architecture called "Assetto Fiorano" (Fiorano Package) featuring Multimatic shock absorbers, carbon fiber wheels, and titanium springs. This package reduces weight while improving handling dynamics.

The cockpit introduces Ferrari's first head-up display and a 16-inch curved digital instrument cluster. The steering wheel follows Ferrari's motorsport tradition by integrating almost all controls, including an innovative haptic touch pad for adjusting vehicle settings.`,
    condition: "New",
    year: 2024,
    mileage: 178,
    exteriorColor: "Rosso Corsa",
    interiorColor: "Nero / Rosso",
    vin: generateVIN(),
    price: 625000,
    discountedPrice: 599000,
    images: gallery(10),
    specifications: {
      engine: "4.0L Twin-Turbocharged V8 + 3 Electric Motors",
      power: "986 hp Combined",
      torque: "590 lb-ft",
      acceleration: "0-60 mph in 2.0 seconds",
      topSpeed: "211 mph",
      transmission: "8-Speed F1 DCT",
      drivetrain: "All-Wheel Drive",
      fuelType: "Plug-in Hybrid (15.5 mi electric range)",
      seating: 2,
    },
    features: [
      "eManettino with 4 Power Modes",
      "Head-Up Display",
      "16-inch Curved Digital Display",
      "Electric Front Axle Torque Vectoring",
      "Active Aerodynamics",
      "Ferrari Dynamic Enhancer+",
      "SCM-E Adaptive Suspension",
      "Carbon Fiber Wheels (Assetto Fiorano)",
      "Michelin Pilot Sport Cup 2 Tires",
      "Apple CarPlay",
      "7-Year Maintenance Program",
      "Ferrari Telemetry System",
    ],
    highlights: [
      "Ferrari's Most Powerful Road Car Ever",
      "First Series-Production Ferrari PHEV",
      "Revolutionary RAC-e Electric Front Axle",
      "Set New Internal Fiorano Circuit Record",
    ],
  },
  {
    id: "7",
    name: "Audi RS e-tron GT",
    brand: "Audi",
    category: "Electric",
    tagline: "Electric Has Gone Thrilling",
    description:
      "Electrifying performance meets Audi's legendary design language. Dual electric motors produce 637 hp with quattro all-wheel drive, delivering exhilarating acceleration in whisper-quiet refinement.",
    fullDescription: `The Audi RS e-tron GT represents the pinnacle of Audi's electric ambitions, combining breathtaking performance with sustainable luxury. Sharing its advanced J1 platform with the Porsche Taycan, this electric grand tourer delivers an experience unlike any other Audi before it.

The dual-motor powertrain produces 637 horsepower in boost mode, launching the RS e-tron GT from 0 to 60 mph in just 3.1 seconds. The rear motor utilizes a two-speed transmission, providing strong acceleration at low speeds while enabling efficient cruising at highway velocities.

Audi's legendary quattro all-wheel-drive system takes on a new form in the RS e-tron GT. The electric all-wheel drive system can distribute torque between the front and rear axles in milliseconds, providing exceptional traction in all conditions while enabling rear-biased dynamics for enthusiastic driving.

The 93.4 kWh battery provides an estimated range of 232 miles, while 800-volt charging architecture enables exceptionally fast charging. Using a DC fast charger, the battery can be replenished from 5% to 80% in approximately 22.5 minutes.

The interior showcases Audi's commitment to sustainable luxury. Recycled materials are used throughout, including a leather-free option featuring Dinamica microfiber. The curved digital cockpit, Bang & Olufsen 3D audio system, and matrix LED headlights represent the cutting edge of automotive technology.`,
    condition: "New",
    year: 2024,
    mileage: 512,
    exteriorColor: "Tactical Green",
    interiorColor: "Black Valcona Leather",
    vin: generateVIN(),
    price: 139900,
    discountedPrice: 131500,
    images: gallery(12),
    specifications: {
      engine: "Dual Electric Motors",
      power: "637 hp (Boost Mode)",
      torque: "612 lb-ft",
      acceleration: "0-60 mph in 3.1 seconds",
      topSpeed: "155 mph (electronically limited)",
      transmission: "2-Speed Rear / Single-Speed Front",
      drivetrain: "electric quattro All-Wheel Drive",
      fuelType: "Electric (232 mi range)",
      seating: 4,
      cargo: "9.2 cu ft",
    },
    features: [
      "800-Volt Charging Architecture",
      "Adaptive Air Suspension",
      "All-Wheel Steering",
      "Matrix LED Headlights",
      "Bang & Olufsen 3D Audio",
      "Virtual Cockpit Plus",
      "MMI Navigation Plus",
      "Audi Pre Sense",
      "Adaptive Cruise Assist",
      "Parking System Plus",
      "Wireless Charging",
      "Panoramic Glass Roof",
    ],
    highlights: [
      "800-Volt Ultra-Fast Charging",
      "Carbon Fiber Roof",
      "Sustainable Interior Materials",
      "Shared Platform with Porsche Taycan",
    ],
  },
  {
    id: "8",
    name: "Chevrolet Corvette Z06",
    brand: "Chevrolet",
    category: "Sports",
    tagline: "America's Track-Ready Supercar",
    description:
      "America's supercar redefined. The flat-plane crank 5.5L V8 screams to 8,600 RPM producing 670 hp, paired with race-proven aerodynamics and mid-engine precision handling.",
    fullDescription: `The Chevrolet Corvette Z06 represents the most track-capable Corvette ever produced. This American supercar combines exotic car performance with attainable pricing, democratizing access to world-class driving dynamics.

At the heart of the Z06 lies the most powerful naturally aspirated V8 ever fitted to a production car: the 5.5-liter LT6 with a flat-plane crankshaft. This engineering masterpiece produces 670 horsepower at a stratospheric 8,400 rpm and revs all the way to 8,600 rpm. The flat-plane crank enables faster revving and creates an exotic, race-car-like exhaust note.

The mid-engine layout, introduced with the C8 generation, transforms the Corvette's handling character. The Z06 builds on this foundation with wider bodywork housing massive 275/30ZR-20 front and 345/25ZR-21 rear Michelin Pilot Sport Cup 2 R tires – the widest ever fitted to a production Corvette.

The Z07 Performance Package adds carbon fiber aerodynamic components that generate significant downforce, along with carbon ceramic brakes and competition-spec suspension. This package transforms the Z06 into a legitimate track weapon capable of challenging the world's best.

The interior combines genuine carbon fiber, premium Napa leather, and advanced technology including a 12-inch diagonal digital instrument cluster and 8-inch central touchscreen. Despite its track focus, the Z06 remains remarkably civilized for daily driving.`,
    condition: "New",
    year: 2024,
    mileage: 643,
    exteriorColor: "Torch Red",
    interiorColor: "Adrenaline Red",
    vin: generateVIN(),
    price: 111100,
    discountedPrice: 104900,
    images: gallery(14),
    specifications: {
      engine: "5.5L Flat-Plane Crank V8 (LT6)",
      power: "670 hp @ 8,400 rpm",
      torque: "460 lb-ft @ 6,300 rpm",
      acceleration: "0-60 mph in 2.6 seconds",
      topSpeed: "195 mph",
      transmission: "8-Speed DCT",
      drivetrain: "Rear-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 2,
      cargo: "12.6 cu ft",
    },
    features: [
      "Performance Data Recorder",
      "Z07 Performance Package Available",
      "Carbon Fiber Aero Package",
      "Magnetic Ride Control 4.0",
      "Brembo Carbon Ceramic Brakes (Z07)",
      "Front Lift System",
      "Head-Up Display",
      "Bose Performance Audio",
      "Wireless Apple CarPlay/Android Auto",
      "GT2 Seats with Carbon Fiber",
      "Competition Sport Bucket Seats Option",
      "Visible Carbon Fiber Interior",
    ],
    highlights: [
      "Most Powerful Naturally Aspirated V8 in Any Production Car",
      "Flat-Plane Crankshaft V8",
      "Widest Tires Ever on a Production Corvette",
      "8,600 RPM Redline",
    ],
  },
  {
    id: "9",
    name: "Maserati MC20 Cielo",
    brand: "Maserati",
    category: "Convertible",
    tagline: "Open-Air Italian Excellence",
    description:
      "Italian artistry meets cutting-edge innovation. The MC20 Cielo features a retractable glass roof, the revolutionary Nettuno twin-combustion V6 engine with 621 hp, and timeless elegance.",
    fullDescription: `The Maserati MC20 Cielo represents a renaissance for the storied Italian brand, combining breakthrough technology with the passionate soul that has defined Maserati for over a century. "Cielo" means "sky" in Italian, and this convertible supercar opens up the heavens above you.

The retractable hardtop features electrochromic glass technology, allowing occupants to adjust the roof's transparency from fully transparent to completely opaque at the touch of a button. This innovative solution maintains the MC20's stunning silhouette while offering an open-air experience.

At the heart of the MC20 Cielo lies Maserati's revolutionary Nettuno engine. This 3.0-liter twin-turbocharged V6 uses an innovative pre-chamber combustion system derived from Formula 1 technology. The result is 621 horsepower and 538 lb-ft of torque from a remarkably compact and lightweight package.

The MC20's chassis is constructed entirely from carbon fiber, resulting in a curb weight of just 3,517 pounds despite the added complexity of the retractable roof mechanism. This lightweight construction enables exceptional performance: 0-60 mph in 2.9 seconds and a top speed of 198 mph with the roof closed.

The interior blends Italian craftsmanship with modern technology. Premium leather, carbon fiber, and alcantara create an atmosphere of refined luxury, while the 10.25-inch central display and digital instrument cluster provide cutting-edge connectivity.`,
    condition: "New",
    year: 2024,
    mileage: 234,
    exteriorColor: "Blu Infinito",
    interiorColor: "Cuoio Natural Leather",
    vin: generateVIN(),
    price: 260000,
    discountedPrice: 245000,
    images: gallery(16),
    specifications: {
      engine: "3.0L Twin-Turbocharged V6 (Nettuno)",
      power: "621 hp @ 7,500 rpm",
      torque: "538 lb-ft @ 3,000-5,500 rpm",
      acceleration: "0-60 mph in 2.9 seconds",
      topSpeed: "198 mph",
      transmission: "8-Speed DCT",
      drivetrain: "Rear-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 2,
    },
    features: [
      "Electrochromic Glass Roof",
      "F1-Derived Pre-Chamber Combustion",
      "Carbon Fiber Monocoque",
      "Virtual Vehicle Dynamics Control",
      "Launch Control",
      "Corsa, GT, and Wet Drive Modes",
      "10.25-inch Central Display",
      "Sonus Faber Premium Audio",
      "Wireless Apple CarPlay",
      "360° Camera System",
      "Front Axle Lift System",
      "Full LED Adaptive Headlights",
    ],
    highlights: [
      "First Engine Designed Entirely In-House by Maserati Since 1998",
      "Formula 1-Derived Engine Technology",
      "Electrochromic Smart Glass Roof",
      "100% Carbon Fiber Monocoque",
    ],
  },
  {
    id: "10",
    name: "Rolls-Royce Ghost",
    brand: "Rolls-Royce",
    category: "Luxury",
    tagline: "The Purest Expression of Rolls-Royce",
    description:
      "The purest expression of automotive luxury. A 6.75L twin-turbo V12 delivers effortless power while the cabin crafted from the finest materials creates an unparalleled sanctuary of serenity.",
    fullDescription: `The Rolls-Royce Ghost represents the most technologically advanced Rolls-Royce ever created, while paradoxically offering a purity and simplicity that embodies the brand's "less is more" philosophy. This is automotive luxury in its most refined form.

Beneath the Ghost's elegant bonnet lies a 6.75-liter twin-turbocharged V12 engine producing 563 horsepower and 627 lb-ft of torque. This hand-assembled powerplant provides effortless acceleration, wafting the Ghost from 0 to 60 mph in 4.6 seconds while maintaining the serene quietude that defines the Rolls-Royce experience.

The Ghost rides on Rolls-Royce's proprietary "Architecture of Luxury" platform, featuring a sophisticated all-wheel-drive system and all-wheel steering. The innovative Planar Suspension System uses cameras to read the road ahead, preparing the dampers for surface changes before they're encountered.

Inside, the Ghost envelops occupants in unprecedented luxury. The Starlight Headliner features 1,340 fiber-optic lights creating a bespoke constellation. The illuminated fascia features over 850 stars set behind leather, creating a subtle three-dimensional effect.

Every Ghost is essentially bespoke, with clients able to personalize virtually every element. From the 44,000 available exterior paint options to the hand-selected wood veneers and leather hides, each Ghost is a unique expression of its owner's taste and personality.`,
    condition: "New",
    year: 2024,
    mileage: 312,
    exteriorColor: "Black Diamond",
    interiorColor: "Arctic White / Scivaro Grey",
    vin: generateVIN(),
    price: 332500,
    discountedPrice: 319000,
    images: gallery(18),
    specifications: {
      engine: "6.75L Twin-Turbocharged V12",
      power: "563 hp @ 5,000 rpm",
      torque: "627 lb-ft @ 1,600-4,500 rpm",
      acceleration: "0-60 mph in 4.6 seconds",
      topSpeed: "155 mph (electronically limited)",
      transmission: "8-Speed Automatic",
      drivetrain: "All-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 5,
      cargo: "17.1 cu ft",
    },
    features: [
      "Planar Suspension System",
      "Starlight Headliner",
      "Illuminated Fascia",
      "All-Wheel Steering",
      "Night Vision with Pedestrian Detection",
      "Vision Assist",
      "Bespoke Audio System",
      "Four-Zone Climate Control",
      "Massage Seats",
      "Rear Theatre Configuration",
      "Champagne Cooler",
      "Umbrella in Door",
    ],
    highlights: [
      "Architecture of Luxury Platform",
      "Camera-Guided Predictive Suspension",
      "Essentially Unlimited Bespoke Options",
      "Hand-Built in Goodwood, England",
    ],
  },
  {
    id: "11",
    name: "Range Rover Autobiography",
    brand: "Land Rover",
    category: "SUV",
    tagline: "The Definition of Refined Capability",
    description:
      "The pinnacle of refined capability. A 4.4L twin-turbo V8 with 523 hp, combined with peerless off-road prowess and an interior that rivals the finest luxury sedans.",
    fullDescription: `The Range Rover Autobiography stands as the ultimate expression of Land Rover's legendary combination of luxury and capability. For over 50 years, Range Rover has defined the full-size luxury SUV segment, and the Autobiography trim represents the absolute pinnacle of this legacy.

Powering the Autobiography is a 4.4-liter twin-turbocharged V8 engine producing 523 horsepower and 553 lb-ft of torque. This sophisticated powerplant provides effortless acceleration while delivering surprising efficiency through its mild-hybrid system. The Range Rover accelerates from 0 to 60 mph in just 4.4 seconds.

The fifth-generation Range Rover rides on Land Rover's new MLA-Flex architecture, featuring an intelligent all-wheel-drive system with an electronic rear differential and optional all-wheel steering. The adaptive air suspension provides 145mm of vertical travel, enabling exceptional off-road capability while maintaining a limousine-like ride on pavement.

Inside, the Autobiography creates a sanctuary of luxury. The cabin features semi-aniline leather, real metal accents, and open-pore wood veneers. The curved 13.1-inch touchscreen integrates seamlessly with the digital instrument cluster, while the rear passengers enjoy individual screens and aircraft-inspired reclining seats.

The innovative Pivi Pro infotainment system works with Amazon Alexa and features over-the-air updates, ensuring the Range Rover evolves and improves over time. Meridian's 1,600-watt, 35-speaker Signature Sound System creates an immersive audio experience.`,
    condition: "New",
    year: 2024,
    mileage: 876,
    exteriorColor: "Carpathian Grey",
    interiorColor: "Caraway / Ebony",
    vin: generateVIN(),
    price: 185500,
    discountedPrice: 174900,
    images: gallery(1),
    specifications: {
      engine: "4.4L Twin-Turbocharged V8 + 48V Mild Hybrid",
      power: "523 hp @ 5,500-6,000 rpm",
      torque: "553 lb-ft @ 1,500-4,000 rpm",
      acceleration: "0-60 mph in 4.4 seconds",
      topSpeed: "155 mph",
      transmission: "8-Speed Automatic",
      drivetrain: "All-Wheel Drive",
      fuelType: "Premium Gasoline (MHEV)",
      seating: 5,
      cargo: "31.8 cu ft",
    },
    features: [
      "Adaptive Dynamics with Electronic Air Suspension",
      "All-Wheel Steering",
      "Terrain Response 2",
      "Wade Sensing",
      "13.1-inch Curved Touchscreen",
      "Meridian Signature Sound System",
      "Executive Class Rear Seats",
      "Hot Stone Massage Seats",
      "Refrigerator Compartment",
      "Head-Up Display",
      "Amazon Alexa Integration",
      "Clear Sight Interior Mirror",
    ],
    highlights: [
      "900mm Wading Depth",
      "Up to 7,716 lb Towing Capacity",
      "Optional Rear Executive Class Seating",
      "Over-the-Air Updates",
    ],
  },
  {
    id: "12",
    name: "Bentley Continental GT Speed",
    brand: "Bentley",
    category: "Luxury",
    tagline: "Breathtaking Performance, Handcrafted Luxury",
    description:
      "Handcrafted perfection at breathtaking pace. The W12 engine produces 650 hp, clothed in a body of timeless proportions with an interior of unrivaled British craftsmanship and heritage.",
    fullDescription: `The Bentley Continental GT Speed represents the pinnacle of the grand touring art form, combining extraordinary performance with uncompromising luxury. Every Continental GT Speed is handcrafted in Crewe, England, where skilled artisans spend over 100 hours on the interior alone.

At the heart of this magnificent grand tourer lies Bentley's legendary 6.0-liter twin-turbocharged W12 engine. This unique powerplant produces 650 horsepower and 664 lb-ft of torque, enabling the Continental GT Speed to accelerate from 0 to 60 mph in just 3.5 seconds and reach a top speed of 208 mph.

The Continental GT Speed features Bentley's most advanced chassis ever. The 48-volt active anti-roll control system virtually eliminates body roll, while the electronic limited-slip differential at the rear enables precise torque vectoring. Three-chamber air springs provide exceptional compliance while maintaining sporting agility.

The Speed's exterior features unique 22-inch wheels, dark-tinted grilles, and distinctive Speed badging. The available carbon fiber body kit adds aggressive splitters and diffusers that enhance both aesthetics and downforce.

Inside, the Continental GT Speed showcases Bentley's unmatched craftsmanship. The hide of a single bull creates each seat, hand-stitched with perfect diamond quilting. The rotating dashboard display can show either a 12.3-inch touchscreen, three analog dials, or a clean veneer panel, depending on the driver's preference.`,
    condition: "New",
    year: 2024,
    mileage: 456,
    exteriorColor: "Verdant Green",
    interiorColor: "Beluga / Hotspur",
    vin: generateVIN(),
    price: 274900,
    discountedPrice: 259900,
    images: gallery(3),
    specifications: {
      engine: "6.0L Twin-Turbocharged W12",
      power: "650 hp @ 5,000-6,000 rpm",
      torque: "664 lb-ft @ 1,500-5,000 rpm",
      acceleration: "0-60 mph in 3.5 seconds",
      topSpeed: "208 mph",
      transmission: "8-Speed Dual-Clutch",
      drivetrain: "All-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 4,
      cargo: "12.6 cu ft",
    },
    features: [
      "48-Volt Active Anti-Roll Control",
      "Electronic Limited-Slip Differential",
      "Three-Chamber Air Suspension",
      "Rotating Dashboard Display",
      "Naim for Bentley Premium Audio",
      "Diamond Quilted Seats",
      "Bentley Dynamic Ride",
      "Mood Lighting",
      "Night Vision Camera",
      "Head-Up Display",
      "City Specification",
      "Touring Specification",
    ],
    highlights: [
      "Handcrafted in Crewe, England",
      "Over 100 Hours of Interior Craftsmanship",
      "Unique W12 Engine Configuration",
      "208 mph Top Speed",
    ],
  },
  {
    id: "13",
    name: "McLaren 720S Spider",
    brand: "McLaren",
    category: "Convertible",
    tagline: "Engineered for Open-Air Thrills",
    description:
      "Aerodynamic artistry meets open-air exhilaration. The 4.0L twin-turbo V8 delivers 710 hp through a carbon fiber monocoque, with a retractable hardtop that transforms the experience.",
    fullDescription: `The McLaren 720S Spider combines the ferocious performance of the 720S Coupé with the visceral thrill of open-air driving. Every element has been engineered to deliver an experience that engages all the senses while maintaining McLaren's uncompromising performance standards.

The retractable hardtop is an engineering marvel, folding away in just 11 seconds at speeds up to 31 mph. Remarkably, the Spider is only 49 kg heavier than the Coupé, thanks to the Monocage II-S carbon fiber chassis that provides exceptional rigidity without additional reinforcement.

The 4.0-liter twin-turbocharged V8 engine produces 710 horsepower and 568 lb-ft of torque, launching the 720S Spider from 0 to 60 mph in 2.8 seconds. The top speed reaches 212 mph with the roof up and 202 mph with the roof lowered – figures that establish the 720S Spider as one of the fastest convertibles ever made.

McLaren's innovative Proactive Chassis Control II suspension system continuously adapts to road conditions, providing exceptional comfort and control. The Hydraulic Cross-Link system connects the suspension units, reducing body roll while maintaining exceptional ride quality.

The cabin combines racing-inspired design with luxury materials. The dihedral doors, a McLaren signature, provide dramatic access to a cockpit focused entirely on the driver. With the roof lowered and the rear glass in place, the engine's sonorous exhaust note is perfectly showcased.`,
    condition: "Used",
    year: 2022,
    mileage: 4567,
    exteriorColor: "Sarthe Grey",
    interiorColor: "Carbon Black / McLaren Orange",
    vin: generateVIN(),
    price: 315000,
    discountedPrice: 279900,
    images: gallery(5),
    specifications: {
      engine: "4.0L Twin-Turbocharged V8",
      power: "710 hp @ 7,250 rpm",
      torque: "568 lb-ft @ 5,500 rpm",
      acceleration: "0-60 mph in 2.8 seconds",
      topSpeed: "212 mph (roof up) / 202 mph (roof down)",
      transmission: "7-Speed SSG Dual-Clutch",
      drivetrain: "Rear-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 2,
    },
    features: [
      "Retractable Hardtop (11 seconds)",
      "Monocage II-S Carbon Fiber Chassis",
      "Proactive Chassis Control II",
      "Variable Drift Control",
      "Dihedral Doors",
      "McLaren Track Telemetry",
      "8-inch Central Touchscreen",
      "12-Speaker Bowers & Wilkins Audio",
      "Vehicle Lift System",
      "Folding Driver Display",
      "Electrochromic Roof Panel (Optional)",
      "MSO Defined Options",
    ],
    highlights: [
      "Only 49 kg Heavier Than Coupé",
      "212 mph Top Speed",
      "11-Second Roof Operation",
      "Carbon Fiber Monocoque Construction",
    ],
  },
  {
    id: "14",
    name: "Aston Martin DB12",
    brand: "Aston Martin",
    category: "Coupe",
    tagline: "The World's First Super Tourer",
    description:
      "The world's first super tourer. A twin-turbo V8 producing 671 hp married to Aston Martin's most advanced chassis ever, wrapped in breathtakingly sculpted aluminum bodywork.",
    fullDescription: `The Aston Martin DB12 marks a new era for the iconic British brand, claiming the title of "The World's First Super Tourer." This designation reflects the DB12's ability to combine the performance of a supercar with the refinement and comfort expected of a grand tourer.

The DB12 is powered by an enhanced version of the twin-turbocharged 4.0-liter V8 engine, now producing 671 horsepower and 590 lb-ft of torque – making it the most powerful production DB model ever created. The 8-speed automatic transmission has been calibrated to deliver both lightning-fast shifts and smooth, refined gear changes depending on the driving mode selected.

Aston Martin's engineers completely redesigned the chassis for the DB12. New adaptive dampers, electronic rear differential, and an upgraded steering system deliver exceptional dynamic capability while maintaining the supple ride quality expected of a true grand tourer.

The exterior design evolves Aston Martin's iconic styling with a more assertive presence. The wider, lower stance features new LED headlights and a redesigned grille that improves cooling. The aluminum body is handcrafted at Aston Martin's headquarters in Gaydon, England.

Inside, the DB12 features Aston Martin's most advanced interior ever. The new 10.25-inch touchscreen infotainment system, developed with Mercedes-Benz, brings modern connectivity to the cabin. Bridge of Weir leather, genuine carbon fiber, and available tweed inserts create an atmosphere of British sophistication.`,
    condition: "New",
    year: 2024,
    mileage: 234,
    exteriorColor: "Iridescent Emerald",
    interiorColor: "Obsidian Black / Eifel Green",
    vin: generateVIN(),
    price: 245000,
    discountedPrice: 234900,
    images: gallery(7),
    specifications: {
      engine: "4.0L Twin-Turbocharged V8",
      power: "671 hp @ 6,000 rpm",
      torque: "590 lb-ft @ 2,750-6,000 rpm",
      acceleration: "0-60 mph in 3.5 seconds",
      topSpeed: "202 mph",
      transmission: "8-Speed Automatic",
      drivetrain: "Rear-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 4,
      cargo: "9.6 cu ft",
    },
    features: [
      "10.25-inch Touchscreen Infotainment",
      "Electronic Rear Differential",
      "Adaptive Damping System",
      "Sport Plus Driving Mode",
      "Carbon Ceramic Brakes",
      "11-Speaker Premium Audio",
      "Bridge of Weir Leather",
      "360° Parking Camera",
      "Wireless Apple CarPlay/Android Auto",
      "Climate Seats",
      "Aston Martin Art of Living Program",
      "Q by Aston Martin Personalization",
    ],
    highlights: [
      "Most Powerful DB Production Car Ever",
      "First to Use 'Super Tourer' Designation",
      "All-New Infotainment System",
      "Handcrafted in Gaydon, England",
    ],
  },
  {
    id: "15",
    name: "Bugatti Chiron Sport",
    brand: "Bugatti",
    category: "Hypercar",
    tagline: "Engineering Beyond Imagination",
    description:
      "Engineering beyond imagination. The legendary 8.0L quad-turbo W16 produces 1,500 hp, propelling this masterpiece to speeds that redefine what's mechanically possible.",
    fullDescription: `The Bugatti Chiron Sport represents the ultimate expression of automotive engineering and craftsmanship. This hypercar exists at the absolute pinnacle of what is technically achievable, combining unprecedented performance with uncompromising luxury.

The Chiron Sport's beating heart is the legendary 8.0-liter quad-turbocharged W16 engine – essentially two V8 engines joined at the crankshaft. This masterpiece of engineering produces 1,500 horsepower and an almost inconceivable 1,180 lb-ft of torque, enabling acceleration from 0 to 60 mph in just 2.4 seconds.

The top speed of the Chiron Sport is electronically limited to 261 mph, though the car is theoretically capable of exceeding 300 mph. The seven-speed dual-clutch transmission can handle the immense torque, while the sophisticated all-wheel-drive system provides the traction necessary to deploy such power.

The "Sport" designation brings significant chassis enhancements. Stiffer suspension springs, a more responsive steering rack, and revised handling balance make the Chiron Sport more agile and engaging than the standard model. Weight savings of 18 kg are achieved through lightweight wheels and carbon fiber components.

Inside, the Chiron Sport combines traditional haute couture craftsmanship with modern technology. Every element is handcrafted by skilled artisans in Molsheim, France. The distinctive "C" design element, created using a single piece of milled aluminum, houses the controls for climate, media, and comfort systems.`,
    condition: "Used",
    year: 2022,
    mileage: 2345,
    exteriorColor: "Atlantic Blue / French Racing Blue",
    interiorColor: "Gaucho / Beluga Black",
    vin: generateVIN(),
    price: 3300000,
    discountedPrice: 2990000,
    images: gallery(9),
    specifications: {
      engine: "8.0L Quad-Turbocharged W16",
      power: "1,500 hp @ 6,700 rpm",
      torque: "1,180 lb-ft @ 2,000-6,000 rpm",
      acceleration: "0-60 mph in 2.4 seconds",
      topSpeed: "261 mph (electronically limited)",
      transmission: "7-Speed Dual-Clutch",
      drivetrain: "All-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 2,
    },
    features: [
      "Quad-Turbo W16 Engine",
      "Active Aerodynamics",
      "Carbon Fiber Monocoque",
      "Magnesium Wheels",
      "Six Exhaust Tailpipes",
      "10-Radiator Cooling System",
      "Adaptive Hydraulic Dampers",
      "Active Rear Spoiler",
      "Top Speed Key",
      "Burmester Audio System",
      "Full Leather Interior",
      "Sky View Roof Option",
    ],
    highlights: [
      "1,500 Horsepower",
      "261 mph Top Speed (Limited)",
      "Handcrafted in Molsheim, France",
      "Rarer Than Any Supercar",
    ],
  },
  {
    id: "16",
    name: "Lexus LC 500",
    brand: "Lexus",
    category: "Coupe",
    tagline: "Concept-Car Beauty Made Real",
    description:
      "Where concept-car beauty meets production-car reality. A naturally aspirated 5.0L V8 with 471 hp delivers an emotional driving experience wrapped in jaw-dropping design.",
    fullDescription: `The Lexus LC 500 proves that sometimes the boldest concept cars can make it to production virtually unchanged. This stunning grand tourer combines provocative design with genuine driving excitement, establishing Lexus as a creator of truly desirable sports cars.

The LC 500 is powered by a naturally aspirated 5.0-liter V8 engine producing 471 horsepower and 398 lb-ft of torque. In an era of forced induction, the LC's high-revving V8 is refreshingly pure, delivering linear power delivery and an intoxicating exhaust note. The engine revs eagerly to its 7,300 rpm redline.

Lexus developed an innovative 10-speed Direct-Shift automatic transmission specifically for the LC. This unit provides both silky smooth shifts for grand touring and rapid-fire changes when driving enthusiastically. The close gear ratios keep the engine in its powerband during spirited driving.

The LC 500's chassis combines a new multi-link suspension design with an exceptionally rigid platform. The resulting dynamics balance sporting agility with grand touring comfort. Available 21-inch wheels and an optional Performance Package with active rear steering sharpen the LC's responses further.

Inside, the LC 500 showcases Lexus's "Takumi" craftsmanship philosophy. Hand-pleated door inserts require over 300 processes to create. The driver-focused cockpit positions all controls within easy reach, while the 12.3-inch multimedia display provides connectivity without cluttering the elegant design.`,
    condition: "New",
    year: 2024,
    mileage: 567,
    exteriorColor: "Infrared",
    interiorColor: "Toasted Caramel Semi-Aniline Leather",
    vin: generateVIN(),
    price: 93050,
    discountedPrice: 87500,
    images: gallery(11),
    specifications: {
      engine: "5.0L Naturally Aspirated V8",
      power: "471 hp @ 7,100 rpm",
      torque: "398 lb-ft @ 4,800 rpm",
      acceleration: "0-60 mph in 4.4 seconds",
      topSpeed: "168 mph",
      transmission: "10-Speed Direct-Shift Automatic",
      drivetrain: "Rear-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 4,
      cargo: "5.4 cu ft",
    },
    features: [
      "10-Speed Direct-Shift Automatic",
      "Active Rear Steering (Optional)",
      "Variable Gear Ratio Steering",
      "Adaptive Variable Suspension",
      "12.3-inch Multimedia Display",
      "Mark Levinson Reference Audio",
      "Head-Up Display",
      "Takumi Craftsmanship",
      "Alcantara Headliner",
      "Climate Concierge",
      "Lexus Safety System+ 2.5",
      "Wireless Charging",
    ],
    highlights: [
      "Production Car True to Concept Design",
      "High-Revving Naturally Aspirated V8",
      "Innovative 10-Speed Transmission",
      "Takumi Handcraftsmanship",
    ],
  },
  {
    id: "17",
    name: "Jaguar F-Type R75",
    brand: "Jaguar",
    category: "Sports",
    tagline: "A 75-Year Legacy of Sports Cars",
    description:
      "A celebration of 75 years of Jaguar sports cars. The supercharged 5.0L V8 with 575 hp delivers savage performance with distinctly British charm and a soundtrack to match.",
    fullDescription: `The Jaguar F-Type R75 is a fitting tribute to 75 years of Jaguar sports car heritage, dating back to the legendary XK120 of 1948. This limited-edition model represents the final and most powerful iteration of the F-Type, marking the end of an era for Jaguar's combustion-powered sports cars.

The R75 is powered by the supercharged 5.0-liter V8 engine in its most potent form, producing 575 horsepower and 516 lb-ft of torque. This handcrafted engine propels the F-Type from 0 to 60 mph in just 3.5 seconds, accompanied by one of the most stirring exhaust notes in the automotive world.

The all-wheel-drive system works with the quick-shifting 8-speed automatic transmission to deploy power effectively in all conditions. The intelligent driveline can send up to 100% of torque to the rear axle under normal conditions, providing engaging rear-drive dynamics while maintaining all-weather capability.

Unique to the R75 are exclusive 20-inch wheels in satin grey, special badging, and unique interior trim. The cabin features Windsor leather with diamond quilting, an 11.4-inch curved touchscreen, and Meridian premium audio with 770 watts of power.

The F-Type's aluminum architecture provides an ideal balance of rigidity and weight, enabling responsive handling. Adaptive dynamics continuously adjust the suspension, steering, and throttle response to match driving conditions and driver preferences.`,
    condition: "New",
    year: 2024,
    mileage: 234,
    exteriorColor: "British Racing Green",
    interiorColor: "Mars Red / Ebony",
    vin: generateVIN(),
    price: 103200,
    discountedPrice: 96800,
    images: gallery(13),
    specifications: {
      engine: "5.0L Supercharged V8",
      power: "575 hp @ 6,500-7,000 rpm",
      torque: "516 lb-ft @ 3,500-5,000 rpm",
      acceleration: "0-60 mph in 3.5 seconds",
      topSpeed: "186 mph",
      transmission: "8-Speed Quickshift Automatic",
      drivetrain: "All-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 2,
      cargo: "14.4 cu ft",
    },
    features: [
      "Adaptive Dynamics",
      "Configurable Dynamics",
      "Electronic Active Differential",
      "11.4-inch Curved Touchscreen",
      "Meridian 770W Surround Sound",
      "Windsor Leather Interior",
      "Performance Active Exhaust",
      "Activity Key",
      "360° Surround Camera",
      "Wireless Charging",
      "R75 Exclusive Badging",
      "20-inch Satin Grey Wheels",
    ],
    highlights: [
      "Limited Edition Celebrating 75 Years",
      "Final Iteration of F-Type",
      "Most Powerful Production F-Type",
      "Exclusive Interior and Exterior Details",
    ],
  },
  {
    id: "18",
    name: "Porsche Taycan Turbo S",
    brand: "Porsche",
    category: "Electric",
    tagline: "Electric Performance, Porsche Soul",
    description:
      "Electric performance, Porsche soul. Dual electric motors produce 750 hp with overboost, delivering the iconic Porsche driving experience in a stunning all-electric package.",
    fullDescription: `The Porsche Taycan Turbo S proves that the transition to electric power doesn't require sacrificing the qualities that make a Porsche a Porsche. This ground-breaking sports sedan delivers exhilarating performance while establishing new standards for electric vehicle driving dynamics.

The Taycan Turbo S features dual permanent-magnet synchronous motors producing up to 750 horsepower with overboost during launch control. This enables acceleration from 0 to 60 mph in just 2.6 seconds, with consistently repeatable performance thanks to the innovative 800-volt electrical architecture.

The innovative two-speed transmission on the rear axle is unique in the electric vehicle world. First gear provides maximum acceleration off the line, while second gear ensures efficient high-speed cruising. This engineering solution enables both explosive acceleration and impressive range.

Porsche's chassis engineering excellence is evident in every aspect of the Taycan's dynamics. The adaptive air suspension, rear-axle steering, and Porsche Dynamic Chassis Control work in harmony to deliver the precise, confidence-inspiring handling that defines every Porsche.

The interior combines traditional Porsche design elements with advanced technology. The curved 16.8-inch digital instrument cluster and 10.9-inch central display create a driver-focused cockpit. An optional passenger display allows the front passenger to monitor vehicle data and control media functions.`,
    condition: "New",
    year: 2024,
    mileage: 345,
    exteriorColor: "Frozen Blue Metallic",
    interiorColor: "Black / Lime Green",
    vin: generateVIN(),
    price: 185000,
    discountedPrice: 176500,
    images: gallery(15),
    specifications: {
      engine: "Dual Permanent-Magnet Synchronous Motors",
      power: "750 hp (Overboost with Launch Control)",
      torque: "774 lb-ft",
      acceleration: "0-60 mph in 2.6 seconds",
      topSpeed: "162 mph",
      transmission: "2-Speed Rear / Single-Speed Front",
      drivetrain: "All-Wheel Drive",
      fuelType: "Electric (222 mi range)",
      seating: 4,
      cargo: "13.8 cu ft",
    },
    features: [
      "800-Volt Architecture",
      "Two-Speed Rear Transmission",
      "Rear-Axle Steering",
      "Porsche Dynamic Chassis Control",
      "Adaptive Air Suspension",
      "Launch Control",
      "16.8-inch Curved Display",
      "Burmester High-End Surround Sound",
      "Porsche InnoDrive",
      "Night Vision Assist",
      "Passenger Display",
      "Porsche Communication Management",
    ],
    highlights: [
      "First Electric Porsche Sports Car",
      "Unique Two-Speed Rear Transmission",
      "800-Volt Ultra-Fast Charging",
      "Repeatable Performance",
    ],
  },
  {
    id: "19",
    name: "Mercedes-Maybach S 680",
    brand: "Mercedes-Maybach",
    category: "Sedan",
    tagline: "The Absolute Zenith of Luxury",
    description:
      "The absolute zenith of automotive luxury. A handcrafted twin-turbo V12, rear-seat first-class experience, and technology that anticipates your every desire before you think it.",
    fullDescription: `The Mercedes-Maybach S 680 represents the ultimate expression of automotive luxury, combining the technological excellence of Mercedes-Benz with the bespoke craftsmanship that has defined Maybach for over a century. This flagship sedan is designed primarily for those who are driven.

The S 680 is powered by a hand-assembled 6.0-liter twin-turbocharged V12 engine producing 621 horsepower and 738 lb-ft of torque. Each engine bears a plaque signed by its creator, a testament to the craftsmanship involved. The 9G-TRONIC automatic transmission shifts imperceptibly, ensuring the utmost refinement.

The rear compartment is where the Maybach S 680 truly excels. Executive seats recline to 43.5 degrees while providing massage functions, ventilation, and adjustable calf rests. Individual climate control, tablet controllers for all vehicle functions, and an optional champagne cooler create a first-class experience on wheels.

Mercedes-Maybach's attention to detail extends to every surface. The wood trim requires 33 days and over 100 individual processes to create. The unique "flowing lines" pattern on the seats requires specialized embroidery machines that operate with micron-level precision.

Advanced technology operates invisibly to enhance comfort and safety. The Magic Body Control suspension uses cameras to read the road ahead and adjust the dampers preemptively. The Burmester high-end 4D surround sound system with resonators in the seats creates an immersive audio experience.`,
    condition: "New",
    year: 2024,
    mileage: 456,
    exteriorColor: "Two-Tone Obsidian Black / Rubellite Red",
    interiorColor: "Macchiato Beige / Yacht Blue",
    vin: generateVIN(),
    price: 229000,
    discountedPrice: 219500,
    images: gallery(17),
    specifications: {
      engine: "6.0L Twin-Turbocharged V12",
      power: "621 hp @ 4,800 rpm",
      torque: "738 lb-ft @ 2,000-4,000 rpm",
      acceleration: "0-60 mph in 4.4 seconds",
      topSpeed: "155 mph (electronically limited)",
      transmission: "9-Speed Automatic",
      drivetrain: "All-Wheel Drive (4MATIC+)",
      fuelType: "Premium Gasoline",
      seating: 4,
      cargo: "12.4 cu ft",
    },
    features: [
      "Magic Body Control",
      "Executive Rear Seats with 43.5° Recline",
      "Burmester High-End 4D Surround Sound",
      "MBUX Rear Tablet Remote",
      "Refrigerator with Silver Champagne Flutes",
      "Executive Table",
      "Chauffeur Package",
      "Night Series Design Elements",
      "Rear Privacy Curtains",
      "Hot Stone Massage Function",
      "Ionized Air Filtration",
      "Automatic Comfort Doors",
    ],
    highlights: [
      "Hand-Assembled V12 with Builder's Signature",
      "33-Day Wood Trim Creation Process",
      "43.5-Degree Rear Seat Recline",
      "Two-Tone Exterior Paint",
    ],
  },
  {
    id: "20",
    name: "BMW iX M60",
    brand: "BMW",
    category: "Electric",
    tagline: "The Future of Driving Pleasure",
    description:
      "The future of luxury electric mobility. Dual motors with 610 hp, cutting-edge technology wrapped in sustainable materials, and a range that makes every journey effortless.",
    fullDescription: `The BMW iX M60 represents BMW's vision of sustainable luxury for the future. This flagship electric SUV combines M Performance DNA with cutting-edge electric technology, proving that the transition to electric mobility can enhance rather than compromise the driving experience.

The iX M60 features a dual-motor setup producing up to 610 horsepower in Sport Mode, with overboost capability during launches. This enables acceleration from 0 to 60 mph in just 3.6 seconds – remarkable performance for a vehicle of this size. The 111.5 kWh battery provides over 280 miles of range.

BMW's fifth-generation eDrive technology powers the iX M60, incorporating improvements in motor efficiency, battery management, and thermal control. The intelligent all-wheel-drive system continuously optimizes power distribution between the axles for maximum traction and efficiency.

The interior represents a radical departure for BMW, featuring sustainable materials throughout. The leather is naturally tanned using olive leaf extract, while recycled plastics and FSC-certified wood create an environmentally conscious luxury experience. The curved BMW iDrive display combines the 12.3-inch digital cluster with a 14.9-inch central touchscreen.

The iX M60's carbon fiber chassis structure, combined with double wishbones at the front and a five-link rear axle, delivers surprisingly engaging dynamics for an electric SUV. Available adaptive M suspension with active roll stabilization further enhances the driving experience.`,
    condition: "New",
    year: 2024,
    mileage: 678,
    exteriorColor: "Aventurin Red Metallic",
    interiorColor: "Castanea Leather / Natural Wool",
    vin: generateVIN(),
    price: 108900,
    discountedPrice: 99900,
    images: gallery(19),
    specifications: {
      engine: "Dual Electric Motors",
      power: "610 hp (Sport Mode)",
      torque: "749 lb-ft",
      acceleration: "0-60 mph in 3.6 seconds",
      topSpeed: "155 mph (electronically limited)",
      transmission: "Single-Speed Direct Drive",
      drivetrain: "All-Wheel Drive",
      fuelType: "Electric (280+ mi range)",
      seating: 5,
      cargo: "35.5 cu ft",
    },
    features: [
      "111.5 kWh Battery Pack",
      "BMW Curved Display",
      "5G Connectivity",
      "BMW Intelligent Personal Assistant",
      "Bowers & Wilkins Diamond Surround Sound",
      "Sky Lounge Panoramic Roof",
      "Driving Assistant Professional",
      "Active Roll Stabilization",
      "DC Fast Charging (200 kW)",
      "Sustainable Interior Materials",
      "Gesture Control",
      "M Sport Brakes",
    ],
    highlights: [
      "Carbon Fiber Core Structure",
      "Sustainable Luxury Materials",
      "Over 600 Horsepower",
      "200 kW DC Fast Charging",
    ],
  },
  {
    id: "21",
    name: "Lamborghini Urus Performante",
    brand: "Lamborghini",
    category: "SUV",
    tagline: "The Super SUV, Evolved",
    description:
      "The world's first Super SUV, evolved. A 4.0L twin-turbo V8 with 657 hp, aggressive styling, and race-inspired engineering make this the apex predator of luxury SUVs.",
    fullDescription: `The Lamborghini Urus Performante takes the Super SUV concept that Lamborghini pioneered and elevates it to new extremes. Lighter, more powerful, and more focused than the standard Urus, the Performante delivers supercar performance with real-world practicality.

The 4.0-liter twin-turbocharged V8 engine has been enhanced to produce 657 horsepower and 627 lb-ft of torque – increases of 16 hp and 37 lb-ft over the standard Urus. Combined with a weight reduction of 47 kg through extensive use of carbon fiber, the Performante accelerates from 0 to 60 mph in 3.3 seconds.

The Performante features an extensively revised chassis with new springs, dampers, and anti-roll bars. The rear-wheel steering system has been retuned for greater agility, and new Torque Rear technology enhances the vehicle's yaw rate during dynamic driving. The result is an SUV that handles like a sports car.

Aggressive aerodynamic enhancements differentiate the Performante visually while providing functional benefits. The new front bumper increases airflow to the cooling system, while the redesigned rear diffuser generates additional downforce. A new integrated rear spoiler completes the athletic look.

Inside, the Performante features lightweight sports seats, Alcantara trim, and exposed carbon fiber elements. The standard specification is deliberately focused on weight savings, though Lamborghini's Ad Personam program allows for extensive personalization.`,
    condition: "New",
    year: 2024,
    mileage: 432,
    exteriorColor: "Verde Scandal",
    interiorColor: "Nero Ade Sportivo",
    vin: generateVIN(),
    price: 260676,
    discountedPrice: 248900,
    images: gallery(0),
    specifications: {
      engine: "4.0L Twin-Turbocharged V8",
      power: "657 hp @ 6,000 rpm",
      torque: "627 lb-ft @ 2,300-4,500 rpm",
      acceleration: "0-60 mph in 3.3 seconds",
      topSpeed: "190 mph",
      transmission: "8-Speed Automatic",
      drivetrain: "All-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 5,
      cargo: "21.8 cu ft",
    },
    features: [
      "Torque Rear Torque Vectoring",
      "Rear-Wheel Steering",
      "Active Roll Stabilization",
      "Adaptive Air Suspension",
      "Carbon Ceramic Brakes",
      "Carbon Fiber Roof",
      "Carbon Fiber Hood",
      "Performance Sport Seats",
      "ANIMA Drive Mode Selector",
      "Rally Mode",
      "Bang & Olufsen 3D Audio",
      "Lamborghini Connect",
    ],
    highlights: [
      "47 kg Lighter Than Standard Urus",
      "Pikes Peak Hill Climb Record Holder",
      "Torque Rear Technology",
      "Rally-Inspired Driving Mode",
    ],
  },
  {
    id: "22",
    name: "Ferrari Roma Spider",
    brand: "Ferrari",
    category: "Convertible",
    tagline: "La Dolce Vita, Reimagined",
    description:
      "La Dolce Vita, reimagined. The elegant lines of the Roma meet open-top freedom with a twin-turbo V8 producing 612 hp and Ferrari's most refined grand touring experience.",
    fullDescription: `The Ferrari Roma Spider captures the spirit of 1960s Italian glamour while incorporating Ferrari's most advanced technology. This elegant convertible represents Ferrari's vision of a front-engine grand tourer designed for open-air enjoyment.

The retractable soft top can be operated in just 13.5 seconds at speeds up to 37 mph. This rapid operation allows spontaneous enjoyment of open-air driving, whether cruising along a coastal road or waiting at a traffic light as the weather clears.

The Roma Spider is powered by Ferrari's multi-award-winning 3.9-liter twin-turbocharged V8 engine, producing 612 horsepower and 561 lb-ft of torque. The 8-speed dual-clutch transmission delivers seamless shifts, enabling acceleration from 0 to 60 mph in 3.4 seconds and a top speed of 198 mph.

Ferrari's engineers ensured that removing the fixed roof doesn't compromise the driving experience. Extensive work on chassis stiffness, aerodynamics, and acoustic management means the Roma Spider delivers the same precise handling and refined character as the coupé.

The interior features Ferrari's dual-cockpit design philosophy, with driver and passenger surrounded by elegant leather and modern technology. The 16-inch digital instrument cluster and 8.4-inch passenger display create an immersive experience, while the 7-inch rear screen provides control of navigation and media for the passenger.`,
    condition: "New",
    year: 2024,
    mileage: 198,
    exteriorColor: "Blu Corsa",
    interiorColor: "Cuoio / Nero",
    vin: generateVIN(),
    price: 272000,
    discountedPrice: 259900,
    images: gallery(5),
    specifications: {
      engine: "3.9L Twin-Turbocharged V8",
      power: "612 hp @ 5,750-7,500 rpm",
      torque: "561 lb-ft @ 3,000-5,750 rpm",
      acceleration: "0-60 mph in 3.4 seconds",
      topSpeed: "198 mph",
      transmission: "8-Speed DCT",
      drivetrain: "Rear-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 2,
    },
    features: [
      "Retractable Soft Top (13.5 seconds)",
      "Dual-Cockpit Interior Design",
      "16-inch Digital Display",
      "8.4-inch Passenger Display",
      "7-inch Rear Screen",
      "Manettino Driving Mode Selector",
      "Side Slip Control 6.0",
      "Ferrari Virtual Short Wheelbase 3.0",
      "JBL Professional Audio",
      "Advanced Driver Assistance Systems",
      "7-Year Maintenance Program",
      "Ferrari Portofino-Derived Platform",
    ],
    highlights: [
      "Ferrari's Most Elegant Current Design",
      "13.5-Second Roof Operation",
      "Award-Winning V8 Engine",
      "Dual-Cockpit Interior Philosophy",
    ],
  },
  {
    id: "23",
    name: "Audi R8 V10 Performance",
    brand: "Audi",
    category: "Sports",
    tagline: "The Naturally Aspirated Legend",
    description:
      "A naturally aspirated 5.2L V10 masterpiece producing 602 hp at a soul-stirring 8,700 RPM. Quattro all-wheel drive with rear-biased torque for pure driving engagement.",
    fullDescription: `The Audi R8 V10 Performance stands as one of the last naturally aspirated supercars in production, and its 5.2-liter V10 engine represents the pinnacle of this fading art form. This final-generation R8 delivers an experience that future electric vehicles may never replicate.

The V10 engine, shared with Lamborghini and derived from racing technology, produces 602 horsepower at 8,100 rpm and can rev to an intoxicating 8,700 rpm. The dry-sump lubrication system enables aggressive cornering without oil starvation, while the direct fuel injection ensures optimal power delivery.

Quattro all-wheel drive with rear-biased torque distribution provides exceptional traction while maintaining engaging handling characteristics. Under normal conditions, up to 100% of power goes to the rear wheels, with the front axle engaging seamlessly when additional traction is required.

The R8's construction combines an aluminum space frame with carbon fiber reinforced polymer components, creating an exceptionally rigid yet lightweight structure. The mid-engine layout provides optimal weight distribution for predictable, balanced handling.

Inside, the R8 features Audi's Virtual Cockpit fully digital instrument cluster, displaying navigation, media, and vehicle data in the driver's direct line of sight. The optional laser headlights provide nearly twice the illumination range of LED units, representing the cutting edge of automotive lighting technology.`,
    condition: "Used",
    year: 2022,
    mileage: 7890,
    exteriorColor: "Kemora Grey Metallic",
    interiorColor: "Express Red Fine Nappa Leather",
    vin: generateVIN(),
    price: 196700,
    discountedPrice: 174900,
    images: gallery(6),
    specifications: {
      engine: "5.2L Naturally Aspirated V10",
      power: "602 hp @ 8,100 rpm",
      torque: "413 lb-ft @ 6,500 rpm",
      acceleration: "0-60 mph in 3.1 seconds",
      topSpeed: "205 mph",
      transmission: "7-Speed S tronic Dual-Clutch",
      drivetrain: "quattro All-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 2,
      cargo: "4.6 cu ft",
    },
    features: [
      "Audi Virtual Cockpit",
      "Sport Exhaust System",
      "Laser Headlights",
      "Magnetic Ride Adaptive Suspension",
      "Carbon Ceramic Brakes",
      "Fine Nappa Leather Interior",
      "Bang & Olufsen Sound System",
      "Carbon Fiber Side Blades",
      "Audi Drive Select",
      "Performance Driving Mode",
      "Rear View Camera",
      "Diamond-Stitched Seats",
    ],
    highlights: [
      "One of the Last Naturally Aspirated Supercars",
      "8,700 RPM Redline",
      "Rear-Biased quattro System",
      "Shared DNA with Lamborghini Huracán",
    ],
  },
  {
    id: "24",
    name: "Tesla Cybertruck",
    brand: "Tesla",
    category: "Electric",
    tagline: "Radically Different by Design",
    description:
      "Radically reimagining what a truck can be. Ultra-hard stainless steel exoskeleton, tri-motor AWD with 845 hp, and adaptive air suspension for supreme versatility.",
    fullDescription: `The Tesla Cybertruck represents the most radical reimagining of the pickup truck in decades. Its polarizing design conceals engineering innovation that delivers capability exceeding traditional trucks while producing zero emissions.

The tri-motor Cyberbeast variant produces 845 horsepower, enabling acceleration from 0 to 60 mph in a supercar-matching 2.6 seconds – unprecedented for a pickup truck. The 123 kWh battery provides over 320 miles of range, while 11,000 lb of towing capacity handles serious hauling duties.

The stainless steel exoskeleton serves as the vehicle's structure, eliminating the need for traditional body panels and paint. This 30X cold-rolled stainless steel is ultra-hard and dent-resistant, while the Tesla armor glass provides unprecedented window protection.

The Cybertruck's adaptive air suspension provides 17 inches of total travel, enabling both a low stance for highway efficiency and high ground clearance for off-road adventures. Four-wheel steering reduces the turning radius while improving stability at highway speeds.

Inside, the Cybertruck features a 18.5-inch central touchscreen and a 9.4-inch rear passenger display. The 6-foot bed features 1,800 watts of power outlets, integrated lighting, and a versatile tonneau cover that can support the weight of an adult standing on it.`,
    condition: "New",
    year: 2024,
    mileage: 234,
    exteriorColor: "Ultra Metal",
    interiorColor: "Black / White Premium Interior",
    vin: generateVIN(),
    price: 99990,
    discountedPrice: 96490,
    images: gallery(10),
    specifications: {
      engine: "Tri Motor All-Electric",
      power: "845 hp Combined",
      torque: "Instant Electric Torque",
      acceleration: "0-60 mph in 2.6 seconds",
      topSpeed: "130 mph",
      transmission: "Single-Speed Direct Drive",
      drivetrain: "All-Wheel Drive",
      fuelType: "Electric (320+ mi range)",
      seating: 5,
      cargo: "72 cu ft (with bed)",
    },
    features: [
      "30X Cold-Rolled Stainless Steel Exoskeleton",
      "Tesla Armor Glass",
      "Adaptive Air Suspension",
      "Four-Wheel Steering",
      "18.5-inch Central Display",
      "Full Self-Driving Capability",
      "Powered Tonneau Cover",
      "1,800W Bed Outlets",
      "Front Trunk (200 lb capacity)",
      "Tow Mode with Range Calculator",
      "Camp Mode",
      "Off-Road Mode",
    ],
    highlights: [
      "Ultra-Hard Stainless Steel Body",
      "0-60 in 2.6 Seconds",
      "11,000 lb Towing Capacity",
      "17 Inches of Suspension Travel",
    ],
  },
  {
    id: "25",
    name: "Cadillac Escalade-V",
    brand: "Cadillac",
    category: "SUV",
    tagline: "American Luxury Taken to Extremes",
    description:
      "American luxury taken to the extreme. A supercharged 6.2L V8 with 682 hp transforms this iconic luxury SUV into the most powerful full-size SUV ever produced.",
    fullDescription: `The Cadillac Escalade-V represents the ultimate expression of American luxury and performance. As the most powerful full-size SUV ever produced by a major manufacturer, it combines the Escalade's iconic presence with genuine high-performance capability.

The heart of the Escalade-V is GM's LT4 supercharged 6.2-liter V8 engine, producing 682 horsepower and 653 lb-ft of torque. This hand-assembled powerplant launches the nearly 6,500-pound Escalade-V from 0 to 60 mph in just 4.4 seconds – performance that rivals many sports sedans.

The V-Series performance treatment includes Magnetic Ride Control 4.0 with unique V-Series tuning, providing exceptional body control without sacrificing ride comfort. Air springs maintain the Escalade's signature smooth ride while enabling adjustable ride height for different conditions.

An electronic limited-slip differential with V-Mode tuning enhances cornering capability, while the performance-tuned steering provides excellent feedback for a vehicle of this size. The Brembo brake system with 6-piston front and 4-piston rear calipers ensures confident stopping power.

Inside, the Escalade-V features a stunning 38-inch curved OLED display spanning the dashboard. AKG Studio Reference audio with 36 speakers and 3D surround sound creates an immersive audio experience. Semi-aniline leather with V-Series specific detailing adorns every surface.`,
    condition: "New",
    year: 2024,
    mileage: 567,
    exteriorColor: "Black Raven",
    interiorColor: "Jet Black with Jet Black Accents",
    vin: generateVIN(),
    price: 149990,
    discountedPrice: 142900,
    images: gallery(14),
    specifications: {
      engine: "6.2L Supercharged V8 (LT4)",
      power: "682 hp @ 6,000 rpm",
      torque: "653 lb-ft @ 4,400 rpm",
      acceleration: "0-60 mph in 4.4 seconds",
      topSpeed: "200 mph (de-limited)",
      transmission: "10-Speed Automatic",
      drivetrain: "All-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 7,
      cargo: "25.5 cu ft",
    },
    features: [
      "Magnetic Ride Control 4.0",
      "Electronic Limited-Slip Differential",
      "38-inch Curved OLED Display",
      "AKG Studio Reference Audio (36 Speakers)",
      "Super Cruise Driver Assistance",
      "Air Ride Adaptive Suspension",
      "Brembo Performance Brakes",
      "V-Performance Mode",
      "Night Vision",
      "Rear Camera Mirror",
      "Massaging Front Seats",
      "Second-Row Captain's Chairs",
    ],
    highlights: [
      "Most Powerful Full-Size SUV Ever",
      "682 Horsepower Supercharged V8",
      "38-Inch Curved OLED Display",
      "Hand-Assembled Engine",
    ],
  },
  {
    id: "26",
    name: "Nissan GT-R Nismo",
    brand: "Nissan",
    category: "Sports",
    tagline: "Godzilla, The Ultimate Form",
    description:
      "Godzilla, the ultimate iteration. Hand-assembled twin-turbo V6 with 600 hp, NISMO-tuned suspension, and aerodynamics born from decades of motorsport dominance at every level.",
    fullDescription: `The Nissan GT-R NISMO represents the ultimate iteration of "Godzilla" – Japan's legendary supercar killer. This special variant receives the full treatment from NISMO, Nissan's motorsport division, creating a machine focused entirely on maximum performance.

The VR38DETT 3.8-liter twin-turbocharged V6 engine is hand-assembled by specialized Takumi craftsmen who sign each engine they create. In NISMO specification, this powerplant produces 600 horsepower and 481 lb-ft of torque, channeled through a sophisticated all-wheel-drive system capable of adjusting torque split in milliseconds.

The GT-R NISMO features an extensive aerodynamic package developed through Super GT racing. The carbon fiber front bumper with dedicated canards, carbon fiber rear wing, and revised rear diffuser generate significant downforce while maintaining the GT-R's exceptional stability at speed.

The suspension has been completely revised with NISMO-specific settings. The Bilstein DampTronic dampers feature unique valving, while the springs are 5% stiffer at the front and 10% stiffer at the rear. The result is dramatically improved turn-in response and mid-corner adjustability.

Inside, the GT-R NISMO features Recaro bucket seats with red accents, an Alcantara-wrapped steering wheel, and a carbon fiber center console. The functional focus of the interior reflects the car's purpose as a tool for driving excellence.`,
    condition: "Used",
    year: 2021,
    mileage: 8765,
    exteriorColor: "Super Silver",
    interiorColor: "Black / Red Alcantara",
    vin: generateVIN(),
    price: 212435,
    discountedPrice: 189900,
    images: gallery(2),
    specifications: {
      engine: "3.8L Twin-Turbocharged V6 (VR38DETT)",
      power: "600 hp @ 6,800 rpm",
      torque: "481 lb-ft @ 3,600-5,600 rpm",
      acceleration: "0-60 mph in 2.9 seconds",
      topSpeed: "205 mph",
      transmission: "6-Speed Dual-Clutch",
      drivetrain: "ATTESA E-TS All-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 4,
      cargo: "8.8 cu ft",
    },
    features: [
      "Hand-Assembled Engine by Takumi",
      "Carbon Fiber Aerodynamic Package",
      "NISMO Bilstein DampTronic Suspension",
      "Carbon Ceramic Brakes",
      "Recaro Bucket Seats",
      "NISMO-Specific Turbos",
      "Rays Forged Aluminum Wheels",
      "Dunlop SP Sport Maxx GT 600 Tires",
      "NISMO Titanium Exhaust",
      "Bose Premium Audio",
      "Alcantara Interior Trim",
      "NISMO Tachometer with Shift Indicator",
    ],
    highlights: [
      "Hand-Assembled by Takumi Engine Builders",
      "Super GT-Derived Aerodynamics",
      "NISMO Racing Heritage",
      "ATTESA E-TS Pro AWD System",
    ],
  },
  {
    id: "27",
    name: "Porsche Cayenne Turbo GT",
    brand: "Porsche",
    category: "SUV",
    tagline: "The Sports Car of SUVs",
    description:
      "The sports car of SUVs. A twin-turbo V8 with 631 hp, active aerodynamics, and Porsche's motorsport DNA deliver lap times that embarrass many dedicated sports cars.",
    fullDescription: `The Porsche Cayenne Turbo GT is the most extreme Cayenne ever created, designed specifically to set records on racetracks around the world. This high-performance SUV embodies Porsche's belief that even practical vehicles should deliver exceptional driving experiences.

The 4.0-liter twin-turbocharged V8 engine has been extensively revised, producing 631 horsepower and 626 lb-ft of torque. New turbochargers, enhanced cooling, and unique calibration create an engine that delivers supercar-level power with remarkable linear delivery.

The Turbo GT is 17 mm lower than the standard Cayenne Turbo, with a wider track and model-specific three-chamber air suspension tuning. The rear-axle steering, active roll stabilization, and carbon ceramic brakes have been specifically calibrated for track performance.

Active aerodynamics include a larger front splitter and a dramatically increased rear wing that generates substantial downforce at speed. The Turbo GT holds the SUV lap record at the Nürburgring Nordschleife, demonstrating its exceptional performance credentials.

Inside, the Turbo GT features 8-way sport seats with GT-specific upholstery, an Alcantara-wrapped steering wheel with yellow center marker, and unique carbon fiber trim. The emphasis on lightweight materials throughout supports the vehicle's performance mission.`,
    condition: "New",
    year: 2024,
    mileage: 345,
    exteriorColor: "Arctic Grey",
    interiorColor: "Black / Neodyme Leather",
    vin: generateVIN(),
    price: 186800,
    discountedPrice: 179900,
    images: gallery(1),
    specifications: {
      engine: "4.0L Twin-Turbocharged V8",
      power: "631 hp @ 6,000 rpm",
      torque: "626 lb-ft @ 2,300-4,500 rpm",
      acceleration: "0-60 mph in 3.1 seconds",
      topSpeed: "186 mph",
      transmission: "8-Speed Tiptronic S",
      drivetrain: "All-Wheel Drive",
      fuelType: "Premium Gasoline",
      seating: 4,
      cargo: "22.7 cu ft",
    },
    features: [
      "Porsche Active Suspension Management",
      "Rear-Axle Steering",
      "Porsche Dynamic Chassis Control Sport",
      "Porsche Ceramic Composite Brakes",
      "Active Roof Spoiler",
      "Titanium Sports Exhaust",
      "22-inch GT Design Wheels",
      "Sport Chrono Package",
      "8-Way Sport Seats Plus",
      "Alcantara Interior",
      "Bose Surround Sound",
      "Porsche InnoDrive",
    ],
    highlights: [
      "Nürburgring Nordschleife SUV Record Holder",
      "Most Powerful Cayenne Ever",
      "Titanium Exhaust System",
      "Track-Focused Aerodynamics",
    ],
  },
  {
    id: "28",
    name: "McLaren Artura",
    brand: "McLaren",
    category: "Sports",
    tagline: "A New Era of McLaren",
    description:
      "McLaren's new-era hybrid supercar. A twin-turbo V6 paired with an E-motor delivers 671 hp through a revolutionary carbon fiber architecture weighing just 1,395 kg.",
    fullDescription: `The McLaren Artura represents a transformative moment for McLaren, introducing an all-new hybrid powertrain and platform while maintaining the purity and driver engagement that define the brand. This is McLaren's vision of the next generation supercar.

The Artura introduces an entirely new 3.0-liter twin-turbocharged V6 engine, the first McLaren has designed from scratch for hybrid applications. Combined with an axial-flux electric motor, the system produces 671 horsepower and 531 lb-ft of torque. The electric motor fills in torque during turbo lag, providing instant response.

The all-new McLaren Carbon Lightweight Architecture (MCLA) is 10% lighter than the Monocage II structure, while incorporating the electric motor and battery into the structural design. The result is an astonishingly light curb weight of just 1,395 kg – among the lightest in the hybrid supercar segment.

The Artura features an all-new E-diff integrated into a new 8-speed seamless-shift gearbox, the first automatic transmission from McLaren. The system provides the driving engagement of a dual-clutch with the refinement of a torque converter automatic.

The interior continues McLaren's driver-focused philosophy with a new infotainment system featuring a portrait-oriented 8-inch screen and electronic instrument cluster. The cabin is minimalist yet luxurious, with extensive use of Alcantara and optional premium leather.`,
    condition: "New",
    year: 2024,
    mileage: 456,
    exteriorColor: "Ember Orange",
    interiorColor: "Jet Black / McLaren Orange",
    vin: generateVIN(),
    price: 237500,
    discountedPrice: 224900,
    images: gallery(9),
    specifications: {
      engine: "3.0L Twin-Turbocharged V6 + E-Motor",
      power: "671 hp Combined",
      torque: "531 lb-ft Combined",
      acceleration: "0-60 mph in 3.0 seconds",
      topSpeed: "205 mph",
      transmission: "8-Speed Seamless Shift Automatic",
      drivetrain: "Rear-Wheel Drive",
      fuelType: "Plug-in Hybrid (19 mi electric range)",
      seating: 2,
    },
    features: [
      "McLaren Carbon Lightweight Architecture",
      "Axial-Flux Electric Motor",
      "E-Differential",
      "Proactive Damping Control",
      "Variable Drift Control",
      "Dihedral Doors",
      "8-inch Portrait Touchscreen",
      "Active Dynamics Panel",
      "Track Telemetry",
      "Bowers & Wilkins Audio",
      "Vehicle Lift System",
      "McLaren Track Pace App",
    ],
    highlights: [
      "All-New Platform and Powertrain",
      "Among Lightest Hybrid Supercars",
      "First McLaren Automatic Transmission",
      "Axial-Flux Electric Motor Technology",
    ],
  },
  {
    id: "29",
    name: "Lucid Air Sapphire",
    brand: "Lucid",
    category: "Electric",
    tagline: "The World's Most Powerful Sedan",
    description:
      "The world's most powerful electric sedan. Three motors produce 1,234 hp with a quarter-mile time under 9 seconds, redefining what's possible in electric luxury performance.",
    fullDescription: `The Lucid Air Sapphire represents the absolute pinnacle of electric vehicle technology, combining unprecedented performance with luxury sedan practicality. With over 1,200 horsepower, it stands as the most powerful production sedan ever made, regardless of powertrain.

Three electric motors – one at the front and two at the rear – produce a combined 1,234 horsepower and an estimated 1,430 lb-ft of torque. This enables the Air Sapphire to accelerate from 0 to 60 mph in under 2 seconds and complete the quarter-mile in under 9 seconds – figures that rival dedicated hypercars.

The dual-motor rear drive unit is all-new for Sapphire, featuring carbon-fiber motor sleeves that enable higher rotational speeds. The torque-vectoring capability of the independent rear motors provides exceptional handling dynamics and precision.

Despite its extreme performance, the Air Sapphire maintains impressive range thanks to Lucid's industry-leading efficiency. The 118 kWh battery provides over 400 miles of range, while 924-volt architecture enables exceptionally fast charging speeds.

The interior features unique Sapphire-exclusive trim, including Nappa leather with blue contrast stitching, carbon fiber with blue accent threads, and unique digital displays. The 34-inch curved Glass Cockpit display provides an immersive driver experience.`,
    condition: "New",
    year: 2024,
    mileage: 234,
    exteriorColor: "Sapphire Blue",
    interiorColor: "Sapphire Black Mojave",
    vin: generateVIN(),
    price: 249000,
    discountedPrice: 239900,
    images: gallery(4),
    specifications: {
      engine: "Tri Motor All-Electric",
      power: "1,234 hp Combined",
      torque: "1,430 lb-ft (estimated)",
      acceleration: "0-60 mph in under 2 seconds",
      topSpeed: "205+ mph",
      transmission: "Single-Speed Direct Drive",
      drivetrain: "All-Wheel Drive",
      fuelType: "Electric (400+ mi range)",
      seating: 5,
      cargo: "18.3 cu ft",
    },
    features: [
      "Tri-Motor Powertrain",
      "924-Volt Electrical Architecture",
      "Torque-Vectoring Rear Drive Unit",
      "Carbon-Fiber Motor Sleeves",
      "34-inch Glass Cockpit Display",
      "21-Speaker Surreal Sound System",
      "Semi-Autonomous Driving",
      "Sapphire-Exclusive Interior",
      "Pilot Panel Display",
      "Glass Canopy Roof",
      "DreamDrive Pro",
      "Track Mode",
    ],
    highlights: [
      "Most Powerful Production Sedan Ever",
      "Sub-9-Second Quarter Mile",
      "Industry-Leading Efficiency",
      "924-Volt Fast Charging",
    ],
  },
  {
    id: "30",
    name: "Rimac Nevera",
    brand: "Rimac",
    category: "Hypercar",
    tagline: "The Electric Hypercar Revolution",
    description:
      "The electric hypercar that changed everything. Four motors deliver 1,914 hp with 2,360 Nm of torque, hand-built in Croatia as a testament to human innovation.",
    fullDescription: `The Rimac Nevera represents the ultimate expression of electric hypercar performance, proving conclusively that the future of extreme performance is electric. Named after the Croatian word for a violent Mediterranean storm, the Nevera delivers force of nature performance from its four electric motors.

The quad-motor powertrain produces an astounding 1,914 horsepower and 2,360 Nm (1,740 lb-ft) of torque. This enables acceleration from 0 to 60 mph in 1.85 seconds, 0 to 100 mph in 4.3 seconds, and a top speed of 258 mph. These are figures that establish new benchmarks for production automobiles.

Each wheel is driven by its own electric motor, enabling torque vectoring of unprecedented sophistication. The Rimac All-Wheel Torque Vectoring 2 system can adjust torque to each wheel 100 times per second, providing both exceptional performance and remarkable stability.

The 120 kWh battery pack provides a WLTP range of 550 km (340 miles), while 500 kW DC fast charging capability enables rapid replenishment. The battery and motors incorporate extensive active cooling to maintain performance during sustained high-performance driving.

Hand-built in Croatia by a team of passionate engineers, each Nevera requires 2,000 hours of assembly. The carbon fiber monocoque, bonded aluminum structures, and carbon fiber body panels create a curb weight of just 2,150 kg – exceptional for an electric hypercar.`,
    condition: "New",
    year: 2024,
    mileage: 89,
    exteriorColor: "California Copper",
    interiorColor: "Nappa Black / Copper Stitching",
    vin: generateVIN(),
    price: 2400000,
    discountedPrice: 2290000,
    images: gallery(8),
    specifications: {
      engine: "Quad Electric Motors",
      power: "1,914 hp Combined",
      torque: "1,740 lb-ft Combined",
      acceleration: "0-60 mph in 1.85 seconds",
      topSpeed: "258 mph",
      transmission: "Single-Speed per Motor",
      drivetrain: "All-Wheel Drive",
      fuelType: "Electric (340 mi range)",
      seating: 2,
    },
    features: [
      "Quad Motor All-Wheel Torque Vectoring 2",
      "120 kWh Battery Pack",
      "500 kW DC Fast Charging",
      "Carbon Fiber Monocoque",
      "Active Aerodynamics",
      "Face Recognition Entry",
      "Drift Mode",
      "Track Mode",
      "AI-Powered Driver Coach",
      "Alcantara / Nappa Leather Interior",
      "13-inch Touchscreen",
      "2,000 Hours Hand Assembly",
    ],
    highlights: [
      "World's Fastest Production Car to 60 mph",
      "258 mph Top Speed",
      "Per-Wheel Torque Vectoring",
      "Hand-Built in Croatia",
    ],
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

export function getCarsByCategory(category: string) {
  return cars.filter((car) => car.category === category);
}

export function getRelatedCars(carId: string, limit = 3): Car[] {
  const car = getCarById(carId);
  if (!car) return [];
  
  return cars
    .filter((c) => c.id !== carId && (c.category === car.category || c.brand === car.brand))
    .slice(0, limit);
}