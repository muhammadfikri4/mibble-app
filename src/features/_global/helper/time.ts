export function formatTime(startDate: Date): string {
  const now = new Date();
  const start = new Date(startDate);
  const totalSeconds = Math.floor((now.getTime() - start.getTime()) / 1000);

  const secondsPerMinute = 60;
  const secondsPerHour = 3600;
  const secondsPerDay = 86400; // 24 * 3600
  const secondsPerMonth = 2592000; // 30 * 24 * 3600
  const secondsPerYear = 31536000; // 365 * 24 * 3600

  const years: number = Math.floor(totalSeconds / secondsPerYear);
  const months: number = Math.floor((totalSeconds % secondsPerYear) / secondsPerMonth);
  const days: number = Math.floor((totalSeconds % secondsPerMonth) / secondsPerDay);
  const hours: number = Math.floor((totalSeconds % secondsPerDay) / secondsPerHour);
  const minutes: number = Math.floor((totalSeconds % secondsPerHour) / secondsPerMinute);
  const seconds: number = totalSeconds % secondsPerMinute;

  const padZero = (num: number): string => (num < 10 ? `0${num}` : `${num}`);
  let formattedTime = '';

  if (years > 0) {
    formattedTime += `${years} ${years === 1 ? 'Year ago' : 'Years ago'}`;
  } else if (months > 0) {
    formattedTime += `${months} ${months === 1 ? 'Month ago' : 'Months ago'}`;
  } else if (days > 0) {
    formattedTime += `${days} ${days === 1 ? 'Day ago' : 'Days ago'}`;
    // formattedTime += ` ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  } else {
    formattedTime += `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }

  return formattedTime;
}
