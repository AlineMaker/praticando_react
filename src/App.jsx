import { useState } from "react";
import logo from './assets/img/logo.png'
import autista from './assets/img/autista.png'
import lupa from './assets/img/icons8-search-50.png'
function App() {

  const [registro, setRegistro] = useState("");

  const [descricao, setDescricao] = useState(
    "João Pedro Silva Pereira nasceu em 10/05/2014, tem 12 anos, está na 5° Série e possui diagnóstico de Autismo e TDAH com grau de suporte 2."
  );

  const [titulo, setTitulo] = useState("João Pedro Silva Pereira");

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-7">

      {/* topo */}
      <div className="w-full max-w-sm flex items-center justify-center ">
         <img src={logo} alt="logo" className="rounded-xl mb-3 w-15" />
      </div>

      {/* Texto */}
      <div className="text-center text-gray-700 mb-1">
        <p className="mb-3">
          Digite o número de registro do paciente:
        </p>
      </div>

      {/* input */}
      <div className="w-85 flex items-center border border-[#3277CF] rounded-lg  bg-white shadow-sm mb-10">
        <input 
          type="text" 
          value={registro} 
          onChange={(e) => setRegistro(e.target.value)} 
        />
        <img src={lupa} alt="lupa" className=" absolute right-10 w-5" />
      </div>

      {/* card */}
<div className="bg-gray-100 rounded-2xl shadow-md hover:shadow-2xl -translate-y-3 transition-all duration-300 p-10 w-85 flex flex-col items-center text-center gap-4 mb-3 border border-gray-100">

  <img 
    src={autista} 
    alt="autista" 
    className="w-16 h-16 object-cover rounded-xl"
  />

  <h2 className="text-lg text-[#3277CF] font-bold ">{titulo}</h2>

  <p className="text-[#3277CF] ">
    {descricao}
  </p>

</div>

      <button className=" bg-blue-500 text-white px-14 py-1 rounded-md ">
        Iniciar avaliação
      </button>

      <button className="mt-2 bg-blue-500 text-white px-12 py-1 rounded-md">
        Adicionar Paciente
      </button>

    </div>
  );
}

export default App;