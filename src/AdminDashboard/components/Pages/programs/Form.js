import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import { Update } from '@mui/icons-material';

export default function Form() {
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="Program Name" id="program_name" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="description" class="form-control" placeholder="Description" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <select type="text" id="status" class="form-control" >
                            <option>Status</option>
                            <option>Active</option>
                            <option>Closed</option>
                        </select>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="start_date" class="form-control" placeholder="Start Date" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="completion_date" class="form-control" placeholder="Completion Date" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="total_applicant" class="form-control" placeholder="Total Applicant" />
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<SendIcon />}>Add New</Button>
            </form>
        </div>
    )
}


export function EditForm() {
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="Program Name" id="program_name" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="description" class="form-control" placeholder="Description" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <select type="text" id="status" class="form-control" >
                            <option>Status</option>
                            <option>Active</option>
                            <option>Closed</option>
                        </select>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="start_date" class="form-control" placeholder="Start Date" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="completion_date" class="form-control" placeholder="Completion Date" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="total_applicant" class="form-control" placeholder="Total Applicant" />
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<SendIcon />}>Add New</Button>
            </form>
        </div>
    )
}
