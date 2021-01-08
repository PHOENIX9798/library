import React from 'react';
import { Button, Input, Row, Col, Pagination, Form, Space, Select } from 'antd';
import { SearchOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Banner from '../../components/Banner'
import './index.css';

const { Option } = Select;

const areas = [
  { label: 'Beijing', value: 'Beijing' },
  { label: 'Shanghai', value: 'Shanghai' },
];

const condition = [{ label: '与', value: 'and' }, { label: '或', value: 'or' }];
const category = [{ label: '任意字段', value: 'arbitrary' }, { label: '题名', value: 'theme' }, { label: '作者', value: 'author' }];

const Details = () => {
  const [value, setValue] = React.useState(1);

  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  const onSearch = value => console.log(value);

  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  }

  const Mohu = () => {
    return (
      <Input.Search
        placeholder="请输入模糊检索字段"
        allowClear
        enterButton="检索"
        size="large"
        onSearch={onSearch}
        prefix={<SearchOutlined />}
      />
    )
  }

  const Gaoji = () => {
    return (
      <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(field => (
                <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...field}
                    name={[field.name, 'first']}
                    fieldKey={[field.fieldKey, 'first']}
                    rules={[{ required: true, message: 'Missing first name' }]}
                  >
                    <Select style={{ width: 100 }} size="large" defaultValue="and">
                      {condition.map(item => (
                        <Option key={item.value} value={item.value}>
                          {item.label}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    {...field}
                    name={[field.name, 'first']}
                    fieldKey={[field.fieldKey, 'first']}
                    rules={[{ required: true, message: 'Missing first name' }]}
                  >
                    <Select style={{ width: 150 }} size="large" defaultValue="arbitrary">
                      {category.map(item => (
                        <Option key={item.value} value={item.value}>
                          {item.label}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    {...field}
                    name={[field.name, 'last']}
                    fieldKey={[field.fieldKey, 'last']}
                    rules={[{ required: true, message: 'Missing last name' }]}
                  >
                    <Input placeholder="输入查询" style={{ width: 600 }} size="large" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} size="large">
                  添加新行
              </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            查询
        </Button>
        </Form.Item>
      </Form>
    )
  }

  return (
    <div className="home">
      <Banner />
      <div className="search-background">
        {/* <Mohu /> */}
        <Gaoji />
        <br /><br />
        <Button size="large">切换高级检索</Button>
      </div>

      <div className="search-result-box">
        <div className="search-result">
          <img src='http://www.lib.ecnu.edu.cn/_upload/article/images/ff/85/6620697649db94e4a792a575004d/fc82c0c9-bf05-4c46-90fb-00a25d2187b8_s.jpg' alt='' />
          <div className="search-result-item">
            <div>题名:</div>
            <div>作者:</div>
            <div>出版社:</div>
            <div>简介:简介简介简介简介简介简介简介简介简介简介简简介简介简介简介简简介简介简介简介简介简介简介</div>
          </div>
        </div>

        <div className="search-result">
          <img src='http://www.lib.ecnu.edu.cn/_upload/article/images/ff/85/6620697649db94e4a792a575004d/fc82c0c9-bf05-4c46-90fb-00a25d2187b8_s.jpg' alt='' />
          <div className="search-result-item">
            <div>题名:</div>
            <div>作者:</div>
            <div>出版社:</div>
            <div>简介:简介简介简介简介简介简介简介简介简介简介简简介简介简介简介简简介简介简介简介简介简介简介</div>
          </div>
        </div>

        <div className="search-result">
          <img src='http://www.lib.ecnu.edu.cn/_upload/article/images/ff/85/6620697649db94e4a792a575004d/fc82c0c9-bf05-4c46-90fb-00a25d2187b8_s.jpg' alt='' />
          <div className="search-result-item">
            <div>题名:</div>
            <div>作者:</div>
            <div>出版社:</div>
            <div>简介:简介简介简介简介简介简介简介简介简介简介简简介简介简介简介简简介简介简介简介简介简介简介</div>
          </div>
        </div>

      </div>
      <br /><br />
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
      />
    </div>
  );
}
export default Details;