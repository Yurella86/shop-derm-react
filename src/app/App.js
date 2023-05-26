// import './style/extend.scss';
import { Route, Routes } from 'react-router-dom';
import { Header, Home, Cart, ComparePage, CategoryPage, Account, Footer } from '../components'
import '../style/extend.scss'


function App() {
  return (
    <div className="body-container">
      <div id='top'></div>
      <div className='button-to-top'>
        <a href='#top'><span className='icon icon-chevron-right'></span></a>
      </div>


      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/compare' element={<ComparePage />} />
          <Route exact path='/category/services' element={<CategoryPage />} />
          <Route exact path='/account' element={<Account />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;
