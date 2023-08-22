import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function PortfolioPage() {
  return (
    <div className="container">
      {/* <!--=============== NAVIGATION MENU ===============--> */}
      <div className="menu dark:bg-zinc-700">
        <a href="#welcome-section" className="menu-icon">
          <HomeIcon className="h-[25px]" />
        </a>
        <a href="#about" className="menu-icon">
          <UserIcon className="h-[25px]" />
        </a>
        <a href="#experience" className="menu-icon">
          <BriefcaseIcon className="h-[25px]" />
        </a>
        <a href="#contact" className="menu-icon">
          <EnvelopeIcon className="h-[25px]" />
        </a>
      </div>
      {/* <!--=============== MAIN "WINDOW" ===============--> */}
      <div className="portfolio">
        {/* <!--=============== HEADER SECTION ===============--> */}
        <section className="header">
          <img className="header-img" src="./images/Myself.jpg" alt="" />
          <h1>Ali Asghar Sedighian</h1>
          <h2>Frontend Developer</h2>
          <div className="detail flex flex-col gap-4 mt-4">
            <div className="detail-call flex gap-2 cursor-pointer">
              <PhoneIcon width="15px" />
              <a href="tel:00989036070804">(+98)903-6070804</a>
            </div>
            <div className="detail-mail flex gap-2 cursor-pointer">
              <EnvelopeIcon width="15px" />
              <p>
                <a href="mailto:as.sedighian@gmail.com">
                  as.sedighian@gmail.com
                </a>
              </p>
            </div>
            <div className="detail-location flex gap-2">
              <MapPinIcon width="15px" />
              <p>Tehran, IR</p>
            </div>
            <div className="detail-military-service flex">
              <p>Military Service: Served(2020-2022)</p>
            </div>
          </div>
          <div className="socials flex">
            <a
              href="https://www.linkedin.com/in/ali-asghar-sedighian-53b80b25b/"
              target="_blank"
              className="fab fa-linkedin-in"
              id="profile-link"
            >
              <img
                width="30px"
                src="http://localhost:3000/images/social/linkedin.png"
                alt=""
              />
            </a>

            <a
              href="https://github.com/aliasgharsedighian"
              target="_blank"
              className="fab fa-github"
            >
              <img
                width="30px"
                src="http://localhost:3000/images/social/githubicon.png"
                alt=""
              />
            </a>
          </div>
        </section>
        {/* <!--=============== CONTENT SECTION ===============--> */}
        <div className="content dark:bg-zinc-700">
          {/* <!--=============== HOME ===============--> */}
          <section className="content-card home" id="welcome-section">
            <h1>Hello, I am Ali Asghar Sedighian</h1>
            <a
              href=""
              className="cta mt-10 border border-slate-900 py-3 px-5 rounded-full bg-slate-900 text-white"
            >
              DownIoad CV
            </a>
          </section>
          {/* <!--=============== ABOUT ME ===============--> */}
          <section className="content-card about" id="about">
            <h1 className="font-bold text-[20px]">About me</h1>
            <div className="about-item about-me">
              <p>
                Front-End Developer. Passionate about learning and development
                with a desire to apply skills on a large development team. Eager
                to tackle more complex problems and continue to find ways to
                maximize user efficiency
              </p>
            </div>
            <div className="skills-education-container">
              <div className="about-item skills flex flex-col gap-4">
                <h1>Skills</h1>
                <div className="grid grid-cols-3 gap-3">
                  <span className="skill">HTML</span>
                  <span className="skill">Resp CSS</span>
                  <span className="skill">JavaScript</span>
                  <span className="skill">ReactJS</span>
                  <span className="skill">NextJS</span>
                  <span className="skill">TypeScript</span>
                  <span className="skill">Git</span>
                  <span className="skill">Restful API</span>
                  <span className="skill">TailwindCss</span>
                  <span className="skill">PWA</span>
                  <span className="skill">Sass</span>
                  <span className="skill">Jest</span>
                </div>
              </div>
              <div className="about-item languages flex flex-col gap-4">
                <h1>Education</h1>
                <p>Bachelor of Science</p>
                <p>Islamic Azad University of Parand</p>
                <div>
                  <p>2013-2018</p>
                </div>
                <h1>Languages</h1>

                <div className="language">
                  <p>english</p>
                  <span className="bar">
                    <span className="english"></span>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* <!--=============== EXPERIENCE ===============--> */}
          <section className="content-card experience" id="experience">
            <h1 className="font-bold text-[20px]">Experience</h1>
            <div className="timeline">
              <div className="timeline-items">
                <div className="timeline-item">
                  <div className="timeline-date">May 2023 - now</div>
                  <div className="timeline-content">
                    <h3>Rahyab payam gostaran</h3>
                    <p>Created crypto site and shopping site</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">Mar 2022 - Jun 2023</div>
                  <div className="timeline-content">
                    <h3>Kasbotech</h3>
                    <p>
                      Created two responsive Exchange site for this Company and
                      coding one App
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">May 2020 - Jan2022</div>
                  <div className="timeline-content">
                    <h3>Freelancer</h3>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">May 2019 - Mar 2020</div>
                  <div className="timeline-content">
                    <h3>AroosTajmahal</h3>
                    <p>
                      Design and Implemented a new site for this Company and
                      support for a limited time and Setting up an online store.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--=============== CONTACT ===============--> */}
          <section className="content-card contact" id="contact">
            <h1 className="font-bold text-[20px]">Contact</h1>
            <form className="form" id="form" action="">
              <div className="input-box">
                <input
                  type="text"
                  className="text-input"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  className="text-input"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="input-box">
                <input
                  type="subject"
                  className="text-input"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="input-box">
                <textarea
                  name="text"
                  className="message"
                  placeholder="Message..."
                ></textarea>
              </div>
              <div className="input-box">
                <input
                  type="submit"
                  className="submit-btn"
                  id="submit"
                  value="submit"
                />
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
