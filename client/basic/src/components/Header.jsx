import {NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ul style={{ listStyleType: "none", display: "flex", gap: "1rem" }}>
        <li style={{ display: "flex", gap: "1rem" }}>
          <NavLink
            to={"/"}
            style={({ isActive }) => ({
              color: isActive ? "#BED7DC" : "white",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to={"/getdata"}
            style={({ isActive }) => ({
              color: isActive ? "#BED7DC" : "white",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            GetData
          </NavLink>
          <NavLink
            to={"/about"}
            style={({ isActive }) => ({
              color: isActive ? "#BED7DC" : "white",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
