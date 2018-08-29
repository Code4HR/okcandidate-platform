import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from './../components/Layout';
import Card from './../components/atoms/Card';

export default () => (
    <Layout>
        <section className="home">
            <div className="container call-to-action">
                <div className="call-to-action-text">
                    <h1>Don't go to the polls alone.</h1>
                    <p>Take your OKCandidate</p>
                </div>
                <a href="/surveys" className="button large primary">Get Started</a>
            </div>

            <div className="container">
                <Card className="intro-card">
                    <h2>How It Works</h2>
                    <div className="container">
                        <div className="four columns">
                            <img src="/static/images/survey-icons-halfsize.png"
                                alt="Take a Survey" />
                            <h2>1. Ask</h2>
                            <p>Candidates and voters take our survey</p>
                        </div>

                        <div className="four columns">
                            <img src="/static/images/politician-halfsize.png"
                                alt="Take a Survey" />
                            <h2>2. Match</h2>
                            <p>We match voters with candidates based on the results</p>
                        </div>

                        <div className="four columns">
                            <img src="/static/images/ballot-box-halfsize.png"
                                alt="Take a Survey" />
                            <h2>3. Vote</h2>
                            <p>Voters go to the polls knowing exactly
                                who they want in office</p>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    </Layout>
);
