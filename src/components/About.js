import React from "react";


let image ="https://wallpapers.com/images/hd/god-of-war-angry-kratos-r9b8ijyeap79zcw2.jpg";

function About() {
  return (
    <div id="about">
      <p>"Don't feel for them, they will not feel for you"</p>
      <h2>- Kratos</h2>
      <img src={image} alt="I made this" />
    </div>
  );
}


export {image};
export default About;

