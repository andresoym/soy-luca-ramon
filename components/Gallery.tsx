import React from 'react'

export default function Gallery(): React.JSX.Element {
  const images: string[] = [
    "/images/dame-mi-regalo-de-navidad.jpg",
    "/images/yo-compota.png",
    "/images/yo-veterinaria.webp",
    "/images/obra-de-construccion.jpg",
    "/images/estudioso.jpg",
    "/images/mi-papa.webp",
  ]

  return (
    <section id="gallery" className="py-16 max-w-5xl mx-auto px-6">
      <h2 className="text-2xl font-black mb-8 text-center uppercase tracking-tight text-neutral-900">
        📸 Galería de Acción
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-2xl bg-gray-200 aspect-square group relative shadow-md">
            <img 
              src={`/soy-luca${src}`} 
              alt={`Luca en acción ${idx + 1}`} 
              className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white text-xs font-bold uppercase tracking-wider">¡A toda velocidad!</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}