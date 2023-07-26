import React from 'react';
import { useRouteError } from 'react-router-dom';

import PageContent from '../Shared/PageContent';
import MainNavigation from './MainNavigation';

const Error = () => {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong! Please try again';

  if (error.status === 404) {
    title = 'Not Found!';
    message = 'Could not find the page content.';
  }
  console.log(error.data);
  if (error.status === 500) {
    // message = JSON.parse(error.data).message;
    message = error.data.message;
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default Error;
