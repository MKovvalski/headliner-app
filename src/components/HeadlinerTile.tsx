import React from 'react'
import { ENTRY_headliner } from '../store/actions/headliners/types'
// import moment from 'moment'

interface HeadlinerTile extends ENTRY_headliner {}

const HeadlinerTile: React.FC<HeadlinerTile> = ({
  urlToImage,
  title,
  source,
  author,
  description,
  url,
  publishedAt
}) => {
  return (
    <div className='headliner'>
      <div className='headliner__img-wrapper'>
        {!!urlToImage ?
          <img
            className='headliner__img'
            src={urlToImage}
            alt={title}
          />
          :
          <div className='headliner__img-placeholder'/>
        }
      </div>
      <div className='headliner__content-wrapper'>
        <div>
          <div className='headliner__title'>
            {title}
          </div>
          <div className='headliner__source'>
            {source}
          </div>
          <div
            className='headliner__description'
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className='headliner__bottom'>
          {publishedAt &&
          <div className='headliner__date'>
            {publishedAt}
            {/* {moment(publishedAt).format('HH:mm MMMM DD, YYYY')} */}
          </div>
          }
          <a
            className='headliner__go-to'
            href={url}
            target='_blank'
          >
            Read article
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeadlinerTile
