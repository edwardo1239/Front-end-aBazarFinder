import React from "react";

interface ToastProps {
    message: string;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
    if (!message) return null;
    return (
        <div
            className="fixed bottom-6 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded shadow-lg animate-fade-in"
            role="alert"
            style={{ minWidth: 200, maxWidth: 350 }}
        >
            {message}
        </div>
    );
};

export default Toast;
