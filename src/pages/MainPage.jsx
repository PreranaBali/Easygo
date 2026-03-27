import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiMapPin, FiX, FiArrowLeft, FiShare2, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const mainCategories = [
  { id: 'instahelp', title: 'InstaHelp', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1771308635267-27aaf0.jpeg', type: 'link', path: '/service/instahelp' },
  { id: 'womens_salon', title: "Women's Salon & Spa", icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1774526047861-554660.jpeg', type: 'modal' },
  { id: 'mens_salon', title: "Men's Salon & Massage", icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1774526691081-afedc4.jpeg', type: 'modal' },
  { id: 'cleaning', title: 'Cleaning & Pest Control', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1699869110346-61ab83.jpeg', type: 'link', path: '/service/full_home' },
  { id: 'ac_appliance', title: 'AC & Appliance Repair', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1768544313670-e3f84b.jpeg', type: 'modal' },
  { id: 'water_purifier', title: 'Native Water Purifier', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1773057787930-167720.jpeg', type: 'link', path: '/product/water_purifier' },
  { id: 'home_repairs', title: 'Electrician, Plumber & Carpenter', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1774526974386-784d50.jpeg', type: 'modal' },
  { id: 'painting', title: 'Painting & Waterproofing', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1674120935535-f8d5c8.jpeg', type: 'submodal' },
  { id: 'smart_locks', title: 'Native Smart Locks', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1724138391296-c1780b.jpeg', type: 'link', path: '/service/native_smart_locks' },
];

const hubData = {
  womens_salon: {
    title: "Women's Salon & Spa",
    items: [
      { id: 'salon_women', title: 'Salon for Women', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1774421563473-192084.jpeg', hasSub: false, path: '/service/salon_for_women' },
      { id: 'spa_women', title: 'Spa for Women', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1774421566139-db72a8.jpeg', hasSub: true, subModal: 'spa_women' },
      { id: 'hair_studio_women', title: 'Hair Studio for Women', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1728839468364-90b0dc.jpeg', hasSub: false, path: '/service/hair_studio_women' },
    ],
  },
  mens_salon: {
    title: "Men's Salon & Massage",
    items: [
      { id: 'salon_men', title: 'Salon for Men', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1774526691081-afedc4.jpeg', hasSub: false, path: '/service/salon_prime_men' },
      { id: 'massage_men', title: 'Massage for Men', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1774421566139-db72a8.jpeg', hasSub: true, subModal: 'massage_men' },
    ],
  },
};

const subModalData = {
  spa_women: {
    title: 'Spa for Women',
    subtitle: null,
    banner: {
      bg: '#F9A8D4',
      label: '25% OFF',
      sublabel: 'summer spree',
      footnote: '*Up to ₹200 off',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
    },
    items: [
      { id: 'ayurveda', title: 'Ayurveda', subtitle: 'Experts in ancient techniques with herbal oils', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=200', path: '/service/ayurvedic_spa_women' },
      { id: 'spa_prime', title: 'Prime', subtitle: 'Certified therapists & essential oils', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=200', path: '/service/prime_spa_women' },
    ],
  },
  massage_men: {
    title: 'Massage for Men',
    subtitle: null,
    banner: null,
    items: [
      { id: 'massage_prime', title: 'Prime', subtitle: 'Certified therapists & essential oils', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=200', path: '/service/prime_massage_men' },
      { id: 'massage_ayurvedic', title: 'Ayurvedic', subtitle: 'High-rated therapists & premium-grade oils', image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=200', path: '/service/ayurvedic_massage_men' },
    ],
  },
  painting: {
    title: 'Painting & Waterproofing',
    subtitle: 'Select your scope',
    banner: null,
    items: [
      { id: 'full_home_painting', title: 'Full home painting', subtitle: '1/2/3/4 BHK & above', image: 'https://tse2.mm.bing.net/th/id/OIP.Jg9EgBRNM9tgLXI39V4ywwHaFC?pid=Api&P=0&h=180', path: '/service/full_home_makeover' },
      { id: 'wall_painting', title: 'Few walls & rooms', subtitle: 'Individual walls or 1/2/3 rooms', image: 'https://i.ytimg.com/vi/n8EzgAKqTF8/maxresdefault.jpg' },
    ],
  },
};

const modalData = {
  ac_appliance: {
    title: "AC & Appliance Repair",
    groups: [
      {
        groupName: "Large appliances",
        items: [
          { id: 'ac', title: 'AC', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1768547669053-10fbb9.jpeg', path: '/service/ac' },
          { id: 'washing_machine', title: 'Washing Machine Repair', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741326898650-c51e1a.jpeg', path: '/service/washing_machine' },
          { id: 'refrigerator', title: 'Refrigerator', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1768544315662-c55288.jpeg', path: '/service/refrigerator' },
          { id: 'television', title: 'Television', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741326902037-b6af08.jpeg', path: '/service/television' },
        ]
      },
      {
        groupName: "Other appliances",
        items: [
          { id: 'chimney', title: 'Chimney', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741326927579-afd045.jpeg', path: '/service/chimney' },
          { id: 'microwave', title: 'Microwave', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741326912075-c4a3fe.jpeg', path: '/service/microwave' },
          { id: 'laptop', title: 'Laptop', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741326917322-7186a1.jpeg', path: '/service/laptop' },
          {id: 'Stove', title: 'Stove', icon:'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741326922521-c52f7c.jpeg'},
          { id: 'water_purifier_repair', title: 'Water Purifier Repair', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1767779593973-92758b.jpeg', path: '/service/water_purifier_repair' },
          { id: 'geyser', title: 'Geyser', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741326919873-8446d2.jpeg', path: '/service/geyser' },
          {id: 'Air Cooler', title: 'Air cooler', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741326933033-32b32a.jpeg'},
        ]
      }
    ]
  },
  home_repairs: {
    title: "Electrician, Plumber & Carpenter",
    groups: [
      {
        groupName: "All Services",
        items: [
          { id: 'electrician', title: 'Electrician', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1699868754554-a5c5c9.jpeg', path: '/service/electrician' },
          { id: 'plumber', title: 'Plumber', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1722431282836-ee5db3.jpeg', path: '/service/plumber' },
          { id: 'carpenter', title: 'Carpenter', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1722431287847-8acb8c.jpeg', path: '/service/carpenter' },
          { id: 'Furniture Assembly', title:'Furniture Assembly', icon:'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1719382683826-36ec97.jpeg'},
          { id: 'fan_installation', title: 'Fan Installation', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1692962989852-d05ea9.jpeg', path: '/service/fan_installation' },
          { id: 'geyser', title: 'Geyser', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741326919873-8446d2.jpeg', path: '/service/geyser' },
          { id: 'ikea_furniture', title: 'IKEA Furniture Assembly', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1768548131936-c6987d.jpeg', path: '/service/ikea_furniture' },
          { id: 'Tile Grouting', title:'Tile Grounting', icon:'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1757058860223-dac618.jpeg'},
        ]
      }
    ]
  }
};

// --- NEW DATA ADDED FROM VIDEO ---
const homeSections = {
  newAndNoteworthy: [
    { title: 'Wall makeover by Revamp', badge: 'NEW', image: 'https://jakijellz.com/wp-content/uploads/2024/04/Bedroom-Renovation-Inspiration.jpeg' },
    { title: 'Native Water Purifier', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1773057790001-45ccab.jpeg' },
    { title: 'Native Smart Locks', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_520,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1772545415993-9fc71c.jpeg' },
    { title: 'Kitchen Cleaning', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1757512720453-11701e.jpeg' },
    { title: 'Stove', subtitle: 'in 58 mins', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1744616432209-d052da.jpeg' },
    {title: 'Laptop',image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1744369169400-c89940.jpeg'},
    {title: 'Spa Women', image:'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1753884148279-273ab1.jpeg'},
    {title: 'Hair Studio for Women',image:'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732532363134-1c322a.jpeg'},
    {title: 'Ac Service & Repair', image:'https://www.orangecountyplumbinghvac.com/wp-content/uploads/2016/12/Air-Conditioning-Repair.jpg'}
  ],
  mostBooked: [
    { title: 'Intense bathroom cleaning', rating: '4.80', price: '₹399', oldPrice: '₹499', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1750094373282-58f431.jpeg' },
    { title: 'Intense cleaning (2 bathrooms)', rating: '4.80', price: '₹798', oldPrice: '₹998', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1745582700726-ea844c.jpeg' },
    { title: 'Haircut for men', rating: '4.87', price: '₹259', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1677519626723-82ff21.jpeg' },
    { title: 'Foam-jet service (2 ACs)', rating: '4.76', price: '₹1,098', oldPrice: '₹1,190', badge: '2 ACs', image: 'https://www.socspl.com/_next/image?url=https:%2F%2Fcq-dev-rsa.s3.ap-south-1.amazonaws.com%2Fsocspl%2Fservice-management%2Fservices%2F1767797051539_djzom6wg1v_Foam-jet-Service.jpeg&w=1080&q=75' },
    { title: 'Spatula waxing', rating: '4.86', price: '₹699', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1758774489432-95070a.jpeg' },
    { title: 'Roll on waxing(Full arms, legs & Underarms)', rating: '4.86', price: '₹699', image: 'https://urbanculture.me/_next/image?url=https:%2F%2Fcdn.sanity.io%2Fimages%2Fi782vjoc%2Fproduction%2F8a6a1f8011266e4f9ad57be8068fafada9af0d56-1100x707.webp%3Fw%3D1100%26fit%3Dmax%26auto%3Dformat&w=1920&q=75' },
    { title: 'Plumber Consultation', rating: '4.86', price: '₹699', image: 'https://cloudfrontgharpediabucket.gharpedia.com/uploads/2018/05/Plumbing-Inspection-01-0601020002.jpg' },
    { title: 'Automatic top load machine check-up', rating: '4.86', price: '₹699', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1744355839493-50a86c.jpeg' },
    { title: 'Intense Cleaning(3 Bathrooms)', rating: '4.86', price: '₹699', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1750094368998-8d28f2.jpeg' },
    { title: 'Electric consultation', rating: '4.86', price: '₹699', image: 'https://www.dgwz.de/wp-content/uploads/Schutz-gegen-elektrischen-Schlag.jpg' },


  ],
  spaForWomen: [
    { title: 'Quick Comfort Therapy', rating: '4.8', price: '₹999', image: 'https://healthywarehouse.com/wp-content/uploads/2025/12/Gemini_Generated_Image_hqlqkihqlqkihqlq.png' },
    { title: '4 Session(Mon-Sat only): Swedish Massage', rating: '4.8', price: '₹1,299', image: 'https://tymedayspa.com/storage/2024/04/Swedish-Massage-by-Tyme-Day-Spa-in-Charlotte-NC.webp' },
    { title: 'Leg Relief Massage', rating: '4.9', price: '₹899', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1681982472194-c274f9.jpeg' },
    { title: '4 Session(Mon-Sat only): Deep tissue massage', rating: '4.7', price: '₹1,449', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_64,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682056725112-ad24c4.jpeg' }
  ],
  cleaningEssentials: [
    { title: 'Intense bathroom cleaning', rating: '4.80', price: '₹399', image: 'https://tidyman.com.sg/wp-content/uploads/2025/03/office-bathroom-cleaning.jpg' },
    { title: 'Intense cleaning (2 bathrooms)', rating: '4.80', price: '₹798', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1750094373282-58f431.jpeg' },
    { title: 'Chimney cleaning', rating: '4.84', price: '₹399', image: 'https://artfasad.com/wp-content/uploads/2023/07/modern-kitchen-chimney-design-11.jpg'},
    { title: 'Fridge cleaning', rating: '4.82', price: '₹499', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1742210433154-7ef1d2.jpeg' },
    { title: 'Dining table & chair cleaning', rating: '4.82', price: '₹499', image: 'https://homeeplanner.com/wp-content/uploads/2022/10/clean-Table-Top.jpg' },
    { title: 'Cockroach control (with utensil removal)', rating: '4.82', price: '₹1,249', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1731504272013-0ef836.jpeg'},
    { title: 'Pest control (no utensil)', rating: '4.82', price: '₹1,249', image: 'https://img.freepik.com/premium-photo/pest-control-hd-image-stock-images-pest-control-hd-image-stock-photo_1012565-47567.jpg'},
    { title: 'Apartment termite control', rating: '4.82', price: '₹1,249', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729772247309-29d7b5.jpeg'},
    { title: 'Bed bugs control', rating: '4.82', price: '₹1,249', image: 'https://superdreampestcontrol.ae/wp-content/uploads/2025/09/how-to-control-bed-bugs.jpeg'},
    { title: 'Intense cleaning', rating: '4.82', price: '₹1,249', image: 'https://img.freepik.com/premium-photo/vacuum-cleaner-white-fluffy-carpet-intense-cleaning_210545-9093.jpg'}
  ],
  largeAppliances: [
    { title: 'Foam-jet service (2 ACs)', rating: '4.75', price: '₹249', image: 'https://www.socspl.com/_next/image?url=https:%2F%2Fcq-dev-rsa.s3.ap-south-1.amazonaws.com%2Fsocspl%2Fservice-management%2Fservices%2F1767797051539_djzom6wg1v_Foam-jet-Service.jpeg&w=1080&q=75' },
    { title: 'Automatic top load machine check-up', rating: '4.77', price: '₹199', image: 'https://dam.thdstatic.com/content/production/Uu9j7EVTtCiPbdcwyEpYkA/nl_UJHvUeVALA8mb6L7gFg/Original%20file/how-to-clean-a-washing-machine-step-10.jpg' },
    { title: 'TV check-up', rating: '4.81', price: '₹199', image: 'https://hometriangle.com/imagecache/media/531535/package.png' },
    { title: 'Semi-automatic machine check-up', rating: '4.70', price: '₹299', image: 'https://dam.thdstatic.com/content/production/Uu9j7EVTtCiPbdcwyEpYkA/nl_UJHvUeVALA8mb6L7gFg/Original%20file/how-to-clean-a-washing-machine-step-10.jpg' },
    { title: 'Automatic top load machine check-up', rating: '4.77', price: '₹199', image: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1660711266271-6588ce.png' },
    { title: 'Washing machine installation & uninstallation', rating: '4.81', price: '₹199', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1744355845759-35c6c0.jpeg' },
    { title: 'AC repair', rating: '4.70', price: '₹299', image: 'https://www.airconditioning-cleaning.com/wp-content/uploads/2022/05/iStock-1351102754-scaled.jpg' },
    { title: 'AC uninstallation', rating: '4.81', price: '₹199', image: 'https://expertenergybd.com/wp-content/uploads/2024/04/Ac-Installation.jpg' },
    { title: 'AC installation', rating: '4.70', price: '₹299', image: 'https://astaracservicesvadodara.com/wp-content/uploads/2024/02/9c59eac5-74fb-4ad6-a55d-4e8ce794ab6e.jpg' },
    { title: 'Gas refill & check-up', rating: '4.70', price: '₹299', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1770744507311-a3dd54.jpeg' },
  ],
  repairAndInstallation: [
    { title: 'Plumber consultaion', rating: '4.73', price: '₹49', image: 'https://jmabathrooms.co.uk/wp-content/uploads/2022/05/plumber-new.jpg' },
    { title: 'Electrician consultation', rating: '4.75', price: '₹49', image: 'https://cloudfrontgharpediabucket.gharpedia.com/uploads/2024/02/1001010002-08-Licensed-Electrician-Consultation.jpg' },
    { title: 'Decor installation', rating: '4.84', price: '₹79', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1714126037241-c7f2b1.jpeg' },
    { title: 'Switchboard repair & replacement',  rating: '4.83', price: '₹99', image: 'https://cpimg.tistatic.com/10949839/b/4/15A-Electrical-Switch-Board..jpg'  },
    { title: 'Door lock repair & installation',  rating: '4.79', price: '₹129', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1770622372951-0b5db4.jpeg' },
    { title: 'Cupboard repair',  rating: '4.78', price: '₹89', image: 'https://www.pngitem.com/pimgs/m/677-6776509_cupboard-hd-png-download.png' },
    { title: 'Flush tank repair', rating: '4.77', price: '₹149', image: 'https://www.aquatechtanks.com/files/images/products/gravity-dual-flush-tank-manufacturers.png' },
    { title: 'Door repair', rating: '4.76', price: '₹199', image: 'https://tse2.mm.bing.net/th/id/OIP.2O7NvHqaGPA_irB5ODGNAwHaE8?pid=Api&P=0&h=180' },
    { title: 'Tubelight repair & Installation', rating: '4.86', price: '₹99', image: 'https://globeledphilippines.com/wp-content/uploads/2024/01/T8-LED-Tube.png' },
    { title: 'Drain blockage', rating: '4.77', price: '₹149', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729151316952-832a3b.jpeg' }
  ]
  
};

// --- NEW COMPONENTS ADDED FROM VIDEO ---
const ServiceCarousel = ({ title, items }) => (
  <div className="mt-16">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold text-[#2A4334]">{title}</h2>
      <button className="text-[#2A4334]/60 text-sm font-semibold hover:text-[#AA593E]">See all</button>
    </div>
    <div className="flex overflow-x-auto gap-6 pb-4 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {items.map((item, i) => (
        <div key={i} className="min-w-[200px] md:min-w-[240px] snap-start cursor-pointer group">
          <div className="rounded-2xl overflow-hidden relative bg-gray-100 aspect-square mb-4">
            {item.badge && <span className="absolute top-3 left-3 bg-[#8A3B66] text-white text-[10px] font-bold px-2 py-1 rounded-md z-10 shadow-sm">{item.badge}</span>}
            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <h3 className="font-bold text-[#2A4334] text-sm md:text-base leading-snug">{item.title}</h3>
          <div className="mt-1.5 flex items-center gap-2 text-sm text-[#2A4334]/80">
            {item.rating && <span className="flex items-center font-semibold">★ {item.rating}</span>}
            {item.price && <span className="font-bold">{item.price}</span>}
            {item.oldPrice && <span className="line-through text-gray-400 text-xs">{item.oldPrice}</span>}
          </div>
          {item.subtitle && <span className="text-xs text-[#AA593E] mt-1 block font-semibold">{item.subtitle}</span>}
        </div>
      ))}
    </div>
  </div>
);

const BannerAd = ({ title, subtitle, btnText, bg, imgUrl, theme = 'light' }) => (
  <div className="mt-16 rounded-[32px] overflow-hidden relative h-[250px] md:h-[350px] flex items-center cursor-pointer shadow-sm group" style={{ background: bg }}>
    <div className="absolute left-8 md:left-16 z-10 w-[55%] md:w-1/2">
      <h2 className={`text-3xl md:text-5xl font-bold mb-3 leading-tight ${theme === 'dark' ? 'text-white' : 'text-[#2A4334]'}`}>{title}</h2>
      <p className={`text-sm md:text-lg mb-8 ${theme === 'dark' ? 'text-white/80' : 'text-[#2A4334]/80'}`}>{subtitle}</p>
      <button className={`px-6 py-2.5 md:px-8 md:py-3 rounded-xl font-bold shadow-sm transition-transform group-hover:scale-105 ${theme === 'dark' ? 'bg-white text-black' : 'bg-[#2A4334] text-white'}`}>
        {btnText}
      </button>
    </div>
    <div className="absolute right-0 top-0 h-full w-[55%] md:w-1/2 overflow-hidden">
      <img src={imgUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Banner Ad" />
    </div>
  </div>
);

const Footer = () => (
  <footer className="mt-24 pt-16 pb-8 border-t border-[#2A4334]/10 bg-white">
    <div className="max-w-[1300px] mx-auto px-4 md:px-8">
      <div className="flex items-center gap-2 mb-12 cursor-pointer">
        <div className="text-2xl font-serif text-[#2A4334] flex items-center gap-1">
          <span className="text-3xl italic">E</span>
          <span className="text-lg tracking-widest uppercase mt-1.5">asygo</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div>
          <h4 className="font-bold text-[#2A4334] mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-[#2A4334]/70">
            <li className="hover:text-[#AA593E] cursor-pointer">About us</li>
            <li className="hover:text-[#AA593E] cursor-pointer">Terms & conditions</li>
            <li className="hover:text-[#AA593E] cursor-pointer">Privacy policy</li>
            <li className="hover:text-[#AA593E] cursor-pointer">Anti-discrimination policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#2A4334] mb-6">For customers</h4>
          <ul className="space-y-4 text-sm text-[#2A4334]/70">
            <li className="hover:text-[#AA593E] cursor-pointer">UC reviews</li>
            <li className="hover:text-[#AA593E] cursor-pointer">Categories near you</li>
            <li className="hover:text-[#AA593E] cursor-pointer">Contact us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#2A4334] mb-6">For professionals</h4>
          <ul className="space-y-4 text-sm text-[#2A4334]/70">
            <li className="hover:text-[#AA593E] cursor-pointer">Register as a professional</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#2A4334] mb-6">Social links</h4>
          <div className="flex gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#F6F4EE] text-[#2A4334] flex items-center justify-center cursor-pointer hover:bg-[#E8DCCB] transition-colors"><FiTwitter size={18} /></div>
            <div className="w-10 h-10 rounded-full bg-[#F6F4EE] text-[#2A4334] flex items-center justify-center cursor-pointer hover:bg-[#E8DCCB] transition-colors"><FiFacebook size={18} /></div>
            <div className="w-10 h-10 rounded-full bg-[#F6F4EE] text-[#2A4334] flex items-center justify-center cursor-pointer hover:bg-[#E8DCCB] transition-colors"><FiInstagram size={18} /></div>
            <div className="w-10 h-10 rounded-full bg-[#F6F4EE] text-[#2A4334] flex items-center justify-center cursor-pointer hover:bg-[#E8DCCB] transition-colors"><FiLinkedin size={18} /></div>
          </div>
          <div className="space-y-3 flex flex-col items-start">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 cursor-pointer hover:opacity-80 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10 cursor-pointer hover:opacity-80 transition-opacity" />
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-[#2A4334]/50 pt-8 border-t border-[#2A4334]/10">
        © 2026 Easygo Technologies India Pvt. Ltd.
      </div>
    </div>
  </footer>
);

// --- EXISTING COMPONENTS (Untouched) ---

const Navbar = () => (
  <nav className="fixed w-full top-0 z-50 bg-[#F6F4EE]/90 backdrop-blur-md border-b-[0.5px] border-[#2A4334]/10">
    <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-2xl font-serif text-[#2A4334] flex items-center gap-1 cursor-pointer">
        <span className="text-3xl italic">E</span>
        <span className="text-lg tracking-widest uppercase mt-1.5">asygo</span>
      </div>
      <div className="hidden lg:flex flex-1 max-w-2xl mx-8 bg-white border-[0.5px] border-[#2A4334]/20 rounded-full h-12 items-center shadow-sm">
        <div className="flex items-center px-4 border-r-[0.5px] border-[#2A4334]/20 w-1/3">
          <FiMapPin className="text-[#AA593E] mr-2" size={16} />
          <span className="text-xs font-semibold text-[#2A4334] truncate">3, Norris Rd - Richmond...</span>
        </div>
        <div className="flex items-center px-4 flex-1">
          <FiSearch className="text-gray-400 mr-2" size={16} />
          <input type="text" placeholder="Search for services" className="w-full text-sm outline-none bg-transparent text-[#2A4334]" />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <a href="#" className="text-xs font-bold uppercase tracking-widest text-[#2A4334]/70 hover:text-[#AA593E] transition-colors">Sign In</a>
      </div>
    </div>
  </nav>
);

const HubModal = ({ isOpen, onClose, hubId, onSubOpen }) => {
  if (!isOpen || !hubId || !hubData[hubId]) return null;
  const data = hubData[hubId];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#2A4334]/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl z-10">
        <button onClick={onClose} className="absolute -top-12 right-0 md:-right-12 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2A4334] shadow-lg hover:scale-110 transition-transform">
          <FiX size={20} />
        </button>
        <h2 className="text-2xl font-bold text-[#2A4334] mb-8">{data.title}</h2>
        <div className="grid grid-cols-3 gap-6">
          {data.items.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (item.hasSub) {
                  onSubOpen(item.subModal);
                } else {
                  document.body.style.overflow = 'unset';
                  onClose();
                  window._navigateTo && window._navigateTo(item.path);
                }
              }}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="w-20 h-20 bg-[#F6F4EE] rounded-2xl flex items-center justify-center mb-3 group-hover:bg-[#E8DCCB] transition-colors border border-transparent group-hover:border-[#AA593E]/20 shadow-sm">
                <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-[11px] text-center font-semibold leading-tight text-[#2A4334]/80 group-hover:text-[#AA593E] px-1">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SubModal = ({ isOpen, onClose, onBack, subId, hasBack }) => {
  const navigate = useNavigate();
  if (!isOpen || !subId || !subModalData[subId]) return null;
  const data = subModalData[subId];

  const handleItemClick = (path) => {
    document.body.style.overflow = 'unset';
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#2A4334]/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl z-10 overflow-hidden">
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <button
            onClick={hasBack ? onBack : onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <FiArrowLeft size={20} className="text-[#2A4334]" />
          </button>
          <h2 className="text-lg font-bold text-[#2A4334]">{data.title}</h2>
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <FiShare2 size={18} className="text-[#2A4334]" />
          </button>
        </div>

        <button onClick={onClose} className="absolute -top-12 right-0 md:-right-12 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2A4334] shadow-lg hover:scale-110 transition-transform">
          <FiX size={20} />
        </button>

        {data.subtitle && (
          <>
            <div className="px-6 pb-4">
              <p className="text-2xl font-bold text-[#2A4334]">{data.title}</p>
              <p className="text-sm text-gray-400 mt-1">{data.subtitle}</p>
            </div>
            <div className="border-t border-gray-100 mx-0 mb-2" />
          </>
        )}

        {data.banner && (
          <div className="mx-4 mb-4 rounded-2xl overflow-hidden flex h-40 relative" style={{ backgroundColor: data.banner.bg }}>
            <div className="flex flex-col justify-center px-5 z-10 w-1/2">
              <span className="text-white text-3xl font-black leading-none">{data.banner.label}</span>
              <span className="text-yellow-300 text-xl font-bold italic leading-tight">{data.banner.sublabel}</span>
              <span className="text-white/80 text-[11px] mt-1">{data.banner.footnote}</span>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2">
              <img src={data.banner.image} alt="banner" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        )}

        <div className="px-4 pb-6 divide-y divide-gray-100">
          {data.items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item.path)}
              className="flex items-center gap-4 py-4 cursor-pointer group hover:bg-gray-50 rounded-2xl px-2 -mx-2 transition-colors"
            >
              <div className="w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-[#2A4334] text-base">{item.title}</p>
                <p className="text-sm text-gray-500 leading-snug mt-0.5">{item.subtitle}</p>
              </div>
              <span className="text-gray-400 text-lg">›</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CategoryModal = ({ isOpen, onClose, categoryId }) => {
  const navigate = useNavigate();
  if (!isOpen || !categoryId || !modalData[categoryId]) return null;
  const data = modalData[categoryId];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#2A4334]/60 backdrop-blur-sm transition-opacity animate-fade-in" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl w-full max-w-2xl p-8 md:p-10 shadow-2xl z-10 animate-slide-up">
        <button onClick={onClose} className="absolute -top-12 right-0 md:-right-12 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2A4334] shadow-lg hover:scale-110 transition-transform">
          <FiX size={20} />
        </button>
        <h2 className="text-2xl font-bold text-[#2A4334] mb-8">{data.title}</h2>
        {data.groups.map((group, idx) => (
          <div key={idx} className="mb-8 last:mb-0">
            <h3 className="text-lg font-bold text-[#2A4334]/80 mb-4">{group.groupName}</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {group.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  onClick={() => {
                    document.body.style.overflow = 'unset';
                    navigate(item.path);
                  }}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  <div className="w-20 h-20 bg-[#F6F4EE] rounded-2xl flex items-center justify-center mb-3 group-hover:bg-[#E8DCCB] transition-colors border border-transparent group-hover:border-[#AA593E]/20 shadow-sm">
                    <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-[11px] text-center font-semibold leading-tight text-[#2A4334]/80 group-hover:text-[#AA593E] px-1">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MainPage = () => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [activeModalId, setActiveModalId] = useState(null);

  const [hubOpen, setHubOpen] = useState(false);
  const [activeHubId, setActiveHubId] = useState(null);

  const [subOpen, setSubOpen] = useState(false);
  const [activeSubId, setActiveSubId] = useState(null);
  const [subHasBack, setSubHasBack] = useState(false);

  window._navigateTo = (path) => {
    document.body.style.overflow = 'unset';
    navigate(path);
  };

  const handleCategoryClick = (category) => {
    document.body.style.overflow = 'hidden';
    if (category.id === 'womens_salon' || category.id === 'mens_salon') {
      setActiveHubId(category.id);
      setHubOpen(true);
    } else if (category.type === 'submodal') {
      setActiveSubId(category.id);
      setSubOpen(true);
      setSubHasBack(false);
    } else if (category.type === 'modal') {
      setActiveModalId(category.id);
      setModalOpen(true);
    } else if (category.path) {
      document.body.style.overflow = 'unset';
      navigate(category.path);
    }
  };

  const closeAll = () => {
    setHubOpen(false);
    setSubOpen(false);
    setModalOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => {
      setActiveHubId(null);
      setActiveSubId(null);
      setActiveModalId(null);
    }, 300);
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setActiveModalId(null), 300);
  };

  const handleSubOpen = (subId) => {
    setActiveSubId(subId);
    setSubOpen(true);
    setSubHasBack(true);
    setHubOpen(false);
  };

  const handleSubBack = () => {
    setSubOpen(false);
    setHubOpen(true);
    setActiveSubId(null);
  };

  return (
    <div className="bg-[#F6F4EE] min-h-screen font-sans text-[#2A4334] pt-24 overflow-x-hidden">
      <Navbar />
      <main className="max-w-[1300px] mx-auto px-4 md:px-8 py-10">
        
        {/* EXISTING HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-[54px] font-serif font-bold text-[#2A4334] mb-8 leading-[1.1] tracking-tight">
              Home services at your <br className="hidden md:block" /> doorstep
            </h1>
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#2A4334]/5">
              <h2 className="text-lg font-bold text-[#2A4334]/80 mb-6">What are you looking for?</h2>
              <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                {mainCategories.map((cat, idx) => (
                  <div key={idx} onClick={() => handleCategoryClick(cat)} className="flex flex-col items-center cursor-pointer group">
                    <div className="w-20 h-20 bg-[#F6F4EE] rounded-2xl flex items-center justify-center mb-3 group-hover:bg-[#E8DCCB] transition-colors border border-transparent group-hover:border-[#AA593E]/20 shadow-sm relative overflow-hidden">
                      <img src={cat.icon} alt={cat.title} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10" />
                    </div>
                    <span className="text-[12px] text-center font-semibold leading-snug text-[#2A4334]/90 group-hover:text-[#AA593E] px-1">{cat.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-4 h-[600px] animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-sm border border-[#2A4334]/5">
              <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Spa" />
            </div>
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-sm border border-[#2A4334]/5">
              <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Massage" />
            </div>
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-sm border border-[#2A4334]/5">
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Repair" />
            </div>
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-sm border border-[#2A4334]/5">
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="AC" />
            </div>
          </div>
        </div>

        {/* --- NEW CONTENT APPENDED FROM VIDEO SCROLLING --- */}
        <div className="mt-12 md:mt-24">
          <ServiceCarousel title="New and noteworthy" items={homeSections.newAndNoteworthy} />
          
          <ServiceCarousel title="Most booked services" items={homeSections.mostBooked} />
          
          <BannerAd 
            title="Wall Panels" 
            subtitle="Level up your walls" 
            btnText="Know more" 
            bg="#EAE3D9"
            imgUrl="https://www.familyhandyman.com/wp-content/uploads/2023/02/GettyImages-1290170612-scaled.jpg?resize=2048" 
          />
          
          <ServiceCarousel title="Spa for Women" items={homeSections.spaForWomen} />
          
          <BannerAd 
            title="Native Smart locks" 
            subtitle="Camera. Doorbell. All-in one." 
            btnText="Buy now" 
            bg="#1A1F2C"
            theme="dark"
            imgUrl="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=600" 
          />
          
          <ServiceCarousel title="Cleaning Essentials" items={homeSections.cleaningEssentials} />

          <BannerAd 
            title="Give your Space the glow-up it deserves" 
            subtitle="Home painting" 
            btnText="Buy now" 
            bg="#FFC570"
            theme="dark"
            imgUrl="https://wallpapers.com/images/hd/unique-living-room-house-interior-q76ikyi5mcdi302m.jpg" 
          />
          
          <ServiceCarousel title="Large appliances" items={homeSections.largeAppliances} />
          <ServiceCarousel title="repairAndInstallation" items={homeSections.repairAndInstallation} />


          <BannerAd 
            title="Native RO Water Purifier" 
            subtitle="Needs no service for 2 years" 
            btnText="Buy now" 
            bg="#D6E0D9"
            imgUrl="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600" 
          />
        </div>
      </main>

      <Footer />

      <HubModal isOpen={hubOpen} onClose={closeAll} hubId={activeHubId} onSubOpen={handleSubOpen} />

      <SubModal
        isOpen={subOpen}
        onClose={closeAll}
        onBack={handleSubBack}
        subId={activeSubId}
        hasBack={subHasBack}
      />

      <CategoryModal isOpen={modalOpen} onClose={closeModal} categoryId={activeModalId} />
    </div>
  );
};

export default MainPage;