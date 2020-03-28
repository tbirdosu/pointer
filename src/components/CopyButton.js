import React from 'react';

const CopyButton = () => {
  const copyText = () => {
    let text = document.getElementById("room-id");
    text.select();
    text.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    let buttonWrap = document.getElementById("copy-cover");
    buttonWrap.style.display = 'block';
    setTimeout(()=> buttonWrap.classList.add('fade'), 10);
    setTimeout(()=> {
      buttonWrap.classList.remove('fade');
      buttonWrap.style.display = 'none';
    }, 3000);
    
  };

  return (
    <div id="copy-button" className="copy-button-wrapper">
      <div id="copy-cover" className="copy-cover" >
        Copied!
      </div>
      <input id="room-id" className="copy-text-field" value={window.location.href} readOnly={true} />
      <button onClick={copyText} className="button-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 24h-20v-22h3c1.229 0 2.18-1.084 3-2h8c.82.916 1.771 2 3 2h3v9h-2v-7h-4l-2 2h-3.898l-2.102-2h-4v18h16v-5h2v7zm-10-4h-6v-1h6v1zm0-2h-6v-1h6v1zm6-5h8v2h-8v3l-5-4 5-4v3zm-6 3h-6v-1h6v1zm0-2h-6v-1h6v1zm0-2h-6v-1h6v1zm0-2h-6v-1h6v1zm-1-7c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1z"/></svg>
      </button>
    </div>
  );
};

export { CopyButton }; 
