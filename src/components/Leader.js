import React from 'react';
import Sidebar from './Sidebar';

export default function Leader() {
    // Sample leaderboard data
    const leaderboardData = [
        { name: 'P 1', score: 100 },
        { name: 'P 2', score: 643 },
        { name: 'P 3', score: 72 },
        { name: 'P 4', score: 63 },
        { name: 'P 5', score: 50 },
    ];

    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div className='h-screen dark:bg-slate-800 dark:text-white pl-60 pt-20 flex justify-center '>
                <div className='pt-30 pl-50 m-10 text-center w-50'>
                    <h1 className='text-3xl font-bold mb-4'>Problem Solving</h1>
                    <table className='border-collapse '>
                        <thead>
                            <tr>
                                <th className='px-4 py-2'>Rank</th>
                                <th className='px-4 py-2'>Name</th>
                                <th className='px-4 py-2'>User ID</th>
                                <th className='px-4 py-2'>Total Time</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {leaderboardData.map((person, index) => (
                                <tr key={index}>
                                <td className='border px-4 py-2'>{index + 1}</td>
                                <td className='border px-4 py-2'>{person.name}</td>
                                <td className='border px-4 py-2'>{person.uid}</td>
                                <td className='border px-4 py-2'>{person.score}</td>
                                
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className=' pt-30 pl-50 m-10 text-center'>
                    <h1 className='text-3xl font-bold mb-4'>Development</h1>
                    <table className='border-collapse w-full'>
                        <thead>
                            <tr>
                                <th className='px-4 py-2'>Rank</th>
                                <th className='px-4 py-2'>Name</th>
                                <th className='px-4 py-2'>User ID</th>
                                <th className='px-4 py-2'>Total Time</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {leaderboardData.map((person, index) => (
                                <tr key={index}>
                                    <td className='border px-4 py-2'>{index + 1}</td>
                                    <td className='border px-4 py-2'>{person.name}</td>
                                    <td className='border px-4 py-2'>{person.uid}</td>
                                    <td className='border px-4 py-2'>{person.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
