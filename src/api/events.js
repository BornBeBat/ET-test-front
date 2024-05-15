import { api } from './axios';

export const getEvents = async (params = {}) => {
  const result = await api.get('/events', { params });
  return result.data;
};
export const getEventById = async id => {
  const result = await api.get(`/events/${id}`);
  return result.data;
};
