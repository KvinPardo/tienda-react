import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import CardProducto from "../components/CardProducto";
import { PRODUCTOS } from "../data/productos.js";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const location = useLocation();
  console.log(location);
  // console.log(PRODUCTOS);
  // console.log(productos);

  const { categoryId } = useParams();
  console.log(categoryId, "Soy el categoryId");

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(PRODUCTOS);
      },1000);
    });
  };

  useEffect(() => {
    if (categoryId) {
      // console.log(categoryId);
      getProducts()
        .then((res) =>
          setProductos(res.filter((product) => product.category === categoryId))
        )
        .catch((err) => {
          console.log(err);
        });
    } else {
      getProducts()
        .then((res) => setProductos(res))
        .catch((err) => console.log(err));
    }

    return () => setProductos([]);
  }, [categoryId]);

  // useEffect(() => {
  //   const getProductos = new Promise((resolve) => {
  //     // console.log(category);
  //     setTimeout(() => {
  //       resolve(PRODUCTOS);
  //     });
  //   });
  //   getProductos.then((res) => setProductos(res));
  // }, [category]);

  // Filter Type
  // const filterType = (category) => {
  //   setProductos(
  //     PRODUCTOS.filter((item) => {
  //       return item.category == category;
  //     })
  //   );
  // };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <div className="flex items-center justify-center mt-24 gap-4 w-full whitespace-nowrap over">
        <h1 className="text-4xl text-center md:text-5xl font-thin first-letter:font-bold">
          Nuestros
        </h1>
        <h3 className="text-4xl text-center md:text-5xl font-thin first-letter:font-bold">
          Mejores
        </h3>
      </div>
      <h2 className="text-4xl text-center md:text-5xl font-thin first-letter:font-bold">
        Productos
      </h2>

      {/* Filter Row */}
      <div className="mx-auto container flex flex-col lg:flex-row mt-16">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-gray-700 ml-2 mb-4">Categorías</p>
          <div className="flex justfiy-between flex-wrap">
            {/* <Link to={`/category/${id}`}> */}

            {/* <button
              onClick={() => filterType("bordados-mano")}
              className="m-1 border-orange-600 text-primary hover:bg-[#f4ede5] hover:text-primary"
            >
              Bordados a Mano
            </button> */}
            {/* </Link> */}

            <Link
              className={`${
                location.pathname === "/catalogo"
                  ? "bg-orange-600 text-white"
                  : "text-orange-600"
              } m-1 border-orange-600 border rounded-xl px-5 py-1`}
              to={`/catalogo`}
            >
              Todos
            </Link>
            <Link
              className={`${
                location.pathname === "/catalogo/categoria/bordados-mano"
                  ? "bg-orange-600 text-white"
                  : "text-orange-600"
              } m-1 border-orange-600 border rounded-xl px-5 py-1`}
              to={`/catalogo/categoria/bordados-mano`}
            >
              Bordados a Mano
            </Link>

            <Link
              className={`${
                location.pathname === "/catalogo/categoria/lisos"
                  ? "bg-orange-600 text-white"
                  : "text-orange-600"
              } m-1 border-orange-600 border rounded-xl px-5 py-1`}
              to={`/catalogo/categoria/lisos`}
            >
              Lisos
            </Link>

            <Link
              className={`${
                location.pathname === "/catalogo/categoria/sobre-puestos"
                  ? "bg-orange-600 text-white"
                  : "text-orange-600"
              } m-1 border-orange-600 border rounded-xl px-5 py-1`}
              to={`/catalogo/categoria/sobre-puestos`}
            >
              Sobre Puestos
            </Link>

            <Link
              className={`${
                location.pathname === "/catalogo/categoria/realce"
                  ? "bg-orange-600 text-white"
                  : "text-orange-600"
              } m-1 border-orange-600 border rounded-xl px-5 py-1`}
              to={`/catalogo/categoria/realce`}
            >
              Realce
            </Link>
          </div>
        </div>
      </div>

      {/* FILTROS.TXT */}

      <div className="container mx-auto mt-24 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] max-w-sm md:max-w-none md:mx-0 ">
          {productos.map((i) => (
            <CardProducto key={i.id} {...i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
