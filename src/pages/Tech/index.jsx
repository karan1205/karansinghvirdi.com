import React, {useEffect, useState} from 'react';
import Feeds from '../../components/Feeds';
import Parser from 'rss-parser';
import './styles.scss';

const parser = new Parser();

const Tech = () => {
    const [feeds, setFeeds] = useState(null);
    useEffect(() => {
        (async () => {
            const feed = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://medium.com/feed/@karansinghvirdi');
            setFeeds(feed);
        })();
        fetch('/api/another').then(res => res.json()).then(res => console.log(res, '---------res---'))
    }, []);
    if(!feeds) {
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