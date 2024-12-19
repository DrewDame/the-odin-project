import { useState } from 'react';

function EducationExperience({formData, handleChange}) {
    return (
    <div>
        <div>
            <label>
                School Name:
                <input type="text" name="schoolName" value={formData.schoolName} onChange={handleChange}/>
            </label>
        </div>
        <div>
            <label>
                Title of Study:
                <input type="text" name="titleOfStudy" value={formData.titleOfStudy} onChange={handleChange}/>
            </label>
        </div>
        <div>
            <label>
                Date of Study:
                <input type="text" name="dateOfStudy" value={formData.dateOfSTudy} onChange={handleChange}/>
            </label>
        </div>
    </div>
    );
  };
  
  export default EducationExperience;
  
  