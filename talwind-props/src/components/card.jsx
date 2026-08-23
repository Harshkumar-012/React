import React from 'react'

function Card(props) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      {/* Navbar */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-2xl font-bold">
            Harsh<span className="text-indigo-500">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#home" className="transition hover:text-indigo-400">
              Home
            </a>
            <a href="#about" className="transition hover:text-indigo-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-indigo-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-indigo-400">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-indigo-400">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium transition hover:bg-indigo-700"
          >
            Let's Talk
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="flex min-h-screen items-center px-6 pt-20"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
          
          <div>
            <p className="mb-4 font-medium text-indigo-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl text-red-400">
              {props.name}
            </h1>

            <h2 className="mt-4 text-2xl text-slate-400 md:text-3xl">
              Full-Stack Developer
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-slate-400">
              I build modern, fast and user-friendly web applications.
              I specialize in creating beautiful digital experiences
              using modern web technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-indigo-600 px-6 py-3 font-medium transition hover:bg-indigo-700"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-slate-700 px-6 py-3 font-medium transition hover:border-indigo-500"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-indigo-600 opacity-20 blur-3xl" />

              <img
                src="https://res.cloudinary.com/y4czibgu/image/upload/v1785345904/profilephoto_iruncy.jpg"
                alt="Alex Morgan"
                className="relative h-64 w-64 rounded-full border-4 border-slate-800 object-cover md:h-80 md:w-80"
              />
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-medium text-indigo-400">About Me</p>

          <h2 className="mt-2 text-4xl font-bold">
            Turning ideas into digital experiences
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-slate-400">
            I'm a passionate developer who loves building modern,
            scalable and user-friendly web applications.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ["0.4+", "Years Experience"],
              ["5+", "Projects Completed"],
              ["30+", "Happy Clients"],
              ["10+", "Technologies"],
            ].map(([number, title]) => (
              <div
                key={title}
                className="rounded-xl border border-slate-800 bg-slate-950 p-6"
              >
                <h3 className="text-3xl font-bold text-indigo-400">
                  {number}
                </h3>
                <p className="mt-2 text-slate-400">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="font-medium text-indigo-400">My Skills</p>

            <h2 className="mt-2 text-4xl font-bold">
              Technologies I Work With
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Java",
              "Tailwind CSS",
              "Git",
              "Bootstrap",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:border-indigo-500"
              >
                <h3 className="text-lg font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="font-medium text-indigo-400">Portfolio</p>

            <h2 className="mt-2 text-4xl font-bold">
              Featured Projects
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Analytics Dashboard",
                description:
                  "A modern dashboard with charts, statistics and responsive layouts.",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "E-Commerce Website",
                description:
                  "A responsive online store with products, cart and checkout.",
                image:
                  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "SaaS Platform",
                description:
                  "A SaaS application with authentication, dashboard and team management.",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
              },
            ].map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 transition duration-300 hover:-translate-y-2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>

                  <a
                    href="#"
                    className="mt-6 inline-block text-indigo-400 hover:text-indigo-300"
                  >
                    View Project →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-medium text-indigo-400">Contact</p>

          <h2 className="mt-2 text-4xl font-bold">
            Let's Work Together
          </h2>

          <p className="mt-5 text-slate-400">
            Have a project in mind? I'd love to hear about it.
          </p>

          <form className="mt-10 space-y-5 text-left">
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 py-3 font-medium transition hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500">
          © 2026 Alex Morgan. All rights reserved.
        </div>
      </footer>
    </div>
  );
}



export default Card
