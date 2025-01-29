import { Fragment } from "react";
const Skills = () => {
  return (
    <Fragment>
      <LanguageSkills />
      <TechnicalSkills />
    </Fragment>
  );
};
export default Skills;

const LanguageSkills = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <h5 className="trm-mb-40 trm-title-with-divider">
          Language Skills
          <span data-number={2} />
        </h5>
      </div>
      <div className="col-lg-12">
        <div
          className="trm-skill-card trm-scroll-animation trm-active-el"
          data-scroll
          data-scroll-offset={40}
        >
          <div className="trm-mb-20">
            <div className="trm-skill-header">
              <h6>Indonesia</h6>
              <span className="trm-label trm-label-light">Native</span>
            </div>
          </div>
          <div className="trm-mb-20">
            <div className="trm-skill-header">
              <h6>Japanese</h6>
              <span className="trm-label trm-label-light">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechnicalSkills = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <h5 className="trm-mb-40 trm-title-with-divider">
          Technical Skills
          <span data-number={3} />
        </h5>
      </div>
      <div className="col-lg-4">
        <div
          className="trm-skill-card trm-scroll-animation trm-active-el"
          data-scroll
          data-scroll-offset={40}
        >
          <h6 className="trm-mb-20">Frontend Development</h6>
          <ul className="trm-mb-20">
            <li>HTML5 & Semantic Web</li>
            <li>CSS3 & SCSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Next.js</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4">
        <div
          className="trm-skill-card trm-scroll-animation trm-active-el"
          data-scroll
          data-scroll-offset={40}
        >
          <h6 className="trm-mb-20">UI/UX & Tools</h6>
          <ul className="trm-mb-20">
            <li>Responsive Design</li>
            <li>Modern UI Libraries</li>
            <li>Version Control (Git)</li>
            <li>Web Performance</li>
            <li>Cross-browser Compatibility</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4">
        <div
          className="trm-skill-card trm-scroll-animation trm-active-el"
          data-scroll
          data-scroll-offset={40}
        >
          <h6 className="trm-mb-20">Additional Skills</h6>
          <ul className="trm-mb-20">
            <li>RESTful APIs</li>
            <li>Web Animations</li>
            <li>Package Managers</li>
            <li>Build Tools</li>
            <li>Problem Solving</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
