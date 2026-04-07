const name = "Habib"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 diagonal-lines pointer-events-none" />

      {/* Top-right arc decoration */}
      <svg className="absolute top-10 right-16 opacity-70" width="120" height="60" viewBox="0 0 120 60" fill="none">
        <path d="M10 50 Q60 0 110 50" stroke="#4DFFA4" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>

      {/* Bottom-center arc decoration */}
      <svg className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-70" width="120" height="60" viewBox="0 0 120 60" fill="none">
        <path d="M10 10 Q60 60 110 10" stroke="#4DFFA4" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>

      {/* Main grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT — text content */}
        <div>
          {/* Floating circle */}
          <div className="w-8 h-8 rounded-full border-2 border-white/40 mb-4" />

          {/* Heading with animated name */}
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-6">
            Hi, I'm{' '}
            <span className="inline-flex items-end">
              {name.split('').map((char, i) => (
                <span
                  key={i}
                  className="wave-letter animate-gradient-text"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  {char}
                </span>
              ))}
              <span className="cursor-blink" />
            </span>
            <br />
            Web{' '}
            <span className="text-accent">Developer</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg mb-10">
            I'm a full-stack web developer with <strong className="text-white">3.5+ years</strong> of experience
            building robust, scalable applications using <strong className="text-white">PHP Laravel</strong> and <strong className="text-white">React</strong>. I turn complex
            requirements into clean, maintainable code that works seamlessly from database to UI.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="/MD Habibur Rahman -CV.pdf"
              download
              className="flex items-center gap-2 bg-accent text-dark font-semibold px-6 py-3 text-sm tracking-wide hover:bg-accent/80 transition-colors"
            >
              Download CV
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>

            <button className="flex items-center gap-3 text-white text-sm font-medium hover:text-accent transition-colors group">
              <span className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-dark group-hover:bg-accent/80 transition-colors">
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Watch The Video
            </button>
          </div>
        </div>

        {/* RIGHT — shaky floating image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full animate-glow-pulse pointer-events-none" />

            {/* Floating image wrapper */}
            <div className="animate-float-shake">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-accent overflow-hidden bg-[#0d1422] animate-glow-pulse">
                <img
                  src="/habib.jpg"
                  alt="Habib — Web Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Decorative corner dots */}
            <span className="absolute -top-4 -left-4 w-4 h-4 bg-accent rounded-full opacity-70" />
            <span className="absolute -bottom-4 -right-4 w-4 h-4 bg-accent rounded-full opacity-70" />
            <span className="absolute top-1/2 -right-8 w-2 h-2 bg-accent/50 rounded-full" />
            <span className="absolute top-1/2 -left-8 w-2 h-2 bg-accent/50 rounded-full" />

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-accent text-dark text-xs font-black uppercase tracking-widest px-4 py-2 whitespace-nowrap">
              Laravel &amp; React Dev
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
