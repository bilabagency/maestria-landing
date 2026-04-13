export default function VideoSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark mb-4">
            Conocé la maestría
          </h2>
          <p className="text-brand-muted text-lg max-w-[50ch] mx-auto">
            Descubrí de primera mano lo que hace única a esta propuesta académica.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-zinc-950 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]">
            <video
              controls
              preload="metadata"
              playsInline
              className="w-full aspect-video"
              poster=""
            >
              <source
                src="https://videos.files.wordpress.com/mSwawzPY/maestria-index.mp4"
                type="video/mp4"
              />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
