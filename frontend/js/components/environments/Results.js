'use strict';

import React, { Component } from 'react';
import BestMatch from './../ecosystems/BestMatch';
import OtherMatch from './../ecosystems/OtherMatch';

class Results extends Component {
    render () {
        const matches = [
            {
                name: 'John Smith',
                office: 'Party Affiliate',
                matchRate: 82
            },
            {
                name: 'Joan Smith',
                office: 'Party Affiliate',
                matchRate: 82
            },
            {
                name: 'Blaine Price',
                office: 'Party Affiliate',
                matchRate: 75
            },
            {
                name: 'Tommy Tavenner',
                office: 'Party Affiliate',
                matchRate: 68
            },
            {
                name: 'Cindy Pham',
                office: 'Party Affiliate',
                matchRate: 60
            }
        ];

        const bestRate = Math.max.apply(Math, matches.map((o) => {
            return o.matchRate;
        }));

        const bestMatch = matches.filter((o) => {
            return o.matchRate == bestRate;
        });

        const otherMatches = matches.filter((o) => {
            return o.matchRate != bestRate;
        });

        return (
            <article>
                <pre>Results Page</pre>
                { bestMatch.map((m) => {
                    return (<BestMatch
                            key={m.name}
                            matchText={bestMatch.length > 1 ?
                              "It's a duplicate!" :
                              "It's a match!"}
                            name={m.name}
                            office={m.office}
                            matchRate={m.matchRate} />);
                })}

                { otherMatches.map((m) => {
                    return (<OtherMatch
                            key={m.name}
                            name={m.name}
                            office={m.office}
                            matchRate={m.matchRate} />);
                })}
            </article>
        );
    }
}

Results.propTypes = {};

module.exports = Results;
