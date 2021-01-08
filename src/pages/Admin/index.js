import React from 'react';
import { Tabs, Input, Row, Col, Radio } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import Banner from '../../components/Banner'
import AdminBooks from './AdminBooks'
import AdminPic from './AdminPic'
import AdminUser from './AdminUser'
import './index.css';

const Details = () => {
  const { TabPane } = Tabs;

  return (
    <div className="admin">
      <Banner />
      <div className="admin-box">
        <Tabs type="card">
          <TabPane tab="用户管理" key="1">
            <AdminUser />
          </TabPane>
          <TabPane tab="图书管理" key="2">
            <AdminBooks />
          </TabPane>
          <TabPane tab="轮播图" key="3">
            <AdminPic />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
export default Details;