import React from "react";
import { Form, Card, Button, Input, message } from "antd";
import { ToLogin, SignIn } from '../../api'
import Banner from '../../components/Banner';
import "./index.css";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }
  // 提交表单且数据验证成功后回调事件
  onFinish = (values) => {
    ToLogin(values).then(res => {
      console.log(res)
      if (res.data.userData.id) {
        window.localStorage.userId = res.data.userData.userId;
        message.success('登录成功');
        this.props.history.push('/');
      } else {
        message.error(res.data.userData.msg);
      }
    })
  };
  // 提交表单且数据验证失败后回调事件
  onFinishFailed = () => {
    message.error('登录失败');
  };

  toggleLogin = () => {
    this.setState({
      isLogin: !this.state.isLogin,
    })
  };

  login = () => {

  }

  render() {
    const { isLogin } = this.state;
    return (
      <div className="home">
        <Banner />
        <div className="login-box">
          <Card
            title="登陆页面"
            extra={<Button href="#" style={{ display: isLogin ? "none" : "block" }} onClick={this.toggleLogin}>返回登录</Button>}
          >
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                label="账号"
                name="userId"
                rules={[
                  {
                    required: true,
                    message: "请输入账号",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "请输入密码",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              {
                !isLogin && (
                  <Form.Item
                    label="确认密码"
                    name="checkPassword"
                    rules={[
                      {
                        required: true,
                        message: "请确认密码",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                )
              }
              <Button type="primary" htmlType="submit" onClick={this.login}>
                登陆
              </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="primary" htmlType="submit" onClick={this.toggleLogin}>
                注册
              </Button>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
};

