import React, { Fragment, useState, useEffect } from "react";
import './navbar.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/images/logo.jpg';
import { FaCheckCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
// import hero_img from '../../assets/images/hero_img.png';
import hero_img from '../../assets/images/hero_img-removebg-preview.png';
import whatsapp from '../../assets/images/whatsapp.png';
import { ToastContainer, toast } from 'react-toastify';




const Navbar = () => {

    const initialValue = {name: "", phone: ""}

    const [formValue, setFormValue] = useState(initialValue);
    const [formError, setFormError] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)


    const handelChange = (e) => {
        const {name, value} = e.target;
        setFormValue({ ...formValue, [name] : value })
    }


    const handelSubmit = (e) => {
        e.preventDefault();
        setFormError(validator(formValue))
        setIsSubmit(true)
    }


    useEffect( () => { 

        if(Object.keys(formError).length === 0 && isSubmit) {
            toast.success("From Submit success");
        }

    },[formError])


    const validator = (value) => {
        const error = {}

        if(!value.phone){
            error.phone = "Phone is required";
        }
        else if(!value.name) {
            error.name = "Name is required !"
        }

        return error;


    }
 
    return(
        <Fragment> 
          <div className="navbar_section">
            <div className="navbar_wrapper">
                <div className="container">
                    <div className="navbar_inner">
                        <div className="logo">
                            <img style={{ width:'130px;', borderRadius:"12px"}} src={logo} alt="logo" />
                        </div>
                        <div className="phone">
                            <a href="tel:+91- 8984 900 900"> +91- 8984 900 900</a>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="container">
                <div className="hero_section">
                    <div className="hero_section_inner">
                        <Row className="align-items-center">
                            <Col md={8} >
                                <div className="hero_content">
                                    <Row className="align-items-center">
                                        <Col md={5}>
                                            <div className="hero_image">
                                                <img src={hero_img} alt="hero image" />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="helo_right_content">
                                                <h4> Centre for Bone Marrow Transplant </h4>
                                                <p>Get Bone Marrow Transplant done by our highly qualified Hemato-Oncologist and Pediatric Hematologic-Oncologist equipped with advance equipment and Cutting-edge technology at Marlin’s associated hospitals.</p>
                                                <div className="h_list">
                                                    <ul>
                                                        <li> <FaCheckCircle className="circle" /> <strong>25+</strong>Years of Experience</li>
                                                        <li><FaCheckCircle className="circle" /><strong>1000+</strong> Bone Marrow Transplants Done </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={1}></Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={4} className="text-end" >
                                <div className="hero_form_section">
                                   <div className="hero_fm_title">
                                        <p>GET A CALL BACK FROM OUR HEALTH ADVISOR</p>
                                   </div>
                                   {/* <pre>
                                    {
                                        JSON.stringify(formValue, undefined, 2)
                                    }
                                   </pre> */}
                                    <form onSubmit={handelSubmit}>
                                        <input type="text" name="name" onChange={handelChange} value={formValue.name} placeholder="Name*" />
                                        <input type="text" name="phone" onChange={handelChange} value={formValue.phone} placeholder="Phone*"/>
                                        <input type="email" placeholder="Email"  /> 
                                        <textarea rows={3} placeholder="Write your query (Optional)"></textarea>
                                        <button className="hero_submit_btn" >Submit</button>
                                        <div className="fm_text">
                                            <p style={{ marginBottom: "5px" }}>By clicking you agree to our T&Cs</p>
                                            <input defaultChecked={true} type="checkbox" /> <span>Get Updates on Whatsapp <a href="tel:+91- 8984 900 900"> <img width="25px" height="25px" src={whatsapp} alt="" /></a>  </span>
                                            <p> <span> <FaInfoCircle className="infoIcon" />  </span> We will never share your personal info</p>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <ToastContainer />
          </div>
          
        </Fragment>
    )

}



export default Navbar;