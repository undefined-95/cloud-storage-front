import React from 'react';
import styles from './Auth.module.scss';
import { Button, Form, Input, notification } from 'antd';

export const RegisterForm: React.FC = () => {
  return (
    <div className={styles.formBlock}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
      >
        <Form.Item
          label="E-Mail"
          name="email"
          rules={[
            {
              required: true,
              message: 'Укажите почту',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Полное имя"
          name="fullName"
          rules={[
            {
              required: true,
              message: 'Укажите полное имя',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: 'Укажите пароль',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Регистрация
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
