import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginForm({ setIsLoggedIn }) {
  const [isSignup, setIsSignup] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { name: "", email: "", password: "" },
  });

  async function onSubmit(data) {
    setMessage("");
    const endpoint = isSignup ? "signup" : "login";
    const payload = isSignup ? data : { email: data.email, password: data.password };

    try {
      const res = await fetch(`https://weather-app-ex5x.onrender.com/api/auth/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let json = await res.json().catch(() => ({}));
      setMessage(json?.message || (res.ok ? "Success ✅" : "Error ❌"));

      if (res.ok && !isSignup) {
        reset();
        setIsLoggedIn(true);
      }
    } catch {
      setMessage("Connection error. Try again ❌");
    }
  }

  return (
    <div
      className="
        min-h-screen flex items-center justify-center relative overflow-hidden 
        bg-cover bg-center bg-fixed
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1600&q=80')",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-stars opacity-40 animate-twinkle pointer-events-none"></div>

      {/* Glass Card */}
      <div className="relative z-20 w-full max-w-md bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-10 animate-slide-up">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-7xl drop-shadow-lg">{isSignup ? "🌟" : "☀️"}</div>
          <h2 className="text-white text-3xl font-bold mt-3">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-white/70">
            {isSignup ? "Join the weather experience" : "Log in to continue"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {isSignup && (
            <div>
              <label className="text-white text-sm">Full Name</label>
              <input
                {...register("name", { required: "Name required" })}
                placeholder="Enter full name"
                className="w-full px-4 py-3 bg-white/30 border border-white/40 rounded-xl text-white placeholder-white/60 focus:ring-white"
              />
              {errors.name && <p className="text-red-300 text-xs">{errors.name.message}</p>}
            </div>
          )}

          <div>
            <label className="text-white text-sm">Email</label>
            <input
              {...register("email", { required: "Email required" })}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 bg-black/30 border border-white/40 rounded-xl text-white placeholder-white/60 focus:ring-white"
            />
            {errors.email && <p className="text-red-300 text-xs">{errors.email.message}</p>}
          </div>

          <div>
            <label className="text-white text-sm">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password required" })}
                placeholder="Enter password"
                className="w-full px-4 py-3 pr-12 bg-black/30 border border-white/40 rounded-xl text-white placeholder-white/60 focus:ring-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-lg"
              >
                {showPassword ?  "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {errors.password && <p className="text-red-300 text-xs">{errors.password.message}</p>}
          </div>

          <button
            disabled={isSubmitting}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition"
          >
            {isSignup ? "Create Account" : "Login"}
          </button>
        </form>

        {message && <p className="text-center text-white/80 mt-3">{message}</p>}

        <p className="text-center text-white/80 mt-6">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => {
              setIsSignup(!isSignup);
              setMessage("");
              reset();
            }}
            className="text-blue-300 underline"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}







