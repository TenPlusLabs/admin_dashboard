import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import { Update } from '@mui/icons-material';

export function Form() {
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" placeholder="Product Name" id="product_name" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="product_url" class="form-control" placeholder="Product Url" />
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
                        <input type="text" id="sub_category_name" class="form-control" placeholder="Sub Category Name" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="total_orders" class="form-control" placeholder="Total Orders" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="date_description" class="form-control" placeholder="Date Description" />
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
                        <input type="text" id="latest_order" class="form-control" placeholder="Latest Order" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="date" id="date" class="form-control" placeholder="Date" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="in_stock" class="form-control" placeholder="In Stock" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="total_orders" class="form-control" placeholder="Total Orders" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="total_earnings_on_product" class="form-control" placeholder="Total Earnings On Product" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4"> 
                    <div class="col">
                        <Button className="form-control"  variant="outlined"  startIcon={<SendIcon />}>Add New</Button>
                    </div>
                    <div class="col">
                    <Button className="form-control display-none"  variant="outlined"  startIcon={<SendIcon />}>Add New</Button>
                    </div>
                </div>
                
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
                        <input type="text" placeholder="Product Name" id="product_name" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="product_url" class="form-control" placeholder="Product Url" />
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
                        <input type="text" id="sub_category_name" class="form-control" placeholder="Sub Category Name" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="total_orders" class="form-control" placeholder="Total Orders" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="date_description" class="form-control" placeholder="Date Description" />
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
                        <input type="text" id="latest_order" class="form-control" placeholder="Latest Order" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="date" id="date" class="form-control" placeholder="Date" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="in_stock" class="form-control" placeholder="In Stock" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="total_orders" class="form-control" placeholder="Total Orders" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="total_earnings_on_product" class="form-control" placeholder="Total Earnings On Product" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4"> 
                    <div class="col">
                        <Button className="form-control"  variant="outlined"  startIcon={<SendIcon />}>Add New</Button>
                    </div>
                    <div class="col">
                    <Button className="form-control display-none"  variant="outlined"  startIcon={<SendIcon />}>Add New</Button>
                    </div>
                </div>
                
            </form>
        </div>
    )
}
