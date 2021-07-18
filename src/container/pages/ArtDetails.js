import React, { useEffect, useState } from 'react';
// import { get } from 'axios';
import { Main } from '../styled';
import { Row, Col } from 'antd';
import { Collapse } from 'antd';
import { ArtWorkStyleWrapper } from './style';
// import { BASE_API_URL } from '../../settings';

const ArtWork = () => {
  const { Panel } = Collapse;

  // const [data, SetData] = useState([]);

  // const SERVER_ENDPOINT = `${BASE_API_URL}/api/artimage?artworkId=123`;

  // const fetchImages = async () => {
  //   await get(SERVER_ENDPOINT).then(res => {
  //     if (res && res.hasOwnProperty('data')) {
  //       setImages(res.data);
  //     }
  //   });
  // };

  // useEffect(async () => {
  //   await fetchImages();
  // });

  const response = {
    description: {
      artName: 'Pablo Picasso',
      year: '1881-1973',
      details: 'Head of a women',
      signed: 'Signed Picasso',
      canvas: 'Oil on Canvas',
      dimensions: '14 X 15.75',
      catalogue: 'Catalogue Note',
      artDescription:
        'This exquisite portait was made in Barcelona, where Picasso lived from Januaru 1903 to march 1904 in the studio on Calle Riera de San Juan that he had shared three years before with his late friend Carles  Casagemas.',
    }
  };

  const leftButtons = {
    borderRadius: '20px',
    backgroundColor: '#BAA06A',
    width: '150px',
    fontSize: '18px',
    fontWeight: '600',
    height: '40px',
    margin: '10px 0',
  };

  const rightButtons = {
    borderRadius: '20px',
    backgroundColor: '#BAA06A',
    width: '250px',
    fontSize: '18px',
    fontWeight: '600',
    height: '40px',
    margin: '10px 0',
  };

  const panel = {
    border: '1px solid #CCCCCC', padding: '10px 20px', borderRadius: '2px'
  };

  const inputText = {
    color: '#BAA06A',
    fontSize: '18px',
    fontWeight: '600',
    display: 'block'
  };

  return (
    <Main>
      <ArtWorkStyleWrapper style={{ backgroundColor: 'white' }}>
        <div>
          <Row justify="center" gutter={70}>
            <Col lg={14} md={14} xs={14}>
              <Collapse
                defaultActiveKey={['1']}
                style={{
                  border: 'none',
                  padding: '20px',
                  backgroundColor: 'white'
                }}
              >
                <Panel header="Description" key="1">
                  <div style={panel}>
                    <div>
                      <div>{response.description.artName}</div>
                      <div>{response.description.year}</div>
                      <div>{response.description.details}</div>
                    </div>
                    <div>
                      <div>{response.description.signed}</div>
                      <div>{response.description.canvas}</div>
                      <div>{response.description.dimensions}</div>
                    </div>
                    <div>
                      <div>{response.description.catalogue}</div>
                      <div>{response.description.artDescription}</div>
                    </div>
                  </div>
                  <div style={{ marginLeft: '70%' }}>
                    <button style={leftButtons} type="button">
                      Publish
                    </button>
                  </div>
                </Panel>
                <Panel header="Condition Report" key="2">
                  <div style={panel}>
                    <div>
                      <div>{response.description.artName}</div>
                      <div>{response.description.year}</div>
                      <div>{response.description.details}</div>
                    </div>
                    <div>
                      <div>{response.description.signed}</div>
                      <div>{response.description.canvas}</div>
                      <div>{response.description.dimensions}</div>
                    </div>
                    <div>
                      <div>{response.description.catalogue}</div>
                      <div>{response.description.artDescription}</div>
                    </div>
                  </div>
                  <div style={{ marginLeft: '70%' }}>
                    <button style={leftButtons} type="button">
                      Publish
                    </button>
                  </div>
                </Panel>
                <Panel header="Provenance" key="3" />
                <Panel header="Exhibited" key="4" />
                <Panel header="Catalogue Note" key="5" />
              </Collapse>
            </Col>
            <Col lg={10} md={10} xs={10}>
              <div style={{ marginBottom: '10px' }}>
                <img
                  style={{ width: '250px', height: '250px', margin: '10px 0' }}
                  alt="mainImage"
                  src="https://foreignpolicy.com/wp-content/uploads/2014/10/450412342_multiple_pandas_getty_small.jpg"
                />

                <div style={{ margin: '10px 0' }}>
                  <span style={inputText}>Fair Market Value</span>
                  <input type="number" style={{ width: '250px', height: '35px' }} />
                </div>

                <div style={{ margin: '10px 0' }}>
                  <span style={inputText}>Auction Estimate</span>
                  <input type="number" style={{ width: '125px', height: '35px' }} />
                  &nbsp;&nbsp;
                  <input type="number" style={{ width: '125px', height: '35px' }} />
                  <div><span style={{ marginRight: '105px' }}>Low</span>
                  <span>High</span></div>
                </div>

                <button style={rightButtons} type="button">
                  Send Offer...
                </button>
                <br />
                <button style={rightButtons} type="button">
                  NSV
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </ArtWorkStyleWrapper>
    </Main>
  );
};

export default ArtWork;
