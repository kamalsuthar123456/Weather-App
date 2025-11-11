import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "24a917f88a0e15d5413ba096e1587161";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) throw new Error("City not found");

      updateInfo({
        city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      });

      setCity("");
      setError(false);
    } catch {
      setError(true);
    }
  };

  return (
    <div className="w-full max-w-md mb-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
        <input
          type="text"
          placeholder="Enter city name"
          className="
            w-full px-4 py-3 rounded-xl text-gray-900 bg-white/90 
            border border-gray-300 shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500
          "
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <button
          type="submit"
          className="
            bg-blue-600 hover:bg-blue-700 text-white font-semibold 
            px-5 py-3 rounded-xl shadow-md w-full transition-transform hover:-translate-y-1
          "
        >
          Search
        </button>

        {error && <p className="text-red-300 text-sm animate-shake">No such place exists!</p>}
      </form>
    </div>
  );
}
