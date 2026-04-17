import React from 'react';

const Stats = () => {
    return (
        <div className="bg-base-200 py-10">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body text-center">
                            <h2 className="text-3xl font-semibold">10</h2>
                            <p className="text-gray-500">Total Friends</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body text-center">
                            <h2 className="text-3xl font-semibold">3</h2>
                            <p className="text-gray-500">On Track</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body text-center">
                            <h2 className="text-3xl font-semibold">6</h2>
                            <p className="text-gray-500">Need Attention</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body text-center">
                            <h2 className="text-3xl font-semibold">12</h2>
                            <p className="text-gray-500">Interactions This Month</p>
                        </div>
                    </div>

                </div>

                <hr className="mt-10 border-gray-300" />

            </div>
        </div>
    );
};

export default Stats;