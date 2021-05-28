import { Form, Input, Button, Checkbox, Card } from "antd";
import {
  UserOutlined,
  LockOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import s from "./PostForm.module.css";
import ProfileImage from "../../../assets/img/profile-img.png";

export type PostFormType = {
  postTitle: string;
};

export const PostForm = () => {
  const onFinish = (values: PostFormType) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className={s.post_card}>
      <div className={s.post_card_title}>
        <span>Создать пост</span>
        <hr />
      </div>
      <div className={s.post_card_img}>
        <img src={ProfileImage} alt="" />
      </div>
      <div className={s.post_card_input}>
        <input type="text" placeholder="Введите текст для вашего поста" />
      </div>
      <div className={s.post_card_btn}>
        <Button
          type="primary"
          style={{
            width: "90%",
            height: "40px",
            fontSize: "18px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Добавить
        </Button>
      </div>
    </div>

    // <Card title="Создать пост" bordered={false} style={{ width: '100%' }}>
    //   <Form
    //     name="normal_login"
    //     className={s.post_form}
    //     initialValues={{ remember: true }}
    //     layout="inline"
    //     onFinish={onFinish}
    //     size="large"
    //   >
    //     <Form.Item name="postTitle" rules={[{ required: true }]}>
    //     <img src={ProfileImage} style={{width: '64px', height: 'auto'}} alt="" />
    //       <Input
    //         placeholder="Введите текст поста"
    //         className={s.post_form_input}
    //       />

    //     </Form.Item>
    //     <Form.Item>
    //       <Button
    //         type="primary"
    //         htmlType="submit"
    //         className="login-form-button"
    //       >
    //         Добавить
    //       </Button>
    //     </Form.Item>
    //   </Form>
    // </Card>
  );
};
