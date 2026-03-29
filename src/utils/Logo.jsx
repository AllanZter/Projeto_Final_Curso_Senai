export function Logo() {
  return (
    <div className="flex items-center gap-3 select-none cursor-pointer">
      
      {/* Ícone */}
      <div className="
        w-10 h-10
        rounded-xl
        bg-gradient-to-br from-[#ffb400] to-[#e69500]
        flex items-center justify-center
        shadow-lg shadow-blue-500/30
      ">
        <span className="text-white font-bold text-lg">
          I
        </span>
      </div>

      {/* Texto */}
      <div className="flex flex-col leading-tight">
        <span className="
          text-xl font-bold tracking-wide
          bg-gradient-to-r from-gray-800 to-gray-600
          bg-clip-text text-transparent
        ">
          Imobi
        </span>
        <span className="
          text-[10px] text-gray-500 tracking-[0.3em] uppercase
        ">
          Sistemas
        </span>
      </div>

    </div>
  );
}