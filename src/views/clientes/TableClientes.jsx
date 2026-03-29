import { useState } from "react";
import Action from "../../components/action";

export function TabelaClientes(){

     const [sidebarOpen, setSidebarOpen] = useState(true);
    
      const clientes = [
        { id: 1, nome: "João", email: "joao@email.com", cpf: "0000010202" },
        { id: 2, nome: "Maria", email: "maria@email.com", cpf: "44452232311" },
         { id: 3, nome: "João", email: "joao@email.com", cpf: "0000010202" },
        { id: 4, nome: "Maria", email: "maria@email.com", cpf: "44452232311" },
         { id: 5, nome: "João", email: "joao@email.com", cpf: "0000010202" },
        { id: 6, nome: "Maria", email: "maria@email.com", cpf: "44452232311" },
         { id: 7, nome: "João", email: "joao@email.com", cpf: "0000010202" },
        { id: 8, nome: "Maria", email: "maria@email.com", cpf: "44452232311" },
         { id: 9, nome: "João", email: "joao@email.com", cpf: "0000010202" },
        { id: 10, nome: "Maria", email: "maria@email.com", cpf: "44452232311" },
         { id: 11, nome: "João", email: "joao@email.com", cpf: "0000010202" },
        { id: 12, nome: "Maria", email: "maria@email.com", cpf: "44452232311" },
         { id: 13, nome: "João", email: "joao@email.com", cpf: "0000010202" },
        { id: 14, nome: "Maria", email: "maria@email.com", cpf: "44452232311" },
      ]

    return(
        <>
         <div className="overflow-x-auto bg-white rounded-2xl shadow-md border border-gray-200">
  <table className="min-w-full">
    
    <thead className="bg-gray-100">
      <tr className="text-gray-600 text-xs uppercase tracking-wider">
        <th className="px-6 py-4 text-left">ID</th>
        <th className="px-6 py-4 text-left">Nome</th>
        <th className="px-6 py-4 text-left">Email</th>
        <th className="px-6 py-4 text-left">CPF</th>
        <th className="px-6 py-4 text-center">Ações</th>
      </tr>
    </thead>

    <tbody className="text-gray-700 text-sm">
      {clientes.map((item, index) => (
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
              {item.cpf}
            </span>
          </td>

          <td className="px-6 py-4 text-center">
            <div className="flex justify-center gap-2">
              
              <Action/>

            </div>
          </td>
        </tr>
      ))}

      {clientes.length === 0 && (
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
    )
}