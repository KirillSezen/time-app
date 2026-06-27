dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

MicroModal.init({
  disableScroll: true,
  openClass: 'is-open',
});

const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const cityLabel = document.getElementById('city-label');
const selectEl = document.getElementById('timezone-select');
const applyBtn = document.getElementById('apply-btn');

let currentTimezone = 'Europe/Moscow';

function updateTime() {
    const now = dayjs().tz(currentTimezone);
    
    const timeString = now.format('HH:mm:ss');
    const dateString = now.format('dddd, D MMMM, YYYY');
		const formattedCity = currentTimezone.replace('/', ' / ');

    timeEl.textContent = timeString;
    dateEl.textContent = dateString;
    cityLabel.textContent = formattedCity;
}

function changeTimezone (newTimezone) {
  currentTimezone = newTimezone;
  selectEl.value = newTimezone;

  updateTime();

  MicroModal.close('modal-1');
}

 applyBtn.addEventListener('click', function() {
  const selectedValue = selectEl.value;

   if (selectedValue) {
    changeTimezone(selectedValue);
  } else {
    alert('Пожалуйста, выберите часовой пояс');
  }
})

updateTime();

setInterval(updateTime, 1000);