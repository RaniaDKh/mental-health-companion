import React from "react";

export default function ProgressBar({ current, total }) {
  const percent = (current / total) * 100;

  return (
    <div className="h-2 bg-gray-200 rounded-full w-full mb-6">
      <div
        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
}
