import logoImg from '../asset/image/logo_puma.png'

const Header = () => {
    const menu_arr = [
        ["Men", "/men"],
        ["Women", "/women"],
        ["New Arrivals", "/arrivals"],
        ["Kids", "/kids"],
        ["Collaborations", "/collaborations"],
    ];

    return (
        <>
            <header className="header-space h-60">
                <div className="wrap-1 flex-style-3 h-100-per">
                    <div className="logo">
                        <a href="/">
                            <img className="d-block h-40" src={logoImg}/>
                        </a>
                    </div>
                    <nav>
                        <ul className="flex-style-2 col-gap-20">
                            {menu_arr.map((v, i) => (
                                <li key={i}>
                                    <a href={v[1]}>{v[0]}</a> 
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
export default Header;