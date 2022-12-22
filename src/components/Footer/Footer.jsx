import React from 'react'
import './Footer.css';


export default function Footer()  {
  return <div className="Footer">
    <h5>
      &copy; {new Date().getFullYear()}
      <span> Modern Touches </span>
    </h5>
    <h5 id="footer">   All Rights Reserved </h5>
  </div>
}



