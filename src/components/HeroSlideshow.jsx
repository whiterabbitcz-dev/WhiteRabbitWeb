import { useState, useEffect } from 'react';

/**
 * HeroSlideshow - Automatický slideshow s fade efektem
 * @param {Object} props
 * @param {string[]} props.images - Pole URL adres obrázků
 */
export default function HeroSlideshow({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Pokud není žádný obrázek, nevytvářej interval
    if (!images || images.length === 0) return;

    // Časovač pro automatické přepínání každé 4 sekundy
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 4000);

    // Cleanup - vyčisti interval při unmount
    return () => clearInterval(interval);
  }, [images]);

  // Pokud nejsou žádné obrázky, nic nevykresluj
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}


