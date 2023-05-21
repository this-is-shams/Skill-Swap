import React from 'react';
import Sidebar from './Sidebar';

export default function Leader() {
    // Sample leaderboard data
    const leaderboardData = [
        { name: 'Player 1', score: 100 },
        { name: 'Player 2', score: 643 },
        { name: 'Player 3', score: 72 },
        { name: 'Player 4', score: 63 },
        { name: 'Player 5', score: 50 },
    ];

    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div className='h-screen bg-yellow-300 dark:bg-slate-800 dark:text-white pl-60 pt-20 flex item-center'>
                <div className='bg-blue-300 pt-30 pl-50 m-10 text-center'>
                    <h1 className='text-3xl font-bold mb-4'>Leaderboard</h1>
                    <table className='border-collapse '>
                        <thead>
                            <tr>
                                <th className='px-4 py-2'>Rank</th>
                                <th className='px-4 py-2'>Player</th>
                                <th className='px-4 py-2'>Score</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {leaderboardData.map((player, index) => (
                                <tr key={index}>
                                    <td className='border px-4 py-2'>{index + 1}</td>
                                    <td className='border px-4 py-2'>{player.name}</td>
                                    <td className='border px-4 py-2'>{player.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
