import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Award, Boxes, BriefcaseBusiness,
  CheckCircle2, Code2, Database, Github, Linkedin, Mail, Menu, Network,
  Workflow, Zap
} from "lucide-react";

const skills = [
  { group: "Data platforms", items: ["Databricks", "Snowflake", "Delta Lake", "Lakehouse architecture"] },
  { group: "Engineering", items: ["Python", "SQL", "PySpark", "ETL / ELT", "Data modeling"] },
  { group: "Delivery & architecture", items: ["Solution design", "Data quality", "Reconciliation", "Performance tuning", "Cloud data platforms"] },
  { group: "Analytics ecosystem", items: ["Power BI", "Tableau", "SSIS", "SSRS"] },
];

const projects = [
  {
    number: "01",
    category: "LAKEHOUSE ENGINEERING",
    title: "Modern Lakehouse Pipeline",
    description: "A production-style batch data platform that ingests raw source files, applies quality rules, and publishes curated analytics-ready datasets.",
    stack: ["Databricks", "PySpark", "Delta Lake", "Workflows"],
    outcome: "Demonstrates medallion architecture, incremental processing, data quality, and operational observability.",
    href: "https://github.com/",
    status: "Build this project",
    icon: Database,
  },
  {
    number: "02",
    category: "CLOUD DATA WAREHOUSING",
    title: "Snowflake Analytics Warehouse",
    description: "A cloud warehouse blueprint covering staged ingestion, dimensional modeling, incremental transformations, and governed consumption.",
    stack: ["Snowflake", "SQL", "Streams & Tasks", "dbt-ready"],
    outcome: "Demonstrates warehouse design, ELT patterns, cost awareness, and query optimization.",
    href: "https://github.com/",
    status: "Build this project",
    icon: Boxes,
  },
  {
    number: "03",
    category: "ENTERPRISE DATA INTEGRATION",
    title: "Metadata-Driven ETL Framework",
    description: "A reusable ingestion framework with configuration-driven source onboarding, audit metadata, restartability, and exception handling.",
    stack: ["Python", "SQL", "ETL", "Data Quality"],
    outcome: "Demonstrates reusable engineering patterns and the controls expected in enterprise pipelines.",
    href: "https://github.com/",
    status: "Build this project",
    icon: Workflow,
  },
  {
    number: "04",
    category: "FINANCIAL SERVICES",
    title: "Financial Reconciliation Platform",
    description: "A synthetic-data project that models sub-ledger to general-ledger integration, historical conversion, control totals, and reconciliation exceptions.",
    stack: ["Python", "SQL", "PySpark", "Reconciliation"],
    outcome: "Connects financial-services domain knowledge with practical data engineering and auditability.",
    href: "https://github.com/",
    status: "Build this project",
    icon: Network,
  },
  {
    number: "05",
    category: "STREAMING DATA",
    title: "Real-Time Event Processing",
    description: "An event-driven pipeline that validates, enriches, and aggregates streaming events with replayable processing and late-arriving data handling.",
    stack: ["Kafka", "Spark Structured Streaming", "Python"],
    outcome: "Demonstrates streaming fundamentals, reliability, and near-real-time data products.",
    href: "https://github.com/",
    status: "Build this project",
    icon: Zap,
  },
  {
    number: "06",
    category: "AI + DATA ENGINEERING",
    title: "Natural Language Data Assistant",
    description: "A governed assistant that translates business questions into approved analytics queries over a documented semantic layer.",
    stack: ["Python", "LLM", "RAG", "SQL"],
    outcome: "Demonstrates practical AI integration while keeping data access, validation, and governance in view.",
    href: "https://github.com/",
    status: "Build this project",
    icon: Code2,
  },
];

