import React from 'react'
import img from '../../../../assets/lana.jpg'
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import './Comment.css'


const Comments = [
    {id:1, file:img, author:'AJAPswenky', upload:'mine', comment:'0', date:'2021/05/05', commentBody:'dszfgijetboijbjdfvbjngdbjnbfdjbtbjjnetnbdfjbdfjbedgtjnbgtrbjkometbkjofdbjkoefberjo' },
    {id:2, file:img, author:'AJAPswenky', upload:'mine', comment:'0', date:'2021/05/05', commentBody:'dfzkkfjbvsrfjscfsckmfsbkjjdskjsfkjsffskjbgdjkmcx fskmbkcvfkkdkdsfkfdsfkbsfdvkfbkfbfrb' },
    {id:3, file:img, author:'AJAPswenky', upload:'trash', comment:'0', date:'2021/05/05', commentBody:'vvrkrirgbkorbksrfbksrbrkbrkbrksrbrkbrkbrkkfddbkrfbkdsfksbrkbmfsbkmrfbkrbkrbrbkfbkfdbfkbfk' },
    {id:4, file:img, author:'AJAPswenky', upload:'pending', comment:'0', date:'2021/05/05', commentBody: 'rbjsfbjsfbjkfsbjkfsbvsdfkjbdswkjbfsbkfsbkjfsdbfkdmbfdsjkbfdsdbjknfddbjknfbjnjkbfbjfbjknbjdkfsbfj' },
    {id:5, file:img, author:'AJAPswenky', upload:'approved', comment:'0', date:'2021/05/05',commentBody: 'fbejrbfkvfkjobfifbkjofb fdokgbjkokefbrejeokbetjkokbtebjorrjktrjknfdbrjrebjnfdbkmredvkkbfekjldfbjklddb' },
    {id:6, file:img, author:'AJAPswenky', upload:'Spam', comment:'0', date:'2021/05/05', commentBody:' fdgbkebketbkndgtetmkmntenkmmbkmtednktemenetnkgdfnkltgemntggkmvxbtekmdfbkmdgtnktrnlkvbfd;ldbktrklyerpklthkptekgitr' }
]

 const mineRow  = Comments.filter(el => el.upload === 'mine')
const pendingRow  = Comments.filter(el => el.upload === 'pending')
const approvedRow  = Comments.filter(el => el.upload === 'approved') 
const spamRow  = Comments.filter(el => el.upload === 'spam') 


const Table = (props) =>{
    const { file,author,upload,comment, date,commentBody }  = props;
    return(
        <tr>
            <td>
                <img src={file} alt='' className='img-fluid comment-img'/>
            </td>
            <td>{author}</td>
            <td>{commentBody}</td>
            <td>{upload}</td>
            <td>{comment}</td>
            <td>{date}</td>
        </tr>
    )
    }
const Comment = (props) => {
    return (
        <main>
            <div className='container-fluid mt-5'>
                    <div className='row ml-5'>
        
                    </div>
            </div>  


            <Tabs>
        <div className='d-flex justify-content-between mb-3'>
            <TabList className='col-md-6 d-flex justify-content-around ml-5'>
                <Tab><button className='btn active'>All(3)</button></Tab>
                <Tab><button className='btn'>Mine(0)</button></Tab>
                <Tab><button className='btn active'>Pending(3)</button></Tab>
                <Tab><button className='btn'>Approved(0)</button></Tab>
                <Tab><button className='btn active'>Spam(3)</button></Tab>
                <Tab><button className='btn'>Trash(0)</button></Tab>
            </TabList>
        </div>
        <TabPanel>
                
                <div className='col-12'>
                <table className=' bg-light p-5 shadow text-blue table-responsive'>
                    <thead>
                        <tr>
                            <td>File</td>
                            <td>Author</td>
                            <th>Cooment Body</th>
                            <td>Uploaded to</td>
                            <td><i className='las la-comment'></i></td>
                            <td>Date</td>
                        </tr>
                    </thead>
                    <tbody>
                    {Comments.map((Comment) =>
                <Table key={Comment.id} file={Comment.file} upload={Comment.upload} date={Comment.date} author={Comment.author} comment={Comment.comment} commentBody={Comments.commentBody} />
                )} 
                    </tbody>
                </table>
                </div>
          
        </TabPanel>
        <TabPanel>
        <div className='col-12 container-fluid'>
                    <table className=' bg-light p-5 shadow text-blue table-responsive'>
                    <thead>
                        <tr>
                            <td>File</td>
                            <td>Author</td>
                            <td>Uploaded to</td>
                            <td><i className='las la-comment'></i></td>
                            <td>Date</td>
                        </tr>
                    </thead>
                       <tbody>
                       {mineRow.map((mine) =>
                        <Table key={mine.id} file={mine.file} upload={mine.upload} date={mine.date} author={mine.author} comment={mine.comment} />
                        )}         
                        </tbody>
                    </table>
            </div>
        </TabPanel>
       
        <TabPanel>
        <div className='col-12 container-fluid'>
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
                                <th>Add</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                       <tbody>
                        dngxndfxg 
                        
                        </tbody>
                    </table>
        </div>             
        </TabPanel>

        <TabPanel>
        <div className='col-12 container-fluid'>
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
                                <th>Add</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                       <tbody>
                        dzthethesthxdzt
                        
                        </tbody>
                    </table>
            </div>
        </TabPanel>
    </Tabs>
 
        </main>
    )
}

export default Comment
