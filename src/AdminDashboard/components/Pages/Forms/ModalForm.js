import React from 'react'
import { Button } from '@mui/material';
import { Close, Save } from '@mui/icons-material';

export function FormEdit() {
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder='Form Name' id="form_name" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="reply_to" class="form-control" placeholder="Reply To" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="subject" class="form-control" placeholder="Subject" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="mail_to" class="form-control" placeholder="Email To" />
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<Save />}>Save</Button>
            </form>
        </div>
    )
}

export function FormView() {
    return (
        <div>
            <h4>Page Name: Affilate</h4>
            <hr/>
            <table className=' bg-light p-5  text-blue'>
                        <thead>
                            <tr>
                                <th>Questions</th>
                                <th>Response</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>yo</td>
                                <td>yo</td>
                            </tr>
                        </tbody>
                    </table>
        </div>
    )
}




