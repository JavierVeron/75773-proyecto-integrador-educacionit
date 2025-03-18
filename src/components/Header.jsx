import Logo from "./Logo"
import NavBar from "./NavBar"

const Header = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-1">
                    <Logo />
                </div>
                <div className="col-md-11 d-flex align-items-center justify-content-center">
                    <NavBar />
                </div>
            </div>
        </div>
    )
}

export default Header