import { redirect } from 'react-router-dom';

export async function action({ request, params }) {
  const eventId = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(
      { message: 'Could not delete selected event' },
      { status: 500 }
    );
  }

  return redirect('/events');
}
