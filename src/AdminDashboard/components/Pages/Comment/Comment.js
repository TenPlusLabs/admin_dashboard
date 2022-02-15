import React,{useState} from 'react'
import img from '../../../../assets/lana.jpg'
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import './Comment.css'
import '../Pages/Pages.css'
import { Link } from 'react-router-dom';
// import DatatablePage from '../datatable2';
// import { MDBDataTable, MDBDataTableV5 } from 'mdbreact';

const Comments = [
    {id:1, file:img, author:'jhon doe', title:'AJAPswenky', upload:'mine', respTo:'Mandy', comment:'0', date:'2021/05/05', commentBody:'dszfgijetboijbjdfvbjngdbjnbfdjbtbjjnetnbdfjbdfjbedgtjnbgtrbjkometbkjofdbjkoefberjo' },
    {id:2, file:img, author:'jhon doe', title:'AJAPswenky', upload:'mine',respTo:'Mandy', comment:'0', date:'2021/05/05', commentBody:'dfzkkfjbvsrfjscfsckmfsbkjjdskjsfkjsffskjbgdjkmcx fskmbkcvfkkdkdsfkfdsfkbsfdvkfbkfbfrb' },
    {id:3, file:img, author:'jhon doe', title:'AJAPswenky', upload:'trash',respTo:'Mandy', comment:'0', date:'2021/05/05', commentBody:'vvrkrirgbkorbksrfbksrbrkbrkbrksrbrkbrkbrkkfddbkrfbkdsfksbrkbmfsbkmrfbkrbkrbrbkfbkfdbfkbfk' },
    {id:5, file:img, author:'jhon doe', title:'AJAPswenky', upload:'approved',respTo:'Tade', comment:'0', date:'2021/05/05',commentBody: 'fbejrbfkvfkjobfifbkjofb fdokgbjkokefbrejeokbetjkokbtebjorrjktrjknfdbrjrebjnfdbkmredvkkbfekjldfbjklddb' },
    {id:6, file:img, author:'jhon doe', title:'AJAPswenky', upload:'Spam',respTo:'Tade', comment:'0', date:'2021/05/05', commentBody:' fdgbkebketbkndgtetmkmntenkmmbkmtednktemenetnkgdfnkltgemntggkmvxbtekmdfbkmdgtnktrnlkvbfd;ldbktrklyerpklthkptekgitr' },
    {id:1, file:img, author:'jhon doe', title:'AJAPswenky', upload:'mine',respTo:'Mandy', comment:'0', date:'2021/05/05', commentBody:'dszfgijetboijbjdfvbjngdbjnbfdjbtbjjnetnbdfjbdfjbedgtjnbgtrbjkometbkjofdbjkoefberjo' },
    {id:2, file:img, author:'jhon doe', title:'AJAPswenky', upload:'mine',respTo:'Mandy', comment:'0', date:'2021/05/05', commentBody:'dfzkkfjbvsrfjscfsckmfsbkjjdskjsfkjsffskjbgdjkmcx fskmbkcvfkkdkdsfkfdsfkbsfdvkfbkfbfrb' },
    {id:3, file:img, author:'jhon doe', title:'AJAPswenky', upload:'trash',respTo:'Mandy', comment:'0', date:'2021/05/05', commentBody:'vvrkrirgbkorbksrfbksrbrkbrkbrksrbrkbrkbrkkfddbkrfbkdsfksbrkbmfsbkmrfbkrbkrbrbkfbkfdbfkbfk' },
    {id:4, file:img, author:'jhon doe', title:'AJAPswenky', upload:'pending',respTo:'Mandy', comment:'0', date:'2021/05/05', commentBody: 'rbjsfbjsfbjkfsbjkfsbvsdfkjbdswkjbfsbkfsbkjfsdbfkdmbfdsjkbfdsdbjknfddbjknfbjnjkbfbjfbjknbjdkfsbfj' },
    {id:5, file:img, author:'jhon doe', title:'AJAPswenky', upload:'approved',respTo:'Mandy', comment:'0', date:'2021/05/05',commentBody: 'fbejrbfkvfkjobfifbkjofb fdokgbjkokefbrejeokbetjkokbtebjorrjktrjknfdbrjrebjnfdbkmredvkkbfekjldfbjklddb' },
    {id:5, file:img, author:'jhon doe', title:'AJAPswenky', upload:'approved',respTo:'Tade', comment:'0', date:'2021/05/05',commentBody: 'fbejrbfkvfkjobfifbkjofb fdokgbjkokefbrejeokbetjkokbtebjorrjktrjknfdbrjrebjnfdbkmredvkkbfekjldfbjklddb' },
    {id:6, file:img, author:'jhon doe', title:'AJAPswenky', upload:'Spam',respTo:'Tade', comment:'0', date:'2021/05/05', commentBody:' fdgbkebketbkndgtetmkmntenkmmbkmtednktemenetnkgdfnkltgemntggkmvxbtekmdfbkmdgtnktrnlkvbfd;ldbktrklyerpklthkptekgitr' },
    {id:1, file:img, author:'jhon doe', title:'AJAPswenky', upload:'mine',respTo:'Tade', comment:'0', date:'2021/05/05', commentBody:'dszfgijetboijbjdfvbjngdbjnbfdjbtbjjnetnbdfjbdfjbedgtjnbgtrbjkometbkjofdbjkoefberjo' },
    {id:5, file:img, author:'jhon doe', title:'AJAPswenky', upload:'approved',respTo:'Tade', comment:'0', date:'2021/05/05',commentBody: 'fbejrbfkvfkjobfifbkjofb fdokgbjkokefbrejeokbetjkokbtebjorrjktrjknfdbrjrebjnfdbkmredvkkbfekjldfbjklddb' },
    {id:6, file:img, author:'jhon doe', title:'AJAPswenky', upload:'Spam',respTo:'Mandy', comment:'0', date:'2021/05/05', commentBody:' fdgbkebketbkndgtetmkmntenkmmbkmtednktemenetnkgdfnkltgemntggkmvxbtekmdfbkmdgtnktrnlkvbfd;ldbktrklyerpklthkptekgitr' },
    {id:1, file:img, author:'jhon doe', title:'AJAPswenky', upload:'mine',respTo:'Mandy', comment:'0', date:'2021/05/05', commentBody:'dszfgijetboijbjdfvbjngdbjnbfdjbtbjjnetnbdfjbdfjbedgtjnbgtrbjkometbkjofdbjkoefberjo' },
    {id:5, file:img, author:'jhon doe', title:'AJAPswenky', upload:'approved',respTo:'Mandy', comment:'0', date:'2021/05/05',commentBody: 'fbejrbfkvfkjobfifbkjofb fdokgbjkokefbrejeokbetjkokbtebjorrjktrjknfdbrjrebjnfdbkmredvkkbfekjldfbjklddb' },
    {id:6, file:img, author:'jhon doe', title:'AJAPswenky', upload:'Spam',respTo:'Mandy', comment:'0', date:'2021/05/05', commentBody:' fdgbkebketbkndgtetmkmntenkmmbkmtednktemenetnkgdfnkltgemntggkmvxbtekmdfbkmdgtnktrnlkvbfd;ldbktrklyerpklthkptekgitr' },
    {id:1, file:img, author:'jhon doe', title:'AJAPswenky', upload:'mine',respTo:'Mandy', comment:'0', date:'2021/05/05', commentBody:'dszfgijetboijbjdfvbjngdbjnbfdjbtbjjnetnbdfjbdfjbedgtjnbgtrbjkometbkjofdbjkoefberjo' },
    {id:5, file:img, author:'jhon doe', title:'AJAPswenky', upload:'approved',respTo:'Mandy', comment:'0', date:'2021/05/05',commentBody: 'fbejrbfkvfkjobfifbkjofb fdokgbjkokefbrejeokbetjkokbtebjorrjktrjknfdbrjrebjnfdbkmredvkkbfekjldfbjklddb' },
    {id:6, file:img, author:'jhon doe', title:'AJAPswenky', upload:'Spam',respTo:'Mandy',    comment:'0', date:'2021/05/05', commentBody:' fdgbkebketbkndgtetmkmntenkmmbkmtednktemenetnkgdfnkltgemntggkmvxbtekmdfbkmdgtnktrnlkvbfd;ldbktrklyerpklthkptekgitr' },
    {id:1, file:img, author:'jhon doe', title:'AJAPswenky', upload:'mine',respTo:'Mandy', comment:'0', date:'2021/05/05', commentBody:'dszfgijetboijbjdfvbjngdbjnbfdjbtbjjnetnbdfjbdfjbedgtjnbgtrbjkometbkjofdbjkoefberjo' },
]

 const mineRow  = Comments.filter(el => el.upload === 'mine')
