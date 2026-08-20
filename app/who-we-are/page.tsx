import { CTA, Footer, Header, SectionHeading } from '@/components/site'
import { PeopleHero } from '@/components/hero-experiences'
import { standards, coreValues } from '@/lib/constants'

const standardIcons: Record<string, string> = {
  'ISO 27001': '/standards/iso27001.png',
  'ISO 9001': '/standards/iso9001.png',
  'SOC 2': '/standards/soc2.png',
  'DPDP Ready': '/standards/dpdp.png',
}

export default function WhoWeArePage() { return <><Header/><main>
  <PeopleHero/>
  <section className="section"><div className="container split-section">
    <div><p className="eyebrow">The CrediScout perspective</p><h2 className="display-title">Built specifically for banking verification &amp; field investigations.</h2></div>
    <div>
      <p className="hero-text">CrediScout was built around a simple operational reality: financial institutions need more than a completed verification report. They need confidence in how the verification was conducted, what happened in the field, and how quickly the information reached their teams.</p>
      <p className="hero-text">Our banking-focused approach connects verification professionals, field executives, operations teams, and financial institutions through organized workflows supported by CrediScout CRM.</p>
      <p className="hero-text">We support verification requirements across credit cards, personal loans, business loans, home loans, auto and commercial vehicle loans, education loans, loans against property, KYC processes, and other retail asset products.</p>
      <p className="hero-text">Our capabilities extend across Customer Profile Validation (CPV), residence and business verification, tele verification, document verification, Fraud &amp; Risk Control (FRC/RCU), field investigations, dealer stockyard audits, mystery shopping, and banking document support.</p>
      <div className="standout-note"><span className="pulse"/><strong>Real field intelligence, made visible.</strong></div>
    </div>
  </div></section>
  <section className="section section-muted"><div className="container"><SectionHeading eyebrow="Security, quality & data protection" title="Security, quality & data protection standards" body="Banking verification involves sensitive customer, financial, and business information. CrediScout places information security, process quality, and responsible data handling at the core of its verification operations and technology."/><div className="standards-grid">{standards.map(([a,b])=><article className="standard-card reveal" key={a}><img src={standardIcons[a]} alt={a} width={40} height={40} className="standard-icon"/><h3>{a}</h3><p>{b}</p></article>)}</div></div></section>
  <section className="section"><div className="container values-grid">
    <div className="mission-card"><span className="eyebrow">Our mission</span><h2>Make banking verification more visible, controlled &amp; dependable.</h2><p>Our mission is to help financial institutions strengthen verification operations by combining capable field teams, structured processes, and technology that provides greater visibility from case initiation through final reporting. We aim to reduce operational friction, improve field accountability, and give financial institutions dependable information that supports better-informed risk and lending decisions.</p></div>
    <div className="vision-card"><span className="eyebrow">Our vision</span><h2>The technology backbone for modern banking field verification.</h2><p>Our vision is to create a connected verification ecosystem where financial institutions can manage complex field operations with greater transparency, speed, traceability, and operational control. We continue to evolve CrediScout CRM around the real challenges faced by banking verification teams, field operations, and risk functions.</p></div>
  </div></section>
  <section className="section section-muted"><div className="container"><SectionHeading eyebrow="What guides us" title="Our core values"/><div className="values-list">{coreValues.map(([a,b])=><article className="value-item reveal" key={a}><h3>{a}</h3><p>{b}</p></article>)}</div></div></section>
</main><CTA title="Banking verification should give you answers, not more follow-ups" body="Bring structured field expertise and smarter verification technology into your banking operations with CrediScout. From customer verification to complex field investigations, we help financial institutions gain greater visibility and control where it matters."/><Footer/></> }
