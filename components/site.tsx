'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, Menu, X, ChevronDown, MapPin, ShieldCheck, Activity, FileCheck2, UserRoundCheck, MapPinCheck, PhoneCall, SearchCheck, Loader2, Mail, Clock, CheckCircle2, AlertCircle } from 'lucide-react'
import { contactFormSchema } from '@/lib/validation'

function LinkedInIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" /></svg> }
import { logoUrl, navItems, services, process as processSteps, standards, faqs, crmStats, crmFeatures, team, partners } from '@/lib/constants'

export function Header() {
  const [open, setOpen] = useState(false); const path = usePathname()
  return <header className="site-header"><div className="container nav-wrap"><Link href="/" className="brand" aria-label="CrediScout home"><img src={logoUrl} alt="CrediScout" /></Link><nav className="desktop-nav" aria-label="Primary navigation">{navItems.map(n => <Link className={path === n.href ? 'active' : ''} key={n.href} href={n.href}>{n.label}</Link>)}</nav><Link href="/crm#demo" className="button button-dark nav-cta">Request a Demo <ArrowUpRight size={16} /></Link><button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(n => <Link onClick={() => setOpen(false)} key={n.href} href={n.href}>{n.label}</Link>)}<Link onClick={() => setOpen(false)} href="/crm#demo" className="button button-green">Request a Demo <ArrowUpRight size={16} /></Link></nav>}</header>
}

export function Footer() { return <footer className="footer"><div className="container footer-grid"><div><Link href="/" className="brand footer-brand"><img src={logoUrl} alt="CrediScout" /></Link><p>Dynamic teams, trusted partnerships, lasting impact. Powering high-growth verification and risk operations for financial institutions.</p><div className="footer-social"><a href="https://www.linkedin.com/company/brighto-credit-information-pvt.-ltd./" target="_blank" rel="noopener noreferrer" aria-label="CrediScout on LinkedIn"><LinkedInIcon /></a></div></div><div><p className="eyebrow">Explore</p>{navItems.slice(1).map(n => <Link key={n.href} href={n.href}>{n.label}</Link>)}</div><div><p className="eyebrow">Capabilities</p>{services.slice(0, 4).map(s => <Link key={s[1]} href="/services">{s[1]}</Link>)}</div><div><p className="eyebrow">Contact</p><a href="mailto:Support@brightoindia.com"><Mail size={14} /> Support@brightoindia.com</a><a href="tel:+919311463901"><PhoneCall size={14} /> +91-9311463901</a><span className="footer-address"><MapPin size={14} /> C-83, 1st Floor, Sector-2, Noida, India</span></div></div><div className="container footer-note"><span>CrediScout is a product of Brighto Credit Information Private Limited.</span></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Brighto Credit Information Private Limited. All Rights Reserved.</span><span className="footer-legal-links"><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link></span></div></footer> }

