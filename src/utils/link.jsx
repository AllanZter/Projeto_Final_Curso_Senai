

export const Link = (navigate) => [
  {
    label: "Dashboard",
    icon: "LayoutDashboard",
    onClick: () => navigate("/loja"),
  },
  {
    label: "Vendas",
    icon: "ShoppingCart",
    sub: [
      {
        label:"Abrir Caixa",
        icon:"Unlock",
      },
       {
        label:"Fechar Caixa",
        icon:"Lock",
      },
       {
        label:"Sangria",
        icon:"ArrowDownCircle",
      },
       {
        label:"Suprimento",
        icon:"ArrowUpCircle",
      },
      {
        label: "Realizar Venda",
        icon: "ShoppingCart",
        onClick: () => navigate("/caixa"),
      },
      {
        label: "Pedidos",
        icon: "ClipboardList",
        onClick: () => navigate("/vendas/historico"),
      },
      {
        label: "Histórico de Vendas",
        icon: "ReceiptText",
        onClick: () => navigate("/vendas/historico"),
      }
    ],
  },
  {
    label: "Clientes",
    icon: "Users",
    
     sub: [
        {
         label:"Novo",
         icon:"UserPlus",
         
        },
         {
         label:"Clientes",
         icon:"Users",
         onClick: () => navigate("/clientes"),
        },
        
    ],
  },
  {
    label: "Produtos",
    icon: "Package",    
    sub: [
        {
         label:"Novo",
         icon:"PackagePlus",
         
        },
         {
         label:"Estoque",
         icon:"Warehouse",
         
        },
         {
         label:"Produtos",
         icon:"Package",
         onClick: () => navigate("/produtos"),
        },
    ],
  },
  {
    label: "Usuários",
    icon: "User",
    
    sub: [
        {
         label:"Novo",
         icon:"UserPlus",
         onClick: () => navigate("/novo_usuario"),
        },
         {
         label:"Usuários",
         icon:"User",
         onClick: () => navigate("/users"),
        },
    ],    
    
  },
  {
    label:"Integrações",
    icon:"GitFork",
    sub:[
      {
       label:"Mercado Livre"
      },
      {
       label:"Amazon"
      },
      {
       label:"Shopee"
      },
    ],
  },
  {
    label: "API",
    icon: "Plug",
    onClick: () => navigate(""),
    
  },
  {
    label: "Configurações",
    icon: "Cog",
    onClick: () => navigate(""),
    
  },
];
