import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import PortfolioDisplay from "./PortfolioDisplay";

const PortfolioBuilder = () => {
  const [text, setText] = useState("");

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
      <div>
        <PortfolioDisplay text={text} />
      </div>
    </div>
  );
};

export default PortfolioBuilder;
