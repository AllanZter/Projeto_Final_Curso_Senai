import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import TabelaUsuarios from "./tableUsers";

const NovoUsuario = () => {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    tipo: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function cadastrarUsuario(dados) {
    try {
      const response = await fetch("http://localhost:3333/api/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: dados.nome,
          email: dados.email,
          senha: dados.senha,
          id: dados.tipo,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao cadastrar");
      }

      alert("Usuário cadastrado com sucesso!");

      // limpa formulário
      setForm({
        nome: "",
        email: "",
        senha: "",
        tipo: "",
      });

    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    cadastrarUsuario(form);
  }

  return (
    <>
      <Sidebar onToggle={(isOpen) => setSidebarOpen(isOpen)} />
      <Topbar />

      <main
        className={`
          flex-1 transition-all duration-300 p-6
          ${sidebarOpen ? "ml-64" : "ml-0"}
        `}
      >
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 mb-10">

  {/* Header */}
  <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50 rounded-t-2xl">
    <h2 className="text-lg font-semibold text-gray-800">
      Cadastro de Usuário
    </h2>
    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
      Novo
    </span>
  </div>

  <form onSubmit={handleSubmit} className="p-6 space-y-6">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      {/* Nome */}
      <div className="flex flex-col">
        <label className="text-xs font-semibold text-gray-500 uppercase">
          Nome
        </label>
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="Digite o nome completo"
          required
          className="
            mt-1 px-4 py-2 rounded-lg border border-gray-300
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            outline-none text-sm transition
          "
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label className="text-xs font-semibold text-gray-500 uppercase">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="usuario@email.com"
          required
          className="
            mt-1 px-4 py-2 rounded-lg border border-gray-300
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            outline-none text-sm transition
          "
        />
      </div>

      {/* Senha */}
      <div className="flex flex-col">
        <label className="text-xs font-semibold text-gray-500 uppercase">
          Senha
        </label>
        <input
          type="password"
          name="senha"
          value={form.senha}
          onChange={handleChange}
          placeholder="••••••••"
          required
          className="
            mt-1 px-4 py-2 rounded-lg border border-gray-300
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            outline-none text-sm transition
          "
        />
      </div>

      {/* Tipo */}
      <div className="flex flex-col">
        <label className="text-xs font-semibold text-gray-500 uppercase">
          Tipo de Usuário
        </label>
        <select
          name="tipo"
          value={form.tipo}
          onChange={handleChange}
          required
          className="
            mt-1 px-4 py-2 rounded-lg border border-gray-300
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            outline-none text-sm transition bg-white
          "
        >
          <option value="">Selecione</option>
          <option value="ADMIN">Administrador</option>
          <option value="VENDAS">Vendas</option>
          <option value="GERENTE">Gerente</option>
          <option value="CAIXA">Caixa</option>
          <option value="ESTOQUE">Estoque</option>
        </select>
      </div>

    </div>

    {/* Divider */}
    <div className="border-t pt-4 flex justify-between items-center">

      <p className="text-xs text-gray-400">
        Preencha todos os campos obrigatórios
      </p>

      <div className="flex gap-3">
        <button
          type="button"
          className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded-md hover:bg-red-200"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200"
        >
          Salvar Usuário
        </button>
      </div>

    </div>

  </form>
</div>

        <TabelaUsuarios />
      </main>
    </>
  );
};

export default NovoUsuario;