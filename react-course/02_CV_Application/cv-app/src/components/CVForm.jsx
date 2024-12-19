import GeneralInfo from "./GeneralInfo";
import EducationExperience from "./EducationExperience";
import PracticalExperience from "./PracticalExperience";
import CVDisplay from "./CVDisplay";
import Button from "./Button";
import { useState } from 'react';

function CVForm() {
    //Start the form in editing style
    const [isEditing, setIsEditing] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: '',
        companyName: '',
        positionTitle: '',
        mainResponsibilities: '',
        dateFrom: '',
        dateUntil: ''
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false);
    }

    function handleEdit() {
        setIsEditing(true);
    }




    return (
        <div>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <GeneralInfo formData={formData} handleChange={handleChange}/>
                    <EducationExperience formData={formData} handleChange={handleChange}/>
                    <PracticalExperience formData={formData} handleChange={handleChange}/>
                    <Button type="submit">Submit</Button>
                </form>
            ) : (
                <div>
                    <CVDisplay formData={formData}/>
                    <Button onClick={handleEdit}>Edit</Button>
                </div>
            )
            }
        </div>
    );
};

export default CVForm;

