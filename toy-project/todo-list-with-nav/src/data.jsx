import React from 'react'
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiNotion } from "react-icons/si";

export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: '/study-rules',
    text: '스터디규칙',
  },
  {
    id: 3,
    url: '/member',
    text: '멤버소개',
  },
  {
    id: 4,
    url: '/calender',
    text: '달력',
  },
  {
    id: 5,
    url: '/todolist',
    text: 'To-do',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.notion.so/29542faab67d4c769f2076c76e04d261',
    icon: <SiNotion />,
  },
  {
    id: 2,
    url: 'https://twitter.com/OfficialMonstaX',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
]