import React from "react";

function Section({ header, desc }) {
  return (
    <div className="max-w-70 p-10">
      <h3 className="font-bold text-xl mb-1">{header}</h3>
      <a href="#">♦ {desc}</a>
    </div>
  );
}

export default Section;
