// import './style/extend.scss';
import { Route, Routes } from 'react-router-dom';
import {
  Header,
  Home,
  Cart,
  ComparePage,
  Services,
  Products,
  Specials,
  GiftCard,
  Account,
  Footer,
  Authentication
} from '../components'
import '../style/extend.scss'
import CartProvider from '../store/cart-provider';
import ProductProvider from '../store/ProductApi/productProvider';
// import Banners from '../components/Mine/Banners/banners';




function App() {
  return (
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
              <Route exact path='/category/services' element={<Services />} />
              <Route exact path='/category/all_products' element={<Products />} />
              <Route exact path='/category/specials' element={<Specials />} />
              <Route exact path='/category/gift_card' element={<GiftCard />} />
              <Route exact path='/account' element={<Account />} />
              <Route exact path='/auth' element={<Authentication />} />
            </Routes>
          </main>

          <Footer />

        </div>
      </CartProvider>
    </ProductProvider>

  );
}

export default App;
