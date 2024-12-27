import React from 'react';
import Navbar from './components/navbar.jsx';
import Background from './components/Page1.jsx';
import Last from './components/Last.jsx';
import Features from './components/Features1.jsx';
import Aifeatures from './components/Aifeatures.jsx';
import AINotesLanding from './components/AiNotesLanding.jsx';
import Security from './components/Security.jsx';
import Footer from './Footer.jsx';
import Integration from './components/Integrations.jsx';
import Pricing from './components/Pricing.jsx';

function App() {
    return (          
       <div className="bg-custom-gradient min-h-screen max-w-screen border-double ">
            <Navbar />
            <Background/>
            <Features/>
            <AINotesLanding/>
            <Aifeatures/>
            <Security/>
            <Integration/>
            <Pricing/>
            <Last/>
            <Footer/>
        </div>
    );
}

export default App;


