import React, { Fragment } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import './it-img.css';

import image1 from "../../assets/images/hospital1.jpg"
import image2 from "../../assets/images/hospital2.jpg"
import image3 from "../../assets/images/hospital3.jpg"
import image4 from "../../assets/images/hospital4.jpg"
import image5 from "../../assets/images/hospital5.jpg"
import image6 from "../../assets/images/hospital6.jpeg"
import image7 from "../../assets/images/hospital7.jpeg"
import image8 from "../../assets/images/hospital8.jpeg"

import image9 from "../../assets/images/nabh.png"
import image10 from "../../assets/images/nabl.png"

const Hospitals = () => {
    const hospital__info = [
        {
            image    : image1,
            title    : "Max Super Speciality Hospital",
            location : "Delhi- Press Enclave Road, New Delhi 110017",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image2,
            title    : "Fortis Memorial Research Institute",
            location : "Gurgaon- Sector - 44, Opposite Huda City Centre, Gurugram, Haryana 122002",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image3,
            title    : "Artemis Hospital",
            location : "Gurgaon- Sector 51, Gurugram, Haryana 122001",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image4,
            title    : "BLK Hospital Delhi- Pusa Road",
            location : "New Delhi, Delhi 110005",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image5,
            title    : "Sanar International Hospital",
            location : "Golf Course Road, Dlf Phase 5, Sector 53, Gurgaon, Gurgaon 122002",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image6,
            title    : "Max Shalimarbagh",
            location : "Delhi- FC - 50, C & D Block, New Delhi, Delhi 110088",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image7,
            title    : "Indraprastha Apollo",
            location : "Delhi- GD Birk Marg, Near Pizza Hut, Pocket A, Jasola, Delhi 110076",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image8,
            title    : "Medanta the Medicity",
            location : "Gurgaon- CH Baktawar Singh Road, Gurugram, Haryana 122001",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
    ]

    return (
        <Fragment>
            <div className="it-img_section">
                <div className="container">
                    <div className="it-img_area"> 
                        <div className="it-img_list_section">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            // autoplay={{
                            //     delay: 2000,
                            //     disableOnInteraction: false
                            // }}
                            loop={true} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} >
                                {
                                    hospital__info.map((item, index)=>
                                        <SwiperSlide key={index}> 
                                            <div className="it-img-txt">
                                                <Row className="align-items-center">
                                                    <Col md={6}>
                                                        <img width="100%" src={item?.image} alt="image" />
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="content">
                                                            <h4>{item.title}</h4>
                                                            <span>{item.location}</span>
                                                            <div className="sm_item d-flex">
                                                                <div className="sm_img">
                                                                    <img src={item.image2} alt="image" />
                                                                </div>
                                                                <div className="sm_txt">
                                                                    <p>Our <strong>NABH & ISO</strong>  accredited hospitals offer <br /> <strong>best in class services to our patients</strong></p>
            
                                                                </div>
                                                            </div>
                                                            <div className="sm_item d-flex">
                                                                <div className="sm_img">
                                                                    <img src={item.image3} alt="image" />
                                                                </div>
                                                                <div className="sm_txt">
                                                                    <strong>NABL</strong>
                                                                    <p>accredited Labs</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                            
                         </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Hospitals;