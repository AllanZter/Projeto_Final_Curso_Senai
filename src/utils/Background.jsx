export function Background(){
    return(
        <>
   <div className="absolute inset-0 bg-gray-100 overflow-hidden">
  <svg
    className="w-full h-full"
    viewBox="0 0 1200 800"
    preserveAspectRatio="none"
  >
    <g
      fill="none"
      stroke="#a855f7"
      strokeWidth="1.2"
      opacity="0.5"
    >
      {[...Array(50)].map((_, i) => (
        <path
          key={i}
          d={`
            M0 ${40 + i * 12}
            C 300 ${-80 + i * 12}, 300 ${200 + i * 12}, 600 ${120 + i * 12}
            S 900 ${-60 + i * 12}, 1200 ${140 + i * 12}
          `}
        />
      ))}
    </g>
  </svg>
</div>
        </>
    )
}