import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import { Save, Update } from '@mui/icons-material';

export default function Form() {
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="Coupon Name" id="coupon_name" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="program_applicable" class="form-control" placeholder="Product Applicable" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="program_sub_category_name" class="form-control" placeholder="Product Sub Category Name" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="cupon_number" class="form-control" placeholder="Cupon Number" />
                        </div>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <select id="status" class="form-control">
                                <option>User Applicable</option>
                                <option>New</option>
                                <option>Existing</option>
                                <option>Both</option>
                            </select>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <label for='customer_usage'>
                                <input type="text" placeholder='Customer Usage' id="customer_usage" class="form-control" />
                            </label>
                        </div>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <label>Status</label>
                            <select id="status" class="form-control">
                                <option>Status</option>
                                <option>Active</option>
                                <option>Expired</option>
                            </select>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <label for='coupon_exp_date' className='mb-2'> Coupon Expiry Date</label>
                            <input type="date" id="coupon_exp_date" class="form-control" />
                            
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
                        <input type="image" src="#" alt="TenPlus" id="img" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="title" class="form-control" placeholder="Page Title" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="url" class="form-control" placeholder="Page URL" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="desc" class="form-control" placeholder="Page Description" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="key" class="form-control" placeholder="Keyword" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="meta" class="form-control" placeholder="Meta-Data" />
                        </div>
                    </div>
                </div>
               <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="facebook_url" class="form-control" placeholder="Facebook URL" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="facebook_image" class="form-control" placeholder="Facebook Image" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
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
                </div>
                
            </form>
        </div>
    )
}


export function SeeAllTable() {
    return (
        <div>
            <table className=' bg-light shadow text-blue '>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Coupon Name</th>
                    <th>Coupon Number</th>
                    <th>Status</th>
                    <th>Usage Date</th>
                    <th>Expiry Date</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Jhon</td>
                        <td>Doe</td>
                        <td>jhondoe@gmail.com</td>
                        <td>2020202020</td>
                        <td>active</td>
                        <td>2010</td>
                        <td>2020</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export function CouponUsageEditForm() {
    return (
        <div>
            <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="number" id="facebook_meta_description" class="form-control" placeholder="Coupon Number Of Usage" />
                        </div>
                    </div>
                    <div class="col">
                    <Button className="form-control"  variant="outlined"  startIcon={<Save />}>Update</Button>
                    </div>
                </div>
        </div>
    )
}
