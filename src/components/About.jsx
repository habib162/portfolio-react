const stats = [
  { value: '3.5+', label: 'Years Experience' },
  { value: '10+',  label: 'Projects Completed' },
  { value: '3',    label: 'Companies Worked' },
  { value: '8+',   label: 'Technologies Used' },
]

const skills = [
  { name: 'PHP & Laravel',       level: 95, tag: 'Expert' },
  { name: 'JavaScript & jQuery', level: 85, tag: 'Advanced' },
  { name: 'React.js',            level: 85, tag: 'Advanced' },
  { name: 'HTML / CSS',          level: 95, tag: 'Expert' },
  { name: 'MySQL',               level: 85, tag: 'Advanced' },
  { name: 'REST API',            level: 85, tag: 'Advanced' },
  { name: 'MongoDB',             level: 65, tag: 'Intermediate' },
  { name: 'Git & GitHub',        level: 85, tag: 'Advanced' },
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
                alt="MD Habibur Rahman — Software Engineer"
                className="w-full h-full object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-5 -left-5 bg-accent text-dark px-5 py-4 shadow-lg">
              <div className="text-3xl font-black leading-none">3.5+</div>
              <div className="text-xs font-bold uppercase tracking-widest mt-1">Years Exp.</div>
            </div>

            {/* Top-right corner accent */}
            <div className="absolute -top-3 -right-3 w-16 h-16 pointer-events-none">
              <div className="absolute top-0 right-0 w-full h-[2px] bg-accent" />
              <div className="absolute top-0 right-0 w-[2px] h-full bg-accent" />
            </div>

            {/* Bottom-right corner accent */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 pointer-events-none">
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-accent/40" />
              <div className="absolute bottom-0 right-0 w-[2px] h-full bg-accent/40" />
            </div>

            {/* Floating tech badge */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-[#0B1121] border border-accent/30 px-3 py-3 flex flex-col items-center gap-2 shadow-xl">
              {['Laravel', 'React', 'MySQL'].map(tech => (
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
              Full-Stack <span className="text-accent">Software Engineer</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              I'm Habib, a full-stack web developer with <strong className="text-white">3.5+ years</strong> of
              hands-on experience building web applications with <strong className="text-white">PHP Laravel</strong> on
              the backend and <strong className="text-white">React</strong> on the frontend. I care deeply about
              writing clean, efficient, and maintainable code that solves real problems.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              From designing RESTful APIs and database architecture to crafting responsive,
              interactive UIs — I cover the full stack. I enjoy working in agile teams and
              thrive on turning product requirements into reliable, production-ready software.
            </p>

            {/* Skill bars */}
            <div className="space-y-3 mb-10">
              {skills.map(({ name, level, tag }) => (
                <div key={name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/80 text-xs font-medium">{name}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5
                      ${tag === 'Expert' ? 'text-dark bg-accent' :
                        tag === 'Advanced' ? 'text-accent border border-accent/50' :
                        'text-white/50 border border-white/20'}`}>
                      {tag}
                    </span>
                  </div>
                  <div className="h-1 bg-white/10 w-full">
                    <div
                      className="h-1 bg-gradient-to-r from-accent to-[#00d4ff]"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

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
