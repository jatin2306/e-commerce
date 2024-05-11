import React, { useState } from 'react'
import img from '../assets/blog-1.jpg'

const Notification = () => {
    const [notification, setnotification] = useState(false)

    return (
        <>
            <div className={`notification-toast ${notification ? "closed" : ""}`} data-toast>

                <button className="toast-close-btn" data-toast-close>
                    <ion-icon name="close-outline" onClick={() => setnotification(true)}></ion-icon>
                </button>

                <div className="toast-banner">
                    <img src={img} alt="Rose Gold Earrings" width="80" height="70" />
                </div>

                <div className="toast-detail">

                    <p className="toast-message">
                        Someone in new just bought
                    </p>

                    <p className="toast-title">
                        Rose Gold Earrings
                    </p>

                    <p className="toast-meta">
                        <time dateTime="PT2M">2 Minutes</time> ago
                    </p>

                </div>

            </div></>
    )
}

export default Notification