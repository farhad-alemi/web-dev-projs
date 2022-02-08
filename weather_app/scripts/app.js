const locationForm = document.querySelector('#location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const timeIcon = document.querySelector('img.time');
const weatherIcon = document.querySelector('.icon img');

locationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    /* Get City Name */
    const cityName = locationForm.city.value.trim();

    /* Update the UI with New City */
    updateCity(cityName).then(function (data) {
        updateUI(data);
    }).catch(function (err) {
        console.log('Error Caught:', err);
    });

    locationForm.reset();
});

async function updateCity(city) {
    return await getCityWeather(city);
}

function updateUI(data) {
    const aq = data.current.air_quality;
    //todo
    console.log(data)
    timeIcon.setAttribute('src', data.current.is_day ? 'img/day.svg' : 'img/night.svg');
    weatherIcon.setAttribute('src', data.current.condition.icon);

    details.innerHTML =
        `<h2 class="my-3">${data.location.name}, ${data.location.region}</h2>
    <div class="my-3 text-uppercase">${data.current.condition.text}</div>
    <div class="display-4 my-4">
        <span>${data.current.temp_c}</span>
        <span>&deg;C</span>
        <div id='feels-like' class='text-muted fst-italic'>Feels Like ${data.current.feelslike_c} &deg;C</div>
    
        <div id='aq'>
            <p>CO: ${aq.co}<p>
            <p>NO<sub>2</sub>: ${aq.no2}<p>
            <p>O<sub>3</sub>: ${aq.o3}</p>
            <p>SO<sub>2</sub>: ${aq.so2}</p>
            <p>PM<sub>2.5</sub>: ${aq.pm2_5}</p>
            <p>PM<sub>10</sub>: ${aq.pm10}</p>
            <p>US EPA Index: ${aq["us-epa-index"]}</p>
            <p>GB Defra Index: ${aq["gb-defra-index"]}</p>
        </div>

    </div>`;

    card.classList.remove('d-none');
}
