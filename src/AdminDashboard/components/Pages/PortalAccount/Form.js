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
                        <input type="text" src="#" placeholder="First Name" id="first_name" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="last_name" class="form-control" placeholder="Last Name" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="email" class="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="phone_number" class="form-control" placeholder="Phone Number" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="website" class="form-control" placeholder="Website" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="facebook" class="form-control" placeholder="Facebook" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="price" class="form-control" placeholder="Price" />
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
                        <input type="text" id="price" class="form-control" placeholder="Company" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="instagram" class="form-control" placeholder="Education" />
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
                        <input type="text" src="#" placeholder="First Name" id="first_name" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="last_name" class="form-control" placeholder="Last Name" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="email" class="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="phone_number" class="form-control" placeholder="Phone Number" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="website" class="form-control" placeholder="Website" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="facebook" class="form-control" placeholder="Facebook" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="price" class="form-control" placeholder="Price" />
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
                        <input type="text" id="price" class="form-control" placeholder="Company" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="instagram" class="form-control" placeholder="Education" />
                        </div>
                    </div>
                </div>
                <div class='row mb-4'>
                    <div class="col">
                    <Button className="form-control"  variant="outlined"  startIcon={<Update />}>Update</Button>
                    </div>
                    <div class="col">
                    </div>
                </div>
                
            </form>
        </div>
    )
}
