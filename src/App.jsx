import Banner from './Banner';
import Blog from './Blog';
import Category from './Category';
import Cta from './Cta';
import Footer from './Footer';
import Header from './Header/Header';
import Modal from './Modal';
import Notification from './Notification';
import ProductMinimal from './ProductMinimal';
import ProductsFeatured from './ProductsFeatured';
import ProductsGrid from './ProductsGrid';
import Services from './Services';
import SideBar from './SideBar';
import TestiMonials from './TestiMonials';
function App() {
  return (
    <>
      <div class="overlay" data-overlay></div>
      <Modal />
      <Notification />
      <Header />
      <main>
        <Banner />
        <Category />
        <div class="product-container">
          <div class="container">
            <SideBar />
            <div class="product-box">
              <ProductMinimal />
              <ProductsFeatured />
              <ProductsGrid />
            </div>
          </div>
        </div>
        <div>
          <div class="container">
            <div class="testimonials-box">
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
  );
}

export default App;
