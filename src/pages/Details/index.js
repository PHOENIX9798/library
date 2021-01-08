import React from 'react';
import { Carousel, Input, Row, Col, Radio, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Banner from '../../components/Banner'
import './index.css';

const Details = () => {

  return (
    <div className="home">
      <Banner />
      <div className="details-background">
        <Row>
          <Col span={6}>
            <img src='http://www.lib.ecnu.edu.cn/_upload/article/images/ff/85/6620697649db94e4a792a575004d/fc82c0c9-bf05-4c46-90fb-00a25d2187b8_s.jpg' alt='' />
          </Col>
          <Col span={18}>
            <div>索书号：xxxxxxx</div>
            <div>书名：xxxxxxx</div>
            <div>作者：xxxxxxx</div>
            <div>简介：简简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</div>
            <div>出版社：xxxxxxx</div>
            <div>库存：xxxxxxx</div>
          </Col>
        </Row>
        <Button>借阅</Button>
        <Button>收藏</Button>
      </div>

    </div>
  );
}
export default Details;