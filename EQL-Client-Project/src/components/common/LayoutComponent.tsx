import Header from '../Header/Header';
type LayoutProps = {
  children: React.ReactNode;
};
const LayoutComponent = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header></Header>
      {children}{' '}
    </div>
  );
};

export default LayoutComponent;

//teste
