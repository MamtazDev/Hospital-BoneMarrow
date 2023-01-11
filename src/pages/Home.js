import React, { Fragment } from "react";

import Navbar from "../components/nav/navbar";
import Accordionn from "../components/accordion/accordion";
import DoctorList from "../components/doctorList/doctorList";
import Summery from "../components/summery/summery";
import Review from "../components/review/review";
import Technology from './../components/technology/technology';
// import It_Img from './../components/it-img/it-img';
import Contact from './../components/contact/contact';
import Footer from "../components/footer/footer";
import Choose from "../components/Choose";
import Hospitals from "../components/it-img/Hospitals";

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <Accordionn />
            <Choose />
            <DoctorList />    
            <Summery /> 
            <Review />
            <Technology />
            {/* <It_Img />   */}
            <Hospitals />
            <Contact />
            <Footer />
        </Fragment>

    )
}

export default Home;