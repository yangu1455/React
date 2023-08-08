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
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">스터디 규칙</a>
            </li>
            <li>
              <a href="#">멤버 소개</a>
            </li>
            <li>
              <a href="#">달력</a>
            </li>
            <li>
              <a href="#">To-do</a>
            </li>
          </ul>
        </div>
        <ul className="social-icons">
          <li>
            <a href="https://www.notion.so/29542faab67d4c769f2076c76e04d261">
              <SiNotion/>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter/>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter/>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter/>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}


