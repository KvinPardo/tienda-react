import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { IoMdArrowBack } from "react-icons/io";
import { getFirestore, collection, addDoc, doc, updateDoc } from "firebase/firestore";

const Formulario = () => {
  const { cart, clearCart, total } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [pais, setPais] = useState("");
  const [codigo, setCodigo] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log("enviando form");
  // };

  // const makeOrder = () => {
  //   const user = {
  //     name: "Kevin Pardo Veas",
  //     phone: "+569 90914436",
  //     email: "kevin.pardov26@gmail.com",
  //   };
  //   const order = {
  //     buyer: user,
  //     items: cart,
  //     total: total,
  //   };
  //   saveOrder(order);
  // };

  // Genera la orden de compra
  // const saveOrder = async (order) => {
  //   const db = getFirestore();
  //   const orderCollection = collection(db, "orders");
  //   const { id } = await addDoc(orderCollection, order);
  //   // console.log("Nueva Orden: ", id);
  // };

  // Editar orden
  // const editOrder = (id) => {
  //   const db = getFirestore();
  //   const orderDoc = doc(db, "orders", id);
  //   updateDoc(orderDoc, {
  //     buyer: {
  //       name: "Alejandro Ancalao",
  //       phone: "+569 90914436",
  //       email: "kevin.pardov26@gmail.com",
  //     },
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // };

  // const editOrderHandler = () => {
  //   editOrder("574gljB5gjuF8RCPkhVm");
  // };

  return (
    <div className="container mx-auto md:flex justify-center items-center h-screen w-full">
      <div className="w-1/2 flex justify-center items-center h-[400px]">
        <div className="md:flex md:flex-col self-start w-full mr-6">
          <h2 className="font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase">
            Resumen
          </h2>
          <div className="flex flex-col border border-gray-200 p-4 mt-6">
            <div className="flex flex-row justify-between font-light text-sm text-gray-600 tracking-wide leading-normal">
              <p>Cantidad de Productos:</p>
              <p>1</p>
            </div>
            <div className="flex flex-row justify-between font-light text-sm text-gray-600 tracking-wide leading-normal">
              <p>Gastos de envío:</p>
              <p>¡Envío gratis!</p>
            </div>
            <div className="flex flex-row justify-between font-semibold mt-10 text-xs text-gray-700 tracking-wider leading-loose uppercase">
              <p>Total:</p>
              <p>$1,272.00</p>
            </div>
          </div>
          <Link
            className="font-light text-sm text-gray-600 tracking-wide leading-normal flex flex-row items-center mt-3 lowercase"
            to={`/carrito`}
          >
            <IoMdArrowBack className="" /> Volver al carrito
          </Link>
        </div>
      </div>
      <form className="md:w-1/2 max-w-lg container mx-auto md:flex md:flex-col justify-center h-screen">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block md:flex uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Nombre Completo
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Kevin Pardo Veas"
            />
            <p className="text-red-500 text-xs italic">
              Por favor llenar todos los campos
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Correo
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="correo@correo.com"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6 ">
          <div className="w-full px-3 ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Contraseña
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
            />
            <p className="text-gray-600 text-xs italic w-full ">
              Debe contener mínimo 6 carácteres.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Ciudad
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Santiago"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              País
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Chile</option>
                <option>Argentina</option>
                <option>Perú</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Código Postal
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder={90210}
            />
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="w-1/2 py-10">
            <input type="checkbox" name="" id="" className="mx-1" />
            <label>Deseo recibir información</label>
          </div>
          <div className="md:w-1/2 w-full">
            <Link
              onClick={makeOrder()}
              to="/comprar"
              className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium"
            >
              Proceder al Pago
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
