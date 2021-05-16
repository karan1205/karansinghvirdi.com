import React, {useEffect, useState} from 'react';
import Feeds from '../../components/Feeds';
import './styles.scss';

const Tech = () => {
    const [feeds, setFeeds] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://karansinghvirdi.netlify.app/.netlify/functions/server/tech-feed')
            .then(res => res.json())
            .then(res => {
                const {data: {feeds}} = res;
                setFeeds(feeds);
            })
            .catch(() => {
                setFeeds(null);
            }).finally(() => {
                setLoading(false);
            })
    }, []);
    if(!feeds && !loading) {
        return 'No Data';
    }
    return (
        <div className="tech">
            <section className="posts">
                <Feeds feeds={feeds.items} />
            </section>
        </div>
    );
};

export default Tech;