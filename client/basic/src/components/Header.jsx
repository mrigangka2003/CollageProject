import { Link, NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <ul style={{listStyleType:"none" , display:"flex" , gap: "1rem"}}>
        <li style={{ display:"flex" , gap: "1rem"}}>
          <NavLink to={'/'} >Home</NavLink>
          <NavLink to={'/'}>GetData</NavLink>
          <NavLink to={'/'}>About</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header