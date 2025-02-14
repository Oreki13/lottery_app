import React from "react";

interface WinnerAnnouncementProps {
    winner: string;
}

const WinnerAnnouncement: React.FC<WinnerAnnouncementProps> = ({winner}) => {
    return (
        <div className="flex mt-3 w-full justify-center">
            <p className="mr-1">The winner is</p>
            <p className="font-bold">{winner}</p>
        </div>
    );
};

export default WinnerAnnouncement;