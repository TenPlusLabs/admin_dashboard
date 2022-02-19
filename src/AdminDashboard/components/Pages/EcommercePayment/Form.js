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
                        <input type="text" src="#" placeholder="Program Name" id="program_name" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="program_applicable" class="form-control" placeholder="Program Applicable" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="Description" class="form-control" placeholder="Description" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="price" class="form-control" placeholder="Price" />
                        </div>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <label for='customer_usage'>
                                <input type="text" placeholder='Total Payments' id="total_payments" class="form-control" />
                            </label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <label for='customer_usage'>
                                <input type="text" placeholder='Total Applicants' id="total_applicants" class="form-control" />
                            </label>
                        </div>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <label for='coupon_exp_date' className='mb-2'>Start Date</label>
                            <input type="date" id="start_date" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <label for='coupon_exp_date' className='mb-2'> End Date</label>
                            <input type="date" id="end_date" class="form-control" />   
                        </div>
                    </div>
                </div>

                <Button className=""  variant="outlined"  startIcon={<SendIcon />}>Add New</Button>
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
                    <th>Program Name</th>
                    <th>Coupon Used</th>
                    <th>Amount Paid</th>
                    <th>Outstanding</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Jhon</td>
                        <td>Doe</td>
                        <td>jhondoe@gmail.com</td>
                        <td>2020202020</td>
                        <td>FEB2000</td>
                        <td>200</td>
                        <td>2000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

