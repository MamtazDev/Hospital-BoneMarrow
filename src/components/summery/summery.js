import React, { Fragment } from "react"; 
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import './summery.css'

const Summery = () => {
    return (
        <Fragment>
            <div className="summery_section">
                <div className="container">
                    <div className="summery_inner">
                        <Row className="align-items-center">
                            <Col md={6}>
                                <div className="summery_text">
                                    <h2>Marlin Medical Assistance Pvt Ltd</h2>
                                    <p>With thousands of happy patients across the globe specially from Middle East, 
                                        CIS and African countries, Marlin Medical assistance has been credited as one 
                                        of the most reliable medical tourism company in India</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <img src="" alt="" />
                                <div className="summery_vid">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Shvd46gNKTE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Summery