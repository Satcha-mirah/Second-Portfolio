import React from "react";
import "../pages/css/about.css";
import Aside from "../components/aside";
function About(){
return(
<div>
<div><Aside/></div>
<section className="about section">
      <div className="container">
        <div className="row2">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
            <div className="about-content padd-15">
                <div className="row">
                    <div className="about-text padd-15">
                        <h3>I'm Amirah Yusuf and <span>Frontend Engineer</span></h3>
                        <p>I am very kind and generous.
                           I'm also a very artistic, imaginative and creative person.<br></br>
                           I'm an extrovert, I'm open and flexible; but on the flip side,
                           can be too impractical and take things personal.<br></br> 
                           My positive traits are being cheerful, pleasure-seeking and exuberant.
                    </p>
                    </div>
                </div>
                <div className="row">
                    <div className="personal-info padd-15">
                        <div className="row">
                            <div className="info-item padd-15">
                                <p>Birthday : <span>16th June 2005</span></p>
                            </div>
                            <div className="info-item padd-15">
                                <p>Email : <span>satchaamirah@gmail.com</span></p>
                            </div>
                            <div className="info-item padd-15">
                                <p>Phone : <span>08127117858</span></p>
                            </div>
                            <div className="info-item padd-15">
                                <p>City : <span>Lagos</span></p>
                            </div>
                        </div>
                       <div className="row">
                        <div className="buttons padd-15">
                            <a href="#" className="btn-hire-me">Download CV</a>
                            {/* <a href="#contact" className="btn-hire-me">Hire me</a> */}
                        </div>
                       </div>
                    </div>
                    <div className="skills padd-15">
                        <div className="row">
                            <div className="skill-item padd-15">
                                <h5>JS</h5>
                                <div className="progress">
                                    <div className="progress-in" style={{width:'70%'}}></div>
                                    <div className="skill-percent">70%</div>
                                </div>
                            </div>
                            <div className="skill-item padd-15">
                                <h5>HTML</h5>
                                <div className="progress">
                                    <div className="progress-in" style={{width:'80%'}}></div>
                                    <div className="skill-percent">80%</div>
                                </div>
                            </div>
                            <div className="skill-item padd-15">
                                <h5>REACT</h5>
                                <div className="progress">
                                    <div className="progress-in" style={{width:'70%'}}></div>
                                    <div className="skill-percent">70%</div>
                                </div>
                            </div>
                            <div className="skill-item padd-15">
                                <h5>CSS</h5>
                                <div className="progress">
                                    <div className="progress-in" style={{width:'76%'}}></div>
                                    <div className="skill-percent">76%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                            <div className="education padd-15">
                                <h3 className="title">Experience</h3>
                                <div className="row">
                                    <div className="timeline-box padd-15">
                                        <div className="timeline shadow-dark">
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                                  <g fill="currentColor"> <path d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013V2.5Z" />
                                                  <path fill-rule="evenodd"   d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2Zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
                                                   clip-rule="evenodd"/></g></svg></i> 2023 - Current</h3> 
                                                   <h4 className="timeline-title">Front-end intern at CrossPoint</h4>
                                                   <p className="timeline-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci eligendi molestiae culpa enim maiores beatae! Esse quos dolores illo alias tempore optio similique aperiam.</p>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                                  <g fill="currentColor"> <path d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013V2.5Z" />
                                                  <path fill-rule="evenodd"   d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2Zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
                                                   clip-rule="evenodd"/></g></svg></i> 2022 - 2023</h3> 
                                                   <h4 className="timeline-title">Programming Training at Semicolon Africa</h4>
                                                   <p className="timeline-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci eligendi molestiae culpa enim maiores beatae! Esse quos dolores illo alias tempore optio similique aperiam.</p>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                                  <g fill="currentColor"> <path d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013V2.5Z" />
                                                  <path fill-rule="evenodd"   d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2Zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
                                                   clip-rule="evenodd"/></g></svg></i> 2020 - 2021</h3> 
                                                   <h4 className="timeline-title">Computer Trainig at Getz Cafe </h4>
                                                   <p className="timeline-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci eligendi molestiae culpa enim maiores beatae! Esse quos dolores illo alias tempore optio similique aperiam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </div>
                            <div className="experience padd-15">
                                <h3 className="title">Education</h3>
                                <div className="row">
                                    <div className="timeline-box padd-15">
                                        <div className="timeline shadow-dark">
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                                  <g fill="currentColor"> <path d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013V2.5Z" />
                                                  <path fill-rule="evenodd" d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2Zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
                                                   clip-rule="evenodd"/></g></svg></i> 2020</h3> 
                                                   <h4 className="timeline-title">SSCE</h4>
                                                   <p className="timeline-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci eligendi molestiae culpa enim maiores beatae! Esse quos dolores illo alias tempore optio similique aperiam.</p>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                                  <g fill="currentColor"> <path d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013V2.5Z" />
                                                  <path fill-rule="evenodd"   d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2Zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
                                                   clip-rule="evenodd"/></g></svg></i> 2017</h3> 
                                                   <h4 className="timeline-title">Junior WASSCE</h4>
                                                   <p className="timeline-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci eligendi molestiae culpa enim maiores beatae! Esse quos dolores illo alias tempore optio similique aperiam.</p>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                                  <g fill="currentColor"> <path d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013V2.5Z" />
                                                  <path fill-rule="evenodd"   d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2Zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
                                                   clip-rule="evenodd"/></g></svg></i> 2014</h3> 
                                                   <h4 className="timeline-title">Entrance Examination</h4>
                                                   <p className="timeline-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci eligendi molestiae culpa enim maiores beatae! Esse quos dolores illo alias tempore optio similique aperiam.</p>
                                            </div>
                                        </div>
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
export default About;