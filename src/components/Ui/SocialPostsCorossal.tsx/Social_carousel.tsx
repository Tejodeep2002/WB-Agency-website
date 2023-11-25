import { getAllPosts } from "@/config/SanityClient";
import Social_carousel_swiper from "./Social_carousel_swiper";
const Social_carousel = async() => {
  const posts = await getAllPosts()
  return <Social_carousel_swiper posts={posts}/>;
};

export default Social_carousel;
