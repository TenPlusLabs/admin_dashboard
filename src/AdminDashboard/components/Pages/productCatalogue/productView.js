import React from "react";
import "./style.css";
import img from "../../../../assets/lana.jpg";
import Navbar from "../../Navbar/Navbar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Rows = [
  {
    id: 1,
    page_title: "TenPlus Labs",
    product_url: "https://tenplus.com",
    sub_category: "some sub cat",
    date_description: "0",
    price: "200,000",
    date: "2021/05/05",
    category: "some cat",
    total_oders: "5",
    latest_in_order: "2",
    in_stock: "5",
  },
  {
    id: 2,
    page_title: "TenPlus Labs",
    product_url: "https://tenplus.com",
    sub_category: "some sub cat",
    date_description: "0",
    price: "200,000",
    date: "2021/05/05",
    category: "some cat",
    total_oders: "5",
    latest_in_order: "2",
    in_stock: "5",
  },
  {
    id: 3,
    page_title: "TenPlus Labs",
    product_url: "https://tenplus.com",
    sub_category: "some sub cat",
    date_description: "0",
    price: "200,000",
    date: "2021/05/05",
    category: "some cat",
    total_oders: "5",
    latest_in_order: "2",
    in_stock: "5",
  },
  {
    id: 4,
    page_title: "TenPlus Labs",
    product_url: "https://tenplus.com",
    sub_category: "some sub cat",
    date_description: "0",
    price: "200,000",
    date: "2021/05/05",
    category: "some cat",
    total_oders: "5",
    latest_in_order: "2",
    in_stock: "5",
  },
  {
    id: 5,
    page_title: "TenPlus Labs",
    product_url: "https://tenplus.com",
    sub_category: "some sub cat",
    date_description: "0",
    price: "200,000",
    date: "2021/05/05",
    category: "some cat",
    total_oders: "5",
    latest_in_order: "2",
    in_stock: "5",
  },
  {
    id: 6,
    page_title: "TenPlu Lab",
    product_url: "https://tenplus.com",
    sub_category: "some sub cat",
    date_description: "0",
    price: "200,000",
    date: "2021/05/05",
    category: "some cat",
    total_oders: "5",
    latest_in_order: "2",
    in_stock: "5",
  },
];

const Table = (props) => {
  const {
    id,
    page_title,
    date,
    product_url,
    sub_category,
    category,
    in_stock,
    total_oders,
    price,
    latest_in_order,
  } = props;

  // const [openModal, setOpenModal] = useState('');
  // const handleShow = () => {
  //     return <BasicModal />
  //   };

  return (
    <tr>
      <td>{id}</td>
      <td className="page_title" style={{ width: "150px" }}>
        {page_title}
      </td>
      <td>{product_url}</td>
      <td>{category}</td>
      <td>{sub_category}</td>
      <td>{total_oders}</td>
      <td>{in_stock}</td>
      <td>{price}</td>
      <td>{latest_in_order}</td>
      <td>{date}</td>
      <td>{in_stock}</td>
    </tr>
  );
};

function ProductView() {
  return (
    <>
      <main id="main">
        <Navbar pg_name="Product View" />
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
                    <li>
                      <strong>Category</strong>: Web design
                    </li>
                    <li>
                      <strong>Client</strong>: ASU Company
                    </li>
                    <li>
                      <strong>Project date</strong>: 01 March, 2020
                    </li>
                    <li>
                      <strong>Project URL</strong>:www.example.com
                    </li>
                  </ul>
                </div>
                <div class="portfolio-description">
                  <h2>Product Description</h2>
                  <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                    itaque inventore commodi labore quia quia. Exercitationem
                    repudiandae officiis neque suscipit non officia eaque itaque
                    enim. Voluptatem officia accusantium nesciunt est omnis
                    tempora consectetur dignissimos. Sequi nulla at esse enim
                    cum deserunt eius.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="col-lg-12 mt-3">
            <Tabs>
              <div className="d-flex justify-content-around mb-3">
                <TabList className="col-md-5 d-flex justify-content-around">
                  <Tab>
                    <button className="btn active">Products</button>
                  </Tab>
                  <Tab>
                    <button className="btn">Featured</button>
                  </Tab>
                  <Tab>
                    <button className="btn active">Plan Products</button>
                  </Tab>
                </TabList>
              </div>
              <hr />
              <TabPanel>
                <div className="col-12">
                  <h2 className="pt-3 pb-3">Product</h2>
                  <table className=" bg-light p-5 shadow text-blue table-responsive">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Product Url</th>
                        <th>Category Name</th>
                        <th>Sub Category Name</th>
                        <th>Total Orders</th>
                        <th>Date Description</th>
                        <th>Price</th>
                        <th>Latest Order</th>
                        <th>Date</th>
                        <th>In stock (3)</th>
                        <th>Total Orders</th>
                        <th>Total Earnings on Product</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Rows.map((Row) => (
                        <Table
                          key={Row.id}
                          id={Row.id}
                          page_title={Row.page_title}
                          sub_category={Row.sub_category}
                          category={Row.category}
                          in_stock={Row.in_stock}
                          product_url={Row.product_url}
                          date={Row.date}
                          price={Row.price}
                          total_oders={Row.total_oders}
                          latest_in_order={Row.latest_in_order}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="col-12">
                  <h2 className="pt-3 pb-3">Featured Product</h2>
                  <table className=" bg-light p-5 shadow text-blue table-responsive">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Product Url</th>
                        <th>Category Name</th>
                        <th>Sub Category Name</th>
                        <th>Total Orders</th>
                        <th>Date Description</th>
                        <th>Price</th>
                        <th>Latest Order</th>
                        <th>Date</th>
                        <th>In stock (3)</th>
                        <th>Total Orders</th>
                        <th>Total Earnings on Product</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Rows.map((Row) => (
                        <Table
                          key={Row.id}
                          id={Row.id}
                          page_title={Row.page_title}
                          sub_category={Row.sub_category}
                          category={Row.category}
                          in_stock={Row.in_stock}
                          product_url={Row.product_url}
                          date={Row.date}
                          price={Row.price}
                          total_oders={Row.total_oders}
                          latest_in_order={Row.latest_in_order}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="col-12">
                  <h2 className="pt-3 pb-3">Plan Product</h2>
                  <table className=" bg-light p-5 shadow text-blue table-responsive">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Product Url</th>
                        <th>Category Name</th>
                        <th>Sub Category Name</th>
                        <th>Total Orders</th>
                        <th>Date Description</th>
                        <th>Price</th>
                        <th>Latest Order</th>
                        <th>Date</th>
                        <th>In stock (3)</th>
                        <th>Total Orders</th>
                        <th>Total Earnings on Product</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Rows.map((Row) => (
                        <Table
                          key={Row.id}
                          id={Row.id}
                          page_title={Row.page_title}
                          sub_category={Row.sub_category}
                          category={Row.category}
                          in_stock={Row.in_stock}
                          product_url={Row.product_url}
                          date={Row.date}
                          price={Row.price}
                          total_oders={Row.total_oders}
                          latest_in_order={Row.latest_in_order}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </section>
        {/* <!-- End Portfolio Details Section --> */}
        {/* table for products  style={{ marginLeft: "-190px" }}*/}
      </main>
      {/* <!-- End #main --> */}
    </>
  );
}

export default ProductView;
