import './Spinner.css'

const Spinner = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h3 className="font-bold text-xl text-gray-800 mb-2"> Cargando </h3>
      <div className="h-32 w-32 bg rounded-full border-8 border-gray-300 animate-spin spinner" />
    </div>
  )
}

export default Spinner