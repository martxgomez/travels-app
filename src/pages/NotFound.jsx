import "./NotFound.css"

function NotFoundPage(){
    return(
        <div className="NotFoundContainer">
        <h1 className="notFoundTitle">404</h1>
        <p className="Oops">oops...Page not found !</p>
        <img className="errorPage"/>
        </div>
    )
}


export default NotFoundPage;