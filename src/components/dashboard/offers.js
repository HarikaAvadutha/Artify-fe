import React from 'react';
import { Row, Col } from 'antd';
import FontAwesome from 'react-fontawesome';
import { TemplateStyles as TemplateOff } from './style';

export default function Offers() {

    const offers = [
        {
            name: 'Roger Massey',
            status: 'Consigned',
            daysToSale: 120,
            year: 2021
        },
        {
            name: 'Roger Massey',
            status: 'Sold Privately',
            daysToSale: 10,
            year: 2021
        },
        {
            name: 'Roger Massey',
            status: null,
            daysToSale: null,
            year: 2021
        },
        {
            name: 'Roger Massey',
            status: 'Lost',
            daysToSale: 120,
            year: 2021
        },
        {
            name: 'Roger Massey',
            status: 'Consigned',
            daysToSale: 120,
            year: 2020
        },
        {
            name: 'Roger Massey',
            status: 'Sold',
            daysToSale: 10,
            year: 2020
        },
        {
            name: 'Roger Massey',
            status: null,
            daysToSale: null,
            year: 2020
        },
        {
            name: 'Roger Massey',
            status: 'Lost',
            daysToSale: 120,
            year: 2020
        }
    ];

    return (
        <TemplateOff>
            <div className="header">
                <label>Offers</label>
            </div>
            <Row className="tableHeader">
                <Col lg={10} md={10} xs={10}>Seller</Col>
                <Col lg={6} md={6} xs={6}>Status</Col>
                <Col lg={8} md={8} xs={8} style={{ textAlign: 'right' }}>Days to Sale</Col>
            </Row>
            <div className="borderLine"></div>
            {
                offers.map(item => {
                    return (
                        <Row className="tableItems">
                            <Col lg={10} md={10} xs={10}>{item.name}</Col>
                            <Col lg={2} md={2} xs={2} >
                                {item.status === 'Consigned' && <FontAwesome name="tag" style={{ color: '#00FF87' }} />}
                                {item.status === 'Sold Privately' && <FontAwesome name="dollar" style={{ color: '#00FF87' }} />}
                                {item.status === 'Sold' && <FontAwesome name="gavel" style={{ color: '#00FF87' }} />}
                                {item.status === 'Lost' && <FontAwesome name="thumbs-down" style={{ color: '#FFB928' }} />}
                                {!item.status && <FontAwesome name="question-circle" style={{ color: '#9598A5' }} />}
                            </Col>
                            <Col lg={8} md={8} xs={8} style={{color: !item.status || item.status === 'Lost' ? '#9598A5' : '#00FF87'}}>
                                {item.status ? item.status : 'Inc'}
                            </Col>
                            <Col lg={4} md={4} xs={4} style={{ textAlign: 'right' }}>{item.daysToSale ? item.daysToSale : '-'}</Col>
                        </Row>
                    )
                })
            }
        </TemplateOff>
    )
};
