import React, { useEffect, useState } from "react";
import MentorSidebar from "./MentorSidebar";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { getLoggedInmentor } from "../auth";

export default function Development() {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [items, setItems] = useState([]);
  const [links, setLinks] = useState([""]);
  const [title, setTitle] = useState("");
  const [taskId, setTaskID] = useState(""); // Renamed from `task` to `taskId`
  const [mentee, setMentee] = useState(""); // Added `mentee` state
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [showComments, setShowComments] = useState([]);
  const [mentees, setMentees] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddLink = () => {
    setLinks([...links, "\n"]);
  };

  const handleLinkChange = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const handleDeleteItem = async (index) => {
    const itemToDelete = items[index];
    try {
      await axios.delete(`http://localhost:5000/task/${itemToDelete.taskId}`);
      const updatedItems = items.filter((item, i) => i !== index);
      setItems(updatedItems);
      setShowComments(updatedItems.map(() => false));
    } catch (error) {
      console.log("Error deleting record:", error);
      alert("Error deleting record");
    }
  };

  const handleRemoveLink = (index) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
  };

  const handleAddItem = async () => {
    const newItem = {
      menteeId: mentee, // Add the selected mentee to the newItem object
      mentorId: getLoggedInmentor(),
      mTaskId: taskId,
      taskTitle: title,
      taskDescription: description,
      date: date,
      resources: links.filter((link) => link !== ""), // Filter out empty links
    };

    try {
      const response = await axios.post("http://localhost:5000/task/", newItem);
      // console.log(response.data);
      //setItems([...items, newItem]);
      setShowComments([...showComments, false]);
      setTaskID("");
      setTitle("");
      setDescription("");
      setTime("");
      setDate("");
      setShowModal(false);
      setLinks([""]);
    } catch (error) {
      console.log("Error From Server Side", error);
      alert("Error Posting Record");
    }
  };

  // Fetching
  useEffect(() => {
    fetchMentees();
  }, []);

  const fetchMentees = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/viewmentee/getmentees/${getLoggedInmentor()}`
      );
      console.log(response.data);
      const allMentees = ["All", ...response.data];
      setMentees(allMentees);
      console.log("MENTEEES", mentees);
    } catch (error) {
      if (error.response && error.response.status !== 401) {
        console.log("Error fetching Mentee records:", error);
      }
    }
  };
  // Fetching Tasks
  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/task/mentor/${getLoggedInmentor()}`
      );
      const fetchedItems = response.data.map((task) => ({
        taskId: task.mTaskId,
        title: task.taskTitle,
        description: task.taskDescription,
        date: task.date,
        links: task.resources,
      }));
      setItems(fetchedItems);
    } catch (error) {
      if (error.response && error.response.status !== 401) {
        console.log("Error fetching Task records:", error);
      }
    }
  };

  // console.log("FETCH DEV CHECK");
  // console.log(items);

  const toggleComments = (index) => {
    const newShowComments = [...showComments];
    newShowComments[index] = !newShowComments[index];
    setShowComments(newShowComments);
  };

  return (
    <div className="dark:bg-slate-800 overflow-hidden text-gray-800 dark:text-white">
      <MentorSidebar />
      <div className="bg-white dark:bg-slate-800 h-screen w-full lg:w-4/5 flex-col flex-wrap">
        <div
          className="bg-white dark:bg-slate-800"
          style={{ position: "absolute", top: 80, left: 280, right: 12 }}
        >
          <button
            onClick={handleOpenModal}
            className="rounded-md py-1 px-3 bg-blue-500 text-white w-full position: fixed;"
          >
            Add Task +
          </button>
          {showModal && (
            <div className="modal">
              <div className="modal-content dark:text-white dark:bg-gray-800">
                <span className="close" onClick={handleCloseModal}>
                  &times;
                </span>
                <h1 className="pt-2 text-center font-semibold">
                  ADD DEVELOPMENT LEARNING
                </h1>
                <div className="pt-5">
                  <h2>Mentee</h2>
                  <select
                    className="dark:text-white rounded-md py-1 px-3 mt-2 dark:bg-gray-600 border border-gray-400 w-full"
                    id="mentee-input"
                    value={mentee}
                    onChange={(e) => setMentee(e.target.value)}
                  >
                    <option value="">Select Mentee</option>
                    {mentees.map((mentee) => (
                      <option key={mentee} value={mentee}>
                        {mentee}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-5">
                  <h2>Task ID</h2>
                  <input
                    className="dark:text-white rounded-md mt-2 py-1 px-3 dark:bg-gray-600 border border-gray-400 w-full"
                    id="task-input"
                    value={taskId}
                    onChange={(e) => setTaskID(e.target.value)}
                  ></input>
                </div>
                <div className="pt-5">
                  <h2>Title</h2>
                  <input
                    className="dark:text-white rounded-md mt-2 py-1 px-3 dark:bg-gray-600 border border-gray-400 w-full"
                    id="title-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  ></input>
                </div>
                <div className="pt-5">
                  <h2>Description</h2>
                  <input
                    className="dark:text-white rounded-md mt-2 py-1 px-3 dark:bg-gray-600 border border-gray-400 w-full"
                    id="description-input"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></input>
                </div>

                <div className="pt-5">
                  <h2>Date</h2>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="dark:text-white rounded-md py-1 mt-2 px-3 dark:bg-gray-600 border border-gray-400 w-full"
                  />
                </div>
                <div className="pt-5">
                  {links.map((link, index) => (
                    <div key={index} className="pt-2">
                      <h2>Resources</h2>
                      <input
                        className="dark:text-white rounded-md mt-2 py-1 px-3 dark:bg-gray-600 border border-gray-400 w-3/4"
                        value={link}
                        onChange={(event) =>
                          handleLinkChange(index, event.target.value)
                        }
                      />
                      <button
                        className="ml-2 rounded-md py-1 px-3 w-1/5 bg-red-500 text-white"
                        onClick={() => handleRemoveLink(index)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                  <div className="pt-2">
                    <button
                      className="rounded-md py-1 px-3 bg-blue-600 text-white w-full"
                      onClick={handleAddLink}
                    >
                      Add Link
                    </button>
                  </div>
                  <div className="pt-2">
                    <button
                      className="rounded-md py-1 px-3 bg-blue-600 text-white w-full"
                      onClick={handleAddItem}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div
            className="bg-white w-full pt-10 pb-2 dark:bg-slate-800 rounded-md shadow-md"
            style={{
              flexDirection: "column",
              display: "flex",
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-slate-800 p-5 my-5 mx-10 rounded-md"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p>#Task ID: {item.taskId}</p>
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                    <p className="text-gray-500">{item.date}</p>
                  </div>
                  <div>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded-md"
                      onClick={() => handleDeleteItem(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="mt-5">
                  <p>{item.description}</p>
                </div>

                <div className="mt-5">
                  <h3 className="text-lg font-semibold">Resources:</h3>
                  {item.links.map((link, linkIndex) => (
                    <p key={linkIndex}>
                      <a href={link}>{link}</a>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Styles */}
      <style jsx>{`
        /* Modal Styles */
        .modal {
          display: block;
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 1000;
        }

        /* Modal Content Styles */
        .modal-content {
          background-color: #fefefe;
          padding: 20px;
          border: 1px solid #888;
          border-radius: 20px;
          width: 30%;
          max-width: 500px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          overflow-y: auto;
          max-height: 80vh;
        }

        /* Close Button Style */
        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }

        .close:hover,
        .close:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
