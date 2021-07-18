import React from 'react';
import { Row, Col, Select } from 'antd';
import FontAwesome from 'react-fontawesome';
import { TemplateStyles as TemplateSub } from './style';

export const Month = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const data = [
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
        name: 'Roger Masseya',
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
    },
    {
        name: 'Roger Massey',
        submitted: '06/01/2021',
        artist: 'Picasso',
        priority: 'High'
    }
];

const { Option } = Select;

export default function Submission() {
    const [,setMonth] = React.useState();
    const [newSubmissions, setSubmissions] = React.useState(data.filter(item => +item.submitted.split('/')[0] === +data[0].submitted.split('/')[0]));

    const months = [];
    data.forEach(item => {
        const day = +item.submitted.split('/')[0];
        if(!months.includes(Month[day])) months.push(Month[day]);
    });

    const onMonthChange = ($event) => {
        setMonth($event);
        setSubmissions(data.filter(item => Month[+item.submitted.split('/')[0]] === $event));
    };

    return (
        <TemplateSub>
            <div className="header">
                <label>New Submissions</label>
                <Select defaultValue={months[0]} style={{ minWidth:'100px', float: 'right', color: 'white' }}
                    bordered={false} onChange={($event) => onMonthChange($event)}>
                    {months.map(month => <Option key={month} value={month}>{month}</Option>)}
                </Select>
            </div>
            <Row className="tableHeader">
                <Col lg={6} md={6} xs={6}>Seller</Col>
                <Col lg={6} md={6} xs={6} className="textWrapEllipse">Submitted</Col>
                <Col lg={6} md={6} xs={6}>Artist</Col>
                <Col lg={6} md={6} xs={6}>Priorty</Col>
            </Row>
            <div className="borderLine"></div>
            {
                newSubmissions.map((item, index) => {
                    return (
                        <Row className="tableItems" key={index}>
                            <Col lg={6} md={6} xs={6}>{item.name}</Col>
                            <Col lg={6} md={6} xs={6} className="textWrapEllipse">{item.submitted}</Col>
                            <Col lg={6} md={6} xs={6}>{item.artist}</Col>
                            <Col lg={4} md={4} xs={4} style={{ textAlign: 'right' }} className={`${item.priority === 'High' ? 'colorGreen' : ''} ${item.priority === 'Low' ? 'colorYellow' : ''}`}>{item.priority}</Col>
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
