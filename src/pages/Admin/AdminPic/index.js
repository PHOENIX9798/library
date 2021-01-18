import React from 'react';
import { Table, Space, Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { GetPicList } from '../../../api'
import './index.css';

const columns = [
  {
    title: '图片',
    dataIndex: 'url',
    key: 'url',
    render: (text) => (
      <Space size="middle">
        <img src={text} style={{ width: "60px" }} />
      </Space>
    ),
  },
  {
    title: '链接',
    dataIndex: 'url',
    key: 'img',
    render: (text) => (
      <div>
        {text}
      </div>
    ),
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

export default class AdminPic extends React.Component {
  onSearch = value => console.log(value);
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    GetPicList().then(res => {
      this.setState({ data: res.data.data })
    })
  }

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
