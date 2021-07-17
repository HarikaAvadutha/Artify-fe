import React from 'react';
import { Row, Col } from 'antd';
import FontAwesome from 'react-fontawesome';
import { TemplateStyles as TemplatePro } from './style';

export default function InProgress() {

    const inProgress = [
        {
            name: 'Roger Massey',
            submitted: '03/01/2021',
            artist: 'Picasso',
            priority: 'High',
            status: 'inProgress',
            amount: null,
            daysToRespond: null
        },
        {
            name: 'Roger Massey',
            submitted: '03/01/2021',
            artist: 'Picasso',
            priority: 'High',
            status: 'offered',
            amount: 5000,
            daysToRespond: 5
        },
        {
            name: 'Roger Massey',
            submitted: '03/01/2021',
            artist: 'Picasso',
            priority: 'Medium',
            status: 'offered',
            amount: 5000,
            daysToRespond: 5
        },
        {
            name: 'Roger Massey',
            submitted: '03/01/2021',
            artist: 'Picasso',
            priority: 'Medium',
            status: 'offered',
            amount: 5000,
            daysToRespond: 5
        },
        {
            name: 'Roger Massey',
            submitted: '03/01/2021',
            artist: 'Picasso',
            priority: 'Low',
            status: 'NSV',
            amount: null,
            daysToRespond: 30
        },
        {
            name: 'Roger Massey',
            submitted: '03/01/2021',
            artist: 'Picasso',
            priority: 'Low',
            status: 'NSV',
            amount: null,
            daysToRespond: 30
        },
        {
            name: 'Roger Massey',
            submitted: '04/01/2021',
            artist: 'Picasso',
            priority: 'High',
            status: 'inProgress',
            amount: null,
            daysToRespond: null
        },
        {
            name: 'Roger Massey',
            submitted: '04/01/2021',
            artist: 'Picasso',
            priority: 'High',
            status: 'inProgress',
            amount: null,
            daysToRespond: null
        },
        {
            name: 'Roger Massey',
            submitted: '04/01/2021',
            artist: 'Picasso',
            priority: 'Medium',
            status: 'Offered',
            amount: 5000,
            daysToRespond: 5
        },
        {
            name: 'Roger Massey',
            submitted: '04/01/2021',
            artist: 'Picasso',
            priority: 'Medium',
            status: 'Offered',
            amount: 5000,
            daysToRespond: 5
        },
        {
            name: 'Roger Massey',
            submitted: '04/01/2021',
            artist: 'Picasso',
            priority: 'Low',
            status: 'NSV',
            amount: null,
            daysToRespond: 30
        },
        {
            name: 'Roger Massey',
            submitted: '04/01/2021',
            artist: 'Picasso',
            priority: 'Low',
            status: 'NSV',
            amount: null,
            daysToRespond: 30
        }
    ];

    return (
        <TemplatePro>
            <div className="header">
                <label>In Progress</label>
            </div>
            <Row className="tableHeader">
                <Col lg={5} md={5} xs={5}>Seller</Col>
                <Col lg={6} md={6} xs={6}>Artist Name</Col>
                <Col lg={6} md={6} xs={6} style={{ textAlign: 'center' }}>Status</Col>
                <Col lg={7} md={7} xs={7}>Days to Respond</Col>
            </Row>
            <div className="borderLine"></div>
            {
                inProgress.map(item => {
                    return (
                        <Row className="tableItems">
                            <Col lg={5} md={5} xs={5}>{item.name}</Col>
                            <Col lg={6} md={6} xs={6}>{item.artist}</Col>
                            <Col lg={5} md={5} xs={5} style={{ textAlign: 'right' }} className={`${item.status === 'NSV' ? 'colorYellow' : ''} ${item.status === 'inProgress' ? 'colorGreen' : ''}`}>{item.status}</Col>
                            <Col lg={2} md={2} xs={2} justify="center">
                                {item.status === 'NSV' && <FontAwesome name="minus-circle" className="colorYellow" />}
                                {item.status === 'inProgress' && <FontAwesome name="recycle" className="colorGreen" />}
                                {item.status === 'Offered' && <FontAwesome name="arrow-right" className="colorGreen" />}
                            </Col>
                            <Col lg={4} md={4} xs={4}>{(item.status !== 'NSV') ? (item.amount ? item.amount : 'Inc') : '-'}</Col>
                            <Col lg={2} md={2} xs={2} style={{ textAlign: 'right' }}>{item.daysToRespond ? item.daysToRespond : '-'}</Col>
                        </Row>
                    )
                })
            }
        </TemplatePro>
    )
};
