// data.js

// ==========================================
// 1. STANDARD SERVICE PAGES (List Layout)
// ==========================================
export const servicePagesData = {
  kitchen: {
    title: "Kitchen Cleaning",
    rating: "4.81",
    bookings: "1.4 M bookings",
    searchPlaceholder: "Search in Kitchen Cleaning",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
    heroTitle: "Some stains need more than effort.",
    heroSubtitle: "They need professional care.",
    topNavCategories: [
      { name: "Discounted pack", icon: "https://cdn-icons-png.flaticon.com/512/879/879757.png" },
      { name: "Chimney cleaning", icon: "https://cdn-icons-png.flaticon.com/512/2822/2822081.png" },
      { name: "Complete kitchen", icon: "https://cdn-icons-png.flaticon.com/512/2735/2735398.png" },
      { name: "Appliance cleaning", icon: "https://cdn-icons-png.flaticon.com/512/1301/1301646.png" },
      { name: "Cabinets & tiles", icon: "https://cdn-icons-png.flaticon.com/512/2735/2735398.png" },
      { name: "Mini services", icon: "https://cdn-icons-png.flaticon.com/512/2822/2822081.png" },
    ],
    sections: [
      {
        title: "Discounted pack",
        items: [
          {
            title: "Chimney cleaning: 2 visits in 6 months",
            rating: "4.80", reviews: "25K", price: "359", originalPrice: "399", duration: "per visit",
            discount: "15% OFF", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80",
            details: ["Removes grease and oil stains using steam machine.", "Includes wiping of interiors to remove burnt stains.", "Excludes motor cleaning & repair."]
          },
          {
            title: "2 visits (Weekdays only): Chimney cleaning",
            rating: "4.81", reviews: "12K", price: "319", originalPrice: "399", duration: "per visit", discount: "25% OFF",
            details: ["Standard weekday service.", "Excludes motor cleaning & repair."]
          }
        ]
      },
      {
        title: "Appliance cleaning",
        banner: {
          image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?w=800&q=80",
          title: "Deep Appliance Care"
        },
        items: [
          {
            title: "Fridge cleaning",
            rating: "4.81", reviews: "20K", price: "399", image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&q=80",
            details: ["Complete interior and exterior deep cleaning."]
          },
          {
            title: "Microwave cleaning",
            rating: "4.81", reviews: "28K", price: "199",
            details: ["Interior grease removal and sanitization."]
          }
        ]
      }
    ]
  },
  living_room: {
    title: "Living & Bedroom Cleaning",
    rating: "4.88",
    bookings: "115K bookings",
    searchPlaceholder: "Search in Living & Bedroom Cleaning",
    heroImage: "https://images.unsplash.com/photo-1527772482340-7895c3f2b4f7?q=80&w=1200&auto=format&fit=crop",
    heroTitle: "Nothing gets missed",
    heroSubtitle: "",
    topNavCategories: [
      { name: "Super saver deals", icon: "https://cdn-icons-png.flaticon.com/512/879/879757.png" },
      { name: "Sofa & carpet", icon: "https://cdn-icons-png.flaticon.com/512/2609/2609363.png" },
      { name: "Living room care", icon: "https://cdn-icons-png.flaticon.com/512/2735/2735398.png" },
      { name: "Bedroom care", icon: "https://cdn-icons-png.flaticon.com/512/3030/3030335.png" },
      { name: "Mattress & bed", icon: "https://cdn-icons-png.flaticon.com/512/2822/2822081.png" },
    ],
    sections: [
      {
        title: "Super saver deals",
        items: [
          {
            title: "2-visits sofa cleaning pack",
            rating: "4.83", reviews: "65K", price: "398", originalPrice: "498", duration: "per visit",
            discount: "20% OFF", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
            details: ["Deep cleaning using professional grade equipment.", "Includes dry vacuuming and wet shampooing.", "Drying time requires 2-3 hours under a fan."]
          }
        ]
      },
      {
        title: "Sofa & carpet",
        items: [
          {
            title: "Fabric sofa cleaning",
            isBestseller: true,
            rating: "4.80", reviews: "56K", price: "399", duration: "45 mins",
            image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80",
            details: ["Deep dry vacuuming to remove dust.", "Wet shampooing and extraction."]
          }
        ]
      }
    ]
  },
  bathroom: {
    title: "Bathroom Cleaning",
    rating: "4.82",
    bookings: "6.5 M bookings",
    searchPlaceholder: "Search for deep cleaning, combos or fans",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    heroTitle: "Sparkling clean bathrooms",
    heroSubtitle: "Verified professionals using specialized tools for a like-new finish.",
    
    // CHANGED THIS KEY FROM topNavCategories TO navCategories
    navCategories: [
      { id: "bath-combos", name: "Combos", icon: "https://cdn-icons-png.flaticon.com/512/2779/2779775.png" },
      { id: "bath-cleaning", name: "Bathroom cleaning", icon: "https://cdn-icons-png.flaticon.com/512/2950/2950031.png" },
      { id: "bath-mini", name: "Mini services", icon: "https://cdn-icons-png.flaticon.com/512/995/995016.png" }
    ],

    sections: [
      {
        id: "bath-combos", // MATCHES navCategories ID
        title: "Money Saving Combos",
        items: [
          {
            id: "combo_2_bath",
            title: "Intense Cleaning (2 Bathrooms)",
            rating: "4.80",
            reviews: "1.2M",
            price: "798",
            originalPrice: "998",
            duration: "2 hrs 30 mins",
            image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=400&auto=format&fit=crop",
            badge: "SAVE ₹200",
            details: [
              "Mechanized floor scrubbing for deep stain removal",
              "Wall tile cleaning and limescale removal from taps",
              "Disinfection of toilet bowl and washbasin"
            ],
            isBestseller: true
          }
        ]
      },
      {
        id: "bath-cleaning", // MATCHES navCategories ID
        title: "Full Bathroom Cleaning",
        items: [
          {
            id: "single_bath_intense",
            title: "Intense Bathroom Cleaning",
            rating: "4.78",
            reviews: "2.1M",
            price: "449",
            originalPrice: "499",
            duration: "1 hr 15 mins",
            image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=400&auto=format&fit=crop",
            details: [
              "Deep cleaning of shower area, tiles and floor",
              "Hard water stain removal from mirrors and taps"
            ]
          }
        ]
      },
      {
        id: "bath-mini", // MATCHES navCategories ID
        title: "Mini Services",
        items: [
          {
            id: "bath_fan_only",
            title: "Bathroom Exhaust Fan Cleaning",
            rating: "4.75",
            reviews: "104K",
            price: "89",
            duration: "20 mins",
            image: "https://images.unsplash.com/photo-1585050516709-08ee85cd17cb?q=80&w=400&auto=format&fit=crop",
            details: ["Deep cleaning of grease and dust from blades"]
          }
        ]
      }
    ]
  },
  ac: {
    title: "AC",
    rating: "4.75",
    bookings: "12.0 M bookings",
    searchPlaceholder: "Search in AC",
    heroImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    heroTitle: "AC service & repair in 60 mins",
    heroSubtitle: "Starts at ₹449",
    // These act as your left sidebar links now
    navCategories: [
      { id: "super-saver", name: "Super saver packages", icon: "https://cdn-icons-png.flaticon.com/512/879/879757.png" },
      { id: "service", name: "Service", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "repair", name: "Repair & gas refill", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "installation", name: "Installation/uninstall", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" }
    ],
    sections: [
      {
        id: "super-saver",
        title: "Super saver packages",
        items: [
          {
            title: "Foam-jet service (2 ACs)",
            rating: "4.75", reviews: "2.2M", price: "1,198", originalPrice: "1,598", duration: "1 hr 30 mins", priceSuffix: "₹599 per AC"
          },
          {
            title: "Foam-jet service (3 ACs)",
            rating: "4.75", reviews: "2.2M", price: "1,647", originalPrice: "2,397", duration: "2 hrs 15 mins", priceSuffix: "₹549 per AC"
          },
          {
            title: "Foam-jet service (4 ACs)",
            rating: "4.75", reviews: "2.2M", price: "1,996", originalPrice: "3,196", duration: "3 hrs", priceSuffix: "₹499 per AC"
          },
          {
            title: "Foam-jet service (5 ACs)",
            rating: "4.75", reviews: "2.2M", price: "2,495", originalPrice: "3,995", duration: "3 hrs 45 mins", priceSuffix: "₹499 per AC"
          }
        ]
      },
      {
        id: "service",
        title: "Service",
        items: [
          {
            title: "Foam-jet AC service",
            rating: "4.75", reviews: "2.2M", price: "649", options: "9 options",
            details: ["Applicable for both window & split ACs", "Indoor unit deep cleaning with foam & jet spray"]
          }
        ]
      },
      {
        id: "repair",
        title: "Repair & gas refill",
        items: [
          {
            title: "AC repair",
            rating: "4.74", reviews: "752K", price: "299", options: "4 options",
            details: ["Complete check-up to identify issues before repair"],
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=200"
          },
          {
            title: "Gas refill & check-up",
            rating: "4.75", reviews: "133K", price: "2,800", originalPrice: "3,200", duration: "2 hrs 30 mins",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200"
          }
        ]
      },
      {
        id: "installation",
        title: "Installation/uninstallation",
        items: [
          {
            title: "AC installation",
            rating: "4.75", reviews: "153K", price: "1,899", options: "2 options",
            details: ["Installation of indoor & outdoor units with free gas check"],
            image: "https://images.unsplash.com/photo-1541889895048-fb9331046904?q=80&w=200"
          },
          {
            title: "AC uninstallation",
            rating: "4.81", reviews: "126K", price: "699", options: "2 options",
            details: ["Uninstallation of both indoor & outdoor units"]
          }
        ]
      }
    ]
  },

  
  full_home: {
    title: "Full Home/ Move-in Cleaning",
    rating: "4.82",
    bookings: "1.6 M bookings",
    searchPlaceholder: "Search in Full Home Cleaning",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
    heroTitle: "Pristine Spaces.",
    heroSubtitle: "Comprehensive deep cleaning for your sanctuary.",
    
    // These act as the horizontal tabs (or left sidebar, depending on your unified template)
    navCategories: [
      { id: "apartment", name: "Apartment", icon: "https://cdn-icons-png.flaticon.com/512/2735/2735398.png" }, // Replaced MdOutlineApartment with equivalent generic icon
      { id: "bungalow", name: "Bungalow/duplex", icon: "https://cdn-icons-png.flaticon.com/512/2822/2822081.png" }, // Replaced MdHouseSiding
      { id: "miniServices", name: "Mini services", icon: "https://cdn-icons-png.flaticon.com/512/1301/1301646.png" } // Replaced BiSprayCan
    ],
    
    sections: [
      {
        id: "apartment",
        title: "Apartment",
        items: [
          {
            title: "Furnished apartment",
            rating: "4.81", reviews: "103K", priceLabel: "Starts at", price: "3,499", duration: "5 hrs 45 mins",
            details: ["Cleaning & stain removal from rooms, kitchen, bathroom & balcony", "Machine floor scrubbing & dusting of walls & ceilings"],
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80"
          },
          {
            title: "Unfurnished apartment",
            rating: "4.81", reviews: "131K", priceLabel: "Starts at", price: "3,199", duration: "5 hrs",
            details: ["Cleaning & stain removal from rooms, kitchen, bathroom & balcony", "Machine floor scrubbing & dusting of walls & ceilings"],
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=400&q=80"
          }
        ]
      },
      {
        id: "bungalow",
        title: "Bungalow/duplex",
        items: [
          {
            title: "Furnished bungalow",
            rating: "4.81", reviews: "131K", priceLabel: "Starts at", price: "4,199", duration: "6 hrs 50 mins",
            details: ["Ideal for furnished, occupied homes.", "Machine floor scrubbing & stain removal across rooms, kitchen, baths & balcony."],
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
          },
          {
            title: "Unfurnished bungalow",
            rating: "4.81", reviews: "146K", priceLabel: "Starts at", price: "3,999", duration: "6 hrs",
            details: ["Ideal for vacant, unoccupied homes.", "Machine floor scrubbing & stain removal across rooms, kitchen, baths & balcony."],
            image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=400&q=80"
          }
        ]
      },
      {
        id: "miniServices",
        title: "Mini services",
        items: [
          {
            title: "Kitchen appliances cleaning",
            rating: "4.81", reviews: "61K", priceLabel: "Starts at", price: "99", options: "6 options",
            details: ["Deep cleaning of chimney, fridge, microwave, or stove (all sides)"],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=400&q=80"
          },
          {
            title: "Sofa & upholstery wet shampooing",
            rating: "4.82", reviews: "32K", priceLabel: "Starts at", price: "149", options: "6 options",
            details: ["Includes wet vacuuming with shampoo"],
            image: "https://images.unsplash.com/photo-1583847268964-b28ce8f89f20?auto=format&fit=crop&w=400&q=80"
          },
          {
            title: "Utensil removal & placement",
            rating: "4.81", reviews: "2K", price: "399", duration: "20 mins",
            details: ["Includes utensil removal & placement for upto 2 kitchen cabinets"],
            image: "https://images.unsplash.com/photo-1556693682-019623e13d96?auto=format&fit=crop&w=400&q=80"
          },
          {
            title: "Cabinet cleaning (upto 2)",
            rating: "4.83", reviews: "1K", price: "299", duration: "30 mins",
            details: ["Includes interior & exterior cleaning of upto 2 cabinets"],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80"
          },
          {
            title: "Furniture wet wiping",
            rating: "4.81", reviews: "3K", price: "499", duration: "1 hr 30 mins",
            details: ["Includes wet wiping of upto 2 tables, 5 chairs & 1 bed"],
            image: "https://images.unsplash.com/photo-1505693416022-14c1c9240ce4?auto=format&fit=crop&w=400&q=80"
          },
          {
            title: "Ceiling dusting & cobweb cleaning",
            rating: "4.84", reviews: "46K", price: "199", duration: "30 mins",
            details: ["Includes cobweb removal & dry dusting of ceiling for 1 room", "Excludes wet wiping & paint removal"],
            image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=400&q=80"
          }
        ]
      }
    ]
  },
  washing_machine: {
    title: "Washing Machine",
    rating: "4.74",
    bookings: "3.2 M bookings",
    searchPlaceholder: "Search in Washing Machine",
    // This uses the left-sidebar layout because it uses 'navCategories'
    navCategories: [
        { id: "repair", name: "Repair", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
        { id: "installation", name: "Installation", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" }
    ],
    sections: [
      {
        id: "repair",
        title: "Repair",
        items: [
          {
            title: "Automatic top load machine check-up",
            rating: "4.77", reviews: "362K", priceLabel: "Starts at", price: "199", options: "6 options",
            details: ["Visitation fee will be adjusted in the final repair quote"],
            image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Automatic front load machine check-up",
            rating: "4.75", reviews: "482K", priceLabel: "Starts at", price: "199", options: "7 options",
            details: ["Visitation fee will be adjusted in the final repair quote"],
            image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Semi-automatic machine check-up",
            rating: "4.75", reviews: "88K", priceLabel: "Starts at", price: "199", options: "7 options",
            details: ["Visitation fee will be adjusted in the final repair quote"],
            image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "installation",
        title: "Installation & uninstallation",
        items: [
          {
            title: "Washing machine installation & uninstallation",
            rating: "4.81", reviews: "39K", priceLabel: "Starts at", price: "399", options: "3 options",
            image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  
chimney: {
    title: "Chimney",
    rating: "4.75",
    bookings: "871K bookings",
    searchPlaceholder: "Search in Chimney",
    
    // 1. THIS ARRAY BUILDS THE LEFT SIDEBAR MENU
    navCategories: [
      { id: "combos", name: "Combos", icon: "https://cdn-icons-png.flaticon.com/512/879/879757.png" },
      { id: "repair", name: "Repair", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "service", name: "Service", icon: "https://cdn-icons-png.flaticon.com/512/2822/2822081.png" },
      { id: "installation", name: "Installation/uninstallation", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" }
    ],

    // 2. THIS GROUPS YOUR ITEMS INTO SECTIONS ON THE PAGE
    sections: [
      {
        id: "combos",
        title: "Combos",
        items: [
          {
            title: "Chimney deep cleaning with gas stove",
            rating: "4.76", reviews: "2K", priceLabel: "Starts at", price: "1,498", options: "2 options",
            image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=200&auto=format&fit=crop",
            details: [
              "Dismantling for internal servicing of motor, blowers & filters",
              "Interior & exterior surface degreasing",
              "Gas stove burner and surface deep clean",
              "Zero mess post-service cleanup"
            ]
          },
          {
            title: "Chimney basic cleaning with gas stove",
            rating: "4.67", reviews: "812", priceLabel: "Starts at", price: "998", options: "2 options",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop",
            details: [
              "Mesh & filter basic cleaning",
              "Exterior degreasing & stain removal",
              "Gas stove surface wipe-down",
              "Quick and efficient service"
            ]
          }
        ]
      },
      {
        id: "repair",
        title: "Repair",
        items: [
          {
            title: "Chimney check-up",
            rating: "4.76", reviews: "30K", priceLabel: "Starts at", price: "160", options: "2 options",
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=200&auto=format&fit=crop",
            details: [
              "Complete diagnostic check-up by an expert",
              "Quotation provided before repair starts",
              "Visitation fee will be adjusted in the final repair quote",
              "Use of genuine spare parts if needed"
            ]
          }
        ]
      },
      {
        id: "service",
        title: "Service",
        items: [
          {
            title: "Deep chimney service",
            rating: "4.76", reviews: "30K", priceLabel: "Starts at", price: "1,199", options: "2 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop",
            details: [
              "Dismantling for internal servicing of motor, blowers & filters",
              "Interior & exterior surface degreasing",
              "Checking for suction efficiency",
              "Ensuring zero damage to internal wiring"
            ]
          },
          {
            title: "2 visits: Chimney deep service",
            rating: "4.75", reviews: "2K", priceLabel: "Starts at", price: "2,100", options: "2 options",
            image: "https://cdn-icons-png.flaticon.com/512/2822/2822081.png",
            details: [
              "Book 2 visits chimney deep service at a discounted price",
              "Schedule your first service now",
              "Remaining service valid anytime within 12 months",
              "Priority booking access"
            ]
          }
        ]
      },
      {
        id: "installation",
        title: "Installation/uninstallation",
        items: [
          {
            title: "Chimney installation",
            rating: "4.78", reviews: "14K", priceLabel: "Starts at", price: "599", options: "2 options",
            image: "https://images.unsplash.com/photo-1541889895048-fb9331046904?q=80&w=200&auto=format&fit=crop",
            details: [
              "Core cutting (if required, at extra cost)",
              "Secure wall mounting and alignment",
              "Exhaust pipe fitting and sealing",
              "Pre-installation site inspection"
            ]
          }
        ]
      }
    ]
  },
  laptop: {
    title: "Laptop",
    rating: "4.78",
    bookings: "424K bookings",
    searchPlaceholder: "Search in Laptop",

    topNavCategories: [
      { name: "Services", icon: "https://cdn-icons-png.flaticon.com/512/3067/3067252.png" }
    ],
    
    // Groups your items into sections
    sections: [
      {
        id: "services",
        title: "Laptop Services",
        items: [
          {
            title: "Laptop/Desktop service",
            rating: "4.81", reviews: "44K", priceLabel: "Starts at", price: "699", options: "4 options",
            image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=200&auto=format&fit=crop",
            // Changed "features" to "details" to match the component
            details: [
              "For smoother, faster performance.",
              "Internal cleaning of fans, vents & components",
              "Enhances speed, cooling & battery efficiency"
            ]
          },
          {
            title: "System upgrade consultation",
            rating: "4.83", reviews: "4K", priceLabel: "Starts at", price: "199", options: "4 options",
            image: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=200&auto=format&fit=crop",
            details: [
              "Visitation fee will be adjusted in the final repair quote"
            ]
          },
          {
            title: "Component Installation",
            rating: "4.85", reviews: "555", priceLabel: "Starts at", price: "600", options: "4 options",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=200&auto=format&fit=crop",
            details: [
              "Visitation fee will be adjusted in the final repair quote"
            ]
          },
          {
            title: "Laptop check-up",
            rating: "4.77", reviews: "38K", priceLabel: "Starts at", price: "199", duration: "45 mins",
            image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=200&auto=format&fit=crop",
            details: [
              "Complete check-up at home to identify issues before repair"
            ]
          }
        ]
      }
    ]
  },
   refrigerator: {
    title: "Refrigerator",
    rating: "4.72",
    bookings: "1.7 M bookings",
    searchPlaceholder: "Search in Refrigerator",
    // This uses the left-sidebar layout (navCategories) based on the visual cues
    navCategories: [
      { id: "repair", name: "Repair", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "cleaning", name: "Cleaning", icon: "https://cdn-icons-png.flaticon.com/512/2735/2735398.png" }
    ],
    sections: [
      {
        id: "repair",
        title: "Repair",
        items: [
          {
            title: "Refrigerator check-up",
            rating: "4.72",
            reviews: "108K",
            priceLabel: "Starts at",
            price: "199",
            duration: "60 mins",
            image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?q=80&w=200&auto=format&fit=crop", 
            details: [
              "Detailed diagnosis to identify the issue",
              "Final quote shared after check-up",
              "Check-up fee adjusted in the final repair bill"
            ]
          }
        ]
      }
    ]
  },
  microwave: {
    title: "Microwave",
    rating: "4.82",
    bookings: "81K bookings",
    searchPlaceholder: "Search in Microwave",
    navCategories: [
      { id: "checkup", name: "Check-up", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" }
    ],
    sections: [
      {
        id: "checkup",
        title: "Microwave check-up",
        items: [
          {
            title: "Not heating",
            rating: "4.85",
            reviews: "44K",
            price: "199",
            details: [
              "We inspect the appliance & share a repair quote for approval",
              "Repair begins after your approval", 
              "Up to 180 days warranty on repair"
            ],
            image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Not working",
            rating: "4.81",
            reviews: "24K",
            price: "199",
            details: [
              "We inspect the appliance & share a repair quote for approval",
              "Repair begins after your approval",
              "Up to 180 days warranty on repair"
            ],
            image: "https://images.unsplash.com/photo-1585659722983-38ca86cb806b?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Unknown issue",
            rating: "4.81",
            reviews: "14K",
            price: "199",
            details: [
              "We inspect the appliance & share a repair quote for approval",
              "Repair begins after your approval",
              "Up to 180 days warranty on repair"
            ],
            image: "https://images.unsplash.com/photo-1585659722983-38ca86cb806b?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  stove: {
    title: "Stove",
    rating: "4.72",
    bookings: "152K bookings",
    searchPlaceholder: "Search in Stove",
    navCategories: [
      { id: "service", name: "Service", icon: "https://cdn-icons-png.flaticon.com/512/2822/2822081.png" },
      { id: "repair", name: "Repair", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" }
    ],
    sections: [
      {
        id: "service",
        title: "Service",
        items: [
          {
            title: "Gas stove steam service",
            rating: "4.89",
            reviews: "20K",
            priceLabel: "Starts at",
            price: "399",
            options: "3 options",
            details: ["Cleanup of burners, nozzles & internal parts with steam machine"],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Hob steam service",
            rating: "4.88",
            reviews: "11K",
            priceLabel: "Starts at",
            price: "549",
            options: "4 options",
            details: ["Cleanup of burners, nozzles & internal parts with steam machine"],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "repair",
        title: "Repair",
        items: [
          {
            title: "Gas stove check-up",
            rating: "4.77",
            reviews: "68K",
            price: "99",
            duration: "45 mins",
            details: ["Repairs for issues like low flame, gas leakage, knob, pipe issues & other faults"],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Hob check-up",
            rating: "4.74",
            reviews: "28K",
            priceLabel: "Starts at",
            price: "99",
            options: "6 options",
            details: ["Visitation fee will be adjusted in the final repair quote"],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  // Add this to your servicePagesData object in data.js

  geyser: {
    title: "Geyser",
    rating: "4.73",
    bookings: "1.4 M bookings",
    searchPlaceholder: "Search in Geyser",
    navCategories: [
      { id: "repair-service", name: "Repair & service", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "installation", name: "Installation & uninstallation", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" }
    ],
    sections: [
      {
        id: "repair-service",
        title: "Repair & service",
        items: [
          {
            title: "Geyser check-up",
            rating: "4.71",
            reviews: "126K",
            price: "249",
            duration: "60 mins",
            image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=200&auto=format&fit=crop",
            details: [
              "Visitation fee will be adjusted in the final repair quote"
            ]
          },
          {
            title: "Geyser service",
            rating: "4.75",
            reviews: "87K",
            priceLabel: "Starts at",
            price: "399",
            options: "3 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop",
            details: [
              "Exterior & interior cleaning with descaling of the geyser",
              "We do not service gas geysers"
            ]
          }
        ]
      },
      {
        id: "installation",
        title: "Installation & uninstallation",
        items: [
          {
            title: "Geyser installation",
            rating: "4.78",
            reviews: "11K",
            price: "499",
            duration: "60 mins",
            image: "https://images.unsplash.com/photo-1541889895048-fb9331046904?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Geyser uninstallation",
            rating: "4.84",
            reviews: "12K",
            price: "399",
            duration: "40 mins",
            image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  water_purifier_repair: {
    title: "Water Purifier",
    rating: "4.79",
    bookings: "2.1 M bookings",
    searchPlaceholder: "Search in Water Purifier Repair",
    navCategories: [
      { id: "filter-replacement", name: "Filter replacement", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "check-up", name: "Check up", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "installation", name: "Installation/uninstallation", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" }
    ],
    sections: [
      {
        id: "filter-replacement",
        title: "Filter replacement",
        items: [
          {
            title: "Native universal filter kit",
            rating: "4.75",
            reviews: "36K",
            priceLabel: "Starts at",
            price: "1,550",
            duration: "60 mins",
            details: [
              "Long-lasting filters with 1-year warranty",
              "Compatible with most water purifiers",
              "Fits most brand models"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Non-branded filter kit",
            rating: "4.80",
            reviews: "361",
            priceLabel: "Starts at",
            price: "1,200",
            duration: "60 mins",
            details: [
              "2-month warranty",
              "Compatible with local water purifiers"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "check-up",
        title: "Check up",
        items: [
          {
            title: "Water purifier check-up",
            rating: "4.81",
            reviews: "12K",
            priceLabel: "Starts at",
            price: "299",
            options: "7 options",
            details: [
              "Visitation fee will be adjusted in the final repair quote"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "installation",
        title: "Installation/uninstallation",
        items: [
          {
            title: "Water purifier installation",
            rating: "4.86",
            reviews: "4K",
            priceLabel: "Starts at",
            price: "450",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1541889895048-fb9331046904?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Water purifier uninstallation",
            rating: "4.90",
            reviews: "789",
            price: "400",
            duration: "30 mins",
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  // Add this to your servicePagesData object in data.js

  television: {
    title: "Television",
    rating: "4.79",
    bookings: "1.1 M bookings",
    searchPlaceholder: "Search in Television",
    // Sidebar navigation categories based on common appliance layouts
    navCategories: [
      { id: "repair", name: "Repair", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "installation", name: "Installation/Uninstallation", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" }
    ],
    sections: [
      {
        id: "repair",
        title: "Repair",
        items: [
          {
            title: "TV check-up",
            rating: "4.77",
            reviews: "159K",
            priceLabel: "Starts at",
            price: "249",
            options: "4 options",
            image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=200&auto=format&fit=crop",
            details: ["Visitation fee will be adjusted in the final repair quote"]
          }
        ]
      },
      {
        id: "installation",
        title: "Installation/Uninstallation",
        items: [
          {
            title: "TV installation",
            rating: "4.86",
            reviews: "55K",
            priceLabel: "Starts at",
            price: "399",
            options: "5 options",
            image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=200&auto=format&fit=crop",
            details: ["Professional mounting and setup of your TV unit"]
          },
          {
            title: "TV uninstallation",
            rating: "4.89",
            reviews: "17K",
            priceLabel: "Starts at",
            price: "349",
            options: "3 options",
            image: "https://images.unsplash.com/photo-1552975084-6e027cd345c2?q=80&w=200&auto=format&fit=crop",
            details: ["Safe removal of TV from wall mount or stand"]
          }
        ]
      }
    ]
  },
  electrician: {
    title: "Electrician",
    rating: "4.79",
    bookings: "4.1 M bookings", // Placeholder based on typical UC data
    searchPlaceholder: "Search in Electrician",
    navCategories: [
      { id: "switch-socket", name: "Switch & socket", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" }, // Use actual icons if available
      { id: "fan", name: "Fan", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "light", name: "Light", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "wiring", name: "Wiring", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "doorbell-security", name: "Doorbell & security", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "mcb-fuse", name: "MCB/fuse", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "appliances", name: "Appliances", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "consultation", name: "Book a consultation", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" }
    ],
    sections: [
      {
        id: "switch-socket",
        title: "Switch & socket",
        items: [
          {
            title: "Switch/socket repair & replacement",
            rating: "4.81",
            reviews: "124K",
            priceLabel: "Starts at",
            price: "89",
            options: "4 options",
            details: ["Repair or replacement using existing in-wall wiring"],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Plug replacement",
            rating: "4.81",
            reviews: "10K",
            priceLabel: "Starts at",
            price: "89",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Switchboard repair & replacement",
            rating: "4.82",
            reviews: "82K",
            priceLabel: "Starts at",
            price: "89",
            options: "4 options",
            details: ["Repair or replacement using existing in-wall wiring"],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "New switchbox installation",
            rating: "4.79",
            reviews: "53K",
            priceLabel: "Starts at",
            price: "149",
            options: "4 options",
            details: ["Installed in specified area for new power outlet"],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "fan",
        title: "Fan",
        items: [
          {
            title: "Fan repair",
            rating: "4.79",
            reviews: "305K",
            priceLabel: "Starts at",
            price: "149",
            options: "3 options",
            details: ["BLDC/Smart fan repair service is not provided."],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Regular ceiling fan installation",
            rating: "4.85",
            reviews: "48K",
            priceLabel: "Starts at",
            price: "149",
            options: "3 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Decorative fan installation",
            rating: "4.76",
            reviews: "5K",
            priceLabel: "Starts at",
            price: "299",
            options: "3 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Smart/BLDC fan installation",
            rating: "4.82",
            reviews: "5K",
            priceLabel: "Starts at",
            price: "199",
            options: "3 options",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Exhaust/pedestal/tower fan installation",
            rating: "4.80",
            reviews: "21K",
            priceLabel: "Starts at",
            price: "199",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Fan regulator replacement",
            rating: "4.82",
            reviews: "43K",
            price: "79",
            duration: "15 mins",
            badge: "SUPER SAVER",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "light",
        title: "Light",
        items: [
          {
            title: "Fancy light installation/replacement",
            rating: "4.80",
            reviews: "20K",
            price: "149",
            duration: "20 mins",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Tubelight repair & installation",
            rating: "4.80",
            reviews: "16K",
            price: "129",
            duration: "20 mins",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Bulb installation/replacement",
            rating: "4.84",
            reviews: "50K",
            priceLabel: "Starts at",
            price: "69",
            options: "3 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Ceiling light installation",
            rating: "4.81",
            reviews: "49K",
            priceLabel: "Starts at",
            price: "89",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Hanging light installation",
            rating: "4.78",
            reviews: "15K",
            priceLabel: "Starts at",
            price: "249",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Chandelier installation",
            rating: "4.87",
            reviews: "5K",
            priceLabel: "Starts at",
            price: "489",
            options: "4 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "wiring",
        title: "Wiring",
        items: [
          {
            title: "New internal wiring (per 5m)",
            rating: "4.74",
            reviews: "2K",
            price: "189",
            duration: "15 mins",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "New external wiring (per 5m)",
            rating: "4.75",
            reviews: "21K",
            priceLabel: "Starts at",
            price: "119",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "doorbell-security",
        title: "Doorbell & security",
        items: [
          {
            title: "Regular doorbell installation",
            rating: "4.80",
            reviews: "11K",
            priceLabel: "Starts at",
            price: "149",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Video doorbell installation",
            rating: "4.80",
            reviews: "809",
            priceLabel: "Starts at",
            price: "600",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Wireless CCTV installation",
            rating: "4.71",
            reviews: "16K",
            price: "299",
            duration: "30 mins",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "mcb-fuse",
        title: "MCB/fuse",
        items: [
          {
            title: "MCB/fuse repair",
            rating: "4.79",
            reviews: "11K",
            priceLabel: "Starts at",
            price: "149",
            options: "4 options",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "MCB/fuse replacement",
            rating: "4.79",
            reviews: "8K",
            priceLabel: "Starts at",
            price: "149",
            options: "4 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Submeter installation",
            rating: "4.78",
            reviews: "1K",
            price: "249",
            duration: "30 mins",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "appliances",
        title: "Appliances",
        items: [
          {
            title: "Home theatre installation",
            rating: "4.81",
            reviews: "4K",
            price: "199",
            duration: "30 mins",
            details: ["Installation of 2 speakers, 1 sound bar & 1 subwoofer"],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "TV installation",
            rating: "4.83",
            reviews: "13K",
            priceLabel: "Starts at",
            price: "299",
            options: "5 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "TV uninstallation",
            rating: "4.87",
            reviews: "2K",
            priceLabel: "Starts at",
            price: "249",
            options: "4 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Sound bar installation",
            rating: "4.79",
            reviews: "2K",
            price: "99",
            duration: "30 mins",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Karban Airzone fan installation",
            rating: "4.85",
            reviews: "41",
            priceLabel: "Starts at",
            price: "399",
            options: "2 options",
            details: ["Includes electrical connection and remote testing"],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Inverter installation",
            rating: "4.75",
            reviews: "5K",
            priceLabel: "Starts at",
            price: "489",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Stabiliser installation",
            rating: "4.83",
            reviews: "2K",
            price: "149",
            duration: "20 mins",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Inverter fuse replacement",
            rating: "4.60",
            reviews: "1K",
            price: "99",
            duration: "15 mins",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Inverter servicing",
            rating: "4.74",
            reviews: "10K",
            price: "249",
            duration: "30 mins",
            details: ["Terminal dust removal & distilled water top-up"],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Inverter check-up",
            rating: "4.73",
            reviews: "2K",
            price: "199",
            duration: "60 mins",
            details: ["Complete check-up to identify issues before repair"],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Inverter uninstallation",
            rating: "4.84",
            reviews: "1K",
            price: "499",
            duration: "1 hr 30 mins",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "consultation",
        title: "Book a consultation",
        items: [
          {
            title: "Electrician consultation",
            rating: "4.75",
            reviews: "502K",
            price: "49",
            duration: "15 mins",
            details: [
              "An electrician will assess your needs upon arrival at your home",
              "A quote will be provided before the service begins"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  // Add this to your servicePagesData object in data.js

  plumber: {
    title: "Plumber",
    rating: "4.71",
    bookings: "2.2 M bookings",
    searchPlaceholder: "Search in Plumber",
    heroImage: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=800&auto=format&fit=crop", // Placeholder for the banner
    heroTitle: "Super saver",
    heroSubtitle: "Affordable repairs starting at just ₹49",
    
    // Left sidebar navigation categories
    navCategories: [
      { id: "tap-mixer", name: "Tap & mixer", icon: "https://cdn-icons-png.flaticon.com/512/3103/3103460.png" },
      { id: "toilet", name: "Toilet", icon: "https://cdn-icons-png.flaticon.com/512/2073/2073128.png" },
      { id: "bath-shower", name: "Bath & shower", icon: "https://cdn-icons-png.flaticon.com/512/3103/3103482.png" },
      { id: "bath-accessories", name: "Bath accessories", icon: "https://cdn-icons-png.flaticon.com/512/2874/2874134.png" },
      { id: "basin-sink", name: "Basin & sink", icon: "https://cdn-icons-png.flaticon.com/512/3103/3103450.png" },
      { id: "drainage-blockage", name: "Drainage & blockage", icon: "https://cdn-icons-png.flaticon.com/512/2618/2618290.png" },
      { id: "leakage-connections", name: "Leakage & connections", icon: "https://cdn-icons-png.flaticon.com/512/4005/4005236.png" },
      { id: "water-tank-motor", name: "Water tank & motor", icon: "https://cdn-icons-png.flaticon.com/512/3103/3103432.png" },
      { id: "consultation", name: "Book a consultation", icon: "https://cdn-icons-png.flaticon.com/512/1006/1006555.png" }
    ],

    sections: [
      {
        id: "tap-mixer",
        title: "Tap & mixer",
        items: [
          {
            title: "Tap repair",
            rating: "4.80", reviews: "144K", priceLabel: "Starts at", price: "79", options: "4 options",
            image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Tap accessory installation",
            rating: "4.82", reviews: "12K", priceLabel: "Starts at", price: "79", options: "4 options",
            image: "https://images.unsplash.com/photo-1550505095-81378a5091c5?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Tap installation/replacement",
            rating: "4.83", reviews: "12K", priceLabel: "Starts at", price: "79", options: "4 options",
            image: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "toilet",
        title: "Toilet",
        items: [
          {
            title: "Jet spray repair/replacement",
            rating: "4.80", reviews: "118K", priceLabel: "Starts at", price: "89", options: "2 options",
            image: "https://images.unsplash.com/photo-1584622781867-1c61beff1a2b?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Toilet seat cover installation",
            rating: "4.79", reviews: "32K", price: "99", duration: "10 mins",
            image: "https://images.unsplash.com/photo-1564540574859-0d12759976bb?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Flush tank repair",
            rating: "4.78", reviews: "114K", priceLabel: "Starts at", price: "149", options: "3 options",
            image: "https://images.unsplash.com/photo-1550505095-81378a5091c5?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "External flush tank replacement",
            rating: "4.81", reviews: "4K", price: "449", duration: "45 mins",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Indian toilet repair/installation",
            rating: "4.84", reviews: "4K", priceLabel: "Starts at", price: "489", options: "3 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Western toilet repair (floor-mounted)",
            rating: "4.72", reviews: "10K", priceLabel: "Starts at", price: "149", options: "4 options",
            image: "https://images.unsplash.com/photo-1564540574859-0d12759976bb?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "bath-shower",
        title: "Bath & shower",
        items: [
          {
            title: "Shower mixer tap installation",
            rating: "4.82", reviews: "5K", price: "349", duration: "45 mins",
            image: "https://images.unsplash.com/photo-1507038772120-7ff76cb6159e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Shower installation",
            rating: "4.83", reviews: "19K", priceLabel: "Starts at", price: "149", options: "3 options",
            image: "https://images.unsplash.com/photo-1541889895048-fb9331046904?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Shower filter installation",
            rating: "4.87", reviews: "7K", price: "99", duration: "10 mins",
            image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Shower repair",
            rating: "4.78", reviews: "14K", priceLabel: "Starts at", price: "89", options: "3 options",
            image: "https://images.unsplash.com/photo-1507038772120-7ff76cb6159e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "bath-accessories",
        title: "Bath accessories",
        items: [
          {
            title: "Soap holder installation",
            rating: "4.75", reviews: "6K", price: "59", duration: "10 mins",
            image: "https://images.unsplash.com/photo-1585050516709-08ee85cd17cb?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Towel holder installation",
            rating: "4.80", reviews: "6K", priceLabel: "Starts at", price: "59", options: "2 options",
            image: "https://images.unsplash.com/photo-1584622781867-1c61beff1a2b?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Shelf installation",
            rating: "4.70", reviews: "5K", priceLabel: "Starts at", price: "89", options: "2 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "basin-sink",
        title: "Basin & sink",
        items: [
          {
            title: "Wash basin leakage repair",
            rating: "4.79", reviews: "57K", priceLabel: "Starts at", price: "149", options: "2 options",
            image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Wash basin blockage removal",
            rating: "4.76", reviews: "11K", price: "199", duration: "15 mins",
            image: "https://images.unsplash.com/photo-1585050516709-08ee85cd17cb?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Wash basin installation",
            rating: "4.74", reviews: "11K", price: "469", duration: "45 mins",
            image: "https://images.unsplash.com/photo-1584622781867-1c61beff1a2b?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Waste coupling installation",
            rating: "4.80", reviews: "8K", priceLabel: "Starts at", price: "149", options: "2 options",
            image: "https://images.unsplash.com/photo-1541889895048-fb9331046904?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "drainage-blockage",
        title: "Drainage & blockage",
        items: [
          {
            title: "Drain cover installation",
            rating: "4.73", reviews: "11K", price: "149", duration: "15 mins",
            image: "https://images.unsplash.com/photo-1585050516709-08ee85cd17cb?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Drain blockage removal",
            rating: "4.77", reviews: "41K", priceLabel: "Starts at", price: "199", options: "4 options",
            image: "https://images.unsplash.com/photo-1584622781867-1c61beff1a2b?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "leakage-connections",
        title: "Leakage & connections",
        items: [
          {
            title: "Connection hose installation",
            rating: "4.79", reviews: "35K", price: "89", duration: "10 mins",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Washing machine inlet installation",
            rating: "4.81", reviews: "44K", price: "99", duration: "10 mins",
            image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "RO water connection installation",
            rating: "4.85", reviews: "4K", price: "99", duration: "10 mins",
            image: "https://images.unsplash.com/photo-1541889895048-fb9331046904?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Geyser connection leakage repair",
            rating: "4.75", reviews: "14K", price: "59", duration: "10 mins",
            image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Shut-off valve leakage repair",
            rating: "4.77", reviews: "24K", price: "99", duration: "10 mins",
            image: "https://images.unsplash.com/photo-1585050516709-08ee85cd17cb?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "water-tank-motor",
        title: "Water tank & motor",
        items: [
          {
            title: "Overhead water tank installation",
            rating: "4.50", reviews: "292", priceLabel: "Starts at", price: "689", options: "2 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Water tank repair",
            rating: "4.64", reviews: "6K", priceLabel: "Starts at", price: "199", options: "3 options",
            image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Motor installation",
            rating: "4.64", reviews: "3K", price: "449", duration: "45 mins",
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Motor air cavity removal",
            rating: "4.64", reviews: "8K", price: "99", duration: "30 mins",
            image: "https://images.unsplash.com/photo-1541889895048-fb9331046904?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "consultation",
        title: "Book a consultation",
        items: [
          {
            title: "Plumber consultation",
            rating: "4.73", reviews: "21K", price: "49", duration: "35 mins",
            image: "https://images.unsplash.com/photo-1607530666991-8f521742404e?q=80&w=200&auto=format&fit=crop", // Picture of a plumber
            details: [
              "A plumber will assess your needs upon arrival at your home",
              "A quote will be provided before the service begins"
            ]
          }
        ]
      }
    ]
  },
  carpenter: {
    title: "Carpenter",
    rating: "4.78",
    bookings: "3.1 M bookings", // Placeholder based on typical UC data
    searchPlaceholder: "Search in Carpenter",
    navCategories: [
      { id: "cupboard-drawer", name: "Cupboard & drawer", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "kitchen-fittings", name: "Kitchen fittings", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "shelves-decor", name: "Shelves & decor", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "bath-fittings", name: "Bath fittings & mirrors", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "wooden-door", name: "Wooden door", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "window-curtain", name: "Window & curtain", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "furniture-repair", name: "Furniture repair", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "clothes-hanger", name: "Clothes hanger", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "consultation", name: "Book a consultation", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" }
    ],
    sections: [
      {
        id: "cupboard-drawer",
        title: "Cupboard & drawer",
        items: [
          {
            title: "Cupboard repair",
            rating: "4.77",
            reviews: "23K",
            priceLabel: "Starts at",
            price: "89",
            options: "4 options",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Pull out drawer repair/replacement",
            rating: "4.76",
            reviews: "38K",
            price: "129",
            duration: "30 mins",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Cupboard lock & latches",
            rating: "4.74",
            reviews: "24K",
            priceLabel: "Starts at",
            price: "79",
            options: "5 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Drawer repair & installation",
            rating: "4.77",
            reviews: "15K",
            price: "89",
            duration: "20 mins",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "kitchen-fittings",
        title: "Kitchen fittings",
        items: [
          {
            title: "Cabinet hinges",
            rating: "4.80",
            reviews: "80K",
            price: "89",
            duration: "15 mins",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Cabinet hydraulic repair",
            rating: "4.74",
            reviews: "8K",
            priceLabel: "Starts at",
            price: "89",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Utensil rack installation",
            rating: "4.82",
            reviews: "8K",
            price: "199",
            duration: "30 mins",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "shelves-decor",
        title: "Shelves & decor",
        items: [
          {
            title: "Shelf installation",
            rating: "4.80",
            reviews: "57K",
            priceLabel: "Starts at",
            price: "99",
            options: "3 options",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Decor installation",
            rating: "4.80",
            reviews: "11K",
            priceLabel: "Starts at",
            price: "79",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Wall cabinet assembly & installation",
            rating: "4.85",
            reviews: "2K",
            priceLabel: "Starts at",
            price: "149",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Bathroom mirror cabinet",
            rating: "4.85",
            reviews: "2K",
            priceLabel: "Starts at",
            price: "489",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Drill (per hole)",
            rating: "4.81",
            reviews: "161K",
            priceLabel: "Starts at",
            price: "49",
            options: "3 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "bath-fittings",
        title: "Bath fittings & mirrors",
        items: [
          {
            title: "Mirror installation",
            rating: "4.79",
            reviews: "39K",
            priceLabel: "Starts at",
            price: "119",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Soap holder installation",
            rating: "4.77",
            reviews: "7K",
            price: "99",
            duration: "15 mins",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Towel holder installation",
            rating: "4.79",
            reviews: "10K",
            priceLabel: "Starts at",
            price: "99",
            options: "3 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "wooden-door",
        title: "Wooden door",
        items: [
          {
            title: "Door repair",
            rating: "4.77",
            reviews: "41K",
            priceLabel: "Starts at",
            price: "149",
            options: "3 options",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Door closer installation",
            rating: "4.78",
            reviews: "17K",
            priceLabel: "Starts at",
            price: "179",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Door accessories & mesh installation",
            rating: "4.80",
            reviews: "67K",
            priceLabel: "Starts at",
            price: "69",
            options: "4 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Door installation",
            rating: "4.60",
            reviews: "4K",
            priceLabel: "Starts at",
            price: "419",
            options: "3 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Door lock repair & installation",
            rating: "4.79",
            reviews: "104K",
            priceLabel: "Starts at",
            price: "129",
            options: "4 options",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "window-curtain",
        title: "Window & curtain",
        items: [
          {
            title: "Window AC frame installation",
            rating: "4.67",
            reviews: "2K",
            price: "549",
            duration: "60 mins",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Mosquito net installation (upto 5 ft)",
            rating: "4.80",
            reviews: "8K",
            priceLabel: "Starts at",
            price: "149",
            options: "3 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Blinds inspection & measurement (upto 5 ft)",
            rating: "4.90",
            reviews: "12K",
            priceLabel: "Starts at",
            price: "99",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Window accessories",
            rating: "4.80",
            reviews: "1K",
            priceLabel: "Starts at",
            price: "49",
            options: "3 options",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Window AC frame uninstallation",
            rating: "4.66",
            reviews: "2K",
            priceLabel: "Starts at",
            price: "299",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Window misalignment/jam repair",
            rating: "4.66",
            reviews: "3K",
            priceLabel: "Starts at",
            price: "99",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Curtain rod installation",
            rating: "4.82",
            reviews: "46K",
            priceLabel: "Starts at",
            price: "149",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "furniture-repair",
        title: "Furniture repair",
        items: [
          {
            title: "Bed support repair",
            rating: "4.81",
            reviews: "27K",
            price: "249",
            duration: "30 mins",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Headboard repair",
            rating: "4.79",
            reviews: "4K",
            priceLabel: "Starts at",
            price: "99",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Wooden chair repair",
            rating: "4.77",
            reviews: "9K",
            priceLabel: "Starts at",
            price: "79",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Wooden table repair",
            rating: "4.75",
            reviews: "7K",
            priceLabel: "Starts at",
            price: "49",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Wooden sofa repair",
            rating: "4.78",
            reviews: "3K",
            priceLabel: "Starts at",
            price: "99",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Plastic buffer installation",
            rating: "4.79",
            reviews: "3K",
            priceLabel: "Starts at",
            price: "49",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Table/chair wheel fitting",
            rating: "4.75",
            reviews: "1K",
            priceLabel: "Starts at",
            price: "49",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "clothes-hanger",
        title: "Clothes hanger",
        items: [
          {
            title: "Ceiling-mounted hanger installation",
            rating: "4.80",
            reviews: "14K",
            priceLabel: "Starts at",
            price: "449",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Wall hanger installation",
            rating: "4.78",
            reviews: "8K",
            price: "119",
            duration: "30 mins",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Cloth drying rope installation",
            rating: "4.86",
            reviews: "6K",
            price: "99",
            duration: "15 mins",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "consultation",
        title: "Book a consultation",
        items: [
          {
            title: "Carpenters consultation",
            rating: "4.76",
            reviews: "111K",
            price: "49",
            duration: "20 mins",
            details: [
              "Expert evaluates your requirements and shares lowest quote",
              "Service begins immediately after acceptance"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  // Add this to your servicePagesData object in data.js

  festival_lights: {
    title: "Festival Lights Installation",
    rating: "4.68",
    bookings: "32K bookings",
    searchPlaceholder: "Search in Festival Lights Installation",
    navCategories: [
      { id: "light-uninstallation", name: "Light uninstallation", icon: "https://cdn-icons-png.flaticon.com/512/2886/2886000.png" },
      { id: "balcony-lights", name: "Balcony lights", icon: "https://cdn-icons-png.flaticon.com/512/3225/3225134.png" },
      { id: "railing-lights", name: "Railing lights", icon: "https://cdn-icons-png.flaticon.com/512/8207/8207198.png" },
      { id: "room-lights", name: "Room lights", icon: "https://cdn-icons-png.flaticon.com/512/702/702814.png" },
      { id: "mandir-lights", name: "Mandir lights", icon: "https://cdn-icons-png.flaticon.com/512/9638/9638361.png" },
      { id: "outdoor-lights", name: "Outdoor lights", icon: "https://cdn-icons-png.flaticon.com/512/8065/8065518.png" },
      { id: "garden-lights", name: "Garden lights", icon: "https://cdn-icons-png.flaticon.com/512/1518/1518973.png" },
      { id: "xmas-light-decor", name: "Xmas light decor", icon: "https://cdn-icons-png.flaticon.com/512/3753/3753308.png" },
      { id: "custom-services", name: "Custom services", icon: "https://cdn-icons-png.flaticon.com/512/2097/2097276.png" }
    ],
    sections: [
      {
        id: "light-uninstallation",
        title: "Light uninstallation",
        items: [
          {
            title: "Light uninstallation (per light)",
            rating: "4.77", reviews: "4K", price: "99", originalPrice: "124", duration: "30 mins",
            image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=200&auto=format&fit=crop",
            details: [
              "1 string length can be upto 12m",
              "Uninstallation charges for 1 light string"
            ]
          }
        ]
      },
      {
        id: "balcony-lights",
        title: "Balcony lights",
        items: [
          {
            title: "Balcony lights installation (Starry)",
            rating: "4.68", reviews: "12K", priceLabel: "Starts at", price: "198", options: "2 options",
            image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=200&auto=format&fit=crop",
            details: [
              "1 string length can be up to 12m",
              "Charges cover installation only"
            ]
          },
          {
            title: "Balcony lights installation (String)",
            rating: "4.69", reviews: "6K", priceLabel: "Starts at", price: "396", options: "2 options",
            image: "https://images.unsplash.com/photo-1543854589-923f669a7447?q=80&w=200&auto=format&fit=crop",
            details: [
              "1 string length can be up to 12m",
              "Charges cover installation only"
            ]
          }
        ]
      },
      {
        id: "railing-lights",
        title: "Railing lights",
        items: [
          {
            title: "Railing lights installation (Rope)",
            rating: "4.65", reviews: "761", priceLabel: "Starts at", price: "198", options: "2 options",
            image: "https://images.unsplash.com/photo-1605279612260-0a25fa776686?q=80&w=200&auto=format&fit=crop",
            details: [
              "1 string length can be up to 12m",
              "Charges cover installation only"
            ]
          },
          {
            title: "Railing lights installation (String)",
            rating: "4.64", reviews: "338", priceLabel: "Starts at", price: "396", options: "2 options",
            image: "https://images.unsplash.com/photo-1543854589-923f669a7447?q=80&w=200&auto=format&fit=crop",
            details: [
              "1 string length can be up to 12m",
              "Charges cover installation only"
            ]
          },
          {
            title: "Railing lights installation (Starry)",
            rating: "4.71", reviews: "351", priceLabel: "Starts at", price: "198", options: "2 options",
            image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=200&auto=format&fit=crop",
            details: [
              "1 string length can be up to 12m",
              "Charges cover installation only"
            ]
          }
        ]
      },
      {
        id: "room-lights",
        title: "Room lights",
        items: [
          {
            title: "Room lights installation (Starry)",
            rating: "4.69", reviews: "394", priceLabel: "Starts at", price: "198", options: "2 options",
            image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=200&auto=format&fit=crop",
            details: [
              "1 string length can be up to 12m",
              "Charges cover installation only"
            ]
          },
          {
            title: "Room lights installation (String)",
            rating: "4.71", reviews: "400", priceLabel: "Starts at", price: "396", options: "3 options",
            image: "https://images.unsplash.com/photo-1543854589-923f669a7447?q=80&w=200&auto=format&fit=crop",
            details: [
              "1 string length can be up to 12m",
              "Charges cover installation only"
            ]
          }
        ]
      },
      {
        id: "mandir-lights",
        title: "Mandir lights",
        items: [
          {
            title: "Mandir lights installation",
            rating: "4.68", reviews: "791", priceLabel: "Starts at", price: "99", options: "3 options",
            image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=200&auto=format&fit=crop",
            details: [
              "1 string length can be up to 12m",
              "Charges cover installation only"
            ]
          }
        ]
      },
      {
        id: "outdoor-lights",
        title: "Outdoor lights",
        items: [
          {
            title: "Outdoor lights installation",
            rating: "4.56", reviews: "484", priceLabel: "Starts at", price: "1,160", options: "2 options",
            image: "https://images.unsplash.com/photo-1580216743936-2357c327ff7b?q=80&w=200&auto=format&fit=crop",
            details: [
              "1 string length can be up to 12m",
              "Charges cover installation only"
            ]
          }
        ]
      },
      {
        id: "garden-lights",
        title: "Garden lights",
        items: [
          {
            title: "Garden lights installation",
            rating: "4.60", reviews: "121", priceLabel: "Starts at", price: "1,160", options: "3 options",
            image: "https://images.unsplash.com/photo-1582260667954-4f9e15918bd5?q=80&w=200&auto=format&fit=crop",
            details: [
              "1 string length can be up to 12m",
              "Charges cover installation only"
            ]
          }
        ]
      },
      {
        id: "xmas-light-decor",
        title: "Xmas light decor",
        items: [
          {
            title: "Xmas tree lights installation",
            rating: "4.69", reviews: "174", priceLabel: "Starts at", price: "99", options: "3 options",
            image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=200&auto=format&fit=crop",
            details: [
              "1 string length can be up to 12m",
              "Charges cover installation only"
            ]
          }
        ]
      },
      {
        id: "custom-services",
        title: "Custom services",
        items: [
          {
            title: "Xmas lantern installation",
            rating: "4.80", reviews: "214", price: "99", duration: "30 mins",
            image: "https://images.unsplash.com/photo-1576063462991-6450fdf577b2?q=80&w=200&auto=format&fit=crop",
            details: [
              "Charges cover installation only"
            ]
          },
          {
            title: "Lantern installation (per lantern)",
            rating: "4.74", reviews: "388", price: "99", duration: "30 mins",
            image: "https://images.unsplash.com/photo-1493606371202-6275828f90f3?q=80&w=200&auto=format&fit=crop",
            details: [
              "Charges cover installation only"
            ]
          },
          {
            title: "Light installation (per string)",
            rating: "4.66", reviews: "6K", price: "99", originalPrice: "124", duration: "30 mins",
            image: "https://images.unsplash.com/photo-1522026131464-bc6d1fb010fc?q=80&w=200&auto=format&fit=crop",
            details: [
              "1 string length can be upto 12m",
              "Installation charges for 1 light string"
            ]
          },
          {
            title: "Light uninstallation (per light)",
            rating: "4.77", reviews: "4K", price: "99", originalPrice: "124", duration: "30 mins",
            image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=200&auto=format&fit=crop",
            details: [
              "1 string length can be upto 12m",
              "Uninstallation charges for 1 light string"
            ]
          }
        ]
      }
    ]
  },
  fan_installation: {
    title: "Fan Installation",
    rating: "4.85",
    bookings: "87K bookings",
    searchPlaceholder: "Search in Fan Installation",
    navCategories: [
      { id: "installation", name: "Installation/replacement", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "uninstallation", name: "Uninstallation", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" }
    ],
    sections: [
      {
        id: "installation",
        title: "Installation/replacement",
        items: [
          {
            title: "Decorative ceiling fan installation/replacement",
            rating: "4.83",
            reviews: "268",
            priceLabel: "Starts at",
            price: "469",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Smart fan installation/replacement",
            rating: "4.84",
            reviews: "84",
            priceLabel: "Starts at",
            price: "298",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Ceiling fan installation/replacement",
            rating: "4.85",
            reviews: "50K",
            priceLabel: "Starts at",
            price: "248",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Exhaust fan installation/replacement",
            rating: "4.83",
            reviews: "5K",
            priceLabel: "Starts at",
            price: "248",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Wall fan installation/replacement",
            rating: "4.87",
            reviews: "2K",
            price: "199",
            duration: "45 mins",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Fan regulator installation/replacement",
            rating: "4.81",
            reviews: "2K",
            price: "139",
            duration: "10 mins",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Pedestal fan installation",
            rating: "4.88",
            reviews: "587",
            price: "199",
            duration: "15 mins",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Tower fan installation",
            rating: "4.97",
            reviews: "20",
            price: "199",
            duration: "15 mins",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "uninstallation",
        title: "Uninstallation",
        items: [
          {
            title: "Fan uninstallation",
            rating: "4.88",
            reviews: "2K",
            price: "179",
            duration: "10 mins",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  // Add this to your servicePagesData object in data.js

  furniture_assembly: {
    title: "Furniture Assembly",
    rating: "4.83",
    bookings: "203K bookings",
    searchPlaceholder: "Search in Furniture Assembly",
    
    // Left sidebar navigation categories
    navCategories: [
      { id: "wooden-bed", name: "Wooden bed", icon: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png" },
      { id: "wardrobe", name: "Wardrobe", icon: "https://cdn-icons-png.flaticon.com/512/2611/2611005.png" },
      { id: "dining-kitchen", name: "Dining & kitchen", icon: "https://cdn-icons-png.flaticon.com/512/2729/2729069.png" },
      { id: "tables-chairs", name: "Tables & chairs", icon: "https://cdn-icons-png.flaticon.com/512/3052/3052382.png" },
      { id: "children", name: "Children", icon: "https://cdn-icons-png.flaticon.com/512/2855/2855260.png" },
      { id: "living-tv", name: "Living & TV", icon: "https://cdn-icons-png.flaticon.com/512/2609/2609363.png" },
      { id: "outdoor", name: "Outdoor", icon: "https://cdn-icons-png.flaticon.com/512/7512/7512217.png" },
      { id: "religious", name: "Religious", icon: "https://cdn-icons-png.flaticon.com/512/9638/9638361.png" },
      { id: "cabinet-shelving", name: "Cabinet/shelving unit", icon: "https://cdn-icons-png.flaticon.com/512/2070/2070014.png" }
    ],

    sections: [
      {
        id: "wooden-bed",
        title: "Wooden bed",
        items: [
          {
            title: "Single bed assembly",
            rating: "4.84", reviews: "8K", priceLabel: "Starts at", price: "449", options: "2 options",
            image: "https://images.unsplash.com/photo-1505693416022-14c1c9240ce4?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Double bed assembly",
            rating: "4.86", reviews: "18K", priceLabel: "Starts at", price: "599", options: "2 options",
            image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Hydraulic bed assembly",
            rating: "4.85", reviews: "8K", priceLabel: "Starts at", price: "1,299", options: "2 options",
            image: "https://images.unsplash.com/photo-1583847268964-b28ce8f89f20?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Day/diwan bed assembly",
            rating: "4.81", reviews: "408", priceLabel: "Starts at", price: "549", options: "3 options",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Loft/bunk bed assembly",
            rating: "4.81", reviews: "294", price: "829", duration: "2 hrs 30 mins",
            image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "wardrobe",
        title: "Wardrobe",
        items: [
          {
            title: "Single door wardrobe assembly",
            rating: "4.84", reviews: "862", price: "599", duration: "2 hrs",
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Double door wardrobe assembly",
            rating: "4.83", reviews: "3K", price: "949", duration: "2 hrs 30 mins",
            image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Four door wardrobe assembly",
            rating: "4.80", reviews: "2K", price: "1,649", duration: "3 hrs",
            image: "https://images.unsplash.com/photo-1615876008630-f5a6f2385ff2?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Sliding door wardrobe assembly",
            rating: "4.83", reviews: "1K", price: "799", duration: "1 hrs 30 mins",
            image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "dining-kitchen",
        title: "Dining & kitchen",
        items: [
          {
            title: "Wooden dining table assembly",
            rating: "4.85", reviews: "125", priceLabel: "Starts at", price: "349", options: "3 options",
            image: "https://images.unsplash.com/photo-1615876234886-fdba0f5c8115?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Extendable dining table assembly",
            rating: "4.75", reviews: "118", priceLabel: "Starts at", price: "699", options: "2 options",
            image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Dining chair assembly",
            rating: "4.87", reviews: "792", priceLabel: "Starts at", price: "199", options: "2 options",
            image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Dining table with chair assembly",
            rating: "4.80", reviews: "897", priceLabel: "Starts at", price: "449", options: "4 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Utensil rack assembly",
            rating: "4.78", reviews: "288", price: "269", duration: "30 mins",
            image: "https://images.unsplash.com/photo-1556693682-019623e13d96?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Bar cabinet assembly",
            rating: "4.86", reviews: "120", price: "449", duration: "45 mins",
            image: "https://images.unsplash.com/photo-1585050516709-08ee85cd17cb?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Bar stool assembly",
            rating: "4.83", reviews: "82", price: "299", duration: "60 mins",
            image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Bar table set assembly",
            rating: "4.90", reviews: "24", priceLabel: "Starts at", price: "1,099", options: "2 options",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "tables-chairs",
        title: "Tables & chairs",
        items: [
          {
            title: "Study table assembly",
            rating: "4.85", reviews: "4K", priceLabel: "Starts at", price: "449", options: "2 options",
            image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Standing table assembly",
            rating: "4.87", reviews: "813", price: "899", duration: "2 hrs 30 mins",
            image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Coffee table assembly",
            rating: "4.87", reviews: "2K", priceLabel: "Starts at", price: "199", options: "2 options",
            image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Side table assembly",
            rating: "4.85", reviews: "2K", priceLabel: "Starts at", price: "199", options: "2 options",
            image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Office chair assembly",
            rating: "4.85", reviews: "5K", priceLabel: "Starts at", price: "249", options: "2 options",
            image: "https://images.unsplash.com/photo-1505773290820-2b993ee3a52e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Gaming chair assembly",
            rating: "4.83", reviews: "262", priceLabel: "Starts at", price: "499", options: "2 options",
            image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Chair assembly",
            rating: "4.85", reviews: "280", price: "249", duration: "45 mins",
            image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Table/chair wheels fitting",
            rating: "4.77", reviews: "2K", price: "199", duration: "30 mins",
            image: "https://images.unsplash.com/photo-1580216743936-2357c327ff7b?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Stool assembly",
            rating: "4.85", reviews: "292", priceLabel: "Starts at", price: "179", options: "2 options",
            image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Bench assembly",
            rating: "4.84", reviews: "225", priceLabel: "Starts at", price: "249", options: "2 options",
            image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "children",
        title: "Children",
        items: [
          {
            title: "Changing table assembly",
            rating: "4.83", reviews: "53", priceLabel: "Starts at", price: "449", options: "2 options",
            image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Cot assembly",
            rating: "4.83", reviews: "114", price: "399", duration: "30 mins",
            image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "High chair assembly",
            rating: "4.77", reviews: "152", price: "279", duration: "30 mins",
            image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Children's bed assembly",
            rating: "4.85", reviews: "252", priceLabel: "Starts at", price: "449", options: "4 options",
            image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "living-tv",
        title: "Living & TV",
        items: [
          {
            title: "Sofa assembly",
            rating: "4.82", reviews: "3K", priceLabel: "Starts at", price: "449", options: "4 options",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Chaise lounger assembly",
            rating: "4.73", reviews: "54", price: "449", duration: "1 hr 30 mins",
            image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "L-shaped sofa assembly",
            rating: "4.85", reviews: "280", priceLabel: "Starts at", price: "599", options: "2 options",
            image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Corner sofa assembly",
            rating: "4.85", reviews: "78", priceLabel: "Starts at", price: "599", options: "2 options",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Sofa cum bed assembly",
            rating: "4.84", reviews: "855", priceLabel: "Starts at", price: "549", options: "2 options",
            image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Recliner assembly",
            rating: "4.75", reviews: "651", priceLabel: "Starts at", price: "399", options: "3 options",
            image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "TV bench assembly",
            rating: "4.87", reviews: "2K", priceLabel: "Starts at", price: "449", options: "3 options",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "TV unit assembly",
            rating: "4.84", reviews: "2K", priceLabel: "Starts at", price: "899", options: "3 options",
            image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "outdoor",
        title: "Outdoor",
        items: [
          {
            title: "Swing chair assembly & installation",
            rating: "4.80", reviews: "221", priceLabel: "Starts at", price: "449", options: "2 options",
            image: "https://images.unsplash.com/photo-1582260667954-4f9e15918bd5?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Outdoor table & chairs assembly",
            rating: "4.60", reviews: "21", priceLabel: "Starts at", price: "219", options: "3 options",
            image: "https://images.unsplash.com/photo-1580216743936-2357c327ff7b?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Patio dining set assembly",
            rating: "4.56", reviews: "19", priceLabel: "Starts at", price: "449", options: "2 options",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "religious",
        title: "Religious",
        items: [
          {
            title: "Mandir assembly & installation",
            rating: "4.85", reviews: "691", price: "199", duration: "20 mins",
            image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Pooja shelf assembly & installation",
            rating: "4.81", reviews: "628", price: "279", duration: "40 mins",
            image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "cabinet-shelving",
        title: "Cabinet/shelving unit",
        items: [
          {
            title: "Wall shelf installation",
            rating: "4.80", reviews: "9K", price: "249", duration: "30 mins",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Shelving unit assembly & installation",
            rating: "4.83", reviews: "2K", priceLabel: "Starts at", price: "199", options: "3 options",
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Wall cabinet assembly & installation",
            rating: "4.85", reviews: "1K", priceLabel: "Starts at", price: "249", options: "2 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Mirror cabinet assembly & installation",
            rating: "4.82", reviews: "603", priceLabel: "Starts at", price: "449", options: "2 options",
            image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Wash basin cabinet assembly & installation",
            rating: "4.83", reviews: "215", priceLabel: "Starts at", price: "449", options: "2 options",
            image: "https://images.unsplash.com/photo-1585050516709-08ee85cd17cb?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Dresser/dressing cabinet assembly",
            rating: "4.81", reviews: "2K", priceLabel: "Starts at", price: "449", options: "3 options",
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Magazine & newspaper rack assembly",
            rating: "4.87", reviews: "126", price: "299", duration: "45 mins",
            image: "https://images.unsplash.com/photo-1580216743936-2357c327ff7b?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Hanging screen & dividers assembly & installation",
            rating: "4.86", reviews: "28", price: "649", duration: "60 mins",
            image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Shoe rack assembly",
            rating: "4.85", reviews: "3K", priceLabel: "Starts at", price: "299", options: "4 options",
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Book shelf/bookcase assembly & installation",
            rating: "4.83", reviews: "2K", priceLabel: "Starts at", price: "249", options: "5 options",
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Bookcase with door assembly & installation",
            rating: "4.80", reviews: "484", priceLabel: "Starts at", price: "489", options: "5 options",
            image: "https://images.unsplash.com/photo-1615876008630-f5a6f2385ff2?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  // Add this to your servicePagesData object in data.js

  grouting_waterproofing: {
    title: "Grouting & Waterproofing",
    rating: "4.83",
    bookings: "3K bookings",
    searchPlaceholder: "Search in Grouting & Waterproofing",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop", // Placeholder for the banner
    heroTitle: "Waterproofing that fixes the walls from inside",
    heroSubtitle: "1-year warranty",
    
    // Left sidebar navigation categories
    navCategories: [
      { id: "waterproofing", name: "Waterproofing", icon: "https://cdn-icons-png.flaticon.com/512/3103/3103432.png" },
      { id: "indoor-grouting", name: "Indoor grouting", icon: "https://cdn-icons-png.flaticon.com/512/2735/2735398.png" },
      { id: "outdoor-grouting", name: "Outdoor grouting", icon: "https://cdn-icons-png.flaticon.com/512/8207/8207198.png" }
    ],

    sections: [
      {
        id: "waterproofing",
        title: "Waterproofing",
        items: [
          {
            title: "Wall waterproofing",
            rating: "4.86",
            reviews: "65",
            priceLabel: "Starts at",
            price: "2,800",
            duration: "8 hrs",
            image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=200&auto=format&fit=crop",
            details: [
              "Protect your walls and refresh them with optional painting."
            ]
          }
        ]
      },
      {
        id: "indoor-grouting",
        title: "Indoor grouting",
        items: [
          {
            title: "Kitchen Grouting",
            rating: "4.85",
            reviews: "2K",
            priceLabel: "Starts at",
            price: "2,899",
            duration: "2 hrs",
            image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=200&auto=format&fit=crop",
            details: [
              "Excludes tile fixing, installation or related tile work",
              "Advanced grouting that outlasts white cement."
            ]
          },
          {
            title: "Bathroom Grouting",
            rating: "4.83",
            reviews: "4K",
            priceLabel: "Starts at",
            price: "2,399",
            duration: "2 hrs",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop",
            details: [
              "Excludes tile fixing, installation or related tile work",
              "Advanced grouting that outlasts white cement."
            ]
          }
        ]
      },
      {
        id: "outdoor-grouting",
        title: "Outdoor grouting",
        items: [
          {
            title: "Balcony/Washing Area Grouting",
            rating: "4.85",
            reviews: "1K",
            priceLabel: "Starts at",
            price: "2,499",
            duration: "2 hrs",
            image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=200&auto=format&fit=crop",
            details: [
              "Excludes tile fixing, installation or related tile work",
              "Advanced grouting that outlasts white cement."
            ]
          },
          {
            title: "Terrace grouting",
            rating: "4.88",
            reviews: "1K",
            priceLabel: "Starts at",
            price: "3,899",
            duration: "2 hrs",
            image: "https://images.unsplash.com/photo-1580216743936-2357c327ff7b?q=80&w=200&auto=format&fit=crop",
            details: [
              "Excludes tile fixing, installation or related tile work",
              "Advanced grouting that outlasts white cement."
            ]
          }
        ]
      }
    ]
  },
  ikea_furniture: {
    title: "IKEA Furniture Assembly",
    rating: "4.85",
    bookings: "35K bookings",
    searchPlaceholder: "Search in IKEA Furniture Assembly",
    navCategories: [
      { id: "wardrobes", name: "Wardrobes", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "tables-drawers", name: "Tables & drawers", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "children", name: "Children", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "beds-dining", name: "Beds & dining", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "seating", name: "Seating", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "outdoor", name: "Outdoor", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "storage", name: "Storage", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "furnishing", name: "Furnishing", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "bathroom", name: "Bathroom", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "washbasin-cabinets", name: "Washbasin cabinets", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "tv-furniture", name: "TV furniture", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "kitchen", name: "Kitchen", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" }
    ],
    sections: [
      {
        id: "wardrobes",
        title: "Wardrobes",
        items: [
          { title: "Single wardrobe", rating: "4.83", reviews: "1K", price: "399", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Double door wardrobe", rating: "4.82", reviews: "3K", price: "649", duration: "2 hrs", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Three door wardrobe", rating: "4.80", reviews: "2K", price: "899", duration: "2 hrs 30 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Sliding door wardrobe", rating: "4.77", reviews: "817", price: "749", duration: "2 hrs", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Sliding door wardrobe with drawers", rating: "4.72", reviews: "361", price: "799", duration: "2 hrs", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Single hinge door (per frame)", rating: "4.72", reviews: "186", price: "349", duration: "60 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Double hinge door (per frame)", rating: "4.81", reviews: "517", price: "1,299", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Double sliding door (per frame)", rating: "4.77", reviews: "733", price: "1,149", duration: "2 hrs", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Frame without door (per frame)", rating: "4.80", reviews: "117", price: "199", duration: "45 mins", details: ["Inclusive of all interiors"], image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Standard wardrobe (Upto 3 frames)", rating: "4.75", reviews: "396", price: "499", duration: "2 hrs", details: ["50 minutes", "Inclusive of all interiors"], image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Additional frame", rating: "4.85", reviews: "1K", price: "199", duration: "1 hr 30 mins", details: ["Inclusive of all interiors"], image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" }
        ]
      },
      {
        id: "tables-drawers",
        title: "Tables & drawers",
        items: [
          { title: "Bedside table", rating: "4.80", reviews: "2K", price: "249", duration: "30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Side table", rating: "4.85", reviews: "1K", price: "199", duration: "15 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Coffee table (foldable)", rating: "4.83", reviews: "418", price: "399", duration: "35 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Coffee table (nest of tables)", rating: "4.85", reviews: "891", price: "499", duration: "1 hr 15 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "2 drawer chest", rating: "4.81", reviews: "2K", price: "339", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "3 drawer chest", rating: "4.81", reviews: "2K", price: "339", duration: "2 hrs", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "4 drawer chest", rating: "4.89", reviews: "1K", price: "429", duration: "1 hr 15 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "5 drawer chest", rating: "4.84", reviews: "2K", price: "499", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "6 drawer chest", rating: "4.81", reviews: "111", price: "599", duration: "2 hrs 30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "8 drawer chest", rating: "4.81", reviews: "373", price: "699", duration: "1 hr 35 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Workspace table", rating: "4.80", reviews: "8K", price: "429", duration: "1 hr 15 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Workspace table with drawers", rating: "4.85", reviews: "2K", price: "679", duration: "2 hrs", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Office chair (with arm support)", rating: "4.87", reviews: "1K", price: "419", duration: "40 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Office chair (without arm support)", rating: "4.81", reviews: "405", price: "299", duration: "35 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" }
        ]
      },
      {
        id: "children",
        title: "Children",
        items: [
          { title: "Changing table", rating: "4.82", reviews: "254", price: "199", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Cot", rating: "4.82", reviews: "327", price: "399", duration: "25 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Highchair", rating: "4.91", reviews: "158", price: "249", duration: "20 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Children's bed", rating: "4.78", reviews: "20", price: "449", duration: "2 hrs 30 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Children's extendable bed", rating: "4.85", reviews: "151", price: "599", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Children's bunk bed with drawers", rating: "4.89", reviews: "64", price: "1,499", duration: "4 hrs", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Children's desks and chair", rating: "4.83", reviews: "30", price: "729", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Children's storage furniture", rating: "4.83", reviews: "527", price: "399", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Furniture for small children", rating: "4.83", reviews: "73", price: "299", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Play kitchen", rating: "4.72", reviews: "29", price: "499", duration: "40 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Childrens high chair", rating: "4.86", reviews: "20", price: "279", duration: "30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Children 3 drawer chest of drawer", rating: "4.84", reviews: "61", price: "419", duration: "50 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" }
        ]
      },
      {
        id: "beds-dining",
        title: "Beds & dining",
        items: [
          { title: "Single bed", rating: "4.82", reviews: "1K", price: "499", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Single bed with storage", rating: "4.85", reviews: "249", price: "549", duration: "2 hrs", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Double bed", rating: "4.85", reviews: "3K", price: "599", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Double bed with storage", rating: "4.85", reviews: "2K", price: "929", duration: "2 hrs", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Loft bed and bunk bed", rating: "4.85", reviews: "589", price: "1,299", duration: "3 hrs 30 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Day bed", rating: "4.87", reviews: "235", price: "699", duration: "1 hr 45 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Day bed with 2 drawers", rating: "4.79", reviews: "1K", price: "1,049", duration: "2 hrs", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Day bed with 3 drawers", rating: "4.85", reviews: "1K", price: "1,499", duration: "2 hrs", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Hydraulic bed", rating: "4.85", reviews: "755", price: "1,499", duration: "2 hrs", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Stool", rating: "4.83", reviews: "256", price: "249", duration: "45 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Bench", rating: "4.82", reviews: "85", price: "249", duration: "45 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Chair", rating: "4.86", reviews: "813", price: "249", duration: "55 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Dining table", rating: "4.86", reviews: "847", price: "399", duration: "1 hr 15 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Extendable dining table", rating: "4.84", reviews: "266", price: "549", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Dining table & 2 chairs", rating: "4.85", reviews: "250", price: "499", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Dining table with 2 chairs & bench", rating: "4.88", reviews: "29", price: "549", duration: "2 hrs", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Dining table with 4 chairs", rating: "4.85", reviews: "621", price: "599", duration: "2 hrs", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Dining chair", rating: "4.85", reviews: "674", price: "219", duration: "30 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Loft bed with mesh", rating: "4.81", reviews: "150", price: "1,199", duration: "2 hrs 30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" }
        ]
      },
      {
        id: "seating",
        title: "Seating",
        items: [
          { title: "Armchair", rating: "4.81", reviews: "674", price: "299", duration: "45 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Footstool", rating: "4.88", reviews: "1K", price: "139", duration: "1 hr 15 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "2 seat sofa", rating: "4.82", reviews: "870", price: "449", duration: "50 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "3 seat sofa", rating: "4.87", reviews: "2K", price: "599", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "4 seat sofa", rating: "4.81", reviews: "452", price: "749", duration: "2 hrs", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Corner sofa", rating: "4.88", reviews: "56", price: "899", duration: "2 hrs 30 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "3 seat sofa bed", rating: "4.87", reviews: "810", price: "699", duration: "2 hrs", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Corner sofa bed", rating: "4.81", reviews: "598", price: "869", duration: "1 hr 35 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Chaise lounge", rating: "4.88", reviews: "276", price: "349", duration: "1 hr 45 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Reclining chair", rating: "4.74", reviews: "208", price: "399", duration: "1 hr", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Storage foot bench", rating: "4.86", reviews: "26", price: "149", duration: "30 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" }
        ]
      },
      {
        id: "outdoor",
        title: "Outdoor",
        items: [
          { title: "Outdoor dining table", rating: "4.80", reviews: "140", price: "299", duration: "45 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Outdoor sofa", rating: "4.80", reviews: "30", price: "499", duration: "2 hrs", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Outdoor storage", rating: "4.88", reviews: "49", price: "299", duration: "45 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" }
        ]
      },
      {
        id: "storage",
        title: "Storage",
        items: [
          { title: "Shelving unit (4 shelves)", rating: "4.88", reviews: "1K", price: "249", duration: "35 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Shelving unit (16 shelves)", rating: "4.84", reviews: "1K", price: "499", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Shoe cabinet (2 compartments)", rating: "4.84", reviews: "1K", price: "299", duration: "45 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Shoe cabinet (4 compartments)", rating: "4.87", reviews: "2K", price: "349", duration: "60 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Trolley", rating: "4.86", reviews: "570", price: "249", duration: "40 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Metal cabinet", rating: "4.86", reviews: "149", price: "249", duration: "50 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Glass cabinet", rating: "4.79", reviews: "316", price: "499", duration: "2 hrs", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Glass door cabinet", rating: "4.79", reviews: "219", price: "499", duration: "2 hrs", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Pegboard", rating: "4.83", reviews: "519", price: "199", duration: "30 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Open storage solution (big)", rating: "4.77", reviews: "620", price: "799", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Open storage solution (small)", rating: "4.80", reviews: "493", price: "249", duration: "45 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "3 shelf bookcase", rating: "4.83", reviews: "544", price: "249", duration: "45 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "6 shelf bookcase", rating: "4.85", reviews: "904", price: "349", duration: "1 hr", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "9 shelf bookcase", rating: "4.82", reviews: "109", price: "499", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "12 shelf bookcase", rating: "4.86", reviews: "65", price: "599", duration: "2 hrs", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Glass door bookcase (6 shelves)", rating: "4.86", reviews: "357", price: "449", duration: "1 hr 15 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Glass door bookcase (12 shelves)", rating: "4.86", reviews: "328", price: "519", duration: "45 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Glass door bookcase (24 shelves)", rating: "4.84", reviews: "158", price: "1,199", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Bookcase with door", rating: "4.80", reviews: "638", price: "649", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Bookcase with 2 doors/drawers", rating: "4.87", reviews: "1K", price: "749", duration: "2 hrs", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Eket storage", rating: "4.84", reviews: "26", price: "479", duration: "60 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Eket storage with drawers", rating: "4.83", reviews: "281", price: "499", duration: "30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Eket storage with door", rating: "4.85", reviews: "133", price: "519", duration: "30 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Lonset-bed", rating: "4.80", reviews: "19", price: "349", duration: "30 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" }
        ]
      },
      {
        id: "furnishing",
        title: "Furnishing",
        items: [
          { title: "Curtain rod", rating: "4.80", reviews: "2K", price: "299", duration: "1 hr 15 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Hat rack", rating: "4.83", reviews: "230", price: "149", duration: "30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Wall shelf (per unit)", rating: "4.81", reviews: "2K", price: "249", duration: "30 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Storage box with lid", rating: "4.84", reviews: "81", price: "39", duration: "10 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Wall shelf (combination)", rating: "4.80", reviews: "142", price: "499", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" }
        ]
      },
      {
        id: "bathroom",
        title: "Bathroom",
        items: [
          { title: "Wash-stand with sink installation", rating: "4.76", reviews: "505", price: "1,029", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Wash-stand without sink installation", rating: "4.87", reviews: "30", price: "399", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Shelving unit", rating: "4.86", reviews: "20", price: "249", duration: "45 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Mirror cabinet (2 doors)", rating: "4.76", reviews: "247", price: "599", duration: "1 hr 45 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Mirror cabinet (1 door)", rating: "4.85", reviews: "268", price: "499", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Wall cabinet (1 door)", rating: "4.87", reviews: "3K", price: "399", duration: "2 hrs", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "High cabinet", rating: "4.88", reviews: "100", price: "499", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Single mirror", rating: "4.87", reviews: "2K", price: "349", duration: "45 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Shower screen installation", rating: "4.88", reviews: "32", price: "649", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Bathroom high cabinet", rating: "4.74", reviews: "82", price: "629", duration: "60 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Bathroom shelving unit", rating: "4.80", reviews: "38", price: "649", duration: "45 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Bathroom lights", rating: "4.78", reviews: "86", price: "219", duration: "20 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Bathroom shelf", rating: "4.80", reviews: "124", price: "469", duration: "30 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" }
        ]
      },
      {
        id: "washbasin-cabinets",
        title: "Washbasin cabinets",
        items: [
          { title: "Wash basin cabinet with 2 drawers (60x40x60 cm)", rating: "4.82", reviews: "14", priceLabel: "Starts at", price: "419", options: "3 options", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Wash basin cabinet with shelf", rating: "4.84", reviews: "108", priceLabel: "Starts at", price: "429", options: "3 options", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Base frame for washbasin (60x40x60 cm)", rating: "4.83", reviews: "23", priceLabel: "Starts at", price: "189", options: "2 options", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "High cabinet with 4 shelves (30x30x180 cm)", rating: "4.85", reviews: "127", price: "419", duration: "40 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Base frame with shelves (30x30x180 cm)", rating: "4.85", reviews: "127", priceLabel: "Starts at", price: "349", options: "2 options", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Wall cabinet with 2 shelves", rating: "4.77", reviews: "380", priceLabel: "Starts at", price: "239", options: "3 options", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Wall frame with shelves", rating: "4.87", reviews: "151", priceLabel: "Starts at", price: "249", options: "2 options", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" }
        ]
      },
      {
        id: "tv-furniture",
        title: "TV furniture",
        items: [
          { title: "TV bench", rating: "4.82", reviews: "831", price: "649", duration: "1 hr 45 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "TV bench (2 drawers)", rating: "4.84", reviews: "1K", price: "849", duration: "2 hrs", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "TV unit (bench & storage)", rating: "4.89", reviews: "211", price: "1,499", duration: "3 hrs", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "TV unit (bench & cabinet)", rating: "4.80", reviews: "595", price: "899", duration: "2 hrs 30 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" }
        ]
      },
      {
        id: "kitchen",
        title: "Kitchen",
        items: [
          { title: "1 door cabinet", rating: "4.84", reviews: "330", price: "499", duration: "1 hr 25 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "2 door cabinet", rating: "4.88", reviews: "332", price: "549", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "3 door cabinet", rating: "4.82", reviews: "216", price: "599", duration: "1 hr 40 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" },
          { title: "Enhet base kitchen cabinet", rating: "4.78", reviews: "68", price: "549", duration: "1 hr 30 mins", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop" },
          { title: "Enhet wall kitchen cabinet", rating: "4.76", reviews: "49", price: "629", duration: "60 mins", image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop" },
          { title: "Enhet open base kitchen cabinet", rating: "4.85", reviews: "27", price: "519", duration: "60 mins", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop" },
          { title: "Enhet open wall kitchen cabinet", rating: "4.84", reviews: "11", price: "549", duration: "50 mins", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop" }
        ]
      }
    ]
  },
  sofa_carpet_cleaning: {
    title: "Sofa & Carpet Cleaning",
    rating: "4.85",
    bookings: "3.0 M bookings",
    searchPlaceholder: "Search for sofa, carpet, or mattress cleaning",
    heroImage: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000&auto=format&fit=crop",
    heroTitle: "Revive your living space",
    heroSubtitle: "Verified professionals using safe chemicals for superior stain removal.",
    
    // Top navigation scroll menu
    topNavCategories: [
      { name: "Sofa cleaning", icon: "https://cdn-icons-png.flaticon.com/512/2613/2613135.png", id: "sofa-cleaning" },
      { name: "Carpet", icon: "https://cdn-icons-png.flaticon.com/512/3233/3233934.png", id: "carpet" },
      { name: "Dining table", icon: "https://cdn-icons-png.flaticon.com/512/2836/2836502.png", id: "dining-table" },
      { name: "Mattress", icon: "https://cdn-icons-png.flaticon.com/512/3133/3133643.png", id: "mattress" }
    ],

    sections: [
      {
        id: "sofa-cleaning",
        title: "Sofa cleaning",
        items: [
          {
            id: "sofa_3_seater",
            title: "3-Seater Sofa Cleaning",
            rating: "4.85",
            reviews: "12K",
            price: 799,
            duration: "1 hr 30 mins",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=200&auto=format&fit=crop",
            details: [
              "Deep vacuuming to remove dust and dirt",
              "Shampooing of sofa seats, armrests, and backrests",
              "Dry vacuuming to remove residual moisture"
            ],
            isBestseller: true
          },
          {
            id: "sofa_5_seater",
            title: "5-Seater Sofa Cleaning",
            rating: "4.82",
            reviews: "8K",
            price: 1199,
            duration: "2 hrs",
            image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=200&auto=format&fit=crop",
            details: [
              "Standard 5-seater (3+1+1 or L-shaped) deep clean",
              "Superior stain removal for food and pet marks",
              "Fabric conditioning for a fresh feel"
            ]
          }
        ]
      },
      {
        id: "carpet",
        title: "Carpet Cleaning",
        items: [
          {
            id: "carpet_small",
            title: "Carpet Cleaning (Up to 25 sq. ft)",
            rating: "4.79",
            reviews: "4K",
            price: 499,
            duration: "45 mins",
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=200&auto=format&fit=crop",
            details: [
              "Mechanized scrubbing with safe chemicals",
              "Perfect for small living room or bedroom rugs",
              "Takes 4-6 hours to dry completely post-service"
            ]
          },
          {
            id: "carpet_large",
            title: "Carpet Cleaning (Up to 50 sq. ft)",
            rating: "4.88",
            reviews: "3.5K",
            price: 899,
            duration: "1 hr 15 mins",
            image: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=200&auto=format&fit=crop",
            details: [
              "Heavy duty mechanized cleaning for large carpets",
              "Odor removal and deep fiber wash"
            ],
            isBestseller: true
          }
        ]
      },
      {
        id: "dining-table",
        title: "Dining table",
        items: [
          {
            id: "dining_6_seater",
            title: "6-Seater Dining Chair Cleaning",
            rating: "4.80",
            reviews: "2K",
            price: 599,
            duration: "1 hr",
            image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=200&auto=format&fit=crop",
            details: [
              "Shampooing of upholstered dining chairs",
              "Wipe down of wooden/glass table top",
              "Removal of tough food stains and grease"
            ]
          }
        ]
      },
      {
        id: "mattress",
        title: "Mattress Cleaning",
        items: [
          {
            id: "mattress_queen",
            title: "Queen Size Mattress Cleaning",
            rating: "4.90",
            reviews: "5K",
            price: 899,
            duration: "1 hr",
            image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=200&auto=format&fit=crop",
            details: [
              "Deep vacuuming to extract dust mites and allergens",
              "Wet shampooing of both sides of the mattress",
              "Spot treatment for sweat and liquid stains"
            ],
            isBestseller: true
          }
        ]
      }
    ]
  },
  cockroach_control: {
    title: "Cockroach, Ant & General Pest Control",
    rating: "4.82",
    bookings: "1.4 M bookings",
    searchPlaceholder: "Search for cockroach or ant control",
    heroImage: "https://images.pexels.com/photos/4098323/pexels-photo-4098323.jpeg",
    heroTitle: "Keep your home safe and pest-free",
    heroSubtitle: "Odorless, safe chemicals approved by the EPA. Safe for kids and pets.",
    
    topNavCategories: [
      { name: "Kitchen & Bathroom", icon: "https://cdn-icons-png.flaticon.com/512/2723/2723658.png", id: "kitchen-bathroom" },
      { name: "Apartment & Bungalow", icon: "https://cdn-icons-png.flaticon.com/512/2558/2558012.png", id: "apartment" }
    ],

    sections: [
      {
        id: "kitchen-bathroom",
        title: "Kitchen & Bathroom",
        items: [
          {
            id: "pest_kitchen_bath",
            title: "Kitchen & Bathroom Pest Control",
            rating: "4.80",
            reviews: "45K",
            price: 899,
            duration: "45 mins",
            image: "https://images.pexels.com/photos/6510969/pexels-photo-6510969.jpeg",
            details: [
              "Gel application in cabinets and crevices",
              "Spray treatment in bathroom drains and corners",
              "Highly effective against cockroaches and ants",
              "No need to empty out the kitchen"
            ],
            isBestseller: true
          }
        ]
      },
      {
        id: "apartment",
        title: "Apartment & Bungalow",
        items: [
          {
            id: "pest_1_bhk",
            title: "1 RK / 1 BHK General Pest Control",
            rating: "4.82",
            reviews: "112K",
            price: 1199,
            duration: "1 hr",
            image: "https://images.pexels.com/photos/30808022/pexels-photo-30808022.jpeg",
            details: [
              "Complete indoor treatment covering all rooms",
              "Odorless spray for skirting boards and corners",
              "Gel baiting for hinges and electrical boxes"
            ]
          },
          {
            id: "pest_2_bhk",
            title: "2 BHK General Pest Control",
            rating: "4.85",
            reviews: "205K",
            price: 1499,
            duration: "1 hr 30 mins",
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=200&auto=format&fit=crop",
            details: [
              "Complete indoor treatment covering 2 bedrooms, hall, and kitchen",
              "Odorless spray for skirting boards and corners",
              "4-month warranty with 1 free follow-up if needed"
            ],
            isBestseller: true
          },
          {
            id: "pest_3_bhk",
            title: "3 BHK / Bungalow Pest Control",
            rating: "4.81",
            reviews: "89K",
            price: 1999,
            duration: "2 hrs",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=200&auto=format&fit=crop",
            details: [
              "Comprehensive treatment for large spaces",
              "Balcony and utility area coverage included",
              "6-month warranty included"
            ]
          }
        ]
      }
    ]
  },

  ant_control: {
    title: "Ant Control Service",
    rating: "4.88",
    bookings: "450K bookings",
    searchPlaceholder: "Search for red ant or black ant control",
    heroImage: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1200&auto=format&fit=crop",
    heroTitle: "Stop the trail today",
    heroSubtitle: "Advanced sugar-based gel and spray technology to eliminate the entire colony.",
    
    navCategories: [
      { id: "ant-residential", name: "Residential", icon: "https://cdn-icons-png.flaticon.com/512/1239/1239525.png" },
      { id: "ant-garden", name: "Garden/Outdoor", icon: "https://cdn-icons-png.flaticon.com/512/628/628283.png" },
      { id: "ant-mini", name: "Specific spots", icon: "https://cdn-icons-png.flaticon.com/512/2554/2554030.png" }
    ],

    sections: [
      {
        id: "ant-residential",
        title: "Home Ant Control",
        items: [
          {
            id: "ant_1bhk",
            title: "1 BHK Ant Control",
            rating: "4.85",
            reviews: "12K",
            price: "649",
            originalPrice: "799",
            duration: "40 mins",
            image: "https://images.unsplash.com/photo-1744700738333-ecf49f3edae1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            details: [
              "Targeted gel baiting for sugar and carpenter ants",
              "Skirting board spray to prevent entry",
              "Colony elimination technology (kills the queen)",
              "Odorless and kid-safe treatment"
            ],
            isBestseller: true
          },
          {
            id: "ant_2_3bhk",
            title: "2-3 BHK Ant Control",
            rating: "4.89",
            reviews: "28K",
            price: "949",
            originalPrice: "1199",
            duration: "1 hr",
            image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=400&auto=format&fit=crop",
            details: [
              "Full coverage for bedrooms, kitchen, and balconies",
              "Deep injection in wall cracks and wooden fixtures",
              "3-month protection warranty"
            ]
          }
        ]
      },
      {
        id: "ant-garden",
        title: "Outdoor & Garden",
        items: [
          {
            id: "ant_garden_large",
            title: "Garden/Balcony Ant Control",
            rating: "4.79",
            reviews: "8K",
            price: "499",
            duration: "30 mins",
            image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=400&auto=format&fit=crop",
            details: [
              "Granular baiting for red ant hills",
              "Protective barrier spray for planters and soil",
              "Safe for most household plants"
            ]
          }
        ]
      },
      {
        id: "ant-mini",
        title: "Spot Treatments",
        items: [
          {
            id: "ant_kitchen_only",
            title: "Kitchen-only Ant Protection",
            rating: "4.82",
            reviews: "15K",
            price: "349",
            duration: "20 mins",
            image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1568&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            details: ["Focus on cabinets, pantry area and food storage points"]
          }
        ]
      }
    ]
  },

  termite_control: {
    title: "Termite Control",
    rating: "4.84",
    bookings: "64K bookings",
    searchPlaceholder: "Search for termite or wood-borer control",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
    heroTitle: "Protect your furniture and foundation",
    heroSubtitle: "Advanced drill-fill-seal technique with comprehensive warranty.",
    
    topNavCategories: [
      { name: "Choose your space", icon: "https://cdn-icons-png.flaticon.com/512/2558/2558012.png", id: "termite-spaces" }
    ],

    sections: [
      {
        id: "termite-spaces",
        title: "Termite Treatment Packages",
        items: [
          {
            id: "termite_1_bhk",
            title: "1 BHK Termite Control",
            rating: "4.81",
            reviews: "15K",
            price: 3999,
            duration: "3 hrs",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=200&auto=format&fit=crop",
            details: [
              "Drill, fill, and seal method for walls and woodwork",
              "Termiticide injection for long-lasting protection",
              "1-Year warranty against termite resurgence"
            ]
          },
          {
            id: "termite_2_bhk",
            title: "2 BHK Termite Control",
            rating: "4.86",
            reviews: "28K",
            price: 4999,
            duration: "4 hrs",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=200&auto=format&fit=crop",
            details: [
              "Comprehensive drill-fill-seal for all rooms",
              "Treatment of wooden wardrobes and door frames",
              "1-Year warranty included"
            ],
            isBestseller: true
          },
          {
            id: "termite_3_bhk",
            title: "3 BHK Termite Control",
            rating: "4.83",
            reviews: "12K",
            price: 5999,
            duration: "5 hrs",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=200&auto=format&fit=crop",
            details: [
              "Full house protection for large apartments",
              "Safe and certified chemicals used",
              "Free inspection during the 1-year warranty period"
            ]
          }
        ]
      }
    ]
  },

  bed_bugs_control: {
    title: "Bed Bugs Control",
    rating: "4.78",
    bookings: "73K bookings",
    searchPlaceholder: "Search for bed bugs control",
    heroImage: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1000&auto=format&fit=crop",
    heroTitle: "Sleep tight, bug-free nights",
    heroSubtitle: "Thorough 2-visit treatment to break the bed bug life cycle completely.",
    
    topNavCategories: [
      { name: "Bed bugs control", icon: "https://cdn-icons-png.flaticon.com/512/3133/3133643.png", id: "bed-bugs" }
    ],

    sections: [
      {
        id: "bed-bugs",
        title: "Bed Bugs Control Packages",
        items: [
          {
            id: "bedbugs_1_bhk",
            title: "1 BHK Bed Bugs Treatment",
            rating: "4.75",
            reviews: "18K",
            price: 1599,
            duration: "1 hr 30 mins",
            image: "https://images.unsplash.com/photo-1536882240095-0379873feb4e?q=80&w=200&auto=format&fit=crop",
            details: [
              "Includes 2 services spaced 15 days apart",
              "Chemical spray on beds, mattresses, and furniture",
              "Kills adult bugs and prevents egg hatching",
              "Rooms must be kept closed for 3-4 hours post-service"
            ]
          },
          {
            id: "bedbugs_2_bhk",
            title: "2 BHK Bed Bugs Treatment",
            rating: "4.78",
            reviews: "33K",
            price: 2199,
            duration: "2 hrs",
            image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=200&auto=format&fit=crop",
            details: [
              "Complete 2-visit treatment for 2 bedrooms and hall",
              "Injection of chemicals in bed frames and wall cracks",
              "45-day warranty after the 2nd visit"
            ],
            isBestseller: true
          },
          {
            id: "bedbugs_3_bhk",
            title: "3 BHK Bed Bugs Treatment",
            rating: "4.76",
            reviews: "15K",
            price: 2899,
            duration: "2 hrs 30 mins",
            image: "https://images.pexels.com/photos/30808022/pexels-photo-30808022.jpeg",
            details: [
              "Extensive 2-visit treatment for entire house",
              "Treats sofas, cushions, curtains, and mattresses",
              "45-day warranty after the 2nd visit"
            ]
          }
        ]
      }
    ]
  },
  
  full_home_makeover: {
  title: "Full home makeover",
  rating: "4.80",
  bookings: "437 bookings",
  searchPlaceholder: "Search in Full home makeover",
  heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
  heroTitle: "Complete home makeover, without a hassle",
  heroSubtitle: "Handled by the best: Background verified professionals & dedicated managers.",

  // 1. ADD THIS: This prevents the ".map() of undefined" error for the top menu
  topNavCategories: [
    { name: "Consultation", icon: "https://cdn-icons-png.flaticon.com/512/942/942799.png" },
    { name: "All Services", icon: "https://cdn-icons-png.flaticon.com/512/2321/2321390.png" }
  ],

  // 2. Updated sections to ensure items don't break the UI
  sections: [
    {
      id: "consultation",
      title: "At Home Consultation",
      items: [
        {
          title: "At Home Consultation",
          rating: "4.81",
          reviews: "409",
          price: "49",
          duration: "1 hr 30 mins",
          image: "https://images.unsplash.com/photo-1607530666991-8f521742404e?q=80&w=200&auto=format&fit=crop",
          details: [
            "Our expert will visit to understand your needs & offer tailored advice",
            "Get a personalized quote detailing price, material & project scope"
          ]
        }
      ]
    },
    {
      id: "all-services",
      title: "Explore all services",
      items: [
        { 
          title: "Interior painting", 
          rating: "4.85", reviews: "12K", price: "Flexible", 
          image: "https://images.unsplash.com/photo-1589939705384-5185138a0470?q=80&w=200&auto=format&fit=crop",
          details: ["Premium finishes", "Furniture masking included"]
        },
        { 
          title: "Exterior painting", 
          rating: "4.79", reviews: "8K", price: "Flexible",
          image: "https://images.unsplash.com/photo-1518605336344-44d3e5215114?q=80&w=200&auto=format&fit=crop",
          details: ["Weather-proof coating", "Crack bridging technology"]
        },
        { 
          title: "Wall panels", 
          rating: "4.88", reviews: "2K", price: "Starts at 299/sqft",
          image: "https://images.unsplash.com/photo-1615876234886-fdba0f5c8115?q=80&w=200&auto=format&fit=crop",
          details: ["PVC & Charcoal options", "Waterproof & termite proof"]
        },
        { 
          title: "Wall mouldings", 
          rating: "4.90", reviews: "1K", price: "Starts at 150/ft",
          image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=200&auto=format&fit=crop",
          details: ["Classic European designs", "High-density polyurethane"]
        },
        { 
          title: "Wall textures", 
          rating: "4.82", reviews: "5K", price: "Starts at 45/sqft",
          image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=200&auto=format&fit=crop",
          details: ["Metallic & Non-metallic", "Abstract patterns"]
        },
        { 
          title: "Wood polishing", 
          rating: "4.75", reviews: "3K", price: "Flexible",
          image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop",
          details: ["PU, Melamine & French Polish", "Old furniture restoration"]
        },
        { 
          title: "Woodwork", 
          rating: "4.89", reviews: "4K", price: "Project based",
          image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=200&auto=format&fit=crop",
          details: ["Custom wardrobes", "TV units & Modular kitchens"]
        }
      ]
    }
  ]
},
  salon_prime_men: {
    title: "Salon Prime for Men",
    rating: "4.84",
    bookings: "7.4 M bookings",
    searchPlaceholder: "Search in Salon Prime for Men",
    navCategories: [
      { id: "packages", name: "Packages", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "haircut-beard-styling", name: "Haircut & beard styling", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "facial-cleanup", name: "Facial & cleanup", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "detan", name: "Detan", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "manicure-pedicure", name: "Manicure & pedicure", icon: "https://cdn-icons-png.flaticon.com/512/2822/2822081.png" },
      { id: "massage", name: "Massage", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "hair-color", name: "Hair color", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" }
    ],
    sections: [
      {
        id: "packages",
        title: "Packages",
        items: [
          {
            title: "Haircut & massage",
            rating: "4.86",
            reviews: "741K",
            price: "388",
            duration: "40 mins",
            details: [
              "Haircut: Haircut for men",
              "Massage: 10 min relaxing Head massage"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Grooming essentials",
            rating: "4.86",
            reviews: "575K",
            price: "587",
            duration: "1 hr 5 mins",
            details: [
              "Haircut: Haircut for men",
              "Beard or shaving grooming: Beard trimming & styling",
              "Massage: Head massage (10 mins)"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Haircut & color",
            rating: "4.86",
            reviews: "51K",
            price: "608",
            duration: "60 mins",
            details: [
              "Haircut or color: Haircut for men",
              "Hair color (Garnier): Brown black (shade 3)"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Hair & care",
            rating: "4.85",
            reviews: "83K",
            price: "808",
            originalPrice: "858",
            duration: "1 hr 5 mins",
            details: [
              "Haircut: Haircut for men",
              "Pedicure: Brightening lemon express pedicure"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Face care & beyond",
            rating: "4.85",
            reviews: "31K",
            price: "958",
            duration: "1 hr 5 mins",
            details: [
              "Haircut: Haircut for men",
              "Facial or cleanup: Charcoal De-toxifying Cleanup"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Make your own package",
            rating: "4.84",
            reviews: "1.2M",
            price: "1,604",
            originalPrice: "1,784",
            duration: "2 hrs 5 mins",
            discount: "10% OFF",
            details: [
              "Haircut: Haircut for men",
              "Shave or beard grooming: Beard trimming & styling",
              "Facial or cleanup: Charcoal De-toxifying Cleanup",
              "Pedicure: Brightening lemon express pedicure"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "haircut-beard-styling",
        title: "Haircut & beard styling",
        items: [
          {
            title: "Haircut for men",
            rating: "4.87",
            reviews: "471K",
            price: "259",
            duration: "30 mins",
            details: [
              "Professional haircut that suits your face shape"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Haircut for kids",
            rating: "4.85",
            reviews: "206K",
            price: "259",
            duration: "30 mins",
            details: [
              "Specially trained stylists for boys aged 2 years and above"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Clean shave",
            rating: "4.86",
            reviews: "70K",
            price: "199",
            duration: "20 mins",
            details: [
              "Unisex shave with a single-use blade for the closest shave"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Beard trimming & styling",
            rating: "4.86",
            reviews: "142K",
            price: "199",
            duration: "25 mins",
            details: [
              "Get customized beard shaping from trained stylists"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Beard color (with product)",
            rating: "4.75",
            reviews: "17K",
            price: "199",
            duration: "30 mins",
            details: [
              "Even & mess-free colour application"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "facial-cleanup",
        title: "Facial & cleanup",
        items: [
          {
            title: "Skin brightening facial",
            rating: "4.74",
            reviews: "35K",
            price: "1,449",
            duration: "1 hr 5 mins",
            details: [
              "Orange peel extracts, vit C, green tea enriched facial to reduce dullness"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Skin hydrating facial",
            rating: "4.75",
            reviews: "8K",
            price: "1,449",
            duration: "1 hr 5 mins",
            details: [
              "Mulberry/saffron,arbutin enriched facial for deep cleansing & boosted hydration"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Office-ready cleanup",
            rating: "4.76",
            reviews: "8K",
            price: "699",
            duration: "35 mins",
            details: [
              "Vit-E, charcoal extracts, lemon enriched cleanup to cleanse & soften the skin"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Oil-free vacation cleanup",
            rating: "4.77",
            reviews: "3K",
            price: "699",
            duration: "35 mins",
            details: [
              "Vit-C, green tea, grapefruit enriched cleanup to absorb oil & control sebum"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Charcoal de-toxifying cleanup",
            rating: "4.75",
            reviews: "89K",
            price: "699",
            duration: "35 mins",
            details: [
              "Charcoal extracts for deep cleansing, dead skin removal & soft skin",
              "Product used of Bombay Shaving Company"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "detan",
        title: "Detan",
        items: [
          {
            title: "Face & neck detan",
            rating: "4.75",
            reviews: "10K",
            price: "499",
            duration: "20 mins",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Hands detan",
            rating: "4.77",
            reviews: "4K",
            price: "499",
            duration: "30 mins",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "manicure-pedicure",
        title: "Manicure & pedicure",
        items: [
          {
            title: "Chocolate & vanilla sole rejuvenating pedicure",
            rating: "4.80",
            reviews: "6K",
            price: "899",
            originalPrice: "949",
            duration: "1 hr 20 mins",
            details: [
              "Premium nail & foot care to remove dead skin, calluses & odour",
              "Includes relaxing salt soak, scrub, cream massage & mask"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Brightening lemon deep cleanse pedicure",
            rating: "4.80",
            reviews: "32K",
            price: "799",
            duration: "60 mins",
            details: [
              "Premium nail & foot care to remove dead skin, calluses & odour",
              "Includes smoothie mask, relaxing warm water soak, scrub, cream massage"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Brightening lemon express pedicure",
            rating: "4.78",
            reviews: "24K",
            price: "549",
            duration: "30 mins",
            details: [
              "Nail & foot care for regular maintenance",
              "Includes warm water soak, cleansing & massage"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Express manicure",
            rating: "4.75",
            reviews: "9K",
            price: "499",
            duration: "30 mins",
            details: [
              "Nail & hand care for regular maintenance",
              "Includes warm water soak, cleansing & massage"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Nail cut & file (hands)",
            rating: "4.82",
            reviews: "16K",
            price: "99",
            duration: "10 mins",
            details: [
              "Quick & basic nail grooming of your hands"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Nail cut & file (feet)",
            rating: "4.80",
            reviews: "3K",
            price: "99",
            duration: "10 mins",
            details: [
              "Quick & basic nail grooming of your feet"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Foot & calf massage",
            rating: "4.78",
            reviews: "10K",
            price: "199",
            duration: "10 mins",
            details: [
              "Oil massage to treat chronic foot pain & stiff calf muscles"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "massage",
        title: "Massage",
        items: [
          {
            title: "Head massage",
            rating: "4.86",
            reviews: "88K",
            priceLabel: "Starts at",
            price: "129",
            options: "4 options",
            details: [
              "Choose from different types of head massages"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Head, neck & shoulder massage",
            rating: "4.82",
            reviews: "32K",
            price: "349",
            duration: "30 mins",
            details: [
              "Relaxing oil massage to promote hair growth, treat stiff muscle & relieve stress"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Hydrating face massage (10 mins)",
            rating: "4.81",
            reviews: "11K",
            price: "175",
            duration: "10 mins",
            details: [
              "Refreshing massage with a moisturizer to improve blood flow & enhance glow"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Neck & shoulder massage",
            rating: "4.82",
            reviews: "13K",
            price: "249",
            duration: "20 mins",
            details: [
              "Relaxing oil massage to treat stiff/ tense muscles & relieve stress"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "hair-color",
        title: "Hair color",
        items: [
          {
            title: "Hair color (only application)",
            rating: "4.79",
            reviews: "12K",
            price: "199",
            duration: "30 mins",
            details: [
              "Please provide your own hair colour, we'll bring everything else!"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Garnier hair color",
            rating: "4.76",
            reviews: "3K",
            priceLabel: "Starts at",
            price: "349",
            options: "3 options",
            details: [
              "Even & mess-free colour application"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "L'Oreal matrix hair color",
            rating: "4.78",
            reviews: "4K",
            priceLabel: "Starts at",
            price: "449",
            options: "3 options",
            details: [
              "Even & mess-free colour application"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "L'Oreal paris casting creme hair color",
            rating: "4.74",
            reviews: "3K",
            priceLabel: "Starts at",
            price: "499",
            options: "2 options",
            details: [
              "Glossy hair color with dazzling shine"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  hair_studio_women: {
    title: "Hair Studio for Women",
    rating: "4.80",
    bookings: "1.9 M bookings",
    searchPlaceholder: "Search in Hair Studio for Women",
    navCategories: [
      { id: "packages", name: "Packages", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "blow-dry-style", name: "Blow-dry & style", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "cut-trim", name: "Cut & trim", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "hair-care", name: "Hair care", icon: "https://cdn-icons-png.flaticon.com/512/2735/2735398.png" },
      { id: "keratin-botox", name: "Keratin & botox", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "hair-colour", name: "Hair colour", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "hair-extensions", name: "Hair extensions", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "fashion-color", name: "Fashion color", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" }
    ],
    sections: [
      {
        id: "packages",
        title: "Packages",
        items: [
          {
            title: "Haircut & spa",
            rating: "4.82",
            reviews: "107K",
            price: "1,648",
            originalPrice: "1,698",
            duration: "1 hr 45 mins",
            details: [
              "Hair care: L'Oreal hair spa",
              "Haircut: Haircut"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Hair spa & style",
            rating: "4.82",
            reviews: "151K",
            price: "1,498",
            originalPrice: "1,548",
            duration: "1 hr 45 mins",
            details: [
              "Hair care: L'Oreal hair spa",
              "Styling: Blow-dry: in-curl/out-curl"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Haircut & styling",
            rating: "4.83",
            reviews: "343K",
            price: "848",
            originalPrice: "898",
            duration: "1 hr 15 mins",
            details: [
              "Haircut: Haircut",
              "Styling: Blow-dry: in-curl/out-curl"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Wedding-ready group hairstyling",
            rating: "4.68",
            reviews: "72",
            priceLabel: "Starts at",
            price: "1,199",
            options: "3 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Hair trim & spa",
            rating: "4.81",
            reviews: "66K",
            price: "1,548",
            originalPrice: "1,598",
            duration: "1 hr 20 mins",
            details: [
              "Hair trim: Hair trim",
              "Hair care: L'Oreal hair spa"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Haircut & color",
            rating: "4.81",
            reviews: "183K",
            price: "2,497",
            originalPrice: "2,547",
            duration: "1 hr 45 mins",
            details: [
              "Roots Color: L'Oreal Inoa",
              "Haircut: Haircut"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Haircut & botox/keratin",
            rating: "4.82",
            reviews: "105K",
            price: "5,248",
            originalPrice: "5,348",
            duration: "3 hrs 45 mins",
            details: [
              "Keratin: long length",
              "Haircut: Haircut"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "blow-dry-style",
        title: "Blow-dry & style",
        items: [
          {
            title: "Straight & smooth blow-dry",
            rating: "4.82",
            reviews: "45K",
            price: "399",
            duration: "45 mins",
            details: [
              "Sleek, smooth & straight hair with a professional finish"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "In curl/out curl blow-dry",
            rating: "4.84",
            reviews: "28K",
            price: "399",
            duration: "45 mins",
            details: [
              "Curls at the bottom, styled in or out, with a perfect blow-dry finish"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Advanced hairstyling",
            rating: "4.81",
            reviews: "6.5K",
            priceLabel: "Starts at",
            price: "1,000",
            options: "3 options",
            badge: "NEW LAUNCH",
            details: [
              "Transform your look with open, half-tie, braids, waves or side hairstyling"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Advanced Buns",
            rating: "4.81",
            reviews: "205",
            priceLabel: "Starts at",
            price: "1,000",
            options: "3 options",
            badge: "NEW LAUNCH",
            details: [
              "Transform your look with messy, elegant or textured buns"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Hair straightening",
            rating: "4.87",
            reviews: "14K",
            price: "549",
            duration: "45 mins",
            details: [
              "Transform your hair into a sleek, straight look with long-lasting results"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Curls & waves",
            rating: "4.75",
            reviews: "11K",
            price: "549",
            duration: "60 mins",
            details: [
              "Soft curls or waves for a natural, voluminous hairstyle"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "cut-trim",
        title: "Cut & trim",
        items: [
          {
            title: "Haircut for women",
            rating: "4.83",
            reviews: "125K",
            price: "549",
            duration: "45 mins",
            details: [
              "Expert haircut tailored to your style. Blow-dry not included."
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Haircut for kids",
            rating: "4.83",
            reviews: "7K",
            price: "649",
            duration: "45 mins",
            details: [
              "A gentle, stylish haircut with care & precision. For girls aged 6-15."
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Haircut for mom & daughter",
            rating: "4.82",
            reviews: "66K",
            price: "1,148",
            originalPrice: "1,198",
            duration: "2 hrs",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Hair trim",
            rating: "4.82",
            reviews: "33K",
            price: "449",
            duration: "20 mins",
            details: [
              "Split-end removal with minimal length reduction. Blow-dry not included."
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "hair-care",
        title: "Hair care",
        items: [
          {
            title: "L'Oreal hair spa",
            rating: "4.79",
            reviews: "35K",
            price: "1,199",
            duration: "60 mins",
            details: [
              "Steam therapy to deeply nourish hair from scalp to ends, restoring natural shine"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Keratin hair spa",
            rating: "4.81",
            reviews: "8K",
            price: "1,299",
            duration: "60 mins",
            details: [
              "Natural spa that restores moisture & shine to your hair"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Ayurvedic strengthening hair spa",
            rating: "4.74",
            reviews: "10K",
            price: "1,299",
            duration: "60 mins",
            details: [
              "Ayurvedic spa with aloe vera & neem to hydrate the scalp"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "L'Oreal hair repair mask",
            rating: "4.80",
            reviews: "1K",
            price: "949",
            duration: "40 mins",
            details: [
              "Intensive repair mask therapy to strengthen & restore hair"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Head massage",
            rating: "4.79",
            reviews: "14K",
            price: "349",
            duration: "20 mins",
            details: [
              "Gentle massage to help promote blood flow, reduce stress & nourish the scalp",
              "Hair wash & blow dry not included"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Nutri Pearl Hair Spa",
            rating: "4.74",
            reviews: "303",
            price: "1,199",
            originalPrice: "1,299",
            duration: "60 mins",
            details: [
              "Powered by Aloe Vera, Mentha & Pomegranate extracts",
              "Deeply hydrates, softens & revitalizes hair for a healthy shine"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "keratin-botox",
        title: "Keratin & botox",
        items: [
          {
            title: "Hair keratin",
            rating: "4.82",
            reviews: "26K",
            priceLabel: "Starts at",
            price: "3,999",
            options: "2 options",
            details: [
              "Keratin treatment smoothens hair for a shiny, frizz-free look"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Hair botox",
            rating: "4.80",
            reviews: "3K",
            price: "5,499",
            duration: "3 hrs",
            details: [
              "Single-session treatment to repair damaged, frizzy hair & promote healthy scalp"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "hair-colour",
        title: "Hair colour",
        items: [
          {
            title: "Hair colour (application only)",
            rating: "4.81",
            reviews: "42K",
            priceLabel: "Starts at",
            price: "399",
            options: "2 options",
            details: [
              "Even application of the chosen shade from root to tip"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "L'Oreal Inoa root touch-up",
            rating: "4.73",
            reviews: "10K",
            priceLabel: "Starts at",
            price: "1,299",
            options: "3 options",
            details: [
              "Gentle, long-lasting root touch-up with L'Oreal Inoa shades"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "L'Oreal Majirel root touch-up",
            rating: "4.75",
            reviews: "8K",
            priceLabel: "Starts at",
            price: "999",
            options: "3 options",
            details: [
              "Gentle, long-lasting root touch-up with L'Oreal Majirel shades"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "L'Oreal Inoa global color",
            rating: "4.74",
            reviews: "6K",
            priceLabel: "Starts at",
            price: "2,699",
            options: "4 options",
            details: [
              "Even application of the chosen shade from root to tip"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "L'Oreal Majirel global color",
            rating: "4.75",
            reviews: "5K",
            priceLabel: "Starts at",
            price: "2,399",
            options: "4 options",
            details: [
              "Even application of the chosen shade from root to tip"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "hair-extensions",
        title: "Hair extensions",
        items: [
          {
            title: "Scalp Toppers",
            rating: "4.69",
            reviews: "26",
            priceLabel: "Starts at",
            price: "6,499",
            duration: "60 mins",
            details: [
              "Conceals thinning & bald patches on your scalp with color transition"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "fashion-color",
        title: "Fashion color",
        items: [
          {
            title: "L'Oreal Inoa shades",
            rating: "4.58",
            reviews: "610",
            priceLabel: "Starts at",
            price: "2,999",
            options: "3 options",
            details: [
              "L'Oreal Inoa base colour with fashion shades for vibrant, ammonia-free hair"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "L'Oreal balayage/ombre color",
            rating: "4.58",
            reviews: "1K",
            priceLabel: "Starts at",
            price: "3,899",
            options: "4 options",
            details: [
              "Seamless application of the chosen shade with a soft color transition",
              "Blow-dry & hair wash is not included"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "L'Oreal 10 signature highlights",
            rating: "4.67",
            reviews: "824",
            priceLabel: "Starts at",
            price: "3,499",
            options: "4 options",
            details: [
              "Precise application of chosen shade on closely spaced sections",
              "Blow-dry & hair wash is not included"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "L'Oreal Majirel shades",
            rating: "4.64",
            reviews: "806",
            priceLabel: "Starts at",
            price: "2,599",
            options: "4 options",
            details: [
              "L'Oreal Majirel base colour with fashion shades for vibrant hair"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "L'Oreal Inoa root touch-up",
            rating: "4.61",
            reviews: "323",
            priceLabel: "Starts at",
            price: "1,499",
            options: "3 options",
            details: [
              "Hair wash not included",
              "Base hair color of L'oreal Inoa or L'oreal Majirel will be used with fashion shade"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "L'Oreal Majirel root touch-up",
            rating: "4.64",
            reviews: "44",
            priceLabel: "Starts at",
            price: "1,299",
            options: "3 options",
            details: [
              "Hair wash not included",
              "Base hair color of L'oreal Inoa or L'oreal Majirel will be used with fashion shade"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  luxe_spa_women: {
    title: "Luxe Spa for Women",
    rating: "4.88",
    bookings: "234K bookings",
    searchPlaceholder: "Search in Luxe Spa for Women",
    navCategories: [
      { id: "super-saver-packs", name: "Super saver packs", icon: "https://cdn-icons-png.flaticon.com/512/879/879757.png" },
      { id: "pain-relief", name: "Pain relief", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "signature-therapy", name: "Signature therapy", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "natural-skincare", name: "Natural skincare", icon: "https://cdn-icons-png.flaticon.com/512/2735/2735398.png" },
      { id: "add-ons", name: "Add-ons", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" }
    ],
    sections: [
      {
        id: "super-saver-packs",
        title: "Super saver packs",
        items: [
          {
            title: "4 sessions (Mon-Sat only): Deep tissue healing therapy",
            rating: "4.89",
            reviews: "88K",
            priceLabel: "Starts at",
            price: "5,796",
            originalPrice: "7,596",
            options: "2 options",
            discount: "25% OFF",
            details: [
              "This massage pack can be redeemed between Monday to Saturday only"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "4 sessions (Mon-Sat only): Sublime Swedish therapy",
            rating: "4.87",
            reviews: "82K",
            priceLabel: "Starts at",
            price: "5,196",
            originalPrice: "6,796",
            options: "2 options",
            discount: "25% OFF",
            details: [
              "This massage pack can be redeemed between Monday to Saturday only"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "pain-relief",
        title: "Pain relief",
        items: [
          {
            title: "Sublime Swedish with head massage",
            badge: "VALUE SAVER",
            rating: "4.87",
            reviews: "2K",
            priceLabel: "Starts at",
            price: "2,149",
            originalPrice: "2,349",
            duration: "1 hr 20 mins",
            details: [
              "60 mins Swedish massage & 20 mins head massage",
              "Save more: Add pack of 4 to unlock ₹1649/ massage"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Deep tissue healing therapy",
            isBestseller: true,
            rating: "4.89",
            reviews: "88K",
            priceLabel: "Starts at",
            price: "1,899",
            options: "2 options",
            details: [
              "Enhances mobility, flexibility & lymphatic flow",
              "Save more: Add pack of 4 to unlock ₹1449/ massage"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Deep tissue with foot reflexology",
            badge: "VALUE SAVER",
            rating: "4.88",
            reviews: "12K",
            priceLabel: "Starts at",
            price: "2,399",
            originalPrice: "2,549",
            duration: "1 hr 20 mins",
            details: [
              "60 mins deep tissue massage & 20 mins foot reflexology",
              "Save more: Add pack of 4 to unlock ₹2099/ massage"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "signature-therapy",
        title: "Signature therapy",
        items: [
          {
            title: "Nirvana therapy",
            rating: "4.88",
            reviews: "3K",
            priceLabel: "Starts at",
            price: "2,299",
            duration: "1 hr 30 mins",
            details: [
              "Eases lower back & shoulder stiffness, makes body toned by promoting collagen",
              "Save more: Add pack of 4 to unlock ₹1999/ massage"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Holistic aromatherapy",
            rating: "4.86",
            reviews: "2K",
            priceLabel: "Starts at",
            price: "1,799",
            duration: "60 mins",
            details: [
              "Reduces inflammation, boosts immunity & enhances lymphatic flow",
              "Save more: Add pack of 4 to unlock ₹1400/ massage"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Balinese therapy",
            rating: "4.88",
            reviews: "3K",
            priceLabel: "Starts at",
            price: "1,799",
            duration: "60 mins",
            details: [
              "Warms muscles, boosts blood circulation & releases tension",
              "Save more: Add pack of 4 to unlock ₹1400/ massage"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "natural-skincare",
        title: "Natural skincare",
        items: [
          {
            title: "Exfoliating scrub & massage",
            rating: "4.87",
            reviews: "3K",
            priceLabel: "Starts at",
            price: "2,399",
            duration: "1 hr 30 mins",
            details: [
              "Removes dead skin cells for soft, hydrated skin",
              "Save more: Add pack of 4 to unlock ₹2000/ massage"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "add-ons",
        title: "Add-ons",
        items: [
          {
            title: "Foot reflexology",
            rating: "4.88",
            reviews: "32K",
            price: "649",
            duration: "20 mins",
            details: [
              "Pressure point massage that deeply relaxes the feet",
              "It also helps with sleep disorders, migraines, swelling & arthritis pain"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Head & shoulder massage",
            rating: "4.86",
            reviews: "17K",
            price: "649",
            duration: "20 mins",
            details: [
              "Deep pressure massage to release muscle tension & improve blood flow",
              "Relieves head tension & ensures a cleaner, impurity-free skin"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Face massage",
            rating: "4.86",
            reviews: "14K",
            price: "549",
            duration: "20 mins",
            details: [
              "Facial massage that helps improve skin health by boosting blood flow",
              "It stimulates the lymphatic system, removing toxins & reducing puffiness"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Head massage",
            rating: "4.86",
            reviews: "16K",
            price: "549",
            duration: "20 mins",
            details: [
              "Gentle massage to release muscle tension & improve blood flow",
              "It relieves head tension & ensures a cleaner, impurity-free skin"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Stretch Therapy",
            rating: "4.88",
            reviews: "16K",
            price: "549",
            duration: "15 mins",
            details: [
              "Full-body low pressure stretch eases tension, improves flexibility",
              "Reduces muscle tension and boosts overall mobility"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Massage top-up (15 mins)",
            rating: "4.89",
            reviews: "2K",
            price: "229",
            duration: "15 mins",
            details: [
              "Extend your relaxation with 15 extra minutes of massage therapy"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Hot bed",
            rating: "4.86",
            reviews: "7K",
            price: "49",
            details: [
              "Advanced technology for ambient massage temperature",
              "Improves blood circulation & removes stiffness"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  prime_spa_women: {
    title: "Prime Spa for Women",
    rating: "4.82",
    bookings: "3.5 M bookings",
    searchPlaceholder: "Search in Prime Spa for Women",
    navCategories: [
      { id: "super-saver-packs", name: "Super saver packs", icon: "https://cdn-icons-png.flaticon.com/512/879/879757.png" },
      { id: "stress-relief", name: "Stress relief", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "pain-relief", name: "Pain relief", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "skin-care-scrubs", name: "Skin care scrubs", icon: "https://cdn-icons-png.flaticon.com/512/2735/2735398.png" },
      { id: "post-natal", name: "Post Natal", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "add-ons", name: "Add-ons", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" }
    ],
    sections: [
      {
        id: "super-saver-packs",
        title: "Super saver packs",
        items: [
          {
            title: "4 sessions (Mon-Sat only): Deep tissue massage",
            rating: "4.83",
            reviews: "15K",
            priceLabel: "Starts at",
            price: "4,396",
            originalPrice: "5,796",
            options: "2 options",
            details: [
              "This massage pack can be redeemed between Monday to Saturday only"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "4 sessions (Mon-Sat only): Swedish massage",
            rating: "4.82",
            reviews: "24K",
            priceLabel: "Starts at",
            price: "3,996",
            originalPrice: "5,196",
            options: "2 options",
            details: [
              "This massage pack can be redeemed between Monday to Saturday only"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "stress-relief",
        title: "Stress relief",
        items: [
          {
            title: "Quick Comfort Therapy",
            rating: "4.80",
            reviews: "7K",
            price: "1,199",
            duration: "45 mins",
            details: [
              "Revitalizing oil massage focused on key stress areas",
              "Eases tension & restores energy for a relaxed, rejuvenated feel"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Swedish stress relief massage",
            isBestseller: true,
            rating: "4.82",
            reviews: "24K",
            priceLabel: "Starts at",
            price: "1,299",
            options: "2 options",
            details: [
              "Improves blood circulation & boosts sleep quality",
              "Save more: Add pack of 4 to unlock ₹999/ massage"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Swedish with foot massage",
            badge: "VALUE SAVER",
            rating: "4.81",
            reviews: "15K",
            priceLabel: "Starts at",
            price: "1,449",
            options: "2 options",
            details: [
              "60 mins Swedish massage & 20 mins foot massage",
              "Save more: Add pack of 4 to unlock 1449/ massage"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Swedish with head & shoulder massage",
            badge: "VALUE SAVER",
            rating: "4.82",
            reviews: "17K",
            priceLabel: "Starts at",
            price: "1,449",
            options: "2 options",
            details: [
              "60 mins Swedish massage & 20 mins head & shoulder massage",
              "Save more: Add pack of 4 to unlock 1449/ massage"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Toe-to-top stress relief massage",
            rating: "4.83",
            reviews: "14K",
            priceLabel: "Starts at",
            price: "1,899",
            options: "2 options",
            details: [
              "Customisable pressure massage with scalp care & foot reflexology",
              "Helps reduce stress, promotes deep sleep & leaves you refreshed"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "pain-relief",
        title: "Pain relief",
        items: [
          {
            title: "Deep tissue pain relief massage",
            isBestseller: true,
            rating: "4.83",
            reviews: "15K",
            priceLabel: "Starts at",
            price: "1,449",
            options: "2 options",
            details: [
              "Targets pain points, knots & muscle soreness",
              "Save more: Add pack of 4 to unlock ₹1099/ massage"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Deep tissue with foot massage",
            badge: "VALUE SAVER",
            rating: "4.82",
            reviews: "5K",
            priceLabel: "Starts at",
            price: "1,549",
            options: "2 options",
            details: [
              "60 mins deep tissue massage & 20 mins foot massage",
              "Save more: Add pack of 4 to unlock 1549/ massage"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Back relief massage",
            rating: "4.85",
            reviews: "9K",
            price: "999",
            duration: "40 mins",
            details: [
              "Customized massage with natural oils to alleviate soreness",
              "Eliminates pain, stiffness & inflammation in the affected areas"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Leg relief massage",
            rating: "4.85",
            reviews: "11K",
            price: "949",
            duration: "40 mins",
            details: [
              "Customized massage with natural oils to alleviate soreness",
              "Eliminates pain, stiffness & inflammation in the affected areas"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "skin-care-scrubs",
        title: "Skin care scrubs",
        items: [
          {
            title: "Full body massage & scrub",
            rating: "4.84",
            reviews: "5K",
            priceLabel: "Starts at",
            price: "1,549",
            options: "2 options",
            details: [
              "Removes dead skin & deep cleanses, leaving skin soft, smooth & hydrated",
              "Save more: Add pack of 4 to unlock 1549/ massage"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "post-natal",
        title: "Post Natal",
        items: [
          {
            title: "Post natal massage",
            rating: "4.87",
            reviews: "2K",
            priceLabel: "Starts at",
            price: "1,349",
            options: "2 options",
            details: [
              "Accelerates recovery, improves circulation & eases muscle tension",
              "Save more: Add pack of 4 to unlock 1099/ massage"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "add-ons",
        title: "Add-ons",
        items: [
          {
            title: "Foot massage",
            rating: "4.84",
            reviews: "28K",
            price: "349",
            duration: "20 mins",
            details: [
              "Micro-movement techniques with thumb & fingers",
              "Relaxes sore calves; soothes joints; Stimulates the pressure points"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Head & shoulder massage",
            rating: "4.82",
            reviews: "11K",
            price: "399",
            duration: "20 mins",
            details: [
              "Medium pressure massage that covers head, neck, and shoulder joints",
              "Releases muscle tension & stiffness, nourishes scalp"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Head massage",
            rating: "4.83",
            reviews: "23K",
            price: "249",
            duration: "20 mins",
            details: [
              "Reduces muscle soreness, improves circulation & promotes hair health"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Face massage",
            rating: "4.81",
            reviews: "28K",
            price: "299",
            duration: "20 mins",
            details: [
              "Gentle massage with upward & outward circular movements",
              "Reduces fine lines, wrinkles, puffiness; improves blood flow & facial appearance"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Stretch Therapy",
            rating: "4.82",
            reviews: "10K",
            price: "379",
            duration: "15 mins",
            details: [
              "Assisted full-body pressure stretch eases tension, improves flexibility",
              "Reduces muscle tension and boosts overall mobility"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Massage top-up (15 mins)",
            rating: "4.81",
            reviews: "13K",
            price: "189",
            duration: "15 mins",
            details: [
              "Extend your relaxation with 15 extra minutes of massage therapy"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Hot bed",
            rating: "4.81",
            reviews: "18K",
            price: "49",
            details: [
              "Advanced technology for ambient massage temperature",
              "Improves blood circulation & removes stiffness"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  ayurvedic_spa_women: {
    title: "Ayurvedic Spa for Women",
    rating: "4.82",
    bookings: "976K bookings",
    searchPlaceholder: "Search in Ayurvedic Spa for Women",
    navCategories: [
      { id: "super-saver-packs", name: "Super saver packs", icon: "https://cdn-icons-png.flaticon.com/512/879/879757.png" },
      { id: "stress-relief", name: "Stress relief", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "pain-relief", name: "Pain relief", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "ayurvedic-skin-care", name: "Ayurvedic skin care", icon: "https://cdn-icons-png.flaticon.com/512/2735/2735398.png" },
      { id: "add-ons", name: "Add-ons", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" }
    ],
    sections: [
      {
        id: "super-saver-packs",
        title: "Super saver packs",
        items: [
          {
            title: "4 sessions (Mon-Sat only): Abhyangam massage",
            rating: "4.81",
            reviews: "10K",
            priceLabel: "Starts at",
            price: "3,996",
            originalPrice: "5,196",
            options: "2 options",
            details: [
              "This massage pack can be redeemed between Monday to Saturday only"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "4 sessions (Mon-Sat only): Vedic signature massage",
            rating: "4.82",
            reviews: "10K",
            priceLabel: "Starts at",
            price: "4,396",
            originalPrice: "5,796",
            options: "2 options",
            details: [
              "This massage pack can be redeemed between Monday to Saturday only"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "stress-relief",
        title: "Stress relief",
        items: [
          {
            title: "Abhyangam neck-to-toe stress relief massage",
            rating: "4.80",
            reviews: "2K",
            price: "1,299",
            duration: "40 mins",
            details: [
              "Medium pressure neck to toe massage with warm sesame oil",
              "Ashwagandha muscle relaxant properties reduces stress & promotes relaxation"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Abhyangam full-body stress relief massage",
            isBestseller: true,
            rating: "4.81",
            reviews: "10K",
            priceLabel: "Starts at",
            price: "1,299",
            options: "2 options",
            details: [
              "Herbal oil massage reduces stress & promotes better sleep",
              "Save more: Add pack of 4 to unlock ₹999/ massage"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Abhyangam with foot massage",
            badge: "VALUE SAVER",
            rating: "4.80",
            reviews: "4K",
            priceLabel: "Starts at",
            price: "1,449",
            options: "2 options",
            details: [
              "60 mins Ashwagandha massage & 20 mins foot massage with kansa wand",
              "Save more: Add pack of 4 to unlock ₹1499/ massage"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "pain-relief",
        title: "Pain relief",
        items: [
          {
            title: "Vedic signature full-body pain relief massage",
            isBestseller: true,
            rating: "4.82",
            reviews: "20K",
            priceLabel: "Starts at",
            price: "1,549",
            options: "2 options",
            details: [
              "Relieves muscle stiffness, relieves soreness & pain",
              "Save more: Add pack of 4 to unlock ₹1099/ massage"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Vedic signature with head massage",
            badge: "VALUE SAVER",
            rating: "4.81",
            reviews: "14K",
            priceLabel: "Starts at",
            price: "1,749",
            originalPrice: "1,949",
            options: "2 options",
            details: [
              "60 mins Vedic massage & 20 mins head massage",
              "Save more: Add pack of 4 to unlock 1549/ massage"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Pinda Sweda potli detox therapy",
            rating: "4.81",
            reviews: "10K",
            priceLabel: "Starts at",
            price: "1,399",
            options: "2 options",
            details: [
              "Healing massage using disposable herbal potlis soaked in warm oil",
              "Save more: Add pack of 4 to unlock ₹1199/ massage"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "ayurvedic-skin-care",
        title: "Ayurvedic skin care",
        items: [
          {
            title: "Haldi Chandan Body De-Tan",
            rating: "4.76",
            reviews: "1K",
            price: "1,299",
            duration: "1 hr 30 mins",
            details: [
              "Oil massage followed by gentle scrub application"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "add-ons",
        title: "Add-ons",
        items: [
          {
            title: "Paada Abhyanga relaxing foot massage",
            rating: "4.82",
            reviews: "2K",
            price: "449",
            duration: "20 mins",
            details: [
              "Helps relieve pain & muscle stiffness, improves sleep & boosts circulation",
              "5 Marma pressure points of the feet promoting relaxation & health"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Shiro Abhyanga head, neck & shoulder massage",
            rating: "4.82",
            reviews: "3K",
            price: "499",
            duration: "30 mins",
            details: [
              "Helps with eyestrain & fatigue, improves sleep quality, relieves stress",
              "Pressure point massage on 5 Marma helps provide relaxation & rest"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Kumkumadi brightening face massage",
            rating: "4.81",
            reviews: "25K",
            price: "399",
            duration: "20 mins",
            details: [
              "Brightens the skin, hydrates, prevents signs of aging & reduces dark spots",
              "It also helps relax the facial muscles & boost blood circulation"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Bhringandi head massage",
            rating: "4.80",
            reviews: "4K",
            priceLabel: "Starts at",
            price: "499",
            options: "3 options",
            details: [
              "Medium pressure, pressure-point focused head massage",
              "Improves blood circulation, revitalizes the scalp & prevents hairfall"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Warm potli massage",
            rating: "4.82",
            reviews: "17K",
            priceLabel: "Starts at",
            price: "499",
            options: "3 options",
            details: [
              "22 herb-infused warm potli massage for relieving muscle soreness & joint pain",
              "It also helps tone muscles & removes toxins from the body"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Stretch therapy",
            rating: "4.83",
            reviews: "888",
            price: "379",
            duration: "15 mins",
            details: [
              "Assisted full-body muscle stretch eases tension, improves flexibility",
              "Reduces muscle tension and boosts mobility"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Massage top-up (15 mins)",
            rating: "4.79",
            reviews: "3K",
            price: "189",
            duration: "15 mins",
            details: [
              "Extend your relaxation with 15 extra minutes of massage therapy"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Hot bed",
            rating: "4.80",
            reviews: "8K",
            price: "49",
            details: [
              "Advanced technology for ambient massage temperature",
              "Improves blood circulation & removes stiffness"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  salon_prime_women: {
    title: "Salon Prime for Women",
    rating: "4.85",
    bookings: "11.8 M bookings",
    searchPlaceholder: "Search in Salon Prime for Women",
    navCategories: [
      { id: "super-saver-packages", name: "Super saver packages", icon: "https://cdn-icons-png.flaticon.com/512/879/879757.png" },
      { id: "waxing-threading", name: "Waxing & threading", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "korean-facial", name: "Korean facial", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "signature-facial", name: "Signature facial", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "cleanup", name: "Cleanup", icon: "https://cdn-icons-png.flaticon.com/512/2735/2735398.png" },
      { id: "pedicure-manicure", name: "Pedicure & manicure", icon: "https://cdn-icons-png.flaticon.com/512/2822/2822081.png" },
      { id: "hair-bleach-detan", name: "Hair, bleach & detan", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" }
    ],
    sections: [
      {
        id: "super-saver-packages",
        title: "Super saver packages",
        items: [
          {
            title: "Make your own package",
            rating: "4.85",
            reviews: "23K",
            price: "1,444",
            originalPrice: "1,926",
            duration: "2 hrs 50 mins",
            discount: "25% OFF",
            details: [
              "Waxing: Full arms (underarms), Full legs - Chocolate roll on",
              "Facial & cleanup: O3+ Glass skin hydration facial",
              "Pedicure: Ice cream delight pedicure",
              "Facial hair removal: Eyebrows, Upper lip - Threading"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Monthly maintenance package",
            rating: "4.85",
            reviews: "4.2M",
            price: "1,228",
            originalPrice: "1,445",
            duration: "2 hrs 10 mins",
            discount: "15% OFF",
            details: [
              "Waxing: Full arms (including underarms) - Chocolate roll on, Half legs - Chocolate roll on",
              "Facial & cleanup: O3+ Glass skin hydration facial",
              "Facial hair removal: Eyebrows, Upper lip - Threading",
              "Mani-pedi: Cut, file & polish - feet"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Wax & glow",
            rating: "4.85",
            reviews: "6.7M",
            price: "1,254",
            originalPrice: "1,568",
            duration: "2 hrs",
            discount: "20% OFF",
            details: [
              "Waxing: Full arms (including underarms) - Chocolate roll on, Full legs - Chocolate roll on",
              "Facial & cleanup: O3+ Glass skin hydration facial",
              "Facial hair removal: Eyebrows, Upper lip - Threading"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "waxing-threading",
        title: "Waxing & threading",
        items: [
          {
            title: "Roll-on waxing (full arms, legs & underarms)",
            rating: "4.87",
            reviews: "10K",
            priceLabel: "Starts at",
            price: "1,099",
            originalPrice: "1,300",
            options: "2 options",
            badge: "Price drop",
            details: [
              "Hygienic & single use with no risk of burns",
              "Two wax types for you to pick from: RICA or white chocolate"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Spatula waxing (full arms, legs & underarms)",
            rating: "4.86",
            reviews: "18K",
            priceLabel: "Starts at",
            price: "799",
            originalPrice: "948",
            options: "2 options",
            badge: "Price drop",
            details: [
              "Covers all areas for irritation-free hair removal",
              "Two wax types for you to pick from: RICA or Honey"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "RICA Brazilian stripless bikini waxing",
            rating: "4.88",
            reviews: "330",
            price: "1,399",
            originalPrice: "1,748",
            duration: "40 mins",
            badge: "Price drop",
            details: [
              "Painless peel-off wax covering full pelvic area (buttocks not included)"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Full arms & underarms waxing",
            rating: "4.85",
            reviews: "1.1M",
            priceLabel: "Starts at",
            price: "429",
            options: "6 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Full legs waxing",
            rating: "4.85",
            reviews: "510K",
            priceLabel: "Starts at",
            price: "409",
            originalPrice: "519",
            duration: "30 mins",
            details: [
              "Bikini/ bikini line waxing is not included"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Full body waxing",
            rating: "4.85",
            reviews: "327K",
            priceLabel: "Starts at",
            price: "1,319",
            options: "4 options",
            details: [
              "Covers full arms, full legs, underarms, stomach & back"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Half legs waxing",
            rating: "4.85",
            reviews: "175K",
            priceLabel: "Starts at",
            price: "269",
            options: "2 options",
            details: [
              "Waxing covers area from knee to toe"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Bikini waxing",
            rating: "4.89",
            reviews: "24K",
            priceLabel: "Starts at",
            price: "1,049",
            options: "2 options",
            details: [
              "Covers full pelvic area (buttocks not included)"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Underarms waxing",
            rating: "4.85",
            reviews: "2.6M",
            priceLabel: "Starts at",
            price: "99",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Stomach waxing",
            rating: "4.88",
            reviews: "28K",
            priceLabel: "Starts at",
            price: "399",
            options: "4 options",
            details: [
              "Covers the area from below the bust to the pelvis"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Bikini line waxing",
            rating: "4.88",
            reviews: "24K",
            priceLabel: "Starts at",
            price: "349",
            options: "2 options",
            details: [
              "Only covers area around the pelvis, not the pelvis"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Threading",
            rating: "4.86",
            reviews: "2.6M",
            priceLabel: "Starts at",
            price: "29",
            options: "8 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "RICA Peel-off face waxing",
            rating: "4.88",
            reviews: "92K",
            priceLabel: "Starts at",
            price: "99",
            options: "7 options",
            details: [
              "RICA peel-off wax to remove even the finest hair for smooth skin"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "korean-facial",
        title: "Korean facial",
        items: [
          {
            title: "Korean Glass hydration facial",
            rating: "4.86",
            reviews: "10K",
            price: "1,499",
            duration: "1 hr 10 mins",
            isBestseller: true,
            details: [
              "Deeply hydrating facial for a dewy, glass-skin glow",
              "Suitable for normal to dry skin"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Korean Plant-peptide brightening facial",
            rating: "4.82",
            reviews: "12K",
            price: "1,749",
            duration: "1 hr 30 mins",
            badge: "RECOMMENDED",
            details: [
              "Smoothens uneven patches for a clearer, more even complexion",
              "Suitable for oily & combination skin"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Korean Glow facial",
            rating: "4.86",
            reviews: "24K",
            price: "1,399",
            duration: "1 hr",
            details: [
              "Revives dull skin & restores hydration levels",
              "Suitable for normal skin types"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "signature-facial",
        title: "Signature facial",
        items: [
          {
            title: "Aroma Magic instant glow facial",
            rating: "4.85",
            reviews: "102K",
            price: "999",
            duration: "1 hr",
            isBestseller: true,
            details: [
              "Rose Extracts deeply hydrate to leave skin soft, fresh & glowing",
              "Suitable for normal to dry skin"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "O3+ shine & glow facial",
            rating: "4.86",
            reviews: "102K",
            price: "1,749",
            duration: "1 hr 10 mins",
            isBestseller: true,
            details: [
              "Arbutin & Tomato Extracts reduce hyperpigmentation & promote an even skin tone",
              "Suitable for normal to oily skin"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Sara Lightening glow facial",
            rating: "4.84",
            reviews: "33K",
            price: "1,099",
            duration: "1 hr 10 mins",
            details: [
              "Boosts hydration to improve overall skin clarity",
              "Suitable for combination skin"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "O3+ feel youthful facial",
            rating: "4.85",
            reviews: "45K",
            price: "1,849",
            duration: "1 hr 20 mins",
            details: [
              "Restores moisture to keep skin soft, supple & refreshed",
              "Suitable for all skin types"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "O3+ Power brightening facial",
            rating: "4.86",
            reviews: "19K",
            price: "2,099",
            duration: "1 hr 25 mins",
            details: [
              "Fades spots & refines texture for a clearer skin complexion",
              "Suitable for all skin types"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Firming Wine glow facial",
            rating: "4.85",
            reviews: "19K",
            price: "1,299",
            duration: "1 hr 10 mins",
            details: [
              "Firms & boosts the skin's elasticity for a firmer appearance",
              "Suitable for normal to dry skin"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Kumkumadi ubtan hydration facial",
            rating: "4.87",
            reviews: "22K",
            price: "1,249",
            duration: "1 hr 20 mins",
            details: [
              "Replenishes hydration & enhances skin's natural radiance",
              "Suitable for normal to dry skin"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Ashwagandha tan removal facial",
            rating: "4.84",
            reviews: "18K",
            price: "1,399",
            duration: "1 hr 20 mins",
            details: [
              "Repairs sun damage to reduce tanning & promote a clearer complexion",
              "Suitable for normal to oily skin"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "cleanup",
        title: "Cleanup",
        items: [
          {
            title: "Power glow cleanup",
            rating: "4.85",
            reviews: "152K",
            price: "529",
            duration: "45 mins",
            details: [
              "Clears deep-rooted impurities to enhance skin clarity & brightness",
              "Suitable for all skin types"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Sara fruit cleanup",
            rating: "4.84",
            reviews: "71K",
            price: "799",
            duration: "45 mins",
            details: [
              "Provides antioxidant protection to counter pollution & UV effects",
              "Suitable for all skin types"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Pinacolada cleanup",
            rating: "4.84",
            reviews: "38K",
            price: "899",
            duration: "45 mins",
            details: [
              "Relieves dryness & dullness for a nourished-looking complexion",
              "Suitable for all skin types"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "O3+ tan clear cleanup",
            rating: "4.85",
            reviews: "50K",
            price: "999",
            duration: "45 mins",
            details: [
              "Targets tan & dullness for a more even skin tone",
              "Suitable for all skin types"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "pedicure-manicure",
        title: "Pedicure & manicure",
        items: [
          {
            title: "Essential Mani-Pedi Combo",
            rating: "4.86",
            reviews: "37",
            price: "1,149",
            duration: "1 hr 30 mins",
            badge: "New launch",
            details: [
              "A mani-pedi ritual focused on tan reduction & an even-looking finish",
              "Includes foot & shoulder massage"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Mani-pedi combo",
            priceLabel: "Starts at",
            price: "1,559",
            originalPrice: "1,668",
            options: "2 options",
            badge: "Super Saver",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Mani-pedi delight",
            priceLabel: "Starts at",
            price: "1,319",
            originalPrice: "1,428",
            options: "2 options",
            badge: "Super Saver",
            details: [
              "Crystal rose pedicure, british rose manicure for intense hydration",
              "Includes crystal soak treatment with a relaxing foot & shoulder massage"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Crystal rose pedicure",
            rating: "4.86",
            reviews: "51K",
            priceLabel: "Starts at",
            price: "859",
            options: "2 options",
            details: [
              "Olive oil & Jojoba oil provide intense & long-lasting hydration",
              "Includes crystal soak treatment with foot, shoulder & hand massage"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Chocolate & vanilla pedicure",
            rating: "4.87",
            reviews: "33K",
            priceLabel: "Starts at",
            price: "1,099",
            options: "2 options",
            details: [
              "Vanilla & walnut exfoliate to refine skin texture & tone",
              "Includes foot & shoulder massage"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Candle spa pedicure",
            rating: "4.87",
            reviews: "18K",
            priceLabel: "Starts at",
            price: "1,349",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Foot massage",
            rating: "4.86",
            reviews: "20K",
            price: "299",
            duration: "10 mins",
            details: [
              "Micro-movement techniques to relax feet & stimulate pressure points"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Cut, file & polish (feet)",
            rating: "4.86",
            reviews: "68K",
            price: "399",
            duration: "15 mins",
            details: [
              "Quick toenail grooming session with a wide range of nail paints"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "British rose manicure",
            rating: "4.82",
            reviews: "12K",
            priceLabel: "Starts at",
            price: "569",
            options: "2 options",
            details: [
              "Olive oil & jojoba oil provide intense & long-lasting hydration"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Candle spa manicure",
            rating: "4.85",
            reviews: "9K",
            priceLabel: "Starts at",
            price: "869",
            options: "2 options",
            details: [
              "Himalayan salt, peppermint oil soothe the hands & provide relaxation"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Cut, file & polish (hands)",
            rating: "4.84",
            reviews: "71K",
            price: "299",
            duration: "15 mins",
            details: [
              "Quick fingernail grooming session with a wide range of nail paints"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "hair-bleach-detan",
        title: "Hair, bleach & detan",
        items: [
          {
            title: "Hair colour/mehendi (only application)",
            rating: "4.82",
            reviews: "122K",
            priceLabel: "Starts at",
            price: "199",
            options: "2 options",
            details: [
              "Covers application only; please have your product ready before the service"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Head massage",
            rating: "4.86",
            reviews: "100K",
            priceLabel: "Starts at",
            price: "139",
            options: "4 options",
            details: [
              "Relaxing oil massage to relieve stress & promote hair growth"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Bleach",
            rating: "4.85",
            reviews: "148K",
            priceLabel: "Starts at",
            price: "149",
            options: "6 options",
            details: [
              "Professional bleach to help even-out skin tone, reduce tan & dark spots"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Detan",
            rating: "4.85",
            reviews: "310K",
            priceLabel: "Starts at",
            price: "149",
            options: "6 options",
            details: [
              "A targeted detan service to help reduce pigmentation, tan & dark spots"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  salon_for_women: {
    title: "Salon for Women",
    rating: "4.82",
    bookings: "12M+ bookings", // Placeholder based on general UC scale
    searchPlaceholder: "Search in Salon for Women",
    navCategories: [
      { id: "super-saver-packages", name: "Super saver packages", icon: "https://cdn-icons-png.flaticon.com/512/879/879757.png" },
      { id: "waxing", name: "Waxing", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "korean-facial", name: "Korean facial", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "signature-facials", name: "Signature facials", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "cleanup", name: "Cleanup", icon: "https://cdn-icons-png.flaticon.com/512/2735/2735398.png" },
      { id: "pedicure-manicure", name: "Pedicure & manicure", icon: "https://cdn-icons-png.flaticon.com/512/2822/2822081.png" },
      { id: "threading-face-wax", name: "Threading & face wax", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "bleach-detan-massage", name: "Bleach, detan & massage", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" }
    ],
    sections: [
      {
        id: "super-saver-packages",
        title: "Super saver packages",
        items: [
          {
            title: "Make your own package",
            rating: "4.80",
            reviews: "1.1M",
            price: "1,651",
            originalPrice: "2,064",
            duration: "3 hrs",
            discount: "20% OFF",
            details: [
              "Waxing: Full arms (including underarms) - RICA gold, Full legs - RICA gold",
              "Facial & cleanup: Korean glass skin facial",
              "Manicure: Ice cream delight manicure",
              "Pedicure: Ice cream delight pedicure",
              "Facial hair removal: Eyebrows"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1761894010878-4d615b.jpeg"
          },
          {
            title: "Monthly maintenance package",
            rating: "4.81",
            reviews: "853K",
            price: "1,228",
            originalPrice: "1,365",
            duration: "2 hrs 25 mins",
            discount: "10% OFF",
            details: [
              "Facial & cleanup: Hydra mud Glow Cleanup",
              "Waxing: Full arms (including underarms) - RICA gold, Half legs - RICA gold",
              "Facial hair removal: Eyebrows",
              "Mani-pedi: Cut, file & polish - feet"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1761894006164-29b353.jpeg"
          },
          {
            title: "Wax & glow",
            rating: "4.81",
            reviews: "817K",
            price: "1,348",
            originalPrice: "1,586",
            duration: "2 hrs 45 mins",
            discount: "15% OFF",
            details: [
              "Waxing: Full arms (including underarms) - RICA gold, Full legs - RICA gold",
              "Facial hair removal: Eyebrows",
              "Facial & cleanup: Korean glass skin facial"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1761894008360-55f3ab.jpeg"
          }
        ]
      },
      {
        id: "waxing",
        title: "Waxing",
        items: [
          {
            title: "Spatula waxing (full arms & legs, underarms)",
            rating: "4.80",
            reviews: "14K",
            priceLabel: "Starts at",
            price: "1,239",
            options: "3 options",
            details: [
              "Choose from Honey or RICA wax",
              "Covers full legs & arms (including underarms)"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1767956358493-dfe067.jpeg"
          },
          {
            title: "Roll-on waxing (full arms & legs, underarms)",
            rating: "4.91",
            reviews: "21K",
            priceLabel: "Starts at",
            price: "1,599",
            options: "3 options",
            badge: "New launch",
            details: [
              "Choose from a range of roll-on wax options",
              "Cirepil intimate peel-off wax would be used for underarms"
            ],
            image: ""
          },
          {
            title: "Full arms & underarms waxing",
            rating: "4.80",
            reviews: "520K",
            priceLabel: "Starts at",
            price: "699",
            options: "6 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Full legs waxing",
            rating: "4.80",
            reviews: "326K",
            priceLabel: "Starts at",
            price: "499",
            options: "6 options",
            details: ["Bikini/ bikini line waxing is not included"],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Full body waxing",
            rating: "4.80",
            reviews: "133K",
            priceLabel: "Starts at",
            price: "1,899",
            options: "6 options",
            details: ["Covers full arms, full legs, underarms, stomach & back"],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Stomach waxing",
            rating: "4.80",
            reviews: "32K",
            priceLabel: "Starts at",
            price: "579",
            options: "6 options",
            details: ["Covers the area from below the bust to the pelvis"],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Back waxing",
            rating: "4.81",
            reviews: "35K",
            priceLabel: "Starts at",
            price: "539",
            options: "6 options",
            details: ["Covers the area from shoulders to the pelvis"],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Underarms waxing",
            rating: "4.80",
            reviews: "1.5M",
            priceLabel: "Starts at",
            price: "119",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Bikini waxing",
            rating: "4.85",
            reviews: "34K",
            priceLabel: "Starts at",
            price: "1,199",
            options: "2 options",
            details: ["Covers full pelvic area (buttocks not included)"],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Bikini line waxing",
            rating: "4.80",
            reviews: "21K",
            priceLabel: "Starts at",
            price: "599",
            options: "2 options",
            details: ["Only covers area around the pelvis, not the pelvis area"],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "korean-facial",
        title: "Korean facial",
        items: [
          {
            title: "Korean Glass skin facial",
            isBestseller: true,
            rating: "4.87",
            reviews: "133K",
            price: "2,099",
            duration: "1 hr 20 mins",
            details: [
              "Refines skin texture to achieve a smooth, poreless finish",
              "Suitable for normal to oily skin"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "KGlow age-rewind facial",
            rating: "4.86",
            reviews: "13K",
            price: "1,899",
            duration: "1 hr 20 mins",
            details: [
              "Restores skin elasticity to visibly lift & tighten the appearance of fine lines",
              "Suitable for all skin types"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Korean Sea-algae hydra-boost facial",
            rating: "4.85",
            reviews: "21K",
            price: "2,299",
            duration: "1 hr 20 mins",
            details: [
              "Drenches skin in deep moisture to restore a plump, bouncy feel",
              "Suitable for all skin types"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "signature-facials",
        title: "Signature facials",
        items: [
          {
            title: "Ainhoa Signature brightening facial",
            rating: "4.87",
            reviews: "17K",
            price: "2,449",
            originalPrice: "2,899",
            duration: "1 hr 20 mins",
            details: [
              "Targets dark spots & uneven patches to promote a more uniform complexion",
              "Suitable for all skin types"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Casmara brightening facial",
            rating: "4.85",
            reviews: "16K",
            price: "3,089",
            duration: "1 hr 30 mins",
            details: [
              "Exfoliates dull skin cells to reveal a smoother, more uniform skin tone",
              "Suitable for all skin types"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Ainhoa Senskin facial",
            rating: "4.86",
            reviews: "3K",
            price: "2,149",
            originalPrice: "2,479",
            duration: "1 hr 15 mins",
            details: [
              "Soothes & strengthens the skin barrier to eliminate redness & discomfort",
              "Suitable for sensitive skin"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Ainhoa Oil-control facial",
            rating: "4.84",
            reviews: "2K",
            price: "2,299",
            originalPrice: "2,699",
            duration: "1 hr 20 mins",
            details: [
              "Purifies & balances the skin to maintain a clear, oil-free look",
              "Suitable for oily skin"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Ainhoa Multi-peptide anti-ageing facial",
            rating: "4.88",
            reviews: "1K",
            price: "2,649",
            originalPrice: "3,099",
            duration: "1 hr 30 mins",
            details: [
              "Targets fine lines & boosts elasticity for a visibly lifted appearance",
              "Suitable for dry skin"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Casmara anti-ageing facial",
            rating: "4.85",
            reviews: "6K",
            price: "3,759",
            duration: "1 hr 30 mins",
            details: [
              "Targets firmness & elasticity for a revitalized, sculpted look",
              "Suitable for dry skin"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Ainhoa hydraboost facial",
            rating: "4.85",
            reviews: "4K",
            price: "2,449",
            originalPrice: "2,899",
            duration: "1 hr 20 mins",
            details: [
              "Drenches skin in moisture to restore a soft & supple feel",
              "Suitable for dry skin"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Casmara hydration facial",
            rating: "4.87",
            reviews: "3K",
            price: "2,999",
            duration: "1 hr 30 mins",
            details: [
              "Restores & replenishes skin's natural moisture levels",
              "Suitable for dry skin"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "O3 Kumkumadi Ayurvedic facial",
            rating: "4.86",
            reviews: "15K",
            price: "1,689",
            duration: "1 hr 15 mins",
            details: [
              "Targets tanning & dullness to reveal a visibly brighter, healthier skin tone",
              "Suitable for all skin types"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "O3 Radiance luxury facial",
            rating: "4.86",
            reviews: "7K",
            price: "1,199",
            duration: "1 hr 15 mins",
            details: [
              "Revives dull skin to reveal a smooth, radiant complexion",
              "For normal to dry skin"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "cleanup",
        title: "Cleanup",
        items: [
          {
            title: "Hydra mud glow cleanup",
            rating: "4.85",
            reviews: "21K",
            price: "1,299",
            duration: "45 mins",
            details: [
              "Purifies & refines pores to reveal a healthy, natural glow",
              "Suitable for all skin types"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Detox mud cleanup",
            rating: "4.86",
            reviews: "2K",
            price: "1,299",
            duration: "50 mins",
            details: [
              "Purifies & tightens pores to maintain a breakout-free, balanced skin",
              "Suitable for oily skin"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Casmara charcoal detox mask",
            rating: "4.87",
            reviews: "7K",
            price: "1,399",
            duration: "40 mins",
            details: [
              "Clears out deep-seated toxins & impurities",
              "Suitable for all skin types"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Repechage Hydra-boost cleanup",
            rating: "4.89",
            reviews: "6K",
            price: "2,199",
            duration: "40 mins",
            details: [
              "Restores suppleness & plumps the skin",
              "Suitable for all skin types"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Repechage brightening cleanup",
            rating: "4.89",
            reviews: "15K",
            price: "1,669",
            duration: "50 mins",
            details: [
              "Effectively lightens pigmentation & reduces dark spots",
              "Suitable for all skin types"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "pedicure-manicure",
        title: "Pedicure & manicure",
        items: [
          {
            title: "Rejuvenating mani-pedi combo",
            rating: "4.84",
            reviews: "24K",
            price: "2,248",
            originalPrice: "2,648",
            duration: "2 hrs 10 mins",
            details: [
              "Intense skin healing & hydration with crystal spa pedicure & AVL sea algae manicure"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Ice cream delight pedicure",
            rating: "4.86",
            reviews: "6K",
            priceLabel: "Starts at",
            price: "1,079",
            options: "2 options",
            details: [
              "A creamy, strawberry-infused retreat to soften skin & refresh tired skin"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Restorative crystal spa pedicure",
            rating: "4.86",
            reviews: "50K",
            priceLabel: "Starts at",
            price: "1,249",
            options: "2 options",
            details: [
              "Wheatgerm oil, beeswax & paraffin treatment for long-lasting hydration",
              "Includes 15-min foot & 10-min shoulder & hand massage"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "AVL sea-algae manicure",
            rating: "4.83",
            reviews: "16K",
            priceLabel: "Starts at",
            price: "1,399",
            options: "2 options",
            details: [
              "A marine-powered therapy that detoxifies, tones & repairs the skin"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Cut, file & polish (hands)",
            rating: "4.82",
            reviews: "15K",
            price: "349",
            duration: "15 mins",
            details: [
              "Quick toenail grooming session with a wide range of nail paints"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Cut, file & polish (feet)",
            rating: "4.86",
            reviews: "15K",
            price: "399",
            duration: "15 mins",
            details: [
              "Quick toenail grooming session with a wide range of nail paints"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "threading-face-wax",
        title: "Threading & face wax",
        items: [
          {
            title: "Threading",
            rating: "4.85",
            reviews: "885K",
            priceLabel: "Starts at",
            price: "89",
            options: "8 options",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Cirepil PR VISAGE face wax",
            rating: "4.90",
            reviews: "97K",
            priceLabel: "Starts at",
            price: "199",
            options: "7 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "bleach-detan-massage",
        title: "Bleach, detan & massage",
        items: [
          {
            title: "Bleach",
            rating: "4.82",
            reviews: "84K",
            priceLabel: "Starts at",
            price: "549",
            options: "6 options",
            details: [
              "Professional bleach to help even-out skin tone & lighten facial hair"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Detan",
            rating: "4.80",
            reviews: "23K",
            priceLabel: "Starts at",
            price: "649",
            options: "6 options",
            details: [
              "A targeted detan service to help reduce pigmentation, tan & dark spots"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Head massage",
            rating: "4.85",
            reviews: "140K",
            priceLabel: "Starts at",
            price: "349",
            options: "2 options",
            details: [
              "Relaxing oil massage to relieve stress & promote hair growth"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Foot massage",
            rating: "4.86",
            reviews: "20K",
            price: "299",
            duration: "10 mins",
            details: [
              "Micro-movement techniques to relax feet & stimulate pressure points"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  makeup_saree_styling: {
    title: "Makeup, Saree & Styling",
    rating: "4.73",
    bookings: "298K bookings",
    searchPlaceholder: "Search in Makeup, Saree & Styling",
    navCategories: [
      { id: "packages", name: "Packages", icon: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_64,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732794111027-cb3081.jpeg" },
      { id: "group-deals", name: "Group deals", icon: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_64,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763717318326-1d7d5a.jpeg" },
      { id: "saree-draping", name: "Saree draping", icon: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_64,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1770894885899-d08c68.jpeg" },
      { id: "wedding-combos", name: "Wedding combos", icon: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_64,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1770894889155-384aa2.jpeg" },
      { id: "party-makeup", name: "Party makeup", icon: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_64,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763469159867-60a066.jpeg" },
      { id: "hair-styling", name: "Hair styling", icon: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_64,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763457080015-56ea9c.jpeg" },
      { id: "add-ons", name: "Add-ons", icon: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_64,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763457087353-59b633.jpeg" }
    ],
    sections: [
      {
        id: "packages",
        title: "Packages",
        items: [
          {
            title: "Basic makeup package",
            rating: "4.70",
            reviews: "13K",
            price: "2,099",
            duration: "1 hr 30 mins",
            details: [
              "Ideal for daytime events, office occasions & brunches",
              "Includes basic makeup & basic hairstyling"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763469301002-9106b5.jpeg"
          },
          {
            title: "Luxe makeup package",
            rating: "4.69",
            reviews: "3K",
            price: "3,799",
            duration: "2 hrs",
            details: [
              "Ideal for festive gatherings, parties & wedding celebrations",
              "Includes luxury makeup & advance hairstyling"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763441924663-2b6a07.jpeg"
          },
          {
            title: "HD makeup package",
            rating: "4.74",
            reviews: "6K",
            price: "3,299",
            duration: "1 hr 45 mins",
            details: [
              "Ideal for formal events, evening functions & photoshoots",
              "Includes HD makeup & advance hairstyling"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1762323804168-da41c6.jpegp"
          },
          {
            title: "Saree draping & hair styling(Package)",
            rating: "4.72",
            reviews: "60K",
            price: "1,498",
            duration: "1 hr 20 mins",
            details: [
              "Saree draping: Basic saree draping",
              "Hair styling: Advance hairstyling"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_64,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732794111027-cb3081.jpeg"
          },
          {
            title: "Saree draping & basic makeup(Package)",
            rating: "4.72",
            reviews: "55K",
            price: "2,098",
            duration: "1 hr 10 mins",
            details: [
              "Makeup: Basic makeup",
              "Saree draping: Basic saree draping"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_64,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732794111027-cb3081.jpeg"
          }
        ]
      },
      {
        id: "group-deals",
        title: "Group deals",
        items: [
          {
            title: "Makeup pack trio",
            priceLabel: "Starts at",
            price: "4,317",
            options: "3 options",
            details: [
              "Makeup for 3 at a special price - ideal for parties & celebrations."
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_64,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763717318326-1d7d5a.jpeg"
          },
          {
            title: "Advanced hair styling trio",
            rating: "4.74",
            reviews: "4K",
            price: "2,797",
            originalPrice: "2,997",
            duration: "2 hrs 40 mins",
            details: [
              "Advanced hairstyles for 3 - perfect for parties & celebrations",
              "Get a flat ₹200 off with this exclusive deal."
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1764761143757-8691ff.jpeg"
          }
        ]
      },
      {
        id: "saree-draping",
        title: "Saree draping",
        items: [
          {
            title: "Basic saree draping",
            rating: "4.72",
            reviews: "33K",
            price: "499",
            duration: "20 mins",
            details: [
              "Choose any saree/sari or lehenga draping style"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763442223768-fcf72c.jpeg"
          },
          {
            title: "Advanced saree draping",
            rating: "4.76",
            reviews: "1K",
            price: "749",
            duration: "30 mins",
            details: [
              "Choose from double palla, heavy dupatta, or a Gujarati style draping"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1762326031838-511522.jpeg"
          }
        ]
      },
      {
        id: "wedding-combos",
        title: "Wedding combos",
        items: [
          {
            title: "Premium wedding combo",
            rating: "4.72",
            reviews: "54K",
            price: "4,249",
            originalPrice: "4,648",
            duration: "2 hrs 20 mins",
            details: [
              "Luxe full-glam glow with high-end products for long-lasting perfection"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1764765194378-642260.jpeg"
          },
          {
            title: "Complete event combo",
            rating: "4.67",
            reviews: "20K",
            price: "3,749",
            originalPrice: "3,898",
            duration: "2 hrs 20 mins",
            details: [
              "A flawless, high-definition finish that's picture-perfect for every camera angle"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1764765199070-37bceb.jpeg"
          },
          {
            title: "Glow smart combo",
            rating: "4.68",
            reviews: "11K",
            price: "2,599",
            originalPrice: "2,648",
            duration: "1 hr 50 mins",
            details: [
              "Soft, fresh glow for day events and celebrations - crafted to last all day"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1764765206133-564c1f.jpeg"
          }
        ]
      },
      {
        id: "party-makeup",
        title: "Party makeup",
        items: [
          {
            title: "Basic makeup",
            rating: "4.71",
            reviews: "13K",
            price: "1,599",
            duration: "45 mins",
            details: [
              "Get a natural, everyday glow with lightweight products",
              "Ideal for daytime events, office occasions & brunches"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_64,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763469159867-60a066.jpeg"
          },
          {
            title: "HD finish makeup",
            rating: "4.71",
            reviews: "3K",
            price: "2,499",
            duration: "60 mins",
            details: [
              "Get a perfect photo-ready glow with HD products",
              "Ideal for formal events, evening functions & photoshoots"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763442037269-775812.jpeg"
          },
          {
            title: "Luxe glam-up makeup",
            rating: "4.66",
            reviews: "2K",
            price: "2,999",
            duration: "1 hr 20 mins",
            details: [
              "Get a full-glam, luminous finish with premium products",
              "Ideal for festive gatherings, parties & wedding celebrations"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763442092893-03007e.jpeg"
          }
        ]
      },
      {
        id: "hair-styling",
        title: "Hair styling",
        items: [
          {
            title: "Basic hairstyling",
            rating: "4.71",
            reviews: "10K",
            price: "599",
            duration: "45 mins",
            details: [
              "Choose any basic style from open, soft buns, pony & braid"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763442220685-f0d4c4.jpeg"
          },
          {
            title: "Advance hairstyling",
            rating: "4.73",
            reviews: "19K",
            price: "999",
            duration: "60 mins",
            details: [
              "Choose any style from messy buns, vintage waves, & party braids, curls, waves, low buns, up-dos"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763442231112-7c9fc6.jpeg"
          }
        ]
      },
      {
        id: "add-ons",
        title: "Add-ons",
        items: [
          {
            title: "Basic Eye Makeup",
            rating: "4.70",
            reviews: "5K",
            price: "599",
            duration: "20 mins",
            details: [
              "Pick your style from 1-shade wash, soft smokey, classic blend"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763457461365-cc26ca.jpeg"
          },
          {
            title: "Advanced Eye Makeup",
            rating: "4.76",
            reviews: "811",
            price: "799",
            duration: "30 mins",
            details: [
              "Pick your look from cut crease, smokey, spotlight or glitter"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_64,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763457087353-59b633.jpeg"
          },
          {
            title: "Blast dry",
            rating: "4.64",
            reviews: "530",
            price: "159",
            duration: "15 mins",
            details: [
              "Fast blow-dry to remove excess moisture after your hair wash"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1762326004192-9dea9b.jpeg"
          }
        ]
      }
    ]
  },
  ayurvedic_massage_men: {
    title: "Ayurvedic Massage for Men",
    rating: "4.85",
    bookings: "479K bookings",
    searchPlaceholder: "Search in Ayurvedic Massage for Men",
    navCategories: [
      { id: "super-saver-packs", name: "Super saver packs", icon: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_64,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1757512039699-4f81a7.jpeg" },
      { id: "stress-relief", name: "Stress relief", icon: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_64,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1730198260083-7a47fc.jpeg" },
      { id: "pain-relief", name: "Pain relief", icon: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_64,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1730198263972-064fc6.jpeg" },
      { id: "add-ons", name: "Add-ons", icon: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_64,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1730198271493-9f4541.jpeg" }
    ],
    sections: [
      {
        id: "super-saver-packs",
        title: "Super saver packs",
        items: [
          {
            title: "4 sessions (Mon-Sat only): Abhyangam massage",
            rating: "4.84",
            reviews: "10K",
            priceLabel: "Starts at",
            price: "3,996",
            originalPrice: "5,196",
            options: "2 options",
            discount: "25% OFF",
            details: [
              "This package can be redeemed between Monday to Saturday only"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763977394780-9a6c0a.jpeg"
          },
          {
            title: "4 sessions (Mon-Sat only): Vedic signature massage",
            rating: "4.85",
            reviews: "10K",
            priceLabel: "Starts at",
            price: "4,196",
            originalPrice: "5,596",
            options: "2 options",
            discount: "25% OFF",
            details: [
              "This package can be redeemed between Monday to Saturday only"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1757330990364-d5bd96.jpeg"
          }
        ]
      },
      {
        id: "stress-relief",
        title: "Stress relief",
        items: [
          {
            title: "Abhyangam neck to toe stress relief massage",
            rating: "4.87",
            reviews: "11K",
            price: "949",
            duration: "40 mins",
            details: [
              "Medium pressure neck to toe massage with Ashwagandha stress relief oils"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1730198592155-f1a994.jpeg"
          },
          {
            title: "Abhyangam full body stress relief massage",
            isBestseller: true,
            rating: "4.84",
            reviews: "56K",
            priceLabel: "Starts at",
            price: "1,299",
            duration: "60 mins",
            details: [
              "Medium pressure massage relieves accumulated stress in body & mind",
              "Save more: Add pack of 4 to unlock ₹999/ massage"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1744275768330-ba8ad7.jpeg"
          },
          {
            title: "Abhyangam with foot massage",
            badge: "VALUE SAVER",
            rating: "4.84",
            reviews: "2K",
            priceLabel: "Starts at",
            price: "1,449",
            originalPrice: "1,649",
            duration: "1 hr 20 mins",
            details: [
              "60 mins Abhyangam massage & 20 mins foot massage",
              "Save more: Add pack of 4 to unlock ₹1149/ massage"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1744275768330-ba8ad7.jpeg"
          }
        ]
      },
      {
        id: "pain-relief",
        title: "Pain relief",
        items: [
          {
            title: "Vedic signature full body pain relief massage",
            isBestseller: true,
            rating: "4.85",
            reviews: "38K",
            priceLabel: "Starts at",
            price: "1,399",
            duration: "60 mins",
            details: [
              "High pressure massage relieves muscle stiffness, soreness & pain",
              "Save more: Add pack of 4 to unlock ₹1049/ massage"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1744275768330-ba8ad7.jpeg"
          },
          {
            title: "Pinda sweda potli detox therapy",
            rating: "4.85",
            reviews: "2K",
            priceLabel: "Starts at",
            price: "1,699",
            duration: "60 mins",
            details: [
              "Healing massage with warm, disposable herbal potlis soaked in Ayurvedic oil",
              "Save more: Add pack of 4 to unlock ₹1299/ massage"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1744275768330-ba8ad7.jpeg"
          }
        ]
      },
      {
        id: "add-ons",
        title: "Add-ons",
        items: [
          {
            title: "Paada abhyanga relaxing foot massage",
            rating: "4.85",
            reviews: "3K",
            price: "449",
            duration: "20 mins",
            details: [
              "Foot massage focused on key pressure points",
              "Helps relieve pain & enhances mental clarity & focus"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1730198581323-0e9b2f.jpeg"
          },
          {
            title: "Shiro abhyanga head, neck & shoulder massage",
            rating: "4.84",
            reviews: "8K",
            price: "399",
            duration: "30 mins",
            details: [
              "Medium pressure shoulder massage with gentle, soothing strokes",
              "Boosts blood circulation, enhances sleep quality & promotes healthy skin"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1730198572725-b13a90.jpeg"
          },
          {
            title: "Ayurvedic head massage",
            rating: "4.83",
            reviews: "15K",
            price: "299",
            duration: "20 mins",
            details: [
              "Medium pressure head massage targeting key pressure points",
              "Boosts circulation, revitalizes the scalp & reduces hair fall"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1730198588636-54d317.jpeg"
          },
          {
            title: "Stretch Therapy",
            rating: "4.84",
            reviews: "5K",
            price: "379",
            duration: "15 mins",
            details: [
              "Full-body low pressure stretch eases tension, boosts mobility",
              "Reduces muscle tension and boosts overall mobility"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1744172665246-62ef64.jpeg"
          },
          {
            title: "Massage top-up (15 mins)",
            rating: "4.82",
            reviews: "2K",
            price: "189",
            duration: "15 mins",
            details: [
              "Extend your relaxation with 15 extra minutes of massage therapy"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1744275768330-ba8ad7.jpeg"
          },
          {
            title: "Hot bed",
            rating: "4.80",
            reviews: "1K",
            price: "49",
            details: [
              "Advanced technology for ambient massage temperature",
              "Improves blood circulation and removes stiffness"
            ],
            image: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700054773213-b166bd.jpeg"
          }
        ]
      }
    ]
  },
  prime_massage_men: {
    title: "Prime Massage for Men",
    rating: "4.86",
    bookings: "106K bookings",
    searchPlaceholder: "Search in Prime Massage for Men",
    navCategories: [
      { id: "super-saver-packs", name: "Super saver packs", icon: "https://cdn-icons-png.flaticon.com/512/879/879757.png" },
      { id: "pain-relief", name: "Pain relief", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "stress-relief", name: "Stress relief", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "post-workout", name: "Post workout", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "add-ons", name: "Add-ons", icon: "https://cdn-icons-png.flaticon.com/512/2822/2822081.png" }
    ],
    sections: [
      {
        id: "super-saver-packs",
        title: "Super saver packs",
        items: [
          {
            title: "4 sessions (Mon-Sat only): Swedish massage",
            rating: "4.83",
            reviews: "36K",
            priceLabel: "Starts at",
            price: "3,996",
            originalPrice: "5,196",
            options: "2 options",
            discount: "25% OFF",
            details: [
              "This massage pack can be redeemed between Monday to Saturday only"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "pain-relief",
        title: "Pain relief",
        items: [
          {
            title: "Quick Comfort Therapy",
            rating: "4.82",
            reviews: "14K",
            price: "999",
            originalPrice: "1,199",
            duration: "45 mins",
            details: [
              "Revitalizing oil massage focused on key stress areas",
              "Eases tension & restores energy for a relaxed, rejuvenated feel"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Deep tissue pain relief massage",
            isBestseller: true,
            rating: "4.86",
            reviews: "54K",
            priceLabel: "Starts at",
            price: "1,399",
            options: "2 options",
            details: [
              "High-pressure palm movements to relieve muscle tension & soreness",
              "Save more: Add pack of 4 to unlock ₹1099/ massage"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Deep tissue with head/neck/shoulder",
            badge: "VALUE SAVER",
            rating: "4.85",
            reviews: "5K",
            priceLabel: "Starts at",
            price: "1,649",
            originalPrice: "2,048",
            duration: "1 hr 40 mins",
            details: [
              "60 mins deep tissue massage & 40 mins head/neck/shoulder massage",
              "Save more: Add pack of 4 to unlock ₹1099/ massage"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Back relief massage",
            rating: "4.88",
            reviews: "2K",
            price: "899",
            duration: "40 mins",
            details: [
              "Customized massage with natural oils to alleviate soreness"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Leg relief massage",
            rating: "4.87",
            reviews: "3K",
            price: "899",
            duration: "40 mins",
            details: [
              "Customized massage with natural oils to alleviate soreness"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "stress-relief",
        title: "Stress relief",
        items: [
          {
            title: "Swedish stress relief massage",
            isBestseller: true,
            rating: "4.84",
            reviews: "61K",
            priceLabel: "Starts at",
            price: "1,299",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Holistic de-stress massage",
            rating: "4.84",
            reviews: "11K",
            priceLabel: "Starts at",
            price: "1,649",
            duration: "1 hr 20 mins",
            details: [
              "Medium-pressure massage with focus on head, neck & shoulder",
              "Save more: Add pack of 4 to unlock ₹1149/ massage"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Top-to-toe stress relief massage",
            rating: "4.86",
            reviews: "15K",
            priceLabel: "Starts at",
            price: "1,949",
            duration: "1 hr 40 mins",
            details: [
              "Full-body massage with scalp care & 20 mins foot reflexology",
              "Save more: Add pack of 4 to unlock ₹1499/ massage"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "post-workout",
        title: "Post workout",
        items: [
          {
            title: "Sports recovery massage",
            rating: "4.86",
            reviews: "9K",
            priceLabel: "Starts at",
            price: "1,349",
            options: "2 options",
            details: [
              "High-pressure full-body massage to reduce muscle pain & tension",
              "Save more: Add pack of 4 to unlock ₹1049/ massage"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Deep tissue pain relief massage",
            rating: "4.86",
            reviews: "54K",
            priceLabel: "Starts at",
            price: "1,399",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "add-ons",
        title: "Add-ons",
        items: [
          {
            title: "Foot massage",
            rating: "4.87",
            reviews: "40K",
            price: "649",
            duration: "20 mins",
            details: [
              "Targets pressure points to boost overall blood circulation"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Head, neck & shoulder massage",
            rating: "4.86",
            reviews: "23K",
            price: "649",
            duration: "40 mins",
            details: [
              "Medium pressure massage to relieve stress & relax sore muscles"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Head massage",
            rating: "4.86",
            reviews: "20K",
            price: "349",
            duration: "20 mins",
            details: [
              "Relaxing head massage to revitalize the scalp & relieve stress"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Stretch Therapy",
            rating: "4.84",
            reviews: "6K",
            price: "549",
            duration: "15 mins",
            details: [
              "Full-body low pressure stretch eases tension, boosts mobility",
              "Reduces muscle tension and boosts overall mobility"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Massage top-up (15 mins)",
            rating: "4.85",
            reviews: "6K",
            price: "189",
            duration: "15 mins",
            details: [
              "Enhance your spa experience! Extend your spa time by 15 minutes"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Hot bed",
            rating: "4.83",
            reviews: "3K",
            price: "49",
            details: [
              "Advanced technology for ambient massage temperature",
              "Improves blood circulation and removes stiffness"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  instahelp: {
    title: "InstaHelp",
    rating: "4.71",
    bookings: "4.6 M bookings",
    searchPlaceholder: "Search in InstaHelp",
    navCategories: [
      { id: "instant", name: "Instant", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "later", name: "Later", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" }
    ],
    sections: [
      {
        id: "instant",
        title: "Instant",
        items: [
          {
            title: "Insta Help",
            rating: "4.80",
            reviews: "26K",
            priceLabel: "Starts at",
            price: "99",
            originalPrice: "249",
            options: "3 options",
            image: "https://img.freepik.com/premium-photo/professional-cleaning-service-hd-image-home-cleaning-service-image_1012565-15512.jpg"
          },
          {
            title: "Super Saver Pack",
            rating: "4.80",
            reviews: "26K",
            priceLabel: "Starts at",
            price: "99",
            originalPrice: "249",
            duration: "60 mins",
            image: "https://img.freepik.com/premium-photo/professional-cleaning-service-hd-image-home-cleaning-service-image_1012565-15512.jpg"
          }
        ]
      },
      {
        id: "later",
        title: "Later",
        items: [
          {
            title: "Insta Help",
            rating: "4.80",
            reviews: "26K",
            priceLabel: "Starts at",
            price: "99",
            originalPrice: "249",
            options: "3 options",
            details: ["Get instant help or schedule ahead for any chore"],
            image: "https://img.freepik.com/premium-photo/woman-cleaning-floor-with-mop-living-room-home-with-smile-happy-asian-cleaner-doing-housework-job-clean-lounge-hotel-room-house-while-smiling-alone-spring-cleaning_590464-85963.jpg?w=996"
          },
          {
            title: "Super Saver Pack",
            rating: "4.83",
            reviews: "26K",
            priceLabel: "Starts at",
            price: "39",
            originalPrice: "249",
            duration: "60 mins",
            image: "https://img.freepik.com/premium-photo/professional-cleaning-service-hd-image-home-cleaning-service-image_1012565-15691.jpg"
          }
        ]
      }
    ]
  },
  few_rooms_walls_painting: {
    title: "Few rooms & walls painting",
    rating: "4.78",
    bookings: "10K+ bookings", // Placeholder based on typical data
    searchPlaceholder: "Search in Few rooms & walls painting",
    navCategories: [
      { id: "few-walls-painting", name: "Few walls painting", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "bedroom-painting", name: "Bedroom painting", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "living-dining-room-painting", name: "Living & dining room painting", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "few-rooms-painting", name: "Few rooms painting", icon: "https://cdn-icons-png.flaticon.com/512/2735/2735398.png" },
      { id: "kitchen-bathroom-painting", name: "Kitchen & bathroom painting", icon: "https://cdn-icons-png.flaticon.com/512/2822/2822081.png" },
      { id: "doors-grills-cabinets", name: "Doors, grills & cabinets", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" },
      { id: "waterproofing", name: "Waterproofing", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565620.png" },
      { id: "tile-grouting", name: "Tile grouting", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565633.png" },
      { id: "looking-for-something-else", name: "Looking for something else", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" }
    ],
    sections: [
      {
        id: "few-rooms-painting",
        title: "Few rooms painting",
        items: [
          {
            title: "Any 2 rooms",
            rating: "4.76",
            reviews: "921",
            priceLabel: "Starts at",
            price: "9,999",
            duration: "27 hrs",
            details: [
              "It includes painting 2 rooms, such as the bedroom, living room or others"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Any 3 rooms",
            rating: "4.77",
            reviews: "1K",
            priceLabel: "Starts at",
            price: "14,499",
            duration: "27 hrs",
            details: [
              "It includes painting 3 rooms, such as the bedroom, living room or others"
            ],
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Unfurnished 1 BHK",
            rating: "4.78",
            reviews: "921",
            priceLabel: "Starts at",
            price: "9,999",
            duration: "9 hrs",
            details: [
              "Price includes painting of a bedroom, living room, kitchen & bathroom"
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Unfurnished 2 BHK",
            rating: "4.76",
            reviews: "921",
            priceLabel: "Starts at",
            price: "13,499",
            duration: "18 hrs",
            details: [
              "Price includes painting of 2 bedrooms, living room, kitchen & bathroom"
            ],
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Unfurnished 3 BHK",
            rating: "4.77",
            reviews: "1K",
            priceLabel: "Starts at",
            price: "17,999",
            duration: "18 hrs",
            details: [
              "Price includes painting of 3 bedrooms, living room, kitchen & bathroom"
            ],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "kitchen-bathroom-painting",
        title: "Kitchen & bathroom painting",
        items: [
          {
            title: "Kitchen painting",
            rating: "4.76",
            reviews: "969",
            priceLabel: "Starts at",
            price: "3,499",
            duration: "9 hrs",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Bathroom painting",
            rating: "4.79",
            reviews: "969",
            priceLabel: "Starts at",
            price: "2,499",
            duration: "9 hrs",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Balcony painting",
            rating: "4.77",
            reviews: "847",
            priceLabel: "Starts at",
            price: "3,499",
            duration: "9 hrs",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Store room painting",
            rating: "4.77",
            reviews: "847",
            priceLabel: "Starts at",
            price: "2,499",
            duration: "9 hrs",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Washing area painting",
            rating: "4.77",
            reviews: "847",
            priceLabel: "Starts at",
            price: "2,499",
            duration: "9 hrs",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Terrace painting",
            rating: "4.77",
            reviews: "847",
            priceLabel: "Starts at",
            price: "3,199",
            duration: "9 hrs",
            details: [
              "Suitable for repainting of terrace up to 100 sq. ft."
            ],
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "doors-grills-cabinets",
        title: "Doors, grills & cabinets",
        items: [
          {
            title: "Cabinet painting",
            rating: "4.77",
            reviews: "1K",
            priceLabel: "Starts at",
            price: "1,999",
            duration: "9 hrs",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Grill painting",
            rating: "4.77",
            reviews: "1K",
            priceLabel: "Starts at",
            price: "1,999",
            duration: "9 hrs",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Door painting",
            rating: "4.77",
            reviews: "1K",
            priceLabel: "Starts at",
            price: "1,999",
            duration: "9 hrs",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Metal gate painting",
            priceLabel: "Starts at",
            price: "3,999",
            options: "2 options",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "waterproofing",
        title: "Waterproofing",
        items: [
          {
            title: "Wall waterproofing",
            rating: "4.78",
            reviews: "120",
            priceLabel: "Starts at",
            price: "4,998",
            duration: "18 hrs",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Terrace waterproofing",
            rating: "4.76",
            reviews: "167",
            priceLabel: "Starts at",
            price: "3,499",
            duration: "18 hrs",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "tile-grouting",
        title: "Tile grouting",
        items: [
          {
            title: "Tile grouting",
            rating: "4.77",
            reviews: "351",
            priceLabel: "Starts at",
            price: "2,599",
            duration: "3 hrs",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          }
        ]
      },
      {
        id: "looking-for-something-else",
        title: "Looking for something else",
        items: [
          {
            title: "At home consultation",
            rating: "4.79",
            reviews: "11K",
            price: "49",
            duration: "60 mins",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  native_smart_locks: {
    title: "Native Smart Locks",
    rating: "4.79",
    bookings: "11K bookings",
    searchPlaceholder: "Search in Native Smart Locks",
    navCategories: [
      { id: "feature-lock", name: "Feature lock", icon: "https://cdn-icons-png.flaticon.com/512/3565/3565575.png" }
    ],
    sections: [
      {
        id: "feature-lock",
        title: "Feature lock",
        items: [
          {
            title: "Native Lock Pro - Cosmic blue",
            rating: "4.82",
            reviews: "1.7K",
            price: "14,499",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200&auto=format&fit=crop"
          },
          {
            title: "Native Lock Pro - Space grey",
            rating: "4.82",
            reviews: "1.7K",
            price: "14,499",
            image: "https://images.unsplash.com/photo-1584824486509-114594828b0e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
};


export const productPagesData = {
  water_purifier: {
    title: "Native Water Purifier",
    rating: "4.84",
    bookings: "221K bookings",
    searchPlaceholder: "Search in Native Water Purifier",
    models: [
      {
        id: "m1",
        title: "Native M1",
        rating: "4.86",
        reviews: "126K",
        priceLabel: "Starts at",
        price: "14,299",
        options: "2 options",
        image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1704257122105-df1b99.jpeg",
        description: "India's first water purifier that needs no servicing for 2 years. Features an advanced 10-stage RO+UV+UF+MTDS filtration process.",
        features: [
          "Needs no servicing for 2 years",
          "10-stage RO+UV+UF+MTDS filtration",
          "8 Litre large storage capacity",
          "Smart LED indicators for filter life",
          "Zero water wastage technology"
        ]
      },
      {
        id: "m0",
        title: "Native M0",
        rating: "4.88",
        reviews: "5K",
        priceLabel: "Starts at",
        price: "11,799",
        options: "2 options",
        image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1704257122105-df1b99.jpeg",
        description: "Essential RO+UV filtration for safe and pure drinking water. Compact design perfect for modern kitchens.",
        features: [
          "7-stage RO+UV filtration",
          "6 Litre storage capacity",
          "Space-saving compact design",
          "1 year comprehensive warranty",
          "Suitable for municipal water"
        ]
      },
      {
        id: "m2",
        title: "Native M2 Pro",
        rating: "4.92",
        reviews: "87K",
        priceLabel: "Starts at",
        price: "17,499",
        options: "3 options",
        image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1704257122105-df1b99.jpeg",
        description: "Premium smart water purifier with IoT capabilities. Monitor water quality and filter life directly from your smartphone.",
        features: [
          "IoT enabled smart monitoring",
          "Alkaline boost technology",
          "Stainless steel tank",
          "Instant hot & cold water dispensing",
          "Voice assistant compatible"
        ]
      }
    ]
  },
  

};

// Add this to data.js
export const hubPagesData = {
  womens_salon: {
    title: "Beauty services for Women",
    rating: "4.8",
    customers: "12M+",
    searchPlaceholder: "Search for 'Facial' or 'Waxing'",
    heroServices: [
      { title: "Salon for Women", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1774421563473-192084.jpeg", tag: "Sale", time: "45 mins" },
      { title: "Spa for Women", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1774421566139-db72a8.jpeg", tag: "Sale" },
      { title: "Hair Studio for Women", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1728839468364-90b0dc.jpeg" },
      { title: "Makeup, Saree & Styling", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1669023257508-ffd582.jpeg" },
    ],
    heroImages: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600",
      "https://images.pexels.com/photos/3356170/pexels-photo-3356170.jpeg?cs=srgb&dl=pexels-engin-akyurt-3356170.jpg&fm=jpg",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=600"
    ],
    promoBanners: [
      "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1712901363859-410ccb.jpeg",
      "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1749719167789-a2e4a9.jpeg"
    ],
    mostBooked: [
      { title: "Roll-on Waxing (Full arms, legs & underarms)", rating: "4.87", reviews: "155K", price: "₹1,099", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1670322517916-aeaa17.jpeg" },
      { title: "Crystal rose pedicure", rating: "4.81", reviews: "38K", price: "₹859", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763038614950-13e09b.jpeg" },
      { title: "Haircut for women", rating: "4.83", reviews: "120K", price: "₹549", img: "https://vittagold.com/cdn/shop/articles/salon-at-home-transform-your-home-into-a-salon-with-exclusive-services-vitta-gold-cosmetics.jpg?v=1719432742&width=2700" },
      { title: "Rejuvenating Crystal Spa Pedicure", rating: "4.86", reviews: "155K", price: "₹1,249", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1733298284712-4d996d.jpeg" }
    ],
    salonForWomen: [
      { title: "Waxing", img: "https://img.freepik.com/free-photo/woman-getting-legs-waxed-spa_53876-13496.jpg" },
      { title: "Cleanup", img: "https://as1.ftcdn.net/jpg/04/39/44/68/1000_F_439446829_oVfOIXT5lSt5r0pxV9iiGZ5bTYYZuX3Z.jpg" },
      { title: "Hair care", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_520,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1634207119118-ec91e9.png" }
    ],
    spaBanner1: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216798701-9a08f0.jpeg",
    spaForWomen: [
      { title: "Stress relief", img: "https://aromatherapyhomespa.com/wp-content/uploads/2025/05/Ayurvedic-Spa-Treatments-for-Stress-Relief.jpg" },
      { title: "Pain relief", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1681975066670-e71141.jpeg" }
    ],
    hairAndNailGrid: [
      { title: "Haircut for women", rating: "4.83", reviews: "125K", price: "₹549", img: "https://images.pexels.com/photos/19239103/pexels-photo-19239103/free-photo-of-young-beautiful-woman-having-her-hair-cut-at-the-hairdresser-scissors-cut-the-girls-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { title: "Hair colour (application only)", rating: "4.81", reviews: "42K", price: "₹399", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_144,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1762946941523-faef6e.jpeg" },
      { title: "Basic makeup", rating: "4.73", reviews: "9K", price: "₹1,599", img: "https://thumbs.dreamstime.com/b/woman-face-portrait-makeup-lip-liner-beauty-cosmetic-product-glow-studio-background-indian-female-cosmetics-pencil-274901504.jpg" }
    ]
  },

  // ==========================================
  // 2. MEN'S SALON & MASSAGE
  // ==========================================
  mens_salon: {
    title: "Grooming & Massage for Men",
    rating: "4.87",
    customers: "8M+",
    searchPlaceholder: "Search for 'Haircut' or 'Massage'",
    heroServices: [
      { title: "Salon Prime for Men", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1710241114433-5cfa7c.jpeg" },
      { title: "Massage for Men", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1674623814769-eeca92.jpeg" }
    ],
    heroImages: [
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1503910368081-133a49250911?auto=format&fit=crop&w=600",
      "https://images.unsplash.com/photo-1599351431247-f10b218163e3?auto=format&fit=crop&w=600"
    ],
    promoBanners: [
      "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_394,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1711428187463-abb19d.jpeg"
    ],
    mostBooked: [
      { title: "Haircut for men", rating: "4.87", reviews: "200K", price: "₹259", img: "https://wallpapercave.com/wp/wp11627930.jpg" },
      { title: "Spatula Waxing", rating: "4.86", reviews: "200K", price: "₹799", img: "https://img.freepik.com/premium-photo/professional-leg-waxing-treatment-beauty-spa-with-beautician-applying-wax-using-wooden-spatula_664057-4426.jpg" }
    ],
    salonForMen: [
      { title: "Haircut and Beard styling", img: "https://www.shutterstock.com/image-photo/getting-perfect-shape-closeup-side-600nw-364870139.jpg" },
      { title: "Facial & cleanup", img: "https://aryahotelmahabaleshwar.com/storage/2024/04/facial-and-cleanup.jpg" },
      { title: "Pedicure & Manicure", img: "https://shinecode.ae/storage/212/mani4.jpg" },
      { title: "Hair color & Hair spa", img: "https://salon85.co.in/wp-content/uploads/2025/09/Ceramide-treatment.webp" }
    ],
    spaBanner1: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216827166-bc6957.jpeg",
    spaForMen: [
      { title: "Pain relief", img: "https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/partner-app-supply/1662545107373-4baa44.png" }
    ]
  }
};

export const collectionsHubData = {
  home_makeover_products: {
    title: "Revamp Collections",
    searchPlaceholder: "Search in Fine rooms & walls painting",
    
    // "Explore by product" Section
    exploreByProduct: [
      {
        id: "wall-panels",
        title: "Wall panels",
        image: "https://images.unsplash.com/photo-1615876234886-fdba0f5c8115?q=80&w=400&auto=format&fit=crop"
      },
      {
        id: "consoles-cabinets",
        title: "Consoles, cabinets & shelves",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=400&auto=format&fit=crop"
      }
    ],

    // "In the spotlight" Section
    spotlight: [
      {
        id: "fall-25-collection",
        title: "Fall 25' collection",
        tag: "New arrivals",
        image: "https://images.unsplash.com/photo-1589939705384-5185138a0470?q=80&w=400&auto=format&fit=crop",
        linkText: "Discover more"
      },
      {
        id: "discover-lights",
        title: "Discover lights",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=400&auto=format&fit=crop",
        linkText: "Explore lights"
      },
      {
        id: "discover-woodwork",
        title: "Discover woodwork",
        image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=400&auto=format&fit=crop",
        linkText: "Explore woodwork"
      }
    ]
  }
};