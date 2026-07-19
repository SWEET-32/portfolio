import Link from "next/link";
import { SkillsView } from "@/views/skills/skills-view";

const BlankPageLayoutView = () => {
  return (
    <>
      {/* Home Section */}
      <main id="home" className="bg-[#f5f5f5]">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-6 md:grid-cols-2 md:gap-12 lg:px-8 lg:py-16">
          <div>
            <p className="text-[34px] font-medium text-neutral-800">Hi, I&apos;m Tanvir</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              CSE Undergraduate & Full-Stack Developer
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              Final-year CSE student at BRAC University, passionate about backend development and competitive programming.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
              >
                View my projects
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-base font-medium text-neutral-800 transition-colors hover:bg-neutral-100"
              >
                Download CV
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-neutral-300 pt-8">
              <div>
                <p className="text-5xl font-semibold text-neutral-900">3.78</p>
                <p className="mt-2 text-base text-neutral-600">CGPA / 4.00</p>
              </div>
              <div className="border-x border-neutral-300 px-4">
                <p className="text-5xl font-semibold text-neutral-900">1650</p>
                <p className="mt-2 text-base text-neutral-600">Codeforces Rating</p>
              </div>
              <div className="pl-4">
                <p className="text-5xl font-semibold text-neutral-900">04</p>
                <p className="mt-2 text-base text-neutral-600">Shipped Projects</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/image/sweer1.jpeg"
              alt="Portrait of Tanvir"
              className="mx-auto w-full max-w-[560px] rounded-[22px] object-cover shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            />
          </div>
        </section>
      </main>

      {/* Skill Section */}
      <SkillsView />

      {/* Experience Section */}
      <section id="experience" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 bg-[#f5f5f5]">
        <h2 className="text-4xl font-semibold text-neutral-900 mb-8">Experience</h2>
        <p className="text-neutral-600 text-lg">Your experience content goes here...</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-neutral-900 mb-8">Projects</h2>
        <p className="text-neutral-600 text-lg">Your projects content goes here...</p>
      </section>

      {/* Blog Section */}
      <section id="blog" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 bg-[#f5f5f5]">
        <h2 className="text-4xl font-semibold text-neutral-900 mb-8">Blog</h2>
        <p className="text-neutral-600 text-lg">Your blog content goes here...</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-neutral-900 mb-8">Contact</h2>
        <p className="text-neutral-600 text-lg">Your contact content goes here...</p>
      </section>
    </>
  );
};

export default BlankPageLayoutView;