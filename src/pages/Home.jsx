import React, { useContext, useEffect, useState } from "react";
// import product context
import Product from "./ItemListContainer";
import Hero from "../components/Hero";

import { Link, useLocation, useParams } from "react-router-dom";
import { PRODUCTOS } from "../data/productos.js";
import ItemListContainer from "./ItemListContainer";

const Home = () => {
  const [productos, setProductos] = useState([]);
  const location = useLocation();
  const { categoryId } = useParams();

  //  obtener productos de product contexr
  // const { items } = useContext(ProductContext);
  // console.log(items);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(PRODUCTOS);
      });
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

  // Obtener por categorías
  // const filteredProducts = items.filter((item) => {
  //   return (
  //     item.category === "bordados-mano" ||
  //     item.category === "lisos" ||
  //     item.category === "sobre-puestos" ||
  //     item.category === "realce"
  //   );
  // });
  // console.log(filteredProducts);

  return (
    <div>
      {/* <Hero /> */}
      <section name="more" className="py-16">
        <div className="container mx-auto">
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
                    location.pathname === "/"
                      ? "bg-orange-600 text-white"
                      : "text-orange-600"
                  } m-1 border-orange-600 border rounded-xl px-5 py-1`}
                  to={`/`}
                >
                  Todos
                </Link>
                <Link
                  className={`${
                    location.pathname === "/categoria/bordados-mano"
                      ? "bg-orange-600 text-white"
                      : "text-orange-600"
                  } m-1 border-orange-600 border rounded-xl px-5 py-1`}
                  to={`/categoria/bordados-mano`}
                >
                  Bordados a Mano
                </Link>

                <Link
                  className={`${
                    location.pathname === "/categoria/lisos"
                      ? "bg-orange-600 text-white"
                      : "text-orange-600"
                  } m-1 border-orange-600 border rounded-xl px-5 py-1`}
                  to={`/categoria/lisos`}
                >
                  Lisos
                </Link>

                <Link
                  className={`${
                    location.pathname === "/categoria/sobre-puestos"
                      ? "bg-orange-600 text-white"
                      : "text-orange-600"
                  } m-1 border-orange-600 border rounded-xl px-5 py-1`}
                  to={`/categoria/sobre-puestos`}
                >
                  Sobre Puestos
                </Link>

                <Link
                  className={`${
                    location.pathname === "/categoria/realce"
                      ? "bg-orange-600 text-white"
                      : "text-orange-600"
                  } m-1 border-orange-600 border rounded-xl px-5 py-1`}
                  to={`/categoria/realce`}
                >
                  Realce
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 mt-20">
            {productos.map((product) => {
              return <ItemListContainer product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
