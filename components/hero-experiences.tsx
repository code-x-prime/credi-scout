'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Activity, ArrowRight, Check, FileCheck2, MapPin, Radar, ShieldCheck, Smartphone, UserRoundCheck } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function HomeHero() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const root = ref.current
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.home-reveal', { y: 28, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out' })
      gsap.from('.hero-float', { y: 18, opacity: 0, duration: .8, stagger: .12, delay: .35, ease: 'power3.out' })
      const mm = gsap.matchMedia()
      mm.add('(min-width: 851px)', () => {
      const layers = gsap.utils.toArray<HTMLElement>('[data-depth]')
      const move = (e: MouseEvent) => {
        const r = root.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5; const y = (e.clientY - r.top) / r.height - .5
        layers.forEach((el) => gsap.to(el, { x: x * Number(el.dataset.depth), y: y * Number(el.dataset.depth), duration: .6, ease: 'power2.out', overwrite: true }))
        gsap.to('.hero-glow', { x: x * 30, y: y * 30, duration: .8, ease: 'power2.out', overwrite: true })
      }
      const leave = () => layers.forEach((el) => gsap.to(el, { x: 0, y: 0, duration: .8, ease: 'power3.out' }))
      root.addEventListener('mousemove', move); root.addEventListener('mouseleave', leave)
      return () => { root.removeEventListener('mousemove', move); root.removeEventListener('mouseleave', leave) }
      })
    }, root)
    return () => ctx.revert()
  }, [])
  return <section ref={ref} className="hero home-hero"><div className="hero-glow"/><div className="container hero-grid"><div className="hero-copy"><span className="pill home-reveal"><span className="pulse"/> Banking verification & field investigation</span><h1 className="home-reveal">Banking verification &amp; field investigation solutions for <em>smarter risk decisions.</em></h1><p className="hero-text home-reveal">CrediScout helps banks, NBFCs, and financial institutions manage banking verification and field investigation through structured processes and a technology-driven CRM. From case allocation and field visits to evidence capture and reporting, we bring greater visibility and control to verification operations.</p><div className="hero-actions home-reveal"><Link href="/crm#demo" className="button button-green">Request a Demo <ArrowRight size={17}/></Link><Link href="/crm#demo" className="text-link">Talk to Our Experts <ArrowRight size={17}/></Link></div><div className="hero-proof home-reveal"><Check size={16}/> Built around real lending workflows</div></div><div className="hero-stage" aria-label="Interactive verification operations visual"><div className="stage-grid" data-depth="2"/><div className="hero-glow" data-depth="10"/><div className="stage-map" data-depth="4"><span className="map-route"/><span className="map-pin pin-a"><MapPin size={17}/></span><span className="map-pin pin-b"><MapPin size={17}/></span><span className="map-pin pin-c"><MapPin size={17}/></span></div><div className="hero-dashboard" data-depth="6"><div className="dashboard-bar"><span className="crm-logo">C</span><b>CrediScout CRM</b><span className="live-dot"><Activity size={13}/> Live operations</span></div><div className="dashboard-main"><div><small>CASE STATUS</small><strong>Verification in progress</strong><div className="progress"><span/></div><div className="dashboard-meta"><span><Radar size={14}/> GPS verified</span><span>68% complete</span></div></div><div className="mini-map"><span className="mini-cross"/><span className="mini-pin"><MapPin size={19}/></span></div></div><div className="dashboard-row"><div><small>FIELD VISIT</small><b>Koramangala, Bengaluru</b><span>Today · 10:42 AM</span></div><div><small>EVIDENCE</small><b>12 items captured</b><span className="success"><Check size={13}/> Ready for review</span></div></div></div><div className="hero-float float-status"><span className="icon-box"><ShieldCheck size={17}/></span><div><small>Risk signal</small><b>Low risk</b></div></div><div className="hero-float float-gps"><span className="icon-box green-icon"><MapPin size={17}/></span><div><small>Location</small><b>Verified</b></div></div><div className="hero-float float-report"><span className="icon-box"><FileCheck2 size={17}/></span><div><small>Report</small><b>Evidence ready</b></div></div></div></div></section>
}

export function PeopleHero() {
  return <section className="page-hero people-hero"><div className="container people-hero-grid"><div className="page-hero-copy"><p className="eyebrow">Who we are</p><h1>Built specifically for banking verification & field investigations.</h1><p>CrediScout brings structure, visibility, and accountability to the work that happens between an application and a confident decision.</p></div><div className="people-visual"><Image src="/about-professional.jpg" alt="CrediScout verification professional" fill sizes="(max-width: 850px) 100vw, 52vw"/><div className="image-wash"/><div className="image-card card-top"><span className="success"><Check size={13}/> GPS Verified</span><b>Case assigned</b></div><div className="image-card card-bottom"><Smartphone size={17}/><div><small>Visit recorded</small><b>Evidence synced</b></div></div></div></div></section>
}

