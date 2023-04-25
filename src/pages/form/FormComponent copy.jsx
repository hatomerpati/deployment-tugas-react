import React from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Modal,
  Table,
  Space,
  Popconfirm
} from "antd";
import { useState, onFinish } from "react";
import TextArea from "antd/es/input/TextArea";
import { INITIAL_TABLE_DATA } from "./constant";
import { useGetBiodatas } from "./Hooks/useBiodatas";



const FormCRUD = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [data,setData] = useState(INITIAL_TABLE_DATA);
  const [key, setKey] = useState(INITIAL_TABLE_DATA.length + 1);
  const [formBio] = Form.useForm();
  const [rowData, setRowData] =useState();
  const [isEdit, setIsEdit] = useState(false);
  
  
  const TABLE_COLUMNS = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "NIM",
      dataIndex: "nim",
      key: "nim",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
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
              onConfirm={() => onDelete(record.key)}
            >
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];
  const handleEdit = (rowData) => {
    console.log({rowData});
    setRowData(rowData);
    setIsEdit(true);
  }
  const  onAdd = (values) => {
    const newData = {
      key: key,
      ...values
    }
    setData([...data,newData])
    setKey(key + 1)

};

  const  onEdit = (values) => {
    console.log(values);
    const key = rowData?.key
    const newData= [...data]
    const index = data?.findIndex((item) => key === item.key)

    newData?.splice(index, 1, {
      key: key,
      ...values,
    });

    setData(newData);
    setIsEdit(false);
    setRowData();
    formBio.resetFields();
  }

const onDelete = (row_key) => {
  const newData = data.filter((item) => item.key !== row_key);
  setData(newData);
};

const handleCancel = () => {
  setRowData();
  setIsEdit(false);
  formBio.resetFields();

};

console.log({data});
 

  
  return (
    
    <>

    
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onFinish={isEdit ? onEdit : onAdd}
        size={componentSize}
        style={{
          maxWidth: 700,
        }}
        form={formBio}
        fields={[
          {
            name: "firstName",
            value: rowData?.firstName,
          },
          {
            name: "lastName",
            value: rowData?.lastName,
          },
          {
            name: "nim",
            value: rowData?.nim,
          },
          {
            name: "address",
            value: rowData?.address,
          },
        ]}
        

      >
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
        <Form.Item label="Last Name"
        name="lastName">
          <Input />
        </Form.Item>
        <Form.Item label="Nim"
        name="nim">
          <Input />
        </Form.Item>
        <Form.Item label="Allamat"
        name="address"
        >
          <TextArea />
        </Form.Item>
       {isEdit ?  <Space>
          <Button htmlType="submit">Save</Button>
          <Button onClick={handleCancel}> Cancel</Button>
        </Space> :
        
        <Button htmlType="submit" type="primary">Submit</Button>
        
        }
      
          
        
       
       
      </Form>
      <Table columns={TABLE_COLUMNS} dataSource={data}></Table>
    </>
  );
};

export default FormCRUD;
