import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode, Pagination } from "swiper";
import "swiper/css/pagination";
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import {doctor} from './doctorApi';
import './doctorList.css'
 

const DoctorList = () => {

    return (
        <Fragment>
            <div className="doctor_section">
                <div className="container-fluid">
                    <div className="doctor_area">
                        <Row>
                            <Col>
                            <div className="doctor_title text-center">
                                <h2>CONSULT OUR BONE MARROW TRANSPLANT SPECIALISTS</h2>
                                <p>Consult the best Hemato-Oncologist at the chain of hospitals that Marlin is affiliated with for blood and bone marrow related problems.</p>
                            </div>
                            </Col>
                        </Row>
                       
                        <div className="doctor_list_section">
                        <Swiper
                            modules={[Pagination, Autoplay, FreeMode]}
                            breakpoints={{
                                0: {
                                  slidesPerView: 1,
                                  spaceBetween: 10,
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 15,
                                },
                                1280: {
                                    slidesPerView: 5,
                                    spaceBetween: 30,
                                },
                                 
                              }}
                            freeMode={true}
                            spaceBetween={30}
                            slidesPerView={6}
                            slidesPerGroup={6}
                            pagination={{ clickable: true }}
                    
                            // autoplay={{
                            //     delay: 2000,
                            //     disableOnInteraction: false
                            // }}
                            // loop={true}
                            
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                                {
                                    doctor.map((doc) => {
                                    const { id, name , image , title , hospital_name} = doc
                                    return <SwiperSlide key={id}> 
                                        <div className="doctro_slider_content">
                                            <img height="250px" width="100%" src={image} alt="" />
                                            <div className="s_body">
                                                <h4>{name}</h4>
                                                <p>{title}</p>
                                                <p><strong>{hospital_name}</strong></p>
                                            </div>
                                        </div>
                                    </SwiperSlide> 
        
                                    })
                                } 

                         </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default DoctorList