import { CiFaceFrown } from "react-icons/ci";
const NotFound =()=>{

    return(
        <div className="container-page-notfound">
            <div className="container-icon">
                <CiFaceFrown className="icon-not-found"/>
            </div>
            <h1>Error 404, Page not found</h1>
        </div>
    )

}
export default NotFound;