import { Col, Row, Form, Input, Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';
import "./hato.css"
import "../../assets/images/Screenshot.png"
import { InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';


const Code = () => {


    const [componentSize, setComponentSize] = useState("default");
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const onAdd = (values) => {
        const firstName = values.firstName;
        const lastName = values.lastName;
        const email = values.email;
        const help = values.help;
        
        alert(firstName + "\n" + lastName + "\n" + email + "\n" + help)

    };
    const { formBio } = Form.useForm();
    return (
        <div>
            <Row className='hatoBackground'>
                <Col flex={2}></Col>
                <Col flex={3}>
                    <h1 >Hatomerpati</h1>
                    <p>Your Daily whimsical sarcastic wota, Follow me to hear my rambling about How Cute My oshi Is</p>
                    <br />
                    <Button>Get in touch</Button>
                </Col>
                <Col flex={5}>

                </Col>

            </Row>


            <Row >
                <Col flex={1}></Col>
                <Col className='background' flex={7}>
                    <h3> About Us</h3>
                    <img src='https://p.potaufeu.asahi.com/be04-p/picture/20206006/c9e6e97a1e3f0f1f386c9b35880560e3.jpg' />
                    <br></br>
                    <p >Hatomerpati merupakan seorang wota yang sedang mempelajari desain biasanya bersemayam di Namizaka
                        Oshinya merupakan Yakubo mio dan Kuromi haruka, <br />walau tidak jarang dia menyukai osi oshi temannya yang lain,  tapi tidak ada yang dia benci
                        saat ini sedang belajar bahasa jepang juga dan juga sedang belajar
                        Sebagaimana saya jelaskan di atas bahwa untuk menyiapkan masa depan, baik untuk diri saya sendiri ataupun lingkungan, ada 2 hal yang ingin saya raih, yaitu:
                        <br /><br></br>1.	Peningkatan kapasitas sebagai communication designer; dan
                        <br /><br></br>2.	Penyiapan diri untuk dunia global, termasuk industry terkaitnya<br /><br />
                        Untuk meraih salah satu di atas, maka saya harus menjalaninya dengan serius, tanpa diganggu oleh aktifitas lain seperti bekerja sambilan.
                        Saya melihat bahwa LPDP memiliki tujuan untuk mendukung warganegaranya dari sisi pendanaan yang cukup, sehingga siswa dapat benar-benar fokus dalam menjalani study. Saya sangat yakin bahwa ini sejalan dengan apa yang saya rencanakan dalam menyiapkan masa depan bagi diri saya dan lingkungan terkait.
                        Kesesuaian antara tujuan LPDP dengan rencana yang Saya susun, semakin meyakinkan bahwa Saya berada di jalur yang tepat.

                    </p>
                </Col>
                <Col flex={1}></Col>
            </Row>
            <Row align="center">
                <Col flex={1}></Col>
                <Col flex={2}>
                    <div className='hato'>
                        Contact us
                    </div>
                    <br />
                    <div>
                        Need to get in touch with us? Either fill out the Form <br />
                        with your incquiry or find the Departement email you'dlike to contact
                    </div>
                </Col>
                <Col flex={5}>
                    <Form
                        labelCol={{
                            span: 12,
                        }}
                        wrapperCol={{
                            span: 20,
                        }}


                        layout="vertical"
                        onFinish={onAdd}
                        style={{
                            maxWidth: 500,
                        }}
                        form={formBio}
                        size={componentSize}
                        initialValues={{
                            size: componentSize,
                        }}



                    >
                        <Row>
                            <Col>
                                <Form.Item
                                    label="First Name"
                                    name="firstName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please Insert this'
                                        },
                                        {

                                        }
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item label="Last Name"
                                    name="lastName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please Insert this'
                                        },
                                        {

                                        }
                                    ]}>
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>


                        <Form.Item label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Insert this'
                                },
                                {

                                }
                            ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="What Can We Help You with?"
                            name="help"
                        >
                            <TextArea />
                        </Form.Item>



                        <Button type='primary' htmlType="submit" >Submit</Button>







                    </Form>
                </Col>
            </Row>

            <Row className='footer' >
                <Col flex={4}>
                    <h1>Hatomerpati</h1>
                    <p>Hatomerpati Merupakan Sebuah website yang<br /> dinamakan dari Username pemiliknya Hatomerpati</p>
                </Col>
                <Col flex={4}>
                    <h2>Media Social</h2>
                    <br />
                    
                        <a href="https://www.linkedin.com/in/ziqomumtaz/"><LinkedinOutlined className='icon'/></a>
                        <a href="https://instagram.com/hatomerpati"><InstagramOutlined className='icon'/></a>
                        <a href="https://twitter.com/Kamenziqo1"><TwitterOutlined className='icon'/></a>
                   
                </Col>

                <Col flex={4}>
                    <h2>Address</h2>
                    <br />
                    <p>Komplek padmae Regency B12A, Kota Bandung</p>
                </Col>

            </Row>

        </div>
    );
}

export default Code;
