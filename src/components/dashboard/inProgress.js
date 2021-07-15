import React from 'react';
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
        </TemplatePro>
    )
};
