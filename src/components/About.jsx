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

          {/* Profile image side */}
          <div className="relative max-w-md mx-auto md:mx-0">

            {/* Background accent block */}
            <div className="absolute top-6 left-6 w-full h-full bg-accent/10 border border-accent/20 -z-10" />

            {/* Main image */}
            <div className="aspect-[4/5] overflow-hidden border-2 border-accent/40">
              <img
                src="/habib.jpg"
                alt="Habib — Web Developer"
                className="w-full h-full object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
            </div>

            {/* Experience badge — bottom left */}
            <div className="absolute -bottom-5 -left-5 bg-accent text-dark px-5 py-4 shadow-lg">
              <div className="text-3xl font-black leading-none">3.5+</div>
              <div className="text-xs font-bold uppercase tracking-widest mt-1">Years Exp.</div>
            </div>

            {/* Top-right corner accent lines */}
            <div className="absolute -top-3 -right-3 w-16 h-16 pointer-events-none">
              <div className="absolute top-0 right-0 w-full h-[2px] bg-accent" />
              <div className="absolute top-0 right-0 w-[2px] h-full bg-accent" />
            </div>

            {/* Bottom-right corner accent lines */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 pointer-events-none">
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-accent/40" />
              <div className="absolute bottom-0 right-0 w-[2px] h-full bg-accent/40" />
            </div>

            {/* Floating tech badge — right side */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-[#0B1121] border border-accent/30 px-3 py-3 flex flex-col items-center gap-2 shadow-xl">
              {['Laravel', 'React', 'PHP'].map(tech => (
                <span key={tech} className="text-accent text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                  {tech}
                </span>
              ))}
            </div>

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
