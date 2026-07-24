import React from 'react'

interface Feature {
  icon: string
  label: string
  value: string
}

export default function About(): React.JSX.Element {
  const features: Feature[] = [
    { icon: '⚡', label: 'Energía', value: 'Al 100%' },
    { icon: '🎂', label: 'Edad', value: '3 Años' },
    { icon: '🥎', label: 'Favorito', value: 'Atrapar Pelotas' },
  ]

  return (
    <section className="py-16 max-w-5xl mx-auto px-6">
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 grid md:grid-cols-3 gap-8 items-center border border-gray-100">
        <div className="relative group mx-auto md:mx-0">
          <div className="absolute -inset-2 energy-bg rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
          <img 
            src="/soy-luca/images/mami-esta-mal.jpg" 
            alt="Perfil" 
            className="relative rounded-2xl w-84 h-100 object-cover"
          />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white font-black px-6 py-1 rounded-full text-center shadow-md">
            Luca
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-4 text-center md:text-left pt-4 md:pt-0">
          <h2 className="text-sm font-bold uppercase tracking-wider text-orange-600">Conóceme (Sobre mí)</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            ¡Hola! Soy Luca, negrito como el café tengo 3 años. Mi pasión: comer, correr, atrapar pelotas a la velocidad de la luz y destruir juguetes (en ese orden exacto).
          </p>
          
          <div className="grid grid-cols-3 gap-4 pt-4">
            {features.map((f, idx) => (
              <div key={idx} className="bg-amber-50 p-3 rounded-xl text-center border border-amber-100">
                <span className="text-2xl block mb-1">{f.icon}</span>
                <span className="text-xs text-gray-500 block font-medium">{f.label}</span>
                <span className="text-sm font-bold text-gray-900">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}