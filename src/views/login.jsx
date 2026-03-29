import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "../utils/Background";
import { Logo } from "../utils/Logo";

function Login (){

 const navigate = useNavigate();

  function Validar(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const senha = e.target.senha.value;
    const tipo = e.target.tipo.value;

    if (email === "admin@admin" && senha === "0" && tipo === "ADMIN") {
      alert("Login válido");
      navigate("/loja");
    } else {
      alert("Login inválido");
    }
  }

  

    return(
      <>
      
       <div className="min-h-screen relative flex flex-col">
        <Background/>

      {/* Conteúdo */}
      <main className="relative flex flex-1 justify-center items-center p-4">
        
        <form
          onSubmit={Validar}
          className="
            backdrop-blur-md bg-white/10
            rounded-3xl shadow-2xl
            w-11/12 sm:w-3/4 md:w-2/3 lg:max-w-lg
            p-8 md:p-10
            border border-white/20
          "
        >

          

          <div className="space-y-4">
            <div>
              <Logo/>
            </div>
            
            
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-black mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                required
                className="
                  w-full px-4 py-2
                  border border-black
                  rounded-xl
                  bg-white/20
                  text-black placeholder-black
                  focus:ring-2 focus:ring-black
                  outline-none transition
                "
              />
            </div>

            {/* Senha */}
            <div>
              <label className="block text-sm font-semibold text-black mb-1">
                Senha
              </label>
              <input
                type="password"
                name="senha"
                placeholder="Digite sua senha"
                required
                className="
                  w-full px-4 py-2
                  border
                  rounded-xl
                  bg-white/20
                  text-black placeholder-black
                  focus:ring-2 focus:ring-black
                  outline-none transition
                "
              />
            </div>

            {/* Tipo de Conta */}
            <div>
              <label className="block text-sm font-semibold text-black mb-1">
                Tipo de Conta
              </label>
              <select
                name="tipo"
                required
                className="
                  w-full px-4 py-2
                  border border-black
                  rounded-xl
                  bg-white/20
                  text-black
                  focus:ring-2 focus:ring-black
                  outline-none transition
                "
              >
                <option value="" className="text-black">
                  Selecione...
                </option>
                <option value="ADMIN" className="text-black">
                  ADMIN
                </option>
                <option value="VENDAS" className="text-black">
                  VENDAS
                </option>
                <option value="GERENTE" className="text-black">
                  GERENTE
                </option>
              </select>
            </div>
          </div>

          {/* Botão */}
        <button
          type="submit"
          className="
            w-full py-2 mt-6
            rounded-xl
            bg-gradient-to-br from-[#ffb400] to-[#e69500]
            text-black
            font-semibold
            shadow-lg shadow-orange-400/40
            hover:from-[#e6a200] hover:to-[#cc8400]
            hover:text-black
            active:scale-[0.98]
            transition-all duration-200
          "
        >
          Entrar
        </button>
          <p className="block text-sm text-center text-black mt-2">Versão 1.0.0</p>

        </form>
      </main>
    </div>
      </>
     
    );    
};

export default Login;