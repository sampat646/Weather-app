const city_name = document.getElementById("city-name");
const search_btn = document.getElementById("Search-btn");
const cityN = document.getElementById("city");
const temp = document.getElementById("temp");
const time = document.getElementById("local");
const icon = document.getElementById("icon");
const country = document.getElementById("country");
const Region = document.getElementById("Region");
const locationn = document.getElementById("get-location");

async function getdata(lat, long) {
    const Promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=90e6c4f73eb04c36adb135255240110&q=${lat},${long}&aqi=yes`
    );
    return await Promise.json();
}

function updateWeatherUI(result) {
    cityN.innerText = `${result.location.name}`;
    time.innerText = `${result.location.localtime}`;
    temp.innerText = `${result.current.temp_c}°C`;
    icon.src = `https:${result.current.condition.icon}`;
    icon.alt = result.current.condition.text;
    Region.innerText = `${result.location.region}`;
    country.innerText = `${result.location.country}`;
}

search_btn.addEventListener("click", async () => {
    console.log(city_name.value);
    let value = city_name.value;
    const result = await getdata(value);
    console.log(result);
    updateWeatherUI(result);
});

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = String(hours).padStart(2, '0');

    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds} <span class="ampm">${ampm}</span>`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display time immediately

async function gotLocation(position) {
    try {
        const result = await getdata(position.coords.latitude, position.coords.longitude);
        console.log("Location data:", result);
        updateWeatherUI(result);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function failedTarget(error) {
    console.error("Error getting location:", error.message);
}

locationn.addEventListener("click", () => {
    console.log("Getting location...");
    navigator.geolocation.getCurrentPosition(gotLocation, failedTarget);
});