const experience = [
  {
    role: "Senior Data Engineer",
    company: "EY",
    period: "Current",
    details: [
      "Design and deliver enterprise data engineering solutions across financial-services environments.",
      "Lead technical delivery across client, onshore, and offshore teams, translating business needs into implementable data solutions.",
      "Build and support ETL, data conversion, reconciliation, and analytics capabilities across complex enterprise platforms.",
    ],
  },
  {
    role: "Earlier engineering experience",
    company: "Financial Services & Technology",
    period: "Previous",
    details: [
      "Developed data integration and reporting solutions using SQL Server, SSIS, SSRS, VB.NET, and BI platforms.",
      "Built a foundation in data warehousing, ETL delivery, solution design, and stakeholder collaboration.",
    ],
  },
];

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#home"><span className="brand-mark">AM</span><span>AM<span className="brand-dot">.</span></span></a>
        <div className="nav-links">
          <a href="#about">About</a><a href="#work">Projects</a><a href="#skills">Skills</a><a href="#experience">Experience</a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s connect <ArrowUpRight size={15}/></a>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="pulse"/> OPEN TO THE NEXT CHALLENGE</div>
          <p className="hero-kicker">SENIOR DATA ENGINEER <span>·</span> DATA PLATFORM BUILDER</p>
          <h1>Engineering data<br/>into <em>business value.</em></h1>
          <p className="hero-description">
            I&apos;m Amitkumar Mistry — a data engineer with 9+ years of experience designing
            enterprise data solutions, modernizing pipelines, and helping teams turn complex
            data into trusted insights.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17}/></a>
            <a className="button button-ghost" href="#about">More about me <ArrowDownRight size={17}/></a>
          </div>
          <div className="social-row">
            <a href="https://www.linkedin.com/in/amitkumar-mistry" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={12}/></a>
            <span className="social-separator"/>
            <span className="muted-social"><Github size={16}/> GitHub link coming soon</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Abstract data pipeline illustration">
          <div className="visual-glow"/>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="core-card">
            <div className="core-top"><span className="live-dot"/> DATA SYSTEMS / 001</div>
            <div className="core-icon"><Database size={36}/></div>
            <div className="core-title">DATA<span> → </span>INSIGHT</div>
            <div className="core-sub">Reliable · Scalable · Governed</div>
            <div className="core-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
          </div>
          <div className="float-tag tag-python"><span className="tag-dot violet"/> PYTHON</div>
          <div className="float-tag tag-spark"><span className="tag-dot orange"/> PYSPARK</div>
          <div className="float-tag tag-snow"><span className="tag-dot blue"/> SNOWFLAKE</div>
          <div className="float-tag tag-dbx"><span className="tag-dot lime"/> DATABRICKS</div>
          <div className="visual-caption">BUILDING THE MODERN DATA STACK <span>↗</span></div>
        </div>
        <div className="hero-bottom">
          <span>BASED IN THE UNITED STATES</span><span className="hero-bottom-line"/><span>FINANCIAL SERVICES · CLOUD DATA · ARCHITECTURE</span>
        </div>
      </section>

      <section className="metrics shell">
        <div><strong>9<span>+</span></strong><small>YEARS IN DATA & TECHNOLOGY</small></div>
        <div><strong>2</strong><small>GO-LIVE PROGRAMS CONTRIBUTED TO</small></div>
        <div><strong>3</strong><small>PRODUCTION RELEASES AT M&amp;T</small></div>
        <div><strong>∞</strong><small>CURIOSITY FOR WHAT&apos;S NEXT</small></div>
      </section>

      <section className="section shell" id="about">
        <SectionHeading eyebrow="01 / ABOUT" title="More than moving data." text="I bring together engineering depth, delivery experience, and a practical understanding of business problems."/>
        <div className="about-grid">
          <div className="about-main">
            <p className="about-lead">I build data solutions that are dependable in production — not just impressive in a demo.</p>
            <p>My experience spans enterprise ETL, data warehousing, historical data conversion, reconciliation, and analytics delivery. Working in financial services has taught me to value accuracy, traceability, resilient design, and clear communication as much as code.</p>
            <p>Today, I&apos;m deepening my hands-on work with modern lakehouse and cloud data platforms, with a focus on Databricks, Snowflake, Python, and PySpark.</p>
          </div>
          <div className="principles">
            <div><span>01</span><div><b>Architecture with purpose</b><small>Design for scale, reliability, governance, and maintainability.</small></div></div>
            <div><span>02</span><div><b>Engineering that ships</b><small>Turn requirements into tested, supportable data products.</small></div></div>
            <div><span>03</span><div><b>Leadership through clarity</b><small>Align stakeholders and teams around outcomes and ownership.</small></div></div>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="work">
        <div className="shell">
          <SectionHeading eyebrow="02 / SELECTED WORK" title="Projects built to show how I think." text="A practical roadmap of portfolio projects. Each card is a project brief until its repository is connected — no placeholder code is presented as completed work."/>
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return <article className="project-card" key={project.number}>
                <div className="project-top"><span>{project.number} / {project.category}</span><Icon size={21}/></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-outcome"><CheckCircle2 size={15}/><span>{project.outcome}</span></div>
                <div className="project-footer"><span className="project-status">{project.status}</span><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open GitHub for ${project.title}`}><ArrowUpRight size={18}/></a></div>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="section shell" id="skills">
        <SectionHeading eyebrow="03 / TOOLKIT" title="The tools behind the work." text="A blend of enterprise data foundations and modern platform skills. Project-level proficiency is best demonstrated in the linked repositories."/>
        <div className="skills-grid">
          {skills.map((skill) => <div className="skill-card" key={skill.group}><h3>{skill.group}</h3><div className="skill-items">{skill.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="shell">
          <SectionHeading eyebrow="04 / EXPERIENCE" title="Experience grounded in delivery." text="A concise view of the work behind the portfolio. Detailed dates and role history can be added from the final resume."/>
          <div className="timeline">
            {experience.map((item, i) => <div className="timeline-item" key={item.role}>
              <div className="timeline-marker">{i === 0 ? <BriefcaseBusiness size={17}/> : <Code2 size={17}/>}</div>
              <div className="timeline-content">
                <div className="timeline-meta"><span>{item.period}</span><span>{item.company}</span></div>
                <h3>{item.role}</h3>
                <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </div>
            </div>)}
          </div>
        </div>
      </section>

      <section className="section shell credentials">
        <div className="credential-icon"><Award size={25}/></div>
        <div><span className="eyebrow">05 / CONTINUOUS LEARNING</span><h2>Certified. Curious. Always building.</h2><p>Snowflake and Databricks certifications, backed by a commitment to deepen practical implementation experience through hands-on projects.</p></div>
        <div className="credential-tags"><span>Snowflake</span><span>Databricks</span></div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <span className="eyebrow">06 / CONTACT</span>
          <h2>Let&apos;s build something<br/><em>that matters.</em></h2>
          <p>Interested in data platforms, engineering leadership, or a challenging problem? I&apos;d be glad to connect.</p>
          <div className="contact-actions">
            <a className="button button-primary" href="https://www.linkedin.com/in/amitkumar-mistry" target="_blank" rel="noreferrer"><Linkedin size={17}/> Connect on LinkedIn <ArrowUpRight size={15}/></a>
            <a className="button button-ghost" href="mailto:hello@example.com"><Mail size={17}/> Email me</a>
          </div>
          <div className="contact-note">Replace hello@example.com with your preferred public email before publishing.</div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#home"><span className="brand-mark">AM</span><span>AM<span className="brand-dot">.</span></span></a>
        <span>© {new Date().getFullYear()} Amitkumar Mistry. Built with purpose.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
