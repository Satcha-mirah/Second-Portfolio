import React from "react";
import "../pages/css/contact.css";
import Aside from "../components/aside";
function contact(){
return(
    <div>
     <div><Aside/></div>
     <section className="contact-section">
        <div className="container">
            <div className="row-4">
                <div className="section-title padd-15">
                   <h2>Contact Me</h2>
                </div>
            </div>
            <h3 className="contact-title padd-15">Have You any Questions ?</h3>
            <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
            <div className="contact-row padd-15">
                <div className="contact-info-item">
                    <div className="icon">
                        <i className="contact-icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19.506 7.96A16.027 16.027 0 0 1 7.96 19.506C5.819 20.051 4 18.21 4 16v-1c0-.552.449-.995.999-1.05a9.94 9.94 0 0 0 2.655-.639l1.52 1.52a12.049 12.049 0 0 0 5.657-5.657l-1.52-1.52a9.94 9.94 0 0 0 .64-2.656C14.005 4.448 14.448 4 15 4h1c2.208 0 4.05 1.819 3.505 3.96Z"/></svg></i>
                        <h4>Telephone</h4>
                        <p>08127117858</p>
                    </div>
                </div>
                <div className="contact-info-item">
                    <div className="icon">
                        <i className="contact-icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10Z"/></svg></i>
                        <h4>Email</h4>
                        <p>satchaamirah@gmail.com</p>
                    </div>
                </div>
                <div className="contact-info-item">
                    <div className="icon">
                        <i className="contact-icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg></i>
                        <h4>LinkedIn</h4>
                        <a href="#" className="links"><p>https://www.linkedin.com/in/amirah-yusuf/</p></a>
                    </div>
                </div>
                <div className="contact-info-item">
                    <div className="icon">
                        <i className="contact-icons"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" fill-rule="evenodd" d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387c.602.11.82-.258.82-.578c0-.286-.011-1.04-.015-2.04c-3.34.723-4.043-1.609-4.043-1.609c-.547-1.387-1.332-1.758-1.332-1.758c-1.09-.742.082-.726.082-.726c1.203.086 1.836 1.234 1.836 1.234c1.07 1.836 2.808 1.305 3.492 1c.11-.777.422-1.305.762-1.605c-2.664-.301-5.465-1.332-5.465-5.93c0-1.313.469-2.383 1.234-3.223c-.121-.3-.535-1.523.117-3.175c0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0 1 16 9.805c1.02.004 2.047.136 3.004.402c2.293-1.55 3.297-1.23 3.297-1.23c.656 1.652.246 2.875.12 3.175c.77.84 1.231 1.91 1.231 3.223c0 4.61-2.804 5.621-5.476 5.922c.43.367.812 1.101.812 2.219c0 1.605-.011 2.898-.011 3.293c0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"/></svg></i>
                        <h4>Github</h4>
                        <p><a href="https://github.com/Satcha-mirah" className="links">https://github.com/Satcha-mirah</a></p>
                    </div>
                </div>
            </div>
        </div>
     </section>
     
    </div>
);
}
export default contact;