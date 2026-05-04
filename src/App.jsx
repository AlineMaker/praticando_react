import { useState } from "react";

function App() {
  const [registro, setMessage] = useState(
    "Digite o numero de registro do paciente fornecido pela família: ",
  );

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
        {/*topo*/}
        <div className="w-full max-w-sm flex items-center justify-center mb-6">
          <span className="text-blue-600 text-xl cursor-pointer"></span>
          <div className="text-2xl">🧩</div>
        </div>
        {/* Texto */}
        <div className="text-center text-gray-700 mb-4">
          <p>
            Digite o número de registro do paciente fornecido pela família:{" "}
          </p>
          {/* imput */}
          <div className=" w-full max-w-sm flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm mb-6">
            <input type="text" value={registro} onChange={""} />
          </div>
        </div>

        <button
          onClick={() => {
            setMessage("olá, fui clicado");
          }}
        >
          Mudar Texto
        </button>
      </div>
    </>
  );
}

export default App;
