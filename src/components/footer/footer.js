import React, { Fragment, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import './footer.css'
import {footerTxt} from './footerApi';
import { FaAngleUp , FaAngleDown} from "react-icons/fa";


const Footer = () => {

    const [show, setShow] = useState(false)

    return(
        <Fragment>
            <div className="footer_section">
                <div className="container">
                    <div className="footer_area"> 
                            <div className="footer_list">
                                
                               <div className="footer_btn">
                                    <button onClick={ ()=> setShow(!show) } >Open Footer {show ? <FaAngleUp /> : <FaAngleDown />}</button>
                               </div>
                               
                                {
                                    show ?
                                    <div className=" footer_list_inner open">
                                    <p>Marlin Medical Assistance Pvt. Ltd. is an award winning & professionally managed international medical tourism company, based at New Delhi in India. MMA Pvt. Ltd. caters to the needs of Ministry of Health, Insurance Companies, Health Service Providers, Self-funded Business persons and Third Party Administrators besides individuals seeking affordable Medical Treatment and Travel Options.</p>
                                       <ul>
                                       {
                                           footerTxt.map( (footer) => {
                                               return <li key={footer.id}><a href="#">{footer.name}</a></li>
                                           } )
                                       }
                                       </ul>
                                    </div>
                                    :
                                    <div className="footer_list_inner close">
                                    <strong>Looking for Something Specific</strong>
                                    <p>Marlin Medical Assistance Pvt. Ltd. is an award winning & professionally managed international medical tourism company, based at New Delhi in India. MMA Pvt. Ltd. caters to the needs of Ministry of Health, Insurance Companies, Health Service Providers, Self-funded Business persons and Third Party Administrators besides individuals seeking affordable Medical Treatment and Travel Options.</p>
                                       <ul>
                                       {
                                           footerTxt.map( (footer) => {
                                               return <li key={footer.id}><a href="#">{footer.name}</a></li>
                                           } )
                                       }
                                       </ul>
                                    </div>
                                }
                                
                               
                            </div> 
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default Footer