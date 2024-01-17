import React from 'react';
import classes from "@/components/App.module.scss";

const About = () => {

    return (
        <div>
            <p className={classes.icon}>
                {
                    __PLATFORM__ === 'desktop' ? 'desktop' : 'mobile'
                }
            </p>
        </div>
    );
};

export default About;
