import { EventItem } from '../types';

/**
 * Generates an iCalendar (.ics) file string and initiates browser download
 */
export function downloadIcsFile(event: EventItem, coupleName: string = "Mo Sahil & Siddiqa") {
  const startDate = new Date(event.isoDate);
  // Default 4 hours duration
  const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000);

  const formatIcsDate = (date: Date) => {
    return date
      .toISOString()
      .replace(/-|:|\.\d+/g, '')
      .slice(0, 15) + 'Z';
  };

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Mo Sahil and Siddiqa Nikah Celebration//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:wedding-${event.id}-${Date.now()}@weddinginvitation.com`,
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${formatIcsDate(startDate)}`,
    `DTEND:${formatIcsDate(endDate)}`,
    `SUMMARY:${coupleName} — ${event.title}`,
    `DESCRIPTION:${event.description.replace(/\n/g, ' ')}\\nDress Code: ${event.dressCode} (${event.dressColorNote})`,
    `LOCATION:${event.venueName}, ${event.areaCity}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${coupleName.replace(/\s+/g, '_')}_${event.title.replace(/\s+/g, '_')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

/**
 * Returns a web link to add event to Google Calendar
 */
export function getGoogleCalendarUrl(event: EventItem, coupleName: string = "Mo Sahil & Siddiqa"): string {
  const startDate = new Date(event.isoDate);
  const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000);

  const formatGCalDate = (date: Date) => {
    return date
      .toISOString()
      .replace(/-|:|\.\d+/g, '')
      .slice(0, 15) + 'Z';
  };

  const title = encodeURIComponent(`${coupleName} — ${event.title}`);
  const details = encodeURIComponent(
    `${event.description}\n\nDress Code: ${event.dressCode} (${event.dressColorNote})\nInsha Allah, we look forward to your presence.`
  );
  const location = encodeURIComponent(`${event.venueName}, ${event.areaCity}`);
  const dates = `${formatGCalDate(startDate)}/${formatGCalDate(endDate)}`;

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}
