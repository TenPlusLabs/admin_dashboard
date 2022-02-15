import React from 'react'
import { Button } from '@mui/material';
import { Add, Save } from '@mui/icons-material';

export function Form() {
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="Title" id="title" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="assigned_to" class="form-control" placeholder="Assigned To" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="status" class="form-control" placeholder="Status" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <select id="progress" class="form-control" placeholder="progress">
                            <option>0%</option>
                            <option>50%</option>
                            <option>100%</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="milestone" class="form-control" placeholder="Milestone" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="start_date" class="form-control" placeholder="Start Date" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col mb-4">
                        <div class="form-outline">
                        <label for='end_date'>End Date</label>
                        <input type="date" id="end_date" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <label for='reminders'>Reminders</label>
                        <input type="date" id="reminders" class="form-control" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <label for='notes_file'>Select Note File.</label>
                            <input type='file' id="notes_file" class="form-control" placeholder="Notes" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <textarea id="notes" class="form-control" placeholder="Notes">

                            </textarea>
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<Add />}>Add New</Button>
            </form>
        </div>
    )
}

export function EditOrderForm(){
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="Title" id="title" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="assigned_to" class="form-control" placeholder="Assigned To" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="status" class="form-control" placeholder="Status" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <select id="progress" class="form-control" placeholder="progress">
                            <option>0%</option>
                            <option>50%</option>
                            <option>100%</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="milestone" class="form-control" placeholder="Milestone" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="start_date" class="form-control" placeholder="Start Date" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col mb-4">
                        <div class="form-outline">
                        <label for='end_date'>End Date</label>
                        <input type="date" id="end_date" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <label for='reminders'>Reminders</label>
                        <input type="date" id="reminders" class="form-control" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <label for='notes_file'>Select Note File.</label>
                            <input type='file' id="notes_file" class="form-control" placeholder="Notes" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <textarea id="notes" class="form-control" placeholder="Notes">

                            </textarea>
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<Save />}>Save</Button>
            </form>
        </div>
    )
}


export function EditNewProjectForm(){
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="Title" id="title" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="assigned_to" class="form-control" placeholder="Assigned To" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="status" class="form-control" placeholder="Status" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <select id="progress" class="form-control" placeholder="progress">
                            <option>0%</option>
                            <option>50%</option>
                            <option>100%</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="milestone" class="form-control" placeholder="Milestone" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="start_date" class="form-control" placeholder="Start Date" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col mb-4">
                        <div class="form-outline">
                        <label for='end_date'>End Date</label>
                        <input type="date" id="end_date" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <label for='reminders'>Reminders</label>
                        <input type="date" id="reminders" class="form-control" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <label for='notes_file'>Select Note File.</label>
                            <input type='file' id="notes_file" class="form-control" placeholder="Notes" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <textarea id="notes" class="form-control" placeholder="Notes">

                            </textarea>
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<Save />}>Save</Button>
            </form>
        </div>
    )
}


export function EditPendingProjectForm(){
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="Title" id="title" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="assigned_to" class="form-control" placeholder="Assigned To" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="status" class="form-control" placeholder="Status" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <select id="progress" class="form-control" placeholder="progress">
                            <option>0%</option>
                            <option>50%</option>
                            <option>100%</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="milestone" class="form-control" placeholder="Milestone" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="start_date" class="form-control" placeholder="Start Date" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col mb-4">
                        <div class="form-outline">
                        <label for='end_date'>End Date</label>
                        <input type="date" id="end_date" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <label for='reminders'>Reminders</label>
                        <input type="date" id="reminders" class="form-control" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <label for='notes_file'>Select Note File.</label>
                            <input type='file' id="notes_file" class="form-control" placeholder="Notes" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <textarea id="notes" class="form-control" placeholder="Notes">

                            </textarea>
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<Save />}>Save</Button>
            </form>
        </div>
    )
}

export function EditOngoingProjectForm(){
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="Title" id="title" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="assigned_to" class="form-control" placeholder="Assigned To" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="status" class="form-control" placeholder="Status" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <select id="progress" class="form-control" placeholder="progress">
                            <option>0%</option>
                            <option>50%</option>
                            <option>100%</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="milestone" class="form-control" placeholder="Milestone" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="start_date" class="form-control" placeholder="Start Date" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col mb-4">
                        <div class="form-outline">
                        <label for='end_date'>End Date</label>
                        <input type="date" id="end_date" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <label for='reminders'>Reminders</label>
                        <input type="date" id="reminders" class="form-control" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <label for='notes_file'>Select Note File.</label>
                            <input type='file' id="notes_file" class="form-control" placeholder="Notes" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <textarea id="notes" class="form-control" placeholder="Notes">

                            </textarea>
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<Save />}>Save</Button>
            </form>
        </div>
    )
}
