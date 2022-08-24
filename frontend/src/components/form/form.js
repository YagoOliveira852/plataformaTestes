import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import { CreateUseCase } from '../../service/UseCaseService';
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
    await CreateUseCase(values)
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
        <Input/>
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
          <Option value="Geral">Todos</Option>
          <Option value="Basico">Basico</Option>
          <Option value="Alternativo">Alternativo</Option>
          <Option value="Excecao">Excecao</Option>
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