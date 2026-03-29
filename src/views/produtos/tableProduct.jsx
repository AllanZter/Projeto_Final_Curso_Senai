import {useEffect, useState } from "react";
import Action from "../../components/action";

 function TabelaProdutos(){

  const [produtos,setProdutos] = useState([]);

  const listarProdutos = async () => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`,{
          method: 'GET',
          
        });
        const json = await response.json();
        setProdutos(json);
    } catch (error) {
        console.error("Erro ao buscar produtos", error);
    }
  }

  useEffect(() => {
    listarProdutos();
  }, []);

    return(
        <>
               <div className="overflow-x-auto bg-white rounded-2xl shadow-md border border-gray-200">
  <table className="min-w-full">
    
    <thead className="bg-gray-100">
      <tr className="text-gray-600 text-xs uppercase tracking-wider">
        <th className="px-6 py-4 text-left">ID</th>
        <th className="px-6 py-4 text-left">Nome</th>
        <th className="px-6 py-4 text-left">Preço</th>
        <th className="px-6 py-4 text-left">Categoria</th>
        <th className="px-6 py-4 text-center">Ações</th>
      </tr>
    </thead>

    <tbody className="text-gray-700 text-sm">
      {produtos.map((item, index) => (
        <tr
          key={item.id}
          className="border-t hover:bg-gray-50 transition duration-150"
        >
          <td className="px-6 py-4 font-medium">{item.id}</td>

          <td className="px-6 py-4">{item.title}</td>

          <td className="px-6 py-4 text-gray-500">
            {item.price}
          </td>

          <td className="px-6 py-4">
            <span className="text-gray-700 text-sm ">
              {item.category}
            </span>
          </td>

          <td className="px-6 py-4 text-center">
            <div className="flex justify-center gap-2">
              
              <Action/>

            </div>
          </td>
        </tr>
      ))}

      {produtos.length === 0 && (
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

 export default TabelaProdutos;