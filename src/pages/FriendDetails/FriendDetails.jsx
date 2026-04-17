import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { BellOff, Archive, Trash2, Phone, MessageSquare, Video } from "lucide-react";
import { FriendContext } from '../../components/Context/FriendContext';
import { toast } from "react-toastify";

const FriendDetails = () => {
    const action = {
        CALL: "call",
        TEXT: "text",
        VIDEO: "video",
    };
    const { id } = useParams()
    const friends = useLoaderData();
    const expectedFriends = friends.find(friend => friend.id == id);
    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = expectedFriends;

    const { addTimeline } = useContext(FriendContext);

    const handleAction = (type) => {
        addTimeline({
            id: Date.now(),
            name,
            type,
            date: new Date().toLocaleString()
        });

        if (type === action.CALL) {
            toast.success(`Called with ${name}`);
        } else if (type === action.TEXT) {
            toast.info(`Texted ${name}`);
        } else if (type === action.VIDEO) {
            toast.success(`Video call with ${name}`);
        }
    };


    return (
        <div className="min-h-screen bg-gray-50 p-8 text-gray-700">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">

                <div className="md:col-span-4 space-y-4">

                    <div className="card bg-white shadow-sm border border-gray-100 py-8 px-4 text-center">
                        <div className="avatar mb-4 flex justify-center">
                            <div className="w-24 rounded-full ">
                                <img src={picture} alt={name} />
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold">{name}</h1>
                        <div className="flex flex-col items-center gap-2 mt-2">
                            <span className="badge badge-error text-white badge-sm rounded-full px-4">{status}</span>
                            <span className="badge bg-green-100 text-green-800 badge-sm rounded-full px-4 uppercase text-[10px] font-bold">{tags}</span>
                        </div>
                        <p className="mt-6 italic text-gray-500 font-medium">{bio}</p>
                        <p className="text-xs text-gray-400 mt-2"> {email}</p>
                    </div>

                    <div className="space-y-2">
                        <button className="btn btn-block bg-white  text-gray-600 font-medium justify-center gap-2">
                            <BellOff size={15} /> Snooze 2 Weeks
                        </button>
                        <button className="btn btn-block bg-white  text-gray-600 font-medium justify-center gap-2">
                            <Archive size={16} /> Archive
                        </button>
                        <button className="btn btn-block bg-white  text-red-500 hover:bg-red-50 font-medium justify-center gap-2">
                            <Trash2 size={18} /> Delete
                        </button>
                    </div>
                </div>

                <div className="md:col-span-8 space-y-6">

                    <div className="grid grid-cols-3 gap-4">
                        <div className="card bg-white shadow-sm border border-gray-100 p-6 text-center">
                            <p className="text-4xl font-bold text-gray-600">{days_since_contact}</p>
                            <p className="text-xs text-slate-400 mt-1 uppercase ">Days Since Contact</p>
                        </div>
                        <div className="card bg-white shadow-sm border border-gray-100 p-6 text-center">
                            <p className="text-4xl font-bold text-gray-600">{goal}</p>
                            <p className="text-xs text-slate-400 mt-1 uppercase ">Goal (Days)</p>
                        </div>
                        <div className="card bg-white shadow-sm border border-gray-100 p-6 text-center">
                            <p className="text-2xl font-bold text-gray-600 mt-2">{next_due_date}</p>
                            <p className="text-xs text-slate-400 mt-1 uppercase ">Next Due</p>
                        </div>
                    </div>

                    <div className="card bg-white shadow-sm border border-gray-100 p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-semibold text-gray-600">Relationship Goal</h3>
                            <button className="btn btn-xs bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100">Edit</button>
                        </div>
                        <p className="text-gray-500">Connect every <span className="font-bold text-gray-800">{goal} days</span></p>
                    </div>


                    <div className="card bg-white shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-semibold text-gray-600 mb-6">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button onClick={() => handleAction(action.CALL)}
                                className="flex flex-col items-center justify-center p-6 border border-gray-100 rounded-xl bg-gray-50/50 hover:bg-gray-100 transition gap-2">
                                <Phone size={24} className="text-gray-700" />
                                <span className="text-sm font-medium">Call</span>
                            </button>
                            <button onClick={() => handleAction(action.TEXT)}
                                className="flex flex-col items-center justify-center p-6 border border-gray-100 rounded-xl bg-gray-50/50 hover:bg-gray-100 transition gap-2">
                                <MessageSquare size={24} className="text-gray-700" />
                                <span className="text-sm font-medium">Text</span>
                            </button>
                            <button onClick={() => handleAction(action.VIDEO)}
                                className="flex flex-col items-center justify-center p-6 border border-gray-100 rounded-xl bg-gray-50/50 hover:bg-gray-100 transition gap-2">
                                <Video size={24} className="text-gray-700" />
                                <span className="text-sm font-medium">Video</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;