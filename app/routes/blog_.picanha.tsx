import BlogContainer from "~/components/BlogContainer";
import Btn from "~/components/Btn";

import picanhaCruda from "~/src/blog/picanha/picanha-cruda.webp";
import picanhaFuego from "~/src/blog/picanha/picanha-fuego.webp";
import picanha2 from "~/src/blog/picanha/picanha2.webp";
import { blogPosts } from "~/utils/staticInfo";

const BlogPicanha = () => {
  return (
    <BlogContainer date={blogPosts[1].date}>
      <article>
        {" "}
        <h1 className="text-4xl font-bold">
          Picaña (Picanha) Choice Angus: El Corte Estrella de las Espadas
          Brasileñas 🍽️
        </h1>{" "}
        <br />{" "}
        <section>
          {" "}
          <p>
            {" "}
            La <strong>picaña</strong> es un corte de carne que no solo llama la
            atención con su aspecto, sino que conquista por su sabor
            inconfundible y su textura jugosa. Este icónico corte brasileño,
            parte de nuestra selección <em>Choice Angus</em>, ofrece una
            experiencia gastronómica única al ser servido directamente desde la
            espada.{" "}
          </p>{" "}
        </section>{" "}
        <section>
          {" "}
          <h2 className="text-3xl font-bold mt-8 mb-3">
            🐄 ¿Qué es la Picaña? Origen y Corte
          </h2>{" "}
          <p>
            {" "}
            La picaña proviene de la parte superior del lomo de la res, justo
            encima del glúteo. Esta zona recibe poca actividad muscular, lo que
            la convierte en un corte especialmente tierno. Una capa de grasa
            característica es lo que la distingue, transformándola en una joya
            culinaria.{" "}
          </p>{" "}
          <p>
            {" "}
            En nuestra propuesta, utilizamos carne <strong>Choice Angus</strong>
            , reconocida por su calidad superior. La raza Angus se destaca por
            su marmoleo, una grasa intramuscular que, al cocerse lentamente, se
            derrite y envuelve la carne, intensificando su sabor y jugosidad.{" "}
          </p>{" "}
        </section>{" "}
        <div className="my-10 flex justify-center">
          {" "}
          <img
            className="max-h-[25rem] lg:h-[25rem]"
            src={picanhaCruda}
            alt="Picaña cruda"
          />{" "}
        </div>{" "}
        <section>
          {" "}
          <h2 className="text-3xl font-bold mt-8 mb-3">
            😋 La Experiencia de Degustar Picaña: Un Festín para los Sentidos
          </h2>{" "}
          <p>
            {" "}
            El momento en que los espaderos se acercan a tu mesa con la espada
            en mano es todo un espectáculo. La picaña, asada a fuego lento,
            llega dorada por fuera, con la grasa perfectamente caramelizada y
            aún tierna por dentro. Su capa de grasa brilla tentadora,
            invitándote a disfrutar de su sabor y textura únicos.{" "}
          </p>{" "}
          <p>
            {" "}
            Cuando el espadero corta la picaña, lo hace con una precisión que
            resalta la suavidad de la carne. La carne se deshace fácilmente,
            gracias al marmoleo que mantiene su jugosidad intacta. El primer
            bocado es una explosión de sabor: una mezcla de carne suave y el
            toque crujiente de la grasa que se derrite en tu boca.{" "}
          </p>{" "}
        </section>{" "}
        <section>
          {" "}
          <h2 className="text-3xl font-bold mt-8 mb-3">
            🔥 La Cocción Perfecta: Fuego Lento para el Máximo Sabor
          </h2>{" "}
          <p>
            {" "}
            El secreto de nuestra picaña radica en su cocción a fuego lento. En
            el rodizio brasileño, las carnes se cocinan lentamente sobre brasas,
            permitiendo que la grasa se derrita y se impregne en la carne,
            intensificando su sabor y textura.{" "}
          </p>{" "}
          <p>
            {" "}
            La picaña alcanza su punto perfecto cuando está{" "}
            <strong>al punto</strong> o <strong>término medio</strong>, logrando
            un equilibrio entre un interior rosado y jugoso y un exterior dorado
            con una capa de grasa que se deshace en cada bocado.{" "}
          </p>{" "}
        </section>{" "}
        <div className="my-10 flex gap-6 justify-center flex-col lg:flex-row">
          {" "}
          <img
            className="max-h-[30rem] lg:h-[25rem]"
            src={picanhaFuego}
            alt="Picaña asándose a fuego lento"
          />{" "}
        </div>{" "}
        <section>
          {" "}
          <h2 className="text-3xl font-bold mt-8 mb-3">
            🌟 ¿Por qué la Picaña Choice Angus es tan Especial?
          </h2>{" "}
          <p>
            {" "}
            Nuestra picaña Choice Angus se distingue por su marmoleo intermedio,
            lo que la convierte en una carne increíblemente tierna y llena de
            sabor. La calidad <strong>Choice</strong> asegura un corte de
            primera, seleccionado por su nivel perfecto de grasa y su textura
            delicada.{" "}
          </p>{" "}
          <ul>
            {" "}
            <li>
              <strong>Sabor profundo y jugoso:</strong> La picaña ofrece un
              sabor robusto y rico gracias a su marmoleo natural.
            </li>{" "}
            <li>
              <strong>Textura suave:</strong> Cada rebanada se corta con
              facilidad y se deshace en tu boca.
            </li>{" "}
            <li>
              <strong>Grasa caramelizada:</strong> La capa de grasa aporta un
              toque crujiente y mantecoso que crea una combinación irresistible.
            </li>{" "}
          </ul>{" "}
        </section>{" "}
        <section>
          {" "}
          <h2 className="text-3xl font-bold mt-8 mb-3">
            🍖 Un Momento para Disfrutar: Un Ritual Culinario
          </h2>{" "}
          <p>
            {" "}
            Disfrutar de una picaña no es solo comer carne; es un ritual. Desde
            que ves la espada acercarse hasta que pruebas la primera rebanada,
            cada detalle está cuidadosamente preparado para brindarte una
            experiencia memorable. La carne tierna, cocida al punto perfecto, la
            grasa que se derrite y el sabor que permanece en tu paladar hacen de
            esta una experiencia que tus invitados querrán repetir.{" "}
          </p>{" "}
        </section>{" "}
        <div className="my-10 flex gap-6 justify-center flex-col lg:flex-row">
          {" "}
          <img
            className="max-h-[25rem] lg:h-[25rem]"
            src={picanha2}
            alt="Picaña cocida"
          />{" "}
        </div>{" "}
        <section>
          {" "}
          <h2 className="text-3xl font-bold mt-8 mb-3">
            🏅 ¿Listo para Probar la Mejor Picaña Choice Angus?
          </h2>{" "}
          <p>
            {" "}
            Si buscas una experiencia culinaria auténtica y memorable, nuestras
            espadas brasileñas a domicilio con cortes de picaña Choice Angus son
            la opción perfecta. Disfruta de la calidad, el sabor y el
            espectáculo de la picaña, todo desde la comodidad de tu hogar.
            ¡Reserva ahora!{" "}
          </p>{" "}
        </section>{" "}
        <br />{" "}
        <section>
          {" "}
          <p>
            <strong>¡No olvides!</strong> Si estás interesado en una experiencia
            única, puedes contactarnos para reservar una de nuestras espadas
            brasileñas y disfrutar de una comida inolvidable con la mejor picaña
            Choice Angus.
          </p>{" "}
        </section>{" "}
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

export default BlogPicanha;
