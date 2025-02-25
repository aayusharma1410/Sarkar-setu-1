import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Empowering Citizens with Information</h1>
                    <p>Your one-stop destination for government schemes and challan verification.</p>
                    <div className="hero-buttons">
                        <a href="/schemes" className="button schemes-button">Explore Schemes</a>
                        <a href="/challan" className="button challan-button">Verify Challan</a>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="feature-card">
                    <h3>Government Schemes</h3>
                    <p>Discover various government schemes tailored to your needs. Find eligibility criteria, benefits, and application processes.</p>
                    <a href="/schemes" className="learn-more">Learn More</a>
                </div>
                <div className="feature-card">
                    <h3>Challan Verification</h3>
                    <p>Easily verify your challan details online. Enter your vehicle or challan number to get instant information.</p>
                    <a href="/challan" className="learn-more">Verify Now</a>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
