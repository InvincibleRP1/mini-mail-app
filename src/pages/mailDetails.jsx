import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { MailCards } from "../components/mailCards";

import { MailContext } from "../contexts/mailContext";

export const MailDetails = () => {
  const { state } = useContext(MailContext);
  const { mailID } = useParams();

  const foundEmail = state.mailBox.filter((email) => email.mId === mailID);

  return (
    <div>
      <h2>Rahul's Mailbox</h2>
      <i class="fa-solid fa-magnifying-glass"></i>
      <MailCards mails={foundEmail} detailsArea />

      <Link to="/" className="back-btn">
        ⬅ Go Back
      </Link>
    </div>
  );
};
