import BlogContainer from "~/components/BlogContainer";
import Btn from "~/components/Btn";

import bbq1 from "app/src/blog/bbq/bbq1.webp";
import bbq2 from "app/src/blog/bbq/bbq2.webp";
import bbq3 from "app/src/blog/bbq/bbq3.webp";
import { blogPosts } from "~/utils/staticInfo";

const BlogBbq = () => {
  return (
    <BlogContainer date={blogPosts[2].date}>
      <article>
        <h1 className="text-4xl font-bold">
         Costilla de Cerdo BBQ: Un Festín de Sabor en Nuestras Espadas
          Brasileñas 🍖 
        </h1>
        <br />
        <p>
          La costilla de cerdo BBQ es uno de los platillos más irresistibles de
          nuestro servicio de espadas brasileñas a domicilio. Su carne, tierna y
          jugosa, se desprende fácilmente del hueso, mientras que el glaseado
          BBQ aporta un toque dulce y ahumado. Cocinada lentamente a las brasas,
          esta delicia se convierte en un manjar que despierta los sentidos con
          cada bocado.
        </p>
        <div className="my-10 flex justify-center">
          <img
            className="max-h-[25rem] lg:h-[25rem]"
            src={bbq1}
            alt="Costilla de cerdo BBQ"
          />
        </div>

        <section>
          <h2 className="text-3xl| font-bold mt-8 mb-3">
          🍖  La Costilla de Cerdo: Un Corte Clásico y Sabroso 
          </h2>
          <p>
            Las costillas de cerdo son famosas por su jugosa carne y su justo
            equilibrio de grasa, lo que les da una textura tierna y un sabor
            inconfundible. Se preparan con un marinado especial y se cubren con
            una deliciosa salsa BBQ, que carameliza al cocinarse, creando una
            corteza sabrosa y brillante.
          </p>
          <p>
            El secreto está en la cocción lenta sobre las brasas, permitiendo
            que la salsa BBQ se adhiera y se caramelice, formando una capa
            exterior crujiente, mientras el interior mantiene su jugosidad.
          </p>
        </section>

        <section>
          <h2 className="text-3xl| font-bold mt-8 mb-3">
          😋  La Experiencia al Disfrutar la Costilla de Cerdo BBQ 
          </h2>
          <p>
            Cuando los espaderos llegan a tu mesa con las costillas BBQ, el
            aroma dulce y ahumado llena el aire. La corteza caramelizada es el
            preludio perfecto para la carne que se deshace en la boca.
          </p>
          <p>
            Al cortar la costilla, la carne se separa fácilmente del hueso,
            revelando su interior jugoso. El primer bocado es una mezcla de
            sabores: la dulzura de la salsa BBQ, el toque ahumado de las brasas
            y la ternura de la carne, creando una experiencia irresistible.
          </p>
          <p>
            La salsa BBQ, con su balance perfecto entre lo dulce, lo salado y lo
            ahumado, se carameliza de manera impecable, agregando una capa
            crujiente que eleva el sabor de la carne.
          </p>
        </section>

        <div className="my-10 flex justify-center">
          <img
            className="max-h-[25rem] lg:h-[25rem]"
            src={bbq2}
            alt="Costilla de cerdo BBQ en espadas"
          />
        </div>

        <section>
          <h2 className="text-3xl| font-bold mt-8 mb-3">
          🔥  Cocción Lenta a las Brasas: El Secreto de la Jugosidad 
          </h2>
          <p>
            Las costillas de cerdo BBQ se cocinan lentamente sobre las brasas,
            garantizando que la carne se mantenga tierna y jugosa. La salsa BBQ
            se carameliza, sellando todo el sabor en cada costilla.
          </p>
          <p>
            Este proceso asegura una textura perfecta: un exterior crujiente y
            un interior jugoso, con la grasa que se derrite en la boca,
            aportando un sabor delicioso en cada bocado.
          </p>
        </section>

        <section>
          <h2 className="text-3xl| font-bold mt-8 mb-3">
          🍴  Costilla de Cerdo BBQ: Un Clásico Sabroso y Jugoso 
          </h2>
          <ul>
            <li>
              <strong>Sabor ahumado y dulce:</strong> La salsa BBQ aporta un
              toque dulce y ahumado que complementa perfectamente la carne de
              cerdo.
            </li>
            <li>
              <strong>Textura tierna y jugosa:</strong> La carne se desprende
              fácilmente del hueso, ofreciendo una experiencia suave y sabrosa.
            </li>
            <li>
              <strong>Corteza caramelizada:</strong> La salsa BBQ crea una capa
              crujiente que eleva cada mordida.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl| font-bold mt-8 mb-3">
          🌟  Una Experiencia Inolvidable en Cada Bocado 
          </h2>
          <p>
            Disfrutar de la costilla de cerdo BBQ en nuestras espadas brasileñas
            es una experiencia única que combina el sabor irresistible de la
            salsa BBQ con la jugosidad de la carne. Cada costilla está cocinada
            a la perfección, con una capa de salsa caramelizada que añade una
            dimensión extra de sabor.
          </p>
          <p>
            Cortada directamente en tu mesa, esta costilla BBQ es una explosión
            de sabor que hará que no puedas dejar de comer.
          </p>
        </section>

        <div className="my-10 flex justify-center">
          <img
            className="max-h-[25rem] lg:h-[25rem]"
            src={bbq3}
            alt="Costilla de cerdo BBQ"
          />
        </div>

        <section>
          <h2 className="text-3xl| font-bold mt-8 mb-3">
          😍 ¿Listo para Saborear la Costilla de Cerdo BBQ? 
          </h2>
          <p>
            Si eres amante de las costillas jugosas y llenas de sabor, la
            costilla de cerdo BBQ es el platillo perfecto para ti. Con el
            equilibrio ideal entre dulce, ahumado y tierno, es la elección ideal
            para disfrutar de nuestro servicio de espadas brasileñas a
            domicilio.
          </p>
          <p>
            <a
              href="/reserva"
              aria-label="Reserva tu servicio de espadas brasileñas a domicilio"
            >
              ¡Reserva ahora y descubre el increíble sabor de nuestras costillas
              de cerdo BBQ!
            </a>
          </p>
        </section>
      </article>

      <div className="flex mt-6 justify-center">
        <Btn
          isLink={true}
          value="Reserva tu servicio"
          target={true}
          route="https://wa.link/jorgio"
        />
      </div>
    </BlogContainer>
  );
};

export default BlogBbq;
