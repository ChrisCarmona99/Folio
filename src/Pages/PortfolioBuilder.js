import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";
import PortfolioDisplay from "./PortfolioDisplay";

import { createApi } from "unsplash-js";

const PortfolioBuilder = () => {
  const [text, setText] = useState("");

  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const url =
      "https://api.unsplash.com/search/photos?query=indonesia&client_id=yr7UM57f2Z3ChtrD9gIfCcppylbzNKIPnF-uguuufOM";
    fetch(url)
      .then((r) => r.json())
      .then((r) => setImageData);
  });

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
