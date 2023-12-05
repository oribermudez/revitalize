import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Relaxing Massage',
    start: new Date(2023, 11, 1, 10, 0),
    end: new Date(2023, 11, 1, 12, 0),
    person: 'John Doe',
  },
  {
    title: 'Hot Stone Massage',
    start: new Date(2023, 11, 5, 14, 0),
    end: new Date(2023, 11, 5, 16, 0),
    person: 'Jane Smith',
  },
  // Add more events as needed
];

const eventStyleGetter = (event, start, end, isSelected) => {

  const style = {
    backgroundColor: '#77aba0',
    borderRadius: '0px',
    opacity: 0.8,
    color: 'white',
    border: '0px',
    display: 'block',
  };

  return {
    style,
  };
};

const MyCalendar = () => {
  const CustomEvent = ({ event }) => (
    <div className='text-sm'>
      <div>{event.title}</div>
      <div>{event.person}</div>
    </div>
  );

  return (
    <div style={{ height: '500px' }} className='mt-6 bg-white rounded-md'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CustomEvent,
        }}
      />
    </div>
  );
};

export default MyCalendar;
