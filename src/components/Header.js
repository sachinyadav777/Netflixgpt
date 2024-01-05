import { LOGO_URL } from "../utils/Image";

const Header = ()=>{
    return(
        <div className="absolute w-full z-10">
            <img src={LOGO_URL} alt="logo" className="ml-4 w-56"/>
        </div>
    )
}

export default Header;