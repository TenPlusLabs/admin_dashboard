import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';

export function Form() {
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder='First Name' id="f_name" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="l_name" class="form-control" placeholder="Last Name" />
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
                        <input type="text" id="phone" class="form-control" placeholder="Phone Number" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="company" class="form-control" placeholder="Company" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="country" class="form-control" placeholder="Country" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="state" class="form-control" placeholder="State" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <label>
                                <input type="checkbox" id="auto_gen"/> Automatically Generate Password ?.
                            </label>
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<SendIcon />}>Add New</Button>
            </form>
        </div>
    )
}

export function EditCustomerForm() {
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder='First Name' id="f_name" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="l_name" class="form-control" placeholder="Last Name" />
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
                        <input type="text" id="phone" class="form-control" placeholder="Phone Number" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="company" class="form-control" placeholder="Company" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="country" class="form-control" placeholder="Country" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="state" class="form-control" placeholder="State" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <label>
                                <input type="checkbox" id="auto_gen"/> Automatically Generate Password ?.
                            </label>
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<SendIcon />}>Add New</Button>
            </form>
        </div>
    )
}
