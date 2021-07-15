import React, { useState } from 'react';
import { Row, Col } from 'antd';
import FontAwesome from 'react-fontawesome';
import { post } from 'axios';
import { UsercardWrapper } from './style';
import { Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import OnStart from '../../components/OnStart';
import CapturePics from '../../components/capturePics/capturePics';
import Ownership from '../../components/ownership/ownership';
import Review from '../../components/reviewForm';
import { BASE_API_URL } from '../../settings';

const SERVER_ENDPOINT = `${BASE_API_URL}/api/artwork/`;
let formData = {
  artWorkInfo: {},
  takePictures: {},
  ownership: {},
};

const completedStages = {
  artWorkInfo: false,
  takePictures: false,
  ownership: false,
};

const Users = () => {
  const [showForm, setShowForm] = useState('');
  const [finalResponse, setFinalResponse] = useState(null);

  const loadNextSection = (prevSection = null) => {
    console.log('section', prevSection);
    formData[prevSection.name] = prevSection.data;
    completedStages[prevSection.name] = true;
    setShowForm('');
  };

  const shouldButtonDisable = () => {
    return !(completedStages.artWorkInfo && completedStages.takePictures && completedStages.ownership);
  };

  const submitApplication = $e => {
    if($e) {
      $e.preventDefault();
    }
    console.log('formData', formData);
    const payload = new FormData();
    payload.append('userId',JSON.parse(localStorage.getItem('user')).id);
    payload.append('artist_name', formData.artWorkInfo.values['Artist Name']);
    payload.append('art_title', formData.artWorkInfo.values['Artwork Title']);
    payload.append('work_type', formData.artWorkInfo.values['Work Type']);
    payload.append('media_type', formData.artWorkInfo.values['Media']);
    payload.append('support_type', formData.artWorkInfo.values['Support']);
    payload.append('art_width', formData.artWorkInfo.values['Dimensions'][0].value);
    payload.append('art_height', formData.artWorkInfo.values['Dimensions'][1].value);
    payload.append('measure_units', formData.artWorkInfo.values['Dimensions'][0].type);
    payload.append('purchase_price', formData.ownership.purchase_price);
    payload.append('loc_city', formData.ownership.city);
    payload.append('loc_state', formData.ownership.state);
    // payload.append(
    //   'file',
    //   formData.ownership.takePictures,
    //   // formData.ownership.takePictures.indexOf('base64') > -1
    //   //   ? converBase64toFileObj(formData.ownership.takePictures)
    //   //   : blobToFile(formData.ownership.takePictures),
    //   // localStorage.getItem('mainImage')
    // );
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    };
    post(SERVER_ENDPOINT, payload, config)
      .then(res => {
        console.log('res', res);
        // setFinalResponse(res);
        // localStorage.setItem('final', JSON.stringify(res));
        var obj = JSON.parse(res.data.analytics);
        console.log(obj);

        // console.log("Print Artist");
        localStorage.setItem(
          'final',
          JSON.stringify({
            name: obj.Artist.TopResult.value,
            Confidence: (obj.Artist.TopResult.confidence * 100).toFixed(2),
          }),
        );
      })
      .catch(err => setFinalResponse(err));
  };

  const reviewApplication = () => {
    console.log('formData', formData.takePictures.artworkId);
    setShowForm('review');
  }

  const reviewActionTriggers = (type, data) => {
    formData = data;
    (type === 'close') ? setShowForm('') : submitApplication();
  }


  const start_btn = {
    height: '30%',
    width: '65%',
    padding: '5px',
    backgroundColor: '#00FF87',
    fontWeight: 'bolder',
    fontSize: '20px',
    color: '#0B1A23',
    borderRadius: '50px'
  };

  return (
    <div style={{ backgroundColor: '#0B1A23', minHeight: '600px' }}>
      {/* Main Page */}
      {!showForm && (
        <Main>
          <UsercardWrapper>
            <Row gutter={25} style={{ maxWidth: '300px', margin: 'auto' }}>
              <Row style={{ maxWidth: '300px', marginBottom: '30px' }}>
                <div xs={24} className="d-flex justify-content-center" style={{ margin: 'auto' }} key="index">
                  <Col style={{ margin: 'auto' }}>
                    <FontAwesome
                      name="keyboard-o"
                      size="3x"
                      style={{ padding: '10px', color: '#BAA06A', minWidth: '75px' }}
                    />
                  </Col>
                  <Col>
                    <h4 style={{ color: '#BAA06A', fontSize: '24px', fontWeight: 'bolder', margin: '0' }}>
                      Step 1:
                      {completedStages.artWorkInfo === true && (
                        <span style={{ color: '#00FF87', paddingLeft: '10px' }}>Complete</span>
                      )}
                    </h4>
                    <div style={{ color: '#9598A5', fontSize: '24px' }}>
                      {completedStages.artWorkInfo !== true ? 'Enter Artwork info' : 'Artwork Info'}
                    </div>
                  </Col>
                </div>
              </Row>
              <Row style={{ maxWidth: '300px', marginBottom: '30px', height: '30%', width: '100%', marginLeft: '23%' }}>
                {completedStages.artWorkInfo === false &&
                  completedStages.takePictures === false &&
                  completedStages.ownership === false && (
                    <Button
                      onClick={() => setShowForm('artWorkInfo')}
                      className="start_btn"
                      type="button"
                      style={start_btn}
                    >
                      START
                    </Button>
                  )}
              </Row>
              <Row style={{ maxWidth: '300px', marginBottom: '30px' }}>
                <div xs={24} className="d-flex justify-content-center" style={{ margin: 'auto' }} key="index">
                  <Col style={{ margin: 'auto' }}>
                    <FontAwesome
                      name="camera"
                      size="3x"
                      style={{ padding: '10px', color: '#BAA06A', minWidth: '75px' }}
                    />
                  </Col>
                  <Col>
                    <h4 style={{ color: '#BAA06A', fontSize: '24px', fontWeight: 'bolder', margin: '0' }}>
                      Step 2:
                      {completedStages.takePictures === true && (
                        <span style={{ color: '#00FF87', paddingLeft: '10px' }}>Complete</span>
                      )}
                    </h4>
                    <div style={{ color: '#9598A5', fontSize: '24px' }}>
                      {completedStages.takePictures !== true ? 'Take Pictures' : 'Take Pictures'}
                    </div>
                  </Col>
                </div>
              </Row>
              <Row style={{ maxWidth: '300px', marginBottom: '30px', height: '30%', width: '100%', marginLeft: '23%' }}>
                {completedStages.artWorkInfo === true &&
                  completedStages.takePictures === false &&
                  completedStages.ownership === false && (
                    <Button
                      onClick={() => setShowForm('takePictures')}
                      className="start_btn"
                      type="button"
                      style={start_btn}
                    >
                      START
                    </Button>
                  )}
              </Row>
              <Row style={{ maxWidth: '300px', marginBottom: '30px' }}>
                <div xs={24} className="d-flex justify-content-center" style={{ margin: 'auto' }} key="index">
                  <Col style={{ margin: 'auto' }}>
                    <FontAwesome name="tag" size="3x" style={{ padding: '10px', color: '#BAA06A', minWidth: '75px' }} />
                  </Col>
                  <Col>
                    <h4 style={{ color: '#BAA06A', fontSize: '24px', fontWeight: 'bold', margin: '0' }}>
                      Step 3:
                      {completedStages.ownership === true && (
                        <span style={{ color: '#00FF87', paddingLeft: '10px' }}>Complete</span>
                      )}
                    </h4>
                    <div style={{ color: '#9598A5', fontSize: '24px' }}>Ownership and History</div>
                  </Col>
                </div>
              </Row>
              <Row style={{ maxWidth: '300px', marginBottom: '30px', height: '30%', width: '100%', marginLeft: '23%' }}>
                {completedStages.artWorkInfo === true &&
                  completedStages.takePictures === true &&
                  completedStages.ownership === false && (
                    <Button
                      onClick={() => setShowForm('ownership')}
                      className="start_btn"
                      type="button"
                      style={start_btn}
                    >
                      START
                    </Button>
                  )}
              </Row>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <Button
                  className="rvw_btn"
                  type="button"
                  // disabled={shouldButtonDisable()}
                  onClick={() => reviewApplication()}
                  style={{ height: '50px', width: '130px', alignSelf: 'center', margin: '10px', borderRadius: '50px', backgroundColor: '#BAA06A', fontSize: '20px', fontWeight: 'bolder', color: '#0B1A23' }}
                >
                  Review
                </Button>
                <Button
                  className="sbmt_btn"
                  type="button"
                  disabled={shouldButtonDisable()}
                  onClick={$e => submitApplication($e)}
                  style={{ height: '50px', width: '130px', margin: '10px', borderRadius: '50px', backgroundColor: '#00FF87', fontSize: '20px', fontWeight: 'bolder', color: '#0B1A23' }}
                >
                  Submit
                </Button>
                {finalResponse && <p>`Server Response: ${JSON.stringify(finalResponse.data)}`</p>}
              </div>
            </Row>
          </UsercardWrapper>
        </Main>
      )}
      {/* Art Work Info Page */}
      {showForm === 'artWorkInfo' && <OnStart loadNextSection={response => loadNextSection(response)} />}
      {/* Capture pics Page */}
      {showForm === 'takePictures' && (
        <CapturePics formData={formData} loadNextSection={response => loadNextSection(response)} />
      )}
      {/* Ownership Page */}
      {showForm === 'ownership' && (
        <Ownership formData={formData} loadNextSection={response => loadNextSection(response)} />
      )}
      {showForm === 'review' && (
        <Review formData={formData} reviewActionTriggers={(type, data) => reviewActionTriggers(type, data)} />
      )}
    </div>
  );
};

export default Users;
