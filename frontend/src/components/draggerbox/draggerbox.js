import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React from 'react';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

  onChange(info) {
    const { status } = info.file;

    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const DraggerBox = () => (
  <Dragger {...props} maxCount={1}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Clique ou arraste um arquivo para essa área para realiza o upload</p>
    <p className="ant-upload-hint">
      Somente um upload por vez
    </p>
  </Dragger>
);

export default DraggerBox;