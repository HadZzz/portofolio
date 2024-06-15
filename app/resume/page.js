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
      {/* skills */}
      <div className="row">
        <div className="col-lg-6">
          <div
            className="trm-skill-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Indonesia</h6>
                <span className="trm-label trm-label-light">Native</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p100" />
              </div>
            </div>
            <div>
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Japanese</h6>
                <span className="trm-label trm-label-light">10%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p10" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="trm-skill-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">English</h6>
                <span className="trm-label trm-label-light">40%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p40" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* skills end */}
      {/* skills */}
      <div className="row">
        <div className="col-lg-6">
          <div
            className="trm-skill-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Html</h6>
                <span className="trm-label trm-label-light">100%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p100" />
              </div>
            </div>
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">CSS</h6>
                <span className="trm-label trm-label-light">80%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p80" />
              </div>
            </div>
            <div>
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">SCSS</h6>
                <span className="trm-label trm-label-light">70%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p70" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="trm-skill-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">React js</h6>
                <span className="trm-label trm-label-light">70%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p70" />
              </div>
            </div>
            <div>
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Js</h6>
                <span className="trm-label trm-label-light">60%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p60" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* skills end */}
      {/* knowledge */}
      <div className="row">
        <div className="col-lg-12">
          {/* title */}
          <h5 className="trm-mb-40 trm-title-with-divider">
            knowledge <span data-number={2} />
          </h5>
        </div>
        <div className="col-lg-12">
          <div className="trm-card">
            <div className="row">
              <div className="col-lg-4">
                <ul className="trm-list">
                  <li>Canva</li>
                  <li>Figma</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="trm-list">
                  <li>Tailwind</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="trm-list">
                  <li>Bootstrap</li>
                  <li>React js</li>
                  <li>Next js</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* history */}
      <div className="row">
        <div className="col-lg-12">
          {/* title */}
          <h5 className="trm-mb-40 trm-title-with-divider">
            Employment History <span data-number={3} />
          </h5>
        </div>
        <div className="col-lg-6">
          {/* timeline */}
          <div className="trm-timeline">
            <div
              className="trm-timeline-item trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-timeline-mark-light" />
              <div className="trm-timeline-mark" />
              <div className="trm-a trm-timeline-content">
                <div className="trm-card-header">
                  <div className="trm-left-side">
                    <h6 className="trm-mb-15">Politeknik Pratama Mulia </h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                      <i>Sep 2022 - </i>
                    </div>
                  </div>
                </div>
                <div className="trm-mb-20">
                  Saya seorang mahasiswa di Politeknik Pratama Mulia dengan
                  jurusan Manajement Informatika. Saya berasal dari Solo.{" "}
                </div>
                <a
                  data-fancybox
                  href="files/diploma.jpg"
                  className="trm-label trm-label-color"
                >
                  Diploma <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          {/* timeline end */}
        </div>
      </div>
      {/* history end */}
    </TrueManLayout>
  );
};
export default Index;
