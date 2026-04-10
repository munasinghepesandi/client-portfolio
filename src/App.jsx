
import {
  ArrowRight,
  Code2,
  ExternalLink,
  Globe,
  GraduationCap,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Sprout,
  Tractor,
} from 'lucide-react';

const skills = [
  'React & Vite',
  'Node.js APIs',
  'Tailwind CSS',
  'MongoDB & SQL',
  'UI/UX Prototyping',
  'Performance Optimization',
];

const farmingWork = [
  {
    title: 'Nai Miris Cultivation',
    details:
      'Growing and maintaining high-quality pepper crops with seasonal planning, irrigation control, and soil management.',
  },
  {
    title: 'Sustainable Farm Practices',
    details:
      'Applying low-waste and eco-conscious methods to improve yield consistency while preserving soil health.',
  },
  {
    title: 'Farm-to-Market Workflow',
    details:
      'Managing harvesting timelines, quality checks, and delivery coordination for reliable market supply.',
  },
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

function App() {
  const currentYear = new Date().getFullYear();

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

      <header className="sticky top-0 z-30 border-b border-emerald-500/20 bg-black/70 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-wide text-white">
            Malindu <span className="text-emerald-400">Ishan</span>
          </a>
          <ul className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <li><a className="hover:text-emerald-400" href="#skills">Skills</a></li>
            <li><a className="hover:text-emerald-400" href="#farming">Farming</a></li>
            <li><a className="hover:text-emerald-400" href="#projects">Projects</a></li>
            <li><a className="hover:text-emerald-400" href="#contact">Contact</a></li>
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:border-emerald-300 hover:bg-emerald-400/20"
          >
            Let&apos;s Talk <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-16 pt-12 md:pt-20">
        <section id="home" className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-emerald-300">
              <GraduationCap size={14} /> Birmingham City University Graduate
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Web Developer and
              <span className="block text-emerald-400">Software Engineer</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              I&apos;m Malindu Ishan, building performant digital experiences while staying rooted in real-world farming. I combine technical precision with practical discipline to deliver work that is reliable, scalable, and meaningful.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/10 to-zinc-900 p-6 shadow-[0_0_100px_-50px_rgba(16,185,129,0.6)]">
            <h2 className="mb-5 text-lg font-semibold text-white">At A Glance</h2>
            <div className="space-y-4 text-sm text-zinc-300">
              <div className="flex items-start gap-3"><Code2 className="mt-0.5 text-emerald-400" size={18} /> Digital systems with clean architecture.</div>
              <div className="flex items-start gap-3"><Leaf className="mt-0.5 text-emerald-400" size={18} /> Farming operations with sustainable focus.</div>
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 text-emerald-400" size={18} /> Based in Birmingham, available for remote work.</div>
            </div>
          </div>
        </section>

        <section id="skills" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-6 w-1 rounded bg-emerald-400" />
            <h2 className="text-2xl font-semibold text-white">Skills</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <article key={skill} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:-translate-y-1 hover:border-emerald-400/40">
                <p className="font-medium text-zinc-100">{skill}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="farming" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-6 w-1 rounded bg-emerald-400" />
            <h2 className="text-2xl font-semibold text-white">Farming Work</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {farmingWork.map((item) => (
              <article key={item.title} className="rounded-2xl border border-emerald-500/20 bg-black/60 p-5">
                <div className="mb-3 inline-flex rounded-full bg-emerald-500/15 p-2 text-emerald-300">
                  <Tractor size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-6 w-1 rounded bg-emerald-400" />
            <h2 className="text-2xl font-semibold text-white">Digital Projects</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {digitalProjects.map((project) => (
              <article key={project.title} className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-emerald-400/40">
                <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-300">
                  <Sprout size={14} /> {project.stack}
                </div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{project.summary}</p>
                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition group-hover:text-emerald-200"
                >
                  Explore <ExternalLink size={15} />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-6 rounded-3xl border border-emerald-500/20 bg-zinc-950/80 p-6 md:grid-cols-[0.85fr_1.15fr] md:p-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">Contact Box</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Have a project idea, collaboration, or opportunity? Send a message and I&apos;ll get back to you soon.
            </p>
            <div className="mt-6 space-y-3 text-sm text-zinc-300">
              <p className="flex items-center gap-2"><Mail size={16} className="text-emerald-300" /> malindu.ishan.dev@gmail.com</p>
              <p className="flex items-center gap-2"><Phone size={16} className="text-emerald-300" /> +44 0000 000000</p>
              <p className="flex items-center gap-2"><Globe size={16} className="text-emerald-300" /> github.com/malindu-ishan</p>
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
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
            >
              Send Message <ArrowRight size={16} />
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-emerald-500/20 bg-black/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 text-sm text-zinc-400 md:flex-row md:items-center">
          <p>© {currentYear} Malindu Ishan. All rights reserved.</p>
          <p className="inline-flex items-center gap-2 text-zinc-500">
            Built with care from code to crop <Leaf size={14} className="text-emerald-400" />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;