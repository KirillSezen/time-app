dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function updateTime() {
    const now = dayjs();
    
    const timeString = now.format('HH:mm:ss');
    const dateString = now.format('dddd, D MMMM, YYYY');
    const city = String(dayjs.tz.guess());
		const formattedCity = city.slice(0, city.indexOf('/')) + ' / ' + city.slice(city.indexOf('/') + 1);

    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
		document.getElementById('city-label').textContent = formattedCity;
}

updateTime();

setInterval(updateTime, 1000);

