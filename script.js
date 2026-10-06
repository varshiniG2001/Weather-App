async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = "cb3dd82c55ae2a446d580d30690421e2"; 
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  const res = await fetch(url);
  const data = await res.json();
  
  document.getElementById('result').innerHTML = `
    <h3>${data.name}</h3>
    <p>🌡️ Temperature: ${data.main.temp} °C</p>
    <p>☁️ Weather: ${data.weather[0].main}</p>
    <p>💧 Humidity: ${data.main.humidity}%</p>
  `;
}
