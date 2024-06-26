function getTemperature() {
    return parseFloat(document.getElementById('temperature').textContent);
  }
  
  function getWindSpeed() {
    return parseFloat(document.getElementById('windSpeed').textContent);
  }

function calculateWindChill(temperature, windSpeed) {
    const windchill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return Math.round(windchill * 10) / 10;
} 

const temperature = getTemperature();
const windSpeed = getWindSpeed();

if (temperature <= 10 && windSpeed > 4.8) {
    const windchillValue = calculateWindChill(temperature, windSpeed);
    document.querySelector('#windChill').innerHTML = windchillValue;
} else {
        document.querySelector('#windChill').innerHTML = 'N/A';
}
  
window.onload = calculateWindChill;
  
  