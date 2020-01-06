/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import data from '../../data.json';

export const Banner = () => {
  return (
    <div className="jumbotron">
      {data.Profiles.map ((profile, i) => {
        return (
          <div key={i}>
            <div>
              <h1 className="display-1 text-white mb-5">
                {profile.name}
              </h1>
              <h2 className="text-white mb-5">{profile.job}</h2>

              {profile.socials.map (function (social, i) {
                return (
                  <div key={i} className="mb-5">
                    <a href={social.twitter} className={social.twitterfa} />
                    <a href={social.github} className={social.githubfa} />
                    <a href={social.dribbble} className={social.dribbblefa} />
                    <a href={social.linkedin} className={social.linkedinfa} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="text-white text-center">
        <a className="fas fa-chevron-circle-down" href="#about" scroll />
      </div>
    </div>
  );
};
