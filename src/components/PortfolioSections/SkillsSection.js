import React, {useEffect, useState} from "react";
import "../../containers/Portfolio/Portfolio.css";

const SkillsSection = ({ skillDetails }) => {

    const [skills, setSkills] = useState({});

    useEffect(() => {
        setSkills({
            ...skills,
            Languages: skillDetails[0].Languages,
            Frameworks: skillDetails[0].Frameworks,
            Tools: skillDetails[0].Tools,
            Design: skillDetails[0].Design
        });
    }, []);

    return (
        <section className="skills-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 skills-content">
                        <div className="skills-header">
                            <h1>Here are some of my skills</h1>
                        </div>
                    </div>
                </div>
                <div className="row skills">
                {
                    Object.keys(skills).map((key) => {
                        return (
                            <div key={key} className="col-sm-3">
                                <h2 className="skills-header-color">{key}</h2>
                                <ul>
                                    {skills[key].map((value) => {
                                        return <li key={value}>{value.trim()}</li>;
                                    })}
                                </ul>
                            </div>
                        );
                    })
                }
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;