import { api } from './axios';

export const getEvents = async (params = {}) => {
  console.log('get');
  const result = await api.get('/events', { params });
  return result.data;
};
