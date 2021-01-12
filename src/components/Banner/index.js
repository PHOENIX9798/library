import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <Link to='/'><span className="banner-title">高级编程课程图书借阅系统</span></Link>
        <Link to='/my-center'><span className="banner-userName">欢迎，xxx</span></Link>
      </div>
    )
  }
}

