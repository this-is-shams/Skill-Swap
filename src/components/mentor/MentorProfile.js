import React, { useEffect, useState } from "react";
import MentorSidebar from "./MentorSidebar";
import { getLoggedInmentor } from "../auth";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Profile() {
  const [isEditable, setIsEditable] = useState(false);
  const [fullName, setFullName] = useState("John Doe");
  const [institution, setInstitution] = useState("University Name");
  const [contactNo, setContactNo] = useState("01234567890");
  const [email, setEmail] = useState("example@example.com");
  const [ojProfile, setOjProfile] = useState("https://ojprofile.com/username");
  const [githubProfile, setGithubProfile] = useState(
    "https://github.com/username"
  );
  const [linkedinProfile, setLinkedinProfile] = useState(
    "https://linkedin.com/in/username"
  );
  const [semester, setSemester] = useState("example: 7th");

  const [editedFullName, setEditedFullName] = useState(fullName);
  const [editedInstitution, setEditedInstitution] = useState(institution);
  const [editedContactNo, setEditedContactNo] = useState(contactNo);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedOjProfile, setEditedOjProfile] = useState(ojProfile);
  const [editedGithubProfile, setEditedGithubProfile] = useState(githubProfile);
  const [editedLinkedinProfile, setEditedLinkedinProfile] = useState(linkedinProfile);
  const [editedSemester, setEditedSemester] = useState(semester);
  const [menteeResponses, setMenteeResponses] = useState([]);

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

  useEffect(() => {
    const fetchMenteeData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/viewmentee/getmentees/${getLoggedInmentor()}`
        );
        const data = response.data;

        const menteeResponses = await Promise.all(
          data.map(async (id) => {
            const menteeResponse = await axios.get(
              `http://localhost:5000/signin/mentee/menteedata/${id}`
            );
            return menteeResponse.data;
          })
        );

        console.log(menteeResponses);
        menteeResponses.forEach((mentee) => {
          console.log("mentee", mentee.mentee.name);
        });

        setMenteeResponses(menteeResponses);
      } catch (error) {
        console.error("Error fetching Mentee data:", error);
        // Handle error state or display error message
      }
    };

    fetchMenteeData();
  }, []);



  return (
    <div>
      <MentorSidebar />
      <div>
        <div>
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
                <h3 className="mt-5 px-3 py- font-semibold">
                  StopStalk Profile
                </h3>
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
                <h3 className="mt-5 px-3 py- font-semibold">
                  LinkedIn Profile
                </h3>
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
              <div className="px-3 py-2 mt-10 position-fixed">
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

        <div
          className="pl-64 dark:text-white text-center w-screen flex justify-center "
          style={{ position: "absolute", top: 600, right: 0 }}
        >
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Sl.</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">User ID</th>
              </tr>
            </thead>
            <tbody className="">
              {menteeResponses.map((mentee, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2"><Link to={`/userzzz/${mentee.mentee.user}`}>{mentee.mentee.name}</Link></td>
                  <td className="border px-4 py-2">{mentee.mentee.user}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}
