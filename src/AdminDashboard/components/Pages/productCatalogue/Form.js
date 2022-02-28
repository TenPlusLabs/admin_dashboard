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


export function PlanForms() {
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="file" src="#" placeholder="Image" id="img" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="title" class="form-control" placeholder="Form Name" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="url" class="form-control" placeholder="Form URL" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="desc" class="form-control" placeholder="Form Description" />
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


export function FeatureForms() {
    return (
        <div>
            <form class="form" action="">
            <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="file" src="#" placeholder="Image" id="img" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="title" class="form-control" placeholder="Form Name" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="url" class="form-control" placeholder="Form URL" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="desc" class="form-control" placeholder="Form Description" />
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

export function ActualForms() {
    return (
        <div>
            <form class="form" action="">
            <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="file" src="#" placeholder="Image" id="img" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="title" class="form-control" placeholder="Form Name" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="url" class="form-control" placeholder="Form URL" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="desc" class="form-control" placeholder="Form Description" />
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


