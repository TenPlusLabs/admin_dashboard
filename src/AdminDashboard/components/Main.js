import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Main.css'
import SplineChart from '../components/Pages/graph/spline'
import DoughnutChart from '../components/Pages/graph/DoughnutChart'
import Navbar from './Navbar/Navbar';


const TotalViews = (props) => {
    // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
    const { Title, value, details} = props;

    return(
    <div className='col-md-4 p-3 border shadow '>
        <div>
            <div className='float-left'>
                <h4>{Title}</h4>
            </div>
            <div className='float-right'>
                ...
            </div>
        </div>
        <hr className='mt-5'/>
        <div>
            <h3>{value}</h3>
            <p>{details}</p>
            {/* <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart> */}
            <SplineChart />
            <DoughnutChart />
        </div>

    </div>
    )

}

const Details = [
     {
        id:1, Title: 'Total Page Views', value: '23,568', details: 'Vs previous days 7 (28,211)', type: 'analytics'
    },
    {
        id:2, Title: 'Total Page Views', value: '13,568', details: 'Vs previous days 7 (28,211)', type: 'general'
    },
    {
        id:3, Title: 'Total Page Views', value: '23,568', details: 'Vs previous days 7 (28,211)', type: 'analytics'
    }
]


const analytics  = Details.filter(val => val.type === 'analytics')
const general  = Details.filter(val => val.type === 'general') 
// const filteredDetails = Details.filter( value=> {
//     return value > 20000
// })

const Main = (props) => {    return (
        <main>
            <Navbar pg_name='Dashboard' />
            <div className='container-fluid bg-light mt-4'>
                <div className='row'>
                    <div className='col-md-12 p-5'>
                        <div className='float-left d-flex justify-content-between'>
                            <div className=' '>
                                {/* <img src='' alt='' width='20rem' height='2rem' className='img-fluid' /> */}
                                <div style={{width:'50px', height:'50px', background:'blue',positon:'relative', borderRadius:'50%'}}>
                                    <span style={{
                                        position:'absolute',
                                        display:'block',
                                        transform:'translate(50,50)'
                                    }}></span>
                                </div>

                            </div>
                            <div className='ml-3'>
                                <h2>Hello Admin</h2>
                                <p className='text-grey'>17th ,January 2021</p>
                            </div>
                        </div>
                        <div className='float-right d-flex'>
                            <div className='btn  rounded m-2'>
                                <i className='las la-calender'/>
                                <p>07/01/2021 - 04/01/2021</p>
                            </div>
                            <div className='btn rounded d-flex align-items-center m-2'>
                                <span className='las la-bars'></span>
                            </div>
                        </div>                        
                    </div>
                    <div className='col-lg-12 mt-3'>
                        <Tabs>
                            <TabList>
                                <Tab>All</Tab>
                                <Tab>Analytics</Tab>
                                <Tab>General</Tab>
                            </TabList>

                            <TabPanel>
                            <div className='container-fluid'>
                                <div className='row mt-5'>                                    
                                    {Details.map((Detail) =>
                                    <TotalViews key={Detail.id} Title={Detail.Title} value={Detail.value} details={Detail.details} />
                                    )}                                    
                                </div>
                            </div>
                            </TabPanel>
                            <TabPanel>
                            <div className='container-fluid'>
                                <div className='row mt-5'>                                    
                                    {analytics.map((Detail) =>
                                    <TotalViews key={Detail.id} Title={Detail.Title} value={Detail.value} details={Detail.details} />
                                    )}                                    
                                </div>
                            </div>
                            </TabPanel>
                            <TabPanel>
                            <div className='container-fluid'>
                                <div className='row mt-5'>                                    
                                    {general.map((Detail) =>
                                    <TotalViews key={Detail.id} Title={Detail.Title} value={Detail.value} details={Detail.details} />
                                    )}                                    
                                </div>
                            </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>            
                   </main>
    )
}

export default Main
