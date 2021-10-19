import * as React from "react";
import classes from "./Profile.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import FooterSection from "../../components/PortfolioSections/FooterSection";

const Profile = (props) => {
    return (
        <div>
            {/*Refactor this later*/}
            <Navigation headingTitle="My personal workspace"
                        createPortfolioButton={true}
            />
            {/*  Separating sections for portfolio */}
            <section className={`${classes.profileSection} bg-dark text-light`}>
                <div className="container">
                    <div className="row">
                        <div className={`col-sm-12 ${classes.controlPanelWrapper}`}>
                            <h1 className="text-center">Control Panel</h1>
                            <div className="row">
                                <div className={`col-sm-6 m-auto ${classes.controlButtons}`}>
                                    <button className="btn btn-success btn-lg">View Portfolio</button>
                                    <button className="btn btn-danger btn-lg">Delete Portfolio</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={`col-sm-12 ${classes.portfolioUpdateSection}`}>
                            <h1>Update Portfolio Sections</h1>
                        </div>
                    </div>

                    {/*  Card section  */}
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <Card>
                               <CardActionArea>
                                   <CardMedia component="img"
                                              height="140"
                                              image="" alt="green reptile"/>
                                   <CardContent>
                                       <Typography gutterBottom variant="h5" component="div">
                                           Lizard
                                       </Typography>
                                       <Typography variant="body2" color="text.secondary">
                                           This is sample text about reptiles and its componenents.
                                       </Typography>
                                   </CardContent>
                               </CardActionArea>
                               <CardActions>
                                   <Button size="small" color="primary">
                                       Share
                                   </Button>
                               </CardActions>
                            </Card>
                        </div>
                        <div className="col">
                            <Card>
                                <CardActionArea>
                                    <CardMedia component="img"
                                               height="140"
                                               image="" alt="green reptile"/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            This is sample text about reptiles and its componenents.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="col">
                            <Card>
                                <CardActionArea>
                                    <CardMedia component="img"
                                               height="140"
                                               image="" alt="green reptile"/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            This is sample text about reptiles and its componenents.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="col">
                            <Card>
                                <CardActionArea>
                                    <CardMedia component="img"
                                               height="140"
                                               image="" alt="green reptile"/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            This is sample text about reptiles and its componenents.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="col">
                            <Card>
                                <CardActionArea>
                                    <CardMedia component="img"
                                               height="140"
                                               image="" alt="green reptile"/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            This is sample text about reptiles and its componenents.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    );
};

export default Profile;