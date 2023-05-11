import { React, useState } from 'react';
import Sidebar from "./Sidebar";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Development() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [links, setLinks] = useState([""]);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddLink = () => {
    setLinks(links.concat(""));
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

  const submit = () => {
    
  }

  return (
    <div className="dark:bg-gray-800 overflow-hidden text-gray-800 dark:text-white">
      <Sidebar />
      <div className='bg-white dark:bg-gray-800 h-screen w-full lg:w-4/5 flex-col flex-wrap'>
        <div className='bg-white dark:bg-gray-800' style={{ position: 'absolute', top: 56, left: 280, right: 12 }}>
          <button onClick={handleOpenModal} className='rounded-md py-1 px-3 bg-blue-400 text-white w-full'>Add Development Record +</button>
          {showModal && (
            <div className="modal">
              <div className="modal-content dark:text-white dark:bg-gray-600">
                <span className="close" onClick={handleCloseModal}>
                  &times;
                </span>
                <h1 className='pt-2 text-center font-semibold'>ADD DEVELOPMENT LEARNING</h1>
                <div className='pt-5'>
                  <h2>Title</h2>
                  <input className='dark:text-white rounded-md py-1 px-3 dark:bg-gray-600 border border-gray-400 w-full'></input>
                </div>
                <div className='pt-5'>
                  <h2>Description</h2>
                  <input className='dark:text-white rounded-md py-1 px-3 dark:bg-gray-600 border border-gray-400 w-full'></input>
                </div>
                <div className='pt-5'>
                  <h2>Time</h2>
                  <input className='dark:text-white rounded-md py-1 px-3 dark:bg-gray-600 border border-gray-400 w-full'></input>
                </div>
                <div className='pt-5'>
                  <h2>Date</h2>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select date"
                    className=" text-blue-500 dark:text-white rounded-md py-1 px-3 dark:bg-gray-600 border border-gray-400 w-full"
                  />
                </div>
                <div className='pt-5'>
                  <h2>Link</h2>
                  {links.map((link, index) => (
                    <div key={index} className='pt-2'>
                      <input
                        className='dark:text-white rounded-md py-1 px-3 dark:bg-gray-600 border border-gray-400 w-3/4'
                        value={link}
                        onChange={(event) => handleLinkChange(index, event.target.value)}
                      />
                      <button className="ml-2 rounded-md py-1 px-3 bg-red-500 text-white" onClick={handleRemoveLink}>
                        Delete
                      </button>
                    </div>
                  ))}
                  <div className='pt-2'><button className="rounded-md py-1 px-3 bg-blue-600 text-white w-full" onClick={handleAddLink}>Add Link</button></div>
                  <div className='pt-2'><button className="rounded-md py-1 px-3 bg-violet-600 text-white w-full" onClick={submit}>Submit</button></div>
                </div>
              </div>
            </div>
          )}
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
