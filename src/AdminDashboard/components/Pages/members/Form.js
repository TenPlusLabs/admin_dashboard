import React from 'react'
import { Button } from '@mui/material';
import { Update } from '@mui/icons-material';

export function EditForm() {
    return (
        <div>      
            <h3>Update Member</h3>   
            <hr />                       
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="First Name" id="fname" className="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="lname" class="form-control" placeholder="Last Name" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="email" id="email" class="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="tel" id="phone" class="form-control" placeholder="Phone Number" />
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
                        <input type="text" id="company" class="form-control" placeholder="Company" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="education" class="form-control" placeholder="Education" />
                        </div>
                    </div>
                </div>
                {/* <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="facebook_meta_description" class="form-control" placeholder="Facebook Meta Description" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="instagram_url" class="form-control" placeholder="Instagram URL" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="instagram_image" class="form-control" placeholder="Instagram Image" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="instagram_meta_description" class="form-control" placeholder="Instagram Meta Description" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="twitter_url" class="form-control" placeholder="Twitter URL" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="twitter_image" class="form-control" placeholder="Twitter Image" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="twitter_meta_description" class="form-control" placeholder="Twitter Meta Description" />
                        </div>
                    </div>
                    <div class="col">
                    <Button className="form-control"  variant="outlined"  startIcon={<Update />}>Update</Button>
                    </div>
                </div> */}

                <div class="row mb-4">
                    <div class="col">
                        <Button className="form-control"  variant="outlined"  startIcon={<Update />}>Update</Button>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        {/* <input type="text" id="twitter_meta_description" class="form-control" placeholder="Twitter Meta Description" /> */}
                        </div>
                    </div>
                </div>
                
            </form>
        </div>
    )
}
