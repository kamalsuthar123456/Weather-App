// export default function Layout({ children }) {
//   return (
//     <div className="relative min-h-screen w-full bg-cover bg-center bg-fixed overflow-hidden"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1600&q=80')",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
//       <div className="absolute inset-0 bg-stars opacity-40 animate-twinkle pointer-events-none"></div>

//       {/* HEADER */}
//       <header className="relative z-20 w-full px-8 py-4 flex justify-between items-center 
//         bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg">
        
//         <h1 className="text-white font-bold text-2xl tracking-wide drop-shadow-lg select-none">
//           WeatherSphere ☁️
//         </h1>

//         <nav className="text-white/80 text-sm flex gap-6">
//           <button className="hover:text-white transition">About</button>
//           <button className="hover:text-white transition">Contact</button>
//         </nav>
//       </header>

//       {/* PAGE CONTENT */}
//       <main className="relative z-20 flex flex-col items-center justify-center py-10 px-4">
//         {children}
//       </main>

//       {/* FOOTER */}
//       <footer className="relative z-20 w-full text-center text-white/60 text-xs py-5 backdrop-blur-md">
//         Made with ❤️ by <span className="text-white font-semibold">Kamal</span> • WeatherSphere v1.0
//       </footer>
//     </div>
//   );
// }
