import React from "react";
import { TabList, TabPanel, Tab, Tabs } from "react-tabs";
import Navbar from "../../Navbar/Navbar";
import "../Pages/Pages.css";
import UserApplicable, {
  AddNewCoupon,
  ChangeProductApplicable,
  ChangeProductExpDate,
  ChangeProductSubCat,
  CouponUsageEdit,
  CustomerUsageViewAll,
} from "./Modal";

const Rows = [
  {
    id: 1,
    page_title: "TenPlus Labs",
    coupon_number: "2020202020",
    page_url: "AJAPswenky",
    date_published: "05-01-2021",
    status: "expired   ",
    exp_date: "2021/05/05",
    visit_day: "New",
    visit_today: "5",
    visit_month: "2",
  },
  {
    id: 2,
    page_title: "TenPlus Labs",
    coupon_number: "2020202020",
    page_url: "AJAPswenky",
    date_published: "05-01-2021",
    status: "active",
    exp_date: "2021/05/05",
    visit_day: "Existing",
    visit_today: "5",
    visit_month: "2",
  },
  {
    id: 3,
    page_title: "TenPlus Labs",
    coupon_number: "2020202020",
    page_url: "AJAPswenky",
    date_published: "05-01-2021",
    status: "expired",
    exp_date: "2021/05/05",
    visit_day: "Both",
    visit_today: "5",
    visit_month: "2",
  },
  {
    id: 4,
    page_title: "TenPlus Labs",
    coupon_number: "2020202020",
    page_url: "AJAPswenky",
    date_published: "05-01-2021",
    status: "active",
    exp_date: "2021/05/05",
    visit_day: "New",
    visit_today: "5",
    visit_month: "2",
  },
  {
    id: 5,
    page_title: "TenPlus Labs",
    coupon_number: "2020202020",
    page_url: "AJAPswenky",
    date_published: "05-01-2021",
    status: "expired",
    exp_date: "2021/05/05",
    visit_day: "Existing",
    visit_today: "5",
    visit_month: "2",
  },
  {
    id: 6,
    page_title: "TenPlu Lab",
    coupon_number: "2020202020",
    page_url: "AJAPswenky",
    date_published: "05-01-2021",
    status: "active",
    exp_date: "2021/05/05",
    visit_day: "Both",
    visit_today: "5",
    visit_month: "2",
  },
];

const Table = (props) => {
  const {
    id,
    page_title,
    date_published,
    status,
    exp_date,
    visit_today,
    visit_day,
  } = props;

  // const [openModal, setOpenModal] = useState('');
  // const handleShow = () => {
  //     return <BasicModal />
  //   };

  return (
    <tr>
      <td>{id}</td>
      <td>{page_title}</td>
      <td className="page_title">
        {date_published}
        <div className="d-flex display-none">
          <ChangeProductApplicable />
        </div>
      </td>
      <td className="page_title">
        {visit_today}
        <div className="d-flex display-none">
          <CouponUsageEdit />
        </div>
      </td>
      <td>{status}</td>
      <td className="page_title">
        {exp_date}
        <div className="d-flex display-none">
          <ChangeProductExpDate />
        </div>
      </td>
      <td className="page_title">
        {visit_day}
        <div className="d-flex display-none">
          <UserApplicable />
        </div>
      </td>
      <td className="page_title">
        {visit_today}
        <div className="d-flex display-none">
          <CustomerUsageViewAll />
        </div>
      </td>
    </tr>
  );
};
const EcommerceCoupons = (props) => {
  return (
    <main>
      <Navbar pg_name="Coupon" />
      <div className="container-fluid mt-5">
        <div className="row ml-5 ">
          <Tabs>
            <div className="d-flex justify-content-left ml-4 mb-3">
              {/* <TabList className='col-md-5 d-flex justify-content-around ml-5'> */}
              {/* <Tab><button className='btn active'>All(3)</button></Tab>
                <Tab><button className='btn'>Published(0)</button></Tab>
                <Tab><button className='btn active'>Draft(3)</button></Tab>
                <Tab><button className='btn'>Bin(0)</button></Tab> */}
              {/* <Tab><BasicModal /></Tab> */}
              {/* <BasicModal /> */}
              {/* </TabList> */}
              <div className="margin">
                {" "}
                <AddNewCoupon />{" "}
              </div>
            </div>
            <TabPanel>
              <div className="col-12">
                <table className=" bg-light p-5 shadow text-blue table-responsive">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Coupon Name</th>
                      <th>Product Applicable</th>
                      <th>Coupon Number Of Usage</th>
                      <th>Status</th>
                      <th>Coupon Expiry Date</th>
                      <th>Users Applicable</th>
                      <th>Customers Usage </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Rows.map((Row) => (
                      <Table
                        key={Row.id}
                        id={Row.id}
                        coupon_number={Row.coupon_number}
                        page_title={Row.page_title}
                        date_published={Row.date_published}
                        status={Row.status}
                        exp_date={Row.exp_date}
                        page_url={Row.page_url}
                        visit_day={Row.visit_day}
                        visit_today={Row.visit_today}
                        visit_month={Row.visit_month}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default EcommerceCoupons;
