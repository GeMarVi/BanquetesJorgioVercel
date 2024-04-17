import useScreenSize from '../hooks/useScreenSize';

import SwiperBlogDesktop from './SwiperBlogDesktop';
import SwiperBlogMobile from './SwiperBlogMobile';

const Blog = () => {

    const { width } = useScreenSize();

    return (
        <section className="pt-[8.5rem] lg:pt-[8rem] mb-[4.5rem] section-blog">
            <h3 className="text-heading text-5xl font-clash text-center pb-16">Testimonios de nuestros Clientes</h3>
            {width < 1024 ? (
               <SwiperBlogMobile/>
            ) : (
                <SwiperBlogDesktop/>
            )}

        </section>
    )
}

export default Blog