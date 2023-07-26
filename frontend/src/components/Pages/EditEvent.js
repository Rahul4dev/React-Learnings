import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';

import { EventForm } from '../Event';

const EditEvent = () => {
  const data = useRouteLoaderData('event-detail');
  return <EventForm event={data.event} method={'PATCH'} />;
};

export default EditEvent;