const pendingRow  = Comments.filter(el => el.upload === 'pending')
const approvedRow  = Comments.filter(el => el.upload === 'approved') 
const spamRow  = Comments.filter(el => el.upload === 'Spam') 
const trashRow  = Comments.filter(el => el.upload === 'trash') 


const Table = (props) =>{
    const { file, author,upload,comment, date,commentBody,title,id,respTo }  = props;
    return(
        <tr>
            <td><input type='checkbox' /></td>
            <td>{id}</td>
            <td>
                <img src={file} alt='img' style={{width:'200px'}} className='img-fluid comment-img'/>
            </td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{upload}</td>
            <td>{comment}</td>
            <td className='page_title'>
                {commentBody}
                <div className='d-flex display-none'>
                <span className='text-success mt-3 mr-3'>Approve</span>
                <span className='text-secondary mr-3 mt-3'><Link to={`commentEdit?comment=${id}`}>Reply</Link></span>
                <span className='text-danger mt-3'>Delete</span>
                </div>
             </td>
             <td>{respTo}</td>
            <td>{date}</td>
        </tr>
    )
    }



// const DatatablePage = (props) => {

//     const {mine} = props
  
//     const [data,setData] = useState({
//       columns: [
//         {
//           label: 'File',
//           field: 'file',
//           sort: 'asc',
//           width: 150,
//           className: 'page_title',
//           attributes: {
//             'aria-controls': 'DataTable',
//             'aria-label': 'File',
//           },
//         },
//         {
//           label: 'Upload',
//           field: 'upload',
//           sort: 'asc',
//           width: 270
//         },
//         {
//           label: 'Comment',
//           field: 'comment',
//           sort: 'asc',
//           width: 200
//         },
//         {
//           label: 'Date',
//           field: 'date',
//           sort: 'asc',
//           width: 100
//         },
//         {
//           label: 'Comment Body',
//           field: 'commentBody',
//           sort: 'asc',
//           width: 150
//         },
//       ],
//        rows:mine  
//     });

