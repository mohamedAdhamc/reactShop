import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, feedback });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mt-4">
        <label className="text-lg font-bold mb-2">Name</label>
        <input name="name" placeholder="Your name" value={name} onChange={setName} className="rounded-md border-2 border-gray-300  h-10 pl-2" />
      </div>
      <div className="flex flex-col mt-4">
        <label className="text-lg font-bold mb-2">Email</label>
        <input name="email" placeholder="Your email" value={email} onChange={setEmail} className="rounded-md h-10 border-2 border-gray-300 pl-2" />
      </div>
      <div className="flex flex-col mt-4">
        <label className="text-lg font-bold mb-2">Feedback</label>
        <textarea name="feedback" placeholder="Your feedback" value={feedback} onChange={setFeedback} className="rounded-md border-2 border-gray-300 h-20 pl-2 pt-1">
        </textarea>
      </div>
      <div class="flex justify-center mt-4">
        <button type="submit" className="rounded text-white bg-blue-500 hover:bg-blue-600">Submit</button>
      </div>
    </form>
  );
};

export default FeedbackForm;
