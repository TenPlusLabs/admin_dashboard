import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import { Save } from '@mui/icons-material';

export function Form() {
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
                <Button className=""  variant="outlined"  startIcon={<SendIcon />}>Add New</Button>
            </form>
        </div>
    )
}




export function PostSettings() {
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text"  id="author" class="form-control" placeholder="Author" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="category" class="form-control" placeholder="Category" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="image" alt='img' id="Image" class="form-control" placeholder="Image" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="tag" class="form-control" placeholder="Tag Description" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="seo" class="form-control" placeholder="SEO" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="page" class="form-control" placeholder="Page" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="image" alt='Featured Image' id="fimg" class="form-control"/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="seo_page " class="form-control" placeholder="SEO Page " />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="title" class="form-control" placeholder="Title" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="page_url" class="form-control" placeholder="Page Url" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="page_description" class="form-control" placeholder="Page Description" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="keyword" class="form-control" placeholder="Keyword" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id=" meta_data" class="form-control" placeholder="Meta Data" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="facebook_url" class="form-control" placeholder="Facebook URL" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="image" alt='Facebook Image' id="facebook_img" class="form-control" placeholder="Facebook Image" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="facebook_meta_desc" class="form-control" placeholder="Facebook Meta Description" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="instagram_url" class="form-control" placeholder="Instagram URL" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="instagram_image" class="form-control" placeholder="Instagram Image" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="instagram_meta" class="form-control" placeholder="Instagram Meta" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="description" class="form-control" placeholder="Description" />
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
                        <input type="text" id="twitter_meta" class="form-control" placeholder="Twitter Meta Description" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="hidden"/>
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<Save />}>Save All</Button>
            </form>
        </div>
    )
}



