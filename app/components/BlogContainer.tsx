import { Link } from "@remix-run/react";
import { ReactNode } from "react";

interface BlogContainerProps {
  children: ReactNode;
  date: string;
}

const BlogContainer = ({ children, date }: BlogContainerProps) => {
  return (
    <section className="max-w-4xl mt-[10rem] lg:mt-[5rem] my-14 text-gray-100 text-lg mx-auto leading-8 font-pop font-light px-4 lg:px-0">
      <div className="my-8 flex justify-between">
        <div>
          <Link to={"/blog"}>Inicio {"> "}</Link>
          <Link to={"/blog"}> Blog</Link>
        </div>

        <div>
          <p className="relative custom-before-reloj before:top-[0.4rem]">{date}</p>
        </div>
      </div>
      {children}
    </section>
  );
};

export default BlogContainer;
