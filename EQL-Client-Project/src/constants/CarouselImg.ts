import { IcNext, IcPrevious } from "../assets/svgs/0_icons";
const NextArrow = () => {
  return (
   <IcNext/>
  );
}
const PrevArrow = ()  => {
  return (
    <IcPrevious/>
      
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      ...
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
