import React from 'react';
import { Button, Input, Pagination, Form, Space, Select } from 'antd';
import { SearchOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { GetBookList } from '../../api';
import Banner from '../../components/Banner';
import './index.css';

const { Option } = Select;

const condition = [{ label: '与', value: 'and' }, { label: '或', value: 'or' }];
const category = [{ label: '任意字段', value: 'arbitrary' }, { label: '题名', value: 'theme' }, { label: '作者', value: 'author' }];

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      page: 1,
      limit: 10,
      total: 0,
      searchValue: ''
    };
  };

  componentDidMount() {
    const { page, limit, searchValue } = this.state;
    if (typeof this.props.location?.query !== 'undefined') {
      this.setState({
        searchValue: this.props.location?.query.searchValue,
      });
    }
    GetBookList(page, limit, searchValue).then(res => {
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

  // onFinish = values => {
  //   console.log('Received values of form:', values);
  // };

  onSearch = value => {
    const { page, limit } = this.state;
    GetBookList(page, limit, value).then(res => {
      const { page, limit, total, data } = res.data;
      if (res.code === 0) {
        this.setState({
          page,
          limit,
          total,
          bookList: data,
        })
      }
    });
  }

  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  }

  toDetail=(item)=> {
    this.props.history.push({ pathname: `/details/${item.id}`, query: item });
  }

  Mohu = () => {
    const { searchValue } = this.state;
    return (
      <Input.Search
        placeholder="请输入模糊检索字段"
        allowClear
        enterButton="检索"
        size="large"
        defaultValue={searchValue}
        onSearch={this.onSearch}
        prefix={<SearchOutlined />}
      />
    )
  }

  // Gaoji = () => {
  //   return (
  //     <Form name="dynamic_form_nest_item" onFinish={this.onFinish} autoComplete="off">
  //       <Form.List name="users">
  //         {(fields, { add, remove }) => (
  //           <>
  //             {fields.map(field => (
  //               <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
  //                 <Form.Item
  //                   {...field}
  //                   name={[field.name, 'first']}
  //                   fieldKey={[field.fieldKey, 'first']}
  //                   rules={[{ required: true, message: 'Missing first name' }]}
  //                 >
  //                   <Select style={{ width: 100 }} size="large" defaultValue="and">
  //                     {condition.map(item => (
  //                       <Option key={item.value} value={item.value}>
  //                         {item.label}
  //                       </Option>
  //                     ))}
  //                   </Select>
  //                 </Form.Item>

  //                 <Form.Item
  //                   {...field}
  //                   name={[field.name, 'first']}
  //                   fieldKey={[field.fieldKey, 'first']}
  //                   rules={[{ required: true, message: 'Missing first name' }]}
  //                 >
  //                   <Select style={{ width: 150 }} size="large" defaultValue="arbitrary">
  //                     {category.map(item => (
  //                       <Option key={item.value} value={item.value}>
  //                         {item.label}
  //                       </Option>
  //                     ))}
  //                   </Select>
  //                 </Form.Item>

  //                 <Form.Item
  //                   {...field}
  //                   name={[field.name, 'last']}
  //                   fieldKey={[field.fieldKey, 'last']}
  //                   rules={[{ required: true, message: 'Missing last name' }]}
  //                 >
  //                   <Input placeholder="输入查询" style={{ width: 600 }} size="large" />
  //                 </Form.Item>
  //                 <MinusCircleOutlined onClick={() => remove(field.name)} />
  //               </Space>
  //             ))}
  //             <Form.Item>
  //               <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} size="large">
  //                 添加新行
  //             </Button>
  //             </Form.Item>
  //           </>
  //         )}
  //       </Form.List>
  //       <Form.Item>
  //         <Button type="primary" htmlType="submit" size="large">
  //           查询
  //       </Button>
  //       </Form.Item>
  //     </Form>
  //   )
  // }

  render() {
    const { page, bookList, total } = this.state;
    return (
      <div className="home">
        <Banner />
        <div className="search-background">
          {this.Mohu()}
          {/* <Gaoji /> */}
          {/* <br /><br />
        <Button size="large">切换高级检索</Button> */}
        </div>

        <div className="search-result-box">
          {
            bookList.map(item => {
              const { img, bookName, author, publish, introduce, id } = item;
              return (
                <div className="search-result" key={id} onClick={()=>this.toDetail(item)}>
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
          onShowSizeChange={this.onShowSizeChange}
          defaultCurrent={page}
          total={total}
        />
      </div>
    );
  }
}
