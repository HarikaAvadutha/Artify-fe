import React, { Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import Submission from '../../components/dashboard/submission';
import InProgress from '../../components/dashboard/inProgress';
import Offers from '../../components/dashboard/offers';

export default function Dashboard() {

  const card = {
    backgroundColor: '#40434A',
    minHeight: '800px',
    borderRadius: '3px',
    margin: '0 2px',
    fontColor: 'white'
  }
  return (
    <Main>
      <Row justify="center" gutter={25}>
        <Col xxl={8} md={8} xs={24}>
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
        <Col xxl={8} md={8} xs={24}>
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
        <Col xxl={8} md={8} xs={24}>
          <Suspense
            fallback={
              <Cards headless>
                <Skeleton active />
              </Cards>
            }
          >
            <div style={card}>
              <Offers />
            </div>
          </Suspense>
        </Col>
      </Row>
    </Main>

  )
}
