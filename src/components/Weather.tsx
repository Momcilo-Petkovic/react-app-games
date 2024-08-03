import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherComponent = () => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "https://Weather-API.proxy-production.allthingsdev.co/weather/getForecast?latitude=43.33&longitude=21.9&unit=celsius", // Coordinates for Belgrade
          headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            origin: "https://edition.cnn.com",
            priority: "u=1, i",
            referer: "https://edition.cnn.com/",
            "sec-ch-ua":
              '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
            "x-apihub-key":
              "jV553UNBS3BkQNLVO86jajMqq0Rqp86TfkicNACf6Ie3w8a5F8",
            "x-apihub-host": "Weather-API.allthingsdev.co",
            "x-apihub-endpoint": "f5ba59cd-7870-46b6-8f91-3053fcd66349",
          },
        };

        const response = await axios.request(config);

        // Extract and log the temperature from currentConditions
        if (response.data.data && response.data.data.currentConditions) {
          const temperature = response.data.data.currentConditions.temperature; // Adjust property name if needed
          console.log("Temperature:", temperature);
          setTemperature(temperature); // Optionally update the state if you need to display it
        } else {
          console.log("currentConditions or temperature is not found.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="weather-component">
      <h1>Weather in Niš</h1>
      {temperature !== null ? (
        <p>Temperature: {temperature}°C</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
