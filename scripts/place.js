document.addEventListener("DOMContentLoaded", function () {
  // Set current year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Set last modified date
  document.getElementById("lastModified").textContent = document.lastModified;

  // Wind chill calculation
  function calculateWindChill(temp, windSpeed) {
      if (temp <= 10 && windSpeed > 4.8) {
          return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + "°C";
      } else {
          return "N/A";
      }
  }

  // Get weather data
  const temp = 10; // Static value
  const windSpeed = 5; // Static value

  document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);
});
