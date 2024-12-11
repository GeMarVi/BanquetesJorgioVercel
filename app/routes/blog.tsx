import Btn from "~/components/Btn"
import { blogPosts } from "~/utils/staticInfo"

const blog = () => {
   
    return (
        <section className="p-6 max-w-6xl mx-auto font-pop">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                    <article
                        key={post.id}
                        className="shadow-lg rounded-xl overflow-hidden bg-secundario"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-4 text-gray-100">{post.title}</h2>
                            <p className="mb-4 text-gray-200">{post.description}</p>
                            <p className="text-sm relative ml-8 text-gray-300 mb-4 custom-before-reloj">Publicado: {post.date}</p>
                            <div className="py-4">
                                <Btn
                                    target={false}
                                    isLink={true}
                                    route={post.link}
                                    value="Leer Más"
                                />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section >
    )
}

export default blog