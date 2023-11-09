import '../../style/extend.scss';
import { Categories, MiniCart, Compare, HeaderNavMenu } from '../../components';
import logo from '../../images/logo_mine.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {

    const [category] = useState(['Services', 'All Products', 'Specials', 'Gift Card'])

    return (
        <div className='header-container'>
            <div className='header-mob-container'>
                <div className='logo-wrapper'>
                    <Link to='/'>
                        <img src={logo} alt="Plastic Surgery and MedSpa" />
                    </Link>
                </div>
            </div>
            <div className='main-container header-desk-container'>
                <div className='header-fl-container'>
                    <div className='hd-block left-column'>
                        <Link to='/'>
                            <div className='logo-wrapper'>
                                <img src={logo} alt="Plastic Surgery and MedSpa" />
                            </div>
                        </Link>
                    </div>
                    <div className='hd-block central-column'>
                        <div className='hd-item wrapper-central-column'>
                            <div className='top-welcome'>Welcome to our Online Store</div>
                            <div className='header-search'>
                                <form method="get" autoComplete="off">
                                    <div className='field search'>
                                        <input type='text' placeholder="Enter Keyword or Item" >
                                        </input>
                                        <div className='search'>S</div>
                                        <div className='close'>X</div>
                                        <div className='search-content'>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='hd-block right-column'>
                        <div className='hd-item nav-wrapper'>
                            <HeaderNavMenu />
                            <div className='hd-right-icons'>
                                <div className='item'>
                                    <Compare />
                                </div>
                                <div className='item'>
                                    <MiniCart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main-menu'>
                <div className='desk-main-menu'>
                    <Categories
                        onclickItem={(name) => console.log(name)}
                        items={category} />
                </div>
                <div class="mob-main-menu">
                    <div className='wrapper-mob-menu'>
                        <div className='flex-hr-container'>
                            <div className="item">burger</div>
                            <div className="item">search</div>
                            <div className="item">user</div>
                            <div className="item">compare</div>
                            <div className="item">cart</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;