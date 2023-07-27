import { redirect } from 'react-router-dom';

export default function getAuthToken() {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }
  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return 'Expired';
  }
  return token;
}

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expires_at');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();

  return duration;
}

export function tokenLoader() {
  const token = getAuthToken();

  if (token) {
    return token;
  } else {
    return null;
  }
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    window.alert('Please login to get access to the events');
    return redirect('/auth');
  }

  return null;
}
