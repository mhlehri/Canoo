import Activities from "../../Component/Activities/Activities";
import { ImgWithBlurredCaption } from "../../Component/Banner/Banner";
import Card from "../../Component/Card/Card";
import Features from "../../Component/Features/Features";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <ImgWithBlurredCaption></ImgWithBlurredCaption>
      <Card> </Card>

      <Features></Features>
      <Activities></Activities>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
