// Loader functions are utility functions for the routes when the data is in loading process. This function contains the logic for fetching and transformation of the data then simply returns which get automatically access to the that element where the loader prop is used. With the use of ueLoaderData hook, we can easily retrieve the data of loader's return data. This hook can also be used in child of that element.

import { defer, json } from 'react-router-dom';

// We can also include other logic like saving the data in local storage or in cookies etc. We just have to provide the logic and return the data which we want later in the component.

export async function loader() {
  // defer loading used to load some UI elements along with the loading the data and eventually loads the whole data.

  // return defer({
  //   events: loadEvents(),
  // });

  // we can load different loaders if we have different data loaders. with the respective key, we can assign different loaders and then can use them in the component.

  return defer({
    events: loadMultipleEvents(),
  });
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

// we can send error like:
//custom return object
// return { isError: true, message: 'Could not fetch event data'};

//or return a response object or Error object.

// throw new Response(
//   JSON.stringify({
//     message: 'Could not fetch events.',
//   }),
//   { status: 500 }
// );

// or return a json object
//  return json({ message: 'Could not fetch events.' }, { status: 500 });
