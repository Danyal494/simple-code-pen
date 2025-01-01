import React from "react";

const Result = ({ srcCode }) => {
  return (
    <div className="p-4 w-full bg-[#282c34] shadow mt-4 rounded-xl">
      <h2 className="text-lg font-semibold mb-2 text-white">Result</h2>
      <iframe
        srcDoc={srcCode}
        className="w-full h-60 border bg-white border-gray-700 rounded-lg"
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Result;
