import React from 'react'
import img from "../assets/blog-1.jpg";

const TestiMonials = () => {
    return (
        <>
            <div className="testimonial">

                <h2 className="title">testimonial</h2>

                <div className="testimonial-card">

                    <img src={img} alt="alan doe" className="testimonial-banner" width="80" height="80" />

                    <p className="testimonial-name">Alan Doe</p>

                    <p className="testimonial-title">CEO & Founder Invision</p>

                    <img src={img} className="quotation-img" width="26" />

                    <p className="testimonial-desc">
                        Lorem ipsum dolor sit amet consectetur Lorem ipsum
                        dolor dolor sit amet.
                    </p>

                </div>

            </div>
        </>)
}

export default TestiMonials