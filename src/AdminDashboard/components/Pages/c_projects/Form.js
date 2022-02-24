import React from 'react'
import { Button } from '@mui/material';
import { Add, CancelOutlined, Delete, Save } from '@mui/icons-material';

export function Form() {
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="Title" id="title" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="assigned_to" class="form-control" placeholder="Assigned To" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="status" class="form-control" placeholder="Status" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <select id="progress" class="form-control" placeholder="progress">
                            <option>0%</option>
                            <option>50%</option>
                            <option>100%</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="milestone" class="form-control" placeholder="Milestone" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="start_date" class="form-control" placeholder="Start Date" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="fname" class="form-control" placeholder="Customer First Name" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="lname" class="form-control" placeholder="Customer Last Name" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="email" class="form-control" placeholder="Customer Email" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="phone" class="form-control" placeholder="Customer Phone" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col mb-4">
                        <div class="form-outline">
                        <label for='end_date'>End Date</label>
                        <input type="date" id="end_date" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <label for='reminders'>Reminders</label>
                        <input type="date" id="reminders" class="form-control" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <label for='notes_file'>Select Note File.</label>
                            <input type='file' id="notes_file" class="form-control" placeholder="Notes" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <textarea id="notes" class="form-control" placeholder="Notes">

                            </textarea>
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<Add />}>Add New</Button>
            </form>
        </div>
    )
}

export function EditOrderForm(){
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="Title" id="title" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="assigned_to" class="form-control" placeholder="Assigned To" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="status" class="form-control" placeholder="Status" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <select id="progress" class="form-control" placeholder="progress">
                            <option>0%</option>
                            <option>50%</option>
                            <option>100%</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="milestone" class="form-control" placeholder="Milestone" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="start_date" class="form-control" placeholder="Start Date" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col mb-4">
                        <div class="form-outline">
                        <label for='end_date'>End Date</label>
                        <input type="date" id="end_date" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <label for='reminders'>Reminders</label>
                        <input type="date" id="reminders" class="form-control" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <label for='notes_file'>Select Note File.</label>
                            <input type='file' id="notes_file" class="form-control" placeholder="Notes" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <textarea id="notes" class="form-control" placeholder="Notes">

                            </textarea>
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<Save />}>Save</Button>
            </form>
        </div>
    )
}


export function EditNewProjectForm(){
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="Title" id="title" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="assigned_to" class="form-control" placeholder="Assigned To" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="status" class="form-control" placeholder="Status" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <select id="progress" class="form-control" placeholder="progress">
                            <option>0%</option>
                            <option>50%</option>
                            <option>100%</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="milestone" class="form-control" placeholder="Milestone" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="start_date" class="form-control" placeholder="Start Date" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col mb-4">
                        <div class="form-outline">
                        <label for='end_date'>End Date</label>
                        <input type="date" id="end_date" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <label for='reminders'>Reminders</label>
                        <input type="date" id="reminders" class="form-control" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <label for='notes_file'>Select Note File.</label>
                            <input type='file' id="notes_file" class="form-control" placeholder="Notes" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <textarea id="notes" class="form-control" placeholder="Notes">

                            </textarea>
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<Save />}>Save</Button>
            </form>
        </div>
    )
}


export function EditPendingProjectForm(){
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="Title" id="title" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="assigned_to" class="form-control" placeholder="Assigned To" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="status" class="form-control" placeholder="Status" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <select id="progress" class="form-control" placeholder="progress">
                            <option>0%</option>
                            <option>50%</option>
                            <option>100%</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="milestone" class="form-control" placeholder="Milestone" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="start_date" class="form-control" placeholder="Start Date" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col mb-4">
                        <div class="form-outline">
                        <label for='end_date'>End Date</label>
                        <input type="date" id="end_date" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <label for='reminders'>Reminders</label>
                        <input type="date" id="reminders" class="form-control" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <label for='notes_file'>Select Note File.</label>
                            <input type='file' id="notes_file" class="form-control" placeholder="Notes" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <textarea id="notes" class="form-control" placeholder="Notes">

                            </textarea>
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<Save />}>Save</Button>
            </form>
        </div>
    )
}

