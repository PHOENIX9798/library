import React from 'react';
import { Input, Pagination } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { GetBookList } from '../../api';
import Banner from '../../components/Banner';
import './index.css';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      page: 1,
      limit: 10,
      total: 0
    };
  };

  componentDidMount() {
    let search = '';
    if (typeof this.props.location?.query !== 'undefined') {
      search = this.props.location?.query.searchValue;
    };
    const { page, limit } = this.state;
    GetBookList(page, limit, search).then(res => {
      const { page, limit, total, data } = res.data;
      if (res.data.code === 0) {
        this.setState({
          page,
          limit,
          total,
          bookList: data,
        })
      }
    });
  }


  onSearch = value => {
    const { page, limit } = this.state;
    GetBookList(page, limit, value).then(res => {
      const { page, limit, total, data } = res.data;
      this.setState({
        page,
        limit,
        total,
        bookList: data,
      })
    });
  }

  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
    GetBookList(current, pageSize, '').then(res => {
      const { page, limit, total, data } = res.data;
      this.setState({
        page,
        limit,
        total,
        bookList: data,
      })
    });
  }

  toDetail = (item) => {
    this.props.history.push({ pathname: `/details/${item.id}`, query: {item,operation:'take'} });
  }

  Mohu = () => {
    return (
      <Input.Search
        placeholder="请输入模糊检索字段"
        allowClear
        enterButton="检索"
        size="large"
        defaultValue={typeof this.props.location?.query !== "undefined" ? this.props.location?.query.searchValue : ''}
        onSearch={this.onSearch}
        prefix={<SearchOutlined />}
      />
    )
  }

  render() {
    const { page, bookList, total } = this.state;
    return (
      <div className="home">
        <Banner />
        <div className="search-background">
          {this.Mohu()}
        </div>

        <div className="search-result-box">
          {
            bookList.map(item => {
              const { img, bookName, author, publish, introduce, id } = item;
              return (
                <div className="search-result" key={id} onClick={() => this.toDetail(item)}>
                  <img src={img} alt='' />
                  <div className="search-result-item">
                    <div>题  名：{bookName}</div>
                    <div>作  者：{author}</div>
                    <div>出版社：{publish}</div>
                    <div>简  介：{introduce}</div>
                  </div>
                </div>
              );
            })
          }
        </div>
        <br /><br />
        <Pagination
          showSizeChanger
          onChange={this.onShowSizeChange}
          defaultCurrent={page}
          total={total}
        />
      </div>
    );
  }
}
