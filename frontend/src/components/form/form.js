import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import { useState } from 'react';
import { CreateCaseBasico } from '../../service/CaseBasico';
import { CreateCaseAlternativo } from '../../service/CaseAlternativo';
import { CreateCaseExcecao } from '../../service/CaseExcecao';
import { CreateCaseTodos } from '../../service/CaseTodos';
/* import DraggerBox from '../draggerbox/draggerbox'; */

const {TextArea} = Input;
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

  const [selectedOption, setSelectedOption] = useState('');
  const HandleChange = (e) => {
    setSelectedOption(e)
    console.log(e)
  }

  const onFinish = async (values) => {
    var request = JSON.parse(JSON.stringify(values));
    const usecase= JSON.parse(request['Caso de Uso'])
    if(selectedOption === "Basico"){
      /* const resultBasico =  */await CreateCaseBasico(usecase)
    }
    else if(selectedOption === "Alternativo"){
      /* const resultAlternativo =  */await CreateCaseAlternativo(usecase)
    }
    else if(selectedOption === "Excecao"){
      /* const resultExcecao =  */await CreateCaseExcecao(usecase)
    }
    else if(selectedOption === "Geral"){
      /* const resultGeral =  */await CreateCaseTodos(usecase)
    }
    
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
        {/* <DraggerBox/> */}
        <TextArea
        placeholder="Insira o Caso de uso"
        autoSize={{
          minRows: 2,
          maxRows: 8,
        }} 
        />
        
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
          onChange= {(e) =>{HandleChange(e)}}
          allowClear
          style={{
            display:'flex',
          }}
        > 
          <Option value="Geral"  >Todos</Option>
          <Option value="Basico" >Basico</Option>
          <Option value="Alternativo" >Alternativo</Option>
          <Option value="Excecao" >Excecao</Option>
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