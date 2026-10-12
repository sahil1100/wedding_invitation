export interface EventItem {
  id: string;
  title: string;
  arabicTitle: string;
  dateStr: string; // Display string, e.g. "Wednesday, 10 December 2026"
  isoDate: string; // ISO 8601 for calendar & countdown: "2026-12-10T18:00:00"
  timeStr: string; // e.g. "6:00 PM onwards"
  venueName: string;
  areaCity: string;
  dressCode: string;
  dressColorNote: string;
  mapQuery: string;
  mapCoordinates: { lat: number; lng: number };
  description: string;
  iconType: 'mehndi' | 'engagement' | 'nikah' | 'walima' | 'friends';
}

export interface FamilyContact {
  side: 'Groom' | 'Bride';
  name: string;
  relation: string;
  phone: string;
}

export interface RsvpFormData {
  fullName: string;
  phone: string;
  attending: 'attending' | 'inshaAllah' | 'declined';
  guestsCount: number;
  events: string[]; // event IDs
  message: string;
}
