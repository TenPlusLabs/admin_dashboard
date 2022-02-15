import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2, } from 'react-html-parser';
import parse from 'html-react-parser'
 
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import './Post.css'
// // import Context from '@ckeditor/ckeditor5-core/src/context';
// // import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// // import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// // import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// // import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// // import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

// function PostEdit() {
//     const [text, setText] = useState('')
//   return <div className=''>
//             <br/><br/>
//             <div className='editor mt-5'>
//                 <CKEditor
//                     editor={ClassicEditor}
//                     data={text}
//                     onChange={(e,editor)=>{
//                         const data = editor.getData()
//                         setText(data)
//                         console.log(e.data)
//                     }}
//                 />

// <p>{text}</p>
//             </div>  
//         </div>;
// }

// export default PostEdit;

import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PostView extends Component {
    editor = null;
    state={
        text: '',
        type: ''
    }
    render() {
        return (
            <>
            <br/>
            <div className='document-editor'>
                <div className="document-editor__editable-container editor ">
                    <hr/>
                         &nbsp;&nbsp;&nbsp;
                         <NavLink to='/post/PostEdit?post' className='text-light'>
                            <span className='btn btn-secondary text-light'>
                                Edit
                            </span>
                        </NavLink>
                         &nbsp;&nbsp;&nbsp;
                         <span className='btn bg-danger text-light'>Delete</span>
                    <hr/>
                    <h3>Author: Jhon Doe</h3>
                    <div class="document-editor">
                        <div class="document-editor__toolbar"></div>
                        <div class="document-editor__editable-container">
                                {this.state.type === 'word' && <p dangerouslySetInnerHTML={{__html: this.state.text}}></p> }
                            </div>     
                        </div>
                    </div>

                </div>
        </>
        );
    }
}

export default PostView;
