import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";

import { Filters } from "../components/filters";
import { MailCards } from "../components/mailCards";
import { Navigation } from "../components/nav";
import { MailContext } from "../contexts/mailContext";

export const TrashPage = () => {
  const { state, dispatch } = useContext(MailContext);

  const mailsInTrash = state.mailBox.filter((email) => email.isDeleted);

  return (
    <div>
      <h2>Rahul's Mailbox</h2>
      <h2>Trash</h2>
      <Navigation />

      {mailsInTrash.length === 0 && (
        <b className="emptyMails">No mails in Trash</b>
      )}
      {mailsInTrash.length > 0 && <MailCards mails={mailsInTrash} trashArea />}
    </div>
  );
};
