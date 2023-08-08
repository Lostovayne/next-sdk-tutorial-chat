"use client";
import { useChat } from "ai/react";

const HomePage = () => {
    const { handleInputChange, handleSubmit, messages, isLoading, input } = useChat();

    return (
        <section className="flex justify-center items-center h-screen">
            <form action="" className="max-w-xl w-full" onSubmit={handleSubmit}>
                <div className="text-white max-h-96 h-full overflow-y-auto">
                    {messages.map((m) => (
                        <div
                            key={m.id}
                            className={`flex flex-col mb-2 p-2 rounded-md ${
                                m.role === "assistant" ? "self-end bg-gray-800" : "self-start bg-blue-700"
                            }`}
                        >
                            <span className={`text-xs ${m.role === "assistant" ? "text-right" : "text-left"}`}>
                                {m.role}
                            </span>
                            {m.content}
                        </div>
                    ))}
                </div>

                <div className="flex justify-between my-4">
                    <label htmlFor="" className="text-white block font-bold my-2">
                        Say Something...
                    </label>
                    <button
                        className="bg-blue-600 text-white px-3 py-2 rounded-md focus:outline-none disabled:opacity-50"
                        disabled={isLoading || !input}
                    >
                        Send
                    </button>
                </div>

                <textarea
                    rows={4}
                    value={input}
                    placeholder="Type your message here..."
                    className="text-black bg-slate-300 px-3 py-2 w-full rounded-md focus:outline-none"
                    onChange={handleInputChange}
                ></textarea>
            </form>
        </section>
    );
};

export default HomePage;
