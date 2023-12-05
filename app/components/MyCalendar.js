import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useAppState } from '../global-state/AppStateContext';

const localizer = momentLocalizer(moment);

const eventStyleGetter = () => {

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
  const { state } = useAppState();
  const { appointments: events } = state;

  const CustomEvent = ({ event }) => (
    <div className='text-sm'>
      <div>{event.service}</div>
      <div>{event.name} - {event.duration}</div>
      <div></div>
    </div>
  );

  return (
    <div style={{ height: '500px' }} className='mt-6 bg-white rounded-md'>
      {events?.length && <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CustomEvent,
        }}
      />}
    </div>
  );
};

export default MyCalendar;
