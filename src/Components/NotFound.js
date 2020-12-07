function NotFound(){
    return(
        <div className="container text-center py-5 mt-5">
            <div className="py-5 my-5">
                <div className="display-4">
                    <h1 className="text-danger"><span>Oops!.. </span>Page Not Found</h1>
                </div>  
                <div>
                    <p className="lead">Sorry, Could'nt find what you are looking for...</p>
                </div>
            </div>
        </div>
    );
}

export default NotFound;