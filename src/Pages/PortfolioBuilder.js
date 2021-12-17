import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";
import PortfolioDisplay from "./PortfolioDisplay";
import { createPortfolioContent } from "../PortfolioService";
import { db } from "../firebaseConfig";
import { getDocs, query, collection } from "@firebase/firestore";

const PortfolioBuilder = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState([]);

  function handleSubmit(text) {
    createPortfolioContent(text);
    setText(text);
  }

  useEffect(() => {
    async function getItems() {
      const q = query(collection(db, "PortfolioContent"));
      const querySnapshot = await getDocs(q);

      const portfolioItems = [];

      querySnapshot.forEach((doc) => {
        portfolioItems.push({
          ...doc.data(),
          key: doc.id,
        });
      });
      setContent(portfolioItems);
      setLoading(false);
    }
    getItems();
  }, []);

  if (loading) {
    return <h1>loading firebase data...</h1>;
  }

  return (
    <div className="editor">
      <CKEditor
        editor={ClassicEditor}
        data={text}
        onChange={(Event, editor) => {
          const data = editor.getData();
          setText(data);
        }}
      />
      <button
        className="savePortfolioContent"
        onClick={(e) => handleSubmit(text)}
      >
        {" "}
        Save{" "}
      </button>
      <div>
        <PortfolioDisplay content={content} />
      </div>
    </div>
  );
};

export default PortfolioBuilder;
