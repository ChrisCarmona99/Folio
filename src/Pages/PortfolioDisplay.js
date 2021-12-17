import HTMLReactParser from "html-react-parser";

const PortfolioDisplay = ({ content }) => {
  return (
    <div className="PortfolioDisplay">
      <div className="PortfolioDisplay">
        <h2> Portfolio Content </h2>
        <p> {content.map((content) => `${content.Body || content.text}`)} </p>
      </div>
    </div>
  );
};

export default PortfolioDisplay;