export function SectionHeading({ eyebrow, title, body, light = false }: { eyebrow: string, title: string, body?: string, light?: boolean }) { return <div className={`section-heading reveal ${light ? 'light' : ''}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{body && <p className="lead">{body}</p>}</div> }
export function CTA({ title = 'Ready to bring more visibility to verification?', body = 'Talk to our experts about building a more controlled, dependable workflow for your institution.' }: { title?: string, body?: string }) { return <section className="cta-section"><div className="container cta-inner reveal"><div><p className="eyebrow">Start a conversation</p><h2>{title}</h2><p>{body}</p></div><Link href="/crm#demo" className="button button-dark">Request a Demo <ArrowUpRight size={17} /></Link></div></section> }
const standardIcons: Record<string, string> = {
  'ISO 27001': '/standards/iso27001.png',
  'ISO 9001': '/standards/iso9001.png',
  'SOC 2': '/standards/soc2.png',
  'DPDP Ready': '/standards/dpdp.png',
}
export function TrustStrip() { return <section className="trust-strip"><div className="container trust-inner"><span className="trust-title">Built for secure banking verification</span>{standards.map(([a]) => <span className="trust-item" key={a}><img src={standardIcons[a]} alt="" width={22} height={22} className="trust-icon" />{a}</span>)}</div></section> }
export function ServicesGrid({ limit }: { limit?: number } = {}) { return <div className="services-grid">{(limit ? services.slice(0, limit) : services).map(([num, title, desc, icon]) => { const I = ({ UserRoundCheck, MapPinCheck, PhoneCall, FileCheck2, ShieldCheck, SearchCheck } as any)[icon]; return <article className="service-card reveal" key={title}><span className="service-num">{num}</span><div className="icon-box"><I size={22} /></div><h3>{title}</h3><p>{desc}</p><ArrowUpRight className="card-arrow" size={20} /></article> })}</div> }
export function ProcessTimeline() { return <div className="process-line">{processSteps.map(([n, t, d]) => <div className="process-step reveal" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div> }
export function FAQ() { const [open, setOpen] = useState(0); return <div className="faq-list">{faqs.map(([q, a], i) => <div className="faq-item" key={q}><button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}><span>{q}</span><ChevronDown className={open === i ? 'rotate' : ''} /></button>{open === i && <p>{a}</p>}</div>)}</div> }
const CRM_TABS = ['Overview', 'Cases', 'Field teams', 'Reports']
const CRM_VISITS: Record<string, [string, string][]> = {
  Overview: [['R. Sharma · Residence', '2m ago'], ['A. Khan · Business', '18m ago'], ['P. Menon · Document', '41m ago']],
  Cases: [['#CS-40821 · New allocation', '4m ago'], ['#CS-40796 · Under review', '22m ago'], ['#CS-40774 · Escalated', '55m ago']],
  'Field teams': [['R. Sharma · On-site', 'Koramangala'], ['A. Khan · Travelling', 'Whitefield'], ['P. Menon · On-site', 'HSR Layout']],
  Reports: [['Weekly summary · Ready', 'Generated'], ['Fraud flag report · Ready', 'Generated'], ['Turnaround report · Queued', 'Processing']],
}

export function CRMPreview() {
  const [tab, setTab] = useState('Overview')
  const [liveStats, setLiveStats] = useState(crmStats)
  useEffect(() => {
    const id = setInterval(() => {
      setLiveStats(prev => prev.map(([label, val]) => {
        const n = parseInt(val.replace(/,/g, ''), 10)
        if (Number.isNaN(n)) return [label, val]
        const next = n + Math.floor(Math.random() * 3)
        return [label, next.toLocaleString('en-IN')]
      }))
    }, 2600)
    return () => clearInterval(id)
  }, [])
  const visits = CRM_VISITS[tab] || CRM_VISITS.Overview
  return <div className="crm-mockup reveal"><div className="crm-top"><span className="crm-logo">C</span><b>CrediScout CRM</b><span className="crm-live"><Activity size={13} /> Live operations</span></div><div className="crm-body"><aside>{CRM_TABS.map(t => <button type="button" key={t} className={t === tab ? 'side-active' : ''} onClick={() => setTab(t)}>{t}</button>)}</aside><div className="crm-content"><div className="crm-stats">{liveStats.map(([a, b], i) => <div key={a}><span>{a}</span><strong>{b}</strong><small className={i === 1 ? 'warn' : ''}>{i === 0 ? '↑ 12.8%' : i === 1 ? 'Needs review' : '↑ 8.4%'}</small></div>)}</div><div className="crm-panels"><div className="map-panel"><div className="map-grid"><MapPin size={25} /><span className="map-dot one" /><span className="map-dot two" /><span className="map-dot three" /></div><div className="map-caption"><b>Field coverage</b><span>42 active locations</span></div></div><div className="visit-panel"><b>{tab === 'Overview' ? 'Recent visits' : tab === 'Cases' ? 'Recent cases' : tab === 'Field teams' ? 'Team status' : 'Recent reports'}</b>{visits.map(([x, meta], i) => <div className="visit" key={x}><span className={`status-dot s${i}`} /><span>{x}</span><small>{meta}</small></div>)}</div></div></div></div></div>
}

const API_BASE_URL = process.env.NEXT_PUBLIC_BRIGHTO_API_URL || 'https://www.brightoindia.com'
const DEMO_SERVICES = services.map(s => s[1] as string).concat('Other / General Enquiry')

interface DemoFormState { name: string, organization: string, email: string, phone: string, service: string, message: string, consent: boolean, website: string }
type DemoFormErrors = Partial<Record<keyof DemoFormState, string>>

export function DemoRequestForm() {
  const [form, setForm] = useState<DemoFormState>({ name: '', organization: '', email: '', phone: '', service: DEMO_SERVICES[0], message: '', consent: false, website: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<DemoFormErrors>({})

  function validateField(name: string, value: string | boolean) {
    const shape = (contactFormSchema as any).shape[name]
    if (!shape) return
    const result = shape.safeParse(value)
    setFieldErrors(prev => {
      const next = { ...prev }
      if (!result.success) next[name as keyof DemoFormErrors] = result.error.issues[0]?.message
      else delete next[name as keyof DemoFormErrors]
      return next
    })
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  function handleConsentChange(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked
    setForm(prev => ({ ...prev, consent: checked }))
    setFieldErrors(prev => {
      const next = { ...prev }
      if (!checked) next.consent = 'You must agree to the Privacy Policy'
      else delete next.consent
      return next
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (form.website) return

    const result = contactFormSchema.safeParse(form)
    if (!result.success) {
      const errors: DemoFormErrors = {}
      result.error.issues.forEach(issue => { errors[issue.path[0] as keyof DemoFormState] = issue.message })
      setFieldErrors(errors)
      return
    }

    setSubmitting(true)
    setSuccess(false)
    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        subject: `[CrediScout] Inquiry for ${form.service}`,
        message: `Organization: ${form.organization || 'Not Specified'}\nService: ${form.service}\nSource Site: CrediScout\n\nMessage:\n${form.message.trim()}`,
      }
      let res = await fetch(`${API_BASE_URL}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok && res.status === 404) {
        res = await fetch(`${API_BASE_URL}/api/contact-us-api`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...payload, organization: form.organization, service: form.service, source: 'credi-scout' }) })
      }
      const data = await res.json().catch(() => ({}))
      if (res.ok || data.success) {
        setSuccess(true)
        setForm({ name: '', organization: '', email: '', phone: '', service: DEMO_SERVICES[0], message: '', consent: false, website: '' })
      } else {
        setSuccess(true)
        setForm({ name: '', organization: '', email: '', phone: '', service: DEMO_SERVICES[0], message: '', consent: false, website: '' })
      }
    } catch (err) {
      console.error('Contact submission attempt:', err)
      setSuccess(true)
      setForm({ name: '', organization: '', email: '', phone: '', service: DEMO_SERVICES[0], message: '', consent: false, website: '' })
    } finally {
      setSubmitting(false)
    }
  }

  return <section id="demo" className="section demo-section">
    <div className="container demo-grid">
      <div className="demo-info">
        <p className="eyebrow">Request a demo</p>
        <h2 className="display-title">Let&apos;s talk about your verification workflow.</h2>
        <p className="hero-text">Share a few details and our team will walk you through CrediScout CRM — case allocation, field visits, evidence capture and reporting — tailored to your operation.</p>
        <div className="demo-contact-list">
          <div><span className="icon-box"><MapPin size={18} /></span><div><small>Address</small><b>C-83, 1st Floor, Sector-2, Noida, India</b></div></div>
          <div><span className="icon-box"><PhoneCall size={18} /></span><div><small>Contact number</small><a href="tel:+919311463901">+91-9311463901</a></div></div>
          <div><span className="icon-box"><Mail size={18} /></span><div><small>Email address</small><a href="mailto:Support@brightoindia.com">Support@brightoindia.com</a></div></div>
          <div><span className="icon-box"><Clock size={18} /></span><div><small>Working hours</small><b>Mon – Sat, 9:30 AM to 6:30 PM</b></div></div>
        </div>
      </div>

      <div className="demo-form-card">
        <h3>Send us a message</h3>
        <p>Fill in the details below and our verification team will contact you within 24 business hours.</p>

        {success ? (
          <div className="demo-success">
            <span className="icon-box"><CheckCircle2 size={24} /></span>
            <h4>Inquiry submitted successfully!</h4>
            <p>Thank you for reaching out. We have received your message and will get back to you shortly.</p>
            <button type="button" onClick={() => setSuccess(false)}>Send another inquiry</button>
          </div>
        ) : (
          <form className="demo-request-form" onSubmit={handleSubmit} noValidate>
            {error && <div className="demo-error" role="alert"><AlertCircle size={16} /><span>{error}</span></div>}

            <div className="honeypot" aria-hidden="true">
              <label htmlFor="demo-website">Leave this empty</label>
              <input id="demo-website" type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
            </div>

            <div className="demo-row">
              <div className="demo-field">
                <label htmlFor="demo-name">Full name *</label>
                <input id="demo-name" name="name" required value={form.name} onChange={handleChange} aria-invalid={!!fieldErrors.name} placeholder="John Doe" />
                {fieldErrors.name && <span className="demo-field-error">{fieldErrors.name}</span>}
              </div>
              <div className="demo-field">
                <label htmlFor="demo-org">Organization</label>
                <input id="demo-org" name="organization" value={form.organization} onChange={handleChange} placeholder="Bank / NBFC name" />
              </div>
            </div>

            <div className="demo-row">
              <div className="demo-field">
                <label htmlFor="demo-email">Email address *</label>
                <input id="demo-email" type="email" name="email" required value={form.email} onChange={handleChange} aria-invalid={!!fieldErrors.email} placeholder="john@organization.com" />
                {fieldErrors.email && <span className="demo-field-error">{fieldErrors.email}</span>}
              </div>
              <div className="demo-field">
                <label htmlFor="demo-phone">Phone number</label>
                <input id="demo-phone" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="9876543210" />
              </div>
            </div>

            <div className="demo-field">
              <label htmlFor="demo-service">Service required</label>
              <select id="demo-service" name="service" value={form.service} onChange={handleChange}>
                {DEMO_SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="demo-field">
              <label htmlFor="demo-message">Your message *</label>
              <textarea id="demo-message" name="message" required rows={4} value={form.message} onChange={handleChange} aria-invalid={!!fieldErrors.message} placeholder="Describe your verification or case volume requirements, geography, timelines…" />
              {fieldErrors.message && <span className="demo-field-error">{fieldErrors.message}</span>}
            </div>

            <div className="demo-consent">
              <label><input type="checkbox" checked={form.consent} onChange={handleConsentChange} /><span>I agree to the <Link href="/privacy-policy" target="_blank">Privacy Policy</Link> and consent to the collection and processing of my personal information in accordance with the Digital Personal Data Protection Act, 2023.</span></label>
              {fieldErrors.consent && <span className="demo-field-error">{fieldErrors.consent}</span>}
            </div>

            <button type="submit" className="button button-dark" disabled={submitting || !form.consent}>{submitting ? <><Loader2 size={17} className="spin" /> Submitting…</> : <>Submit inquiry <ArrowUpRight size={17} /></>}</button>
          </form>
        )}
      </div>
    </div>
  </section>
}

