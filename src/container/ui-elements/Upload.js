import React, { useState } from 'react';
import { Row, Col, Upload } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { UploadOutlined } from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

/*
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = file => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};
*/

const Uploads = () => {
  const [state, setState] = useState({
    fileList: [],
    loading: false,
    defaultFilelist: [],
  });


  const handleChange = info => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-2);
    fileList = fileList.map(file => {
      if (file.response) {
        // eslint-disable-next-line no-param-reassign
        file.url = file.response.url;
      }
      return file;
    });
    setState({ ...state, fileList });
  };

  return (
    <>
      <PageHeader
        ghost
        title="Upload Images"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={15}>
          <Col sm={12} xs={24}>
            <Cards title="Select Art Images">
              <Upload
                props={{
                  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
                  onChange: handleChange,
                  multiple: true,
                }}
                fileList={state.fileList}
              >
                <Button className="btn-outlined" size="large" type="light" outlined>
                  <UploadOutlined /> Upload
                </Button>
              </Upload>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Uploads;
