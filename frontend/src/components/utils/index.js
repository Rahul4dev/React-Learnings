import { loader as eventsLoader } from './Loaders/EventsLoader';
import { loader as eventDetailLoader } from './Loaders/EventDetailLoader';

import { action as submitEventAction } from './Actions/submitEventAction';
import { action as deleteEventAction } from './Actions/deleteEventAction';
import { action as newsletterAction } from './Actions/newsletterAction';

export { eventsLoader, eventDetailLoader };

export { submitEventAction, deleteEventAction, newsletterAction };
