import { api } from './axios';

export const getEvents = async (params = {}) => {
  const result = await api.get('/events', { params });
  return result.data;
};
