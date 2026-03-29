import { useState } from "react";
import {Package} from "lucide-react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import TabelaProdutos from "./tableProduct";


function Produtos(){

  const [sidebarOpen, setSidebarOpen] = useState(true);    

    return(
    <div>
      <Sidebar onToggle={(isOpen) => setSidebarOpen(isOpen)}/>
        <Topbar/>
      
      <div className="flex">
      {/* Menu lateral */}
      

      {/* Conteúdo principal */}
      <main className={`
          flex-1 transition-all duration-300 p-6
          ${sidebarOpen ? "ml-64" : "ml-0"}
        `}>
   
      <button className="flex items-center gap-2 justify-center mb-5">
          <Package className="text-green-500" />
          Produtos
      </button>
      <TabelaProdutos/>
        
        
      </main>
    </div>
    </div>
    );
};

export default Produtos;