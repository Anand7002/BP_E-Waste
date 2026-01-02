import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';

import heroBg1 from '../assets/images/hero_bg1.png'
import plant1 from '../assets/images/plant_1.png';
import plant2 from '../assets/images/plant_2.png';
import plant3 from '../assets/images/plant_3.png';
import plant4 from '../assets/images/plant_4.png';
import plant5 from '../assets/images/plant_5.png';
import plant6 from '../assets/images/plant_6.png';
import awareness1 from '../assets/images/awareness_1.png';
// Importing service images for "What We Recycle"
import service1 from '../assets/images/service_1.png';
import service2 from '../assets/images/service_2.png';
import service3 from '../assets/images/service_3.png';
import processDiagram from '../assets/images/process_diagram_no_bg.jpg';

const WhatWeDo = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="what-we-do-container">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 position-relative">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="/assets/images/logo_placeholder.png" alt="BluePlanet" height="60" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center gap-4 fw-bolder">
                            <li className="nav-item"><Link className="nav-link text-dark" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link text-dark" to="/#who-we-are">Who We Are</Link></li>
                            <li className="nav-item position-relative">
                                <Link className="nav-link text-dark fw-bold active" to="/what-we-do">What We Do</Link>
                                <div className="d-flex flex-column align-items-center position-absolute start-50 translate-middle-x" style={{ top: '100%', paddingTop: '10px' }}>
                                    <div style={{ width: '1px', height: '15px', backgroundColor: '#6c757d' }}></div>
                                    <div className="bg-white border text-center p-2 rounded-1 shadow-sm lh-sm text-muted" style={{ width: '250px', fontSize: '0.65rem' }}>
                                        <span className="fw-bold text-dark">What We Do,</span> E-Waste Recycling,<br />Refurbishment, precious metal Recovery
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item"><Link className="nav-link text-dark" to="/#sustainability">Sustainability</Link></li>
                            <li className="nav-item"><Link className="nav-link text-dark" to="/#features">Feature</Link></li>
                            <li className="nav-item"><Link className="nav-link text-dark" to="/#contact">Contact</Link></li>
                        </ul>
                        <div className="d-flex align-items-center gap-3 ms-lg-5">
                            <i className="bi bi-search fs-4 cursor-pointer"></i>
                            <i className="bi bi-list fs-2 cursor-pointer fw-bold"></i>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            {/* Hero Section */}
            <header className="what-we-do-hero-section py-4">
                <div className="container">
                    <div className="overflow-hidden position-relative" style={{ minHeight: '650px', borderRadius: '40px' }}>
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundImage: `url(${heroBg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10"></div> {/* Subtle overlay for text readability if needed */}
                        <div className="position-relative z-1 h-100 d-flex flex-column justify-content-center align-items-center text-center">
                            <h1 className="display-3 fw-bold text-white mb-0" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)', lineHeight: '1.2' }}>E-Waste<br />Recycling</h1>
                        </div>
                    </div>
                </div>
            </header>

            {/* Intro Quote Section */}
            <section className="bg-white py-5">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <div className="me-3">
                            <div className="text-success" style={{ fontSize: '6rem', lineHeight: 1 }}>
                                <i className="bi bi-recycle"></i>
                            </div>
                        </div>
                        <div>
                            <h2 className="fw-bold mb-0 display-6 lh-sm text-dark">
                                Reimagining <span className="text-success">Waste</span>. Restoring <span className="text-success">Value</span>.<br />
                                Regenerating the <span className="text-success">Planet</span>.
                            </h2>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mb-4">
                        <div style={{ width: '60px', height: '3px', backgroundColor: '#e0e0e0' }}></div>
                    </div>

                    <div className="row justify-content-center position-relative">
                        <div className="col-lg-8 text-center">
                            <p className="text-muted mb-0" style={{ lineHeight: '1.8', textAlign: 'justify' }}>Electronic waste is one of the fastest-growing waste streams in the world — and one of the most dangerous when mishandled. Toxic materials, lost resources, and informal recycling practices threaten environmental health, public safety, and future resource security.</p>
                        </div>
                        <div className="position-absolute" style={{ bottom: '-10px', right: '150px', width: 'auto' }}>
                            <i className="bi bi-flower1 fs-1 text-success opacity-75"></i>
                        </div>
                        {/* Responsive adjustment for sprout icon */}
                        <style jsx>{`
                            @media (max-width: 991px) {
                                .position-absolute { display: none; }
                            }
                         `}</style>
                    </div>
                </div>
            </section>

            {/* Green Banner Info */}
            <section className="text-white py-5 text-center position-relative overflow-hidden" style={{ backgroundColor: '#5CB85C' }}>
                <div className="container position-relative z-1">
                    <h4 className="fw-normal mb-4">At <span className="fw-bold">Blue Planet E-Waste Solutions</span>, we transform the way e-waste is managed.</h4>
                    <p className="small opacity-90 mx-auto w-75" style={{ lineHeight: '1.8', textAlign: 'justify' }}>We provide scientifically engineered and fully certified recycling solutions that ensure safe processing, maximum material recovery, full traceability, and measurable sustainability impact. Our ecosystem helps enterprises, government agencies, institutions, and individuals reduce their environmental footprint while recovering value from discarded electronic assets.</p>
                </div>
            </section>

            {/* What is E-Waste Recycling? */}
            <section className="section-padding text-white" style={{ backgroundColor: '#003366' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <h2 className="fw-light mb-0 h3">What is</h2>
                            <h2 className="fw-bold display-4 mb-4">E-Waste Recycling?</h2>
                            <p className="opacity-90 mb-4 me-lg-4" style={{ lineHeight: '1.7', fontSize: '0.95rem', textAlign: 'justify' }}>E-waste recycling is the structured process of recovering usable components, extracting precious materials, upcycling resources, and safely treating hazardous elements from end-of-life electronic products. Instead of discarding equipment into landfills, recycling enables:</p>
                            <ul className="list-unstyled d-flex flex-column gap-3 opacity-100">
                                <li className="d-flex align-items-center"><i className="bi bi-chevron-right me-3 fw-bold fs-5"></i> <span style={{ fontSize: '0.95rem' }}>Reduction in mining and resource extraction</span></li>
                                <li className="d-flex align-items-center"><i className="bi bi-chevron-right me-3 fw-bold fs-5"></i> <span style={{ fontSize: '0.95rem' }}>Conservation of metals, minerals, plastics and energy</span></li>
                                <li className="d-flex align-items-center"><i className="bi bi-chevron-right me-3 fw-bold fs-5"></i> <span style={{ fontSize: '0.95rem' }}>Prevention of environmental contamination</span></li>
                                <li className="d-flex align-items-center"><i className="bi bi-chevron-right me-3 fw-bold fs-5"></i> <span style={{ fontSize: '0.95rem' }}>Increased circularity and sustainable growth</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-7 ps-lg-5">
                            <div className="bg-white p-5 d-flex align-items-center justify-content-center h-100 position-relative shadow-lg" style={{ borderRadius: '50px' }}>
                                <img src={awareness1} className="img-fluid position-relative z-2" alt="Recycling process illustration" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Recycle */}
            <section className="section-padding">
                <div className="container text-center">
                    <h2 className="mb-2 display-5" style={{ fontWeight: '500' }}>What <span className="fw-bolder">We Recycle</span></h2>
                    <p className="text-muted mb-5" style={{ fontSize: '1.2rem', opacity: 0.6 }}>We provide comprehensive recycling for:</p>

                    <div className="row justify-content-center">
                        {/* IT Assets */}
                        <div className="col-md-4 mb-4 mb-md-0 position-relative">
                            <div className="h-100 p-3">
                                <div className="mb-4 d-flex justify-content-center" style={{ height: '120px' }}>
                                    <img src={service1} className="h-100 object-fit-contain" alt="IT Assets" />
                                </div>
                                <h4 className="fw-bold mb-3">IT Assets</h4>
                                <p className="text-dark mb-0 lh-sm" style={{ maxWidth: '250px', margin: '0 auto', fontSize: '1.1rem' }}>laptops, desktops,<br />servers, tablets,<br />networking equipment</p>
                            </div>
                            {/* Custom Green Divider */}
                            <div className="d-none d-md-block position-absolute top-50 end-0 translate-middle-y" style={{ width: '2px', height: '80%', backgroundColor: '#b7e4c7' }}></div>
                        </div>
                        {/* Home Appliances */}
                        <div className="col-md-4 mb-4 mb-md-0 position-relative">
                            <div className="h-100 p-3">
                                <div className="mb-4 d-flex justify-content-center" style={{ height: '120px' }}>
                                    <img src={service2} className="h-100 object-fit-contain" alt="Home and Consumer Appliances" />
                                </div>
                                <h4 className="fw-bold mb-3">Home and Consumer<br />Appliances</h4>
                                <p className="text-dark mb-0 lh-sm" style={{ maxWidth: '250px', margin: '0 auto', fontSize: '1.1rem' }}>refrigerators, ACs,<br />washing machines</p>
                            </div>
                            {/* Custom Green Divider */}
                            <div className="d-none d-md-block position-absolute top-50 end-0 translate-middle-y" style={{ width: '2px', height: '80%', backgroundColor: '#b7e4c7' }}></div>
                        </div>
                        {/* Industrial */}
                        <div className="col-md-4">
                            <div className="h-100 p-3">
                                <div className="mb-4 d-flex justify-content-center" style={{ height: '120px' }}>
                                    <img src={service3} className="h-100 object-fit-contain" alt="Industrial Electronics" />
                                </div>
                                <h4 className="fw-bold mb-3">Industrial<br />Electronics</h4>
                                <p className="text-dark mb-0 lh-sm" style={{ maxWidth: '250px', margin: '0 auto', fontSize: '1.1rem' }}>PCB boards, industrial<br />controllers, machinery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Process Diagram Section */}
            <section className="section-padding bg-white pt-5">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <img src={processDiagram} alt="E-Waste Recycling Process" className="img-fluid" style={{ maxHeight: '700px' }} />
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="section-padding bg-light">
                <div className="container">
                    <h2 className="text-center fw-bold mb-5">Key <span className="fw-bolder">Benefits</span></h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="bg-white rounded-4 h-100 shadow-sm overflow-hidden">
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={plant1} className="w-100 h-100 object-fit-cover" alt="Environmental" />
                                </div>
                                <div className="p-4">
                                    <h5 className="fw-bold mb-2">Environmental Protection</h5>
                                    <p className="small text-muted mb-0" style={{ textAlign: 'justify' }}>Reduces landfill burden, prevents toxic leakage, and protects ecosystems.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white rounded-4 h-100 shadow-sm overflow-hidden">
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={plant2} className="w-100 h-100 object-fit-cover" alt="Recovery" />
                                </div>
                                <div className="p-4">
                                    <h5 className="fw-bold mb-2">Research & Material Recovery</h5>
                                    <p className="small text-muted mb-0" style={{ textAlign: 'justify' }}>Turns discarded electronics into usable metals, plastics, and critical minerals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white rounded-4 h-100 shadow-sm overflow-hidden">
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={plant3} className="w-100 h-100 object-fit-cover" alt="Security" />
                                </div>
                                <div className="p-4">
                                    <h5 className="fw-bold mb-2">Enterprise-grade Data Security</h5>
                                    <p className="small text-muted mb-0" style={{ textAlign: 'justify' }}>Certified destruction eliminates data and compliance risk.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white rounded-4 h-100 shadow-sm overflow-hidden">
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={plant4} className="w-100 h-100 object-fit-cover" alt="Compliance" />
                                </div>
                                <div className="p-4">
                                    <h5 className="fw-bold mb-2">Regulatory Compliance</h5>
                                    <p className="small text-muted mb-0" style={{ textAlign: 'justify' }}>Meets EPA, CPCB, waste management, and CSR reporting requirements.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white rounded-4 h-100 shadow-sm overflow-hidden">
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={plant5} className="w-100 h-100 object-fit-cover" alt="Sustainability" />
                                </div>
                                <div className="p-4">
                                    <h5 className="fw-bold mb-2">Sustainability & Carbon Impact</h5>
                                    <p className="small text-muted mb-0" style={{ textAlign: 'justify' }}>Contributes to net-zero targets through waste reduction and carbon credit pathways.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white rounded-4 h-100 shadow-sm overflow-hidden">
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={plant6} className="w-100 h-100 object-fit-cover" alt="Traceability" />
                                </div>
                                <div className="p-4">
                                    <h5 className="fw-bold mb-2">Traceability of EPR Credits</h5>
                                    <p className="small text-muted mb-0" style={{ textAlign: 'justify' }}>Full digital tracking for EPR fulfillment and audits.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blue Planet Advantage Table */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="text-center fw-bold mb-5">Why Blue Planet <span className="fw-bolder">E-Waste Solutions</span></h2>

                    <div className="row g-0 justify-content-center shadow rounded-4 overflow-hidden">
                        <div className="col-lg-6">
                            <div className="text-white p-5 h-100" style={{ background: '#003366' }}>
                                <h4 className="fw-bold mb-4 border-bottom border-white border-opacity-25 pb-3">Blue Planet Advantage</h4>
                                <ul className="list-unstyled d-flex flex-column gap-4">
                                    <li className="d-flex align-items-center gap-3"><div className="bg-white bg-opacity-10 p-2 rounded-circle"><i className="bi bi-shield-check fs-4"></i></div> <div>Certified, compliant,<br />world-class recycling</div></li>
                                    <li className="d-flex align-items-center gap-3"><div className="bg-white bg-opacity-10 p-2 rounded-circle"><i className="bi bi-clipboard-data fs-4"></i></div> <div>End-to-end<br />transparency & traceability</div></li>
                                    <li className="d-flex align-items-center gap-3"><div className="bg-white bg-opacity-10 p-2 rounded-circle"><i className="bi bi-lightning-charge fs-4"></i></div> <div>High-efficiency<br />resource extraction</div></li>
                                    <li className="d-flex align-items-center gap-3"><div className="bg-white bg-opacity-10 p-2 rounded-circle"><i className="bi bi-lock fs-4"></i></div> <div>Secure data<br />destruction</div></li>
                                    <li className="d-flex align-items-center gap-3"><div className="bg-white bg-opacity-10 p-2 rounded-circle"><i className="bi bi-graph-up-arrow fs-4"></i></div> <div>Circular economy &<br />carbon impact reporting</div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-white p-5 h-100" style={{ background: '#4CAF50' }}>
                                <h4 className="fw-bold mb-4 border-bottom border-white border-opacity-25 pb-3">What It Means</h4>
                                <ul className="list-unstyled d-flex flex-column gap-4">
                                    <li className="d-flex align-items-center gap-3"><div className="bg-white bg-opacity-10 p-2 rounded-circle"><i className="bi bi-check-lg fs-4"></i></div> <div>ISO 9001, ISO 14001,<br />ISO 45001</div></li>
                                    <li className="d-flex align-items-center gap-3"><div className="bg-white bg-opacity-10 p-2 rounded-circle"><i className="bi bi-check-lg fs-4"></i></div> <div>Advanced recycling &<br />precious metal recovery</div></li>
                                    <li className="d-flex align-items-center gap-3"><div className="bg-white bg-opacity-10 p-2 rounded-circle"><i className="bi bi-check-lg fs-4"></i></div> <div>Zero-risk disposal for<br />sensitive assets</div></li>
                                    <li className="d-flex align-items-center gap-3"><div className="bg-white bg-opacity-10 p-2 rounded-circle"><i className="bi bi-check-lg fs-4"></i></div> <div></div></li>
                                    <li className="d-flex align-items-center gap-3"><div className="bg-white bg-opacity-10 p-2 rounded-circle"><i className="bi bi-check-lg fs-4"></i></div> <div>Sustainability metrics for<br />ESG & board reporting</div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-5 text-center">
                <div className="container">
                    <h3 className="fw-bold text-muted mb-2">Start your E-waste</h3>
                    <h2 className="fw-bold mb-4 display-6">Recycling, Refurbishment & IT Service Journey</h2>
                    <p className="text-muted small">Together, we can turn waste into opportunity and build a cleaner future.</p>
                </div>
            </section>

            {/* Footer (Duplicated) */}
            <footer className="footer-wrapper p-4">
                <div className="container-fluid bg-success text-white rounded-5 p-5 position-relative overflow-hidden footer-container">
                    {/* ... Footer content same as Home.jsx ... */}
                    <div className="row g-5">
                        <div className="col-lg-4 pe-lg-5 border-end border-white border-opacity-25">
                            <img src="/assets/images/logo_placeholder_white.png" height="60" alt="BluePlanet" className="mb-4" />
                            <h3 className="fw-bold mb-4">Turning Waste to<br />Treasure</h3>
                            <p className="small text-white opacity-75 mb-5 lh-lg" style={{ textAlign: 'justify' }}>Blue Planet E-Waste Solutions is a leading integrated technology-driven platform for responsible e-waste recycling, refurbishment, and resource recovery. We transform discarded electronics into valuable materials through ethical, compliant, and circular economy practices.</p>
                            <div className="d-flex gap-3">
                                <Link to="#" className="social-icon-circle"><i className="bi bi-linkedin"></i></Link>
                                <Link to="#" className="social-icon-circle"><i className="bi bi-facebook"></i></Link>
                                <Link to="#" className="social-icon-circle"><i className="bi bi-instagram"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex flex-column">
                            {/* ... Middle column ... */}
                            <div className="row mb-4">
                                <div className="col-sm-6">
                                    <h5 className="fw-bold mb-4">About</h5>
                                    <ul className="list-unstyled footer-links d-flex flex-column gap-2 opacity-75">
                                        <li><Link to="#" className="text-white text-decoration-none d-flex align-items-center"><i className="bi bi-arrow-right-short me-2"></i>About</Link></li>
                                        <li><Link to="#" className="text-white text-decoration-none d-flex align-items-center"><i className="bi bi-arrow-right-short me-2"></i>Who we are</Link></li>
                                        <li><Link to="#" className="text-white text-decoration-none d-flex align-items-center"><i className="bi bi-arrow-right-short me-2"></i>What we do</Link></li>
                                        <li><Link to="#" className="text-white text-decoration-none d-flex align-items-center"><i className="bi bi-arrow-right-short me-2"></i>Impact</Link></li>
                                        <li><Link to="#" className="text-white text-decoration-none d-flex align-items-center"><i className="bi bi-arrow-right-short me-2"></i>Contact us</Link></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <h5 className="fw-bold mb-4">Services</h5>
                                    <ul className="list-unstyled footer-links d-flex flex-column gap-2 opacity-75">
                                        <li><Link to="#" className="text-white text-decoration-none d-flex align-items-center"><i className="bi bi-arrow-right-short me-2"></i>E-Waste Recyling</Link></li>
                                        <li><Link to="#" className="text-white text-decoration-none d-flex align-items-center"><i className="bi bi-arrow-right-short me-2"></i>Refurbishment</Link></li>
                                        <li><Link to="#" className="text-white text-decoration-none d-flex align-items-center"><i className="bi bi-arrow-right-short me-2"></i>Precious metals</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="newsletter-box mt-auto pt-3">
                                <h4 className="fw-light mb-4">Newsletters</h4>
                                <div className="position-relative w-100">
                                    <i className="bi bi-envelope position-absolute top-50 translate-middle-y ms-4 fs-5" style={{ zIndex: 5, color: '#2e5a27' }}></i>
                                    <input type="email" className="form-control rounded-pill border-0 py-3 ps-5 pe-5 custom-newsletter-input" placeholder="Email Address" />
                                    <button className="btn rounded-pill position-absolute end-0 top-50 translate-middle-y me-2 px-4 py-2 fw-bold text-white shadow-none" style={{ backgroundColor: '#000', fontSize: '0.9rem' }}>Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h6 className="fw-bold mb-3 opacity-75">Corporate Office</h6>
                            <p className="small text-white opacity-75 mb-4">202, 2nd floor, SAS Tower<br />Sector 38, Gurugram,<br />Haryana 122001</p>

                            <h6 className="fw-bold mb-3 opacity-75">Recycling Facility @ Binola</h6>
                            <p className="small text-white opacity-75 mb-4">Khewat No. 654/617 Min,<br />Khata No. 781, Rect No. 125,<br />Kill Binola Industrial Area<br />Main road, Binola Industrial<br />Area, Gurugram - 122413,<br />Haryana, India</p>

                            <h5 className="fw-bold mb-2">Call Us</h5>
                            <div className="d-flex align-items-center gap-2">
                                <i className="bi bi-telephone-fill"></i>
                                <span className="fw-bold fs-5">18003090950</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center small text-white opacity-75 mt-5">
                        <p className="mb-0">© Copyright 2025 by Blue Planet Environmental Solutions Pte. Ltd.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default WhatWeDo;
