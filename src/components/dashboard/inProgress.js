import React from 'react';
import { Row, Col } from 'antd';
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
            daysToRespond: null
        },
        {
            name: 'Roger Massey',
            submitted: '04/01/2021',
            artist: 'Picasso',
            priority: 'Low',
            status: 'NSV',
            amount: null,
            daysToRespond: null
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
                <Col lg={6} md={6} xs={6} style={{textAlign: 'center'}}>Status</Col>
                <Col lg={7} md={7} xs={7}>Days to Respond</Col>
            </Row>
            <div className="borderLine"></div>
        </TemplatePro>
    )
};
