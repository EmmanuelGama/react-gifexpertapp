import PropTypes from 'prop-types'
import GiphyCard from './GiphyCard'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import Spinner from './Spinner'

const GifGrid = ({ category }) => { 
  const { loading, data:imgs } = useFetchGifs(category)
  
  const gifs = (
    <>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-2 place-content-stretch place-items-stretch">
        {
          imgs.map(({ id, title, url }) => (
            <GiphyCard key={ id } title={ title } url={ url } />
          ))
        }
      </div>
      <hr className="w-full my-4" />
    </>
  )

  return (
    <>
      <h2 className="text-gray-800 text-bold text-3xl mb-4"> { category } </h2>
      { loading ? <Spinner /> : gifs }
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid