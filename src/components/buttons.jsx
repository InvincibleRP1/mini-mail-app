import { useContext } from "react";

import { MailContext } from "../contexts/mailContext";

export const Buttons = ({ mId, unread }) => {
  const { dispatch } = useContext(MailContext);
  return (
    <div className="buttons">
      <button
        className="mail-btn delete-btn"
        onClick={() => dispatch({ type: "Delete", id: mId })}
      >
        Delete
      </button>
      <button
        className="mail-btn read-unread-btn"
        onClick={() => dispatch({ type: "Read", id: mId })}
      >
        {unread ? "Mark As Read" : "Mark As Unread"}
      </button>
      <button
        className="mail-btn spam-btn"
        onClick={() => dispatch({ type: "Spam", id: mId })}
      >
        Report as Spam
      </button>
    </div>
  );
};