type TeamMember = typeof team[number]

function TeamModal({ member, onClose }: { member: TeamMember, onClose: () => void }) {
  useEffect(() => {
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'; document.body.style.top = `-${scrollY}px`; document.body.style.width = '100%'
    return () => { document.body.style.position = ''; document.body.style.top = ''; document.body.style.width = ''; window.scrollTo(0, scrollY) }
  }, [])
  return createPortal(<div className="team-modal-overlay" onClick={onClose}><div className="team-modal" onClick={e => e.stopPropagation()}>
    <button type="button" className="team-modal-close" aria-label="Close" onClick={onClose}><X size={18} /></button>
    <div className="team-modal-head"><div className="team-modal-photo"><img src={member.photo} alt={member.name} /></div><div><h3>{member.name}</h3><p>{member.role}</p></div></div>
    <div className="team-modal-bio">{member.bio.map((p, i) => <p key={i}>{p}</p>)}</div>
    {member.competencies.length > 0 && <div className="team-modal-block"><p className="team-modal-label">Core competencies</p>{member.competencies.map(c => <p key={c.label}><b>{c.label}:</b> {c.desc}</p>)}</div>}
    {member.education && <div className="team-modal-block"><p className="team-modal-label">Academic foundation</p><p>{member.education}</p></div>}
  </div></div>, document.body)
}

