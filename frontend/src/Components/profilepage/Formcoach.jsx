import  { useState } from 'react';
import "./form.css"
import axios from "axios";
export default function Formcoach() {

    const [pischanged, setPisChanged] = useState(false);

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [details, setdetails] = useState('');

  
  
    // File change handler
    const handleFileChange = (event) => {
      setSelectedFiles(Array.from(event.target.files));
    };
  
    // Form submit handler
    const handleSubmit = (event) => {
      event.preventDefault();
      
  
      // Create FormData object
      const formData = new FormData();
      selectedFiles.forEach((file, index) => {
        formData.append('images', file, `image-${index}`);
      });
      formData.append('firstname', firstname);
      formData.append('lastname', lastname);
      formData.append('email', email);
      formData.append('details', details);
   
      
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      
  
      // Send the form data to the server
      axios.post('http://localhost:8000/coach/addcoach', formData, config)
        .then((response) => {
          console.log('Data sent:', response.data);
          setPisChanged(!pischanged);
  
          // Do something with the response data
        })
        .catch((error) => {
          console.error('Error sending data:', error);
        });
    };




  return (
<>
      <div className="formcoach" style={{ marginTop: "50px",  }}>
<div className="container form-container">
  <h2 className="form-heading">Join with Us</h2>
  <form onSubmit={handleSubmit} >
    <div className="form-group">
      <label htmlFor="firstName" className="form-label">First Name :</label>
      <input type="text" className="form-control" id="firstName" name="firstname" placeholder="Enter your first name" required  onChange={(event) => setfirstname(event.target.value)} />
    </div>
    <div className="form-group">
      <label htmlFor="lastName" className="form-label">Last Name :</label>
      <input type="text" className="form-control" id="lastName" name="lastname" placeholder="Enter your last name" required  onChange={(event) => setlastname(event.target.value)} />
    </div>
    <div className="form-group">
      <label htmlFor="email" className="form-label">Email :</label>
      <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required  onChange={(event) => setemail(event.target.value)}/>
    </div>
  <div className="form-group">
  <label htmlFor="details" className="form-label">Details :</label>
  <textarea className="form-control form-control-details" id="details" name="details" placeholder="Enter details" required  onChange={(event) => setdetails(event.target.value)}   ></textarea>
</div>
<br/>
    <div className="form-group">
      <label htmlFor="file" className="form-label">Choose File :     </label>
       <input type="file" className="form-control-file" id="file" name="file"     multiple  onChange={handleFileChange}  />
    </div>
    <br/>
    <div className="text-center">
    
      <button type="submit" className="btn btn-primary custom-button">Submit</button>
    </div>
  </form>
</div>
</div>


</>
  )
}
