import BlogContainer from "~/components/BlogContainer";
import Btn from "~/components/Btn";
import { blogPosts } from "~/utils/staticInfo";

import espadas1 from "~/src/blog/espadas/espadas1.webp";
import espadas2 from "~/src/blog/espadas/espadas2.webp";
import espadas3 from "~/src/blog/espadas/espadas3.webp";
import espadas4 from "~/src/blog/espadas/espadas4.webp";

const BlogEspadas = () => {
  return (
    <BlogContainer date={blogPosts[0].date}>
      <article>
        <h1 className="text-4xl font-bold">
          ✨ ¡Descubre el Mundo de las Espadas Brasileñas! ✨
        </h1>
        <br />
        <p>
          Los amantes de la carne sabemos que hay infinitas formas de preparar
          un exquisito banquete lleno de sabor y tradición. Entre todas ellas,
          una de las más icónicas y sabrosas es, sin duda, la de las espadas
          brasileñas. Este estilo, originado en Brasil, ha cruzado fronteras y
          conquistado paladares en todo el mundo. ¡Acompáñanos a descubrir qué
          hace tan especial esta técnica culinaria!
        </p>
        <div className="my-10 flex justify-center">
          <img
            className="max-h-[25rem] lg:h-[25rem]"
            src={espadas1}
            alt="Costilla de cerdo BBQ"
          />
        </div>
        <h2 className="text-3xl font-bold mt-8 mb-3">
          🌳 El Origen y el Arte del Churrasco Brasileño
        </h2>
        <p>
          La tradición del churrasco brasileño se remonta al siglo XVII, en las
          pampas del sur de Brasil. Aquí, los gaúchos —los vaqueros de la
          región— perfeccionaron una forma de cocinar la carne al aire libre.
          Usaban brasas de leña y largos pinchos de metal para asar los cortes
          directamente sobre el fuego. Esta práctica no solo les permitía
          alimentarse, sino también celebrar la camaradería y la abundancia en
          un festín compartido.
        </p>
        <p>
          Con el paso del tiempo, esta tradición culinaria evolucionó,
          convirtiéndose en un arte. Hoy en día, las espadas brasileñas
          simbolizan la pasión por la buena comida y la celebración de los
          momentos especiales.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-3">
          🗡️ ¿Qué son las Espadas Brasileñas?
        </h2>
        <p>
          Lejos de ser armas, las espadas brasileñas son largos pinchos
          metálicos diseñados para asar carnes selectas sobre brasas ardientes.
          Este método permite una cocción uniforme, sellando los jugos naturales
          de la carne mientras adquiere un delicioso sabor ahumado y una textura
          irresistible.
        </p>
        <p>
          La magia de esta técnica radica en la rotación constante de la espada
          sobre el fuego, garantizando una cocción perfecta y una experiencia de
          sabor inigualable.
        </p>
        <div className="my-10 flex justify-center">
          <img
            className="max-h-[25rem] lg:h-[25rem]"
            src={espadas2}
            alt="Costilla de cerdo BBQ"
          />
        </div>
        <h2 className="text-3xl font-bold mt-8 mb-3">
          🍔 Cortes que Conquistan el Paladar
        </h2>
        <ul>
          <li>
            <strong>Picaña:</strong> Este corte emblemático es el alma del
            churrasco. Su capa de grasa se derrite al asarse, aportando un sabor
            profundo y una textura jugosa que deleita a cualquiera.
          </li>
          <li>
            <strong>Filete Miñón:</strong> Su suavidad y ternura lo convierten
            en el favorito de quienes buscan una experiencia refinada en cada
            bocado.
          </li>
          <li>
            <strong>Costillas:</strong> Cocidas a fuego lento, las costillas se
            desprenden fácilmente del hueso, impregnadas con un aroma ahumado
            que te hará querer repetir.
          </li>
          <li>
            <strong>Chorizo artesanal:</strong> Sazonado con especias
            exclusivas, este complemento aporta un contraste perfecto en sabor y
            textura, ideal para los amantes de los sabores tradicionales.
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-3">
          🎤 Más que una Comida, un Espectáculo para los Sentidos
        </h2>
        <p>
          El proceso de preparar las espadas brasileñas es una experiencia que
          envuelve todos los sentidos:
        </p>
        <ul>
          <li>
            <strong>Vista:</strong> Ver las espadas girando sobre el fuego y el
            brillo dorado de la carne es un espectáculo hipnótico.
          </li>
          <li>
            <strong>Oído:</strong> El chisporroteo de la carne en contacto con
            el fuego es música para los amantes de la buena comida.
          </li>
          <li>
            <strong>Olfato:</strong> Los aromas ahumados llenan el aire,
            abriendo el apetito de cualquiera.
          </li>
          <li>
            <strong>Gusto:</strong> Cada bocado es una explosión de sabor y
            jugosidad.
          </li>
        </ul>
        <div className="my-10 flex justify-center">
          <img
            className="max-h-[25rem] lg:h-[25rem]"
            src={espadas3}
            alt="Costilla de cerdo BBQ"
          />
        </div>
        <h2 className="text-3xl font-bold mt-8 mb-3">
          🔖 Detalles que Marcan la Diferencia
        </h2>
        <ul>
          <li>
            <strong>Historia en tu mesa:</strong> Cada bocado es una conexión
            con la tradición culinaria brasileña.
          </li>
          <li>
            <strong>Comida ilimitada:</strong> En muchos lugares que ofrecen
            esta experiencia, los comensales pueden disfrutar de porciones
            ilimitadas de carne.
          </li>
          <li>
            <strong>Atención personalizada:</strong> Los maestros churrasqueros
            cuidan cada espada, garantizando cortes en el punto de cocción ideal
            para cada comensal.
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-3">
          🍽️ Una Tradición que Une
        </h2>
        <p>
          El churrasco brasileño no es solo una comida; es una forma de reunir a
          las personas, de celebrar y disfrutar juntos. Desde sus humildes
          inicios en las pampas hasta las mesas de todo el mundo, esta tradición
          sigue siendo un puente que conecta culturas, sabores y momentos
          especiales.
        </p>
        <div className="my-10 flex justify-center">
          <img
            className="max-h-[25rem] lg:h-[25rem]"
            src={espadas4}
            alt="Costilla de cerdo BBQ"
          />
        </div>
        <h2 className="text-3xl font-bold mt-8 mb-3">
          🌟 ¡Descubre el Verdadero Sabor del Churrasco Brasileño!
        </h2>
        <p>
          Si alguna vez has querido vivir esta experiencia culinaria, no esperes
          más. Jorgio Espadas Brasileñas y Parrilladas te invita a disfrutar de
          una auténtica celebración de la carne.
        </p>
        <ul>
          <li>
            ❤️ <strong>Comida ilimitada:</strong> Disfruta de porciones
            ilimitadas de los cortes más icónicos.
          </li>
          <li>
            💳 <strong>Pagos flexibles:</strong> Aceptamos tarjetas de crédito y
            ofrecemos meses sin intereses.
          </li>
          <li>
            💼 <strong>Facturación disponible:</strong> Perfecto para empresas o
            eventos corporativos.
          </li>
        </ul>
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

export default BlogEspadas;
