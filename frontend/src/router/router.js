import { createBrowserRouter } from 'react-router-dom';

import {
  HomePage,
  EditEvent,
  EventDetails,
  NewEvent,
  Events,
  NewsletterPage,
} from '../components/Pages';

import { eventsLoader, eventDetailLoader } from '../components/utils';
import {
  submitEventAction,
  deleteEventAction,
  newsletterAction,
} from '../components/utils';

import { Root, Error, EventRoot } from '../components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetails />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEvent />,
                action: submitEventAction,
              },
            ],
          },
          { path: 'new', element: <NewEvent />, action: submitEventAction },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);
