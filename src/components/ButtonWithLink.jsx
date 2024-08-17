import React from 'react';

const ButtonWithLink = ({ name, sty, link,path }) => {
  const handleClick = () => {
    if (link && path != "parent") {
      window.open(link, '_blank');
    }
    else{
      window.open(link, '_parent');
    }
  };

  return (
    <div className="hidden md:flex">
      <button 
      onClick={handleClick}
      className={`${sty} py-2 px-4 rounded transition-colors duration-300 hover:cursor-pointer`}>
        {name}
      </button>
    </div>
  );
};

export default ButtonWithLink;
