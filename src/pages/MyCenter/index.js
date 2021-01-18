import React from 'react';
import { Button, Affix } from 'antd';
import { GetMyBooks } from '../../api';
import Banner from '../../components/Banner'
import './index.css';

export default class MyCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myBooksList: []
    }
  }
  componentDidMount() {
    GetMyBooks(window.localStorage.userId).then(res => {
      if (res.data.code === 0) {
        this.setState({
          myBooksList: res.data.data,
        })
      }
    })
  };

  toDetail = (item) => {
    this.props.history.push({ pathname: `/details/${item.id}`, query: { item, operation: 'back' } });
  }

  toAdmin = () => {
    this.props.history.push('/admin');
  }

  render() {
    const { myBooksList } = this.state;
    return (
      <div className="home">
        <Banner />
        <h2>我借到的书</h2>
        <div className="search-result-box">
          {
            myBooksList.length > 0 && myBooksList.map(item => {
              return (
                <div className="search-result" key={item.bookId} onClick={() => this.toDetail(item)}>
                  <img src={item.img} alt='' />
                  <div className="search-result-item">
                    <div>题名：{item.bookName}</div>
                    <div>作者：{item.author}</div>
                    <div>出版社：{item.publish}</div>
                    <div>简介：{item.introduce}</div>
                  </div>
                </div>)
            })
          }
        </div>
        <br /><br />
        <Affix offsetTop="top">
          <Button type="dashed" onClick={this.toAdmin} ghost>
            管理
        </Button>
        </Affix>
      </div>
    );
  }
}
