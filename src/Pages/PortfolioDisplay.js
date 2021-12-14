import HTMLReactParser from "html-react-parser";

const PortfolioDisplay = ({ text }) => {
  return (
    <div className="PortfolioDisplay">
      <h2> Portfolio Content </h2>
      <p> {HTMLReactParser(text)} </p>
    </div>
  );
};

export default PortfolioDisplay;
