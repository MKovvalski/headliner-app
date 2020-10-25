import dateFormat from "dateformat";
import React from "react";
import { IEntryHeadliner } from "../store/actions/headliners/types";

interface IHeadlinerTile extends IEntryHeadliner {}

const formatDate = (date: string): string => dateFormat(date, "hh:MM - dd.mm.yyyy");

const HeadlinerTile: React.FC<IHeadlinerTile> = ({
    urlToImage,
    title,
    source,
    description,
    url,
    publishedAt,
}) => {
    return (
        <div className="headliner">
            <div className="headliner__img-wrapper">
                {!!urlToImage ? (
                    <img className="headliner__img" src={urlToImage} alt={title} />
                ) : (
                    <div className="headliner__img-placeholder" />
                )}
            </div>
            <div className="headliner__content-wrapper">
                <div>
                    <a href={url} target="_blank" rel="noreferrer">
                        <div className="headliner__title">{title}</div>
                    </a>
                    <div className="headliner__source">{source}</div>
                    <div
                        className="headliner__description"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </div>
                <div className="headliner__bottom">
                    {publishedAt && <div className="headliner__date">{formatDate(publishedAt)}</div>}
                    {/* <a
            className='headliner__go-to'
            href={url}
            target='_blank'
          >
            Read the article
          </a> */}
                </div>
            </div>
        </div>
    );
};

export default HeadlinerTile;
