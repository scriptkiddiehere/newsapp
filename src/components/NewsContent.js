import React from 'react'
import { Container } from "@material-ui/core";
import "./NewsContent.css";
import NewsCard from './NewsCard';

const NewsContent = ({ newsArray }) => {
    return (
        <Container maxWidth="md">
            <div className="content">
                <div className="Message">
                    <span className="Text">
                        App by Scriptkiddiehere
                    </span>
                </div>
                {newsArray.map((newsItem) => (
                    <NewsCard newsItem={newsItem} key={newsItem.title} />
                ))}
            </div>
        </Container>
    )
}

export default NewsContent;