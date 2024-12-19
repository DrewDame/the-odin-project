import { useState } from 'react';

function GeneralInfo({formData, handleChange}) {
    return (
        <div>
            <div>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                </label>
            </div>
            <div>
                <label>
                    Phone:
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}/>
                </label>
            </div>
        </div>
    )
  };
  
  export default GeneralInfo;
  
  