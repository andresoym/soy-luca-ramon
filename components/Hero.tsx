import React from "react";

export default function Hero(): React.JSX.Element {
  return (
    <section className="relative bg-black text-white overflow-hidden rounded-b-[50px] md:rounded-b-[80px] pb-16 md:pb-24">
      <div className="absolute top-0 right-0 w-64 h-64 energy-bg opacity-20 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 pt-16 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div>
          <span className="inline-block text-amber-400 font-bold tracking-widest uppercase text-sm bg-amber-400/10 px-3 py-1 rounded-full mb-4">
            &iexcl;Negro Como T&uacute; Coraz&oacute;n!
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Energ&iacute;a pura, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
              diversi&oacute;n sin fin.
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Conoce a Luca, el perro que nunca descansa (y te contagia de su
            empatia).
          </p>
          <a
            //href="https://www.tiktok.com/@soylucaramon"
            href="#gallery"
            className="energy-bg text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            Ver mis aventuras &#x1f43e;
          </a>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 energy-bg scale-95 md:scale-105 opacity-80 animate-pulse blur-sm"></div>
            <img
              src="/soy-luca/images/yo-chiquito.jpg"
              alt="Yo Chiquito"
              className="relative z-10 w-full rounded-2xl max-w-sm md:max-w-md object-cover drop-shadow-[0_20px_20px_rgba(0,0,0,0.6)]"
            />
          </div>
      </div>
    </section>
  );
}
