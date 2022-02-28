import React from "react";
import { TabList, TabPanel, Tab, Tabs } from "react-tabs";
import "../Pages/Pages.css";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";

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
  },
];

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
  } = props;

  return (
    <tr>
      <td>{id}</td>
      <td className="page_title" style={{ width: "150px" }}>
        <Link to={`/showApplication?id=${id}&prog_name=${page_title}`}>
          {page_title}
        </Link>
      </td>
      <td>{page_url}</td>
      <td>{date_published}</td>
      <td>{date_description}</td>
      <td>{meta_data}</td>
      <td>{visit_today}</td>
      <td>{visit_day}</td>
    </tr>
  );
};
const PortalApplication = (props) => {
  return (
    <main>
      <Navbar pg_name="Application" />
      <div className="container-fluid mt-5">
        <div className="row ml-5"></div>
      </div>

      <Tabs>
        <div className="d-flex justify-content-between ml-4 mb-3 mt-5"></div>
        <TabPanel>
          <div className="col-12">
            <table className=" bg-light p-5 shadow text-blue table-responsive">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Program Name</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Start Date</th>
                  <th>Meta data</th>
                  <th>Total Applicants</th>
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
                  />
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </main>
  );
};

export default PortalApplication;
