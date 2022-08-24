import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import { CreateCaseBasico } from '../../service/CaseBasico';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const FormComponent = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    await CreateCaseBasico(values)
    console.log(values)
  };

  const onReset = () => {
    form.resetFields();
  };


  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="Caso de Uso"
        label="Caso de Uso"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input style={{
          display:'flex',
          flexDirection:'column',
        }}/>
      </Form.Item>
      <Form.Item
        name="Fluxo"
        label="Fluxo"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Selecione o Fluxo do Caso de Uso"
          allowClear
        > 
          <Option value="Geral" id={1}>Todos</Option>
          <Option value="Basico" id={2}>Basico</Option>
          <Option value="Alternativo" id={3}>Alternativo</Option>
          <Option value="Excecao"id={4}>Excecao</Option>
        </Select>
      </Form.Item>
    
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submeter
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Resetar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;