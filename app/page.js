'use client';

const resume = {
  name: "Alejandro De La Mora",
  role: "AI Solutions Architect & Engineer",
  contact: [
    { label: "Phone", value: "+1 437 243 3693", href: "tel:+14372433693" },
    { label: "Email", value: "alex@seshwithfriends.org", href: "mailto:alex@seshwithfriends.org" },
    { label: "LinkedIn", value: "linkedin.com/in/amorac", href: "https://www.linkedin.com/in/amorac/" },
    { label: "Website", value: "eloruga.com", href: "http://www.eloruga.com" },
    { label: "GitHub", value: "github.com/Oruga420", href: "https://github.com/Oruga420" },
  ],
  summary: [
    "AI Solutions Architect and Engineer with a proven track record of shipping over 120 GenAI applications to production using Python, AWS, and GCP.",
    "Expert in designing scalable Agentic Workflows and RAG architectures that drive operational efficiency, recently saving Assent over 20,000 man-hours annually.",
    "Skilled in bridging the gap between complex AI models and business utility, ensuring robust governance, security, and high user adoption.",
  ],
  expertise: [
    "Generative AI",
    "Agentic Workflows",
    "RAG Architecture",
    "Model Context Protocol (MCP)",
    "Python & JavaScript",
    "Next.js & Vercel",
    "AWS Bedrock",
    "Google Cloud Platform",
    "Salesforce Integration",
    "Prompt Engineering",
    "CI/CD & Agile",
    "Governance & Security",
  ],
  experience: [
    {
      company: "Assent",
      title: "AI Solutions Architect",
      location: "Canada",
      period: "February 2025 - Present",
      bullets: [
        "Architected and deployed secure GenAI stacks using Python and RAG, integrating directly with Salesforce and internal tools to solve compliance challenges.",
        "Saved the company over 20,000 man-hours in a single year by replacing repetitive operational tasks with custom Agentic Workflows.",
        "Drove internal AI adoption from 47% to 97% by implementing user-centric tools and governance frameworks.",
        "Built custom MCP servers to expose data and tools safely, ensuring auditable compliance in a regulated environment.",
      ],
    },
    {
      company: "Sesh | Ai Solutions",
      title: "AI Solutions Architect",
      location: "Toronto, Ontario",
      period: "November 2021 - Present",
      bullets: [
        "Designed the architecture for over 120 GenAI applications and 90+ chatbots, all in production phases for 30+ clients.",
        "Generated over $1 million in combined savings for clients through man-hour reduction and productivity gains via AI automation.",
        "Developed full-stack AI solutions using Next.js, Vercel, and Python, ensuring scalable delivery for small businesses.",
        "Led a community of 100+ members, teaching practical AI implementation and workflow automation.",
      ],
    },
    {
      company: "Online Business Systems",
      title: "Salesforce Consultant",
      location: "Toronto, Ontario",
      period: "June 2024 - November 2024",
      bullets: [
        "Implemented Salesforce Agentforce and Copilot-style experiences, wiring data access safely for enterprise clients.",
        "Defined prompts and actions for AI assistants, ensuring seamless integration into existing business workflows.",
      ],
    },
    {
      company: "Globalization Partners",
      title: "Salesforce Manager & AI Lead",
      location: "Ontario, Canada",
      period: "November 2018 - November 2023",
      bullets: [
        "Pioneered the company's first internal GenAI initiatives, building the 'GIA' chatbot and AI-assisted development workflows.",
        "Managed a Salesforce org with 1,000+ licenses, integrating AI tooling to support \"vibe coding\" patterns while maintaining compliance.",
        "Transitioned from Administrator to Manager, overseeing complex integrations and data models that laid the foundation for future AI scalability.",
      ],
    },
  ],
  education: [
    {
      school: "Universidad Marista de MAcrida",
      credential: "Ingenieria en Sistemas",
      period: "2004 - 2007",
    },
    {
      school: "Salesforce Certified AI Associate",
      credential: "Certification",
    },
    {
      school: "Salesforce Certified Administrator",
      credential: "Certification",
    },
  ],
};

function ContactCard({ contact }) {
  return (
    <aside className="contact-card">
      <h3>Contact</h3>
      <ul>
        {contact.map((item) => (
          <li key={item.label}>
            <span className="contact-label">{item.label}</span>
            <a href={item.href} rel="noreferrer" target="_blank">
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function ExperienceSection({ experience }) {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Work Experience</h2>
        <div className="scribble" aria-hidden="true" />
      </div>
      <div className="experience-list">
        {experience.map((role) => (
          <article key={role.company} className="card experience-card">
            <div className="experience-top">
              <div>
                <p className="eyebrow">{role.period}</p>
                <h3>{role.company}</h3>
                <p className="muted">
                  {role.title} · {role.location}
                </p>
              </div>
              <div className="sticker" aria-hidden="true">
                <span>⚡</span>
              </div>
            </div>
            <ul className="bullets">
              {role.bullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <main className="page">
      <div className="background-blob blob-1" aria-hidden="true" />
      <div className="background-blob blob-2" aria-hidden="true" />
      <div className="page-inner">
        <div className="actions no-print">
          <button onClick={handlePrint} className="primary">
            Download PDF
          </button>
        </div>

        <header className="hero">
          <div className="hero-main">
            <p className="eyebrow">Role</p>
            <h1>{resume.name}</h1>
            <p className="role">{resume.role}</p>
            <div className="summary-card">
              {resume.summary.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
          <ContactCard contact={resume.contact} />
        </header>

        <section className="section">
          <div className="section-header">
            <h2>Areas of Expertise</h2>
            <div className="scribble" aria-hidden="true" />
          </div>
          <div className="pill-grid">
            {resume.expertise.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </section>

        <ExperienceSection experience={resume.experience} />

        <section className="section">
          <div className="section-header">
            <h2>Education & Certifications</h2>
            <div className="scribble" aria-hidden="true" />
          </div>
          <div className="education-grid">
            {resume.education.map((edu, idx) => (
              <div key={idx} className="card education-card">
                <p className="eyebrow">{edu.period || "Credential"}</p>
                <h3>{edu.school}</h3>
                <p className="muted">{edu.credential}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
