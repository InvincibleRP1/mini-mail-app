import { useContext } from "react";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";

import { MailContext } from "../contexts/mailContext";
import { Buttons } from "./buttons";

export const MailCards = ({
  mails,
  spamArea,
  trashArea,
  inboxArea,
  detailsArea
}) => {
  const { state, dispatch } = useContext(MailContext);

  console.log(mails);
  return (
    <div>
      {mails?.map((email) => {
        const {
          mId,
          unread,
          isStarred,
          isDeleted,
          isSpam,
          subject,
          content
        } = email;

        return (
          <div className="card" key={mId}>
            {/* Inbox area */}

            {inboxArea && mails.length > 0 && (
              <div
                key={mId}
                className={unread ? "unreadmail-card" : "readmail-card"}
                style={{ display: isDeleted || isSpam ? "none" : "" }}
              >
                <strong
                  onClick={() => dispatch({ type: "Mail-Star", id: mId })}
                >
                  {isStarred ? "⭐" : "✰"}
                </strong>
                <p>
                  Subject: <b>{subject}</b>
                </p>

                <p>{content}</p>

                <Link to={`/mail/${mId}`} className="mail-link">
                  View Mail
                </Link>
                <Buttons unread={unread} mId={mId} />
              </div>
            )}

            {/* Trash Area */}

            {trashArea && (
              <div className={unread ? "unreadmail-card" : "readmail-card"}>
                <p>
                  Subject: <b>{subject}</b>
                </p>

                <p>{content}</p>

                <div className="buttons">
                  <button
                    className="mail-btn delete-btn"
                    onClick={() => dispatch({ type: "Restore", id: mId })}
                  >
                    Restore
                  </button>
                </div>
              </div>
            )}

            {/* Spam Area */}

            {spamArea && (
              <div
                className={unread ? "unreadmail-card" : "readmail-card"}
                style={{ display: isDeleted ? "none" : "" }}
              >
                <p>
                  Subject: <b>{subject}</b>
                </p>

                <p>{content}</p>

                <div className="buttons">
                  <button
                    className="mail-btn spam-btn"
                    onClick={() => dispatch({ type: "Spam", id: mId })}
                  >
                    Unreport as Spam
                  </button>
                  <button
                    className="mail-btn delete-btn"
                    onClick={() => dispatch({ type: "Delete", id: mId })}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}

            {/* Mail Details Area */}

            {detailsArea && (
              <div
                className="mail-details"
                style={{ display: isSpam || isDeleted ? "none" : "" }}
              >
                <h3>{subject}</h3>
                <p>{content}</p>
                <Buttons unread={unread} mId={mId} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
