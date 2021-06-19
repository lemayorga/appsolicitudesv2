import Footer from './layout/Footer';
import NavHeader from './layout/NavHeader';
import NavLeft from './layout/NavLeft';
// import logo from './logo.svg';

const App = () => {
  return (
  <div className="wrapper">
    <NavLeft></NavLeft>
    <div className="main">
    <NavHeader></NavHeader>
      <main className="content">
        <div className="container-fluid p-0">
        </div>
      </main>
      <Footer></Footer>
    </div> 
  </div>
  );
}

export default App;
