import React from "react";

export default function RainbowButton({ text = "Click Me", onClick }) {
  return (
    <div className="relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100 rainbow">
<style>
{`
  @keyframes rotate {
    100% { transform: rotate(1turn); }
  }

  .rainbow::before {
    content: '';
    position: absolute;
    z-index: 0; /* changed from -2 to 0 */
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-position: 100% 50%;
    background-repeat: no-repeat;
    background-size: 50% 30%;
    filter: blur(12px);
    background-image: linear-gradient(45deg, #A3D8F4, #FEC8D8, #FFD8A8);
    animation: rotate 6s linear infinite;
  }
`}
</style>


      <button
        onClick={onClick}  // <-- forward the click here
        className="cursor-pointer px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur"
      >
        {text}
      </button>
    </div>
  );
}


