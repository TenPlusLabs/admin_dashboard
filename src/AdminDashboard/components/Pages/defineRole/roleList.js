import React from 'react'

function RoleList() {
  return (
    <div>
        <h3>Available Roles</h3>
            <div class='form-outline form-control p-2 mb-3'>
              <label>
                <input type='checkbox' /><span class='p-2'>Super Admin</span>
              </label>
            </div>
            <div class='form-outline form-control p-2 mb-3'>
            <label>
                <input type='checkbox' /><span class='p-2'>Admin</span>
              </label>
            </div>
            <div class='form-outline form-control p-2 mb-3'>
            <label>
                <input type='checkbox' /><span class='p-2'>Editor</span>
              </label>
            </div>
            <div class='form-outline form-control p-2 mb-3'>
            <label>
                <input type='checkbox' /><span class='p-2'>Author</span>
              </label>
            </div>
            <div class='form-outline form-control p-2 mb-3'>
            <label>
                <input type='checkbox' /><span class='p-2'>Contributor</span>
              </label>
            </div>
            <div class='form-outline form-control p-2 mb-3'>
            <label>
                <input type='checkbox' /><span class='p-2'>Custom Role 1</span>
              </label>
            </div>
            <div class='form-outline form-control p-2 mb-3'>
            <label>
                <input type='checkbox' /><span class='p-2'>Custom Role 2</span>
              </label>
            </div>
    </div>
  )
}

export default RoleList