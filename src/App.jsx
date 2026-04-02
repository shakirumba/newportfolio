function App() {
  const experience = [
    {
      title: 'AE Solutions Inc.',
      desc: 'Full Stack Developer',
      period: '2024 - 2026',
    },
    {
      title: 'PayChat Inc',
      desc: 'Full Stack Developer',
      period: 'May 2023 - Aug 2024',
    },
    {
      title: 'SerVizio Online Solutions (Full-time)',
      desc: 'Team Leader',
      period: 'May 2022 - Aug 2022',
    },
    {
      title: 'University of Perpetual Help System DALTA',
      desc: 'Bachelor of Science in Information Technology',
      period: '2014 - 2021',
    },
  ]

  const projectHighlights = [
    {
      title: 'Back Office (Admin Side)',
      stack: ['React.js', 'MySQL', 'CodeIgniter 3', 'REST API', 'JWT'],
      desc: 'Developed the admin platform used to manage internal operations, including user and data workflows. I handled end-to-end feature delivery from requirement analysis to implementation and testing, optimized SQL queries for faster performance, and improved the responsive interface for a smoother day-to-day experience.',
    },
    {
      title: 'Loan Platform Web App',
      stack: ['React.js', 'Tailwind CSS', 'CodeIgniter 3', 'MySQL', 'Amazon S3'],
      desc: 'Built and enhanced a loan management web application focused on reliability and security. I improved backend architecture for better scalability, integrated secure authentication and protected file handling, connected assets to Amazon S3, and implemented automated email notifications to streamline communication.',
    },
  ]

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'CodeIgniter',
    'Laravel',
    'React',
    'React Hook Form',
    'React Query',
    'Redux',
    'JWT',
    'Node.js',
    'Express.js',
    'Tailwind',
    'Bootstrap',
    'jQuery',
    'MySQL',
    'Amazon S3',
    'Socket.io',
    'GitHub',
    'Slack',
    'XAMPP',
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="text-lg font-extrabold tracking-tight">
            Ralph<span className="text-cyan-300">Sison</span>
          </a>
          <nav className="flex items-center gap-5 text-sm text-slate-300">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="mx-auto w-full max-w-6xl px-4 pb-18 pt-24 sm:px-6">
          <span className="inline-flex rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-sm text-slate-300">
            Full Stack Web Developer
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            Hi, I am Ralph Gener Almazan Sison.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            I build modern web applications with
            practical features, clean interfaces, and reliable backend services.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-cyan-300 to-blue-400 px-4 py-2 font-semibold text-slate-900"
            >
              View Projects
            </a>
            <a
              href="/Ralph-Sison-Resume.pdf"
              download="Ralph-Sison-Resume.pdf"
              className="rounded-xl border border-cyan-300/60 bg-cyan-300/10 px-4 py-2 font-semibold text-cyan-200 hover:bg-cyan-300/20"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2 font-semibold"
            >
              Hire Me
            </a>
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Full Stack Web Developer with hands-on experience using PHP,
            CodeIgniter, React, Node.js, MySQL, Tailwind, and cloud tools like
            Amazon S3. I enjoy building useful systems, improving performance,
            and delivering scalable web applications.
          </p>
        </section>

        <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <h2 className="text-2xl font-bold">Experience & Education</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {experience.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-200">{item.desc}</p>
                <p className="mt-2 text-xs text-slate-400">{item.period}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <h2 className="text-2xl font-bold">Programming Projects</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {projectHighlights.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{project.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-3 text-slate-300">Let us build something useful together.</p>
          <div className="mt-4 flex flex-col gap-1.5 text-slate-200">
            <a className="underline underline-offset-3" href="mailto:sison.ralpha@gmail.com">
              sison.ralpha@gmail.com
            </a>
            <a className="underline underline-offset-3" href="tel:+639626699048">
              +63 945 273 3840
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-10">
        <div className="mx-auto w-full max-w-6xl px-4 text-sm text-slate-400 sm:px-6">
          &copy; {new Date().getFullYear()} Ralph Gener Almazan Sison. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
