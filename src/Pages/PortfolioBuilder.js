import { useState } from "react";
import PortfolioDisplay from "./PortfolioDisplay";

const PortfolioBuilder = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  return (
    <div className="PortfolioBuilder">
      <h2> Add a new experience </h2>
      <form>
        <label> Title </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label> Summary </label>
        <textarea
          required
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        ></textarea>
        <label> Links </label>
        <input
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
        ></input>
      </form>
      <button> Save </button>
      <PortfolioDisplay />
    </div>
  );
};

export default PortfolioBuilder;
