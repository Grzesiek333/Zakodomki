import React, { useEffect, useState } from 'react';
import ICAL from 'ical.js';

function CalendarComponent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const icsFilePath = 'src/export.ics';

    fetch(icsFilePath)
      .then(response => response.text())
      .then(icsData => {
        const jcalData = ICAL.parse(icsData);
        const comp = new ICAL.Component(jcalData);

        const eventsArray = comp.getAllProperties('vevent').map(event => ({
          summary: event.getFirstValue('summary'),
          startDate: event.getFirstValue('DTSTART'),
          endDate: event.getFirstValue('dtend'),
        }));

        setEvents(eventsArray);
      })
      .catch(error => {
        console.error('Błąd podczas ładowania pliku ICS:', error);
      });
  }, []);

  return (
    <div>
      <h2>Kalendarz</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.summary}</strong><br />
            Od: {event.startDate.toString()}<br />
            Do: {event.endDate.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CalendarComponent;



  
