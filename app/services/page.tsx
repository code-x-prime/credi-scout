import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Header, Footer, SectionHeading, ServicesGrid, ProcessTimeline, CTA } from '@/components/site'
import { ServicesHero } from '@/components/hero-experiences'
import { ImagesScrollingAnimation } from '@/components/ui/images-scrolling-animation'
import { services } from '@/lib/constants'

const scrollProjects = services.map(([n, t, d, , img]) => ({ num: n as string, title: t as string, subtitle: d as string, src: img as string }))

export default function Services(){return <><Header/><main><ServicesHero/><section className="section"><div className="container"><SectionHeading eyebrow="Core capabilities" title="One operating standard across every case" body="From structured tele-checks to deeper field investigations, our services are designed around the decisions your teams need to make."/><ServicesGrid/></div></section><section className="section section-muted scroll-stack-section"><div className="container"><SectionHeading eyebrow="Every capability" title="Scroll through what we verify"/></div><ImagesScrollingAnimation projects={scrollProjects}/></section><section className="section"><div className="container"><SectionHeading eyebrow="How it works" title="From case upload to final report"/><ProcessTimeline/></div></section><section className="section services-image-band"><div className="container"><div className="services-image-copy"><p className="eyebrow">Evidence-led operations</p><h2 className="display-title">The field is where confidence gets built.</h2><Link href="/crm" className="button button-dark">See CrediScout CRM <ArrowRight size={17}/></Link></div></div></section></main><CTA title="Need a workflow built around your operation?"/><Footer/></>}
