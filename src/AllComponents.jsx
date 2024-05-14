import React, { useEffect } from 'react'
import Modal from './Modal'
import Notification from './Notification'
import Header from './Header/Header'
import Banner from './Banner'
import Category from './Category'
import SideBar from './SideBar'
import ProductMinimal from './ProductMinimal'
import ProductsFeatured from './ProductsFeatured'
import ProductsGrid from './ProductsGrid'
import TestiMonials from './TestiMonials'
import Cta from './Cta'
import Services from './Services'
import Blog from './Blog'
import Footer from './Footer'

const AllComponents = () => {
    useEffect(() => {
        var sheet = document.getElementById("logincss")
        sheet.disabled = true;
    }, [])
    return (
        <>
            <div className="overlay" data-overlay></div>
            <Modal />
            <Notification />
            <Header />
            <main>
                <Banner />
                <Category />
                <div className="product-container">
                    <div className="container">
                        <SideBar />
                        <div className="product-box">
                            <ProductMinimal />
                            <ProductsFeatured />
                            <ProductsGrid />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="testimonials-box">
                            <TestiMonials />
                            <Cta />
                            <Services />
                        </div>
                    </div>
                </div>
                <Blog />
            </main>
            <Footer />
        </>
    )
}

export default AllComponents