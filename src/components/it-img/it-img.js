// import React, { Fragment } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Autoplay, Pagination } from "swiper";
// import "swiper/css/pagination";
// import Row  from 'react-bootstrap/Row';
// import Col  from 'react-bootstrap/Col';
// import './it-img.css';
// import img1 from '../../assets/images/max-gurgaon.jpg'
// import img4 from '../../assets/images/max-smart-saket.jpg'
// import img2 from '../../assets/images/nabh.png'
// import img3 from '../../assets/images/nabl.png'


// const It_Img = () => {

//     return (
//         <Fragment>
//             <div className="it-img_section">
//                 <div className="container">
//                     <div className="it-img_area"> 
//                         <div className="it-img_list_section">
//                         <Swiper
//                             modules={[Pagination, Autoplay]}
//                             spaceBetween={50}
//                             slidesPerView={1}
//                             pagination={{ clickable: true }}
//                             // autoplay={{
//                             //     delay: 2000,
//                             //     disableOnInteraction: false
//                             // }}
//                             loop={true}
//                             onSlideChange={() => console.log('slide change')}
//                             onSwiper={(swiper) => console.log(swiper)}
//                             >
//                             <SwiperSlide> 
//                                 <div className="it-img-txt">
//                                     <Row className="align-items-center">
//                                         <Col md={6}>
//                                             <img width="100%" src={img1} alt="" />
//                                         </Col>
//                                         <Col md={6}>
//                                             <div className="content">
//                                                 <h4>Our Liver Transplant and <br /> Biliary Sciences Hospital Network</h4>
//                                                 <span>Max Super Speciality Hospital, Dehradun</span>
//                                                 <div className="sm_item d-flex">
//                                                     <div className="sm_img">
//                                                         <img src={img2} alt="" />
//                                                     </div>
//                                                     <div className="sm_txt">
//                                                         <p>Our <strong>NABH & ISO</strong>  accredited hospitals offer <br /> <strong>best in class services to our patients</strong></p>

//                                                     </div>
//                                                 </div>
//                                                 <div className="sm_item d-flex">
//                                                     <div className="sm_img">
//                                                         <img src={img3} alt="" />
//                                                     </div>
//                                                     <div className="sm_txt">
//                                                         <strong>NABL</strong>
//                                                         <p>accredited Labs</p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </Col>
//                                     </Row>
//                                 </div>
//                             </SwiperSlide>
//                             <SwiperSlide> 
//                                 <div className="it-img-txt">
//                                     <Row className="align-items-center">
//                                         <Col md={6}>
//                                             <img width="100%" src={img4} alt="" />
//                                         </Col>
//                                         <Col md={6}>
//                                             <div className="content">
//                                                 <h4>Our Liver Transplant and <br /> Biliary Sciences Hospital Network</h4>
//                                                 <span>Max Super Speciality Hospital, Dehradun</span>
//                                                 <div className="sm_item d-flex">
//                                                     <div className="sm_img">
//                                                         <img src={img2} alt="" />
//                                                     </div>
//                                                     <div className="sm_txt">
//                                                         <p>Our <strong>NABH & ISO</strong>  accredited hospitals offer <br /> <strong>best in class services to our patients</strong></p>

//                                                     </div>
//                                                 </div>
//                                                 <div className="sm_item d-flex">
//                                                     <div className="sm_img">
//                                                         <img src={img3} alt="" />
//                                                     </div>
//                                                     <div className="sm_txt">
//                                                         <strong>NABL</strong>
//                                                         <p>accredited Labs</p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </Col>
//                                     </Row>
//                                 </div>
//                             </SwiperSlide>
//                          </Swiper>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Fragment>
//     )

// }

// export default It_Img