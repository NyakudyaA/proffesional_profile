import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CloudCog,
  Database,
  Globe2,
  Layers3,
  Mail,
  Map,
  MapPin,
  Menu,
  Route,
  Satellite,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
  X,
} from 'lucide-react';
import './styles.css';

const navItems = ['home', 'about', 'skills', 'experience', 'projects', 'community', 'services', 'contact'];
const cvUrl = `${import.meta.env.BASE_URL}admire_cv.pdf`;

const skills = [
  { title: 'GIS Platforms', icon: Map, items: 'QGIS · GeoServer · QGIS Server · GeoNode · GeoNetwork · Lizmap · pycsw' },
  { title: 'Spatial Databases', icon: Database, items: 'PostgreSQL · PostGIS · Neo4j · PL/pgSQL · Spatial indexing · Data modelling' },
  { title: 'Cloud & Big Data', icon: CloudCog, items: 'Azure Databricks · Apache Spark · Sedona · Delta Lake · GeoParquet · Azure Functions · AKS' },
  { title: 'Spatial Engineering', icon: ServerCog, items: 'Python · PySpark · SQL · Bash · GDAL/OGR · Rasterio · PyQGIS · Django' },
  { title: 'Web Mapping', icon: Globe2, items: 'React · ArcGIS Maps SDK for JavaScript · deck.gl · MapLibre · WMS · Vector tiles' },
  { title: 'Remote Sensing', icon: Satellite, items: 'RADARSAT · Water-leak detection · Urban monitoring · Applied remote sensing · Raster workflows' },
  { title: 'Data Pipelines', icon: TerminalSquare, items: 'Distributed processing · ETL · Partitioning · Query tuning · Versioned spatial data' },
  { title: 'Open Source & Leadership', icon: ShieldCheck, items: 'InaSAFE · QGIS plugin QA · Technical mentoring · QGIS South Africa representation' },
];

const experience = [
  {
    period: 'FEB 2024 — PRESENT',
    role: 'GIS Engineer',
    company: 'Sand Technologies',
    copy: 'Engineering water and telecommunications platforms across React mapping, remote sensing, distributed spatial analytics, GeoServer services, and digital-twin backends. Reduced a daily enterprise batch workload by more than 70% through indexing, partitioning, and query refactoring.',
    tags: ['React', 'ArcGIS Server', 'Azure Databricks', 'PySpark', 'Sedona', 'Delta Lake', 'GeoServer', 'Neo4j'],
  },
  {
    period: '2014 — 2024',
    role: 'GIS Analyst',
    company: 'Kartoza',
    copy: 'Delivered GIS analysis and web platforms for environmental, municipal, and infrastructure programmes. Administered and optimised PostGIS databases, supported open-source GIS deployments, contributed to InaSAFE, and maintained the QGIS plugin QA pipeline.',
    tags: ['QGIS', 'PostGIS', 'GeoServer', 'QGIS Server', 'GeoNode', 'Lizmap', 'InaSAFE', 'Python'],
  },
  {
    period: 'CAREER FOUNDATION',
    role: 'GIS Technician',
    company: 'Afrispatial (now Kartoza)',
    copy: 'Built a foundation in spatial analysis, data management, and cartographic production across varied client projects before progressing into senior GIS engineering work.',
    tags: ['GIS Analysis', 'Data Management', 'Cartography', 'Client Delivery'],
  },
];

