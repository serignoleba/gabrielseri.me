import React from "react";
import data from "../../data";

export const Footer = () => {
    return (
        <div className="container-fluid footercon py-5">
            <div className="container">
                {data.Profiles.map((profile, i) => {
                    return (
                        <div key={i}>
                            <div>
                                {profile.socials.map(function(social, i) {
                                    return (
                                        <div key={i}>
                                            <a
                                                href={social.twitter}
                                                className={social.twitterfa}
                                            >
                                                &nbsp;
                                            </a>
                                            <a
                                                href={social.github}
                                                className={social.githubfa}
                                            >
                                                &nbsp;
                                            </a>
                                            <a
                                                href={social.dribbble}
                                                className={social.dribbblefa}
                                            >
                                                &nbsp;
                                            </a>
                                            <a
                                                href={social.linkedin}
                                                className={social.linkedinfa}
                                            >
                                                &nbsp;
                                            </a>

                                            <p className="text-center text-secondary my-5">
                                                &copy; Copyright 2019 Gabriel
                                                Seri ● Design By &nbsp;
                                                <a
                                                    href={social.twitter}
                                                    className="resumelink"
                                                >
                                                    Gabriel Seri
                                                </a>
                                            </p>

                                            <div className="text-white text-center">
                                                <a
                                                    className="fas fa-chevron-circle-up"
                                                    href="#"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
