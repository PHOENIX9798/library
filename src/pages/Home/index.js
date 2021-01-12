import React from 'react';
import { Carousel, Input, Row, Col, Radio, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { GetPicList, GetBookList } from '../../api'
import Banner from '../../components/Banner';
import './index.css';

const contentStyle = {
  height: '300px',
  width: '100%',
  overflow: 'hidden'
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: [],
      bookList: [],
    };
  }

  componentDidMount() {
    GetPicList().then(res => {
      this.setState({
        pic: res.data.data,
      })
    });
    GetBookList(1, 10).then(res => {
      this.setState({
        bookList: res.data.data.slice(-5),
      })
    });
  };

  onSearch = value => {
    this.props.history.push({ pathname: '/search', query: { searchValue: value } });
  };

  render() {
    const { pic, bookList } = this.state;
    return (
      <div className="home">
        <Banner />
        <Row>
          <Col span={12}>
            <div className="home-searchBox">
              <div className="home-searchBox__title">资源检索</div>
              <Input.Search
                placeholder="请输入模糊检索字段"
                allowClear
                enterButton="检索"
                size="large"
                onSearch={this.onSearch}
                prefix={<SearchOutlined />}
              />
              <br /><br />
              <Radio.Group value={1}>
                <Radio value={1}>全部资源</Radio>
              </Radio.Group>
              <br /><br />
              <div className="home-contents">注：通过资源检索找到对应借阅书目</div>
            </div>
          </Col>
          <Col span={12}>
            <div className="home-carousel">
              {
                pic.length > 0 &&
                <Carousel autoplay>
                  {
                    pic.map(item => {
                      return <div key={item.id}><img style={contentStyle} src={item.url} alt='' /></div>
                    })
                  }
                </Carousel>
              }
            </div>
          </Col>
        </Row>
        <div className="home-newBooks">
          <div className="home-newBooks-title">新书速览</div>
          <div className="home-newBooks-box">
            {
              bookList.length > 0 && bookList.map(item => {
                return (
                  <div className="home-newBooks-item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div>{item.bookName}</div>
                  </div>)
              })
            }
          </div>
        </div>
      </div>
    )
  };
}
export default Home;