const projects = [
  {
    index: '01',
    title: 'Thames Water geospatial analytics',
    description: 'Architected terabyte-scale spatial pipelines in Azure Databricks, replacing Pandas workflows with PySpark and Sedona and cutting daily batch runtime by more than 70%.',
    tags: ['Azure Databricks', 'PySpark', 'Sedona', 'Delta Lake'],
    motif: 'rain',
  },
  {
    index: '02',
    title: 'Clean Water Digital Twin',
    description: 'Led backend development for a water-infrastructure digital twin, combining topologically clean PostGIS data with Django models, Neo4j network analysis, GeoServer, and deck.gl.',
    tags: ['PostGIS', 'Django', 'Neo4j', 'GeoServer', 'deck.gl'],
    motif: 'server',
  },
  {
    index: '03',
    title: 'Water network asset dashboard',
    description: 'Built a high-performance React dashboard for ArcGIS Server WMS and vector tiles, with measurement, attribute search, dynamic filtering, and interactive asset exploration.',
    tags: ['React', 'ArcGIS Server', 'WMS', 'Vector tiles'],
    motif: 'route',
  },
  {
    index: '04',
    title: 'Satellite water-leak detection',
    description: 'Delivered RADARSAT remote-sensing workflows for water-leak detection and urban monitoring, turning satellite outputs into actionable layers in an operational dashboard.',
    tags: ['RADARSAT', 'Remote sensing', 'Water analytics', 'Web GIS'],
    motif: 'pipeline',
  },
  {
    index: '05',
    title: 'QGIS Plugin Registry QA',
    description: 'Since March 2018, supporting quality assurance for plugins submitted to the official QGIS registry. The work covers plugin review and approval workflows, PyQGIS compatibility, metadata and packaging checks, dependency validation, and feedback to plugin authors before publication.',
    tags: ['QGIS', 'PyQGIS', 'Plugin QA', 'Python', 'Open source'],
    motif: 'pipeline',
    link: 'https://plugins.qgis.org/',
    linkLabel: 'QGIS Plugin Registry',
  },
  {
    index: '06',
    title: 'CyanoLakes satellite processing',
    description: 'From 2016 to 2018 at Kartoza, automated satellite-image processing for remote-sensing products that distinguish potentially harmful cyanobacteria from other algal blooms, then helped publish those products through an interactive web map.',
    tags: ['Python', 'GDAL', 'MapServer', 'OpenLayers', 'PostGIS', 'Remote sensing'],
    motif: 'rain',
    link: 'https://www.cyanolakes.com/',
    linkLabel: 'Visit CyanoLakes',
  },
  {
    index: '07',
    title: 'InaSAFE disaster-impact analysis',
    description: 'Contributed from August 2015 to May 2018 to quality assurance and spatial data-processing scripts for InaSAFE, an open-source disaster-impact analysis tool used through QGIS and web-based workflows to support practical contingency planning.',
    tags: ['InaSAFE', 'QGIS', 'Python', 'QA', 'Disaster resilience'],
    motif: 'route',
    link: 'https://inasafe.org/',
    linkLabel: 'Explore InaSAFE',
  },
];

const community = [
  {
    period: 'AUG 2017 — PRESENT',
    title: 'QGIS South Africa Country Representative',
    copy: 'Elected by the GIS community to facilitate collaboration, strengthen connections between local practitioners and the international QGIS project, and advocate for sustainable open-source GIS adoption in South Africa, including alignment with public-sector migration initiatives.',
    tags: ['Community leadership', 'QGIS', 'Open source', 'South Africa'],
  },
  {
    period: 'OPEN-SOURCE MAINTAINER',
    title: 'Docker GIS Images',
    copy: 'Maintains and contributes to production-focused container images for GeoServer, PostGIS, MapProxy, and related GIS services. Work spans image builds, configuration, upgrades, testing, documentation, issue resolution, and dependable deployment patterns for the wider geospatial community.',
    tags: ['Docker', 'GeoServer', 'PostGIS', 'MapProxy', 'CI', 'Documentation'],
    links: [
      ['GeoServer', 'https://github.com/kartoza/docker-geoserver'],
      ['PostGIS', 'https://github.com/kartoza/docker-postgis'],
      ['MapProxy', 'https://github.com/kartoza/docker-mapproxy'],
    ],
  },
];

