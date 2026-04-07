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
                { label: 'Phone',    value: '+880 1812 132131' },
                { label: 'Location', value: 'Sector #10, Uttara, Dhaka' },
              ].map(({ label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="text-accent text-xs font-semibold uppercase tracking-widest pt-0.5 w-20 shrink-0">{label}</span>
                  <span className="text-white/70">{value}</span>
                </li>
              ))}
            </ul>

            {/* Social links */}
            <div className="flex flex-wrap gap-4 mt-10">

              {/* GitHub */}
              <a href="#" aria-label="GitHub"
                className="w-11 h-11 border border-white/20 flex items-center justify-center text-white/50 hover:border-accent hover:text-accent transition-all duration-200 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn"
                className="w-11 h-11 border border-white/20 flex items-center justify-center text-white/50 hover:border-accent hover:text-accent transition-all duration-200 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a href="#" aria-label="Twitter"
                className="w-11 h-11 border border-white/20 flex items-center justify-center text-white/50 hover:border-accent hover:text-accent transition-all duration-200 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.865l4.265 5.638 4.864-5.638zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" aria-label="Facebook"
                className="w-11 h-11 border border-white/20 flex items-center justify-center text-white/50 hover:border-accent hover:text-accent transition-all duration-200 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/8801812132131" aria-label="WhatsApp" target="_blank" rel="noreferrer"
                className="w-11 h-11 border border-white/20 flex items-center justify-center text-white/50 hover:border-accent hover:text-accent transition-all duration-200 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>

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
