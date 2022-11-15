import { Collapse } from 'antd';
import React from 'react';
const { Panel } = Collapse;

const CollapseComponent = ({ResBasico, ResAlternativo, ResExcecao, ResGeral}) => {
  const onChange = (key) => {
    console.log(key);
  };
  
  var textBasico = `
  O Resultado do Fluxo Básico aparecerá aqui após a requisição ser executada.
  `;
  var textAlternativo = `
  O Resultado do Fluxo Alternativo aparecerá aqui após a requisição ser executada.
  `;
  var textExcecao = `
  O Resultado do Fluxo de Exceção aparecerá aqui após a requisição ser executada.
  `;
  var textGeral = `
  O Resultado do Fluxo Geral aparecerá aqui após a requisição ser executada.
  `;
 
  if(JSON.stringify(ResBasico.data, null, 2) !== undefined){
    textBasico = JSON.stringify(ResBasico.data, null, 2)
  }

  if(JSON.stringify(ResAlternativo.data, null, 2) !== undefined){
    textAlternativo = JSON.stringify(ResAlternativo.data, null, 2)
  }

  if(JSON.stringify(ResExcecao.data, null, 2) !== undefined){
    textExcecao = JSON.stringify(ResExcecao.data, null, 2)
  }

  if(JSON.stringify(ResGeral.data, null, 2) !== undefined){
    textGeral = JSON.stringify(ResGeral.data, null, 2)
  }

  return (
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="Resultado do Fluxo de Basico" key="1">
        <pre>{textBasico}</pre>
      </Panel>
      <Panel header="Resultado do Fluxo Alternativo" key="2">
        <pre>{textAlternativo}</pre>
      </Panel>
      <Panel header="Resultado do Fluxo de Exceção" key="3">
        <pre>{textExcecao}</pre>
      </Panel>
      <Panel header="Resultado do Fluxo Geral" key="4">
        <pre>{textGeral}</pre>
      </Panel>
    </Collapse>
  );
};

export default CollapseComponent
;