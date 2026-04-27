import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Olá Mundo");

  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage = "olá, fui clicado";
        }}
      >
        Mudar Texto
      </button>
    </div>
  );
}

export default App;
