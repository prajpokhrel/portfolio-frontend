import React, {useEffect} from "react";
import "./ProjectList.css";
import {Link} from "react-router-dom";
import ProjectListCard from "../../components/ProjectListCard/ProjectListCard";

const ProjectList = () => {

    return (
        <div className="container-fluid main__container">
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="project__list">Other Works</h1>
                    <p className="project__archive">
                            <small>Collection of all of my works</small>
                    </p>

                    <ProjectListCard />
                </div>
            </div>
        </div>
    );

};

export default ProjectList;