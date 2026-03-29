import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { Link } from "../utils/link";


const Sidebar = ({ onToggle }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true); // controla se a sidebar está aberta
  const [openSub, setOpenSub] = useState(null);

const toggleSub = (index) => {
  setOpenSub(openSub === index ? null : index);
};



const links = Link(navigate);
 


 


    const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onToggle) onToggle(newState); // envia para o layout
  };

  const handleLogout = () => {
    alert("Sessão encerrada.");
    localStorage.clear();
    navigate("/");
    
  };

  return (
    <>
      {/* Botão de toggle */}
     <button
  onClick={handleToggle}
  className="
    absolute top-4 left-4 z-50
    text-gray-700
    hover:text-black
    hover:scale-110
    active:scale-95
    transition
    cursor-pointer
  "
>
  ☰
</button>

      {/* Sidebar */}
      <aside
        className={`
          w-64 bg-[#F3F4F6] h-screen shadow-lg fixed top-0 left-0 flex flex-col
          transform transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        

       <ul className="flex-1 p-4 pt-20 space-y-2">
  {links.map((link, index) => {
    const Icon = LucideIcons[link.icon];

    return (
      <li key={index}>
        {/* ITEM PRINCIPAL */}
        <button
          onClick={() => {
            if (link.sub) {
              toggleSub(index);
            } else if (link.onClick) {
              link.onClick();
            }
          }}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-black hover:text-white hover:bg-[#702D99] hover:mt-4 transition-all duration-200 font-medium"
        >
          <div className="flex items-center gap-3">
            {Icon && <Icon size={20} />}
            <span>{link.label}</span>
          </div>

          {link.sub && (
            <span className="text-sm">
              {openSub === index ? "▲" : "▼"}
            </span>
          )}
        </button>

        {/* SUBMENU */}
        {link.sub && openSub === index && (
          <ul className="ml-8 mt-1 space-y-1">
            {link.sub.map((sub, subIndex) => {
              const SubIcon = LucideIcons[sub.icon];
              return (
                <li key={subIndex}>
                  <button
                    onClick={sub.onClick}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-black hover:text-white hover:bg-[#ffb400] transition"
                  >
                    {SubIcon && <SubIcon size={16} />}
                    <span className="text-sm">{sub.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  })}
</ul>


        <div className="p-4 border-t text-center">
          <button className="w-full bg-gradient-to-br from-[#ffb400] to-[#e69500] text-white p-2 rounded hover:from-[#e6a200] hover:to-[#cc8400] transition"
          onClick={handleLogout}
          >
            Sair
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
