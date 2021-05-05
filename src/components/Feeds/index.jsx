import React from 'react';
import Feed from './Feed';
import './styles.scss'

const Feeds = ({feeds}) => {
    return (
        <div className="feeds">
            {
                feeds.map((feed, index) => (
                    <Feed key={index} {...feed} />
                ))
            }
        </div>
    )

};

export default Feeds