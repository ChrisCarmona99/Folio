import React, { useCallback, useEffect, useState } from "react";

import { Images } from "./Images";

const Work = () => {
  const [jobsData, setJobsData] = useState("");
  const [loading, setLoading] = useState(true);

  const [images, setImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [countryQuery, setCountryQuery] = useState("london");

  const AccessKey = "yr7UM57f2Z3ChtrD9gIfCcppylbzNKIPnF-uguuufOM";

  useEffect(() => {
    const APIurl = `https://api.unsplash.com/photos?query=${countryQuery.toLowerCase}&client_id=${AccessKey}`;
    // const APIurl =
    //   "https://api.unsplash.com/search/photos?query=london&client_id=yr7UM57f2Z3ChtrD9gIfCcppylbzNKIPnF-uguuufOM";
    fetch(APIurl)
      .then((r) => r.json())
      .then((r) => setImages(r));
  }, []);

  return (
    <div className="WorkPageContent">
      {loading ? (
        <div className="HeaderText">Coming Soon </div>
      ) : (
        <div>Displaying Work Page: </div>
      )}

      <button
        className="BackButton"
        onClick={() =>
          imageIndex === 0 ? setImageIndex(0) : setImageIndex(imageIndex - 1)
        }
      >
        Back
      </button>
      <button
        className="NextButton"
        onClick={() =>
          imageIndex === 9 ? setImageIndex(9) : setImageIndex(imageIndex + 1)
        }
      >
        Next
      </button>
      <div className="APIpicture">
        {images.length > 0 && <Images images={images} index={imageIndex} />}
      </div>
    </div>
  );
};

export default Work;
