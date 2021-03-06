import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import { Send } from '@mui/icons-material';

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
export function DisputePaymentForm() {
    return (
        <div>
            <div class="row mb-4">
                    <div class="col">
                        <div className="form-outline ">
                            <select className='form-control'>
                                <option>Jhon Doe</option>
                                <option>Jhon Doe</option>
                                <option>Jhon Doe</option>
                                <option>Jhon Doe</option>
                            </select>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="product_name" class="form-control" placeholder="Product Name" />
                        </div>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col">
                    <div class="form-outline">
                        <input type="text" id="dispute_application_date" class="form-control" placeholder="Dispute Application Date" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="dispute_details" class="form-control" placeholder="Dispute Details" />
                        </div>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col">
                    <div class="form-outline">
                        <input type="date" id="dispute_payment_date" class="form-control" placeholder="Dispute Payment Date" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="dispute_amount" class="form-control" placeholder="Dispute Amount" />
                        </div>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col">
                        <Button classNme='' variant="outlined" startIcon={<SendIcon />}>Send</Button>
                    </div>
                </div>
                
        </div>
    )
}

