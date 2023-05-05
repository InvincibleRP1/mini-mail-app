import { useContext } from "react";
import { Link } from "react-router-dom";

import { Filters } from "../components/filters";
import { MailCards } from "../components/mailCards";
import { Navigation } from "../components/nav";
import { MailContext } from "../contexts/mailContext";

export const SpamPage = () => {
  const { state, dispatch } = useContext(MailContext);

  const mailInSpam = state.mailBox.filter(({ isSpam }) => isSpam);

  return (
    <div>
      <h2>Rahul's Mailbox</h2>
      <h2>Spam</h2>
      <Navigation />

      {mailInSpam.length === 0 && (
        <b className="emptyMails">No mails in Spam</b>
      )}

      <MailCards mails={mailInSpam} spamArea />
    </div>
  );
};
