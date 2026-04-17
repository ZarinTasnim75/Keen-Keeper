import React from 'react';
import Stats from '../Stats/Stats';
import Friend from '../Friend/Friend';

const Homepage = () => {
    return (
        <div className='bg-base-200'>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold mt-10">Friends to keep close in your life</h1>
                        <p className="py-6">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                        </p>
                        <button className="btn bg-green-800 text-white mb-10">+ Add a Friend</button>
                    </div>
                </div>
                
            </div>
            <Stats></Stats>
           <Friend></Friend>
        </div>
    );
};

export default Homepage;