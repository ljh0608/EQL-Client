import Footer from '../footer/Footer';
import Header from '../header/Header';
import TopBtn from '../topButton/TopBtn';
import { useState } from 'react';
type LayoutProps = {
  children: React.ReactNode;
};

const LayoutComponent = ({ children }: LayoutProps) => {
  // const [isHovering, setIsHovering] = useState(false);
  // const handleMouseOver = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // };
  return (
    <div>
      <Header></Header>
      {children}
      <TopBtn />
      <Footer></Footer>
    </div>
  );
};

export default LayoutComponent;
