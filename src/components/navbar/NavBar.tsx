    import "./navbar.scss";

    const NavBar = () => {
        return (
            <div className="navbar">
                <div className="logo">
                    <img src="logo.svg" ></img>
                    <span>LamaAdmin</span>
                </div>
                <div className="icons">
                <img src="/search.svg" alt=""></img>
                <img src="/app.svg" alt=""></img>
                <img src="/expand.svg" alt=""></img>
                <div className="notification">
                    <img src="/notifications.svg" alt=""></img> 
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="/noavatar.png" alt=""></img> 
                    <span>Jane</span>
                </div>
                <img src="/settings.svg" alt=""></img>
                </div>
            </div>
        )
    }

    export default NavBar;