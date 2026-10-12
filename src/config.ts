import { EventItem, FamilyContact } from './types';

/**
 * =========================================================================
 * WEDDING INVITATION CONFIGURATION
 * =========================================================================
 * Modify this file to customize all details: names, events, dates, venues,
 * WhatsApp RSVP contacts, and Google Sheets submission endpoint.
 */
export const CONFIG = {
  // COUPLE DETAILS (Bride's Side: Siddiqa & Mo. Sahil)
  couple: {
    monogram: "S & S",
    bride: {
      fullName: "Siddiqa Panchbhaiya",
      shortName: "Siddiqa",
      father: "Mo Yusuf Panchbhaiya",
      mother: "Zarina Panchbhaiya",
      parentsTitle: "Daughter of Mo Yusuf Panchbhaiya & Zarina Panchbhaiya",
      bio: "A soul of gentleness and artistic grace, walking toward this new chapter with trust in Allah.",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    },
    groom: {
      fullName: "Mo. Sahil Doi",
      shortName: "Mo. Sahil",
      father: "Mo Basit Doi",
      mother: "Sayera Doi",
      parentsTitle: "Son of Mo Basit Doi & Sayera Doi",
      bio: "Devoted to faith, family, and lifelong companionship.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    },
  },

  // HOSTING FAMILIES (Bride's Side: The Panchbhaiya Family (Nadisan wala))
  hosts: {
    announcementHeadline: "Alhamdulillah",
    announcementText:
      "With the divine blessings of Almighty Allah (SWT) and our cherished elders, the Panchbhaiya Family (Nadisan wala) joyfully invites you to celebrate the wedding festivities of their beloved daughter Siddiqa with Mo. Sahil.",
    brideFamily: "The Panchbhaiya Family (Nadisan wala)",
    invitationSubtitle: "Bride's Side Wedding Invitation",
  },

  // NIKAH DATE FOR COUNTDOWN (Sat 14 Nov 2026, 9:00 AM)
  nikahDateIso: "2026-11-14T09:00:00",

  // WEDDING EVENTS (3 Events Only)
  events: [
    {
      id: "mehndi",
      title: "Mehndi Celebration",
      arabicTitle: "حَفْلَة الْحِنَّاء",
      dateStr: "Thursday, 12 November 2026",
      isoDate: "2026-11-12T17:00:00",
      timeStr: "5:00 PM onwards",
      venueName: "Anjuman Street, Pologround",
      areaCity: "Himatnagar, Gujarat",
      dressCode: "Traditional Festive",
      dressColorNote: "Vibrant Greens, Ochre & Marigold",
      mapQuery: "Pologround, Himatnagar, Gujarat",
      mapCoordinates: { lat: 23.5979, lng: 72.9698 },
      description: "An evening of joyful henna traditions, celebratory melodies, and warm family fellowship under the stars.",
      iconType: "mehndi",
    },
    {
      id: "engagement",
      title: "Engagement Ceremony",
      arabicTitle: "حَفْلَةُ الْخُطُوبَة",
      dateStr: "Friday, 13 November 2026",
      isoDate: "2026-11-13T15:00:00",
      timeStr: "3:00 PM onwards",
      venueName: "Anjuman Street, Pologround",
      areaCity: "Himatnagar, Gujarat",
      dressCode: "Pastel & Royal Ethnic",
      dressColorNote: "Rose Gold, Peach & Mint Accents",
      mapQuery: "Pologround, Himatnagar, Gujarat",
      mapCoordinates: { lat: 23.5979, lng: 72.9698 },
      description: "A cherished gathering of both families to exchange sacred rings, prayers, and celebratory blessings.",
      iconType: "engagement",
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
      dressCode: "Modest Islamic Formal",
      dressColorNote: "Ivory, Cream & Antique Gold",
      mapQuery: "Madresha High School, Himatnagar, Gujarat",
      mapCoordinates: { lat: 23.5992, lng: 72.9645 },
      description: "The sacred marriage solemnization following morning Quranic recitation, accompanied by heartfelt duas.",
      iconType: "nikah",
    },
  ] as EventItem[],

  // RSVP DETAILS
  rsvp: {
    deadline: "1 December 2026",
    whatsappNumber: "+91XXXXXXXXXX",
    whatsappMessageTemplate:
      "Assalamu Alaikum! We are delighted to RSVP for the wedding of Mo Sahil & Siddiqa.",
    // Replace with your Google Apps Script URL or Formspree endpoint (e.g. 'https://script.google.com/macros/s/.../exec')
    endpoint: "https://httpbin.org/post",
    enableEndpointPosting: true,
  },

  // ISLAMIC VERSES & DUAS
  islamicContent: {
    bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    bismillahTransliteration: "Bismillahir Rahmanir Rahim",
    bismillahEnglish: "In the name of Allah, the Most Gracious, the Most Merciful",

    azwajaArabic: "وَخَلَقْنَاكُمْ أَزْوَاجًا",
    azwajaTransliteration: "Wa-khalaqnakum azwaja",
    azwajaEnglish: "And We created you in pairs",
    azwajaReference: "Surah An-Naba · 78:8",

    quranArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    quranReference: "Surah Ar-Rum · 30:21",
    quranEnglish: "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquillity with them, and He has placed between you love and mercy.",

    barakahDuaArabic: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    barakahDuaTransliteration: "Barakallahu lakuma wa baraka 'alaikuma wa jama'a bainakuma fi khair",
    barakahDuaEnglish: "May Allah bless you both, shower His blessings upon you, and join you together in goodness.",

    closingGreeting: "JazakAllahu Khairan for your duas and presence.",
    salamGreeting: "Wassalamu Alaikum Wa Rahmatullahi Wa Barakatuh",
    celebrationNote: "Insha Allah, we look forward to celebrating with you.",
  },

  // FAMILY CONTACT NUMBERS FOR GUEST INQUIRIES
  contacts: [
    {
      side: "Bride",
      name: "Mo Yusuf Panchbhaiya",
      relation: "Bride's Father",
      phone: "+91 91234 56789",
    },
    {
      side: "Bride",
      name: "Panchbhaiya Family Helpdesk (Nadisan wala)",
      relation: "Guest Hospitality & Stay",
      phone: "+91 99887 76655",
    },
  ] as FamilyContact[],

  // OPTIONAL GIFT / EIDI / DUAS NOTE
  gifts: {
    note: "Your heartfelt prayers, duas, and gracious presence are the greatest gifts we could ever ask for.",
    optionalUpiId: "siddiqap@okhdfcbank",
    bankName: "HDFC Bank Ltd.",
    accountHolder: "Siddiqa Panchbhaiya",
    accountNumber: "50100234891234",
    ifscCode: "HDFC0001234",
  },

  // ART DIRECTION PALETTE REFERENCE
  palette: {
    burgundyDark: "#1A0910",
    burgundyBase: "#2A1119",
    plumDeep: "#4A2028",
    goldAntique: "#C9A227",
    goldHighlight: "#F2DA8B",
    goldDeep: "#8A6A12",
    champagne: "#EADFC8",
    ivoryText: "#F7F1E6",
    mutedSage: "#7E8B72",
  },
};
