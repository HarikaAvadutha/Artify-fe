import React from 'react';
import { Row, Col, Select } from 'antd';
import FontAwesome from 'react-fontawesome';
import { TemplateStyles as TemplatePro } from './style';
import { Month } from './submission';

const data = [
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

const { Option } = Select;

export default function InProgress() {
    const [,setMonth] = React.useState();
    const [inProgress, setInProgress] = React.useState(data.filter(item => +item.submitted.split('/')[0] === +data[0].submitted.split('/')[0]));

    const months = [];
    data.forEach(item => {
        const day = +item.submitted.split('/')[0];
        if(!months.includes(Month[day])) months.push(Month[day]);
    });

    const onMonthChange = ($event) => {
        setMonth($event);
        setInProgress(data.filter(item => Month[+item.submitted.split('/')[0]] === $event));
    };
    

    return (
        <TemplatePro>
            <div className="header">
                <label>In Progress</label>
                <Select defaultValue={months[0]} style={{ minWidth:'100px', float: 'right', color: 'white' }}
                    bordered={false} onChange={($event) => onMonthChange($event)}>
                    {months.map(month => <Option key={month} value={month}>{month}</Option>)}
                </Select>
            </div>
            <Row className="tableHeader">
                <Col lg={5} md={5} xs={5}>Seller</Col>
                <Col lg={5} md={5} xs={5}>Artist Name</Col>
                <Col lg={7} md={7} xs={7} style={{ textAlign: 'center' }}>Status</Col>
                <Col lg={7} md={7} xs={7}>Days to Respond</Col>
            </Row>
            <div className="borderLine"></div>
            {
                inProgress.map((item,index) => {
                    return (
                        <Row className="tableItems" key={index}>
                            <Col lg={5} md={5} xs={5}>{item.name}</Col>
                            <Col lg={5} md={5} xs={5}>{item.artist}</Col>
                            <Col lg={5} md={5} xs={5} style={{ textAlign: 'right' }} className={`${item.status === 'NSV' ? 'colorYellow' : ''} ${item.status === 'inProgress' ? 'colorGreen' : ''}`}>{item.status}</Col>
                            <Col lg={2} md={2} xs={2} justify="center">
                                {item.status === 'NSV' && <FontAwesome name="minus-circle" className="colorYellow" />}
                                {item.status === 'inProgress' && <FontAwesome name="recycle" className="colorGreen" />}
                                {item.status === 'Offered' && <FontAwesome name="arrow-right" className="colorGreen" />}
                            </Col>
                            <Col lg={5} md={5} xs={5}>{(item.status !== 'NSV') ? (item.amount ? item.amount : 'Inc') : '-'}</Col>
                            <Col lg={2} md={2} xs={2} style={{ textAlign: 'right' }}>{item.daysToRespond ? item.daysToRespond : '-'}</Col>
                        </Row>
                    )
                })
            }
        </TemplatePro>
    )
};
