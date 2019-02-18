const root = document.getElementById('root');

let HeaderComp = () => {
    return (
        <header className="header">
        <div className="container">
            <div className="header__navigation relative flex-space-btw">
                <div id="burger" className="header__navigation__burger flex-space-btw">
                    <div className="header__navigation__burger__items"></div>
                    <div className="header__navigation__burger__items"></div>
                    <div className="header__navigation__burger__items"></div>
                </div>
                <a id="logo" href="javascript:void(0)" className="absolute header__navigation__logo flex-space-btw"></a>
                <a id="logo" href="javascript:void(0)" className="absolute header__navigation__logo flex-space-btw">
                    <img src="assets/img/logo.png" alt="" className="header__navigation__logo__img"/>
                    <h1 className="header__navigation__logo__heading">tinyone</h1>
                </a>
                <ul id="navList" className="absolute header__navigation__list flex-space-btw">
                    <li className="header__navigation__list__items"><a href="#">Home</a></li>
                    <li className="header__navigation__list__items"><a href="#">Contact</a></li>
                    <li className="header__navigation__list__items"><a href="#">About us</a></li>
                    <li className="header__navigation__list__items"><a href="#">News</a></li>
                    <i id="navClose" className="fas fa-times header__navigation__list__icon"></i>
                </ul>
                <div className="absolute header__navigation__icons flex-space-btw">
                    <img src="assets/img/facebook.png" alt="" className="header__navigation__icons__items"/>
                    <img src="assets/img/twitter.png" alt="" className="header__navigation__icons__items"/>
                    <img src="assets/img/google+.png" alt="" className="header__navigation__icons__items"/>
                    <img src="assets/img/pinterest.png" alt="" className="header__navigation__icons__items"/>
                </div>
            </div>
            <div className="header__info">
                <h2 className="header__info__heading">Inspire your inspiration</h2>
                <p className="header__info__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                    Praesent vitae eros eget tellus tristique bibendum. Donec  <br/>
                    rutrum sed sem quis venenatis.
                </p>
                <a href="javascript:void(0)" className="header__info__link">GET START</a>
            </div>
            <img src="assets/img/arrow.png" className="header__arrow"/>
        </div>
    </header>
    )
}

let Features = () => {
    return (
        <section className="features">
        <div className="container">
            <h3 className="features__heading">Tinyone features</h3>
            <h5 className="features__under-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget te lus <br/>
                                                tristique bibendum. Donec rutrum sed sem quis venenatis.
            </h5>
            <div className="features__articles flex-space-btw">
                <article className="features__articles__items flex">
                    <img src="assets/img/features1.png" alt="" className="features__articles__items__img"/>
                    <div>
                        <h3 className="features__articles__items__heading">Fully Responsive</h3>
                        <p className="features__articles__items__description">Lorem ipsum dolor sit amet,<br/> 
                                                                       consectetur adipiscing elit. <br/> 
                                                                       Praesent vitae eros eget tellus <br/> 
                                                                       tristique bibendum.
                        </p>
                    </div>
                </article>
                <article className="features__articles__items flex">
                    <img src="assets/img/features2.png" alt="" className="features__articles__items__img"/>
                    <div>
                        <h3 className="features__articles__items__heading">Fully Layered PSD</h3>
                        <p className="features__articles__items__description">Lorem ipsum dolor sit amet,<br/> 
                                                                          consectetur adipiscing elit. <br/> 
                                                                          Praesent vitae eros eget tellus <br/> 
                                                                          tristique bibendum.
                        </p>
                    </div>
                </article>
                <article className="features__articles__items flex">
                    <img src="assets/img/features3.png" alt="" className="features__articles__items__img"/>
                    <div>
                        <h3 className="features__articles__items__heading">Font Awesome Icons</h3>
                        <p className="features__articles__items__description">Lorem ipsum dolor sit amet,<br/> 
                                                                          consectetur adipiscing elit. <br/> 
                                                                          Praesent vitae eros eget tellus <br/> 
                                                                          tristique bibendum.
                        </p>
                    </div>
                </article>
                <article className="features__articles__items flex">
                    <img src="assets/img/features4.png" alt="" className="features__articles__items__img"/>
                    <div>
                        <h3 className="features__articles__items__heading">HTML5 & CSS3</h3>
                        <p className="features__articles__items__description">Lorem ipsum dolor sit amet,<br/> 
                                                                            consectetur adipiscing elit. <br/> 
                                                                            Praesent vitae eros eget tellus <br/> 
                                                                            tristique bibendum.
                        </p>
                    </div>
                </article>
                <article className="features__articles__items flex">
                    <img src="assets/img/features5.png" alt="" className="features__articles__items__img"/>
                    <div>
                        <h3 className="features__articles__items__heading">Email Template</h3>
                        <p className="features__articles__items__description">Lorem ipsum dolor sit amet,<br/> 
                                                                          consectetur adipiscing elit. <br/> 
                                                                          Praesent vitae eros eget tellus <br/> 
                                                                          tristique bibendum.
                        </p>
                    </div>
                </article>
                <article className="features__articles__items flex">
                    <img src="assets/img/features6.png" alt="" className="features__articles__items__img"/>
                    <div>
                        <h3 className="features__articles__items__heading">Free to download</h3>
                        <p className="features__articles__items__description">Lorem ipsum dolor sit amet,<br/> 
                                                                          consectetur adipiscing elit. <br/> 
                                                                          Praesent vitae eros eget tellus <br/> 
                                                                          tristique bibendum.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    </section>
    )
}

