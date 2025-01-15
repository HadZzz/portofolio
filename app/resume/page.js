"use client";
import { context } from "@/context/context";
import TrueManLayout from "@/layout/TrueManLayout";
import { useContext, useEffect } from "react";
const Index = () => {
  const { banner_image_function, page_info_function } = useContext(context);
  useEffect(() => {
    banner_image_function("/img/banner2.jpg");
    page_info_function("My Skills<br>and History", "resume", "resume");
  }, []);
  return (
    <TrueManLayout>
      {/* Technical Skills */}
      <div className='row'>
        <div className='col-lg-6'>
          <div
            className='trm-skill-card trm-scroll-animation trm-active-el'
            data-scroll
            data-scroll-offset={40}
          >
            <div className='trm-mb-40'>
              <div className='trm-skill-header'>
                <h6 className='trm-mb-15'>Frontend Development</h6>
              </div>
              <div className='trm-mb-20'>
                <div className='trm-skill-header'>
                  <h6 className='trm-mb-15'>React.js</h6>
                  <span className='trm-label trm-label-light'>80%</span>
                </div>
                <div className='trm-progressbar-frame'>
                  <div className='trm-progressbar p80' />
                </div>
              </div>
              <div className='trm-mb-20'>
                <div className='trm-skill-header'>
                  <h6 className='trm-mb-15'>Next.js</h6>
                  <span className='trm-label trm-label-light'>75%</span>
                </div>
                <div className='trm-progressbar-frame'>
                  <div className='trm-progressbar p75' />
                </div>
              </div>
              <div className='trm-mb-20'>
                <div className='trm-skill-header'>
                  <h6 className='trm-mb-15'>HTML/CSS</h6>
                  <span className='trm-label trm-label-light'>90%</span>
                </div>
                <div className='trm-progressbar-frame'>
                  <div className='trm-progressbar p90' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div
            className='trm-skill-card trm-scroll-animation trm-active-el'
            data-scroll
            data-scroll-offset={40}
          >
            <div className='trm-mb-40'>
              <div className='trm-skill-header'>
                <h6 className='trm-mb-15'>Backend Development</h6>
              </div>
              <div className='trm-mb-20'>
                <div className='trm-skill-header'>
                  <h6 className='trm-mb-15'>PHP</h6>
                  <span className='trm-label trm-label-light'>75%</span>
                </div>
                <div className='trm-progressbar-frame'>
                  <div className='trm-progressbar p75' />
                </div>
              </div>
              <div className='trm-mb-20'>
                <div className='trm-skill-header'>
                  <h6 className='trm-mb-15'>MySQL</h6>
                  <span className='trm-label trm-label-light'>70%</span>
                </div>
                <div className='trm-progressbar-frame'>
                  <div className='trm-progressbar p70' />
                </div>
              </div>
              <div className='trm-mb-20'>
                <div className='trm-skill-header'>
                  <h6 className='trm-mb-15'>Firebase</h6>
                  <span className='trm-label trm-label-light'>65%</span>
                </div>
                <div className='trm-progressbar-frame'>
                  <div className='trm-progressbar p65' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Tools */}
      <div className='row'>
        <div className='col-lg-6'>
          <div
            className='trm-skill-card trm-scroll-animation trm-active-el'
            data-scroll
            data-scroll-offset={40}
          >
            <div className='trm-mb-40'>
              <div className='trm-skill-header'>
                <h6 className='trm-mb-15'>Mobile Development</h6>
              </div>
              <div className='trm-mb-20'>
                <div className='trm-skill-header'>
                  <h6 className='trm-mb-15'>React Native</h6>
                  <span className='trm-label trm-label-light'>70%</span>
                </div>
                <div className='trm-progressbar-frame'>
                  <div className='trm-progressbar p70' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div
            className='trm-skill-card trm-scroll-animation trm-active-el'
            data-scroll
            data-scroll-offset={40}
          >
            <div className='trm-mb-40'>
              <div className='trm-skill-header'>
                <h6 className='trm-mb-15'>Development Tools</h6>
              </div>
              <div className='trm-mb-20'>
                <div className='trm-skill-header'>
                  <h6 className='trm-mb-15'>Git & GitHub</h6>
                  <span className='trm-label trm-label-light'>75%</span>
                </div>
                <div className='trm-progressbar-frame'>
                  <div className='trm-progressbar p75' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Knowledge */}
      <div className='row'>
        <div className='col-lg-12'>
          <h5 className='trm-mb-40 trm-title-with-divider'>
            Technical Knowledge <span data-number={2} />
          </h5>
        </div>
        <div className='col-lg-12'>
          <div className='trm-card'>
            <div className='row'>
              <div className='col-lg-4'>
                <h6 className='trm-mb-20'>Design Tools</h6>
                <ul className='trm-list'>
                  <li>Figma - UI/UX Design</li>
                  <li>Canva - Graphic Design</li>
                </ul>
              </div>
              <div className='col-lg-4'>
                <h6 className='trm-mb-20'>Frontend</h6>
                <ul className='trm-list'>
                  <li>React.js & Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap 5</li>
                  <li>SCSS/SASS</li>
                </ul>
              </div>
              <div className='col-lg-4'>
                <h6 className='trm-mb-20'>Backend & Mobile</h6>
                <ul className='trm-list'>
                  <li>PHP & MySQL</li>
                  <li>Firebase</li>
                  <li>React Native</li>
                  <li>Git Version Control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience & Education */}
      <div className='row'>
        <div className='col-lg-12'>
          <h5 className='trm-mb-40 trm-title-with-divider'>
            Experience & Education <span data-number={3} />
          </h5>
        </div>
        <div className='col-lg-6'>
          <div className='trm-timeline'>
            {/* Freelance Experience */}
            <div
              className='trm-timeline-item trm-scroll-animation trm-active-el'
              data-scroll
              data-scroll-offset={40}
            >
              <div className='trm-timeline-mark-light' />
              <div className='trm-timeline-mark' />
              <div className='trm-a trm-timeline-content'>
                <div className='trm-card-header'>
                  <div className='trm-left-side'>
                    <h6 className='trm-mb-15'>Freelance Web Developer</h6>
                    <div className='trm-text-sm trm-accent-color trm-mb-15'>
                      <i>2023 - Present</i>
                    </div>
                  </div>
                </div>
                <div className='trm-mb-20'>
                  <ul className='trm-list'>
                    <li>
                      <strong>Sistem Manajemen Pesanan Restoran</strong>
                      <br />
                      - Meningkatkan efisiensi pemesanan sebesar 40%
                      <br />
                      - Implementasi sistem inventory real-time
                      <br />- Tech: PHP, MySQL, Bootstrap
                    </li>
                    <li>
                      <strong>Aplikasi Inventaris Hewan</strong>
                      <br />
                      - Tracking & reporting system
                      <br />
                      - Dashboard analytics
                      <br />- Tech: PHP, MySQL, jQuery
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education - Politeknik */}
            <div
              className='trm-timeline-item trm-scroll-animation trm-active-el'
              data-scroll
              data-scroll-offset={40}
            >
              <div className='trm-timeline-mark-light' />
              <div className='trm-timeline-mark' />
              <div className='trm-a trm-timeline-content'>
                <div className='trm-card-header'>
                  <div className='trm-left-side'>
                    <h6 className='trm-mb-15'>Politeknik Pratama Mulia</h6>
                    <div className='trm-text-sm trm-accent-color trm-mb-15'>
                      <i>Sep 2022 - Present</i>
                    </div>
                  </div>
                </div>
                <div className='trm-mb-20'>
                  <ul className='trm-list'>
                    <li>Jurusan Manajemen Informatika</li>
                    <li>
                      Project Leader untuk project team "Sistem Inventaris"
                    </li>
                    <li>Aktif di UKM Programming</li>
                    <li>Mengikuti workshop UI/UX Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-6'>
          {/* Online Courses */}
          <div className='trm-timeline'>
            {/* Dicoding */}
            <div
              className='trm-timeline-item trm-scroll-animation trm-active-el'
              data-scroll
              data-scroll-offset={40}
            >
              <div className='trm-timeline-mark-light' />
              <div className='trm-timeline-mark' />
              <div className='trm-a trm-timeline-content'>
                <div className='trm-card-header'>
                  <div className='trm-left-side'>
                    <h6 className='trm-mb-15'>Dicoding Academy</h6>
                    <div className='trm-text-sm trm-accent-color trm-mb-15'>
                      <i>2023</i>
                    </div>
                  </div>
                </div>
                <div className='trm-mb-20'>
                  <ul className='trm-list'>
                    <li>Front-End Web Development Learning Path</li>
                    <li>React Web Development</li>
                    <li>Progressive Web Apps</li>
                  </ul>
                </div>
                <a
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='trm-label trm-label-color'
                >
                  Certificates <i className='fas fa-arrow-right' />
                </a>
              </div>
            </div>

            {/* Udemy */}
            <div
              className='trm-timeline-item trm-scroll-animation trm-active-el'
              data-scroll
              data-scroll-offset={40}
            >
              <div className='trm-timeline-mark-light' />
              <div className='trm-timeline-mark' />
              <div className='trm-a trm-timeline-content'>
                <div className='trm-card-header'>
                  <div className='trm-left-side'>
                    <h6 className='trm-mb-15'>Udemy Courses</h6>
                    <div className='trm-text-sm trm-accent-color trm-mb-15'>
                      <i>2023</i>
                    </div>
                  </div>
                </div>
                <div className='trm-mb-20'>
                  <ul className='trm-list'>
                    <li>Modern JavaScript Development</li>
                    <li>React & Next.js Development</li>
                    <li>Full Stack Web Development</li>
                  </ul>
                </div>
                <a
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='trm-label trm-label-color'
                >
                  Certificates <i className='fas fa-arrow-right' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* history end */}
    </TrueManLayout>
  );
};
export default Index;
