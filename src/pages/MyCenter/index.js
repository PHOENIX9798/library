import React from 'react';
import { Button, Input, Row, Col, Pagination, Form, Space, Select } from 'antd';
import Banner from '../../components/Banner'
import './index.css';

const MyCenter = () => {
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  }

  return (
    <div className="home">
      <Banner />
      <h2>我借到的书</h2>
      <div className="search-result-box">
        <div className="search-result">
          <img src='http://www.lib.ecnu.edu.cn/_upload/article/images/ff/85/6620697649db94e4a792a575004d/fc82c0c9-bf05-4c46-90fb-00a25d2187b8_s.jpg' alt='' />
          <div className="search-result-item">
            <div>题名:</div>
            <div>作者:</div>
            <div>出版社:</div>
            <div>简介:简介简介简介简介简介简介简介简介简介简介简简介简介简介简介简简介简介简介简介简介简介简介</div>
          </div>
        </div>

        <div className="search-result">
          <img src='http://www.lib.ecnu.edu.cn/_upload/article/images/ff/85/6620697649db94e4a792a575004d/fc82c0c9-bf05-4c46-90fb-00a25d2187b8_s.jpg' alt='' />
          <div className="search-result-item">
            <div>题名:</div>
            <div>作者:</div>
            <div>出版社:</div>
            <div>简介:简介简介简介简介简介简介简介简介简介简介简简介简介简介简介简简介简介简介简介简介简介简介</div>
          </div>
        </div>

        <div className="search-result">
          <img src='http://www.lib.ecnu.edu.cn/_upload/article/images/ff/85/6620697649db94e4a792a575004d/fc82c0c9-bf05-4c46-90fb-00a25d2187b8_s.jpg' alt='' />
          <div className="search-result-item">
            <div>题名:</div>
            <div>作者:</div>
            <div>出版社:</div>
            <div>简介:简介简介简介简介简介简介简介简介简介简介简简介简介简介简介简简介简介简介简介简介简介简介</div>
          </div>
        </div>

      </div>
      <br /><br />
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
      />
    </div>
  );
}
export default MyCenter;