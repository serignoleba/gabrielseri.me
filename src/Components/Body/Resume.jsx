import React from 'react';
import data from '../../data';

export const Resume = () => {
  return (
    <div className="container-fluid resumecon py-5" id="resume">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3">
            <h2 className="display-6 text-left font-weight-bold subtopic">
              EDUCATION
            </h2>
          </div>
          <div className="col-md-9">
            {data.Educations.map (function (education) {
              return (
                <div className="pb-3">
                  <h1 className="text-left">{education.school}</h1>
                  <h5 className="text-left">{education.degree}</h5> <br />
                </div>
              );
            })}
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-3">
            <h2 className="display-6 text-left text-black font-weight-bold subtopic">
              WORK
            </h2>
          </div>
          <div className="col-md-7">
            {data.Works.map (function (work) {
              return (
                <div className="pb-3">
                  <h1 className="text-left pb-1">
                    {work.company}
                  </h1>
                  <h5 className="text-left text-secondary">
                    ● {work.job}
                  </h5>
                  <h5 className="text-left pb-2 text-secondary">
                    {' '}● {work.duration}
                  </h5>

                  <p className="text-left text-secondary">{work.description}</p>
                  <br />
                </div>
              );
            })}

            <p className="text-left">
              A full list of my past work is in my <a
                className="resumelink"
                href="/public/Resume.pdf"
                download
              >
                Résumé
              </a>
            </p>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-3">
            <h2 className="display-6 text-left text-black font-weight-bold subtopic">
              SKILLS & TOOLS
            </h2>
          </div>

          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6 pb-5">
                <h1 className="text-left">SKILLS</h1>
                {data.Skills.map (function (skill) {
                  return (
                    <div>
                      <h4 className="text-left">{skill}</h4>
                    </div>
                  );
                })}

              </div>
              <div className="col-md-6 pb-3">
                <h1 className="text-left">TOOLS</h1>
                {data.Tools.map (function (tool) {
                  return <h4 className="text-left">{tool}</h4>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
