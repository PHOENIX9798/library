import React from 'react';
import { Row, Col, Button } from 'antd';
import Banner from '../../components/Banner'
import './index.css';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookInfo: {},
    };
  };

  componentDidMount() {
    if (typeof this.props.location?.query !== 'undefined') {
      this.setState({
        bookInfo: this.props.location?.query,
      });
    }
  }

  render() {
    const { bookId, author, img, introduce, publish, bookName, num } = this.state.bookInfo;
    return (
      <div className="home">
        <Banner />
        <div className="details-background">
          <Row>
            <Col span={6}>
              <img src={img} alt='' />
            </Col>
            <Col span={18}>
              <div>索书号：{bookId}</div>
              <div>书名：{bookName}</div>
              <div>作者：{author}</div>
              <div>简介：{introduce}</div>
              <div>出版社：{publish}</div>
              <div>库存：{num}</div>
            </Col>
          </Row>
          <Button>借阅</Button>
        </div>
      </div>
    );
  }
}
