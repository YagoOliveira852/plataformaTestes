import { Collapse } from 'antd';
import React from 'react';
const { Panel } = Collapse;
const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit commodo tempus. Nulla cursus, libero ut condimentum consequat, augue purus rhoncus augue, et tristique nibh ligula eget lacus. Aliquam laoreet condimentum varius. Maecenas dolor nisl, laoreet et ante ut, varius hendrerit nulla. Integer posuere nibh at neque pretium tempor nec ut turpis. Nam mattis velit ac ullamcorper pharetra. Ut sit amet lectus egestas, sollicitudin lorem quis, fermentum turpis. Pellentesque in purus nisl. Pellentesque egestas eros et elit efficitur tristique. Mauris vestibulum, justo quis euismod placerat, leo ante laoreet enim, posuere pulvinar mauris diam id dui.
`;

const CollapseComponent
 = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};

export default CollapseComponent
;