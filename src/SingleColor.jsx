import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { IoCopyOutline } from 'react-icons/io5';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const hex = `#${hexColor}`;
  const bgColor = { backgroundColor: hex };
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    toast.success(`Copied to clipboard`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`relative w-full h-30 rounded cursor-pointer text-center transition-all duration-300 ${
        index > 10 ? 'text-black' : 'text-white'
      }`}
      style={bgColor}
      onClick={handleCopy}
    >
     
      <div className="absolute top-2 left-2 text-xl">
        {copied ? (
          <span className="text-xs font-bold">Copied</span>
        ) : (
          <IoCopyOutline />
        )}
      </div>

     
      <div className="flex items-center justify-center h-full">
        <p className="text-sm">{hex}</p>
      </div>
    </div>
  );
};

export default SingleColor;
