import { useNavigate } from "react-router-dom";

const Friends = ({ friend }) => {
    const statusStyles = {
        "overdue": "bg-red-400 rounded-full text-white font-semibold",
        "almost due": "bg-yellow-400 rounded-full text-white font-semibold",
        "on-track": "bg-green-800 rounded-full text-white font-semibold"
    };
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/friend/${friend.id}`)}
            className="card bg-base-100 shadow-md cursor-pointer hover:shadow-lg transition"
        >
            <div className="card-body items-center text-center">

                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={friend.picture} alt={friend.name} />
                    </div>
                </div>

                <h2 className="font-semibold text-lg">{friend.name}</h2>

                <p className="text-sm text-gray-400">
                    {friend.days_since_contact}d ago
                </p>

                <div className="flex gap-2 flex-wrap justify-center">
                    {friend.tags.map((tag, i) => (
                        <span key={i} className="badge bg-green-200 font-2xl rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

                <span className={`badge mt-2 ${statusStyles[friend.status]}`}>
                    {friend.status}
                </span>

            </div>
        </div>
    );
};

export default Friends;