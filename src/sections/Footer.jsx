import { socialImgs } from "../constants";

const Footer = () => (
    <footer className="footer">
        <div className="footer-container">
            <div className="flex flex-colo justify-center">
                <p>Terms & Cont</p>
            </div>
            <div className="socials">
                {socialImgs.map((socialImgs , index) => (
                    <div key={index} className="icon">
                        <img src={socialImgs.imgPath} alt="social icon"/>
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-center md:text-end">
                    &copy; {new Date().getFullYear()} Allomoh AAAS. All rights reserved
                </p>
            </div>
        </div>
    </footer>
)

export default Footer;