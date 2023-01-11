import React, { Fragment, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Col  from 'react-bootstrap/Col';
import Row  from 'react-bootstrap/Row';
import './accordion.css';


const Accordionn = () => {


    const [show, setShow] = useState(false);


    return(
        <Fragment> 
            <div className="question_section">
                <div className="container">
                    <div className="question_title">
                        <h2 className="text-center">Treatment available for</h2>
                        <p>
                            Bone Marrow Transplant is an advanced medical procedure that is used to treat diseases that were once thought to be incurable. It was first successfully used in the year 1986. Now they have been used to treat patients who have been diagnosed with leukemia, aplastic anemia, lymphomas such as multiple myeloma, Hodgkin’s disease, immune
                            deficiency disorders, and tumors such as ovarian and breast cancer. <button onClick={ () => setShow(!show)} className="readmorebtn">{show ? 'Less...' : 'Read More...' }</button>
                        </p>
                        {
                            show &&  <div className="reademoretxt">
                            <strong>We provide all of the following bone marrow transplant procedures</strong>
                            <p>Allogeneic and autologous transplants are the two most common forms, depending on who provides the bone marrow or stem cells</p>
                            <strong>Autologous bone marrow transplant: </strong> <span style={{ marginBottom: "10px", display:'inline-block' }}>The patient's own bone marrow is used to harvest healthy bone marrow cells.</span><br />
                            <strong>Allogenic bone marrow transplant: </strong> <span>Bone marrow cells are obtained from a related donor. </span>
                            <div className="read_txt_list">
                                <ul>
                                    <li>- It can be matched related, in which case the donor is a sibling or other HLA-matched relative.</li>
                                    <li>- Matched Unrelated, when the donor is typically found from one of the numerous national or international registries and is not a family of the patient.</li>
                                    <li>- In a partially matched related case, the donor comes from the patient's family (haploidentical)</li>
                                </ul>
                            </div>
                            <strong  style={{ marginTop: "10px", display:'inline-block' }}>How does HLA typing work? </strong><br />
                            <p>HLA typing is just blood test that is administered to patients and potential donors to determine how closely the recipient and potential donors match each other. This makes it feasible to choose the ideal donor for an allogeneic transplant.</p>
                            <strong>How can I consult top doctors for Bone Marrow Transplant for second opinion or medical advice?</strong><br />
                            <div className="second_list">
                                <ul>
                                    <li>- Contact us by sending your information via Email, WhatsApp etc</li>
                                    <li>- Get appointment with doctors for bone marrow transplants.</li>
                                    <li>- Get in touch with the Marlin Healthcare Services' staff</li>
                                </ul>
                            </div>
                            <strong style={{ marginTop: "10px", display:'inline-block' }}>The procedure of bone marrow transplant</strong>
                            <p>The first step is the extraction of the bone marrow cells from the donor by making punctures under general anesthesia. In the second step, pre-engraftment is done in which high-dose chemo-radiotherapy is done. Here the blood stem cells are destroyed and the normal blood cells are not produced. The patient has to be kept in a clean room at this time. The third step is post-engraftment. Here the donated stem cell will start functioning. The patient can come out of critical isolation at this time.</p>
                            <strong>Bone Marrow Transplant can be done when;</strong>
                        </div>
                        }
                    </div>
                    <div className="question_inner">
                        <Row>
                            <Col md={6}>
                                <div className="question_item">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Thalassemia</Accordion.Header>
                                        <Accordion.Body>
                                        According to medical professionals, roughly 10,000–12,000 infants in India are born each year with beta-thalassemia major, an inherited blood condition. Each person has two beta chains in their blood, one from their mother and one from their father. If only one chain is compromised, thalassemia minor is identified in the youngster, who otherwise has no abnormalities than occasional moderate anaemia. However, if both beta chains are impacted, thalassemia major is identified and the child will require monthly blood transfusions for the rest of their lives. An all-or-nothing bone marrow transplant is the only choice for treating Thalassemia Major.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Multiple Myeloma- </Accordion.Header>
                                        <Accordion.Body>
                                        It is a form of blood cancer that affects white blood cells and causes a number of lesions. Men over 60 years old are most frequently affected. The patient's life is greatly prolonged and is of higher quality despite the fact that the condition is incurable yet responds effectively to bone marrow transplant.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Leukemias-</Accordion.Header>
                                        <Accordion.Body>
                                        It is a disorder of the lymphatic system and bone marrow, a spongy substance. Leukemia is one of the more challenging malignancies to cure since it causes the body's WBC count to rise. Depending on the patient's condition and the disease's stage, the type of treatment is chosen.
                                        </Accordion.Body>
                                    </Accordion.Item> 
                                </Accordion>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="question_item">
                                <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="4">
                                        <Accordion.Header>Sickle Cell Anaemia: </Accordion.Header>
                                        <Accordion.Body>
                                        It is a condition in which a child's red blood cells take on the appearance of sickles instead of being spherical and become hard and sticky. It is known that these abnormal blood cells can become lodged in the bloodstream and obstruct the free circulation of blood throughout the body. The only treatment for these blood cells in children with this condition is a BMT.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Aplastic Anaemia (Bone Marrow Failure): </Accordion.Header>
                                        <Accordion.Body>
                                        When the bone marrow produces fewer or no new blood cells, children might develop Aplastic Anaemia. This may be a side effect of cancer treatment, an infection, certain drugs, or other factors. BMT is the recommended course of treatment if a fully matched sibling donor is available.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>Neuroblastoma: </Accordion.Header>
                                        <Accordion.Body>
                                        It is the most common type of nerve cell tumour in infants and young children. More than ten percent of all malignant neoplasms in infancy and early childhood are brought on by it. Only around 30% of patients with high-risk neuroblastoma respond well to treatment. Patients with neuroblastoma in their advanced stages have survival rates that are substantially lower than 20%.
                                        </Accordion.Body>
                                    </Accordion.Item> 
                                </Accordion>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </Fragment> 
    )

}

export default Accordionn;