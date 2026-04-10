import { useEffect, useState } from 'react';
import heroPhoto from './assets/profile-m.png';
import {
  ArrowRight,
  Award,
  Code2,
  ExternalLink,
  Globe,
  GraduationCap,
  Leaf,
  Mail,
  Menu,
  Phone,
  X,
} from 'lucide-react';

const introHighlights = [
  'BSc background from Birmingham City University',
  'Focused on modern frontend engineering and API integration',
  'Strong execution from concept to deployment',
];

const digitalProjects = [
  {
    title: 'Portfolio Platform',
    stack: 'React, Tailwind, Vite',
    summary:
      'A responsive portfolio system focused on clean storytelling, case-study sections, and conversion-ready contact flow.',
  },
  {
    title: 'Smart Farm Tracker',
    stack: 'Node.js, MongoDB, Charts',
    summary:
      'A dashboard concept to track crop cycles, irrigation dates, and harvest performance with simple data visualizations.',
  },
  {
    title: 'University Project Hub',
    stack: 'React, API Integration',
    summary:
      'A showcase for academic and freelance work featuring modular project cards and performance-focused code structure.',
  },
];

const successStories = [
  {
    title: 'Portfolio Experience Revamp',
    outcome:
      'Improved visual credibility and mobile responsiveness for stronger first impressions.',
    impact: 'Higher visitor engagement and clearer service communication.',
  },
  {
    title: 'Project Delivery Consistency',
    outcome:
      'Introduced structured workflows and modular UI components for faster iterations.',
    impact: 'Reduced rework and smoother client feedback cycles.',
  },
  {
    title: 'Performance-First Build Approach',
    outcome:
      'Optimized assets and component structure for faster loading across devices.',
    impact: 'Better UX on lower-bandwidth and mobile contexts.',
  },
];

