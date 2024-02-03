import React, { useEffect, useState } from "react";
import { useMessageStore } from "../store/messageStore";

const MessageMe = (showMessage) => {
  const jobTitle = "Fullstack Web Developer";
  const { setShow, show } = useMessageStore();

  return (
    <>
      <h3 className="font-semibold text-2xl text-slate-700 mt-3">
        Johnny P. Antiojo Jr.
      </h3>
      <h3 className="animate-bouncefont-semibold text-2xl text-slate-500 text-start">
        {jobTitle}
      </h3>
      <button
        className="animate-pulse bg-green-600 px-6 py-2 rounded text-white mt-2 w-full"
        onClick={() => setShow(true)}
      >
        Message me
      </button>
    </>
  );
};

export default MessageMe;
