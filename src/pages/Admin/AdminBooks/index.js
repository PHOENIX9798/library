import React from 'react';
import { Table, Space, Button, Input } from 'antd';
import { GetPicList, GetBookList } from '../../../api'
import { SearchOutlined } from '@ant-design/icons';
import './index.css';

const columns = [
  {
    title: '图片',
    dataIndex: 'img',
    key: 'img',
    render: (text, record) => (
      <Space size="middle">
        <img src={text} style={{width:"60px"}}/>
      </Space>
    ),
  },
  {
    title: '索书号',
    dataIndex: 'bookId',
    key: 'bookId'
  },
  {
    title: '图书名称',
    dataIndex: 'bookName',
    key: 'bookName',
  },
  {
    title: '图书作者',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: '简介',
    dataIndex: 'introduce',
    key: 'introduce',
    ellipsis: true
  },
  {
    title: '出版社',
    dataIndex: 'publish',
    key: 'publish',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ),
  },
];

class AdminBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    GetBookList(1, 10, '').then(res => {
      this.setState({ data: res.data.data })
    })
  }
  onSearch = value => console.log(value);

  render() {
    const { data } = this.state;
    return (
      <div className="admin-user">
        <Input.Search
          style={{ float: 'right', width: 400, marginBottom: '20px', marginLeft: '20px' }}
          placeholder="请输入"
          allowClear
          enterButton="查询"
          size="large"
          onSearch={this.onSearch}
          prefix={<SearchOutlined />}
        />
        <Button size="large" style={{ float: 'right' }}>新增</Button>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }

}
export default AdminBooks;