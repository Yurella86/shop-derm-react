// import './style/extend.scss';
import { Route, Routes } from 'react-router-dom';
import { Header, Home, Cart, ComparePage, CategoryPage, Account, Footer } from '../components'
import '../style/extend.scss'
<<<<<<< Updated upstream
=======
import CartProvider from '../store/cart-provider';
import ProductProvider from '../store/ProductApi/productProvider';
>>>>>>> Stashed changes


function App() {
  return (
<<<<<<< Updated upstream
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
=======
    <ProductProvider>
      <CartProvider>
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
      </CartProvider>
    </ProductProvider>

>>>>>>> Stashed changes
  );
}

export default App;
