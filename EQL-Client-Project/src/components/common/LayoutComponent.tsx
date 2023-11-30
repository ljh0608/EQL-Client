import Footer from '../footer/Footer';
import Header from '../header/Header';
import TopBtn from '../topButton/TopBtn';
type LayoutProps = {
  children: React.ReactNode;
};

const LayoutComponent = ({ children }: LayoutProps) => {
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
