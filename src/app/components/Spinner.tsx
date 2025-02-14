const Spinner = ({ size = "w-10 h-10", color = "border-primary" }) => {
    return (
        <div className={`relative flex items-center justify-center ${size}`}>
            <div className={`absolute w-full h-full border-4 border-t-transparent ${color} rounded-full animate-spin`}></div>
        </div>
    );
};

export default Spinner;