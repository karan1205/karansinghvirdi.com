import React, {useEffect, useState} from 'react';
import {getDate} from "../../utils";

const Feed = (feed) => {
    const [feedData, setFeedData] = useState(null);
    useEffect(() => {
        const result = {
            link: feed.guid,
            title: feed.title
        }
        const htmlString = feed['content:encoded'] || '';
        const parsedHtml = new DOMParser().parseFromString(htmlString, "text/html");
        const imgTag = parsedHtml.querySelector('img');
        if(imgTag) {
            const imgSrc = imgTag.getAttribute('src');
            result.imgSrc = imgSrc;
        }
        result.date = getDate(new Date(feed.pubDate));
        setFeedData(result);
    }, [feed]);

    if(!feedData) {
        return null;
    }

    const {guid, title, date, imgSrc} = feedData;

    return (
        <div className="feed">
            <a href={guid}>
                <h1 className="title">{title}</h1>
                {imgSrc && <img className="image" src={imgSrc} alt={imgSrc} />}
                <div className="footer">
                    <p>Read more...</p>
                    <p className="date">{date}</p>
                </div>
            </a>
        </div>
    )
};

export default Feed;