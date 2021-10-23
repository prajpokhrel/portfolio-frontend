import React, {useEffect, useState} from "react";
import "../../containers/Portfolio/Portfolio.css";
import axios from "../../axios-portfolio";
import {useParams} from "react-router-dom";

const SkillsSection = () => {

    const [skills, setSkills] = useState({});
    const { portfolioId } = useParams();

    useEffect(() => {
        const getSkills = async () => {
            try {
                const response = await axios.get(`/skills/${portfolioId}`,
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
                    <div className="col-sm-3">
                        <h1>Languages</h1>
                        <ul>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Java</li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h1>Frameworks</h1>
                        <ul>
                            <li>Angular</li>
                            <li>Express</li>
                            <li>Next</li>
                            <li>Django</li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h1>Tools</h1>
                        <ul>
                            <li>MongoDB</li>
                            <li>PostgresSQL</li>
                            <li>Postman</li>
                            <li>Netlify</li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h1>Design</h1>
                        <ul>
                            <li>Figma</li>
                            <li>Sketch</li>
                            <li>Photoshop</li>
                            <li>AdobeXD</li>
                        </ul>
                    </div>
                    {/*{*/}
                    {/*    Object.keys(skills).map((key) => {*/}
                    {/*        return (*/}
                    {/*            <div key={key} className="col-sm-3">*/}
                    {/*                <h2>{key}</h2>*/}
                    {/*                <ul>*/}
                    {/*                    {skills[key].map((value) => {*/}
                    {/*                        return <li key={value}>{value.trim()}</li>;*/}
                    {/*                    })}*/}
                    {/*                </ul>*/}
                    {/*            </div>*/}
                    {/*        );*/}
                    {/*    })*/}
                    {/*}*/}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;