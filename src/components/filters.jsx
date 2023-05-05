import { useContext } from "react";
import { MailContext } from "../contexts/mailContext";

export const Filters = () => {
  const { dispatch } = useContext(MailContext);

  return (
    <div>
      <h2>Rahul's Mailbox</h2>
      <section>
        <p>Filters</p>
        <input
          type="checkbox"
          name="mails"
          id=""
          onChange={() => dispatch({ type: "Unread" })}
        />
        <label htmlFor="">Show Unread Mails</label>
        <input
          type="checkbox"
          name="mails"
          id=""
          onChange={() => dispatch({ type: "Star" })}
        />
        <label htmlFor="">Show Starred Mails</label>
      </section>
    </div>
  );
};
