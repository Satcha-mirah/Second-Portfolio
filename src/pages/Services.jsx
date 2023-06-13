import React from "react";
import "../pages/css/services.css";
import Aside from "../components/aside";
function services(){
return(
<div>
    <div><Aside/></div>
    <section className="service-section">
        <div className="container">
            <div className="row1">
                <div className="section-title padd-15">
                    <h2>Services</h2>
                </div>
            </div>
            <div className="service-item-row">
                <div className="first-row">
                <div className="service-item padd-15">
                    <div className="service-item-inner">
                        <div className="icon">
                            <i className="service-icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg></i>
                            <h4>Web Development</h4>
                            <p>Building responsive and interactive websites, using HTMl5, CSS3 and Javascript</p>
                        </div>
                    </div>
                </div>
                <div className="service-item padd-15">
                    <div className="service-item-inner">
                        <div className="icon">
                            <i className="service-icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M18.85 9.4L14.6 5.15l1.425-1.425q.575-.575 1.413-.575t1.412.575l1.425 1.425q.575.575.575 1.413t-.575 1.412L18.85 9.4ZM3 21v-4.25l4.5-4.5l-5.275-5.325L6.95 2.2l5.3 5.325L14.6 5.15l4.25 4.25l-2.35 2.35l5.275 5.325l-4.7 4.7l-5.325-5.3L7.25 21H3Zm5.925-10.175l1.9-1.9l-1.2-1.2l-1.2 1.175l-1.4-1.4L8.2 6.3L6.925 5.05L5.05 6.95l3.875 3.875Zm8.125 8.125l1.9-1.9l-1.275-1.25l-1.175 1.175l-1.425-1.4l1.2-1.2l-1.225-1.2l-1.9 1.9l3.9 3.875ZM5 19h1.4l9.625-9.6L14.6 7.975L5 17.6V19Z"/></svg></i>
                            <h4>UI/UX Design</h4>
                            <p>Creating visually appealing and intuitive user interfaces that enhance user experience</p>
                        </div>
                    </div>
                </div>
                <div className="service-item padd-15">
                    <div className="service-item-inner">
                        <div className="icon">
                            <i className="service-icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6v10h5v-4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4h2V6H4M0 20v-2h4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-6a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2H0m11.5 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m4 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M13 20v1h1v-1h-1m-2-8v7h5v-7h-5Z"/></svg></i>
                            <h4>Responsive Design</h4>
                            <p>Ensuring that websites and applications are optimized for various devices and screen sizes</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="second-row">
                <div className="service-item padd-15">
                    <div className="service-item-inner">
                        <div className="icon">
                            <i className="service-icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="m10.94 13.5l-1.32 1.32a3.73 3.73 0 0 0-7.24 0L1.06 13.5L0 14.56l1.72 1.72l-.22.22V18H0v1.5h1.5v.08c.077.489.214.966.41 1.42L0 22.94L1.06 24l1.65-1.65A4.308 4.308 0 0 0 6 24a4.31 4.31 0 0 0 3.29-1.65L10.94 24L12 22.94L10.09 21c.198-.464.336-.951.41-1.45v-.1H12V18h-1.5v-1.5l-.22-.22L12 14.56l-1.06-1.06zM6 13.5a2.25 2.25 0 0 1 2.25 2.25h-4.5A2.25 2.25 0 0 1 6 13.5zm3 6a3.33 3.33 0 0 1-3 3a3.33 3.33 0 0 1-3-3v-2.25h6v2.25zm14.76-9.9v1.26L13.5 17.37V15.6l8.5-5.37L9 2v9.46a5.07 5.07 0 0 0-1.5-.72V.63L8.64 0l15.12 9.6z"/></svg></i>
                            <h4>Testing and Debugging</h4>
                            <p>Conducting thorough testing and debuggng to identify and resolve issues, </p>
                        </div>
                    </div>
                </div>
                <div className="service-item padd-15">
                    <div className="service-item-inner">
                        <div className="icon">
                            <i className="service-icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="m14 12l-2 2l-2-2l2-2l2 2zm-2-6l2.12 2.12l2.5-2.5L12 1L7.38 5.62l2.5 2.5L12 6zm-6 6l2.12-2.12l-2.5-2.5L1 12l4.62 4.62l2.5-2.5L6 12zm12 0l-2.12 2.12l2.5 2.5L23 12l-4.62-4.62l-2.5 2.5L18 12zm-6 6l-2.12-2.12l-2.5 2.5L12 23l4.62-4.62l-2.5-2.5L12 18z"/></svg></i>
                            <h4>Integration with API's</h4>
                            <p>Integrating frontend components with backend API's to retrieve and display dynamic data.</p>
                        </div>
                    </div>
                </div>
                <div className="service-item padd-15">
                    <div className="service-item-inner">
                        <div className="icon">
                            <i className="service-icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20"><path fill="currentColor" d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3c2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04l-1.03-3.41l2.84-2.15l-3.56-.08L10 5.12L8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z"/></svg></i>
                            <h4>Frontend Security</h4>
                            <p>Ensuring the protection of user interfaces and client-side components </p>
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
export default services