import  Genre  from "./Genre";
import Platform from "./Platform";
import  Publisher  from "./Publishers";

export default interface Game {
  id: number;
  name: string;
  background_image: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
