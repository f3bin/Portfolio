'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Menu, X, Code2, Layers3, Sparkles, Terminal, Globe2 } from 'lucide-react';

const skills = [
  { title: 'Frontend engineering', items: ['React.js', 'Angular', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Sass', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'State & data', items: ['Redux', 'Recoil', 'SWR', 'GraphQL'] },
  { title: 'Backend & AI tools', items: ['Node.js', 'MongoDB', 'Python', 'ChatGPT', 'Claude', 'OpenAI Codex', 'Prompt Engineering', 'AI-assisted Development', 'Vibe Coding'] }
];

const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } } };

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const nav = [['About', '#about'], ['Experience', '#experience'], ['Skills', '#skills'], ['Work', '#work']];

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Febin Joseph home"><span className="brand-mark">F.</span><span>FEBIN JOSEPH</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      {menuOpen && <div className="mobile-menu">{nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}<ArrowUpRight size={16}/></a>)}<a href="#contact" onClick={closeMenu}>Contact<ArrowUpRight size={16}/></a></div>}

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial="hidden" animate="visible" variants={fadeUp}><span className="status-dot" /> AVAILABLE FOR THE NEXT OPPORTUNITY</motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: .08 }}>Building digital<br/><span>experiences</span> that<br/>feel effortless<span className="period">.</span></motion.h1>
          <motion.p className="hero-lede" initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: .16 }}>Hey, I&apos;m Febin — a frontend developer with 3 years of experience building scalable, performant web applications and intuitive product experiences.</motion.p>
          <motion.div className="hero-actions" initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: .24 }}>
            <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17}/></a>
            <a className="text-link" href="#about">A little about me <ArrowDownRight size={16}/></a>
          </motion.div>
          <motion.div className="hero-socials" initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: .32 }}>
            <a href="https://github.com/f3bin" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a>
            <a href="https://linkedin.com/in/Febin-joseph" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a>
            <span className="social-caption">KERALA, INDIA</span>
          </motion.div>
        </div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .9, delay: .18 }}>
          <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/>
          <div className="visual-glow" />
          <div className="code-card">
            <div className="code-top"><div className="window-dots"><i/><i/><i/></div><span>febin.tsx</span><span className="code-lock">TSX</span></div>
            <div className="code-content"><div><span className="ln">01</span><span className="syntax-purple">const</span> <span className="syntax-blue">developer</span> = {'{'}</div><div><span className="ln">02</span>&nbsp;&nbsp;name: <span className="syntax-green">&apos;Febin Joseph&apos;</span>,</div><div><span className="ln">03</span>&nbsp;&nbsp;role: <span className="syntax-green">&apos;Frontend Engineer&apos;</span>,</div><div><span className="ln">04</span>&nbsp;&nbsp;focus: [</div><div><span className="ln">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-green">&apos;Craft&apos;</span>, <span className="syntax-green">&apos;Build&apos;</span>,</div><div><span className="ln">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-green">&apos;Improve&apos;</span></div><div><span className="ln">07</span>&nbsp;&nbsp;],</div><div><span className="ln">08</span>&nbsp;&nbsp;passion: <span className="syntax-orange">true</span></div><div><span className="ln">09</span>{'}'};</div><div className="code-cursor-line"><span className="ln">10</span><span className="syntax-purple">export default</span> developer;<span className="cursor"/></div></div>
            <div className="code-bottom"><span><span className="tiny-green"/> All systems creative</span><span>UTF-8&nbsp; · &nbsp;LF</span></div>
          </div>
          <div className="floating-chip chip-top"><Code2 size={15}/> Thoughtful code</div><div className="floating-chip chip-bottom"><Sparkles size={15}/> Pixel-conscious UI</div>
          <div className="visual-index">01 <span/> CREATIVE DEVELOPMENT</div>
        </motion.div>
        <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-strip"><div className="section-wrap strip-inner"><span>WHAT I BRING</span><p>Curiosity <b>✳</b> Craft <b>✳</b> Consistency <b>✳</b> Continuous learning</p><span className="strip-right">EST. IN CODE</span></div></section>

      <section className="section-wrap content-section about-section" id="about">
        <div className="section-kicker"><span>01 / ABOUT</span><span className="kicker-line"/></div>
        <div className="about-grid"><div><h2>Good interfaces<br/>start with <em>good thinking.</em></h2></div><div className="about-body"><p className="large-copy">I&apos;m a frontend developer with 3 years of experience building scalable web applications using React.js, Next.js and TypeScript.</p><p>At Webandcrafts, I&apos;ve led dashboard development and worked on complex admin systems and enterprise web applications. My work includes reusable component development, REST and GraphQL integrations, state management, performance optimization and SEO-friendly architecture.</p><p>I also bring full-stack experience with Node.js, MongoDB and GraphQL, and use AI-assisted development tools as part of my workflow. I enjoy mentoring junior developers and collaborating across teams to deliver maintainable products.</p><div className="about-signoff">Always learning. Always building. <span>↗</span></div></div></div>
        <motion.div className="principles" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ visible: { transition: { staggerChildren: 0.13 } } }}><motion.div variants={fadeUp}><span>01</span><Layers3/><h3>Thoughtful structure</h3><p>Reusable components and maintainable frontend architecture.</p></motion.div><motion.div variants={fadeUp}><span>02</span><Globe2/><h3>People-first UI</h3><p>Accessible, responsive interfaces that make sense to use.</p></motion.div><motion.div variants={fadeUp}><span>03</span><Terminal/><h3>Continuous growth</h3><p>Curiosity for new tools, better patterns and clean solutions.</p></motion.div></motion.div>
        <motion.div className="credentials" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}><div><span className="project-type">EDUCATION</span><h3>Bachelor of Computer Applications</h3><p>Bangalore University · 2018–2021 · CGPA 6.5</p></div><div><span className="project-type">CERTIFICATIONS</span><h3>Microsoft Technology Associate</h3><p>2021</p><h3>MERN Stack Certification</h3><p>Udemy · 2022</p></div></motion.div>
      </section>

      <section className="experience-band" id="experience"><div className="section-wrap content-section"><div className="section-kicker"><span>02 / EXPERIENCE</span><span className="kicker-line"/></div><div className="experience-heading"><h2>Where I&apos;ve<br/><em>made an impact.</em></h2><p>A growing journey in building for the web — learning through real products, collaboration and iteration.</p></div>
        <div className="timeline"><motion.div className="timeline-item" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }}><div className="timeline-date">JUN 2023 — PRESENT</div><div className="timeline-marker"><i/></div><div className="timeline-detail"><div className="timeline-top"><h3>Software Engineer <span>·</span> Webandcrafts</h3><span className="work-type">FULL-TIME</span></div><p>Built scalable React.js and Next.js applications with optimized performance and SEO-friendly architecture. Led dashboard development for complex admin systems and enterprise applications; implemented state management with Redux, Recoil and SWR; integrated REST and GraphQL APIs; and contributed through code reviews, refactoring and cross-functional collaboration.</p><div className="tag-row"><span>React.js</span><span>Next.js</span><span>TypeScript</span><span>Redux</span><span>Recoil</span><span>SWR</span><span>GraphQL</span><span>Tailwind CSS</span></div><small>Infopark, Kerala, India</small></div></motion.div>
          <motion.div className="timeline-item" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, delay: 0.12 }}><div className="timeline-date">JAN 2023 — MAY 2023</div><div className="timeline-marker"><i/></div><div className="timeline-detail"><div className="timeline-top"><h3>Web Developer Intern <span>·</span> Camerinfolks</h3><span className="work-type">INTERNSHIP</span></div><p>Built foundational full-stack development experience, working with the MERN stack and strengthening practical skills across frontend and backend development.</p><div className="tag-row"><span>JavaScript</span><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span></div><small>India</small></div></motion.div></div>
      </div></section>

      <section className="section-wrap content-section skills-section" id="skills"><div className="section-kicker"><span>03 / TOOLKIT</span><span className="kicker-line"/></div><div className="skills-heading"><h2>The tools behind<br/><em>the craft.</em></h2><p>A practical toolkit for creating modern web applications — and a willingness to learn what the problem needs.</p></div><div className="skill-grid">{skills.map((group, i) => <motion.div className="skill-card" key={group.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: i * 0.12 }}><div className="skill-card-top"><span>0{i + 1}</span><ArrowUpRight size={17}/></div><h3>{group.title}</h3><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div></motion.div>)}</div></section>

      <section className="work-section" id="work"><div className="section-wrap content-section"><div className="section-kicker"><span>04 / SELECTED WORK</span><span className="kicker-line"/></div><div className="work-heading"><h2>Real work.<br/><em>Real stories.</em></h2><a className="text-link" href="https://github.com/f3bin" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={16}/></a></div><motion.div className="project-list" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={{ visible: { transition: { staggerChildren: 0.16 } } }}>
          <motion.article className="project-row" variants={fadeUp}><span className="project-number">01</span><div className="project-main"><span className="project-type">FULL-STACK WEB APPLICATION</span><h3>Soulmates Matrimony</h3><p>A matrimonial platform where users can discover connections, manage profiles, exchange messages through non-real-time chat and upload profile photos. Includes APIs for profile management, messaging and user interactions.</p><div className="tag-row"><span>React</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>GraphQL</span></div><small>Project details from resume · Repository/demo link not supplied</small></div><span className="project-arrow" aria-hidden="true"><ArrowUpRight size={23}/></span></motion.article>
          <motion.article className="project-row" variants={fadeUp}><span className="project-number">02</span><div className="project-main"><span className="project-type">CURRENCY EXCHANGE PLATFORM</span><h3>Currency Exchange Admin Dashboard</h3><p>A currency exchange portal with real-time exchange-rate visibility, alongside an admin dashboard for transaction monitoring, user-request management and currency-rate updates.</p><div className="tag-row"><span>React.js</span><span>Recoil</span><span>SWR</span><span>Node.js</span><span>GraphQL</span></div><small>Project details from resume · Repository/demo link not supplied</small></div><span className="project-arrow" aria-hidden="true"><ArrowUpRight size={23}/></span></motion.article>
          <motion.article className="project-row" variants={fadeUp}><span className="project-number">03</span><div className="project-main"><span className="project-type">FULL-STACK PRODUCT</span><h3>Full-Stack Resume Builder</h3><p>A resume builder that lets users create, customize, preview and download professional resumes. Features JWT authentication, bcrypt password security, multiple templates, auto-save, a live editor and PDF export.</p><div className="tag-row"><span>Next.js</span><span>React</span><span>TypeScript</span><span>Tailwind CSS</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>html2pdf.js</span></div><small>Project details from resume · Repository/demo link not supplied</small></div><span className="project-arrow" aria-hidden="true"><ArrowUpRight size={23}/></span></motion.article>
        </motion.div></div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="section-kicker"><span>05 / CONTACT</span><span className="kicker-line"/></div><div className="contact-content"><div><span className="contact-overline">HAVE A GOOD ONE IN MIND?</span><h2>Let&apos;s make<br/><em>something matter.</em></h2></div><div className="contact-right"><p>I&apos;m always open to conversations about interesting products, frontend engineering and opportunities to build better things together.</p><a className="email-link" href="mailto:febinj14.work@gmail.com">febinj14.work@gmail.com <ArrowUpRight size={19}/></a><p className="contact-phone"><a href="tel:+919048010125">+91 90480 10125</a></p><div className="contact-socials"><a href="https://linkedin.com/in/Febin-joseph" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14}/></a><a href="https://github.com/f3bin" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a></div></div></div><footer><a className="brand" href="#top"><span className="brand-mark">F.</span><span>FEBIN JOSEPH</span></a><span>DESIGNED WITH INTENTION · BUILT WITH CODE</span><a href="#top">BACK TO TOP ↑</a><span>© {new Date().getFullYear()} FEBIN JOSEPH</span></footer></div></section>
    </main>
  );
}
