import React from 'react';
import { Table, Space, Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './index.css';

const AdminPic = () => {
  const onSearch = value => console.log(value);

  const columns = [
    {
      title: '图片',
      dataIndex: 'pic',
      key: 'pic',
      render: text => <a>{text}</a>,
    },
    {
      title: '链接',
      dataIndex: 'src',
      key: 'src',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      pic: 'John Brown',
      src: 32
    },
    {
      key: '2',
      pic: 'John Brown',
      src: 32
    }
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
export default AdminPic;
