import { DateTime } from 'luxon';

// calculateTimeLeft function
// formatDateTaskDetail function

export const calculateTimeLeft = (expires:string) => {
   const difference = +new Date(expires) - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export const formatDateTaskDetail = (timestamp: number | null | undefined): string => {
  return timestamp
    ? DateTime.fromSeconds(timestamp).toFormat("LLL. d, yyyy (h:mm a 'CST')")
    : 'n/a';
};