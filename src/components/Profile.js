import React, { useState } from 'react';
import Sidebar from './Sidebar';

export default function UserProfile() {
    const [name, setName] = useState('John Doe');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const [facebook, setFacebook] = useState('');
    const [whatsapp, setWhatsApp] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleProfilePhotoChange = (event) => {
        setProfilePhoto(event.target.value);
    };

    const handleLinkedInChange = (event) => {
        setLinkedIn(event.target.value);
    };

    const handleFacebookChange = (event) => {
        setFacebook(event.target.value);
    };

    const handleWhatsAppChange = (event) => {
        setWhatsApp(event.target.value);
    };

    return (
        <div>
            <Sidebar />
            <div className="bg-white dark:bg-gray-800 z-10"
                    style={{ position: "fixed", top: 40, left: 280, right: 12 }}>
                <h2>User Profile</h2>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="profilePhoto">Profile Photo URL:</label>
                    <input
                        id="profilePhoto"
                        type="text"
                        value={profilePhoto}
                        onChange={handleProfilePhotoChange}
                    />
                </div>
                <div>
                    <label htmlFor="linkedIn">LinkedIn:</label>
                    <input
                        id="linkedIn"
                        type="text"
                        value={linkedIn}
                        onChange={handleLinkedInChange}
                    />
                </div>
                <div>
                    <label htmlFor="facebook">Facebook:</label>
                    <input
                        id="facebook"
                        type="text"
                        value={facebook}
                        onChange={handleFacebookChange}
                    />
                </div>
                <div>
                    <label htmlFor="whatsapp">WhatsApp:</label>
                    <input
                        id="whatsapp"
                        type="text"
                        value={whatsapp}
                        onChange={handleWhatsAppChange}
                    />
                </div>

                <h2>Preview</h2>
                <div>
                    <p>Name: {name}</p>
                    {profilePhoto && <img src={profilePhoto} alt="Profile" />}
                    <p>LinkedIn: {linkedIn}</p>
                    <p>Facebook: {facebook}</p>
                    <p>WhatsApp: {whatsapp}</p>
                </div>
            </div>
        </div>
    );
}
