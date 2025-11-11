import { useState, useMemo } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp({ user, onLogout }) {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Jaipur",
    feelsLike: 19.65,
    humidity: 35,
    temp: 20.62,
    tempMax: 20.62,
    tempMin: 20.62,
    weather: "haze",
  });

  const updateInfo = (newInfo) => setWeatherInfo(newInfo);

  // ✅ Dynamic Background Selection
  const backgroundImage = useMemo(() => {
    if (weatherInfo.humidity > 80)
      return "url('https://images.unsplash.com/photo-1551973694-67c6b33f676a?auto=format&fit=crop&w=1600&q=80')";
    if (weatherInfo.temp > 25)
      return "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')";
    if (weatherInfo.temp < 10)
      return "url('https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=1600&q=80')";
    return "url('https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1600&q=80')";
  }, [weatherInfo]);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center relative overflow-hidden 
      bg-cover bg-center bg-fixed transition-all duration-700"
      style={{ backgroundImage }}
    >
      {/* ✅ Cinematic Atmosphere Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent backdrop-blur-sm"></div>

      {/* ✅ Ambient Stars & Depth Layer */}
      <div className="absolute inset-0 bg-stars opacity-40 animate-twinkle pointer-events-none"></div>

      {/* ✅ Glass Header */}
      <header
        className="
        relative z-20 w-full max-w-5xl mx-auto px-6 py-4 mt-6
        flex justify-between items-center
        bg-white/15 backdrop-blur-xl border border-white/30 
        rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.45)]
        hover:bg-white/20 transition-all duration-500"
      >
        <h2 className="text-white text-xl md:text-3xl font-semibold drop-shadow-xl">
          Hello, <span className="font-bold">{user?.name || "User"} 👋</span>
        </h2>

        <button
          onClick={onLogout}
          className="bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
        >
          Logout
        </button>
      </header>

      {/* Subtitle */}
      <h3 className="relative z-20 text-white text-lg md:text-2xl mt-6 font-medium drop-shadow-lg animate-fade-in">
        ☁️ Real-Time Weather Dashboard
      </h3>

      {/* ✅ Center Content Smooth Appearance */}
      <div className="relative z-20 w-full flex flex-col items-center gap-6 mt-6 animate-slide-up">
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>

      {/* Footer Branding */}
      <footer className="absolute bottom-4 z-20 text-white/60 text-xs md:text-sm tracking-wide">
        Made with ❤️ by Kamal using React + Tailwind
      </footer>
    </div>
  );
}


