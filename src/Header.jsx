import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="py-6">
        <div className="flex justify-between items-center container">
          <div>
            <img src={'assets/icons/Logo.svg'} alt="" />
          </div>
          <nav>
            <ul>
              <l1 className="px-2">
                <NavLink to="/" style={({ isActive }) => ({
                  color: isActive ? 'greenyellow' : 'black'
                })}>
                  Home
                </NavLink>
              </l1>
            <l1 className="px-2">
              <NavLink to="/about" style={({ isActive }) => ({
                color: isActive ? 'greenyellow' : 'black'
              })}>
                About
              </NavLink>
            </l1>
            <l1 className="px-2">
              <NavLink to="/menu" style={({ isActive }) => ({
                color: isActive ? 'greenyellow' : 'black'
              })}>
                Menu
              </NavLink>
            </l1>
            <l1 className="px-2">
              <NavLink to="/booking" style={({ isActive }) => ({
                color: isActive ? 'greenyellow' : 'black'
              })}>
                Reservation
              </NavLink>
            </l1>
            <l1 className="px-2">
              <NavLink to="/order" style={({ isActive }) => ({
                color: isActive ? 'greenyellow' : 'black'
              })}>
                Order Online
              </NavLink>
            </l1>
            <l1 className="px-2">
              <NavLink to="/login" style={({ isActive }) => ({
                color: isActive ? 'greenyellow' : 'black'
              })}>
                Login
              </NavLink>
            </l1>
          </ul>
        </nav>
      </div>
    </div>
      </>
    );
}
export default Header;