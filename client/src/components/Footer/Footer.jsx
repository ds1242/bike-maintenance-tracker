import React from 'react';
import './Footer.css'

function Footer() {
    return(
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container-fluid">
                <div className="row">
                    <div class="col col-lg-10">
                        <span className="footer-text">Created by David Shaw</span>
                    </div>
                    <div className="col col-lg-2">
                        <a href="https://bit.ly/3eKK7uy" target="_blank" rel='noreferrer noopener'><i className="bi bi-github" id='footer-icon'></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )


};

export default Footer;