import { InstagramEmbed } from "react-social-media-embed";
import { ClientOnly } from "remix-utils/client-only";

const Video = () => {
   return (
      <ClientOnly fallback={null}>
			{() => <InstagramEmbed
         url="https://www.instagram.com/p/C3sNGCHvywO/"
         className=""
         height={"450"}
      />}
		</ClientOnly>
      
   );
};

export default Video;
