import React from "react";
import { Banner } from "./Banner";
import { About } from "./About";
import { Resume } from "./Resume";
import { Portfolio } from "./Portfolio";
import ContactForm from "./ContactUs";

export const AppBody = () => {
    return (
        <div>
            <Banner />
            <About />
            <Resume />
            <Portfolio />
            <ContactForm />
        </div>
    );
};
