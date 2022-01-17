import React from 'react' 
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import '../Pages/Pages.css'



const Rows = [
    {id:1, title:'TenPlus Labs', author:'AJAPswenky', category:'05-01-2021', tag:'0', comment:'2021/05/05', date_published:'0'},
    {id:2, title:'TenPlus Labs', author:'AJAPswenky', category:'05-01-2021', tag:'0', comment:'2021/05/05', date_published:'0'},
    {id:3, title:'TenPlus Labs', author:'AJAPswenky', category:'05-01-2021', tag:'0', comment:'2021/05/05', date_published:'0'},
    {id:4, title:'TenPlus Labs', author:'AJAPswenky', category:'05-01-2021', tag:'0', comment:'2021/05/05', date_published:'0'},
    {id:5, title:'TenPlus Labs', author:'AJAPswenky', category:'05-01-2021', tag:'0', comment:'2021/05/05', date_published:'0'},
    {id:6, title:'TenPlus Labs', author:'AJAPswenky', category:'05-01-2021', tag:'0', comment:'2021/05/05', date_published:'0'}
]

const Table = (props) =>{
    const {id, title,author,category,tag,comment, date_published}  = props;
   
    // const [openModal, setOpenModal] = useState('');
    // const handleShow = () => {
    //     return <BasicModal />
    //   };

    return(        

        <tr>
            <td>{id}</td>
            <td className='title'> {title}
                <div className='d-flex display-none'>
                <button className='btn btn-primary mt-3 mr-3'>Add</button>
                <button className='btn btn-primary mt-3 mr-3'>Edit</button>
                <button className='btn btn-primary mt-3'>Delete</button>
                </div>
             </td>
            <td>{author}</td>
            <td>{category}</td>
            <td>{tag}</td>
            <td>{comment}</td> 
            <td>{date_published}</td>
        </tr>
    )
    }
const Post = (props) => {
   
    return (
        <main>
        <div className='container-fluid mt-5'>
                <div className='row ml-5 '>
    <Tabs>
        <div className='d-flex justify-content-between mb-3'>
            <TabList className='col-md-5 d-flex justify-content-around ml-5'>
                <Tab><button className='btn active'>All(3)</button></Tab>
                <Tab><button className='btn'>Published(0)</button></Tab>
                <Tab><button className='btn active'>Draft(3)</button></Tab>
                <Tab><button className='btn'>Bin(0)</button></Tab>
                {/* <Tab><BasicModal /></Tab> */}
                {/* <BasicModal /> */}
            </TabList>
        </div>
            <TabPanel>
                
                    <div className='col-12'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Category</th>
                                <th>Tags</th>
                                <th>Comment</th>
                                <th>Date Published</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Rows.map((Row) =>
                    <Table key={Row.id} id={Row.id} title={Row.title} category={Row.category} tag={Row.tag} comment={Row.comment} author={Row.author} date_published={Row.date_published} />
                    )} 
                        </tbody>
                    </table>
                    </div>
            
        </TabPanel>
        <TabPanel>
        </TabPanel>
    </Tabs>
    </div>
            </div>   
        </main>
    )
}

export default Post
