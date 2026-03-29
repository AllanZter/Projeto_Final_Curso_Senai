import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { User } from "lucide-react";
import { TabelaClientes } from "./TableClientes";

function Clientes(){

  const [sidebarOpen, setSidebarOpen] = useState(true);

  


    return(
   <div>
      <Sidebar onToggle={(isOpen) => setSidebarOpen(isOpen)}/>
        <Topbar/>
      
      <div className=" flex">
      {/* Menu lateral */}
      

      {/* Conteúdo principal */}
      <main className={`
          flex-1 transition-all duration-300 p-6
          ${sidebarOpen ? "ml-64" : "ml-0"}
        `}>
        
        <button className="flex items-center gap-2 justify-center mb-5">
          <User className="text-green-500" />
          Lista de Clientes
        </button>
   
        <TabelaClientes/>
        
      </main>
    </div>
    </div>
    );
};

export default Clientes;