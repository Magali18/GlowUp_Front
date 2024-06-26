import { useState } from "react";

const Formulario = () => {


  const [input, setInput] = useState({
    name: "",
    cover_letter: "",
    description: "",
    price: '$',
    date: ''
  });
  console.log(input)
  

  const handleSubmit = (e) => {
  
    e.preventDefault()

    if (!input.name || !input.price || !input.cover_letter) {
      alert('Completar los campos')

    } else { alert('Formulario enviado con exito') }
   

  }

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  return (

    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Agregar Producto</h2>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            name="name"
            type="text"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Full name"
            value={input.name}
            onChange={handleChange}
          />
          <input
            type="text"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="UI"
            disabled
          />
          <input
            name="price"
            type="text"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Precio"
            value={input.price}
            onChange={handleChange}
          />
          <textarea
            name="description"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Descripcion producto"
            value={input.description}
            onChange={handleChange}
          ></textarea>

          <input
            name="cover_letter"
            type="file"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Resume"
            value={input.cover_letter}
            onChange={handleChange}

          />
          <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Apply</button>
        </form>
      </div>
    </div>
  );
};
export default Formulario;