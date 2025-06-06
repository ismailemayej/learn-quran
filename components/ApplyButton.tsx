import React from "react";

const ApplyButton = (children: React.ReactNode) => {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded">
      {children}
    </button>
  );
};

export default ApplyButton;
