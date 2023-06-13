import { React, useEffect, useState } from "react";
import MentorSidebar from "./MentorSidebar";
import stud from "./assets/student.png";
import task from "./assets/task.png";
import time from "./assets/time.png";
import ti from "./assets/ti.png";
import { getLoggedInmentor } from "../auth";
import axios from "axios";

export default function MentorDash() {
  const [mentorResponse, setMentorResponse] = useState(null);
  const [avgTime, setAvgTime] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const loggedInMentor = getLoggedInmentor(); // This function returns the logged-in user

        // Fetch mentorResponse for the logged-in mentor
        try {
          const response = await axios.get(
            `http://localhost:5000/viewmentee/${loggedInMentor}`
          );
          setMentorResponse(response.data);

          // Calculate average time
          calculateAverageTime(response.data);
        } catch (error) {
          console.error("Error fetching Mentor Response:", error.message);
          // Handle error state for mentorResponse
        }
      } catch (error) {
        console.error("Error Mentor Dashboard:", error.message);
        // Handle error state
      }
    }

    fetchData();
  }, []);

  // Calculate average time from devRecords array

  const calculateAverageTime = (data) => {
    const devRecords = data || [];
    const totalRecords = devRecords.length;

    if (totalRecords > 0) {
      let totalTime = 0;
      devRecords.forEach((record) => {
        const devRec = record.devRecords;
        if (devRec.length > 0) {
          devRec.forEach((data) => {
            // Access the value of the "time" attribute
            const recordTime = data.time;
            totalTime += recordTime;
          });
        }
      });

      const avgTime = totalTime / totalRecords;
      setAvgTime(avgTime);
    } else {
      setAvgTime(0);
    }
  };

  // Check if mentorResponse is null or not
  if (mentorResponse === null) {
    return <div>Loading...</div>;
  }

  /// Return
  return (
    <div>
      <div>
        <MentorSidebar />
      </div>
      <div className="h-screen dark:bg-slate-800 dark:text-white  pl-60 pt-20">
        <div className="h-5/6 w-90 m-10">
          <div className="w-full h-full flex flex-row">
            <div className="w-1/2 h-full">
              <div className="w-full h-1/2 overflow-hidden border border-black dark:border-white">
                {/* Enroll student div */}
                <div className="w-1/3 h-1/2 float-left flex justify-center items-center">
                  <img className="w-30 pt-20" src={stud} alt="" />
                </div>
                <div className="w-2/3 h-1/2 pt-20 float-left flex flex-col justify-center items-center">
                  <h1 className="font-bold text-3xl  text-blue-800 dark:text-blue-400 ">
                    Enrolled Students
                  </h1>
                  <span className="font-bold text-3xl pt-10 text-center">
                    {mentorResponse.length > 0 ? mentorResponse.length : 0}
                  </span>
                </div>
              </div>

              <div className="w-full h-1/2 overflow-hidden  border border-black dark:border-white">
                {/* Enroll student div */}
                <div className="w-1/3 h-1/2 float-left flex justify-center items-center">
                  <img className="w-30 pt-20" src={ti} alt="" />
                </div>
                <div className="w-2/3 h-1/2 pt-20 float-left flex flex-col justify-center items-center">
                  <h1 className="font-bold text-3xl  text-blue-800 dark:text-blue-400 ">
                    Students Time (Avg.)
                  </h1>
                  <span className="font-bold text-3xl pt-10 text-center">
                    {avgTime}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full">
              <div className="w-full h-1/2 overflow-hidden  border border-black dark:border-white">
                {/* Enroll student div */}
                <div className="w-1/3 h-1/2 float-left flex justify-center items-center">
                  <img className="w-30 pt-20" src={time} alt="" />
                </div>
                <div className="w-2/3 h-1/2 pt-20 float-left flex flex-col justify-center items-center">
                  <h1 className="font-bold text-3xl  text-blue-800 dark:text-blue-400 ">
                    Last Task on
                  </h1>
                  <span className="font-bold text-3xl pt-10 text-center">
                    20th March, 2023
                  </span>
                </div>
              </div>

              <div className="w-full h-1/2 overflow-hidden -100 border border-black dark:border-white">
                {/* Enroll student div */}
                <div className="w-1/3 h-1/2 float-left flex justify-center items-center">
                  <img className="w-30 pt-20" src={task} alt="" />
                </div>
                <div className="w-2/3 h-1/2 pt-20 float-left flex flex-col justify-center items-center">
                  <h1 className="font-bold text-3xl  text-blue-800 dark:text-blue-400 ">
                    Total Tasks Given
                  </h1>
                  <span className="font-bold text-3xl pt-10 text-center">
                    56
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
