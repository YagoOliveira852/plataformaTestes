import { Button, Form, Input, Select } from 'antd';
import React, { useContext } from 'react';
import MyContext from '../../context/myContext';
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

const FormComponent = (/* {FluxoBasico, FluxoAlternativo, FluxoExcecao, FluxoGeral} */) => {
  const [form] = Form.useForm();
  const [ResBasico, setResBasico, ResAlternativo, setResAlternativo, ResExcecao, setResExcecao, ResGeral, setResGeral] = useContext(MyContext)
  const [selectedOption, setSelectedOption] = useState('');

  const HandleChange = (e) => {
    setSelectedOption(e)
    console.log(e)
  }

  // function RouteFunction(){
  //   window.location.href = "http://localhost:3000/casetest"
  // }

  const onFinish = async (values) => {
    var request = JSON.parse(JSON.stringify(values));
    const usecase= JSON.parse(request['Caso de Uso'])
    if(selectedOption === "Basico"){
      await CreateCaseBasico(usecase).then(res =>{
        // FluxoBasico(res)
        setResBasico(res)
        console.log(ResBasico.data)
      })
    }
    else if(selectedOption === "Alternativo"){
      await CreateCaseAlternativo(usecase).then(res =>{
        // FluxoAlternativo(res)
        setResAlternativo(res)
        console.log(ResAlternativo.data[0])
      })
    }
    else if(selectedOption === "Excecao"){
      await CreateCaseExcecao(usecase).then(res =>{
        // FluxoExcecao(res)
        setResExcecao(res)
        console.log(ResExcecao.data)
      })
    }
    else if(selectedOption === "Geral"){
      await CreateCaseTodos(usecase).then(res =>{
        // FluxoGeral(res)
        setResGeral(res)
        console.log(ResGeral)
      })
    }
    
  };

  const onReset = () => {
    form.resetFields();
  };


  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{
      width: 800,
      display: 'table-column-group',
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight:'200px'}}>
      <div>
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
      </div>
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
        <Button type="primary" htmlType="submit"
        style={{
          width:'150px',
          height:'50px'
        }}>
          Submeter
        </Button>
        <Button htmlType="button" onClick={onReset}
        style={{
          width:'150px',
          height:'50px'
        }}>
          Resetar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;