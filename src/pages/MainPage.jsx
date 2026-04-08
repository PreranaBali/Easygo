import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch, FiMapPin, FiX, FiArrowLeft, FiArrowRight,
  FiCalendar, FiShoppingCart, FiStar, FiChevronRight
} from 'react-icons/fi';

// ==========================================
// 1. DATA CONSTANTS
// ==========================================

const mainCategories = [
  { id: 'instahelp', title: 'InstaHelp', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1771308635267-27aaf0.jpeg', type: 'link', path: '/service/instahelp' },
  { id: 'womens_salon', title: "Women's Salon & Spa", icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1774526047861-554660.jpeg', type: 'modal' },
  { id: 'mens_salon', title: "Men's Salon & Massage", icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1774526691081-afedc4.jpeg', type: 'modal' },
{ id: 'cleaning_pest_control', title: 'Cleaning & Pest Control', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1699869110346-61ab83.jpeg', type: 'modal' },  { id: 'ac_appliance', title: 'AC & Appliance Repair', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1768544313670-e3f84b.jpeg', type: 'modal' },
  { id: 'water_purifier', title: 'Native Water Purifier', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1773057787930-167720.jpeg', type: 'link', path: '/product/water_purifier' },
  { id: 'home_repairs', title: 'Electrician, Plumber & Carpenter', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1774526974386-784d50.jpeg', type: 'modal' },
  { id: 'painting', title: 'Painting & Waterproofing', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1674120935535-f8d5c8.jpeg', type: 'submodal' },
  { id: 'wall_panels', title: 'Wall panels by revamp', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1724138391296-c1780b.jpeg', type: 'link', path: '/wall_makeover' },
];

const hubData = {
  womens_salon: {
    title: "Women's Salon & Spa",
     items: [
      { id: 'salon_women', title: 'Salon for Women', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1774421563473-192084.jpeg', hasSub: false, path: '/service/salon_for_women' },
      { id: 'spa_women', title: 'Spa for Women', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1774421566139-db72a8.jpeg', hasSub: true, subModal: 'spa_women' },
      { id: 'hair_studio_women', title: 'Hair Studio for Women', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1728839468364-90b0dc.jpeg', hasSub: false, path: '/service/hair_studio_women' },
      { id: 'makeup_saree_styling', title: 'Makeup and saree styling', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1669023257508-ffd582.jpeg', hasSub: false, path: '/service/makeup_saree_styling' },
    ],
  },
  mens_salon: {
    title: "Men's Salon & Massage",
    items: [
      { id: 'salon_men', title: 'Salon for Men', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1774526691081-afedc4.jpeg', hasSub: false, path: '/service/salon_prime_men' },
      { id: 'massage_men', title: 'Massage for Men', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1774421566139-db72a8.jpeg', hasSub: true, subModal: 'massage_men' },
    ],
  }
};

const subModalData = {
spa_women: {
    title: 'Spa for Women',
    subtitle: null,
    banner: { bg: '#F9A8D4', label: '25% OFF', sublabel: 'summer spree', footnote: '*Up to ₹200 off', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600' },
    items: [
      { 
        id: 'luxe_spa', 
        title: 'Luxe', 
        brands: 'AINHOA | CASMARA | CIRÉPIL', // Added brands tag
        subtitle: 'Explore new waxes & Korean facials', 
        // Using generic placeholders, you can replace with your own URLs for the purple/black uniform images
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=200', 
        path: '/service/luxe_spa_women' // Updated route
      },
      { 
        id: 'prime_spa', 
        title: 'Prime', 
        brands: 'O₃₊ | RICA | INVEDA', // Added brands tag
        subtitle: null, 
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=200', 
        path: '/service/prime_spa_women' // Updated route
      },
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
          { id: 'Stove', title: 'Stove', icon:'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741326922521-c52f7c.jpeg'},
          { id: 'water_purifier_repair', title: 'Water Purifier Repair', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1767779593973-92758b.jpeg', path: '/service/water_purifier_repair' },
          { id: 'geyser', title: 'Geyser', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741326919873-8446d2.jpeg', path: '/service/geyser' },
          { id: 'Air Cooler', title: 'Air cooler', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1741326933033-32b32a.jpeg'},
        ]
      }
    ]
  },
cleaning_pest_control: {
    title: "Cleaning & Pest Control",
    groups: [
      {
        groupName: "Cleaning",
        items: [
          { id: 'bathroom_cleaning', title: 'Bathroom Cleaning', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1728900642258-b12524.jpeg', path: '/service/bathroom' },
          { id: 'kitchen_cleaning', title: 'Kitchen Cleaning', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1728900636163-e44538.jpeg' ,path: '/service/kitchen'},
          { id: 'living_bedroom_cleaning', title: 'Living & Bedroom Cleaning', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1749192312325-37e66d.jpeg', path: '/service/living_bedroom_cleaning' },
          { id: 'full_home_cleaning', title: 'Full Home/ Move-in Cleaning', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1728900634115-e18640.jpeg', path: '/service/full_home_cleaning' },
        ]
      },
      {
        groupName: "Pest Control",
        items: [
          { id: 'cockroach_control', title: 'Cockroach Control', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1728900622918-72accc.jpeg', path: '/service/cockroach_control' },
          { id: 'termite_control', title: 'Termite Control', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1728900625197-f96e53.jpeg', path: '/service/termite_control' },
          { id: 'bed_bugs_control', title: 'Bed Bugs Control', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1728900627636-876b91.jpeg', path: '/service/bed_bugs_control' },
          { id: 'ant_control', title: 'Ant Control', icon: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_48,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1764938281467-4a87a0.jpeg', path: '/service/ant_control' },
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

const homeSections = {
  newAndNoteworthy: [
    { title: 'Wall makeover by Revamp', badge: 'NEW', image: 'https://jakijellz.com/wp-content/uploads/2024/04/Bedroom-Renovation-Inspiration.jpeg' },
    { title: 'Native Water Purifier', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1773057790001-45ccab.jpeg' },
    { title: 'Native Smart Locks', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_520,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1772545415993-9fc71c.jpeg' },
    { title: 'Kitchen Cleaning', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1757512720453-11701e.jpeg' },
    { title: 'Stove', subtitle: 'in 58 mins', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1744616432209-d052da.jpeg' },
    { title: 'Laptop', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1744369169400-c89940.jpeg' },
    { title: 'Spa Women', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1753884148279-273ab1.jpeg' },
    { title: 'Hair Studio for Women', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1732532363134-1c322a.jpeg' },
    { title: 'Ac Service & Repair', image: 'https://www.orangecountyplumbinghvac.com/wp-content/uploads/2016/12/Air-Conditioning-Repair.jpg' }
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
  cleaningEssentials:  [
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
  ],
  massageForMen: [
    { title: 'Foot Massage', rating: '4.87', price: '₹549', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1736157125406-3805ec.jpeg' },
    { title: 'Quick Comfort Therapy', rating: '4.82', price: '₹1,399', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1763446472838-7145f3.jpeg' },
    { title: 'Head, neack & shoulder mass', rating: '4.87', price: '₹649', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1736156553626-74ffdd.jpeg' },
    { title: 'Leg relief massage', rating: '4.87', price: '₹899', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729749992786-bbfc52.jpeg' },
    { title: '4 sessions (Mon-Sat only): Deep tissue massage', rating: '4.84', price: '₹1,399', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729750039821-0126d6.jpeg' },
    { title: 'Back relief massage', rating: '4.86', price: '₹899', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1681973009742-95f6f2.jpeg' },
    { title: '4 sessions Swedish massage', rating: '4.83', price: '₹1,299', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1744275768330-ba8ad7.jpeg' },
  ],
  SalonForMen: [
    { title: 'Haircut for men', rating: '4.87', price: '₹549', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1677519626723-82ff21.jpeg' },
    { title: 'Haircut for Kids', rating: '4.82', price: '₹1,399', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1677519629826-eef556.jpeg' },
    { title: 'Head, neack & shoulder mass', rating: '4.87', price: '₹649', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1736156553626-74ffdd.jpeg' },
    { title: 'Leg relief massage', rating: '4.87', price: '₹899', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729749992786-bbfc52.jpeg' },
    { title: 'Brightening lemon express pedicure', rating: '4.87', price: '₹899', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1677522040981-6955eb.jpeg' },
    { title: 'Brightening lemon deep cleanse pedicure', rating: '4.84', price: '₹1,399', image: 'https://www.urbancompany.com/img?bucket=urbanclap-prod&quality=90&format=auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1677522030749-e5b32e.jpeg' },
  ]
};

// ==========================================
// 2. STYLES & ANIMATIONS
// ==========================================

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
  .font-serif { font-family: 'Playfair Display', serif; }
  
  .bg-wavy-lines { background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h16.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM42.184 0C33.73 3.356 27.234 5 20 5c-7.234 0-13.73-1.644-22.184-5h44.368z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E"); }
  .bg-wavy-lines-dark { background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h16.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM42.184 0C33.73 3.356 27.234 5 20 5c-7.234 0-13.73-1.644-22.184-5h44.368z' fill='%23000000' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E"); }
  
  @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
  .animate-scroll-left { animation: scroll-left 40s linear infinite; }
  .animate-scroll-right { animation: scroll-right 45s linear infinite; }
  .pause-on-hover:hover { animation-play-state: paused; }
  .hide-scroll::-webkit-scrollbar { display: none; }
  .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
`;

const customEase = [0.16, 1, 0.3, 1];

const MorphingBlob = ({ delay = 0, opacity = "opacity-60", color = "bg-[#E8DCC8]" }) => (
  <motion.div
    animate={{
      borderRadius: [
        "40% 60% 70% 30% / 40% 50% 60% 50%",
        "60% 40% 30% 70% / 50% 60% 40% 50%",
        "30% 70% 70% 30% / 30% 30% 70% 70%",
        "40% 60% 70% 30% / 40% 50% 60% 50%"
      ],
      rotate: [0, 90, 180, 360]
    }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay }}
    className={`absolute inset-0 ${color} ${opacity} mix-blend-multiply pointer-events-none`}
  />
);

// ==========================================
// 3. COMPONENTS
// ==========================================

const FloatingNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-[#F5F2EA] ${
      isScrolled ? 'shadow-sm py-4 border-b border-[#E8DCC8]' : 'py-6 border-b border-transparent'
    }`}>
      <div className="flex items-center justify-between w-full max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="font-serif text-3xl font-black text-[#1F2922] tracking-tighter">EG</span>
          <span className="text-xl font-medium tracking-tight text-[#1F2922] hidden sm:block">EasyGo</span>
          <div className="hidden lg:flex items-center ml-10 gap-6">
            {['Revamp', 'Native', 'Beauty', 'About Us'].map((link) => (
              <span key={link} className="text-sm font-semibold text-[#1F2922]/60 hover:text-[#9A5B40] cursor-pointer transition-colors">
                {link}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center bg-white border border-[#E8DCC8] rounded-full px-5 py-2.5 hover:border-[#9A5B40] cursor-pointer transition-colors">
            <FiMapPin className="text-[#9A5B40] mr-2 shrink-0" size={14} />
            <span className="text-xs font-bold text-[#1F2922]">Outer Ring Road, Bengaluru</span>
          </div>
          <div className="flex items-center gap-5 text-[#1F2922]/60">
            <FiCalendar size={20} className="cursor-pointer hover:text-[#9A5B40] transition-colors" />
            <div className="relative cursor-pointer hover:text-[#9A5B40] transition-colors">
              <FiShoppingCart size={20} />
              <div className="absolute -top-1.5 -right-2 bg-[#9A5B40] text-[#F5F2EA] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#F5F2EA]">
                3
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white border border-[#E8DCC8] rounded-full py-1 pl-1 pr-5 cursor-pointer hover:shadow-sm transition-all ml-2">
            <div className="w-8 h-8 rounded-full bg-[#25392D] text-[#F5F2EA] flex items-center justify-center font-bold text-sm">P</div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#1F2922] leading-none">Prerana</span>
              <span className="text-[8px] font-bold text-[#9A5B40] tracking-widest flex items-center gap-1 mt-0.5">
                ACTIVE <div className="w-1.5 h-1.5 rounded-full bg-[#9A5B40]"></div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const AutoCarousel = ({ title, items = [], speed = 40, reverse = false }) => {
  const navigate = useNavigate();
  if (!items || items.length === 0) return null; 
  const loopItems = [...items, ...items, ...items, ...items];

  const getSlugFromTitle = (title) => {
    const t = title.toLowerCase();
    if (t.includes('bathroom') || t.includes('kitchen') || t.includes('home')) return 'full_home';
    if (t.includes('salon') || t.includes('spa')) return 'salon_for_women';
    if (t.includes('massage')) return 'massage_men';
    return 'general';
  };

  return (
    <div className="mt-16 md:mt-24 relative flex flex-col overflow-hidden group/container">
      <div className="flex justify-between items-end mb-6 px-6 lg:px-12 max-w-[1400px] mx-auto w-full relative z-20">
        <h2 className="text-3xl md:text-4xl font-serif text-[#1F2922] tracking-tight">{title}</h2>
      </div>
      <div className="relative w-full overflow-hidden py-4">
        <div 
          className={`flex w-max ${reverse ? 'animate-scroll-right' : 'animate-scroll-left'} pause-on-hover`}
          style={{ animationDuration: `${speed}s` }}
        >
          {loopItems.map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              onClick={() => navigate(`/service/${getSlugFromTitle(item.title)}`)}
              className="relative w-[260px] md:w-[280px] bg-white rounded-[2rem] overflow-hidden group snap-start flex-shrink-0 cursor-pointer shadow-sm border border-[#E8DCC8] hover:shadow-xl hover:border-[#9A5B40] transition-all mx-3"
            >
              <div className="w-full aspect-square relative p-4 bg-white flex items-center justify-center overflow-hidden">
                <MorphingBlob delay={i * 2} opacity="opacity-30" />
                {item.badge && (
                  <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm text-[#9A5B40] text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {item.badge}
                  </div>
                )}
                <motion.div 
                  className="relative w-full h-full overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.1)]"
                  style={{ borderRadius: i % 2 === 0 ? "40% 60% 70% 30% / 40% 50% 60% 50%" : "30% 70% 70% 30% / 30% 30% 70% 70%" }}
                  whileHover={{ borderRadius: "50% 50% 50% 50%", scale: 1.05 }}
                  transition={{ duration: 0.5, ease: customEase }}
                >
                  <img src={item.image || item.icon} alt={item.title} className="w-full h-full object-cover transition-transform duration-700" />
                </motion.div>
              </div>
              <div className="p-5 bg-white border-t border-[#E8DCC8]/30">
                <h3 className="font-bold font-serif text-[#1F2922] text-xl leading-tight group-hover:text-[#9A5B40] transition-colors line-clamp-2">{item.title}</h3>
                <div className="mt-3 flex items-center justify-between">
                  {item.rating && (
                    <span className="flex items-center text-sm font-bold text-[#1F2922]/70">
                      <FiStar className="text-[#9A5B40] fill-[#9A5B40] mr-1.5" size={14} /> {item.rating}
                    </span>
                  )}
                  <div className="flex items-center gap-2">
                    {item.oldPrice && <span className="line-through text-[#1F2922]/40 text-xs font-semibold">{item.oldPrice}</span>}
                    {item.price && <span className="font-black text-[#1F2922] text-lg">{item.price}</span>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MagazineBanner = ({ title, subtitle, btnText, imgUrl, targetSlug }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 mt-20 mb-10">
      <div onClick={() => targetSlug && navigate(`/service/${targetSlug}`)} className="relative w-full h-[40vh] md:h-[50vh] rounded-[3rem] overflow-hidden group cursor-pointer shadow-xl border border-transparent hover:border-[#9A5B40]/50 transition-all">
        <motion.img whileHover={{ scale: 1.03 }} transition={{ duration: 1.5, ease: "easeOut" }} src={imgUrl} className="absolute inset-0 w-full h-full object-cover" alt="Banner" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#25392D]/90 via-[#25392D]/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 max-w-2xl">
          <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-[#E8DCC8] text-xs md:text-sm font-black tracking-[0.2em] uppercase mb-4 drop-shadow-md">{subtitle}</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#F5F2EA] mb-8 leading-[1.1] tracking-tight drop-shadow-md">{title}</h2>
            <button className="px-8 py-3.5 rounded-full font-bold text-sm md:text-base bg-[#F5F2EA] text-[#9A5B40] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
              {btnText}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. SPATIAL MODALS & DRAWERS
// ==========================================

const SideDrawer = ({ isOpen, onClose, hubId, onSubOpen }) => {
  if (!hubId || !hubData[hubId]) return null;
  const data = hubData[hubId];
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-[#1F2922]/40 backdrop-blur-sm z-[100]" onClick={onClose} />
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed top-0 bottom-0 right-0 w-full md:w-[480px] bg-[#F5F2EA] shadow-2xl z-[110] flex flex-col">
            <div className="flex items-center justify-between p-8 border-b border-[#E8DCC8]">
              <h2 className="text-3xl font-serif text-[#1F2922] tracking-tight">{data.title}</h2>
              <button onClick={onClose} className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#9A5B40] hover:text-white transition-colors text-[#1F2922]">
                <FiX size={24} />
              </button>
            </div>
            <div className="p-8 overflow-y-auto flex-1 hide-scroll">
              <div className="grid grid-cols-2 gap-4">
                {data.items.map((item, idx) => (
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} key={item.id} onClick={() => { if (item.hasSub) { onSubOpen(item.subModal); } else { document.body.style.overflow = 'unset'; onClose(); } }} className="relative cursor-pointer group flex flex-col items-center justify-center text-center gap-4 p-4 bg-white border border-[#E8DCC8] rounded-[2rem] hover:border-[#9A5B40] hover:shadow-md transition-all overflow-hidden">
                    <MorphingBlob delay={idx} opacity="opacity-20" />
                    <div className="w-16 h-16 relative z-10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-[#F5F2EA] flex items-center justify-center group-hover:bg-[#E8DCC8]/50 transition-colors">
                      <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain mix-blend-multiply group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm font-bold text-[#1F2922] relative z-10 group-hover:text-[#9A5B40] transition-colors leading-tight px-1">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const SubDrawer = ({ isOpen, onClose, onBack, subId }) => {
  const navigate = useNavigate();
  if (!subId || !subModalData[subId]) return null;
  const data = subModalData[subId];
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed top-0 bottom-0 right-0 w-full md:w-[480px] bg-[#F5F2EA] shadow-2xl z-[120] flex flex-col">
          <div className="flex items-center justify-between p-8 border-b border-[#E8DCC8]">
            <div className="flex items-center gap-5">
              <button onClick={onBack} className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#E8DCC8]/50 hover:text-[#9A5B40] transition-colors text-[#1F2922]"><FiArrowLeft size={22} /></button>
              <h2 className="text-2xl font-serif text-[#1F2922] tracking-tight">{data.title}</h2>
            </div>
            <button onClick={onClose} className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#9A5B40] hover:text-white transition-colors text-[#1F2922]"><FiX size={24} /></button>
          </div>
          <div className="overflow-y-auto flex-1 p-8 hide-scroll">
            {data.banner && (
              <div className="mb-10 rounded-3xl overflow-hidden flex h-36 relative shadow-sm border border-[#E8DCC8]/50" style={{ backgroundColor: data.banner.bg }}>
                <div className="flex flex-col justify-center pl-6 z-10 w-[60%]">
                  <span className="text-white text-3xl font-serif tracking-tighter">{data.banner.label}</span>
                  <span className="text-white/90 text-xs font-bold uppercase tracking-wider mt-1">{data.banner.sublabel}</span>
                </div>
                <div className="absolute right-0 top-0 h-full w-[50%]"><img src={data.banner.image} alt="banner" className="w-full h-full object-cover mix-blend-overlay opacity-60" /></div>
              </div>
            )}
            <div className="space-y-4">
              {data.items.map((item, idx) => (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} key={item.id} onClick={() => { document.body.style.overflow = 'unset'; navigate(item.path || '/service/any'); }} className="flex items-center gap-4 cursor-pointer group transition-all duration-300 bg-white border border-[#E8DCC8] p-3 rounded-[2rem] hover:border-[#9A5B40] hover:shadow-md">
                  <div className="overflow-hidden rounded-2xl shadow-sm bg-[#F5F2EA] w-20 h-20 relative flex items-center justify-center">
                     <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 py-1">
                    <h3 className="font-bold font-serif text-[#1F2922] text-lg group-hover:text-[#9A5B40] transition-colors leading-snug">{item.title}</h3>
                    {item.brands && <p className="text-[10px] font-black tracking-widest text-[#1F2922]/40 mt-1 uppercase">{item.brands}</p>}
                    {item.subtitle && <p className="text-sm text-[#1F2922]/60 font-medium mt-0.5">{item.subtitle}</p>}
                  </div>
                  <div className="pr-2 text-[#E8DCC8] group-hover:text-[#9A5B40] transition-transform duration-300 group-hover:translate-x-1"><FiChevronRight size={24} /></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FullscreenOverlay = ({ isOpen, onClose, categoryId }) => {
  const navigate = useNavigate();
  if (!categoryId || !modalData[categoryId]) return null;
  const data = modalData[categoryId];
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] pointer-events-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#F5F2EA]/95 backdrop-blur-3xl" />
          <div className="absolute top-8 right-8 md:top-12 md:right-12 z-20">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onClose} className="w-16 h-16 bg-white border border-[#E8DCC8] shadow-xl rounded-full flex items-center justify-center text-[#1F2922] hover:text-white hover:bg-[#9A5B40] transition-colors"><FiX size={32} /></motion.button>
          </div>
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} transition={{ type: "spring", damping: 25, stiffness: 120 }} className="relative z-10 w-full h-full overflow-y-auto px-6 py-24 md:p-32 hide-scroll">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-5xl md:text-7xl font-serif text-[#1F2922] mb-16 tracking-tighter">{data.title}</h2>
              <div className="space-y-20">
                {data.groups.map((group, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-bold text-[#1F2922]/40 mb-8 flex items-center gap-4 uppercase tracking-wider">{group.groupName}<div className="h-[1px] flex-1 bg-[#E8DCC8]" /></h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      {group.items.map((item, itemIdx) => (
                        <motion.div whileHover={{ y: -5 }} key={itemIdx} onClick={() => { document.body.style.overflow = 'unset'; navigate(item.path || '/service/any'); }} className="group cursor-pointer flex flex-col items-center bg-white border border-[#E8DCC8] rounded-[2.5rem] p-6 hover:shadow-xl hover:border-[#9A5B40] transition-all duration-300 relative overflow-hidden">
                          <MorphingBlob delay={itemIdx} opacity="opacity-10" />
                          <div className="w-20 h-20 bg-[#F5F2EA] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#E8DCC8]/50 relative z-10">
                            <motion.img whileHover={{ scale: 1.1 }} src={item.icon} alt={item.title} className="w-10 h-10 object-contain mix-blend-multiply" />
                          </div>
                          <span className="text-sm font-bold text-[#1F2922] text-center group-hover:text-[#9A5B40] transition-colors px-1 leading-tight relative z-10">{item.title}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// ==========================================
// 5. MAIN PAGE
// ==========================================

const MainPage = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModalId, setActiveModalId] = useState(null);
  const [hubOpen, setHubOpen] = useState(false);
  const [activeHubId, setActiveHubId] = useState(null);
  const [subOpen, setSubOpen] = useState(false);
  const [activeSubId, setActiveSubId] = useState(null);

  const handleCategoryClick = (category) => {
    document.body.style.overflow = 'hidden';
    if (category.id === 'womens_salon' || category.id === 'mens_salon') {
      setActiveHubId(category.id);
      setHubOpen(true);
    } else if (category.type === 'submodal') {
      setActiveSubId(category.id);
      setSubOpen(true);
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
    setTimeout(() => { setActiveHubId(null); setActiveSubId(null); setActiveModalId(null); }, 600);
  };

  return (
    <div className="bg-[#F5F2EA] bg-wavy-lines-dark min-h-screen font-sans text-[#1F2922] overflow-x-hidden selection:bg-[#9A5B40]/30 selection:text-[#9A5B40]">
      
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      <FloatingNav />

      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-15 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Side: Title and Categories */}
          <div className="w-full lg:w-[55%] z-10">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1F2922] leading-[1.1] tracking-tight mb-10">
              Home services<br/>
              <span className="font-sans font-medium italic text-[#9A5B40]">at your doorstep</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="bg-white rounded-[3rem] p-8 md:p-10 shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-[#E8DCC8] max-w-xl relative overflow-hidden">
              <MorphingBlob opacity="opacity-[0.03]" />
              <h2 className="text-xl md:text-2xl font-bold font-serif text-[#1F2922] mb-8 relative z-10">What are you looking for?</h2>
              
              <div className="grid grid-cols-3 gap-y-10 gap-x-4 relative z-10">
                {mainCategories.map((cat, idx) => (
                  <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }} key={idx} onClick={() => handleCategoryClick(cat)} className="flex flex-col items-center gap-3 cursor-pointer group">
                    <div className="relative w-20 h-20 flex items-center justify-center mb-1">
                      <MorphingBlob delay={idx * 1.5} opacity="opacity-40 group-hover:opacity-80 transition-opacity" />
                      <div className="w-16 h-16 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-transparent flex items-center justify-center z-10 p-3">
                        <img src={cat.icon} alt={cat.title} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    <span className="text-[13px] font-bold text-[#1F2922]/80 text-center leading-snug px-1 group-hover:text-[#9A5B40] transition-colors">{cat.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Image Collage Themed */}
          <div className="w-full lg:w-[45%] lg:mt-0 hidden md:block">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="grid grid-cols-2 gap-6 h-[500px] lg:h-[650px] pl-4 lg:pl-8">
              
              <div className="flex flex-col gap-6">
                <motion.div 
                  className="h-[60%] w-full overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] relative"
                  style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
                  whileHover={{ borderRadius: "50% 50% 50% 50%", scale: 1.02 }}
                  transition={{ duration: 0.5, ease: customEase }}
                >
                  <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Facial treatment" />
                  <div className="absolute inset-0 bg-[#9A5B40] mix-blend-overlay opacity-20"></div>
                </motion.div>
                <motion.div 
                  className="h-[40%] w-full overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] relative"
                  style={{ borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%" }}
                  whileHover={{ borderRadius: "50% 50% 50% 50%", scale: 1.02 }}
                  transition={{ duration: 0.5, ease: customEase }}
                >
                  <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Massage" />
                  <div className="absolute inset-0 bg-[#25392D] mix-blend-overlay opacity-20"></div>
                </motion.div>
              </div>

              <div className="flex flex-col gap-6 pt-12">
                <motion.div 
                  className="h-[40%] w-full overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] relative"
                  style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
                  whileHover={{ borderRadius: "50% 50% 50% 50%", scale: 1.02 }}
                  transition={{ duration: 0.5, ease: customEase }}
                >
                  <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="AC Repair" />
                  <div className="absolute inset-0 bg-[#9A5B40] mix-blend-overlay opacity-20"></div>
                </motion.div>
                <motion.div 
                  className="h-[60%] w-full overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] relative"
                  style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
                  whileHover={{ borderRadius: "50% 50% 50% 50%", scale: 1.02 }}
                  transition={{ duration: 0.5, ease: customEase }}
                >
                  <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Bathroom Interior" />
                  <div className="absolute inset-0 bg-[#25392D] mix-blend-overlay opacity-20"></div>
                </motion.div>
              </div>

            </motion.div>
          </div>

        </div>
      </main>

      <div className="relative z-10 w-full mt-10">
        <AutoCarousel title="New & Noteworthy" items={homeSections.newAndNoteworthy} speed={40} />
        <AutoCarousel title="Most Booked" items={homeSections.mostBooked} speed={35} reverse={true} />
        <MagazineBanner title="Transform your space with Wall Panels." subtitle="Revamp Interior" btnText="Explore Designs" targetSlug="full_home_painting" imgUrl="https://www.familyhandyman.com/wp-content/uploads/2023/02/GettyImages-1290170612-scaled.jpg?resize=2048" />
        <AutoCarousel title="Spa Retreat" items={homeSections.spaForWomen} speed={40} />
        <MagazineBanner title="Smarter security for your front door." subtitle="Native Smart Locks" btnText="Shop Now" targetSlug="smart_locks" imgUrl="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200" />
        <AutoCarousel title="Pristine Cleaning" items={homeSections.cleaningEssentials} speed={45} reverse={true} />
        <AutoCarousel title="Appliance Care" items={homeSections.largeAppliances} speed={38} />
        <AutoCarousel title="Repairs & Fixes" items={homeSections.repairAndInstallation} speed={42} reverse={true} />
        <AutoCarousel title="Mens Wellness" items={homeSections.massageForMen} speed={35} />
        <AutoCarousel title="Grooming" items={homeSections.SalonForMen} speed={40} reverse={true}/>
      </div>

      <SideDrawer isOpen={hubOpen} onClose={closeAll} hubId={activeHubId} onSubOpen={(id) => { setActiveSubId(id); setSubOpen(true); setHubOpen(false); }} />
      <SubDrawer isOpen={subOpen} onClose={closeAll} onBack={() => { setSubOpen(false); setHubOpen(true); setTimeout(() => setActiveSubId(null), 600); }} subId={activeSubId} />
      <FullscreenOverlay isOpen={modalOpen} onClose={closeAll} categoryId={activeModalId} />
    </div>
  );
};

export default MainPage;