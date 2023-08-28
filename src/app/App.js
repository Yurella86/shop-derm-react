// import './style/extend.scss';
import { Route, Routes } from 'react-router-dom';
import { Header, Home, Cart, ComparePage, CategoryPage, Account, Footer } from '../components'
import '../style/extend.scss'
import ProductContext from '../store/product-context';
import { useState } from 'react';
import productImage from '../images/products/jeuveau-sku_31.jpg'

function App() {

  const [products, setProducts] = useState(
    [
      {
        image: productImage,
        name: 'Jeuveau® By the Unit',
        price: 1.6
      },
      {
        name: 'secound',
        price: 23.6
      },
      {
        name: 'Third',
        price: 55
      },
      {
        name: 'Forth',
        price: 4243
      },
      {
        name: 'Forth',
        price: 4243
      }
    ]
  )

  return (
    <ProductContext.Provider value={products}>
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
    </ProductContext.Provider>
  );
}

export default App;
