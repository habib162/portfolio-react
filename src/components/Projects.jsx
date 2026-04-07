import { useState } from 'react'

const projects = [
  {
    id: 1,
    category: 'Laravel',
    title: 'Education Management System',
    desc: 'Comprehensive education platform with student admission, examination management, automated grade calculation, payment processing, and dynamic reporting.',
    tech: ['PHP Laravel', 'MySQL', 'jQuery', 'Bootstrap', 'REST API'],
    company: 'EASCA Solutions Ltd',
  },
  {
    id: 2,
    category: 'Laravel',
    title: 'Sales Invoice Management System',
    desc: 'Enhanced sales invoice platform with chart of accounts, profit/loss reports, balance sheet, accounting transaction tracking and journal entry management.',
    tech: ['PHP Laravel', 'MySQL', 'jQuery', 'Chart.js', 'Bootstrap'],
    company: 'EASCA Solutions Ltd',
  },
  {
    id: 3,
    category: 'Laravel',
    title: 'Course Management System',
    desc: 'Full-featured course platform with dynamic course creation, multi-media content, pricing management, instructor profiles, and certificate/live session support.',
    tech: ['PHP Laravel', 'MySQL', 'jQuery', 'Bootstrap', 'REST API'],
    company: 'EASCA Solutions Ltd',
  },
  {
    id: 4,
    category: 'Laravel',
    title: 'Luo & Liiku Activity Tracker',
    desc: 'Professional activity tracking system with time logging, weekly reporting, productivity analytics, team collaboration and project management tools.',
    tech: ['PHP Laravel', 'MySQL', 'jQuery', 'Chart.js', 'Bootstrap', 'REST API'],
    company: 'Personal Project',
  },
  {
    id: 5,
    category: 'MERN',
    title: 'Apartment Management System',
    desc: 'Comprehensive rental management platform with Firebase authentication, role-based dashboards, Stripe payment integration, and real-time notifications.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Stripe', 'JWT'],
    company: 'Personal Project',
  },
  {
    id: 6,
    category: 'React',
    title: 'Group Study Platform',
    desc: 'Interactive learning management system with multi-authentication, course categorization, progress tracking, discussion forums and assignment submission.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Firebase', 'Context API', 'Tailwind CSS'],
    company: 'Personal Project',
  },
  {
    id: 7,
    category: 'MERN',
    title: 'Automotive Car E-commerce',
    desc: 'Full-featured e-commerce platform for automotive products with shopping cart, product management, brand administration and secure payment processing.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Context API'],
    company: 'Personal Project',
  },
]

const categories = ['All', 'Laravel', 'React', 'MERN']

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="py-24 bg-[#0d1422]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase">
            Featured <span className="text-accent">Projects</span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm font-medium tracking-wide border transition-colors duration-200 ${
                active === cat
                  ? 'bg-accent text-dark border-accent'
                  : 'border-white/20 text-white/60 hover:border-accent hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(({ id, category, title, desc, tech, company }) => (
            <div key={id} className="group border border-white/10 hover:border-accent/40 transition-all duration-300 flex flex-col bg-[#0B1121] hover:-translate-y-1">
              {/* Header bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
                <span className="text-accent text-xs font-bold uppercase tracking-widest">{category}</span>
                <span className="text-white/30 text-xs">{company}</span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold mb-3 group-hover:text-accent transition-colors leading-snug">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1">{desc}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {tech.map(t => (
                    <span key={t} className="text-[10px] text-accent/70 border border-accent/20 px-2 py-0.5 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
