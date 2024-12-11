import BlogContainer from "~/components/BlogContainer";
import Btn from "~/components/Btn";

import ensalada from "~/src/blog/ensalada/ensalada1.webp";
import ensalada2 from "~/src/blog/ensalada/ensalada2.webp";
import ensalada3 from "~/src/blog/ensalada/ensalada3.webp";
import { blogPosts } from "~/utils/staticInfo";

const BlogEnsaladas = () => {
  return (
    <BlogContainer date={blogPosts[5].date}>
      <article>
        <h1 className="text-4xl font-bold">
          Ensalada Dulce: Frescura y Sabores Naturales en Cada Bocado 🥗
        </h1>
        <br />
        <p>
          La ensalada dulce es una deliciosa combinación de frescura y dulzura
          natural, pensada para satisfacer el paladar con cada bocado. Preparada
          con una base de tres tipos de lechuga: morada, italiana y orejona,
          acompañada de un toque de espinaca fresca, esta ensalada equilibra lo
          mejor de las frutas, frutos secos y el crujiente y dulce ajonjolí
          garapiñado.
        </p>
        <div className="my-10 flex justify-center">
          <img
            className="max-h-[25rem] lg:h-[25rem]"
            src={ensalada}
            alt="Ensalada fresca"
          />
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-3">
          🍓 Ingredientes Frescos y Deliciosos
        </h2>
        <p>
          Cada ingrediente ha sido cuidadosamente seleccionado para brindar una
          experiencia única:
        </p>
        <ul>
          <li>
            🍓 <strong>Fresas fileteadas</strong> que añaden un toque jugoso y
            ligeramente ácido.
          </li>
          <li>
            🥭 <strong>Mango o melón</strong>, proporcionando un sabor tropical
            y refrescante.
          </li>
          <li>
            🍇 <strong>Uvas fileteadas</strong>, que suman dulzura natural y
            textura jugosa.
          </li>
          <li>
            🌰 <strong>Almendras fileteadas y nueces</strong>, que aportan una
            textura crujiente y un sabor a nuez que complementa la frescura de
            la ensalada.
          </li>
          <li>
            🫐 <strong>Arándanos</strong>, con su sutil toque ácido que
            equilibra perfectamente la dulzura de las frutas.
          </li>
          <li>
            🍯 <strong>Ajonjolí garapiñado</strong>, que añade una capa
            crujiente y caramelizada, proporcionando una experiencia dulce y
            crocante en cada bocado.
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-3">
          🥗 Un Equilibrio Perfecto de Texturas y Sabores
        </h2>
        <p>
          La lechuga morada, italiana y orejona forman una base ligera y fresca,
          mientras que la espinaca aporta un sabor sutil que contrasta con las
          frutas dulces y el crujiente ajonjolí garapiñado. La combinación de
          frutas frescas y frutos secos logra una mezcla equilibrada, donde cada
          ingrediente complementa al siguiente para ofrecer una explosión de
          sabores en cada tenedor.
        </p>
        <div className="my-10 flex justify-center">
          <img
            className="5 lg:h-[25rem]"
            src={ensalada2}
            alt="Ensalada con frutas frescas"
          />
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-3">
          🍴 El Acompañamiento Ideal
        </h2>
        <p>
          Esta ensalada es el acompañamiento perfecto para nuestros platillos de
          espadas brasileñas, aportando un toque refrescante y ligero que
          contrasta con los sabores intensos y ahumados de la carne.
        </p>
        <div className="my-10 flex justify-center">
          <img
            className="5 lg:h-[25rem]"
            src={ensalada3}
            alt="Ensalada fresca acompañando carne"
          />
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-3">
          😋 ¿Listo para Probar Nuestra Ensalada Dulce?
        </h2>
        <p>
          Si buscas un equilibrio entre frescura, dulzura y crocancia, nuestra
          ensalada dulce es la elección perfecta. Disfruta de una combinación
          única de sabores naturales y texturas irresistibles, ideal para
          acompañar cualquier ocasión.
        </p>
        <p>¡Haz tu pedido y descubre la frescura en cada bocado!</p>
        <div className="flex mt-6 justify-center">
          <Btn
            isLink={true}
            value="Reserva tu servicio"
            target={true}
            route="https://wa.link/jorgio"
          />
        </div>
      </article>
    </BlogContainer>
  );
};

export default BlogEnsaladas;
