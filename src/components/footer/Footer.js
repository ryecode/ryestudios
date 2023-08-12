import React from 'react'
import './Footer.styles.css';

export const Footer = () => {
  return (
    <div>
        <footer id="footer">
  <div class="copyright">
    <img src="https://ryecode.github.io/portfolio/ImageBank/RYELogoV2.png"
         width="10%"
         alt='Footer Logo' />  
      <span className='rye2023'>© RYAN CORRAL 2023</span> 
  </div>	
    <div class="attribute"> 
    Some background and images from
    {' '}
        <a href="http://www.pngtree.com" 
        target="_blank" rel="noopener noreferrer">pngtree.com</a>
        {' '}&{' '}
        <a href="https://www.vecteezy.com/" 
        target="_blank" rel="noopener noreferrer">vecteezy.com</a>    
    </div>


</footer>
    </div>
  )
}
