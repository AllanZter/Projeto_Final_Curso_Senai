import { useState } from "react";
import { Unlock, Lock, ArrowDownCircle, ArrowUpCircle, Wallet, Receipt } from "lucide-react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

export default function Caixa() {

    const [sidebarOpen, setSidebarOpen] = useState(true);


  return (
    <>
    <Sidebar onToggle={(isOpen) => setSidebarOpen(isOpen)}/>
        <Topbar/>
    <main className={`
          flex-1 transition-all duration-300 p-6
          ${sidebarOpen ? "ml-64" : "ml-0"}
        `}>
     <div className="p-6 space-y-6">
        
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Caixa</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Wallet size={18} />
          Caixa Aberto
        </div>
      </div>

      {/* Resumo do Caixa */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl shadow p-4">
          <p className="text-sm text-gray-500">Saldo Inicial</p>
          <p className="text-xl font-bold">R$ 200,00</p>
        </div>
        <div className="rounded-2xl shadow p-4">
          <p className="text-sm text-gray-500">Entradas</p>
          <p className="text-xl font-bold text-green-600">R$ 1.250,00</p>
        </div>
        <div className="rounded-2xl shadow p-4">
          <p className="text-sm text-gray-500">Saídas</p>
          <p className="text-xl font-bold text-red-600">R$ 300,00</p>
        </div>
      </div>

      {/* Ações do Caixa */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="flex items-center gap-2 justify-center rounded-2xl shadow p-4 hover:bg-gray-50">
          <Unlock className="text-green-600" />
          Abrir Caixa
        </button>

        <button className="flex items-center gap-2 justify-center rounded-2xl shadow p-4 hover:bg-gray-50">
          <Lock className="text-red-600" />
          Fechar Caixa
        </button>

        <button className="flex items-center gap-2 justify-center rounded-2xl shadow p-4 hover:bg-gray-50">
          <ArrowDownCircle className="text-red-500" />
          Sangria
        </button>

        <button className="flex items-center gap-2 justify-center rounded-2xl shadow p-4 hover:bg-gray-50">
          <ArrowUpCircle className="text-green-500" />
          Suprimento
        </button>
      </div>

      {/* Últimas Movimentações */}
      <div className="rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Últimas Movimentações</h2>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between">
            <span className="flex items-center gap-2">
              <Receipt size={16} /> Venda #1023
            </span>
            <span className="text-green-600">+ R$ 150,00</span>
          </li>
          <li className="flex justify-between">
            <span className="flex items-center gap-2">
              <ArrowDownCircle size={16} /> Sangria
            </span>
            <span className="text-red-600">- R$ 100,00</span>
          </li>
        </ul>
      </div>
    </div>   
    </main>
    </>
    
  );
}
