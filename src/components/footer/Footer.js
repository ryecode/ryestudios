import React from 'react'
import './Footer.styles.css';

export const Footer = () => {
  return (
    <div className='footer' >
      <button class="btn">
        <a
          class="words"
          href="http://www.pngtree.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          © RYAN CORRAL 2023
        </a>
      </button>
      <div class="credit">
        Some background and images from{" "}
        <a
          href="http://www.pngtree.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          pngtree.com
        </a>
        {" "}&{" "}
        <a
          href="https://www.vecteezy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          vecteezy.com
        </a>
      </div>
    </div>
  );
}
