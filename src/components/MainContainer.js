import {Link} from "react-router-dom"

function MainContainer({active, children}) {
    return (
        <>
            <div className="link-container">
                <Link className={active === "home" ? "link link-active" : "link"} to="/">Search</Link>
                <Link className={active === "history" ? "link link-active" : "link"} to="/history">History</Link>
            </div>
            <main>
                {children}
            </main>
        </>
    )
}

export default MainContainer