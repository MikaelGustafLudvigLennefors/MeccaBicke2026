const images = ['/images/1.jpg','/images/2.jpg','/images/3.jpg'];

export default function Gallery() {
  return (
    <section id="gallery" className="py-12">
      <h2 className="text-2xl font-medium mb-4">Bilder på oss</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src,i) => (
          <img key={i} src={src} alt={`Foto ${i+1}`} className="w-full h-auto rounded" />
        ))}
      </div>
    </section>
  );
}