//     const [checkbox1, setCheckbox1] = React.useState([]);

//     const showLogs2 = (e) => {
//       setCheckbox1(e);
//     };
  

  
//     return (
//       <>
//       <br/>
//             {/* <MDBDataTable
//               scrollY
//               maxHeight='300px'
//               striped
//               hover
//               data={data}
//               /> */}
//         <MDBDataTableV5
//         hover
//         entriesOptions={[5, 20, 25]}
//         entries={5}
//         pagesAmount={4}
//         data={data}
//         checkbox
//         exportToCSV proSelect
//         headCheckboxID='id6'
//         bodyCheckboxID='checkboxes6'
//         getValueCheckBox={(e) => {
//           showLogs2(e);
//         }}
//         getValueAllCheckBoxes={(e) => {
//           showLogs2(e);
//         }}
//         multipleCheckboxes
//       />
//               {/* {console.log(mine)} */}
//       </>
//     );
//   }
  


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
                <div className='col-12' style={{width:'80%',overflowX:'auto',}}>
                  <table className=' bg-light p-5 shadow text-blue table-responsive'>
                  <thead>
                      <tr>
                        <th><input type='checkbox'/></th>
                        <th>ID</th>
                        <th>Img</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Tags</th>
                        <th>Comment</th>
                        <th>In Response To</th>
                        <th>Submited On</th>
                      </tr>
                  </thead>
                      <tbody>
                        {Comments.map((Comment) =>
                        <Table file={Comment.file} id={Comment.id} respTo={Comment.respTo} author={Comment.author}upload={Comment.upload} comment={Comment.comment}date={Comment.date}commentBody={Comment.commentBody} title={Comment.title} className='table'/>
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
                        <th><input type='checkbox'/></th>
                        <th>ID</th>
                        <th>Img</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Tags</th>
                        <th>Comment</th>
                        <th>In Response To</th>
                        <th>Submited On</th>
                      </tr>
                    </thead>
                    <tbody>
                       {mineRow.map((mineRow) =>
                          <Table file={mineRow.file} id={mineRow.id} respTo={mineRow.respTo} author={mineRow.author}upload={mineRow.upload} comment={mineRow.comment}date={mineRow.date}commentBody={mineRow.commentBody} title={mineRow.title} />
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
                        <th><input type='checkbox'/></th>
                        <th>ID</th>
                        <th>Img</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Tags</th>
                        <th>Comment</th>
                        <th>In Response To</th>
                        <th>Submited On</th>
                      </tr>
                  </thead>
                  <tbody>
                     {pendingRow.map((pendingRow) =>
                        <Table file={pendingRow.file} id={pendingRow.id} respTo={pendingRow.respTo} author={pendingRow.author}upload={pendingRow.upload} comment={pendingRow.comment}date={pendingRow.date}commentBody={pendingRow.commentBody}  title={pendingRow.title}/>
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
                            <th><input type='checkbox'/></th>
                            <th>ID</th>
                            <th>Img</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Tags</th>
                            <th>Comment</th>
                            <th>In Response To</th>
                            <th>Submited On</th>
                        </tr>
                        </thead>
                        <tbody>
                        {approvedRow.map((approvedRow) =>
                            <Table file={approvedRow.file} respTo={approvedRow.respTo} id={approvedRow.id} author={approvedRow.author}upload={approvedRow.upload} comment={approvedRow.comment}date={approvedRow.date}commentBody={approvedRow.commentBody}  title={approvedRow.title} />
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
                            <th><input type='checkbox'/></th>
                            <th>ID</th>
                            <th>Img</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Tags</th>
                            <th>Comment</th>
                            <th>In Response To</th>
                            <th>Submited On</th>
                      </tr>
                        </thead>
                       <tbody>
                       {spamRow.map((spamRows) =>
                            <Table file={spamRows.file} respTo={spamRows.respTo} id={spamRow.id} author={spamRows.author}upload={spamRows.upload} comment={spamRows.comment}date={spamRows.date}commentBody={spamRows.commentBody}   title={spamRows.title}/>
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
                            <th><input type='checkbox'/></th>
                            <th>ID</th>
                            <th>Img</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Tags</th>
                            <th>Comment</th>
                            <th>In Response To</th>
                            <th>Submited On</th>
                      </tr>
                        </thead>
                       <tbody>
                       {trashRow.map((trashRows) =>
                            <Table file={trashRows.file} respTo={trashRows.respTo} id={trashRows.id} author={trashRows.author}upload={trashRows.upload} comment={trashRows.comment}date={trashRows.date}commentBody={trashRows.commentBody}  title={trashRows.title} />
                        )}
                        </tbody>
                    </table>
            </div>
        </TabPanel>
    </Tabs>
 
        </main>
    )
}

export default Comment
