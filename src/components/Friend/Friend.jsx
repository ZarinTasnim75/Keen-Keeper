import React from 'react';
import friends from '../../../public/friendsData.json';
import Friends from '../Friends/Friends';

const Friend = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            <h2 className="text-2xl font-bold mb-6">Your Friends</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {friends.map(friend => (
                    <Friends key={friend.id} friend={friend} />
                ))}
            </div>

        </div>
    );
};

export default Friend;