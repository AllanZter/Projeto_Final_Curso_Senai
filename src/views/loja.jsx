import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import {Background} from "../utils/Background";

function Loja(){

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
   
        
        
        
      </main>
    </div>
    </div>
    );
};

export default Loja;