const services = [
  ['Spatial data engineering', 'Design scalable spatial pipelines with PySpark, Sedona, Delta Lake, GeoParquet, and production-ready data models.'],
  ['Digital twins & network analytics', 'Model infrastructure networks across PostGIS and Neo4j for operational analysis and digital-twin applications.'],
  ['Web mapping applications', 'Build responsive React mapping products around ArcGIS services, vector tiles, MapLibre, and deck.gl.'],
  ['Spatial database engineering', 'Design, tune, and maintain PostgreSQL/PostGIS databases for analytical and operational workloads.'],
  ['GIS platform delivery', 'Publish and scale standards-based services with GeoServer, QGIS Server, GeoNode, and related open-source tools.'],
  ['Remote-sensing workflows', 'Transform satellite and raster data into decision-ready outputs for water, urban, and environmental monitoring.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-40% 0px -50% 0px' },
    );
    navItems.forEach(id => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  const goTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <main>
      <header className="site-header">
        <button className="brand" onClick={() => goTo('home')} aria-label="Go home">
          <span className="brand-mark"><MapPin size={17} /></span>
          <span>AN / GEO</span>
        </button>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(item => (
            <button key={item} onClick={() => goTo(item)} className={active === item ? 'active' : ''}>{item}</button>
          ))}
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav">
          {navItems.map(item => <button key={item} onClick={() => goTo(item)}>{item}</button>)}
        </nav>
      )}

      <section id="home" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span /> SENIOR GIS ENGINEER · 12+ YEARS</p>
          <h1>Admire<br /><em>Nyakudya.</em></h1>
          <p className="hero-role">Senior GIS Engineer</p>
          <p className="hero-statement">Engineering the spatial systems behind the map.</p>
          <p className="hero-intro">Cloud-scale spatial data pipelines, infrastructure digital twins, remote sensing, and web mapping for water, utilities, environmental monitoring, and resilient cities.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => goTo('projects')}>View selected work <ArrowDownRight size={18} /></button>
            <a className="text-link" href="mailto:addloe@gmail.com">Email me <ArrowUpRight size={17} /></a>
            <a className="text-link" href={cvUrl} download>Download CV <ArrowDownRight size={17} /></a>
          </div>
        </div>
        <div className="map-art" aria-label="Abstract geospatial system illustration">
          <div className="grid-lines" />
          <svg viewBox="0 0 620 620" role="img">
            <path className="contour contour-a" d="M76,396 C112,313 205,346 243,272 C280,201 233,108 350,90 C462,73 518,167 510,267 C500,393 419,463 326,506 C229,550 127,505 76,396Z" />
            <path className="contour contour-b" d="M128,389 C159,326 224,343 269,286 C307,237 282,161 365,147 C446,134 477,207 465,281 C450,369 390,411 319,451 C244,492 165,458 128,389Z" />
            <path className="contour contour-c" d="M192,379 C220,342 264,345 302,310 C339,275 329,219 382,209 C432,200 444,250 426,298 C402,358 363,379 316,408 C267,437 218,421 192,379Z" />
            <path className="route-line" d="M80 445 C172 390 194 472 282 359 C346 277 385 347 530 182" />
            <circle cx="80" cy="445" r="9" className="node" />
            <circle cx="282" cy="359" r="9" className="node" />
            <circle cx="530" cy="182" r="9" className="node hot" />
          </svg>
          <div className="coordinate-chip top">-26.2041° / 28.0473°</div>
          <div className="coordinate-chip bottom"><span className="pulse" /> PLATFORM ONLINE</div>
          <div className="map-stat"><strong>24/7</strong><span>spatial systems</span></div>
        </div>
      </section>

      <section className="statement-band">
        <div className="ticker">POSTGIS <span>✦</span> GEOSERVER <span>✦</span> AZURE DATABRICKS <span>✦</span> DIGITAL TWINS <span>✦</span> REMOTE SENSING <span>✦</span></div>
      </section>

      <section id="about" className="about section-shell section-pad">
        <div className="section-label">01 / ABOUT</div>
        <div className="about-grid">
          <div>
            <h2>Engineering location<br />into <em>decisions.</em></h2>
          </div>
          <div className="about-copy">
            <p className="large-copy">I’m a Senior GIS Engineer with more than 12 years of experience delivering geospatial and remote-sensing systems across water, utilities, environmental monitoring, and disaster resilience.</p>
            <p>I work across the full delivery chain—from distributed spatial processing and network modelling to OGC services and interactive React dashboards. I also contribute to InaSAFE and the QGIS plugin ecosystem, and represent QGIS in South Africa.</p>
            <div className="principles">
              <div><strong>Scale</strong><span>Move spatial analytics from desktop workflows to distributed cloud processing.</span></div>
              <div><strong>Model</strong><span>Connect spatial and graph data to represent real infrastructure networks.</span></div>
              <div><strong>Deliver</strong><span>Turn complex geospatial analysis into usable operational products.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section section-pad">
        <div className="section-shell">
          <div className="section-label light">02 / CAPABILITIES</div>
          <div className="section-heading-row">
            <h2>Spatial depth.<br /><em>Operational discipline.</em></h2>
            <p>A focused toolkit for spatial analytics, infrastructure modelling, service delivery, and web mapping.</p>
          </div>
          <div className="skills-grid">
            {skills.map(({ title, icon: Icon, items }, i) => (
              <article className="skill-card" key={title}>
                <span className="skill-number">0{i + 1}</span>
                <Icon size={26} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{items}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="experience section-shell section-pad">
        <div className="section-label">03 / EXPERIENCE</div>
        <div className="section-heading-row dark-text">
          <h2>Work built around<br /><em>reliable delivery.</em></h2>
          <p>More than a decade of progression from hands-on GIS delivery to cloud-scale spatial engineering.</p>
        </div>
        <div className="experience-list">
          {experience.map(item => (
            <article className="experience-card" key={item.role}>
              <div className="period">{item.period}</div>
              <div>
                <p className="company">{item.company}</p>
                <h3>{item.role}</h3>
                <p className="experience-copy">{item.copy}</p>
              </div>
              <div className="tag-list">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="projects section-pad">
        <div className="section-shell">
          <div className="section-label light">04 / SELECTED PROJECTS</div>
          <div className="section-heading-row">
            <h2>Systems that move<br />from <em>data to action.</em></h2>
            <p>Selected delivery highlights spanning water analytics, network modelling, web GIS, and satellite processing.</p>
          </div>
          <div className="project-list">
            {projects.map(project => (
              <article className="project-card" key={project.title}>
                <div className={`project-visual motif-${project.motif}`}>
                  <div className="project-index">{project.index}</div>
                  <ProjectMotif type={project.motif} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list light-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a href={project.link || '#contact'} target={project.link ? '_blank' : undefined} rel={project.link ? 'noreferrer' : undefined}>
                    {project.linkLabel || 'Discuss this work'} <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="community section-shell section-pad">
        <div className="section-label">05 / OPEN SOURCE & VOLUNTEERING</div>
        <div className="section-heading-row dark-text">
          <h2>Building the tools.<br /><em>Growing the community.</em></h2>
          <p>Long-term stewardship across QGIS leadership, plugin quality, and reusable container infrastructure.</p>
        </div>
        <div className="community-grid">
          {community.map(item => (
            <article className="community-card" key={item.title}>
              <p className="period">{item.period}</p>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <div className="tag-list">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              {item.link && <a className="community-link" href={item.link} target="_blank" rel="noreferrer">QGIS community <ArrowUpRight size={16} /></a>}
              {item.links && (
                <div className="community-links">
                  {item.links.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noreferrer">{label} <ArrowUpRight size={15} /></a>)}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="services section-shell section-pad">
        <div className="section-label">06 / SERVICES</div>
        <div className="section-heading-row dark-text">
          <h2>From spatial idea<br />to <em>operated platform.</em></h2>
          <p>Expertise across spatial architecture, data engineering, platform delivery, and user-facing applications.</p>
        </div>
        <div className="services-grid">
          {services.map(([title, copy], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact section-pad">
        <div className="section-shell contact-grid">
          <div>
            <div className="section-label light">07 / CONTACT</div>
            <h2>Have a spatial<br />challenge worth<br /><em>mapping?</em></h2>
          </div>
          <div className="contact-panel">
            <p>Open to senior GIS engineering, spatial data platform, digital twin, remote-sensing, and web-mapping opportunities.</p>
            <div className="contact-actions">
              <a href="mailto:addloe@gmail.com?subject=GIS%20Engineering%20Opportunity" className="contact-action">Email me <Mail /></a>
              <a href={cvUrl} className="contact-action secondary" download>Download CV <ArrowDownRight /></a>
            </div>
            <div className="socials">
              <a href="https://linkedin.com/in/mazano-gis-geek" target="_blank" rel="noreferrer"><BriefcaseBusiness /> LinkedIn</a>
              <a href="mailto:addloe@gmail.com"><Mail /> Email</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell"><span>© 2026 Admire Nyakudya</span><span>SENIOR GIS ENGINEER</span><button onClick={() => goTo('home')}>Back to top ↑</button></div>
      </footer>
    </main>
  );
}

function ProjectMotif({ type }) {
  if (type === 'route') return <Route size={130} strokeWidth={0.8} />;
  if (type === 'server') return <ServerCog size={130} strokeWidth={0.8} />;
  if (type === 'pipeline') return <Layers3 size={130} strokeWidth={0.8} />;
  return <CloudCog size={130} strokeWidth={0.8} />;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
