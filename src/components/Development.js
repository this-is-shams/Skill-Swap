import { React, useState } from 'react';
import Sidebar from "./Sidebar";

export default function Development() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="dark:bg-gray-800 overflow-hidden text-gray-800 dark:text-white">
      <Sidebar />
      <div className='bg-white dark:bg-gray-800 h-screen w-full lg:w-4/5 flex-col flex-wrap'>
        <div className='bg-white dark:bg-gray-800' style={{ position: 'absolute', top: 56, left: 280, right: 12 }}>
          <button onClick={handleOpenModal}>Open Modal</button>
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>
                  &times;
                </span>
                <h1 className='pt-2 text-center'>Add Development Learning</h1>
                <div className='pt-5'>
                <h2>Title</h2>
                <input className='dark:text-white rounded-md py-1 px-3 dark:bg-gray-600 border border-gray-400 w-full'></input>
                </div>
                <div className='pt-5'>
                <h2>Description</h2>
                <input className='dark:text-white rounded-md py-1 px-3 dark:bg-gray-600 border border-gray-400 w-full'></input>
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
