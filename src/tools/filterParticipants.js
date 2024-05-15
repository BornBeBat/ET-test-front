export const filterParticipants = (arr, filter) => {
  return arr.filter(
    el =>
      el.name.toLowerCase().includes(filter.toLowerCase()) ||
      el.email.toLowerCase().includes(filter.toLowerCase())
  );
};
