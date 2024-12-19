import { useState } from 'react';

function CVDisplay({ formData }) {
  return (
    <div>
      <h2>General Information</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>

        <h2>Educational Experience</h2>
        <p><strong>School Name:</strong> {formData.schoolName}</p>
        <p><strong>Title of Study:</strong> {formData.titleOfStudy}</p>
        <p><strong>Date of Study:</strong> {formData.dateOfStudy}</p>

        <h2>Practical Experience</h2>
        <p><strong>Company Name:</strong> {formData.companyName}</p>
        <p><strong>Position Title:</strong> {formData.positionTitle}</p>
        <p><strong>Main Responsibilities:</strong> {formData.mainResponsibilities}</p>
        <p><strong>Date From:</strong> {formData.dateFrom}</p>
        <p><strong>Date Until:</strong> {formData.dateUntil}</p>
    </div>
  );
}

export default CVDisplay;
