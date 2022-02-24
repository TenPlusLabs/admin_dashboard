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

export function EditQuoteForm() {
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