import { React, useState } from 'react';
import Sidebar from "./Sidebar";
import 'react-datepicker/dist/react-datepicker.css';

export default function Development() {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [items, setItems] = useState([]);
  const [links, setLinks] = useState([""]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [showComments, setShowComments] = useState([]);


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

  const handleRemoveLink = (index) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
  }


  const handleAddItem = () => {
    const newItem = {
      serialNo: items.length + 1,
      title: title,
      description: description,
      time: time,
      date: date,
      link: links,
    };
    setItems([...items, newItem]);
    setShowComments([...showComments, false]);
    setItems([...items, newItem]);
    setTitle("");
    setDescription("");
    setTime("");
    setDate("");
    setShowModal(false);
    setLinks([""]);
  };

  const toggleComments = (index) => {
    const newShowComments = [...showComments];
    newShowComments[index] = !newShowComments[index];
    setShowComments(newShowComments);
  };


  return (
    <div className="dark:bg-gray-800 overflow-hidden text-gray-800 dark:text-white">
      <Sidebar />
      <div className='bg-white dark:bg-gray-800 h-screen w-full lg:w-4/5 flex-col flex-wrap'>
        <div className='bg-white dark:bg-gray-800' style={{ position: 'absolute', top: 80, left: 280, right: 12 }}>
          <button onClick={handleOpenModal} className='rounded-md py-1 px-3 bg-blue-800 text-white w-full position: fixed;'>Add Development Record +</button>
          {showModal && (
            <div className="modal">
              <div className="modal-content dark:text-white dark:bg-gray-600">
                <span className="close" onClick={handleCloseModal}>
                  &times;
                </span>
                <h1 className='pt-2 text-center font-semibold'>ADD DEVELOPMENT LEARNING</h1>
                <div className='pt-5'>
                  <h2>Title</h2>
                  <input className='dark:text-white rounded-md py-1 px-3 dark:bg-gray-600 border border-gray-400 w-full' id='title-input' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div className='pt-5'>
                  <h2>Description</h2>
                  <input className='dark:text-white rounded-md py-1 px-3 dark:bg-gray-600 border border-gray-400 w-full' id='description-input' value={description} onChange={(e) => setDescription(e.target.value)}></input>
                </div>
                <div className='pt-5'>
                  <h2>Time</h2>
                  <input className='dark:text-white rounded-md py-1 px-3 dark:bg-gray-600 border border-gray-400 w-full' id='time-input' value={time} type="number" onChange={(e) => setTime(e.target.value)}></input>
                </div>
                <div className='pt-5'>
                  <h2>Date</h2>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="dark:text-white rounded-md py-1 px-3 dark:bg-gray-600 border border-gray-400 w-full"
                  />
                </div>
                <div className='pt-5'>
                  {links.map((link, index) => (
                    <div key={index} className='pt-2'>
                      <h2>Link</h2>
                      <input
                        className='dark:text-white rounded-md py-1 px-3 dark:bg-gray-600 border border-gray-400 w-3/4'
                        value={link}
                        onChange={(event) => handleLinkChange(index, event.target.value)}
                      />
                      <button className="ml-2 rounded-md py-1 px-3 w-1/5 bg-red-500 text-white" onClick={() => handleRemoveLink(index)}>
                        Delete
                      </button>

                    </div>
                  ))}
                  <div className='pt-2'><button className="rounded-md py-1 px-3 bg-blue-600 text-white w-full" onClick={handleAddLink}>Add Link</button></div>
                  <div className='pt-2'><button className="rounded-md py-1 px-3 bg-blue-600 text-white w-full" onClick={handleAddItem}>Submit</button></div>
                </div>
              </div>
            </div>
          )}
          <div className="bg-white w-full pt-10 pb-2 dark:bg-gray-800 rounded-md shadow-md"
            style={{
              flexDirection: "column",
              display: "flex",
            }}>
            {items.map((item, index) => (
              <div className="p-5 dark:bg-gray-800 w-full m-2" key={index} style={{ flexDirection: "row", border: "2px solid blue" }}>
                <li className="dark:text-white font-bold">Task {item.serialNo}</li>
                <li className="dark:text-white">{item.title}</li>
                <li className="dark:text-white">{item.description}</li>
                <li className="dark:text-white">{item.time}</li>
                <li className="dark:text-white">{item.date}</li>
                <div className='pt-4'>
                  {item.link.map((link, linkIndex) => (
                    <li className="dark:text-white dark:text-blue-400" key={linkIndex}>
                      <a href={link}>{link}</a>
                    </li>
                  ))}
                </div>
                <div className='pt-4'>
                  {/* Toggle button */}
                  <button className="rounded-md py-1 px-3 bg-blue-600 text-white" onClick={() => toggleComments(index)}>
                    {showComments[index] ? "Hide Comments" : "Show Comments"}
                  </button>

                  {/* Comment section */}
                  {showComments[index] && (
                    <div>
                      {/* Render comments from the database */}
                      {/* ... */}
                    </div>
                  )}
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
  )
}
