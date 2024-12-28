import React from 'react'
import Navbar from '../Components/Navbar.jsx';
import Background from '../Components/Page1.jsx';
import Last from '../Components/Last.jsx';
import Features from '../Components/Features1.jsx';
import Aifeatures from '../Components/Aifeatures.jsx';
import AINotesLanding from '../Components/AiNotesLanding.jsx';
import Security from '../Components/Security.jsx';
import Footer from '../Components/Footer.jsx';
import Integration from '../Components/Integrations.jsx';
import Pricing from '../Components/Pricing.jsx';
import Glow from '../Components/GlowSection.jsx'


function Home() {
    return (
        <div className="bg-[#030014] min-h-screen max-w-screen">
            <Navbar />
            <Background/>
            <Features/>
            <Glow />
            <AINotesLanding/>
            <Aifeatures/>
            <Security/>
            <Integration/>
            <Pricing/>
            <Last/>
            <Footer/>
        </div>
    )
}

export default Home
