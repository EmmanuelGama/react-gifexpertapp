import PropTypes from 'prop-types'

const GiphyCard = ({ title, url }) => {
  return (
    <>
      <div className="px-2 py-1 bg-white shadow rounded flex flex-col justify-center items-center animate__animated animate__pulse">
        <h1 className="text-gray-800 text-semibold text-lg text-center mb-2"> { title } </h1>
        <img className="rounded h-48 w-auto" src={ url } alt={ url } />
      </div>
    </>
  )
}

GiphyCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default GiphyCard