import HTMLReactParser from "html-react-parser";
import React, { useCallback, useEffect, useState } from "react";

const PortfolioDisplay = ({ content }) => {
  return (
    <div className="PortfolioDisplay">
      <h2> Portfolio Content </h2>
      <p> {content.map((content) => `${content.Body || content.text}`)} </p>
    </div>
  );
};

export default PortfolioDisplay;
