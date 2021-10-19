import React, {useEffect, useState} from "react";
import "../../containers/Portfolio/Portfolio.css";
import axios from "../../axios-portfolio";

const SkillsSection = () => {

    const [skills, setSkills] = useState({});

    useEffect(() => {
        const getSkills = async () => {
            try {
                const response = await axios.get('/skills',
                    {withCredentials: true, credentials: 'include'});
                setSkills(prevState => response.data[0]);
                console.log("Skills", response.data);
            } catch (error) {
                console.log(error.response);
            }
        };

        getSkills();
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
                                    <h2>{key}</h2>
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