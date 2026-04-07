const stats = [
  { value: '3.5+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Completed' },
  { value: '20+', label: 'Happy Clients' },
  { value: '10+', label: 'Technologies Used' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0d1422]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-dark-card border border-white/10 flex items-center justify-center text-white/20 text-sm">
              [ Profile Photo ]
            </div>
            {/* Accent border decoration */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 pointer-events-none" />
          </div>

          {/* Content */}
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">About Me</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
              Full-Stack <span className="text-accent">Web Developer</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              I'm Habib, a full-stack web developer with 3.5+ years of hands-on experience
              building web applications with PHP Laravel on the backend and React on the
              frontend. I care deeply about writing clean, efficient, and maintainable code
              that solves real problems.
            </p>
            <p className="text-white/60 leading-relaxed mb-10">
              From designing RESTful APIs and database architecture to crafting responsive,
              interactive UIs — I cover the full stack. I enjoy working in agile teams and
              thrive on turning product requirements into reliable, production-ready software.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-black text-accent">{value}</div>
                  <div className="text-white/50 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
