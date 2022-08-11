const months = document.getElementById('months')
const days = document.getElementById('days')
const hours= document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const currentYear = new Date().getFullYear();
const newYearTime = new Date('november 2 2022 19:00:00');

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  const monthsDiff = Math.floor(diff / 1000 / 60 / 60 / 24 / 30);
  const daysDiff = Math.floor(diff / 1000 / 60 / 60 / 24) % 30;
  const hoursDiff = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutesDiff = Math.floor(diff / 1000 / 60) % 60;
  const secondsDiff = Math.floor(diff / 1000) % 60;

  months.innerHTML = monthsDiff;
  days.innerHTML = daysDiff < 10 ? '0' + daysDiff : daysDiff;
  hours.innerHTML = hoursDiff < 10 ? '0' + hoursDiff : hoursDiff
  minutes.innerHTML = minutesDiff < 10 ? '0' + minutesDiff : minutesDiff;
  seconds.innerHTML = secondsDiff < 10 ? '0' + secondsDiff : secondsDiff;
}

setInterval(updateCountdown, 1000);

