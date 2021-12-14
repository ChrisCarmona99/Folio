import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"> Freelancer.io </Link>
      <Link to="/Work"> Work </Link>
      <Link to="/Explore"> Explore </Link>
      <Link to="/Profile"> Profile </Link>
    </nav>
  );
};

export default Navbar;