function App() {
  const currentYear = new Date().getFullYear();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Intro & Education', href: '#intro-education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Success Stories', href: '#success-stories' },
    { label: 'Contact', href: '#contact' },
  ];

  const closeMenu = () => setMenuOpen(false);

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:malindu.ishan.dev@gmail.com?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050505] text-zinc-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-0 top-64 h-80 w-80 rounded-full bg-lime-500/10 blur-3xl" />
      </div>

      <header className="fixed left-0 right-0 top-0 z-30 border-b border-emerald-500/20 bg-black/70 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="text-lg font-semibold tracking-wide text-white">
            Malindu <span className="text-emerald-400">Ishan</span>
          </a>

          <ul className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="hover:text-emerald-400" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:border-emerald-300 hover:bg-emerald-400/20 sm:inline-flex"
          >
            Let&apos;s Talk <ArrowRight size={16} />
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="inline-flex rounded-lg border border-zinc-700 p-2 text-zinc-200 transition hover:border-emerald-400/50 hover:text-emerald-300 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {menuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
          >
            <div className="flex min-h-screen items-start justify-center px-4 pt-24">
              <div
                className="w-full max-w-sm rounded-2xl border border-emerald-500/30 bg-[#0a0a0a] p-5 shadow-[0_0_80px_-35px_rgba(16,185,129,0.8)]"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    Navigation
                  </p>
                  <button
                    type="button"
                    onClick={closeMenu}
                    className="rounded-lg border border-zinc-700 p-2 text-zinc-300 transition hover:border-emerald-400/60 hover:text-emerald-300"
                    aria-label="Close navigation menu"
                  >
                    <X size={16} />
                  </button>
                </div>

                <ul className="space-y-2 text-sm text-zinc-200">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className="block rounded-lg px-3 py-2 transition hover:bg-emerald-500/10 hover:text-emerald-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:border-emerald-300 hover:bg-emerald-400/20"
                >
                  Let&apos;s Talk <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-14 pt-28 sm:px-6 md:gap-16 md:pb-16 md:pt-32">
        <section
          id="home"
          className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center"
        >
          <div className="reveal space-y-7" data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-emerald-300">
              <Leaf size={14} /> Web & Software
            </div>

            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-bold leading-[0.95] text-white sm:text-6xl md:text-7xl">
                Malindu <span className="text-emerald-400">Ishan</span>
              </h1>
              <p className="max-w-2xl text-xl font-semibold text-zinc-200 sm:text-2xl md:text-3xl">
                Full Stack Software Engineer
              </p>
            </div>

            <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg">
              I design and build polished digital products with a clean black-and-green aesthetic, strong user experience, and a focus on performance and clarity.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#projects"
                className="rounded-full bg-emerald-400 px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-emerald-300 sm:text-left"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-zinc-700 px-5 py-3 text-center text-sm font-semibold text-zinc-100 transition hover:border-emerald-400 hover:text-emerald-300 sm:text-left"
              >
                Contact Me
              </a>
            </div>

            
          </div>

          <div
            className="reveal flex items-center justify-center"
            data-reveal
            style={{ transitionDelay: '120ms' }}
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="group relative rounded-full border-4 border-emerald-400/60 p-2 shadow-[0_0_110px_-30px_rgba(16,185,129,1)] transition-all duration-500 ease-out hover:scale-105 hover:border-emerald-300 sm:hover:scale-110">
                <img
                  src={heroPhoto}
                  alt="Malindu Ishan"
                  className="h-60 w-60 rounded-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110 sm:h-72 sm:w-72"
                />
              </div>
              
            </div>
          </div>
        </section>

        <section id="intro-education" className="reveal space-y-6" data-reveal>
          <div className="flex items-center gap-3">
            <span className="h-6 w-1 rounded bg-emerald-400" />
            <h2 className="text-2xl font-semibold text-white">Intro & Education</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="reveal rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6" data-reveal>
              <h3 className="text-xl font-semibold text-white">Professional Intro</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                I build modern, responsive websites and applications with a focus on smooth user journeys, maintainable code, and measurable business outcomes.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-zinc-200">
                {introHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article
              className="reveal rounded-2xl border border-emerald-500/20 bg-black/60 p-6"
              data-reveal
              style={{ transitionDelay: '100ms' }}
            >
              <div className="mb-3 inline-flex rounded-full bg-emerald-500/15 p-2 text-emerald-300">
                <GraduationCap size={18} />
              </div>
              <h3 className="text-xl font-semibold text-white">Education</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                Birmingham City University graduate with strong foundations in software engineering principles, problem solving, and practical development workflows.
              </p>
              <p className="mt-3 text-sm text-emerald-300">Birmingham, United Kingdom</p>
            </article>
          </div>
        </section>

        <section id="projects" className="reveal space-y-6" data-reveal>
          <div className="flex items-center gap-3">
            <span className="h-6 w-1 rounded bg-emerald-400" />
            <h2 className="text-2xl font-semibold text-white">Projects</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {digitalProjects.map((project, index) => (
              <article
                key={project.title}
                className="reveal group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-emerald-400/40"
                data-reveal
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-300">
                  <Code2 size={14} /> {project.stack}
                </div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{project.summary}</p>
                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 text-left text-sm font-semibold text-emerald-300 transition group-hover:text-emerald-200"
                >
                  Explore <ExternalLink size={15} />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="success-stories" className="reveal space-y-6" data-reveal>
          <div className="flex items-center gap-3">
            <span className="h-6 w-1 rounded bg-emerald-400" />
            <h2 className="text-2xl font-semibold text-white">Success Stories</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {successStories.map((story, index) => (
              <article
                key={story.title}
                className="reveal rounded-2xl border border-emerald-500/20 bg-zinc-900/60 p-5"
                data-reveal
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="mb-3 inline-flex rounded-full bg-emerald-500/15 p-2 text-emerald-300">
                  <Award size={16} />
                </div>
                <h3 className="text-lg font-semibold text-white">{story.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{story.outcome}</p>
                <p className="mt-3 text-sm font-medium text-emerald-300">{story.impact}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="reveal grid gap-6 rounded-3xl border border-emerald-500/20 bg-zinc-950/80 p-6 md:grid-cols-[0.85fr_1.15fr] md:p-8"
          data-reveal
        >
          <div>
            <h2 className="text-2xl font-semibold text-white">Contact Box</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Have a project idea, collaboration, or opportunity? Send a message and I&apos;ll get back to you soon.
            </p>
            <div className="mt-6 space-y-3 text-sm text-zinc-300">
              <p className="flex items-center gap-2 break-all">
                <Mail size={16} className="text-emerald-300" />
                malindu.ishan.dev@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-emerald-300" />
                +44 0000 000000
              </p>
              <p className="flex items-center gap-2 break-all">
                <Globe size={16} className="text-emerald-300" />
                github.com/malindu-ishan
              </p>
            </div>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-4">
            <label className="block">
              <span className="mb-1 block text-sm text-zinc-300">Your Name</span>
              <input
                required
                name="name"
                type="text"
                className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400"
                placeholder="Enter your name"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm text-zinc-300">Email Address</span>
              <input
                required
                name="email"
                type="email"
                className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400"
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm text-zinc-300">Message</span>
              <textarea
                required
                name="message"
                rows="5"
                className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400"
                placeholder="Tell me about your project..."
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300 sm:w-auto"
            >
              Send Message <ArrowRight size={16} />
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-emerald-500/20 bg-black/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-4 py-6 text-sm text-zinc-400 sm:px-6 md:flex-row md:items-center">
          <p>© {currentYear} P&M Technologies. All rights reserved.</p>
          <p className="inline-flex items-center gap-2 text-zinc-500">
            Built with care and focus <Leaf size={14} className="text-emerald-400" />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
