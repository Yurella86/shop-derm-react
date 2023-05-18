import '../../style/extend.scss';
import { Categories, MiniCart, Compare, HeaderNavMenu } from '..';
import logo from '../../images/logo_mine.png';



function Header() {
    return (
        <div className='header-container'>
            <div className='header-mob-container'>mob</div>
            <div className='header-desk-container'>
                <div className='header-fl-container'>
                    <div className='hd-block left-column'>
                        <div className='logo-wrapper'>
                            <img src={logo} alt="Plastic Surgery and MedSpa" />
                        </div>
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

                                <Compare />
                                <MiniCart />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='nav-menu'>

                <Categories
                    onclickItem={(name) => console.log(name)}
                    items={
                        ['Services', 'Products', 'Specials', 'E-Gift Card']
                    } />

            </div>
        </div>
    )
}

export default Header;