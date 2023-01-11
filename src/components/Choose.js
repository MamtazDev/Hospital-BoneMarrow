import React from "react"

import image1 from "../../src/assets/images/choose1.png"
import image2 from "../../src/assets/images/choose2.png"
import image3 from "../../src/assets/images/choose3.png"
import image4 from "../../src/assets/images/choose4.png"

const Choose = () =>{
    const chooseInfo = [
        {
            image : image1,
            title : "Award-winning Support Team"
        },
        {
            image : image2,
            title : "State of the Art infrastructure"
        },
        {
            image : image3,
            title : "Cutting-Edge Technology"
        },
        {
            image : image4,
            title : "Highly Skilled Doctors"
        }
    ]

    return(
        <section className="choose__section">
            <div className="container">
                <div className="choose__inner">
                    <h2>WHY CHOOSE MARLIN MEDICAL ASSISTANCE FOR BONE MARROW TRANSPLANT?</h2>

                    <div className="row choose__box justify-content-center">
                    {chooseInfo.map((item, index)=>
                        <div className="col-sm-6 col-md-4" key={index}>
                            <div className="box mb-5" >
                                <div className="image"><img src={item.image} /></div>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Choose;