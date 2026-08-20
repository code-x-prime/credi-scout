import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { CTA, CRMPreview, FAQ, Footer, Header, Pill, ProcessTimeline, PartnersMarquee, SectionHeading, ServicesGrid, TeamPreview, TrustStrip } from '@/components/site'
import { HomeHero } from '@/components/hero-experiences'

export default function Home() {
  return <><Header/><main><HomeHero/><TrustStrip/>
    <section className="section intro"><div className="container split-section">
      <div className="about-visual"><img src="/field-verification-executive.png" alt="CrediScout field verification executive"/></div>
      <div>
        <p className="eyebrow">Who we are</p>
        <h2 className="display-title">CrediScout: banking verification &amp; field investigation company</h2>
        <p className="hero-text">CrediScout provides banking verification and field investigation services designed around the operational requirements of banks, NBFCs, insurance companies, and other financial institutions.</p>
        <p className="hero-text">We combine experienced field operations with technology-enabled case management to help financial institutions validate customer information, manage verification cases, monitor field activity, and support informed risk decisions.</p>
        <p className="hero-text">Our capabilities cover Customer Profile Validation (CPV), address and tele verification, document verification, Fraud &amp; Risk Control (FRC/RCU), field investigations, and other banking support activities. CrediScout CRM further connects these activities through centralized case allocation, field tracking, evidence collection, status updates, and reporting.</p>
      </div>
    </div></section>
    <section className="section section-muted"><div className="container"><SectionHeading eyebrow="Core capabilities" title="Banking verification services built around real lending workflows" body="Every loan or credit application carries information that needs to be validated before financial institutions can make informed decisions. CrediScout supports critical banking verification requirements through structured field, tele, document, and investigation processes."/><ProcessTimeline/></div></section>
    <section id="services" className="section"><div className="container"><SectionHeading eyebrow="Capabilities" title="Verification services that bring clarity to every case" body="From a structured tele-check to a deeper field investigation, every service is designed to make the next decision more informed."/><ServicesGrid limit={6}/><div className="center-link"><Link href="/services" className="text-link">Explore all services <ArrowRight size={17}/></Link></div></div></section>
    <section className="dark-section"><div className="container"><SectionHeading light eyebrow="CrediScout CRM" title="Meet CrediScout CRM: built for banking field verification" body="A verification case should not disappear into the field and return only when the report is ready. CrediScout CRM gives financial institutions greater visibility across the field verification lifecycle — connecting case assignment, field execution, visit evidence, observations, status tracking, and reporting within a centralized technology-driven workflow."/><CRMPreview/></div></section>
    <section className="section"><div className="container split-section"><div><Pill><span className="pulse"/> Designed for decision confidence</Pill><h2 className="display-title">A clearer view of the work behind every decision.</h2><p className="hero-text">From a first call to a completed field investigation, CrediScout helps institutions create a consistent, reviewable operating rhythm.</p><div className="compact-proof"><Check size={16}/> Structured processes <Check size={16}/> Evidence-led decisions</div></div><div className="insight-panel"><span className="eyebrow">Operational signal</span><strong>Every touchpoint leaves a trail.</strong><div className="insight-bars"><i/><i/><i/><i/><i/></div><small>Case visibility · 98.4%</small></div></div></section>
    <TeamPreview/><PartnersMarquee/>
    <section className="section section-muted"><div className="container faq-layout"><div><SectionHeading eyebrow="Frequently asked questions" title="Make verification a dependable capability." body="A few things teams ask when they are ready to bring more control to field work."/></div><FAQ/></div></section>
  </main><CTA title="Your field verification shouldn't be a blind spot" body="Bring banking verification, field investigations, case tracking, evidence capture, and reporting into a more structured and visible workflow. Discover how CrediScout can support your institution's verification operations with field expertise and purpose-built CRM technology."/><Footer/></>
}
