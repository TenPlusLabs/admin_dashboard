import React from 'react'
import './Pages.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { DataGrid } from '@mui/x-data-grid';
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';
import BasicModal from './Modal';

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'pageTitle', headerName: 'Page Title', width: 130 },
    { field: 'pageURL', headerName: 'Page URL', width: 130 },
    { field: 'datePublished', headerName: 'Date Published', width: 90, },
    { field: 'pageDescription', headerName: 'Page description', description: 'This column has a value getter and is not sortable.', sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'pageTitle') || ''} ${
          params.getValue(params.id, 'pageURL') || ''
        }`,
    },
    { field: 'metaData', headerName: 'Meta data', width: 90, },
    { field: 'todayVisit', headerName: 'No of visit"s today', width: 90, },
    { field: 'oneWeekVisit', headerName: 'No of visit"s in 7 days', width: 90, },
    { field: 'oneMonthVisit', headerName: 'No of visit"s in 1 month', width: 90, },
  ];
  
  const rows = [
    { id: 1, pageURL: 'Snow', pageTitle: 'Jon', datePublished: 15, metaData: 'gtygfdrdddsgh', todayVisit: 20, oneWeekVisit: 40, oneMonthVisit: 100 },
    { id: 2, pageURL: 'Lannister', pageTitle: 'Cersei', datePublished: 15, metaData: 'gtygfdrdddsgh', todayVisit: 20, oneWeekVisit: 40, oneMonthVisit: 100 },
    { id: 3, pageURL: 'Lannister', pageTitle: 'Jaime', datePublished: 15, metaData: 'gtygfdrdddsgh', todayVisit: 20, oneWeekVisit: 40, oneMonthVisit: 100 },
    { id: 4, pageURL: 'Stark', pageTitle: 'Arya', datePublished: 15, metaData: 'gtygfdrdddsgh', todayVisit: 20, oneWeekVisit: 40, oneMonthVisit: 100 },
    { id: 5, pageURL: 'Targaryen', pageTitle: 'Daenerys', datePublished: 15, metaData: 'gtygfdrdddsgh', todayVisit: 20, oneWeekVisit: 40, oneMonthVisit: 100 },
    { id: 6, pageURL: 'Melisandre', pageTitle: null, datePublished: 15, metaData: 'gtygfdrdddsgh', todayVisit: 20, oneWeekVisit: 40, oneMonthVisit: 100 },
    { id: 7, pageURL: 'Clifford', pageTitle: 'Ferrara', datePublished: 15, metaData: 'gtygfdrdddsgh', todayVisit: 20, oneWeekVisit: 40, oneMonthVisit: 100 },
    { id: 8, pageURL: 'Frances', pageTitle: 'Rossini', datePublished: 15, metaData: 'gtygfdrdddsgh', todayVisit: 20, oneWeekVisit: 40, oneMonthVisit: 100 },
    { id: 9, pageURL: 'Roxie', pageTitle: 'Harvey', datePublished: 15, metaData: 'gtygfdrdddsgh', todayVisit: 20, oneWeekVisit: 40, oneMonthVisit: 100 },
  ];

function Pages() {
    return (
        <main>
            <div className='container-fluid bg-light mt-4'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='float-left d-flex justify-content-between'>
                            <div className=' '>
                                {/* <img src='' alt='' width='20rem' height='2rem' className='img-fluid' /> */}
                                <div className='mt-3' style={{width:'50px', height:'50px', background:'blue', borderRadius:'50%', content:'a'}} />

                            </div>
                            <div className='ml-3 mt-4'>
                                <h2>Pages</h2>
                                {/* <p className='text-grey'>17th ,January 2021</p> */}
                            </div>
                        </div>
                        <div className='float-right d-flex'>
                            {/* <div className='border rounded m-2 pt-n3'>
                                <i className='las la-calender'/>
                                <p>07/01/2021 - 04/01/2021</p>
                            </div>
                            <div className='border rounded d-flex align-items-center m-2'>
                                <span className='las la-bars'></span>
                            </div> */}
                            <div>
                                <BasicModal />
                                {/* <Button className="mt-4"  variant="outlined"  startIcon={<AddCircleTwoToneIcon />}>
                                    Add New
                                    
                                </Button> */}
                                
                            </div>
                        </div>                        
                    </div>
                    <div className='col-lg-12 mt-3'>
                        <Tabs>
                            <TabList>
                                <Tab>All</Tab>
                                <Tab>Published </Tab>
                                <Tab>Draft</Tab>
                                <Tab>Bin</Tab>
                                <Tab>
                                    
                                </Tab>
                            </TabList>

                            <TabPanel>
                                <div style={{ height: 450, width: '100%' }}>
                                    <DataGrid
                                        rows={rows}
                                        columns={columns}
                                        pageSize={6}
                                        rowsPerPageOptions={[5]}
                                        // checkboxSelection
                                    />
                                    {/* <Stack direction="row" spacing={2}>
                                        <Button variant="outlined" startIcon={<DeleteIcon />}>
                                            Delete
                                        </Button>
                                        <Button variant="contained" endIcon={<SendIcon />}>
                                            Send
                                        </Button>
                                    </Stack> */}
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>            
        </main>
    )
}

export default Pages
