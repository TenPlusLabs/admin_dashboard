import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';

export default function Form() {
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="Invoice Type" id="img" class="form-control" />
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
                        <input type="text" id="category_name" class="form-control" placeholder="Category Name" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="sub_cat_name" class="form-control" placeholder="Sub Category Name" />
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
                        <input type="text" id="in_stock" class="form-control" placeholder=" In Stock" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="customer_name" class="form-control" placeholder="Customer Name" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="email" class="form-control" placeholder="Email" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="phone_no" class="form-control" placeholder="Phone No" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="amount_paid" class="form-control" placeholder="Amount Paid" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="outstanding" class="form-control" placeholder="Outstanding" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <select id="payment_channel" class="form-control" placeholder="Payment Channel">
                            <option>Paypal</option>
                            <option>Paystack</option>
                            <option>Paystack Manual</option>
                        </select>
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<SendIcon />}>Add New</Button>
            </form>
        </div>
    )
}

export function EditInvoiceForm() {
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="Invoice Type" id="img" class="form-control" />
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
                        <input type="text" id="category_name" class="form-control" placeholder="Category Name" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="sub_cat_name" class="form-control" placeholder="Sub Category Name" />
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
                        <input type="text" id="in_stock" class="form-control" placeholder=" In Stock" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="customer_name" class="form-control" placeholder="Customer Name" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="email" class="form-control" placeholder="Email" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="phone_no" class="form-control" placeholder="Phone No" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="amount_paid" class="form-control" placeholder="Amount Paid" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="outstanding" class="form-control" placeholder="Outstanding" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <select id="payment_channel" class="form-control" placeholder="Payment Channel">
                            <option>Paypal</option>
                            <option>Paystack</option>
                            <option>Paystack Manual</option>
                        </select>
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<SendIcon />}>Edit</Button>
            </form>
        </div>
    )
}