export function EditOngoingProjectForm(){
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="Title" id="title" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="assigned_to" class="form-control" placeholder="Assigned To" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="status" class="form-control" placeholder="Status" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <select id="progress" class="form-control" placeholder="progress">
                            <option>0%</option>
                            <option>50%</option>
                            <option>100%</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="milestone" class="form-control" placeholder="Milestone" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="start_date" class="form-control" placeholder="Start Date" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col mb-4">
                        <div class="form-outline">
                        <label for='end_date'>End Date</label>
                        <input type="date" id="end_date" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <label for='reminders'>Reminders</label>
                        <input type="date" id="reminders" class="form-control" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <label for='notes_file'>Select Note File.</label>
                            <input type='file' id="notes_file" class="form-control" placeholder="Notes" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <textarea id="notes" class="form-control" placeholder="Notes">

                            </textarea>
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<Save />}>Save</Button>
            </form>
        </div>
    )
}

export function BillingForm(){
    return(
        <>
        <h3>Shipping Form</h3>
        <hr />
    <div class="row">
        <form class="form-horizontal" id="billingform">
            <div class="control-group mb-3">
                <label for="email" class="control-label">	
                    Billing E-Mail 
                </label>
                <div class="controls">
                    <input name="email" type="email" id="email" className='form-control'/>
                </div>
            </div>

            <div class="control-group mb-3">
                <label for="email" class="control-label">	
                    Phone
                </label>
                <div class="controls">
                    <input name="tel" type="tel"  id="tel" className='form-control'/>
                </div>
            </div>
 
            <div class="control-group">
                <label for="address" class="control-label">	
                    Street Address
                </label>
                <div class="controls mb-3">
                    <input name="address" placeholder="eg ( W 123 Street )" type="text"  id="address" className='form-control'/>
                </div>
            </div>
 
            <div class="control-group">
                <label for="zip" class="control-label">	
                    Zip Code
                </label>
                <div class="controls"><input name="zip" type="text"  id="zip" className='form-control' />
                </div>
            </div>
 
            <div class="control-group mb-3">
                <label for="city" class="control-label">	
                    City
                </label>
                <div class="controls"><input name="city" type="text"  id="city" className='form-control' />
                </div>
            </div>
            
            <div class="control-group">
                <label for="country" class="control-label">	
                    Country
                </label>
                <div class="controls">
                    <select name="country" id="country" className='form-control'>
                        <option ></option>
                        <option value="AR">Argentina</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="BY">Belarus</option>
                        <option value="BE">Belgium</option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BR">Brazil</option>
                        <option value="BG">Bulgaria</option>
                        <option value="CA">Canada</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="HR">Croatia</option>
                        <option value="CU">Cuba</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EG">Egypt</option>
                        <option value="EE">Estonia</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="HK">Hong Kong S.A.R., China</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Ireland</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA">Laos</option>
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MK">Macedonia</option>
                        <option value="MY">Malaysia</option>
                        <option value="MT">Malta</option>
                        <option value="MX">Mexico</option>
                        <option value="MD">Moldova</option>
                        <option value="MC">Monaco</option>
                        <option value="ME">Montenegro</option>
                        <option value="MA">Morocco</option>
                        <option value="NL">Netherlands</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="KP">North Korea</option>
                        <option value="NO">Norway</option>
                        <option value="PK">Pakistan</option>
                        <option value="PS">Palestinian Territory</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russia</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="RS">Serbia</option>
                        <option value="SG">Singapore</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="ZA">South Africa</option>
                        <option value="KR">South Korea</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="TW">Taiwan</option>
                        <option value="TH">Thailand</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">USA</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VN">Vietnam</option>
                    </select>
                </div>
            </div>
 
            <div class="form-actions">
                <button type="submit" class="btn btn-large btn-primary form-control mt-3">Save Billing Address</button>
            </div>
        </form>
    </div> 
    </>
    )
}



