import React, { useState } from 'react';
import { Modal, Button, Tabs } from 'antd';
import Login from "./Login";


const Home = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

    return (
    <>
    <Button type="primary" onClick={showModal}>Log In</Button>
    <h1>Webflow Homepage</h1>

    <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}><Login> </Login></Modal> 
    </> 
);
}

export default Home;
