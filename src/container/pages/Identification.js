import React, { Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import Submission from '../../components/dashboard/submission';
import InProgress from '../../components/dashboard/inProgress';

export default function Identification() {

  const card = {
    backgroundColor: '#40434A',
    minHeight: '800px',
    borderRadius: '3px',
    fontColor: 'white'
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
            <div style={card}>
              <Submission />
            </div>
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
              <InProgress />
            </div>
          </Suspense>
        </Col>
      </Row>
    </Main>

  )
}
