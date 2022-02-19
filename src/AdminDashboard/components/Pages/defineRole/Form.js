import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';

export default function NewRoleForm() {
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="role_name" class="form-control" placeholder="Name Of Role" />
                        </div>
                    </div>
                    </div>
                            <div>
                                <hr/>
                                    Role Accesses
                                <hr/>
                                <label className='form-control p-2'>
                                    <input type='checkbox' />Acccess 1
                                </label>

                                <label className='form-control p-2'>
                                    <input type='checkbox' />Acccess 2
                                </label>

                                <label className='form-control p-2'>
                                    <input type='checkbox' />Acccess 3
                                </label>

                                <label className='form-control p-2'>
                                    <input type='checkbox' />Acccess 4
                                </label>

                                <label className='form-control p-2'>
                                    <input type='checkbox' />Acccess 5
                                </label>

                                <label className='form-control p-2'>
                                    <input type='checkbox' />Acccess 6
                                </label>

                                <label className='form-control p-2'>
                                    <input type='checkbox' />Acccess 7
                                </label>

                                <label className='form-control p-2'>
                                    <input type='checkbox' />Acccess 8
                                </label>
                            </div>
                    <Button className=""  variant="outlined"  startIcon={<SendIcon />}>Add New</Button>
            </form>
        </div>
    )
}


export function EditUserForm() {
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="Username" id="username" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="fname" class="form-control" placeholder="First Name" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="lname" class="form-control" placeholder="lname" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="website" class="form-control" placeholder="Website" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="facebook" class="form-control" placeholder="Facebook" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="instagram" class="form-control" placeholder="Instagram" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="password" class="form-control" placeholder="Password" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <select className='form-control'>
                                <option>Role</option>
                                <option>Super Admin</option>
                                <option>Administrator</option>
                                <option>Editor</option>
                                <option>Author</option>
                                <option>Contributor</option>
                                <option>Custom Role 1</option>
                                <option>Custom Role 2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<SendIcon />}>Add New</Button>
            </form>
        </div>
    )
}

