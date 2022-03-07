import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";

function Form() {
  return (
    <div>
      <form class="form" action="">
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                src="#"
                placeholder="Product Name"
                id="pname"
                class="form-control"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="cat_name"
                class="form-control"
                placeholder="Category Name"
              />
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="in_stock"
                class="form-control"
                placeholder="In Stock"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="customer_name"
                class="form-control"
                placeholder="Customer Name"
              />
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="email"
                class="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="phone_no"
                class="form-control"
                placeholder="Phone No"
              />
            </div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="added_to_inventory"
                class="form-control"
                placeholder="Added To Inventory"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="how_long_due"
                class="form-control"
                placeholder="How Long Due"
              />
            </div>
          </div>
        </div>
        <Button className="" variant="outlined" startIcon={<SendIcon />}>
          Add New
        </Button>
      </form>
    </div>
  );
}

export default Form;
