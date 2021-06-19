import React  from "react";

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="container-fluid">
            <div className="row text-muted">
                <div className="col-6 text-left">
                <p className="mb-0">
                    <a href="index.html" className="text-muted"><strong>AdminKit Demo</strong></a> &copy;
                </p>
                </div>
                <div className="col-6 text-right">
                <ul className="list-inline">
                    <li className="list-inline-item">
                    <a className="text-muted" href="#">Support</a>
                    </li>
                    <li className="list-inline-item">
                    <a className="text-muted" href="#">Help Center</a>
                    </li>
                    <li className="list-inline-item">
                    <a className="text-muted" href="#">Privacy</a>
                    </li>
                    <li className="list-inline-item">
                    <a className="text-muted" href="#">Terms</a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer;