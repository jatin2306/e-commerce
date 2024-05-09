import React, { useState } from 'react'
import img from '../assets/blog-1.jpg'

const Notification = () => {
    const [notification, setnotification] = useState(false)

    return (
        <>
            <div class={`notification-toast ${notification ? "closed" : ""}`} data-toast>

                <button class="toast-close-btn" data-toast-close>
                    <ion-icon name="close-outline" onClick={() => setnotification(true)}></ion-icon>
                </button>

                <div class="toast-banner">
                    <img src={img} alt="Rose Gold Earrings" width="80" height="70" />
                </div>

                <div class="toast-detail">

                    <p class="toast-message">
                        Someone in new just bought
                    </p>

                    <p class="toast-title">
                        Rose Gold Earrings
                    </p>

                    <p class="toast-meta">
                        <time datetime="PT2M">2 Minutes</time> ago
                    </p>

                </div>

            </div></>
    )
}

export default Notification