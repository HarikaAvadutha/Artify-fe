import React from 'react';
import { Row, Col } from 'antd';
import FontAwesome from 'react-fontawesome';
import { TemplateStyles as TemplateSub } from './style';

export const Month = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
};

export default function Submission() {

    const newSubmissions = [
        {
            name: 'Roger Massey',
            submitted: '06/01/2021',
            artist: 'Picasso',
            priority: 'High'
        },
        {
            name: 'Roger Massey',
            submitted: '03/01/2021',
            artist: 'Picasso',
            priority: 'High'
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
            priority: 'High'
        },
        {
            name: 'Roger Massey',
            submitted: '04/01/2021',
            artist: 'Picasso',
            priority: 'High'
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
            {
                newSubmissions.map((item,index) => {
                    return (
                        <Row className="tableItems" key={index}>
                            <Col lg={6} md={6} xs={6}>{item.name}</Col>
                            <Col lg={6} md={6} xs={6} className="textWrapEllipse">{item.submitted}</Col>
                            <Col lg={6} md={6} xs={6}>{item.artist}</Col>
                            <Col lg={4} md={4} xs={4} style={{ textAlign: 'right' }} className={`${item.priority === 'High' ? 'colorGreen': ''} ${item.priority === 'Low' ? 'colorYellow': ''}`}>{item.priority}</Col>
                            <Col lg={2} md={2} xs={2} justify="center">
                                {item.priority === 'High' && <FontAwesome name="arrow-up" className="colorGreen" />}
                                {item.priority === 'Low' && <FontAwesome name="arrow-down" className="colorYellow" />}
                            </Col>
                        </Row>
                    )
                })
            }
        </TemplateSub>
    )
};
