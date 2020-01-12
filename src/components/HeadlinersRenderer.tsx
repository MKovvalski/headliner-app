import React from 'react'
import { ENTRY_headliners } from '../store/actions/headliners/types'
import { useSelector } from 'react-redux'
import HeadlinerTile from './HeadlinerTile'

const MOCK: any = {
  status:0,
  source:"Hacker News",
  author:null,
  title:"Petmate",
  description:"A cross-platform PETSCII image editor.",
  url:"https://nurpax.github.io/petmate/",
  urlToImage: null,
  publishedAt:"2020-01-11T15:53:09.780582Z"
}

const HeadlinersRenderer: React.FC = () => {
  const { headliners }: ENTRY_headliners = useSelector(({ headliners }) => headliners)

  return (
    <div className='headliners-renderer'>
      <HeadlinerTile {...MOCK} />
      {headliners && headliners.map((headliner) => (
        <HeadlinerTile
          key={headliner.title}
          {...headliner}
        />
      ))}
    </div>
  )
}

export default HeadlinersRenderer
