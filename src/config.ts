import { EventItem, FamilyContact } from './types';

/**
 * =========================================================================
 * WEDDING INVITATION CONFIGURATION
 * =========================================================================
 * Modify this file to customize all details: names, events, dates, venues,
 * WhatsApp RSVP contacts, and Google Sheets submission endpoint.
 */
export const CONFIG = {
  // COUPLE DETAILS
  couple: {
    monogram: "S & S",
    groom: {
      fullName: "Mo Sahil Doi",
      shortName: "Sahil",
      father: "Mo Basit Doi",
      mother: "Sayera Doi",
      parentsTitle: "Son of Mo Basit Doi & Sayera Doi",
      bio: "An architect of thoughtful experiences, devoted to faith, family, and lifelong companionship.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", // [SWAP: Groom Portrait]
    },
    bride: {
      fullName: "Siddiqa Panchbhaiya",
      shortName: "Siddiqa",
      father: "Mo Yusuf Panchbhaiya",
      mother: "Zarina Panchbhaiya",
      parentsTitle: "Daughter of Mo Yusuf Panchbhaiya & Zarina Panchbhaiya",
      bio: "A soul of gentleness and artistic grace, walking toward this new chapter with trust in Allah.",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", // [SWAP: Bride Portrait]
    },
  },

  // HOSTING FAMILIES (Groom's Side Invitation)
  hosts: {
    announcementHeadline: "Alhamdulillah",
    announcementText:
      "With the divine blessings of Almighty Allah (SWT) and cherished prayers of our elders, the Doi Family joyfully invites you to celebrate the wedding festivities of their beloved son Mo Sahil with Siddiqa.",
    groomFamily: "The Doi Family",
    brideFamily: "The Panchbhaiya Family",
    invitationSubtitle: "Boy's Side Wedding Celebration & Dawat-e-Khas",
  },

  // COUNTDOWN TARGET DATES
  friendsGatheringDateIso: "2026-11-02T21:00:00",
  nikahDateIso: "2026-11-14T09:00:00",

  // WEDDING & GATHERING EVENTS
  events: [
    {
      id: "friends-gathering-1",
      title: "Friends Gathering — Night 01",
      arabicTitle: "حَفْلَةُ الْأَصْدِقَاءِ",
      dateStr: "Monday, 2 November 2026",
      isoDate: "2026-11-02T21:00:00",
      timeStr: "9:00 PM onwards",
      venueName: "Sanjar Street, New Mohalat",
      areaCity: "Himatnagar, Gujarat",
      dressCode: "Festive & Smart Ethnic",
      dressColorNote: "Royal Emerald, Black & Gold Accents",
      mapQuery: "Sanjar Street, New Mohalat, Himatnagar, Gujarat",
      mapCoordinates: { lat: 23.5979, lng: 72.9698 },
      description: "An electrifying kickoff night of brotherhood, lively banter, midnight chai, and celebratory laughter welcoming Sahil's big milestone.",
      iconType: "friends",
    },
    {
      id: "friends-gathering-2",
      title: "Friends Gathering — Night 02",
      arabicTitle: "أُمْسِيَةُ الْأَحِبَّةِ",
      dateStr: "Tuesday, 3 November 2026",
      isoDate: "2026-11-03T21:00:00",
      timeStr: "9:00 PM onwards",
      venueName: "Sanjar Street, New Mohalat",
      areaCity: "Himatnagar, Gujarat",
      dressCode: "Indo-Western & Royal Casual",
      dressColorNote: "Midnight Navy, Maroon & Antique Gold",
      mapQuery: "Sanjar Street, New Mohalat, Himatnagar, Gujarat",
      mapCoordinates: { lat: 23.5979, lng: 72.9698 },
      description: "Night two of camaraderie, unforgettable musical vibes, bonding, and heartfelt conversations with the groom's inner circle.",
      iconType: "friends",
    },
    {
      id: "friends-gathering-3",
      title: "Friends Gathering — Grand Eve",
      arabicTitle: "لَيْلَةُ الْأَفْرَاحِ الكُبْرَى",
      dateStr: "Monday, 9 November 2026",
      isoDate: "2026-11-09T21:00:00",
      timeStr: "9:00 PM onwards",
      venueName: "Sanjar Street, New Mohalat",
      areaCity: "Himatnagar, Gujarat",
      dressCode: "Royal Pathani / Traditional Kurta",
      dressColorNote: "Imperial Green, Cream & Gilded Gold",
      mapQuery: "Sanjar Street, New Mohalat, Himatnagar, Gujarat",
      mapCoordinates: { lat: 23.5979, lng: 72.9698 },
      description: "The grand pre-wedding night of celebration, traditional beats, celebratory feast, and warmest blessings for our groom.",
      iconType: "friends",
    },
    {
      id: "nikah",
      title: "The Auspicious Nikah",
      arabicTitle: "عَقْدُ النِّكَاحِ",
      dateStr: "Saturday, 14 November 2026",
      isoDate: "2026-11-14T09:00:00",
      timeStr: "9:00 AM onwards",
      venueName: "Madresha High School",
      areaCity: "Himatnagar, Gujarat",
      dressCode: "Modest Islamic Formal / Sherwani",
      dressColorNote: "Ivory, Royal Sherwani & Gold",
      mapQuery: "Madresha High School, Himatnagar, Gujarat",
      mapCoordinates: { lat: 23.5992, lng: 72.9645 },
      description: "The sacred marriage solemnization following morning Quranic recitation, accompanied by heartfelt duas and barakah.",
      iconType: "nikah",
    },
  ] as EventItem[],

  // RSVP DETAILS
  rsvp: {
    deadline: "1 December 2026",
    whatsappNumber: "+919876543210",
    whatsappMessageTemplate:
      "Assalamu Alaikum Sahil! We are thrilled to RSVP for the Friends Gathering and Wedding celebrations. Count us in, Insha Allah!",
    endpoint: "https://httpbin.org/post",
    enableEndpointPosting: true,
  },

  // ISLAMIC VERSES & DUAS
  islamicContent: {
    bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    bismillahTransliteration: "Bismillahir Rahmanir Rahim",
    bismillahEnglish: "In the name of Allah, the Most Gracious, the Most Merciful",

    quranArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    quranReference: "Surah Ar-Rum · 30:21",
    quranEnglish: "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquillity with them, and He has placed between you love and mercy.",

    barakahDuaArabic: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    barakahDuaTransliteration: "Barakallahu lakuma wa baraka 'alaikuma wa jama'a bainakuma fi khair",
    barakahDuaEnglish: "May Allah bless you both, shower His blessings upon you, and join you together in goodness.",

    closingGreeting: "JazakAllahu Khairan for your duas and presence.",
    salamGreeting: "Wassalamu Alaikum Wa Rahmatullahi Wa Barakatuh",
    celebrationNote: "Insha Allah, we look forward to celebrating together with you.",
  },

  // FAMILY CONTACT NUMBERS FOR GUEST INQUIRIES
  contacts: [
    {
      side: "Groom",
      name: "Mo Basit Doi",
      relation: "Groom's Father",
      phone: "+91 98765 43210",
    },
    {
      side: "Groom",
      name: "Mo Sahil Doi",
      relation: "The Groom",
      phone: "+91 98980 12345",
    },
    {
      side: "Groom",
      name: "Doi Family Helpdesk",
      relation: "Friends Gathering & Guest Logistics",
      phone: "+91 99887 76655",
    },
  ] as FamilyContact[],

  // OPTIONAL GIFT / EIDI / DUAS NOTE
  gifts: {
    note: "Your heartfelt prayers, duas, and gracious presence are the greatest gifts we could ever ask for.",
    optionalUpiId: "sahildoi@okhdfcbank",
    bankName: "HDFC Bank Ltd.",
    accountHolder: "Mo Sahil Doi",
    accountNumber: "50100234891234",
    ifscCode: "HDFC0001234",
  },

  // ART DIRECTION PALETTE REFERENCE (Boy's Side: Deep Royal Emerald & Imperial Gold)
  palette: {
    darkEmerald: "#051612",
    midnightObsidian: "#030B08",
    cardEmerald: "#0B241E",
    cardBorder: "#194539",
    goldAntique: "#C9A227",
    goldHighlight: "#F5DE93",
    goldMetallic: "#D4AF37",
    goldDeep: "#8A6D23",
    champagne: "#F0E4CE",
    emeraldAccent: "#135445",
    textPrimary: "#FAF7F0",
    textSecondary: "#A3B8B0",
  },
};
