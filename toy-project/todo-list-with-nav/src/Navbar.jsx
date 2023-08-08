import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { links, social } from "./data";
// import logo from './logo'

export default function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <button className='nav-toggle'>
            <FaBars/>
          </button>
        </div>
        <div className="links-container show-container">
          <ul className="links">
            {links.map((link) => {
              const { id, url, text, content } = link;
              return (
                <li key={id}>
                  <a href={url}>
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}


