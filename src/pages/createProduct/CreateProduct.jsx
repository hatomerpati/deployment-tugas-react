import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Checkbox,
    Upload, Row, Space, Col, Table, Popconfirm,
} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { React, useEffect, useState, } from 'react';
import { Article } from './constant';
import "./style.css";
import { useDeleteProduct, useGetProduct, usePostProduct, useUpdateProduct } from './hooks/useCreateProducts';
import { INITIAL_TABLE_DATA } from '../form/constant';
import { Link } from 'react-router-dom';

const CreateProduct = () => {
    const [isLoadingProduct, product, getProduct] = useGetProduct();
    const [isLoadingCreateProduct, createProduct] = usePostProduct();
    const [isLoadingDeleteProduct, deleteProduct] = useDeleteProduct();
    const [isLoadingUpdateProduct, updateProduct] = useUpdateProduct();
    const [formBio] = Form.useForm();
    const [rowData, setRowData] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const [isEnglish, setIsEnglish] = useState(false);
    const handleEnglish = () => {
        setIsEnglish(true);
    };
    const handleID = () => {
        setIsEnglish(false);
    };

    useEffect(() => { 
        alert("WELCOME TO FORM"); 
 }, [])

       
    const TABLE_COLUMNS = [
        {
            title: "UUID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Product Name",
            dataIndex: "productName",
            key: "productName",
        },
        {
            title: "Product Category",
            dataIndex: "productCategory",
            key: "productCategory",
        },
        {
            title: "Product Fresh",
            dataIndex: "productFresh",
            key: "productFresh",
        },
        {
            title: "Price",
            dataIndex: "productPrice",
            key: "productPrice",
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (_, record) =>
                INITIAL_TABLE_DATA.length >= 1 ? (
                    <Space>
                        
                        <a onClick={() => handleEdit(record)} >Edit</a>
                        <Popconfirm
                            title="Sure to delete?"
                            arrow={false}
                            onConfirm={() => onDelete(record.id)}
                        >
                            <a>Delete</a>
                        </Popconfirm>
                    </Space>
                ) : null,
        },
    ];

    const handleEdit = (rowData) => {
        console.log({ rowData });
        setRowData(rowData);
        setIsEdit(true);
    }
    const onAdd = (values) => {
        createProduct(values, () => {
            getProduct();
            formBio.resetFields;
        }

        );

    };

    const onEdit = (values) => {

        const id = rowData.id

        updateProduct(id, values, () => {
            getProduct();
            handleCancel();
        }

        )
    };

    const onDelete = (row_id) => {
      
        deleteProduct(row_id, () => {
            getProduct();
        })
    };

    const handleCancel = () => {
        setRowData();
        setIsEdit(false);
        formBio.resetFields();

    };
    useEffect(() => {
        getProduct();


    }, [])



    return (
        <div>
            <Row align="center">
                <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" style={{
                    width: "100px",
                }} />
            </Row>
            <Row align="center">
                <Space>
                    <a onClick={handleID}>ID</a>
                    <a onClick={handleEnglish}>en</a>
                </Space>
            </Row>
            {isEnglish ?
                <div>
                    <div className='title'>{Article.title.en}</div>
                    <div className='description'>{Article.description.en}</div>
                </div>
                :
                <Col align="center">
                    <Row align="center" className='title'>{Article.title.id}</Row>
                    <Row align="center" className='description'>{Article.description.id}</Row>
                </Col>
            };

            <Form
                onFinish={isEdit ? onEdit : onAdd}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="Vertical"
                form={formBio}
                fields={[
                    {
                        name: "productName",
                        value: rowData?.productName,
                    },
                    {
                        name: "productCategory",
                        value: rowData?.productCategory,
                    },
                    {
                        name: "productFresh",
                        value: rowData?.productFresh,
                    },
                    {
                        name: "productPrice",
                        value: rowData?.productPrice,
                    },
                ]}
            >

                <Form.Item


                    label="Product Name"
                    name="productName"
                    rules={[
                        {
                            required: true,
                            message: 'Please Insert this'
                        },
                        {

                        },

                    ]}

                >
                    <Input pattern='([A-Z][a-zA-Z]*)'/>
                </Form.Item>
                <br></br>
                <Form.Item label="Product Category" name="productCategory"  rules={[
                        {
                            required: true,
                            message: 'Please Insert this'
                        },
                        {

                        },

                    ]}>
                    <Select>
                        <Select.Option value="">...</Select.Option>
                        <Select.Option value="Product">Product</Select.Option>
                        <Select.Option value="Machine">Machine</Select.Option>
                        <Select.Option value="Vehicle">Vehicle</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Image of Product" valuePropName="fileList" >
                    <Upload action="/upload.do" listType="picture-card">
                        <div>

                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item label="Product Freshness" name="productFresh"  rules={[
                        {
                            required: true,
                            message: 'Please Insert this'
                        },
                        {

                        },

                    ]}>
                    <Radio.Group>
                        <Radio value="Brand New"> Brand new </Radio>
                        <Radio value="Second Hand"> Second Hand </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="additional Description">
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item label="Input" name="productPrice"  rules={[
                        {
                            required: true,
                            message: 'Please Insert this'
                        },
                        {

                        },

                    ]}>
                    <Input placeholder='$100' pattern='^[0-9]+$' />
                </Form.Item>


                {isEdit ? <Space>
                    <Button htmlType="submit" loading={isLoadingUpdateProduct}>Save</Button>
                    <Button onClick={handleCancel}> Cancel</Button>
                </Space> :

                    <Button htmlType="submit" type="primary" loading={isLoadingCreateProduct}>Submit</Button>

                }
            </Form>
            <h1>List Products</h1>
            <Table rowKey="id" columns={TABLE_COLUMNS} dataSource={product} loading={isLoadingProduct}></Table>
        </div>
    );
};

export default CreateProduct;

