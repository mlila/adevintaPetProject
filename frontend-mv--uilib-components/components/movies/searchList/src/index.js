import React from 'react'
import PropTypes from 'prop-types'
import AtomCard from '@s-ui/react-atom-card'


const MoviesSearchList = ({list, linkFactory:Link}) => (
  <div className="mv-MoviesSearch-list">
    <header className="mv-MoviesSearch-header">List of movies</header>
    {list.map(({image, title, id}) => {
      const imageSrc =
        image && `https://image.tmdb.org/t/p/w200${image}`
      const renderMedia = () =>
        imageSrc && <img className="mv-MoviesSearch-itemImage" src={imageSrc} />
      const renderContent = () => <header>{title}</header>
      const detailUrl = `/detail/${id}`

      return (
        <Link href={detailUrl} key={id}>
          <AtomCard key={id} media={renderMedia} content={renderContent} />
        </Link>
      
      )
    })}
  </div>
)

MoviesSearchList.displayName = 'MoviesSearchList'

MoviesSearchList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  ),
  linkFactory: PropTypes.fun
}

MoviesSearchList.defaultProps = {
  list: [],
  linkFactory: ({children, href}) => <a href={href}>{children}</a>
}

export default MoviesSearchList
