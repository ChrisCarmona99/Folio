import React, { useCallback, useEffect, useState } from "react";

export default function WorkPage({ jobPosting }) {
  const [jobsData, setJobsData] = useState("");
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const url = "http://api.dataatwork.org/v1/";
  //     fetch(url)
  //       .then((r) => r.json())
  //       .then((r) => setJobsData(r));
  //   }, [jobPosting]);

  return (
    <div>
      {loading ? <div>Coming Soon </div> : <div>Displaying Work Page: </div>}
    </div>
  );
}
