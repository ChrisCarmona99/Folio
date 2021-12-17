import React from "react";

export const IndividualImage = ({ image }) => {
  return (
    <div className="photo">
      <img src={image.urls.small} alt="unsplash images" />
    </div>
  );
};
