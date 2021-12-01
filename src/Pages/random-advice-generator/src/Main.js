import { useState, useEffect } from "react";

export default function Main({ query }) {
  const [data, setData] = useState("");

  function getAdviceFromServer() {
    const url = `https://api.adviceslip.com/advice/search/${query.toLowerCase()}`;
    console.log(query);
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r));
  }

  useEffect(getAdviceFromServer, [query]);
  console.log(data);
  return (
    <div className="advice">
      {data.slips ? <p>{data.slips[0].advice}</p> : "Sorry no advice for you"}
    </div>
  );
}
