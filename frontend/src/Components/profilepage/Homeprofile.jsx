import  { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import '../../pages/Profile/Profile.css';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import History from './History';

export default function HomeProfile() {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImageFile(file);
  };
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const updatedData = {
      username,
      email,
      images: selectedImageFile ? [selectedImageFile] : [],
    };
  
    console.log('Selected Image:', selectedImageFile);
  
    const formData = new FormData();
    formData.append('username', updatedData.username);
    formData.append('email', updatedData.email);
  
    if (updatedData.images.length > 0) {
      updatedData.images.forEach((file, index) => {
        formData.append('images', file, `image-${index}`);
      });
    }
  
    console.log(formData);
    try {
      const token = localStorage.getItem("token");
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.user_id;
      const response = await axios.post(`http://localhost:8000/user/update/${userId}`, formData);
      const updatedUser = response.data;
      console.log('User updated:', updatedUser);
  
      // Perform any necessary actions with the updated user data
  
      console.log('Data updated successfully!', response.data);
    } catch (error) {
      console.error('Error updating user:', error);
      // Handle error or show an error message
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.user_id;

        const response = await fetch(`http://localhost:8000/user/getdata/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <main style={{ marginTop: 58 }} className="mainprofilepage">
      <div className="container pt-4" />
      <div className="profile-container">
        <div className="profile-image">
          <img
            src="../../../image/profile/610-6104451_image-placeholder-png-user-profile-placeholder-image-png-removebg-preview.png"
            alt="Profile"
          />
        </div>
        <div className="profile-info">
          <h2>{user.user_name}</h2>
          <p>{user.user_email}</p>
          <button className="edit-profile-button" onClick={handleShow}>
            <FontAwesomeIcon icon={faEdit} className="edit-icon" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container uniq">
            <div className="col-lg-12 text-lg-center">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FontAwesomeIcon icon={faEdit} className="edit-icon" style={{ marginRight: "5px", fontSize: "25px" }} />
                <h2 style={{ display: "inline" }}>Edit Profile</h2>
              </div>
            </div>

            <br />
            <div className="row">
              <div className="col-lg-4 text-xs-center">
                <img
                  src={selectedImageFile ? URL.createObjectURL(selectedImageFile) : "//placehold.it/150"}
                  className="m-x-auto img-fluid img-circle"
                  alt="avatar"
                />
                <h6 className="m-t-2">Upload a different photo</h6>
                <label className="custom-file">
                  <input type="file" id="file" className="custom-file-input" onChange={handleFileChange} />
                  <span className="custom-file-control">Choose file</span>
                </label>
              </div>
              <div className="col-lg-8">
                <form>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">
                      Username:
                    </label>
                    <div className="col-lg-9">
                      <input className="form-control" type="text" value={username} onChange={handleUsernameChange} />
                    </div>
                  </div>
                  <br />
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">
                      New Email:
                    </label>
                    <div className="col-lg-9">
                      <input className="form-control" type="email" value={email} onChange={handleEmailChange} />
                    </div>
                  </div>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
        
          <Button variant="secondary" onClick={handleFormSubmit} style={{ backgroundColor: "#ffdd00", color: "black", border: "none" }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    <History/>

    </main>
  );
}
