import React from 'react';
import { Button, Card, Carousel, Col, Row } from 'antd';
import { Space, Swiper } from 'antd-mobile';
import { Swiper_Data } from './constanst';
import "./styles.css"
import { LeftSquareTwoTone, RightSquareTwoTone } from '@ant-design/icons';


const SwiperName = (props) => {
    const { id } = props;


  const filteredData = id ? Swiper_Data.filter(item => item.id === id) : Swiper_Data;

    const items = filteredData.map((item, index) => (
        <Swiper.Item key={index}>
            <Card 
            className='carding'
                
                bordered={false}
                style={{
                    width: 300,
                  
                }}
            >
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                
            </Card>
        </Swiper.Item>
    ))

    const item2 = filteredData.map((item, index) => (
            <Card
            key={index}
                title={item.title}
                bordered={false}
                bodyStyle={{
                    color: "blue"
                }}
              
            >
                <p>{item.desc}</p>
                
            </Card>
    ))
    return (
        <div>
            <Row className='row'>
                <Col>
            
                </Col>
                <Col className='Col-main'>
                <h3 className='title1'>Our MileStone</h3>
                    <Swiper
                        trackOffset={10}
                        slideSize={40}
                        style={{
                            '--border-radius': '8px',
                        }}
                        defaultIndex={0}
                        stuckAtBoundary="true"
                    >
                        {items}
                    </Swiper>
                    <Space className='icon-size'>  <LeftSquareTwoTone />
                    <RightSquareTwoTone /></Space>
                  
                </Col>
            </Row>
            
            
                       
        </div>
    );
}

export default SwiperName;
