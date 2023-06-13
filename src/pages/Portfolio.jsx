import React from "react";
import "../pages/css/portfolio.css";
import Aside from "../components/aside";
// import Portfolio1 from "../assets/portfolio3.jpg";
function Portfolio() {
    return (
        <div>
            <div>
                <Aside />
            </div>
            <section className="portfolio-section">
                <div className="container">
                    <div className="row3">
                        <div className="section-title padd-15">
                            <h2>Portfolio</h2>
                        </div>
                    </div>
                    <div className="mylastproject">
                        <div className="portfolio-heading padd-15">
                            <h2>My Last Projects :</h2>
                        </div>
                    </div>
                    <div className="portfolio-row">
                        <div className="portfolio-first-row">
                            <div className="portfolio-item padd-15">
                                <div className="portfolio-item-inner shadow dark">
                                    <div className="portfolio-img">
                                        <div className="img1"></div>
                                        <div className="portfolio-modal">
                                            <h2 className="portfolio-title">
                                                Online Education Website
                                            </h2>
                                            <p className="portfolio-sub-text">
                                                This app provides children with
                                                interactive learning experience
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item padd-15">
                                <div className="portfolio-item-inner shadow dark">
                                    <div className="portfolio-img">
                                        <div className="img2"></div>
                                        <div className="portfolio-modal">
                                            <h2 className="portfolio-title">
                                                Telemedicine App
                                            </h2>
                                            <p className="portfolio-sub-text">
                                                This App provides easy access to
                                                healthcare
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item padd-15">
                                <div className="portfolio-item-inner shadow dark">
                                    <div className="portfolio-img">
                                        <div className="img3"></div>
                                        <div className="portfolio-modal">
                                            <h2 className="portfolio-title">
                                                Modern Website
                                            </h2>
                                            <p className="portfolio-sub-text">
                                                This is just a mordern website
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-second-row">
                            <div className="portfolio-item padd-15">
                                <div className="portfolio-item-inner shadow dark">
                                    <div className="portfolio-img">
                                        <div className="img4"></div>
                                        <div className="portfolio-modal">
                                            <h2 className="portfolio-title">
                                                Netflix Login page
                                            </h2>
                                            <p className="portfolio-sub-text">
                                                This just a replication of
                                                netflix login page
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item padd-15">
                                <div className="portfolio-item-inner shadow dark">
                                    <div className="portfolio-img">
                                        <div className="img5"></div>
                                        <div className="portfolio-modal">
                                            <h2 className="portfolio-title">
                                                Period Tracker
                                            </h2>
                                            <p className="portfolio-sub-text">
                                                This app enables you to track
                                                your period
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item padd-15">
                                <div className="portfolio-item-inner shadow dark">
                                    <div className="portfolio-img">
                                        <div className="img6"></div>
                                        <div className="portfolio-modal">
                                            <h2 className="portfolio-title">
                                                Music App
                                            </h2>
                                            <p className="portfolio-sub-text">
                                                This app connects you to
                                                talented people around the world
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Portfolio;
