const posts = [
  {
    id: 1,
    date: 'March 12, 2025',
    tag: 'Design',
    title: 'The Psychology of Color in UI Design',
    excerpt: 'How strategic color choices influence user emotion, trust, and conversion rates in digital products.',
  },
  {
    id: 2,
    date: 'February 28, 2025',
    tag: 'UX',
    title: '5 Principles of Effective Onboarding Flows',
    excerpt: 'Breaking down what makes first-run experiences feel effortless — and how to apply those lessons.',
  },
  {
    id: 3,
    date: 'January 15, 2025',
    tag: 'Branding',
    title: 'Why Consistency Is the Cornerstone of Brand Identity',
    excerpt: 'A deep dive into design systems and why visual consistency builds trust faster than aesthetics alone.',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Thoughts</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase">
            Latest <span className="text-accent">Blog</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map(({ id, date, tag, title, excerpt }) => (
            <article key={id} className="group border border-white/10 hover:border-accent/40 transition-all duration-300 flex flex-col">
              {/* Placeholder thumbnail */}
              <div className="aspect-video bg-[#0d1422] flex items-center justify-center text-white/10 text-xs">
                [ Blog Image {id} ]
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4 text-xs text-white/40">
                  <span>{date}</span>
                  <span className="text-accent font-semibold uppercase tracking-widest">{tag}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors leading-snug">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1">{excerpt}</p>
                <a href="#" className="mt-5 text-accent text-sm font-semibold tracking-wide hover:underline self-start">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
