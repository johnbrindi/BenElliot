import Link from "next/link";

export function Footer() {
    return (
        <footer className="site-footer" id="contact">
            <div className="footer-inner">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-brand-logo">Ben <span>Elliott's</span> Washers</div>
                        <p>Your premier destination for refurbished washing machines and home appliances. Premium quality, affordable prices, fully warranted.</p>
                        <div className="social-links" style={{ marginTop: '20px' }}>
                            <a href="#" title="Facebook">f</a>
                            <a href="#" title="Instagram">in</a>
                            <a href="#" title="Twitter">𝕏</a>
                        </div>
                    </div>

                    <div>
                        <h5>Customer Service</h5>
                        <ul>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Shipping Policy</a></li>
                            <li><a href="#">Returns Policy</a></li>
                            <li><a href="#">Warranty Info</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5>About Ben Elliott's</h5>
                        <ul>
                            <li><Link href="/about-us">About Us</Link></li>
                            <li><a href="#">Our Process</a></li>
                            <li><a href="#">Sustainability</a></li>
                            <li><a href="#">B2B Enquiries</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h5>Contact Us</h5>
                        <p>
                            <strong>Ben Elliott's Washers</strong><br />
                            Gateshead, UK<br /><br />
                            <a href="mailto:benelliott638@gmail.com?subject=Enquiry from Website&body=Hi Ben, I am interested in an appliance. Please can you help me with more information?" style={{ color: 'var(--green-accent)' }}>
                                benelliott638@gmail.com
                            </a><br /><br />
                            Mon–Fri: 9am – 5pm
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© 2026 Ben Elliott's Washers. All rights reserved.</span>
                    <span>Refurbished Appliances · Gateshead, UK</span>
                </div>
            </div>
        </footer>
    );
}
