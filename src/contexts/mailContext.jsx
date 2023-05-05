import { createContext, useReducer } from "react";
import { mails } from "../data/mailData";

export const MailContext = createContext();

const MailReducer = (currentState, action) => {
  switch (action.type) {
    case "Star":
      return { ...currentState, starFilter: !currentState.starFilter };

    case "Unread":
      return { ...currentState, unreadFilter: !currentState.unreadFilter };

    case "Read":
      const updatedEmails = currentState.mailBox.map((mail) =>
        mail.mId === action.id ? { ...mail, unread: !mail.unread } : mail
      );

      return { ...currentState, mailBox: updatedEmails };

    case "Spam":
      const updatedSpams = currentState.mailBox.map((mail) =>
        mail.mId === action.id
          ? { ...mail, isSpam: !mail.isSpam ?? false }
          : mail
      );

      return { ...currentState, mailBox: updatedSpams };

    case "Mail-Star":
      const updatedStarredMails = currentState.mailBox.map((email) =>
        email.mId === action.id
          ? { ...email, isStarred: !email.isStarred }
          : email
      );

      return { ...currentState, mailBox: updatedStarredMails };

    case "Delete":
      const updatedMailsAfterDeletion = currentState.mailBox.map((email) =>
        email.mId === action.id
          ? { ...email, isDeleted: !email.isDeleted ?? false }
          : email
      );

      return { ...currentState, mailBox: updatedMailsAfterDeletion };

    case "Restore":
      const updatedMailsAfterRestore = currentState.mailBox.map((email) =>
        email.mId === action.id
          ? { ...email, isDeleted: !email.isDeleted }
          : email
      );

      return { ...currentState, mailBox: updatedMailsAfterRestore };

    default:
      return currentState;
  }
};

export const MailHandler = ({ children }) => {
  const [state, dispatch] = useReducer(MailReducer, {
    mailBox: [...mails],
    unreadFilter: false,
    starFilter: false
  });

  const unreadMailCount = state.mailBox.reduce(
    (acc, curr) => (curr.unread ? (acc += 1) : acc),
    0
  );

  //console.log(state.mailBox);

  //console.log(MailDetails);

  const filteredValues = () => {
    let data = [...state.mailBox];

    if (state.starFilter) {
      data = data.filter(({ isStarred }) => isStarred);
    }

    if (state.unreadFilter) {
      data = data.filter(({ unread }) => unread);
    }

    return data;
  };

  const dataToBeMapped = filteredValues();
  return (
    <MailContext.Provider
      value={{
        state,
        dispatch,
        dataToBeMapped,
        unreadMailCount
      }}
    >
      {children}
    </MailContext.Provider>
  );
};
