import React, { Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import LeftTab from '../../components/identification';


export default function Identification() {

  const card = {
    backgroundColor: '#40434A',
    minHeight: '800px',
    borderRadius: '3px',
    fontColor: 'white',
    padding: '10px'
  }

  return (
    <Main>
      <Row justify="center">
        <Col lg={16} md={16} xs={16}>
          <Suspense
            fallback={
              <Cards headless>
                <Skeleton active />
              </Cards>
            }
          >
            <img
              style={{ width: '100%', height: '100%' }}
              alt="mainImage"
              src="https://foreignpolicy.com/wp-content/uploads/2014/10/450412342_multiple_pandas_getty_small.jpg"
            />
          </Suspense>
        </Col>
        <Col lg={8} md={8} xs={8}>
          <Suspense
            fallback={
              <Cards headless>
                <Skeleton active />
              </Cards>
            }
          >
            <div style={card}>
              <LeftTab />
            </div>
          </Suspense>
        </Col>
      </Row>
    </Main>

  )
}