const workflow = ['Customer', 'Profile validation', 'Address', 'Tele', 'Documents', 'Field investigation', 'Risk control', 'Final report']
export function ServicesHero() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const isVertical = window.matchMedia('(max-width: 850px)').matches
      const n = workflow.length
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: 'top 78%' },
        defaults: { ease: 'power2.out' },
      })
      tl.from('.workflow-node', { y: 15, opacity: 0, stagger: .08, duration: .45 })
        .fromTo('.workflow-fill', isVertical ? { scaleY: 0 } : { scaleX: 0 }, {
          [isVertical ? 'scaleY' : 'scaleX']: 1,
          transformOrigin: isVertical ? 'top' : 'left',
          duration: 1.6,
          ease: 'power1.inOut',
        }, '-=0.15')
        .to('.workflow-icon', {
          borderColor: 'var(--green)', backgroundColor: 'var(--green)', color: '#fff',
          duration: .35, stagger: { each: 1.6 / n, from: 'start' },
        }, '<')
        .call(() => {
          gsap.to('.workflow-pulse', {
            [isVertical ? 'top' : 'left']: '100%',
            duration: 3.2, ease: 'power1.inOut', repeat: -1,
          })
        })
    }, ref)
    return () => ctx.revert()
  }, [])
  return <section className="page-hero services-hero"><div className="container"><div className="services-hero-intro"><div><p className="eyebrow">Services</p><h1>Verification services designed around banking workflows.</h1></div><p>Every stage is connected, traceable, and designed to make the next decision more informed.</p></div><div ref={ref} className="workflow"><div className="workflow-fill"><span className="workflow-pulse"/></div>{workflow.map((step, i) => <div className="workflow-node" key={step}><span>{String(i + 1).padStart(2, '0')}</span><div className="workflow-icon">{i === 0 ? <UserRoundCheck size={17}/> : i === 7 ? <FileCheck2 size={17}/> : <ShieldCheck size={17}/>}</div><b>{step}</b></div>)}</div></div></section>
}

const PRODUCT_TABS = ['Overview', 'Cases', 'Field teams', 'Reports']
const PRODUCT_CONTENT: Record<string, { heading: string, stats: [string, string][] }> = {
  Overview: { heading: 'Good morning, team', stats: [['248', 'Active cases'], ['92%', 'On-time visits'], ['64', 'Reports ready']] },
  Cases: { heading: 'Case pipeline', stats: [['86', 'New today'], ['312', 'In review'], ['18', 'Escalated']] },
  'Field teams': { heading: 'Field team status', stats: [['54', 'On-site now'], ['12', 'Travelling'], ['6', 'Idle']] },
  Reports: { heading: 'Reporting queue', stats: [['41', 'Ready'], ['9', 'Processing'], ['2', 'Flagged']] },
}

export function CRMHero() {
  const ref = useRef<HTMLElement>(null)
  const [tab, setTab] = useState('Overview')
  const [stats, setStats] = useState(PRODUCT_CONTENT.Overview.stats)
  useEffect(() => { const root = ref.current; if (!root) return; const ctx = gsap.context(() => { gsap.from('.crm-hero-reveal', { y: 24, opacity: 0, stagger: .1, duration: .7, ease: 'power3.out' }); gsap.to('.crm-float', { y: -8, duration: 2.4, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: .3 }) }, root); return () => ctx.revert() }, [])
  useEffect(() => { setStats(PRODUCT_CONTENT[tab].stats) }, [tab])
  useEffect(() => {
    const id = setInterval(() => {
      setStats(prev => prev.map(([val, label]) => {
        const n = parseInt(val, 10)
        if (Number.isNaN(n)) return [val, label]
        return [String(Math.max(0, n + (Math.random() > 0.5 ? 1 : -1))) + (val.endsWith('%') ? '%' : ''), label]
      }))
    }, 2400)
    return () => clearInterval(id)
  }, [])
  return <section ref={ref} className="page-hero crm-hero product-hero"><div className="container product-hero-grid"><div className="page-hero-copy"><p className="eyebrow crm-hero-reveal">CrediScout CRM</p><h1 className="crm-hero-reveal">Your field verification. Connected. Visible. Controlled.</h1><p className="crm-hero-reveal">CrediScout CRM connects case assignment, field execution, visit evidence, observations, status tracking and reporting within a centralized technology-driven workflow.</p><Link href="#demo" className="button button-green crm-hero-reveal">Request a CRM Demo <ArrowRight size={17}/></Link></div><div className="product-stage"><div className="product-grid"/><div className="product-dashboard crm-hero-reveal"><div className="dashboard-bar"><span className="crm-logo">C</span><b>CrediScout CRM</b><span className="live-dot"><Activity size={13}/> Live</span></div><div className="product-dashboard-body"><div className="product-sidebar">{PRODUCT_TABS.map(t => <button type="button" key={t} className={t === tab ? 'active' : ''} onClick={() => setTab(t)}>{t}</button>)}</div><div className="product-content"><small>OPERATIONS OVERVIEW</small><h3>{PRODUCT_CONTENT[tab].heading}</h3><div className="product-stats">{stats.map(([val, label]) => <b key={label}>{val}<small>{label}</small></b>)}</div><div className="product-chart"><span/><span/><span/><span/><span/><span/><i/></div></div></div></div><div className="crm-float crm-float-one"><ShieldCheck size={17}/><span><small>Smart allocation</small><b>Case assigned</b></span></div><div className="crm-float crm-float-two"><MapPin size={17}/><span><small>GPS verified</small><b>Location captured</b></span></div><div className="crm-float crm-float-three"><FileCheck2 size={17}/><span><small>Report ready</small><b>Evidence complete</b></span></div></div></div></section>
}
