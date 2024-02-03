import React, { useState } from "react";
import {
  BsCircle,
  BsCircleHalf,
  BsDashCircleDotted,
  BsFillDashCircleFill,
  BsPlayCircle,
  BsX,
  BsXCircle,
  BsXCircleFill,
} from "react-icons/bs";
import { useMessageStore } from "../store/messageStore";
import { toast } from "sonner";
import toastr from "toastr";

const MessageForm = () => {
  const { setShow, setMessage, message } = useMessageStore();
  const [sending, isSending] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    isSending(true);

    toastr.success("Have fun storming the castle!", "Miracle Max Says");

    setTimeout(() => {
      isSending(false);
      setMessage("");
      toast("Message sent successfully");

      setShow(false);
    }, 1500);
  };

  return (
    <div className="bg-white p-6 shadow-lg w-1/2 h-1/2">
      <div className="">
        <div className="flex justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-500">
            Say something you want me to know
          </h3>

          <button onClick={() => setShow(false)}>
            <BsXCircle size={20} />
          </button>
        </div>

        <textarea
          value={message}
          rows="10"
          onClick={(e) => setMessage(e.target.val)}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 "
        />

        <div className="grid place-items-end">
          <button
            className="px-6 py-2 bg-blue-400 rounded-lg text-white mt-4 w-24 h-10 grid place-items-center"
            onClick={handleSendMessage}
          >
            {sending ? <BsCircleHalf className="animate-spin" /> : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
