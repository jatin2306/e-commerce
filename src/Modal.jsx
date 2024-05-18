import React, { useState } from 'react'
import img from "../assets/blog-1.jpg";

const Modal = () => {
    const [modal, setModal] = useState(false)

    return (
        <>
            <div className={`modal ${modal ? "closed" : ""}`} data-modal>

                <div className="modal-close-overlay" data-modal-overlay onClick={() => setModal(!modal)}></div>

                <div className="modal-content">

                    <button className="modal-close-btn" data-modal-close onClick={() => setModal(!modal)}>
                        <ion-icon name="close-outline" onClick={() => setModal(!modal)}></ion-icon>
                    </button>

                    <div className="newsletter-img">
                        <img src={img} alt="subscribe newsletter" width="400" height="400" />
                    </div>

                    <div className="newsletter">

                        <form action="#">

                            <div className="newsletter-header">

                                <h3 className="newsletter-title">Subscribe Newsletter.</h3>

                                <p className="newsletter-desc">
                                    Subscribe the <b>Anon</b> to get latest products and discount update.
                                </p>

                            </div>

                            <input type="email" name="email" className="email-field" placeholder="Email Address" required />

                            <button type="submit" className="btn-newsletter">Subscribe</button>

                        </form>

                    </div>

                </div>

            </div></>
    )
}

export default Modal