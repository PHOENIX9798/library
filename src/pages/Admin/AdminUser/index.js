import React from 'react';
import { Table, Space, Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { GetUserList } from '../../../api'
import './index.css';
const columns = [
  {
    title: '用户账号',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: '所属学校',
    dataIndex: 'address',
    key: 'address',
    render: () => (
      <div>华东师范大学</div>
    )
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>删除</a>
      </Space>
    ),
  },
];
export default class AdminUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    GetUserList().then(res => {
      this.setState({ data: res.data.data })
    })
  }

  onSearch = value => console.log(value);


  render() {
    const { data } = this.state;
    return (
      <div className="admin-user" >
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
