import React, { Suspense } from 'react';
import { Await, useRouteLoaderData } from 'react-router-dom';
import { EventItem, EventsList } from '../Event';

const EventDetails = () => {
  // const data = useRouteLoaderData('event-detail');  for single event.
  const { event, events } = useRouteLoaderData('event-detail');
  return (
    <>
      <Suspense fallback={<p style={{ alignItems: 'center' }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ alignItems: 'center' }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetails;
