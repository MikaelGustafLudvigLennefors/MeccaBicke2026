export default function Map() {
  return (
    <section id="map" className="py-12 text-center">
      <h2 className="text-2xl font-medium mb-4">Plats för ceremonin</h2>
      <div className="w-full h-64">
        <iframe
          src="https://www.google.com/maps/embed?pb=<DIN_EMBED_KOD>"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}