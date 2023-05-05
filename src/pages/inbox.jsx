import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { MailCards } from "../components/mailCards";
import { Filters } from "../components/filters";
import { Navigation } from "../components/nav";

import { MailContext } from "../contexts/mailContext";

export const HomePage = () => {
  const { state, unreadMailCount, dataToBeMapped } = useContext(MailContext);

  console.log(state.mailBox);
  return (
    <div>
      <Filters />

      <Navigation />

      <b className="unread-count">Unread Mails: {unreadMailCount}</b>

      {dataToBeMapped.length === 0 && (
        <b className="emptyMails">No Mails Found</b>
      )}

      <MailCards mails={dataToBeMapped} inboxArea />
    </div>
  );
};
