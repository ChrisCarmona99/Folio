import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homecontents">
      <h1> Build Your Porfolio Today </h1>
      <Link to="/PortfolioBuilder"> Create Portfolio </Link>
    </div>
  );
};

export default Home;
