
// import { useState } from "react";
// import WeatherApp from "./WeatherApp";
// import LoginForm from "./Register";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <>
//       {!isLoggedIn ? (
//         <LoginForm setIsLoggedIn={setIsLoggedIn} />
//       ) : (
//         <WeatherApp
//           onLogout={() => {
//             setIsLoggedIn(false);
//             setMessage(data.message);

//           }}
//         />
//       )}
//     </>
//   );
// }

// export default App;





import { useState } from "react";
import WeatherApp from "./WeatherApp";
import LoginForm from "./Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {!isLoggedIn ? (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <WeatherApp
          onLogout={() => {
            setIsLoggedIn(false);
          }}
        />
      )}
    </>
  );
}

export default App;
