const projects = [
  { id: 1, category: 'UI/UX', title: 'Finance Dashboard', desc: 'A clean analytics dashboard for personal finance tracking.' },
  { id: 2, category: 'Branding', title: 'Brew & Co. Identity', desc: 'Full brand identity for an artisan coffee startup.' },
  { id: 3, category: 'Web', title: 'Agency Landing Page', desc: 'High-conversion landing page for a digital marketing agency.' },
  { id: 4, category: 'Mobile', title: 'Fitness Tracker App', desc: 'Mobile UI for a health and workout tracking application.' },
  { id: 5, category: 'UI/UX', title: 'E-commerce Redesign', desc: 'Complete UX overhaul of a fashion e-commerce platform.' },
  { id: 6, category: 'Web', title: 'SaaS Onboarding Flow', desc: 'Streamlined onboarding experience for a B2B SaaS product.' },
]

const categories = ['All', 'UI/UX', 'Branding', 'Web', 'Mobile']

import { useState } from 'react'

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="py-24 bg-[#0d1422]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase">
            My <span className="text-accent">Projects</span>
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
          {filtered.map(({ id, category, title, desc }) => (
            <div key={id} className="group relative overflow-hidden border border-white/10 hover:border-accent/40 transition-all duration-300">
              {/* Placeholder image area */}
              <div className="aspect-video bg-dark flex items-center justify-center text-white/10 text-xs">
                [ Project Image {id} ]
              </div>
              {/* Info */}
              <div className="p-6">
                <span className="text-accent text-xs font-semibold uppercase tracking-widest">{category}</span>
                <h3 className="text-lg font-bold mt-1 mb-2 group-hover:text-accent transition-colors">{title}</h3>
                <p className="text-white/50 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
