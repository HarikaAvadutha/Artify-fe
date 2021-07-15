import React from 'react';
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
        </TemplateOff>
    )
};
