import React from 'react';
import { Button, Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  loginOut = () => {
    localStorage.clear();
  }
  render() {
    return (
      <div className="banner">
        <Link to='/'><span className="banner-title">高级编程课程图书借阅系统</span></Link>
        {
          window.localStorage.userId ?
            <Dropdown overlay={<Menu>
              <Menu.Item>
              <Link to='/admin'>管理中心</Link>
                  
              </Menu.Item>
              <Menu.Item>
                <a onClick={this.loginOut} href={"/"}>
                  注销
              </a>
              </Menu.Item>
            </Menu>}>
              <Link to='/my-center'>
                <span className="banner-userName">欢迎，{window.localStorage.userId}</span>
              </Link>
            </Dropdown>

            : <Button className="banner-userName"><Link to='/login'>登录</Link></Button>
        }
      </div>
    )
  }
}

