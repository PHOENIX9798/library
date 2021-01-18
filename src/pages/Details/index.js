import React from 'react';
import { Row, Col, Button, message } from 'antd';
import { TakeBook, BackBook } from '../../api'
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
    console.log(this.props.location?.query);
    if (typeof this.props.location?.query !== 'undefined') {
      this.setState({
        bookInfo: this.props.location?.query.item,
      });
    }
  }
  takeBook = (bookId) => {
    const { userId } = window.localStorage;
    if (!userId) {
      message.error("请先登录");
    } else {
      TakeBook({ bookId, userId }).then(res => {
        if (res.data.code === 0) {
          if(res.data.msg){
            message.error(res.data.msg);
            return;
          }
          message.success("借书成功，请到个人中心查看哦");
        }
      })
    }
  }

  backBook = (bookId) => {
    const { userId } = window.localStorage;
    if (!userId) {
      message.error("请先登录");
    } else {
      BackBook({ bookId, userId }).then(res => {
        if (res.data.code === 0) {
          if(res.data.msg){
            message.error(res.data.msg);
            return;
          }
          message.success("还书成功");
        }
      })
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
              {
                this.props.location?.query.operation === 'take' ?
                  <div><Button onClick={() => this.takeBook(bookId)}>借阅</Button></div>
                  :
                  <div><Button onClick={() => this.backBook(bookId)}>归还</Button></div>
              }
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
        </div>
      </div>
    );
  }
}