export function ShippingForm(){
    return(
        <>
        <h3>Shipping Form</h3>
        <hr />
    <div class="row">
        <form class="form-horizontal" id="billingform">
            <div class="control-group">
                <label for="address" class="control-label">	
                    Street Address
                </label>
                <div class="controls mb-3">
                    <input name="address" placeholder="eg ( W 123 Street )" type="text"  id="address" className='form-control'/>
                </div>
            </div>
 
            <div class="control-group">
                <label for="zip" class="control-label">	
                    Zip Code
                </label>
                <div class="controls"><input name="zip" type="text"  id="zip" className='form-control' />
                </div>
            </div>
 
            <div class="control-group mb-3">
                <label for="city" class="control-label">	
                    City
                </label>
                <div class="controls"><input name="city" type="text"  id="city" className='form-control' />
                </div>
            </div>
            
            <div class="control-group">
                <label for="country" class="control-label">	
                    Country
                </label>
                <div class="controls">
                    <select name="country" id="country" className='form-control'>
                        <option ></option>
                        <option value="AR">Argentina</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="BY">Belarus</option>
                        <option value="BE">Belgium</option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BR">Brazil</option>
                        <option value="BG">Bulgaria</option>
                        <option value="CA">Canada</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="HR">Croatia</option>
                        <option value="CU">Cuba</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EG">Egypt</option>
                        <option value="EE">Estonia</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="HK">Hong Kong S.A.R., China</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Ireland</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA">Laos</option>
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MK">Macedonia</option>
                        <option value="MY">Malaysia</option>
                        <option value="MT">Malta</option>
                        <option value="MX">Mexico</option>
                        <option value="MD">Moldova</option>
                        <option value="MC">Monaco</option>
                        <option value="ME">Montenegro</option>
                        <option value="MA">Morocco</option>
                        <option value="NL">Netherlands</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="KP">North Korea</option>
                        <option value="NO">Norway</option>
                        <option value="PK">Pakistan</option>
                        <option value="PS">Palestinian Territory</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russia</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="RS">Serbia</option>
                        <option value="SG">Singapore</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="ZA">South Africa</option>
                        <option value="KR">South Korea</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="TW">Taiwan</option>
                        <option value="TH">Thailand</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">USA</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VN">Vietnam</option>
                    </select>
                </div>
            </div>
 
            <div class="form-actions">
                <button type="submit" class="btn btn-large btn-primary form-control mt-3">Save Billing Address</button>
            </div>
        </form>
    </div> 
    </>
    )
}





export function AddMilestoneForm(){
    return (
        <div>
            <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="Title" id="title" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="assigned_to" class="form-control" placeholder="Assigned To" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="status" class="form-control" placeholder="Status" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <select id="progress" class="form-control" placeholder="progress">
                            <option>0%</option>
                            <option>50%</option>
                            <option>100%</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="milestone" class="form-control" placeholder="Milestone" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="start_date" class="form-control" placeholder="Start Date" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col mb-4">
                        <div class="form-outline">
                        <label for='end_date'>End Date</label>
                        <input type="date" id="end_date" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <label for='reminders'>Reminders</label>
                        <input type="date" id="reminders" class="form-control" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <label for='notes_file'>Select Note File.</label>
                            <input type='file' id="notes_file" class="form-control" placeholder="Notes" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <textarea id="notes" class="form-control" placeholder="Notes">

                            </textarea>
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<Save />}>Save</Button>
            </form>
        </div>
    )
}


export function AddTaskForm(){
    return (
        <div>
            {/* <form class="form" action="">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" src="#" placeholder="Title" id="title" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="assigned_to" class="form-control" placeholder="Assigned To" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="status" class="form-control" placeholder="Status" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <select id="progress" class="form-control" placeholder="progress">
                            <option>0%</option>
                            <option>50%</option>
                            <option>100%</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="milestone" class="form-control" placeholder="Milestone" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <input type="text" id="start_date" class="form-control" placeholder="Start Date" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col mb-4">
                        <div class="form-outline">
                        <label for='end_date'>End Date</label>
                        <input type="date" id="end_date" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                        <label for='reminders'>Reminders</label>
                        <input type="date" id="reminders" class="form-control" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <label for='notes_file'>Select Note File.</label>
                            <input type='file' id="notes_file" class="form-control" placeholder="Notes" />
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <textarea id="notes" class="form-control" placeholder="Notes">

                            </textarea>
                        </div>
                    </div>
                </div>
                <Button className=""  variant="outlined"  startIcon={<Save />}>Save</Button>
            </form> */}
            <form>
                <select className='form-control mb-3'>
                    <option>Product Design</option>
                    <option>Website Design</option>
                    <option>Website Development</option>
                    <option>Graphics Design</option>
                </select>
                <select className='form-control mb-3'>
                    <option>Design</option>
                    <option>SEO Optimization</option>
                    <option>Development</option>
                </select>
                <textarea className='form-control mb-3'>

                </textarea>
                <span className='form-outline d-flex align-items-center mb-3'> 
                    <select className='form-control'>
                        <option>Co-Worker 1</option>
                        <option>Co-Worker 2</option>
                        <option>Co-Worker 3</option>
                    </select>
                    <Delete />
                </span>
                <span className='badge badge-primary align-items-center'>
                    Jhon Doe <CancelOutlined className='cursor-pointer' />
                </span>
                &nbsp;
                <span className='badge badge-secondary align-items-center'>
                    Jhon Doe <CancelOutlined className='cursor-pointer' />
                </span>
            </form>
        </div>
    )
}