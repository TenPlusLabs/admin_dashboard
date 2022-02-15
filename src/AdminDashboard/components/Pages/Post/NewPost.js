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

class NewPost extends Component {
    editor = null;
    state={
        text: '',
        type: ''
    }
    render() {
        return (
            <>
            <br/><br/>
            <div className='document-editor'>
                <div className="document-editor__editable-container editor ">
                    <CKEditor
                        className='document-editor__editable'
                        onReady={ editor => {
                            console.log( 'Editor is ready to use!', editor );
                            // Insert the toolbar before the editable area.
                            editor.ui.getEditableElement().parentElement.insertBefore(
                                editor.ui.view.toolbar.element,
                              
                                editor.ui.getEditableElement()
                            );

                            this.editor = editor;
                        } }
                        onError={ ( { willEditorRestart } ) => {
                            // If the editor is restarted, the toolbar element will be created once again.
                            // The `onReady` callback will be called again and the new toolbar will be added.
                            // This is why you need to remove the older toolbar.
                            if ( willEditorRestart ) {
                                this.editor.ui.view.toolbar.element.remove();
                            }
                        } }
                        onChange={ ( event, editor ) => {
                                console.log( { event, editor } )
                                const data = editor.getData()
                                this.setState({text: data})
                                console.log('data',data)
                            }
                         }
                        editor={ DecoupledEditor }
                        data={this.state.text}
                    />
                    <hr/>
                         <span className='btn btn-primary' onClick={()=> this.setState({type:'code'})}>{"< / >"}</span>
                         &nbsp;&nbsp;&nbsp;
                         <span className='btn btn-secondary'onClick={()=>this.setState({text:''})}>Reset</span>
                         &nbsp;&nbsp;&nbsp;
                         <span className='btn bg-primary text-light' onClick={()=> this.setState({type:'word'})}>Word Prev</span>
                    <hr/>

                    <div class="document-editor">
                        <div class="document-editor__toolbar"></div>
                        <div class="document-editor__editable-container">
                            <div class="document-editor__editable" contentEditable>
                                {this.state.type === 'code' && `<p>${this.state.text}</p>`}
                                {/* {this.state.type === 'word' && `${parse(this.state.text)}`} 
                                {this.state.type === 'word' && console.log(this.state.text)}
                                {this.state.type === 'word' && console.log(parse(this.state.text))} */}
                                {/* <p>
                                    {this.state.type === 'word' && console.log('suuppy ',parse('<p><b>yung</b></p>'))}
                                </p> */}
                                {this.state.type === 'word' && <p dangerouslySetInnerHTML={{__html: this.state.text}}></p> }
                            </div>     
                        </div>
                    </div>

                </div>
            </div>
        </>
        );
    }
}

export default NewPost;
