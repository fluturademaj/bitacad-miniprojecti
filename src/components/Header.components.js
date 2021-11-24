import {Link} from "react-router-dom";
function HeaderComponents(props){
    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar navbar-dark">
                    <div> <a href="http://www.techvolog.net" className="navbar-brand">Worktrial Management App</a> </div>
                    <div className="topnav">
                        <Link to ="/">Home</Link>
                        <Link to ="/costumers">Costumers</Link>
                        <Link to ="/proucts">Products</Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponents;