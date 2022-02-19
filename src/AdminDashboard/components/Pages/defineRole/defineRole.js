import React from 'react';
import './style.css'
import img from '../../../../assets/lana.jpg'
import BasicModal, { EditUserModal, NewRole } from './Modal';
import RoleList from './roleList';

const Rows = [
  {id:1, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
  {id:2, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
  {id:3, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
  {id:4, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
  {id:5, page_title:'TenPlus Labs', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' },
  {id:6, page_title:'TenPlu Lab', page_url:'AJAPswenky', date_published:'05-01-2021', date_description:'0', meta_data:'2021/05/05', visit_day:'0', visit_today:'5', visit_month:'2' }
]

const Table = (props) =>{
  const {id, page_title,page_url,date_published,date_description,meta_data, visit_today, visit_day, visit_month  }  = props;

  return(        

      <tr>
          <td>{id}</td>
          <td className='page_title' style={{width:'150px'}}> {page_title}
              <div className='d-flex display-none'>
              <EditUserModal />
              <span className='text-danger mt-3'>Delete</span>
              </div>
           </td>
          <td>{page_url}</td>
          <td>{date_published}</td>
          <td>{date_description}</td>
          <td>{meta_data}</td> 
          <td>{meta_data}</td> 
          <td><BasicModal /></td>
      </tr>
  )
}


export default function DefineUserRole() {
  return <>
  <main id="main">
    <section id="portfolio-details" class="portfolio-details">
    <NewRole />
    <br/>
      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper-container">
            <table className=' bg-light p-5 shadow text-blue table-responsive'style={{maxWidth: '113rem',Width:'800px',maxHeight:'500px'}}>
                        <thead>
                            <tr>
                            <th>ID</th>
                                <th>Frst Name</th>
                                <th>Last Name</th>
                                <th>Role</th>
                                <th>Username</th>
                                <th>Nickname</th>
                                <th>Date Created</th>
                                <th>Change Role</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Rows.map((Row) =>
                    <Table key={Row.id} id={Row.id} page_title={Row.page_title} date_published={Row.date_published} date_description={Row.date_description} meta_data={Row.meta_data} page_url={Row.page_url} visit_day={Row.visit_day} visit_today={Row.visit_today} visit_month={Row.visit_month} />
                    )} 
                        </tbody>
                    </table>
            </div>
          </div>

          <div class="col-lg-4 portfolio-info">
            <RoleList />
          </div>
        </div>

      </div>
    </section>
  </main>

  </>;
}


