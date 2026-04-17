import React, { useContext } from 'react';
import { FriendContext } from '../../components/Context/FriendContext';

import call from "../../components/assets/call.png";
import text from "../../components/assets/text.png";
import video from "../../components/assets/video.png";

const typeImageMap = {
    call: call,
    text: text,
    video: video,
};

const Timeline = () => {
    const { timeline } = useContext(FriendContext);

    return (
        <div className="p-6 bg-base-200">
            <h1 className="text-2xl font-bold mb-4">Timeline</h1>

            <div className="dropdown mb-4">

                <label tabIndex={0} className="btn btn-sm">
                    Timeline Filter
                </label>

                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-white rounded-box w-40"
                >
                    <li><a>All</a></li>
                    <li><a>Call</a></li>
                    <li><a>Text</a></li>
                    <li><a>Video</a></li>
                </ul>
            </div>

            {timeline.length === 0 ? (
                <p>No interactions yet</p>
            ) : (
                timeline.map(item => (
                    <div
                        key={item.id}
                        className="p-4 rounded mb-2 bg-white flex items-start gap-3" >
                        <img
                            src={typeImageMap[item.type]}
                            alt={item.type}
                            className="w-10 h-10 mt-1"
                        />

                        <div className="flex flex-col">

                            <p className="font-semibold">
                                <span className="text-black">{item.type} </span>
                                <span className="text-gray-400">with {item.name}</span>
                            </p>

                            <p className="text-sm text-gray-500">
                                {item.date}
                            </p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Timeline;