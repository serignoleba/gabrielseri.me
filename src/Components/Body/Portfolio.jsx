import React from "react";
import data from "../../data";

export const Portfolio = () => {
    return (
        <div className="container-fluid portfoliocon py-5" id="portfolio">
            <div className="container col-md-10 offset-md-1 py-5">
                <h1 className="text-center display-6 portfolio-h1 text-white">
                    SOME OF MY WORKS
                </h1>
                <div className="col-sm-4 offset-sm-4">
                    <h2 className="display-6 text-center font-weight-bold subtopic my-5 py-3 headtwo">
                        DEVELOPMENT
                    </h2>
                </div>
                {data.Developments.map(function(development) {
                    return (
                        <div>
                            <div className="row">
                                <div className="col-md-4 pt-4">
                                    <img
                                        src={development.imageSrc}
                                        alt={development.workName}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="col-md-1" />
                                <div className="col-md-7 text-left">
                                    <h1 className="text-white font-weight-bold mb-3">
                                        {development.workName}
                                    </h1>
                                    <h4 className="my-4 text-white">
                                        {development.description}
                                    </h4>
                                    <p className="my-4 text-white">
                                        <span className="subtopic">
                                            TOOLS:{" "}
                                        </span>
                                        {development.tools}
                                    </p>
                                    <div class="clearfix">
                                        <a
                                            href={development.gitUrl}
                                            className="btn btn-secondary float-left px-4 py-3"
                                        >
                                            GITHUB CODE
                                        </a>
                                        <a
                                            href={development.workUrl}
                                            className="btn btn-secondary float-right px-4 py-3"
                                        >
                                            LIVE VIEW
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <br /> <br />
                        </div>
                    );
                })}
                <h3 className="text-center font-weight-bold text-white">
                    VIEW ALL MY DEVELOPMENT PROJECTS ON &nbsp;
                    <a
                        href="http://www.github.com/serignoleba"
                        className="text-success"
                    >
                        GITHUB
                    </a>
                </h3>
                <br /> <br />
                <h2 className="display-6 text-center font-weight-bold subtopic my-5 headtwo py-3 col-sm-4 offset-sm-4">
                    DESIGN
                </h2>
                {data.Designs.map(function(design) {
                    return (
                        <div>
                            <div className="row align-items-center">
                                <div className="col-sm-4 order-sm-12">
                                    <img
                                        src={design.imageSrc}
                                        alt={design.workName}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="col-sm-1 order-sm-5" />
                                <div className="col-sm-7 order-sm-1 text-left">
                                    <h1 className="subtopic mb-3">
                                        {design.workName}
                                    </h1>
                                    <h4 className="my-4 text-white">
                                        {design.description}
                                    </h4>
                                    <p className="my-4 text-white">
                                        <span className="subtopic">
                                            TOOLS:{" "}
                                        </span>
                                        {design.tools}
                                    </p>
                                    <div className="text-left">
                                        <a
                                            href={design.Url}
                                            className="btn btn-secondary py-3 px-5"
                                        >
                                            VIEW
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <br /> <br />
                        </div>
                    );
                })}
                <h3 className="text-center font-weight-bold text-white mb-5">
                    VIEW ALL MY DESIGN PROJECTS ON &nbsp;
                    <a
                        href="https://dribbble.com/SeriGabriel"
                        className="text-success"
                    >
                        DRIBBBLE
                    </a>
                </h3>
            </div>
        </div>
    );
};
