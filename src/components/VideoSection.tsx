"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark mb-4">
            Conoce la maestria
          </h2>
          <p className="text-brand-muted text-lg max-w-[50ch] mx-auto">
            Descubri de primera mano lo que hace unica a esta propuesta academica.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
