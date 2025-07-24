// utils/formatDateTime.ts

export const formatDateTime = (
  dateString,
  locale = 'en-US',
  options
) => {
  const date = new Date(dateString);

  const defaultOptions = {
    year: 'numeric',
    month: 'long', // or 'short'
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true, // show AM/PM
  };

  return date.toLocaleString(locale, options || defaultOptions);
};
