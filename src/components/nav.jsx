import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
      fontWeight: "bolder",
      borderRight: isActive ? "6px solid black" : ""
    };
  };

  return (
    <div>
      <nav>
        <NavLink style={activeStyle} to="/" className="route-link">
          Inbox
        </NavLink>
        <NavLink style={activeStyle} to="/spam" className="route-link">
          Spam
        </NavLink>
        <NavLink style={activeStyle} to="/trash" className="route-link">
          Trash
        </NavLink>
      </nav>
    </div>
  );
};
