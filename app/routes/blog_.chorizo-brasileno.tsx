import BlogContainer from "~/components/BlogContainer";
import Btn from "~/components/Btn";

import chorizo1 from "../src/blog/chorizo/chorizo1.webp";
import chorizo2 from "../src/blog/chorizo/chorizo2.webp";
import chorizo3 from "../src/blog/chorizo/chorizo3.webp";
import { blogPosts } from "~/utils/staticInfo";


const Chorizo = () => {
  return (
    <BlogContainer date={blogPosts[4].date}>
      <article>
        <h1 className="text-4xl font-c font-bold">
          Chorizo Brasileño: Un Estallido de Sabor en Nuestras Espadas
          Brasileñas 🌶️ 
        </h1>
        <br />
        <p>
          El chorizo brasileño es uno de los favoritos en nuestro servicio de
          espadas brasileñas a domicilio, ¡y no es para menos! Con su intenso
          sabor, jugosidad y la perfecta mezcla de especias, este embutido se
          convierte en una verdadera delicia cuando se asa lentamente al estilo
          rodizio. Cada bocado te transporta directamente a Brasil, donde los
          sabores vibrantes y las tradiciones de la parrilla se fusionan para
          ofrecer una experiencia culinaria única e inolvidable.
        </p>
        <div className="my-10 flex justify-center">
          <img
            className="max-h-[25rem] lg:h-[25rem]"
            src={chorizo1}
            alt="imagen de chorizo asado en espada brasileña"
          />
        </div>

        <section>
          <h2 className="text-3xl font-bold mt-8 mb-3">
            🌟 ¿Qué es el Chorizo Brasileño? Sabor y Preparación
          </h2>
          <p>
            El chorizo brasileño es un embutido artesanal, conocido por su
            combinación de carne de cerdo de alta calidad y una mezcla precisa
            de especias y hierbas. A diferencia de otros tipos de chorizo, su
            sabor es equilibrado y armonioso, sin ser excesivamente picante, lo
            que lo hace perfecto para disfrutar en cualquier momento del día.
          </p>
          <p>
            Nuestro chorizo es cuidadosamente seleccionado para garantizar su
            jugosidad y sabor intenso, resultado de un proceso de curado y
            especiado que le otorga un perfil único. Se asa lentamente en
            nuestras espadas brasileñas, permitiendo que las brasas realcen su
            sabor y logren una textura dorada por fuera y jugosa por dentro.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-8 mb-3">
            🔥 La Experiencia al Disfrutar el Chorizo Brasileño
          </h2>
          <p>
            Cuando los espaderos se acercan con el chorizo en la espada, el
            aroma que emana es simplemente irresistible. El exterior del chorizo
            está perfectamente dorado, con una piel crujiente que encierra todos
            los jugos y sabores de su interior. Al primer corte, el chorizo
            revela su carne jugosa y la mezcla de especias que lo hace tan
            especial.
          </p>
          <p>
            Al cortar el chorizo brasileño, notarás su textura firme pero
            jugosa. Cada rebanada desprende un aroma profundo, lleno de especias
            y toques ahumados, invitándote a disfrutar de una explosión de sabor
            en cada bocado.
          </p>
          <p>
            El primer mordisco es una combinación perfecta de crujiente y
            jugoso. El exterior crocante, dorado por el calor de las brasas, da
            paso a un interior lleno de jugos y el toque de especias
            características del chorizo brasileño. Su sabor equilibrado, con
            notas de ajo, pimienta y especias frescas, se mezcla con el ligero
            ahumado que aporta la cocción lenta.
          </p>
        </section>

        <div className="my-10 flex justify-center">
          <img
            className="max-h-[25rem] lg:h-[25rem]"
            src={chorizo2}
            alt="imagen de chorizo asado"
          />
        </div>

        <section>
          <h2 className="text-3xl font-bold mt-8 mb-3">
            🔥 Cocción a Fuego Lento: El Secreto de un Chorizo Perfecto
          </h2>
          <p>
            El chorizo brasileño se cocina a fuego lento en nuestras espadas,
            permitiendo que el calor gradual penetre en la carne sin perder sus
            jugos naturales. Este método de cocción asegura que el embutido
            mantenga su jugosidad interna mientras el exterior se dora, logrando
            un balance perfecto entre sabor y textura.
          </p>
          <p>
            El término de cocción ideal para el chorizo brasileño es bien
            cocido, ya que este corte necesita alcanzar una cocción completa
            para resaltar su sabor y jugosidad. A fuego lento, el chorizo
            desarrolla una piel crujiente que contrasta con su interior suave y
            lleno de sabor.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-8 mb-3">
            🍴 Chorizo Brasileño: Un Embutido que Deleita Todos los Paladares
          </h2>
          <ul>
            <li>
              <strong>Sabor intenso y equilibrado:</strong> Gracias a su mezcla
              de especias, el chorizo tiene un sabor rico y profundo sin ser
              excesivamente fuerte.
            </li>
            <li>
              <strong>Textura jugosa y crujiente:</strong> La piel dorada y
              crujiente es el complemento perfecto para el interior suave y
              jugoso.
            </li>
            <li>
              <strong>Versatilidad:</strong> Es perfecto para disfrutar solo o
              acompañado de otros cortes y guarniciones, lo que lo convierte en
              un favorito en cualquier comida.
            </li>
          </ul>
        </section>

        <div className="my-10 flex justify-center">
          <img
            className="max-h-[25rem] lg:h-[25rem]"
            src={chorizo3}
            alt="imagen de chorizo brasileño a la parrilla"
          />
        </div>

        <section>
          <h2 className="text-3xl font-bold mt-8 mb-3">
            🍽️ Una Experiencia Culinaria Completa
          </h2>
          <p>
            Disfrutar del chorizo brasileño en nuestras espadas brasileñas es un
            placer para los sentidos. El contraste de su piel crujiente y su
            interior jugoso, combinado con el aroma de las especias asadas al
            calor de las brasas, eleva cada mordida a un nuevo nivel. Presentado
            en espadas y cortado directamente en tu mesa, el chorizo brasileño
            es una experiencia que no puedes perderte.
          </p>
          <p>
            <strong>
              ¿Listo para Probar el Auténtico Sabor del Chorizo Brasileño?
            </strong>
          </p>
          <p>
            Si buscas un embutido lleno de sabor y jugosidad, el chorizo
            brasileño es la opción perfecta. Disfruta de nuestra experiencia de
            espadas brasileñas a domicilio y deja que este embutido tradicional
            se convierta en el protagonista de tu comida.
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

export default Chorizo;
