import React from 'react';
import { Table, Space, Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './index.css';

const AdminUser = () => {
  const onSearch = value => console.log(value);

  const columns = [
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '用户账号',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: '用户身份',
      dataIndex: 'identity',
      key: 'identity',
    },
    {
      title: '所属院系',
      dataIndex: 'address',
      key: 'address',
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
      name: 'John Brown',
      userId: 32,
      address: 'New York No. 1 Lake Park',
      identity: '你好',
    },
    {
      key: '2',
      name: 'John Brown',
      userId: 32,
      address: 'New York No. 1 Lake Park',
      identity: '你好',
    },
    {
      key: '3',
      name: 'John Brown',
      userId: 32,
      address: 'New York No. 1 Lake Park',
      identity: '你好',
    },
    {
      key: '4',
      name: 'John Brown',
      userId: 32,
      address: 'New York No. 1 Lake Park',
      identity: '你好',
    },
    {
      key: '5',
      name: 'John Brown',
      userId: 32,
      address: 'New York No. 1 Lake Park',
      identity: '你好',
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
export default AdminUser;