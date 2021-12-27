const PageNotFound = () => {
    return (
        <div id="notFound" className="mt">
            <img src="/assets/pageNotFound.jpg" alt="page not found"></img>
            <p>{`Lo lamentamos, "${window.location}" no es una dirección válida en nuestra tienda.`}</p>
        </div>
    )
}

export default PageNotFound
