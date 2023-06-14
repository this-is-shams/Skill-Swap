import React, { useState } from 'react';
import Sidebar from './Sidebar';

export default function Profile() {
    const [isEditable, setIsEditable] = useState(false);
    const [fullName, setFullName] = useState('John Doe');
    const [institution, setInstitution] = useState('University Name');
    const [contactNo, setContactNo] = useState('01234567890');
    const [email, setEmail] = useState('example@example.com');
    const [ojProfile, setOjProfile] = useState('https://ojprofile.com/username');
    const [githubProfile, setGithubProfile] = useState('https://github.com/username');
    const [linkedinProfile, setLinkedinProfile] = useState('https://linkedin.com/in/username');
    const [semester, setSemester] = useState('example: 7th');

    const [editedFullName, setEditedFullName] = useState(fullName);
    const [editedInstitution, setEditedInstitution] = useState(institution);
    const [editedContactNo, setEditedContactNo] = useState(contactNo);
    const [editedEmail, setEditedEmail] = useState(email);
    const [editedOjProfile, setEditedOjProfile] = useState(ojProfile);
    const [editedGithubProfile, setEditedGithubProfile] = useState(githubProfile);
    const [editedLinkedinProfile, setEditedLinkedinProfile] = useState(linkedinProfile);
    const [editedSemester, setEditedSemester] = useState(semester);

    const handleEdit = () => {
        setIsEditable(true);
    };

    const handleSaveChanges = () => {
        setIsEditable(false);
        setFullName(editedFullName);
        setInstitution(editedInstitution);
        setSemester(editedSemester);
        setContactNo(editedContactNo);
        setEmail(editedEmail);
        setOjProfile(editedOjProfile);
        setGithubProfile(editedGithubProfile);
        setLinkedinProfile(editedLinkedinProfile);
    };

    return (
        <div>
            <Sidebar />
            <div className="h-screen w-screen dark:bg-slate-800 dark:text-white pl-60 pt-20 flex col">
                <div className="h-full w-full flex flex-col items-center pt-14">
                    <div className="flex flex-col items-center justify-center mb-4">
                        <div className="h-28 w-28 bg-green-500 rounded-full text-white font-bold text-2xl mb-4 flex items-center justify-center">
                            <span className="text-center">Shams</span>
                        </div>

                    </div>
                </div>

                <div className="h-full w-full pt-14">
                    <div>
                        <h3 className="mt-1 px-3 py- font-semibold">Full Name</h3>
                        {isEditable ? (
                            <input
                                type="text"
                                className="dark:bg-gray-700 border rounded-lg px-3 py-2 mt-1 w-64"
                                value={editedFullName}
                                onChange={(e) => setEditedFullName(e.target.value)}
                            />
                        ) : (
                            <div className="px-3 py-2 mt-1 w-64">
                                <p>{fullName}</p>
                            </div>
                        )}
                    </div>
                    <div>
                        <h3 className="mt-5 px-3 py- font-semibold">Institution</h3>
                        {isEditable ? (
                            <input
                                type="text"
                                className="dark:bg-gray-700 border rounded-lg px-3 py-2 mt-1 w-64"
                                value={editedInstitution}
                                onChange={(e) => setEditedInstitution(e.target.value)}
                            />
                        ) : (
                            <div className="px-3 py-2 mt-1 w-64">
                                <p>{institution}</p>
                            </div>
                        )}
                    </div>
                    <div>
                        <h3 className="mt-5 px-3 py- font-semibold">Semester</h3>
                        {isEditable ? (
                            <input
                                type="text"
                                className="dark:bg-gray-700 border rounded-lg px-3 py-2 mt-1 w-64"
                                value={editedSemester}
                                onChange={(e) => setEditedSemester(e.target.value)}
                            />
                        ) : (
                            <div className="px-3 py-2 mt-1 w-64">
                                <p>{semester}</p>
                            </div>
                        )}
                    </div>
                    <div>
                        <h3 className="mt-5 px-3 py- font-semibold">Contact no.</h3>
                        {isEditable ? (
                            <input
                                type="text"
                                className="dark:bg-gray-700 border rounded-lg px-3 py-2 mt-1 w-64"
                                value={editedContactNo}
                                onChange={(e) => setEditedContactNo(e.target.value)}
                            />
                        ) : (
                            <div className="px-3 py-2 mt-1 w-64">
                                <p>{contactNo}</p>
                            </div>
                        )}
                    </div>
                    <div>
                        <h3 className="mt-5 px-3 py- font-semibold">Email</h3>
                        {isEditable ? (
                            <input
                                type="text"
                                className="dark:bg-gray-700 border rounded-lg px-3 py-2 mt-1 w-64"
                                value={editedEmail}
                                onChange={(e) => setEditedEmail(e.target.value)}
                            />
                        ) : (
                            <div className="px-3 py-2 mt-1 w-64">
                                <p>{email}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="h-full w-full  pt-14">
                    <div>
                        <h3 className="mt-1 px-3 py- font-semibold">GitHub Profile</h3>
                        {isEditable ? (
                            <input
                                type="text"
                                className="dark:bg-gray-700 border rounded-lg px-3 py-2 mt-1 w-64"
                                value={editedGithubProfile}
                                onChange={(e) => setEditedGithubProfile(e.target.value)}
                            />
                        ) : (
                            <div className="px-3 py-2 mt-1 w-64">
                                <button
                                    className="bg-blue-500 text-white px-2 py-1 rounded-lg"
                                    onClick={() => window.open(githubProfile, "_blank")}
                                >
                                    Click to redirect
                                </button>
                            </div>
                        )}
                    </div>
                    <div>
                        <h3 className="mt-5 px-3 py- font-semibold">StopStalk Profile</h3>
                        {isEditable ? (
                            <input
                                type="text"
                                className="dark:bg-gray-700 border rounded-lg px-3 py-2 mt-1 w-64"
                                value={editedOjProfile}
                                onChange={(e) => setEditedOjProfile(e.target.value)}
                            />
                        ) : (
                            <div className="px-3 py-2 mt-1 w-64">
                                <button
                                    className="bg-blue-500 text-white px-2 py-1 rounded-lg"
                                    onClick={() => window.open(ojProfile, "_blank")}
                                >
                                    Click to redirect
                                </button>
                            </div>
                        )}
                    </div>
                    <div>
                        <h3 className="mt-5 px-3 py- font-semibold">LinkedIn Profile</h3>
                        {isEditable ? (
                            <input
                                type="text"
                                className="dark:bg-gray-700 border rounded-lg px-3 py-2 mt-1 w-64"
                                value={editedLinkedinProfile}
                                onChange={(e) => setEditedLinkedinProfile(e.target.value)}
                            />
                        ) : (
                            <div className="px-3 py-2 mt-1 w-64">
                                <button
                                    className="bg-blue-500 text-white px-2 py-1 rounded-lg"
                                    onClick={() => window.open(linkedinProfile, "_blank")}
                                >
                                    Click to redirect
                                </button>
                            </div>
                        )}
                    </div>
                    <div className='px-3 py-2 mt-10 position-fixed'>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleEdit}
            >
              Edit Info
            </button>
            {isEditable && (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
            )}
          </div>
                </div>
            </div>
        </div>
    );
}
