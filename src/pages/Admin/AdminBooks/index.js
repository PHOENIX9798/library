import React from 'react';
import { Table, Space, Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './index.css';

const AdminBooks = () => {
  const onSearch = value => console.log(value);

  const columns = [
    {
      title: '缩略图',
      dataIndex: 'pic',
      key: 'pic',
    },
    {
      title: '图书编号',
      dataIndex: 'bookId',
      key: 'bookId',
      render: text => <a>{text}</a>,
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
    },
    {
      title: '出版社',
      dataIndex: 'published',
      key: 'published',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      pic: 'John Brown',
      bookId: 32,
      bookName: 'New York No. 1 Lake Park',
      author: 'New York No. 1 Lake Park',
      introduce: '你好',
      published: 'nijhao'
    },
  ];
  return (
    <div className="admin-user">
      <Input.Search
        style={{ float: 'right', width: 400, marginBottom: '20px', marginLeft: '20px' }}
        placeholder="请输入"
        allowClear
        enterButton="查询"
        size="large"
        onSearch={onSearch}
        prefix={<SearchOutlined />}
      />
      <Button size="large" style={{ float: 'right' }}>新增</Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
export default AdminBooks;