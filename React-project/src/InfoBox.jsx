export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?auto=format&fit=crop&w=800&q=60";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?auto=format&fit=crop&w=800&q=60";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1672442665593-d69f0314adb1?auto=format&fit=crop&w=800&q=60";

  const weatherImage =
    info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL;

  const weatherIcon =
    info.humidity > 80 ? "⛈️" : info.temp > 15 ? "☀️" : "❄️";

  return (
    <div className="flex justify-center w-full px-4 mt-6">
      <div className="w-full max-w-sm bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
        {/* Weather Image */}
        <div
          className="h-44 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${weatherImage})` }}
        ></div>

        {/* Content */}
        <div className="p-6 text-gray-800 space-y-3 text-center">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            {info.city} <span className="text-3xl">{weatherIcon}</span>
          </h2>

          <div className="text-gray-700 text-sm leading-relaxed space-y-1">
            <p>Temperature: <span className="font-semibold">{info.temp}°C</span></p>
            <p>Humidity: <span className="font-semibold">{info.humidity}%</span></p>
            <p>Min Temp: <span className="font-semibold">{info.tempMin}°C</span></p>
            <p>Max Temp: <span className="font-semibold">{info.tempMax}°C</span></p>
            <p>
              Weather: <span className="font-semibold capitalize">{info.weather}</span> <br />
              Feels like <span className="font-semibold">{info.feelsLike}°C</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
