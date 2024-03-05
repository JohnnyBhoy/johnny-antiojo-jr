import React from "react";

const WorkExperience = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden px-10">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            My Working Experiences
          </h1>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            In my 5 Years of experiences as Software Developer, below are the
            list of the companies that I have been working on,
          </p>
        </div>

        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                SALT Marketing
              </span>
              <span className="mt-1 text-gray-500 text-sm">
                August 2023 - Present
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Fullstack Software Developer
              </h2>
              <p className="leading-relaxed">
                Designed, Planned, Developed, Tested and Implement Web
                Application with a small cross-functional group. Optimize SEO
                and enhance google analytics report. Collaborated in project
                plannung and Worked with Dev Ops in creating CI CD Pipelines,
                Organized team in Sprint Planning and retrospective
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                PPD Part of Thermofisher
              </span>
              <span className="mt-1 text-gray-500 text-sm">
                Dec. 2020 - Aug 2023
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Web Developer
              </h2>
              <p className="leading-relaxed">
                Managed Database for Monthly Quota and Dashboard Table Quota
                Control.Managed Database for Monthly Quota and Dashboard Table
                Quota Control.Participated in Daily Meeting, Sprint Planning,
                Retrospective and Scrum.Collaborated for a new tool to be used
                by the Contact Center and Fieldwork Agent. Work together with
                the Project Managers in Quota Deliveries for the Dashboard
                Publications Build Analytical and Programming logic for the
                Business Needs of Data products.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">
                LR Tech Computer & Software Provider
              </span>
              <span className="text-sm text-gray-500">May 2019 - Dec 2020</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Full Stack Web Developer
              </h2>
              <p className="leading-relaxed">
                Planned, Design, Developer, Implemented and Enhance Information
                System Lead Developer of the Project with 2 Devs only, App
                Developed during pandemic like Covid Tracking Systems. Local web
                application and WLAN Server DB Set-up
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
