import React from "react";
import "../pages/css/home.css";
import "../pages/css/color-1.css";
import AmirahPic from "../assets/SATCHA-MIRAH.jpg";
import Aside from "../components/aside";
function Home(){
return(
<div>
  <div><Aside/></div>
    <body>
    <div className="main-container">
      
      <div className="main-content">
        <section className="home-section">
          <div className="container">
            <div className="row">
                <div className="home-info padd-15">
                    <h3 className="hello">Hello, my name is <span>Amirah Yusuf</span></h3>
                    <h3 className="my-profession">I'm a <span className="typing">Frontend Engineer</span></h3>
                    <p>I'm a Frontend engineer with extensive experience for about 2 years. My expertise is to build user-friendly interfaces, create reusable components and libraries for future use, and many more...</p>
                    {/* <a href="#contact" className="btn-hire-me">Hire Me</a> */}
                </div>
                <div className="home-img padd-15">
                  <img src={AmirahPic} alt="#"/>
                </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </body>
</div>
);
}
export default Home;