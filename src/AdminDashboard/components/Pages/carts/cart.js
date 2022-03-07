// import React, {useState} from 'react'
import { TabList, TabPanel, Tab, Tabs } from "react-tabs";
import "../Pages/Pages.css";
import BasicModal from "./Modal";

const Rows = [
  {
    id: 1,
    page_title: "TenPlus Labs",
    page_url: "AJAPswenky",
    date_published: "05-01-2021",
    date_description: "0",
    meta_data: "2021/05/05",
    visit_day: "0",
    visit_today: "5",
    visit_month: "2",
    type: "In cart",
  },
  {
    id: 2,
    page_title: "TenPlus Labs",
    page_url: "AJAPswenky",
    date_published: "05-01-2021",
    date_description: "0",
    meta_data: "2021/05/05",
    visit_day: "0",
    visit_today: "5",
    visit_month: "2",
    type: "Removed From cart",
  },
  {
    id: 3,
    page_title: "TenPlus Labs",
    page_url: "AJAPswenky",
    date_published: "05-01-2021",
    date_description: "0",
    meta_data: "2021/05/05",
    visit_day: "0",
    visit_today: "5",
    visit_month: "2",
    type: "In cart",
  },
  {
    id: 4,
    page_title: "TenPlus Labs",
    page_url: "AJAPswenky",
    date_published: "05-01-2021",
    date_description: "0",
    meta_data: "2021/05/05",
    visit_day: "0",
    visit_today: "5",
    visit_month: "2",
    type: "Removed From cart",
  },
  {
    id: 5,
    page_title: "TenPlus Labs",
    page_url: "AJAPswenky",
    date_published: "05-01-2021",
    date_description: "0",
    meta_data: "2021/05/05",
    visit_day: "0",
    visit_today: "5",
    visit_month: "2",
    type: "In cart",
  },
  {
    id: 6,
    page_title: "TenPlu Lab",
    page_url: "AJAPswenky",
    date_published: "05-01-2021",
    date_description: "0",
    meta_data: "2021/05/05",
    visit_day: "0",
    visit_today: "5",
    visit_month: "2",
    type: "Removed From cart",
  },
];
const in_cart = Rows.filter((val) => val.type === "In cart");
const rm_cart = Rows.filter((val) => val.type === "Removed From cart");

const Table = (props) => {
  const {
    id,
    page_title,
    page_url,
    date_published,
    date_description,
    meta_data,
    visit_today,
    visit_day,
    visit_month,
    p_type,
  } = props;

  // const [openModal, setOpenModal] = useState('');
  // const handleShow = () => {
  //     return <BasicModal />
  //   };

  return (
    <tr>
      <td>{id}</td>
      <td className="page_title">
        {" "}
        {page_title}
        <div className="d-flex display-none">
          <span className="text-secondary mt-3 mr-3 ml-3 cursor-pointer">
            Edit
          </span>
          &nbsp;&nbsp;
          <span className="text-danger mt-3 mr-3 cursor-pointer">Delete</span>
        </div>
      </td>
      <td>{p_type}</td>
      <td>{page_url}</td>
      <td>{date_published}</td>
      <td>{date_description}</td>
      <td>{meta_data}</td>
      <td>{visit_today}</td>
      <td>{visit_day}</td>
      <td>{visit_month}</td>
    </tr>
  );
};
const Cart = (props) => {
  return (
    <main>
      <div className="container-fluid mt-5">
        <div className="row ml-5 ">
          <Tabs>
            <div className="d-flex justify-content-between mb-3">
              <TabList className="col-md-5 d-flex justify-content-around ml-5">
                <Tab>
                  <button className="btn active">All({Rows.length})</button>
                </Tab>
                <Tab>
                  <button className="btn">In Cart({in_cart.length})</button>
                </Tab>
                <Tab>
                  <button className="btn active">
                    Removed Cart({rm_cart.length})
                  </button>
                </Tab>
                {/* <Tab><BasicModal /></Tab> */}
                {/* <BasicModal /> */}
              </TabList>
              <div className="margin">
                {" "}
                <BasicModal />{" "}
              </div>
            </div>
            <TabPanel>
              <div className="col-12">
                <table className=" bg-light p-5 shadow text-blue table-responsive">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Product Name</th>
                      <th>Category Name</th>
                      <th>Milestone</th>
                      <th>Category Name</th>
                      <th>In Stock (3)</th>
                      <th>Customer Name</th>
                      <th>Email</th>
                      <th>Phone No.</th>
                      <th>Added to Inventory</th>
                      <th>How Long Due Today</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Rows.map((Row) => (
                      <Table
                        key={Row.id}
                        id={Row.id}
                        page_title={Row.page_title}
                        date_published={Row.date_published}
                        date_description={Row.date_description}
                        meta_data={Row.meta_data}
                        page_url={Row.page_url}
                        visit_day={Row.visit_day}
                        visit_today={Row.visit_today}
                        visit_month={Row.visit_month}
                        p_type={Row.type}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="col-12">
                <table className=" bg-light p-5 shadow text-blue table-responsive">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Cart Number</th>
                      <th>Cart Type</th>
                      <th>
                        Milestone
                        {/* (Payment, Augmented Payment, Refund) */}
                      </th>
                      <th>Product Name</th>
                      <th>Category Name</th>
                      <th>Sub Category Name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Phone No.</th>
                      <th>Customer Name</th>
                      <th>Email</th>
                      <th>
                        Channel
                        {/* (PayPal, Paystack, 
                                Manual */}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {in_cart.map((Row) => (
                      <Table
                        key={Row.id}
                        id={Row.id}
                        page_title={Row.page_title}
                        date_published={Row.date_published}
                        date_description={Row.date_description}
                        meta_data={Row.meta_data}
                        page_url={Row.page_url}
                        visit_day={Row.visit_day}
                        visit_today={Row.visit_today}
                        visit_month={Row.visit_month}
                        p_type={Row.type}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="col-12">
                <table className=" bg-light p-5 shadow text-blue table-responsive">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Cart Number</th>
                      <th>Cart Type</th>
                      <th>
                        Milestone
                        {/* (Payment, Augmented Payment, Refund) */}
                      </th>
                      <th>Product Name</th>
                      <th>Category Name</th>
                      <th>Sub Category Name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Phone No.</th>
                      <th>Customer Name</th>
                      <th>Email</th>
                      <th>
                        Channel
                        {/* (PayPal, Paystack, 
                                Manual */}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rm_cart.map((Row) => (
                      <Table
                        key={Row.id}
                        id={Row.id}
                        page_title={Row.page_title}
                        date_published={Row.date_published}
                        date_description={Row.date_description}
                        meta_data={Row.meta_data}
                        page_url={Row.page_url}
                        visit_day={Row.visit_day}
                        visit_today={Row.visit_today}
                        visit_month={Row.visit_month}
                        p_type={Row.type}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default Cart;
