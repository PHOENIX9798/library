import React from 'react';
import { Carousel, Input, Row, Col, Radio, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Banner from '../../components/Banner'
import './index.css';

const Home = () => {
  const [value, setValue] = React.useState(1);
  const img1 = 'http://lxs.ecnu.edu.cn/templates/zh/default/images/schollphoto/zb/zb7.jpg';
  const img2 = 'http://lxs.ecnu.edu.cn/templates/zh/default/images/schollphoto/zb/zb15.jpg';
  const img3 = 'http://lxs.ecnu.edu.cn/templates/zh/default/images/schollphoto/b3.jpg';
  const img4 = 'http://lxs.ecnu.edu.cn/templates/zh/default/images/schollphoto/b10.jpg';

  const contentStyle = {
    height: '300px',
    width: '100%',
    overflow: 'hidden'
  };

  const onSearch = value => console.log(value);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="home">
      <Banner/>
      <Row>
        <Col span={12}>
          <div className="home-searchBox">
            <div className="home-searchBox__title">资源检索</div>
            <Input.Search
              placeholder="请输入模糊检索字段"
              allowClear
              enterButton="检索"
              size="large"
              onSearch={onSearch}
              prefix={<SearchOutlined />}
            />
            <br /><br />
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>全部资源</Radio>
              <Radio value={2}>小说资源</Radio>
              <Radio value={3}>什么资源</Radio>
            </Radio.Group>
            <br /><br />
            <div className="home-contents">注：通过资源检索找到对应借阅书目</div>
          </div>
        </Col>
        <Col span={12}>
          <div className="home-carousel">
            <Carousel autoplay>
              <div><img style={contentStyle} src={img1} alt='' /></div>
              <div><img style={contentStyle} src={img2} alt='' /></div>
              <div><img style={contentStyle} src={img3} alt='' /></div>
              <div><img style={contentStyle} src={img4} alt='' /></div>
            </Carousel>
          </div>
        </Col>
      </Row>
      <div className="home-newBooks">
        <div className="home-newBooks-title">新书速览</div>
        <div className="home-newBooks-box">

          <div className="home-newBooks-item">
            <img src='http://www.lib.ecnu.edu.cn/_upload/article/images/ff/85/6620697649db94e4a792a575004d/fc82c0c9-bf05-4c46-90fb-00a25d2187b8_s.jpg' alt="" />
            <div>书的名字叫什么</div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Home;