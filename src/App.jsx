import { useState } from "react";

function App() {
  const [registro, imagem] = useState(" ");
  const [descricao, titulo] = useState(
    "Antônio Almeida da Silva nasceu em 10/05/2014, tem 12 anos, está na 5° Série e possui diagnóstico de Autismo e TDAH com grau de suporte 2. ",
  );

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-7">
        {/*topo*/}
        <div className="w-full max-w-sm flex items-center justify-center mb-20">
          <span className="text-blue-600 text-xl cursor-pointer "></span>
          <div className="text-2xl ">🧩</div>
        </div>
        {/* Texto */}
        <div className="text-center text-gray-700 mb-4">
          <p className="mb-3">
            Digite o número de registro do paciente fornecido pela família:{" "}
          </p>
        </div>
        {/* imput */}
        <div className=" w-full max-w-sm flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm mb-6">
          <input type="text" value={registro} onChange={""} />
        </div>
        {/* card */}

        <div className=" bg-white rounded-2xl shawdow-md p-24 w-100 items-center justify-center hover:scale-105 transition">
          <img src={imagem} alt={titulo} className="rounded-xl mb-3" />
          <h2 className="text-lg font-bold">{titulo}</h2>
          <p className="text-gray-600">{descricao}</p>
        </div>
        <button className="mt-3 bg-blue-500 text-white px-7 py-2 rounded-xl">
          Iniciar avaliacao
        </button>
        <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-xl">
          Adicionar Paciente
        </button>
      </div>
    </>
  );
}

export default App;
