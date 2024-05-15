import { api } from './axios';

export const registerParticipant = async data => {
  const result = await api.post('/participant', data);
  return result.data;
};
