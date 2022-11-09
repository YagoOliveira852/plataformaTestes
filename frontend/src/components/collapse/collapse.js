import { Collapse } from 'antd';
import React from 'react';
import { useContext } from 'react';
import MyContext from '../../context/myContext';
const { Panel } = Collapse;
const text = `
O Resultado aparecerá aqui após a requisição ser executada.
`;

const CollapseComponent
 = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const [ResBasico, ResAlternativo, ResExcecao, ResGeral] = useContext(MyContext)
  console.log(typeof(ResBasico.data))
  console.log(typeof(JSON.stringify(ResAlternativo.data)))
  return (
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="Resultado do Fluxo de Basico" key="1">
        <p>{JSON.stringify(ResBasico.data)}</p>
      </Panel>
      <Panel header="Resultado do Fluxo de Alternativo" key="2">
        <p>{JSON.stringify(ResAlternativo.data[0])}</p>
      </Panel>
      <Panel header="Resultado do Fluxo de Execeção" key="3">
        <p>{JSON.stringify(ResExcecao.data)}</p>
      </Panel>
      <Panel header="Resultado do Fluxo Geral" key="4">
        <p>{JSON.stringify(ResGeral.data)}</p>
      </Panel>
    </Collapse>
  );
};

export default CollapseComponent
;