let Pricing = () => {
    return (
        <section className="pricing">
        <div className="container">
            <h2 className="pricing__heading">Pricing And Free Trial</h2>
            <h5 className="pricing__under-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget te lus <br/>
                                                tristique bibendum. Donec rutrum sed sem quis venenatis.
            </h5>
            <div className="pricing__columns flex-space-around">
                <div className="pricing__columns__items flex-space-btw">
                    <div className="pricing__columns__items__circle flex-center-x2">
                        <img src="assets/img/pricing1.png" alt=""/>
                    </div>
                    <div className="flex-space-btw pricing__columns__items__heading-box">
                        <h3 className="pricing__columns__items__heading">Basic</h3>
                        <p className="pricing__columns__items__description">Lorem ipsum dolor sit amet, <br/> 
                                                                        consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="flex-space-btw pricing__columns__items__price-box">
                        <h4 className="pricing__columns__items__price">FREE</h4>
                        <div className="pricing__columns__items__line"></div>
                        <p className="pricing__columns__items__time">free forever</p>
                    </div>
                    
                    <div className="pricing__columns__items__link-box flex-center-x2">
                        <a href="javascript:void(0)" className="pricing__columns__items__link-box__link">GET FREE NOW</a>
                    </div>
                </div>
                <div className="pricing__columns__items flex-space-btw">
                    <div className="pricing__columns__items__circle-dark flex-center-x2">
                        <img src="assets/img/pricing2.png" alt=""/>
                    </div>
                    <div className="flex-space-btw pricing__columns__items__heading-box">
                        <h3 className="pricing__columns__items__heading">Standard</h3>
                        <p className="pricing__columns__items__description">Lorem ipsum dolor sit amet, <br/> 
                                                                        consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="flex-space-btw pricing__columns__items__price-box">
                        <h4 className="pricing__columns__items__price">$99</h4>
                        <div className="pricing__columns__items__line"></div>
                        <p className="pricing__columns__items__time">month</p>
                    </div>
                    <div className="pricing__columns__items__link-box flex-center-x2">
                        <a href="javascript:void(0)" className="pricing__columns__items__link-box__link">UPGRADE</a>
                    </div>
                </div>
                <div className="pricing__columns__items flex-space-btw">
                    <div className="pricing__columns__items__circle flex-center-x2">
                        <img src="assets/img/pricing3.png" alt=""/>
                    </div>
                    <div className="flex-space-btw pricing__columns__items__heading-box">
                        <h3 className="pricing__columns__items__heading">Enterprice</h3>
                        <p className="pricing__columns__items__description">Lorem ipsum dolor sit amet, <br/> 
                                                                        consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="flex-space-btw pricing__columns__items__price-box">
                        <h4 className="pricing__columns__items__price">$199</h4>
                        <div className="pricing__columns__items__line"></div>
                        <p className="pricing__columns__items__time">month</p>
                    </div>
                    <div className="pricing__columns__items__link-box flex-center-x2">
                        <a href="javascript:void(0)" className="pricing__columns__items__link-box__link">LEARN MORE</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

let Works = () => {
    return (
        <section className="works">
        <div className="container">
            <h2 className="works__heading">Our works</h2>
            <h5 className="works__under-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget te lus <br/>
                                               tristique bibendum. Donec rutrum sed sem quis venenatis.
            </h5>
            <div className="works__list flex-space-btw">
                <div className="works__list__items flex-space-btw">
                    <img src="assets/img/works1.png" alt=""/>
                    <h3 className="works__list__items__heading">Fully Responsive</h3>
                    <p className="works__list__items__description">Design / Branding</p>
                </div>
                <div className="works__list__items flex-space-btw">
                    <img src="assets/img/works2.png" alt=""/>
                    <h3 className="works__list__items__heading">Font Awesome Icons</h3>
                    <p className="works__list__items__description">Design / Branding</p>
                </div>
                <div className="works__list__items flex-space-btw">
                    <img src="assets/img/works3.png" alt=""/>
                    <h3 className="works__list__items__heading">HTML5 & CSS3</h3>
                    <p className="works__list__items__description">App design / development</p>
                </div>
                <div className="works__list__items flex-space-btw">
                    <img src="assets/img/works4.png" alt=""/>
                    <h3 className="works__list__items__heading">Various Layouts</h3>
                    <p className="works__list__items__description">Branding</p>
                </div>
                <div className="works__list__items flex-space-btw">
                    <img src="assets/img/works5.png" alt=""/>
                    <h3 className="works__list__items__heading">Fully Responsive</h3>
                    <p className="works__list__items__description">Design / Branding</p>
                </div>
                <div className="works__list__items flex-space-btw">
                    <img src="assets/img/works6.png" alt=""/>
                    <h3 className="works__list__items__heading">Font Awesome Icons</h3>
                    <p className="works__list__items__description">Design / Branding</p>
                </div>
                <div className="works__list__items flex-space-btw">
                    <img src="assets/img/works7.png" alt=""/>
                    <h3 className="works__list__items__heading">HTML5 & CSS3</h3>
                    <p className="works__list__items__description">App design / development</p>
                </div>
                <div className="works__list__items flex-space-btw">
                    <img src="assets/img/works8.png" alt=""/>
                    <h3 className="works__list__items__heading">Various Layouts</h3>
                    <p className="works__list__items__description">Branding</p>
                </div>
            </div>
        </div>
    </section>
    )
}

let Team = () => {
    return (
        <section className="team">
        <div className="container">
            <h2 className="team__heading">Our team</h2>
            <h5 className="team__under-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget te lus <br/>
                                             tristique bibendum. Donec rutrum sed sem quis venenatis.
            </h5>
            <div className="flex-space-btw team__staff-list">
                <div className="team__staff-list__items flex-space-btw">
                    <img src="assets/img/staff1.png" alt=""/>
                    <div className="team__staff-list__items__name-box flex-space-btw">
                        <h4 className="team__staff-list__items__name-box__name">John Doe</h4>
                        <h5 className="team__staff-list__items__name-box__proffesion">UI Designer</h5>
                    </div>
                    <p className="team__staff-list__items__description">Lorem ipsum dolor sit amet, <br/>
                                                                    consectetur adipiscing elit
                    </p>
                    <div className="team__staff-list__items__social-icons flex-space-btw">
                        <img src="assets/img/staff-social1.png" alt=""/>
                        <img src="assets/img/staff-social2.png" alt=""/>
                        <img src="assets/img/staff-social3.png" alt=""/>
                    </div>
                </div>
                <div className="team__staff-list__items flex-space-btw">
                    <img src="assets/img/staff2.png" alt=""/>
                    <div className="team__staff-list__items__name-box flex-space-btw">
                        <h4 className="team__staff-list__items__name-box__name">John Doe</h4>
                        <h5 className="team__staff-list__items__name-box__proffesion">UI Designer</h5>
                    </div>
                    <p className="team__staff-list__items__description">Lorem ipsum dolor sit amet, <br/>
                                                                    consectetur adipiscing elit
                    </p>
                    <div className="team__staff-list__items__social-icons flex-space-btw">
                        <img src="assets/img/staff-social1.png" alt=""/>
                        <img src="assets/img/staff-social2.png" alt=""/>
                        <img src="assets/img/staff-social3.png" alt=""/>
                    </div>
                </div>
                <div className="team__staff-list__items flex-space-btw">
                    <img src="assets/img/staff3.png" alt=""/>
                    <div className="team__staff-list__items__name-box flex-space-btw">
                        <h4 className="team__staff-list__items__name-box__name">John Doe</h4>
                        <h5 className="team__staff-list__items__name-box__proffesion">UI Designer</h5>
                    </div>
                    <p className="team__staff-list__items__description">Lorem ipsum dolor sit amet, <br/>
                                                                    consectetur adipiscing elit
                    </p>
                    <div className="team__staff-list__items__social-icons flex-space-btw">
                        <img src="assets/img/staff-social1.png" alt=""/>
                        <img src="assets/img/staff-social2.png" alt=""/>
                        <img src="assets/img/staff-social3.png" alt=""/>
                    </div>
                </div>
                <div className="team__staff-list__items flex-space-btw">
                    <img src="assets/img/staff4.png" alt=""/>
                    <div className="team__staff-list__items__name-box flex-space-btw">
                        <h4 className="team__staff-list__items__name-box__name">John Doe</h4>
                        <h5 className="team__staff-list__items__name-box__proffesion">UI Designer</h5>
                    </div>
                    <p className="team__staff-list__items__description">Lorem ipsum dolor sit amet, <br/>
                                                                    consectetur adipiscing elit
                    </p>
                    <div className="team__staff-list__items__social-icons flex-space-btw">
                        <img src="assets/img/staff-social1.png" alt=""/>
                        <img src="assets/img/staff-social2.png" alt=""/>
                        <img src="assets/img/staff-social3.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

let Stats = () => {
    return (
        <section className="stats">
        <div className="container">
            <h2 className="stats__heading">Stats & Testimonial</h2>
            <h5 className="stats__under-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget te lus <br/>
                                            tristique bibendum. Donec rutrum sed sem quis venenatis.
            </h5>
            <div className="stats__info flex-space-btw">
                <div className="stats__info__items flex-space-btw">
                    <img src="assets/img/stats1.png" alt=""/>
                    <div className="stats__info__items__number-box flex-space-btw">
                        <h4 className="stats__info__items__number-box__number">20</h4>
                        <h5 className="stats__info__items__number-box__name">Products</h5>
                    </div>
                </div>
                <div className="stats__info__items flex-space-btw">
                    <img src="assets/img/stats2.png" alt=""/>
                    <div className="stats__info__items__number-box flex-space-btw">
                        <h4 className="stats__info__items__number-box__number">120,00</h4>
                        <h5 className="stats__info__items__number-box__name">Downloads</h5>
                    </div>
                </div>
                <div className="stats__info__items flex-space-btw">
                    <img src="assets/img/stats3.png" alt=""/>
                    <div className="stats__info__items__number-box flex-space-btw">
                        <h4 className="stats__info__items__number-box__number">1200</h4>
                        <h5 className="stats__info__items__number-box__name">Customers</h5>
                    </div>
                </div>
                <div className="stats__info__items flex-space-btw">
                    <img src="assets/img/stats4.png" alt=""/>
                    <div className="stats__info__items__number-box flex-space-btw">
                        <h4 className="stats__info__items__number-box__number">900</h4>
                        <h5 className="stats__info__items__number-box__name">Like</h5>
                    </div>
                </div>
            </div>
            <div className="stats__costumer flex-space-btw">
                <img src="assets/img/stats-costumer.png" alt=""/>
                <div className="stats__costumer__name-box">
                    <h4 className="stats__costumer__name-box__name">John Doe</h4>
                    <h5 className="stats__costumer__name-box__proffesion">From Wordpress</h5>
                </div>
                <div className="stats__costumer__comment relative">
                    <img className="absolute stats__costumer__comment__top" src="assets/img/top.png" alt=""/>
                    <p className="stats__costumer__comment__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                                                              Praesent vitae eros eget tellus tristique bibendum. Donec <br/>
                                                              rutrum sed sem quis venenatis.                                    
                    </p>
                    <img className="absolute stats__costumer__comment__bottom" src="assets/img/bottom.png" alt=""/>
                </div>
            </div>
        </div>
    </section>
    )
}

let Contact = () => {
    return (
        <section className="contact">
        <div className="container">
            <h2 className="contact__heading">Keep in touch with us</h2>
            <h5 className="contact__under-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget te lus <br/>
                                             tristique bibendum. Donec rutrum sed sem quis venenatis.
            </h5>
            <div className="contact__info-list flex-space-btw">
                <div className="contact__info-list__items flex-space-btw">
                    <img src="assets/img/contact1.png" alt=""/>
                    <div className="contact__info-list__items__text-box flex-space-btw">
                        <h4 className="contact__info-list__items__text-box__heading">Address</h4>
                        <p className="contact__info-list__items__text-box__description">66, Dang Van ngu, Dong Da, <br/>
                                                                                    Ha noi, Vietnam
                        </p>
                    </div>
                </div>
                <div className="contact__info-list__items flex-space-btw">
                    <img src="assets/img/contact2.png" alt=""/>
                    <div className="contact__info-list__items__text-box flex-space-btw">
                        <h4 className="contact__info-list__items__text-box__heading">E-mail</h4>
                        <p className="contact__info-list__items__text-box__description">contact@halovietnam.com</p>
                    </div>
                </div>
                <div className="contact__info-list__items flex-space-btw">
                    <img src="assets/img/contact3.png" alt=""/>
                    <div className="contact__info-list__items__text-box flex-space-btw">
                        <h4 className="contact__info-list__items__text-box__heading">Phone</h4>
                        <p className="contact__info-list__items__text-box__description">+844 1234 56789</p>
                    </div>
                </div>
            </div>
            <form action="bidza.php" method="GET" className="contact__form flex-space-btw">
                <input placeholder="Email" name="Email" type="text" className="contact__form__input"/>
                <input placeholder="Full name" name="FullName" type="text" className="contact__form__input"/>
                <textarea className="contact__form__textarea" placeholder="Message" name="Message"></textarea>
                <input className="contact__form__submit" type="submit" value="SEND MESSAGE"/>
            </form>
        </div>
    </section>
    )
}

let Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
            <h2 className="footer__heading">Keep in touch with us</h2>
            <h5 className="footer__under-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget te lus <br/>
                                               tristique bibendum. Donec rutrum sed sem quis venenatis.
            </h5>
            <form action="bidza.php" method="get" className="footer__form flex-space-btw">
                <input type="text" name="Email" placeholder="Enter your email to update" className="footer__form__input"/>
                <input type="submit" value="SUBMIT" className="footer__form__submit"/>
            </form>
            <ul className="footer__navigation flex-space-btw">
                <li className="footer__navigation__items">HALOVETNAM LTD <br/>
                                                      66, Dang van ngu, Dong Da <br/>
                                                      Hanoi, Vietnam <br/>
                                                      contact@halovietnam.com <br/>
                                                      +844 35149182
                </li>
                <li className="footer__navigation__items">Examples <br/>
                                                      Shop <br/> 
                                                      License
                </li>
                <li className="footer__navigation__items">Contact <br/>
                                                      About <br/>
                                                      Privacy <br/>
                                                      Terms
                </li>
                <li className="footer__navigation__items">Download <br/>
                                                      Support <br/>
                                                      Documents
                </li>
                <li className="footer__navigation__items">Media <br/>
                                                      Blog <br/>
                                                      Forums
                </li>
            </ul>
        </div>
    </footer>
    )
}

let collector = (<div>
                    <HeaderComp/>
                    <Features/>
                    <Pricing/>
                    <Works/>
                    <Team/>
                    <Stats/>
                    <Contact/>
                    <Footer/>
                </div>);

ReactDOM.render(collector, root);