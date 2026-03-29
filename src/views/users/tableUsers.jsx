import {useEffect, useState } from "react";
import Action from "../../components/action";

function TabelaUsuarios(){

    const [usuarios, setUsuarios] = useState([
      {id:1,nome:'admin',email:'admin@admin',senha:'0',tipo:'ADMIN'},
      {id:1,nome:'vendas',email:'vendas@vendas',senha:'0',tipo:'VENDAS'},
      {id:1,nome:'caixa',email:'caixa@caixa',senha:'0',tipo:'CAIXA'},
      {id:1,nome:'estoque',email:'estoque@estoque',senha:'0',tipo:'ESTOQUE'},
      {id:1,nome:'gerente',email:'gerente@gerente',senha:'0',tipo:'GERENTE'},
    ]);

  


  


    return(
        <>
       <div className="overflow-x-auto bg-white rounded-2xl shadow-md border border-gray-200">
  <table className="min-w-full">
    
    <thead className="bg-gray-100">
      <tr className="text-gray-600 text-xs uppercase tracking-wider">
        <th className="px-6 py-4 text-left">ID</th>
        <th className="px-6 py-4 text-left">Nome</th>
        <th className="px-6 py-4 text-left">Email</th>
        <th className="px-6 py-4 text-left">Tipo</th>
        <th className="px-6 py-4 text-center">Ações</th>
      </tr>
    </thead>

    <tbody className="text-gray-700 text-sm">
      {usuarios.map((item, index) => (
        <tr
          key={item.id}
          className="border-t hover:bg-gray-50 transition duration-150"
        >
          <td className="px-6 py-4 font-medium">{item.id}</td>

          <td className="px-6 py-4">{item.nome}</td>

          <td className="px-6 py-4 text-gray-500">
            {item.email}
          </td>

          <td className="px-6 py-4">
            <span className="text-gray-700 text-sm ">
              {item.tipo}
            </span>
          </td>

          <td className="px-6 py-4 text-center">
            <div className="flex justify-center gap-2">
              
              <Action/>

            </div>
          </td>
        </tr>
      ))}

      {usuarios.length === 0 && (
        <tr>
          <td colSpan="5" className="text-center py-10 text-gray-400">
            Nenhum usuário encontrado
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>
        </>
    );
};

export default TabelaUsuarios;