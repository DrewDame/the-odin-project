import { useState } from 'react';

function PracticalExperience({ formData, handleChange }) {
  return (
    <div>
      <div>
        <label>
          Company Name:
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange}/>
        </label>
      </div>
      <div>
        <label>
          Position Title:
            <input type="text" name="positionTitle" value={formData.positionTitle} onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Main Responsibilities:
          <textarea name="mainResponsibilities" value={formData.mainResponsibilities} onChange={handleChange}/>
        </label>
      </div>
      <div>
        <label>
          Date From:
          <input type="text" name="dateFrom" value={formData.dateFrom} onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Date Until:
          <input type="text" name="dateUntil" value={formData.dateUntil} onChange={handleChange}/>
        </label>
      </div>
    </div>
  );
}

export default PracticalExperience;