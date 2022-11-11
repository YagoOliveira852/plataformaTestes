import { Collapse } from 'antd';
import React from 'react';
const { Panel } = Collapse;
const text = `
O Resultado aparecerá aqui após a requisição ser executada.
`;

const CollapseComponent = ({ResBasico, ResAlternativo, ResExcecao, ResGeral}) => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="Resultado do Fluxo de Basico" key="1">
        <pre>{JSON.stringify(ResBasico.data)}</pre>
      </Panel>
      <Panel header="Resultado do Fluxo de Alternativo" key="2">
        <pre>{JSON.stringify(ResAlternativo.data)}</pre>
      </Panel>
      <Panel header="Resultado do Fluxo de Execeção" key="3">
        <pre>{JSON.stringify(ResExcecao.data)}</pre>
      </Panel>
      <Panel header="Resultado do Fluxo Geral" key="4">
        <pre>{JSON.stringify(ResGeral.data)}</pre>
      </Panel>
    </Collapse>
  );
};

export default CollapseComponent
;