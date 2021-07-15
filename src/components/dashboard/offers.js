import React from 'react';
import { Row, Col } from 'antd';
import { TemplateStyles as TemplateOff } from './style';

export default function Offers() {

    const offers = [
        {
            name: 'Roger Massey',
            status: 'consigned',
            daysToSale: 120,
            year: 2021
        },
        {
            name: 'Roger Massey',
            status: 'sold',
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
            status: 'lost',
            daysToSale: 120,
            year: 2021
        },
        {
            name: 'Roger Massey',
            status: 'consigned',
            daysToSale: 120,
            year: 2020
        },
        {
            name: 'Roger Massey',
            status: 'sold',
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
            status: 'lost',
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
                            <Col lg={6} md={6} xs={6}>{item.status? item.status : 'Inc'}</Col>
                            <Col lg={8} md={8} xs={8} style={{ textAlign: 'right' }}>{item.daysToSale? item.daysToSale : '-'}</Col>
                        </Row>
                    )
                })
            }
        </TemplateOff>
    )
};
