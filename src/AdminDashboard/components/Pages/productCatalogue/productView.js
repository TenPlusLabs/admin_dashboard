import React from 'react';
import './style.css'
import img from '../../../../assets/lana.jpg'
import Navbar from '../../Navbar/Navbar';
function ProductView() {
  return <>
  <main id="main">  
  <Navbar pg_name='Product View'/>  
    {/* <!-- ======= Portfolio Details Section ======= --> */}
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper-container">
              <div class="swiper-wrapper align-items-center">

                <div class="swiper-slide">
                  <img src={img} alt="yo" />
                </div>

                {/* <div class="swiper-slide">
                  <img src={img} alt="yo" />
                </div>

                <div class="swiper-slide">
                  <img src={img} alt="yo" />
                </div> */}

              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Product Details</h3>
              <ul>
                <li><strong>Category</strong>: Web design</li>
                <li><strong>Client</strong>: ASU Company</li>
                <li><strong>Project date</strong>: 01 March, 2020</li>
                <li><strong>Project URL</strong>:www.example.com</li>
              </ul>
            </div>
            <div class="portfolio-description">
              <h2>Product Description</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Portfolio Details Section --> */}

  </main>
  {/* <!-- End #main --> */}
  </>;
}

export default ProductView;
