import { Link } from "react-router-dom";

const Home = () => {
  return (
    <body className="home">
    <div className="homecontents">
      <h1>Freelancing made simple.</h1>
      <h2>Build your future with <span className="headerBold">folio</span> today.</h2>
      <button className="createPortfolioButton">
        <Link to="/PortfolioBuilder"> Create Portfolio </Link>
      </button>
    </div>
    </body>
  );
};

export default Home;
