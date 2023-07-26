import { defer, json } from 'react-router-dom';

// * we get route params in loader params, like an object contains a request prop and params
export async function loader({ request, params }) {
  const id = params.eventId;

  return defer({
    event: await loadSingleEvent(id),
    events: loadMultipleEvents(),
  });
}

async function loadSingleEvent(id) {
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json({ message: 'Could not find selected event.' }, { status: 500 });
  } else {
    const resData = await response.json();

    return resData.event;
  }
}

async function loadMultipleEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return json({ message: 'Could not fetch events.' }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
