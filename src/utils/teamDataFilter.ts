const isOngoingDate = (date?: string) => {
  if (!date) return;
  const today = new Date();
  const endDate = new Date(date);
  return endDate >= today;
};

export default isOngoingDate;
