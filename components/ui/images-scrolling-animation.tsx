interface ScrollProject {
  num: string
  title: string
  subtitle: string
  src: string
}

const CapabilityCard = ({ i, num, title, subtitle, src }: { i: number } & ScrollProject) => {
  return (
    <div className="capability-card">
      <div className="capability-copy">
        <span className="eyebrow">Capability {num}</span>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div className="capability-image">
        <img src={src} alt={title} />
        <span className="scroll-stack-index">{String(i + 1).padStart(2, '0')}</span>
      </div>
    </div>
  )
}

export function ImagesScrollingAnimation({ projects }: { projects: ScrollProject[] }) {
  return (
    <div className="capability-cards-grid">
      {projects.map((project, i) => (
        <CapabilityCard key={project.title} i={i} {...project} />
      ))}
    </div>
  )
}
