import React from 'react';
import { Row, Col } from 'antd';
import { TemplateStyles as TemplateSub } from './style';

export default function Submission() {

    const newSubmissions = [
        {
            name: 'Roger Massey',
            submitted: '06/01/2021',
            artist: 'Picasso',
            priority: 'high'
        },
        {
            name: 'Roger Massey',
            submitted: '03/01/2021',
            artist: 'Picasso',
            priority: 'high'
        },
        {
            name: 'Roger Massey',
            submitted: '03/01/2021',
            artist: 'Picasso',
            priority: 'Medium'
        },
        {
            name: 'Roger Massey',
            submitted: '03/01/2021',
            artist: 'Picasso',
            priority: 'Medium'
        },
        {
            name: 'Roger Massey',
            submitted: '03/01/2021',
            artist: 'Picasso',
            priority: 'Low'
        },
        {
            name: 'Roger Massey',
            submitted: '03/01/2021',
            artist: 'Picasso',
            priority: 'Low'
        },
        {
            name: 'Roger Massey',
            submitted: '04/01/2021',
            artist: 'Picasso',
            priority: 'high'
        },
        {
            name: 'Roger Massey',
            submitted: '04/01/2021',
            artist: 'Picasso',
            priority: 'high'
        },
        {
            name: 'Roger Massey',
            submitted: '04/01/2021',
            artist: 'Picasso',
            priority: 'Medium'
        },
        {
            name: 'Roger Massey',
            submitted: '04/01/2021',
            artist: 'Picasso',
            priority: 'Medium'
        },
        {
            name: 'Roger Massey',
            submitted: '04/01/2021',
            artist: 'Picasso',
            priority: 'Low'
        },
        {
            name: 'Roger Massey',
            submitted: '04/01/2021',
            artist: 'Picasso',
            priority: 'Low'
        }
    ];

    return (
        <TemplateSub>
            <div className="header">
                <label>New Submissions</label>
            </div>
            <Row className="tableHeader">
                <Col lg={6} md={6} xs={6}>Seller</Col>
                <Col lg={6} md={6} xs={6} className="textWrapEllipse">Submitted</Col>
                <Col lg={6} md={6} xs={6}>Artist</Col>
                <Col lg={6} md={6} xs={6}>Priorty</Col>
            </Row>
            <div className="borderLine"></div>
            
        </TemplateSub>
    )
};
