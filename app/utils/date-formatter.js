const addOToDigit = value => (Number(value) < 10 ? `0${value}` : value);
export const formatDate = id => {
  const date = new Date(id);
  return `${addOToDigit(date.getDate())}/${addOToDigit(
    date.getMonth() + 1
  )}/${date.getFullYear()}`;
};

export const isToday = date => {
  const today = new Date();
  const currentDate = new Date(date);
  return (
    currentDate.getDate() === today.getDate() &&
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getFullYear() === today.getFullYear()
  );
};
