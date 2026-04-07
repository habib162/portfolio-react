import { useState } from 'react'
import emailjs from '@emailjs/browser'

// ── EmailJS config ──────────────────────────────────────────
// 1. Sign up at https://www.emailjs.com (free)
// 2. Add a Gmail service → copy the Service ID below
// 3. Create a template with these variables:
//    {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//    Set "To Email" in the template to: habiburrahman.easca@gmail.com
// 4. Copy your Public Key from Account → API Keys
const EMAILJS_SERVICE_ID  = 'service_g8868xv'
const EMAILJS_TEMPLATE_ID = 'template_ifvnqdm'
const EMAILJS_PUBLIC_KEY  = 'WlVBnsKtDgsRqUYjE'
// ────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject,
          message:    form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#0d1422]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase">
            Contact <span className="text-accent">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="text-white/60 leading-relaxed mb-8">
              Have a project in mind or just want to say hello? Fill out the form and
              I'll get back to you within 24 hours.
            </p>
            <ul className="space-y-5">
              {[
                { label: 'Email',    value: 'habiburrahman.easca@gmail.com' },
                { label: 'Phone',    value: '01812132131' },
                { label: 'Location', value: 'Uttara, Dhaka' },
              ].map(({ label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="text-accent text-xs font-semibold uppercase tracking-widest pt-0.5 w-20 shrink-0">{label}</span>
                  <span className="text-white/70">{value}</span>
                </li>
              ))}
            </ul>

            {/* Social links */}
            <div className="flex gap-4 mt-10">
              {['Dribbble', 'Behance', 'LinkedIn', 'Twitter'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/40 text-xs hover:border-accent hover:text-accent transition-colors"
                  aria-label={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 border border-accent/30 py-16 px-8 text-center">
                <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-accent text-lg font-bold">Message Sent!</p>
                <p className="text-white/50 text-sm">I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-accent text-sm underline hover:no-underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: 'name',    placeholder: 'Your Name',  type: 'text'  },
                  { name: 'email',   placeholder: 'Your Email', type: 'email' },
                  { name: 'subject', placeholder: 'Subject',    type: 'text'  },
                ].map(({ name, placeholder, type }) => (
                  <input
                    key={name}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={form[name]}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark border border-white/10 focus:border-accent outline-none px-4 py-3 text-white text-sm placeholder-white/30 transition-colors"
                  />
                ))}
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark border border-white/10 focus:border-accent outline-none px-4 py-3 text-white text-sm placeholder-white/30 transition-colors resize-none"
                />

                {status === 'error' && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-accent text-dark font-semibold py-3 text-sm tracking-wide hover:bg-accent/80 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} Habib. All rights reserved.
      </div>
    </section>
  )
}
