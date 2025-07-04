import { useState } from "react";
import { getSession } from "../../api/users.js";
import { TextInput } from "flowbite-react";

const Messages = () => {
    const user = getSession();
    const [chatList, setChatList] = useState([
        {
            id: 1,
            name: "Sunita Yadav",
            image: "/chat_img.jpg",
            messages: [
                { from: "Sunita Yadav", message: "Hello, class timing update?" },
                { from: user.id, message: "Yes, 9:00 AM confirmed." },
                { from: "Sunita Yadav", message: "Hello, class timing update?" },
                { from: user.id, message: "Yes, 9:00 AM confirmed." },
                { from: "Sunita Yadav", message: "Hello, class timing update?" },
                { from: user.id, message: "Yes, 9:00 AM confirmed." },
                { from: "Sunita Yadav", message: "Hello, class timing update?" },
                { from: user.id, message: "Yes, 9:00 AM confirmed." },
            ],
        },
        {
            id: 2,
            name: "Amit Singh",
            image: "/chat_img.jpg",
            messages: [
                { from: "Amit Singh", message: "Assignment submit hua?" },
                { from: user.id, message: "Kal tak ho jayega." },
            ],
        },
        {
            id: 3,
            name: "Rahul Sharma",
            image: "/chat_img.jpg",
            messages: [
                { from: "Rahul Sharma", message: "PTM kab hai?" },
                { from: user.id, message: "Next Friday ko." },
            ],
        },
        {
            id: 3,
            name: "Rahul Sharma",
            image: "/chat_img.jpg",
            messages: [
                { from: "Rahul Sharma", message: "PTM kab hai?" },
                { from: user.id, message: "Next Friday ko." },
            ],
        },
        {
            id: 3,
            name: "Rahul Sharma",
            image: "/chat_img.jpg",
            messages: [
                { from: "Rahul Sharma", message: "PTM kab hai?" },
                { from: user.id, message: "Next Friday ko." },
            ],
        },
    ]);
    const [activeChat, setActiveChat] = useState(chatList[0]);
    const [newMessage, setNewMessage] = useState("");

    const handleSend = () => {
        if (newMessage.trim() === "") return;

        const updatedChats = chatList.map((chat) =>
            chat.id === activeChat.id
                ? { ...chat, messages: [...chat.messages, { from: user.id, message: newMessage }] }
                : chat
        );

        setChatList(updatedChats);
        setActiveChat(updatedChats.find((c) => c.id === activeChat.id));
        setNewMessage("");
    };

    return (
        <div className="h-screen p-3 sm:p-5 mt-16">
            <h1 className="font-bold dark:text-white text-2xl mb-4">Messages</h1>
            
            <div className="flex flex-col sm:flex-row h-[80vh] sm:h-[75vh] gap-3">

                {/* Contacts List */}
                <div className="sm:w-1/4 sm:h-full h-1/2 bg-slate-100 dark:bg-slate-900 rounded-lg overflow-y-auto">
                    <div className="p-3 border-b bg-slate-900 dark:border-slate-700 font-bold">
                        <h2 className="font-semibold dark:text-white">Chats</h2>
                    </div>

                    {chatList.map((chat) => (
                        <div
                            key={chat.id}
                            className={`cursor-pointer p-2 flex items-center gap-2 hover:bg-slate-800 ${chat.id === activeChat.id ? "bg-slate-300 dark:bg-slate-700" : ""
                                }`}
                            onClick={() => setActiveChat(chat)}
                        >
                            <img src={chat.image} alt="" className="h-10 w-10 rounded-full" />
                            <div>
                                <h1 className="font-semibold dark:text-white">{chat.name}</h1>
                                <p className="font-thin dark:text-white text-xs sm:text-sm">
                                    {chat.messages[chat.messages.length - 1]?.message.slice(0, 20)}...
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chat Window */}
                <div className="flex-1 flex flex-col bg-slate-100 dark:bg-slate-900 rounded-lg overflow-hidden">
                    <div className="flex items-center gap-2 p-3 border-b bg-slate-900 dark:border-slate-700 font-bold">
                        <img src={activeChat.image} alt={activeChat.name} className="w-8 h-8 rounded-full" />
                        <div>
                            <h1 className="font-semibold dark:text-white">{activeChat.name}</h1>
                            <p className="font-thin text-green-500 text-xs">online</p>
                        </div>
                    </div>

                    <div className="flex-1 p-3  overflow-y-auto space-y-2 flex flex-col">
                        {activeChat.messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`max-w-xs p-2 text-xs sm:text-sm rounded-lg ${msg.from === user.id ? "bg-blue-200 self-end" : "bg-gray-200 self-start"
                                    }`}
                            >
                                {msg.message}
                            </div>
                        ))}
                    </div>

                    <div className="p-2 border-t flex gap-2">
                        <TextInput
                            className="flex-1"
                            placeholder="Type a message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        <button
                            className="bg-blue-500 text-white px-4 rounded"
                            onClick={handleSend}
                        >
                            Send
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Messages;
