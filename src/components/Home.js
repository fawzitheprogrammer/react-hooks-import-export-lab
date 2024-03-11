import React from "react";


const username ="Kratos";
const city ="Sparta";

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export {username,city};
export default Home;