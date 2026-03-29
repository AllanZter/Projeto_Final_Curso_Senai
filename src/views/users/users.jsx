import {useEffect, useState } from "react";
import {User} from "lucide-react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import TabelaUsuarios from "./tableUsers";

function Users(){

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
          Lista de Usuários
        </button>
   
        <TabelaUsuarios/>
        
        
      </main>
    </div>
    </div>
    );
};

export default Users;