import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <Link to={"/"}>
            <img src="https://vcp.com.ar/cdn/shop/files/Logo_89358e06-2276-4119-846b-1af47d3bbd4b_290x.png?v=1699846644" alt="VCP" width={145} />
        </Link>
    )
}

export default Logo