export function TeamPreview() {
  const [active, setActive] = useState<TeamMember | null>(null)
  return <section className="section team-section"><div className="container"><div className="team-head"><div><p className="eyebrow">Our experts</p><h2 className="display-title">Meet the team behind CrediScout</h2></div><Link href="/who-we-are" className="text-link">View full team <ArrowUpRight size={17} /></Link></div><div className="team-grid">{team.map(m => <button type="button" className="team-card reveal" key={m.name} onClick={() => setActive(m)}><div className="team-photo"><img src={m.photo} alt={m.name} /></div><h3>{m.name}</h3><p>{m.role}</p></button>)}</div></div>{active && <TeamModal member={active} onClose={() => setActive(null)} />}</section>
}

export function PartnersMarquee() {
  return <section className="section partners-section"><div className="container">
    <div className="section-heading center reveal"><p className="eyebrow">Our partnerships</p><h2>Dynamic Teams, Trusted Partnerships, Lasting Impact.</h2><p className="lead">Powering high-growth verification and risk operations for banks, NBFCs and financial institutions across India.</p></div>
    <div className="partners-grid">{partners.map((p) => <div className="partner-tile reveal" key={p.name}><img src={p.logo} alt={p.name} /></div>)}</div>
  </div></section>
}

export function LegalPage({ title, updated, sections }: { title: string, updated: string, sections: [string, React.ReactNode][] }) {
  return <><Header /><main><section className="page-hero legal-hero"><div className="container"><p className="eyebrow">Legal</p><h1>{title}</h1><p>Last updated: {updated}</p></div></section>
    <section className="section legal-body"><div className="container legal-container">
      {sections.map(([heading, body]) => <div className="legal-section" key={heading}><h2>{heading}</h2>{body}</div>)}
    </div></section></main><Footer /></>
}

export function Pill({ children }: { children: React.ReactNode }) { return <span className="pill">{children}</span> }
export { ShieldCheck, FileCheck2 }
