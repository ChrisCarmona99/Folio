<<<<<<< HEAD
import PortfolioBuilder from "./PortfolioBuilder";

const PortfolioDisplay = () => {
=======
import HTMLReactParser from "html-react-parser";

const PortfolioDisplay = ({ text }) => {
>>>>>>> 563a6ecc2e10583f249146e1a06236e3b59d2439
  return (
    <div className="PortfolioDisplay">
      <h2> Portfolio Content </h2>
      <p> {HTMLReactParser(text)} </p>
    </div>
  );
};

export default PortfolioDisplay;
