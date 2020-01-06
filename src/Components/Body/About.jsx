import React from "react";
import data from "../../data.json";

export const About = () => {
    return (
        <div className="container-fluid aboutcon text-left mt-n5" id="about">
            {data.Profiles.map((profile, i) => {
                return (
                    <div key={i}>
                        <div className="container pb-4">
                            <div className="row pb-5 align-items-center">
                                <div className="col-md-3">
                                    <img
                                        src={profile.imagesrc}
                                        alt={profile.name}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="col-md-9 mt-4">
                                    <h2 className="display-5 text-left text-white mt-5">
                                        About Me
                                    </h2>
                                    <p className="text-faded about-text">
                                        {profile.about}
                                    </p>
                                    <h2 className="display-5 text-left text-white mt-4 pt-5">
                                        Contact Details
                                    </h2>
                                    <div className="row text-left">
                                        <div className="col-md-8">
                                            <p className="about-text">
                                                {profile.name}
                                            </p>
                                            <p className="about-text">
                                                {profile.address}
                                            </p>
                                            <p className="about-text">
                                                {profile.email}
                                            </p>
                                        </div>
                                        <div className="col-md-4">
                                            <a
                                                className="btn btn-success py-3 px-5"
                                                href="/public/Resume.pdf"
                                                download
                                            >
                                                DOWNLOAD RÉSUMÉ
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
