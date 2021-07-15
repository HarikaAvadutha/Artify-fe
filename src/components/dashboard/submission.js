import React from 'react';
import { TemplateStyles as TemplateSub } from './style';

export default function Submission() {

    const newSubmissions = [
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

        </TemplateSub>
    )
};
