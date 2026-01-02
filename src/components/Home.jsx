import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';
import heroBg from '../assets/images/hero_bg.png';
import service1 from '../assets/images/service_1.png';
import service2 from '../assets/images/service_2.png';
import service3 from '../assets/images/service_3.png';
import service4 from '../assets/images/service_4.png';
import why1 from '../assets/images/why_1.png';
import why2 from '../assets/images/why_2.png';
import why3 from '../assets/images/why_3.png';
import why4 from '../assets/images/why_4.png';
import drive2 from '../assets/images/drive_2.png';
import drive3 from '../assets/images/drive_3.png';
import awareness1 from '../assets/images/awareness_1.png';
import plant1 from '../assets/images/plant_1.png';
import plant2 from '../assets/images/plant_2.png';
import plant3 from '../assets/images/plant_3.png';
import plant4 from '../assets/images/plant_4.png';
import plant5 from '../assets/images/plant_5.png';
import plant6 from '../assets/images/plant_6.png';


const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="home-container">
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
                                <Link className="nav-link text-dark fw-bold" to="/#services">Services</Link>
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
            <section className="hero-wrapper pb-5 px-3">
                <div className="container hero-rounded-container position-relative overflow-visible text-white d-flex align-items-center bg-dark" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '650px', borderRadius: '40px' }}>
                    <div className="overlay position-absolute w-100 h-100 rounded-5 bg-black bg-opacity-25" style={{ zIndex: 0, borderRadius: '40px' }}></div>
                    <div className="row w-100 position-relative z-2 ps-lg-5 align-items-center">
                        <div className="col-lg-7 ps-lg-5">
                            <h1 className="display-3 fw-bold mb-4 lh-sm text-center">Leading the Charge<br />in Sustainable<br />E-Waste Solutions</h1>
                            <button className="btn btn-light rounded-pill px-5 py-3 fw-bold text-dark mt-2 shadow">Request a Demo</button>
                        </div>

                        {/* Visual marker "Hidden Materials" */}
                        <div className="col-lg-5 d-none d-lg-block position-relative" style={{ height: '300px' }}>
                            {/* Simulating the pointer in the image */}
                            <div className="position-absolute" style={{ right: '25%', top: '40%' }}>
                                <div className="d-flex align-items-center text-white small">
                                    <div className="border border-white p-2 rounded bg-black bg-opacity-75" style={{ fontSize: '0.7rem' }}>Hidden Materials</div>
                                    <div className="border-top border-white border-2" style={{ width: '40px' }}></div>
                                    <div className="border border-white border-2 rounded-circle bg-white" style={{ width: '10px', height: '10px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Stats Cards */}
                    <div className="container position-absolute start-50 translate-middle-x" style={{ bottom: '-90px', zIndex: 10 }}>
                        <div className="row g-4 justify-content-center px-lg-5">
                            <div className="col-lg-3 col-md-6">
                                <div className="bg-white text-center p-4 rounded-4 shadow-lg h-100">
                                    <h2 className="text-success fw-bold mb-2">15+</h2>
                                    <p className="fw-bold text-muted lh-sm mb-0">Metal Variant<br />Recovery</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="bg-white text-center p-4 rounded-4 shadow-lg h-100">
                                    <h2 className="text-success fw-bold mb-2">40,000 MT</h2>
                                    <p className="fw-bold text-muted lh-sm mb-0">Scalable Landfill<br />to Recycling</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="bg-white text-center p-4 rounded-4 shadow-lg h-100">
                                    <h2 className="text-success fw-bold mb-2">120 MT</h2>
                                    <p className="fw-bold text-muted lh-sm mb-0">Hazardous Waste<br />Disposal</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="bg-white text-center p-4 rounded-4 shadow-lg h-100">
                                    <h2 className="text-success fw-bold mb-2">100%</h2>
                                    <p className="fw-bold text-muted lh-sm mb-0">Environment<br />Protection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spacer for the overlapping cards */}
            <div style={{ height: '120px' }} className="d-none d-md-block"></div>
            <div style={{ height: '450px' }} className="d-block d-md-none"></div>

            {/* Who We Are */}
            <section className="section-padding text-center overflow-hidden" id="who-we-are">
                <div className="container">
                    <h1 className="fw-bold mb-2 display-5">Who We Are</h1>
                    <p className="text-muted fs-5 mb-5">Leading Integrated Electronic Waste Management Company</p>

                    <div className="who-we-are-diagram position-relative mt-4" style={{ minHeight: '350px' }}>
                        {/* Center Label */}
                        <div className="position-absolute start-50 translate-middle-x" style={{ top: '-20px', zIndex: 10 }}>
                            <h6 className="fw-bold mb-1">Refurbishment &<br />End-to-End Recycling Solutions</h6>
                            <div className="vertical-line mx-auto"></div>
                        </div>

                        {/* Diagram Container */}
                        <div className="d-flex justify-content-center align-items-end gap-2 gap-md-4 h-100 pt-5">
                            {/* Left Part */}
                            <div className="position-relative">
                                <div className="diagram-label-left position-absolute d-none d-lg-flex">
                                    <h6 className="fw-bold text-end mb-0">Who We Are!<br />New Age Recyclers</h6>
                                    <div className="horizontal-line-right"></div>
                                </div>
                                <div className="blob-shape bg-success text-white d-flex align-items-center justify-content-center shadow-sm" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', width: '200px', height: '240px', transform: 'rotate(-25deg)' }}>
                                    <div className="bg-white rounded-circle p-3 text-success d-flex align-items-center justify-content-center shadow-sm" style={{ width: '90px', height: '90px', transform: 'rotate(25deg)' }}>
                                        <i className="bi bi-brightness-alt-high fs-1"></i>
                                    </div>
                                </div>
                            </div>

                            {/* Center Part */}
                            <div className="position-relative" style={{ marginBottom: '50px' }}>
                                <div className="blob-shape bg-secondary bg-opacity-25 text-success d-flex align-items-center justify-content-center shadow-sm" style={{ borderRadius: '50% 50% 40% 40% / 60% 60% 30% 30%', width: '220px', height: '180px' }}>
                                    <div className="bg-white rounded-circle p-3 text-success d-flex align-items-center justify-content-center shadow-sm" style={{ width: '90px', height: '90px' }}>
                                        <i className="bi bi-fan fs-1"></i>
                                    </div>
                                </div>
                            </div>

                            {/* Right Part */}
                            <div className="position-relative">
                                <div className="blob-shape bg-success text-white d-flex align-items-center justify-content-center shadow-sm" style={{ borderRadius: '60% 40% 30% 70% / 50% 40% 50% 60%', width: '200px', height: '240px', transform: 'rotate(25deg)' }}>
                                    <div className="bg-white rounded-circle p-3 text-success d-flex align-items-center justify-content-center shadow-sm" style={{ width: '90px', height: '90px', transform: 'rotate(-25deg)' }}>
                                        <i className="bi bi-lightning-charge fs-1"></i>
                                    </div>
                                </div>
                                <div className="diagram-label-right position-absolute d-none d-lg-flex">
                                    <div className="horizontal-line-left"></div>
                                    <h6 className="fw-bold text-start mb-0">Our Goal!<br />Environmental Sustainability</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Highlights */}
            <section className="section-padding bg-light" id="services">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Service Highlights</h2>
                        <p className="text-muted" style={{ textAlign: 'justify' }}>To meeting all business needs using our Services</p>
                    </div>

                    <div className="row text-center mb-5">
                        <div className="col">
                            <div className="service-icon-box mb-3">
                                <img src="/assets/images/icon_refurb.png" alt="" className="img-fluid" style={{ height: '60px' }} />
                            </div>
                            <h6>Refurbishment and Recycling</h6>
                        </div>
                        <div className="col">
                            <div className="service-icon-box mb-3">
                                <img src="/assets/images/icon_repair.png" alt="" className="img-fluid" style={{ height: '60px' }} />
                            </div>
                            <h6>Repair as a Service</h6>
                        </div>
                        <div className="col">
                            <div className="service-icon-box mb-3">
                                <img src="/assets/images/icon_precious.png" alt="" className="img-fluid" style={{ height: '60px' }} />
                            </div>
                            <h6>Precious Metals Recovery</h6>
                        </div>
                        <div className="col">
                            <div className="service-icon-box mb-3">
                                <img src="/assets/images/icon_carbon.png" alt="" className="img-fluid" style={{ height: '60px' }} />
                            </div>
                            <h6>Carbon Credits</h6>
                        </div>
                        <div className="col">
                            <div className="service-icon-box mb-3">
                                <img src="/assets/images/icon_upcycle.png" alt="" className="img-fluid" style={{ height: '60px' }} />
                            </div>
                            <h6>Upcycling</h6>
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="service-img-card rounded-4 overflow-hidden position-relative">
                                <img src={service1} className="w-100 object-fit-cover" height="300" alt="Service 1" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-img-card rounded-4 overflow-hidden position-relative">
                                <img src={service2} className="w-100 object-fit-cover" height="300" alt="Service 2" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-img-card rounded-4 overflow-hidden position-relative">
                                <img src={service3} className="w-100 object-fit-cover" height="300" alt="Service 3" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-img-card rounded-4 overflow-hidden position-relative">
                                <img src={service4} className="w-100 object-fit-cover" height="300" alt="Service 4" />
                                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                                    <div className="bg-success rounded-circle p-4 d-inline-block shadow-lg">
                                        <h4 className="m-0">CARBON<br />CREDITS</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="fw-bold mb-3 text-center">Why Choose <span className="text-secondary">Blue Planet E-Waste Solutions?</span></h2>
                    <p className="text-center text-muted mb-5" style={{ textAlign: 'justify' }}>At Blue Planet, we are committed to leading the transition towards a sustainable future through...</p>

                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="choice-card p-4 border rounded-5 shadow-sm hover-shadow h-100 bg-white">
                                <div className="mb-4 overflow-hidden rounded-4">
                                    <img src={why1} className="w-100 object-fit-cover" height="200" alt="Circular Economy Approach" />
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">Circular Economy Approach</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="choice-card p-4 border rounded-5 shadow-sm hover-shadow h-100 bg-white">
                                <div className="mb-4 overflow-hidden rounded-4">
                                    <img src={why2} className="w-100 object-fit-cover" height="200" alt="Compliance and Transparency" />
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">Compliance and Transparency</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="choice-card p-4 border rounded-5 shadow-sm hover-shadow h-100 bg-white">
                                <div className="mb-4 overflow-hidden rounded-4">
                                    <img src={why3} className="w-100 object-fit-cover" height="200" alt="Traceability" />
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">Traceability</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="choice-card p-4 border rounded-5 shadow-sm hover-shadow h-100 bg-white">
                                <div className="mb-4 overflow-hidden rounded-4">
                                    <img src={why4} className="w-100 object-fit-cover" height="200" alt="Secure and Ethical Solutions" />
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">Secure and Ethical Solutions</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awareness Drive */}
            <section className="section-padding bg-cream" style={{ backgroundColor: '#f9f7f0' }}>
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="row g-4">
                                {/* Column 1 */}
                                <div className="col-6 d-flex flex-column gap-4">
                                    <div className="overflow-hidden rounded-custom shadow-sm" style={{ height: '240px' }}>
                                        <img src={awareness1} className="img-fluid w-100 h-100 object-fit-cover" alt="Recycle Sign" />
                                    </div>
                                    <div className="overflow-hidden rounded-custom shadow-sm" style={{ height: '380px' }}>
                                        <img src={drive2} className="img-fluid w-100 h-100 object-fit-cover" alt="Event Booth" />
                                    </div>
                                </div>
                                {/* Column 2 */}
                                <div className="col-6 d-flex flex-column gap-4">
                                    <div className="overflow-hidden rounded-custom shadow-sm" style={{ height: '340px' }}>
                                        <img src={drive3} className="img-fluid w-100 h-100 object-fit-cover" alt="Award Handover" />
                                    </div>
                                    <div className="stat-box-green rounded-custom p-4 shadow-sm" style={{ height: '280px' }}>
                                        <h2 className="fw-bold display-4 mb-2">10000k</h2>
                                        <p className="small lh-sm mb-0 px-2 opacity-90">Kids and families now have access to technology because of our joint efforts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-5">
                            <h2 className="fw-bold awareness-title mb-4">Join us in making<br />the world a <span className="fw-bolder">better<br />place</span></h2>
                            <div className="awareness-divider" style={{ opacity: 1, backgroundColor: '#b0bec5' }}></div>

                            <h4 className="fw-normal text-secondary mb-3 opacity-75" style={{ fontSize: '1.5rem' }}>E-Waste Awareness Drive</h4>
                            <p className="text-secondary lh-lg mb-0" style={{ fontSize: '0.95rem', textAlign: 'justify' }}>The Zero Waste Day E-Waste Drive at Prestige Lakeside Habitat, jointly led by Flipkart Reset and Blue Planet, enabled residents to responsibly dispose of their unused electronics while raising awareness about sustainable recycling. The initiative received an encouraging response and reinforced the importance of community participation in reducing e-waste.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="section-padding">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <h2 className="display-5 fw-bold text-dark">Discover the<br />eSmart way</h2>
                        </div>
                        <div className="col-lg-7">
                            <div className="d-flex align-items-center gap-4">
                                <i className="bi bi-chevron-left fs-1 fw-bold cursor-pointer hover-opacity"></i>
                                <div className="testimonial-content text-center">
                                    <p className="fs-5 text-dark lh-base mb-4">"Blue Planet’s solutions have been an integral part of our sustainability strategy. Their transparency and commitment to ethical recycling ensure that we stay compliant with global e-waste regulations."</p>
                                    <h6 className="fw-bold text-dark mb-0">— Client Name, Position, Company</h6>
                                </div>
                                <i className="bi bi-chevron-right fs-1 fw-bold cursor-pointer hover-opacity"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Glimpses */}
            <section className="section-padding">
                <div className="container text-center">
                    <h5 className="text-muted">Glimpses from</h5>
                    <h2 className="fw-bold mb-2">Our Plant & Facilities</h2>
                    <p className="text-muted mb-5">Perfect Technology For The Sustainable Processed</p>

                    <div className="row g-4 row-cols-1 row-cols-md-3">
                        <div className="col">
                            <div className="overflow-hidden rounded-5">
                                <img src={plant1} className="img-fluid w-100" style={{ height: '350px', objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="overflow-hidden rounded-5">
                                <img src={plant2} className="img-fluid w-100" style={{ height: '350px', objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="overflow-hidden rounded-5">
                                <img src={plant3} className="img-fluid w-100" style={{ height: '350px', objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="overflow-hidden rounded-5">
                                <img src={plant4} className="img-fluid w-100" style={{ height: '350px', objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="overflow-hidden rounded-5">
                                <img src={plant5} className="img-fluid w-100" style={{ height: '350px', objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="overflow-hidden rounded-5">
                                <img src={plant6} className="img-fluid w-100" style={{ height: '350px', objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Relations */}
            <section className="section-padding text-center">
                <div className="container">
                    <h3 className="fw-bold mb-2">Business relations</h3>
                    <p className="text-muted mb-5" style={{ textAlign: 'justify' }}>Trusted by the industry's best</p>
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-4 opacity-75">
                        <img src="/assets/images/logo_client1.png" height="40" alt="Client 1" />
                        <img src="/assets/images/logo_client2.png" height="40" alt="Client 2" />
                        <img src="/assets/images/logo_client3.png" height="40" alt="Client 3" />
                        <img src="/assets/images/logo_client4.png" height="40" alt="Client 4" />
                        <img src="/assets/images/logo_client5.png" height="40" alt="Client 5" />
                    </div>
                </div>
            </section>

            {/* Media Section */}
            <section className="section-padding pb-5">
                <div className="container">
                    <div className="row g-4 text-center">
                        <div className="col-md-4">
                            <h4 className="fw-bold mb-4">Press Release</h4>
                            <div className="bg-dark rounded-4 text-white d-flex align-items-center justify-content-center" style={{ height: '300px', backgroundImage: 'url(/assets/images/news_1.jpg)', backgroundSize: 'cover' }}>
                                <div className="bg-white rounded-circle p-2 bg-opacity-75">
                                    <i className="bi bi-play-fill fs-1 text-dark"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h4 className="fw-bold mb-4">Featured By</h4>
                            <div className="bg-dark rounded-4 text-white d-flex align-items-center justify-content-center" style={{ height: '300px', backgroundImage: 'url(/assets/images/news_2.jpg)', backgroundSize: 'cover' }}>
                                <div className="bg-white rounded-circle p-2 bg-opacity-75">
                                    <i className="bi bi-play-fill fs-1 text-dark"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h4 className="fw-bold mb-4">Podcast</h4>
                            <div className="bg-dark rounded-4 text-white d-flex align-items-center justify-content-center" style={{ height: '300px', backgroundImage: 'url(/assets/images/news_3.jpg)', backgroundSize: 'cover' }}>
                                <div className="bg-white rounded-circle p-2 bg-opacity-75">
                                    <i className="bi bi-play-fill fs-1 text-dark"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-wrapper p-4">
                <div className="container-fluid bg-success text-white rounded-5 p-5 position-relative overflow-hidden footer-container">
                    <div className="row g-5">
                        {/* Left Column */}
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

                        {/* Middle Content */}
                        <div className="col-lg-5 d-flex flex-column">
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
                                    <input type="email" className="form-control rounded-pill border-0 py-3 ps-5 pe-5 custom-newsletter-input" placeholder="Email Address" style={{ paddingLeft: '3.5rem !important' }} />
                                    <button className="btn rounded-pill position-absolute end-0 top-50 translate-middle-y me-2 px-4 py-2 fw-bold text-white shadow-none" style={{ backgroundColor: '#000', fontSize: '0.9rem' }}>Submit</button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
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
}

export default Home;
