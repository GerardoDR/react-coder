const PageNotFound = () => {
  return (
    <div id="notFound" className="mt">
      <img src="/assets/pageNotFound.jpg" alt="page not found"></img>
      <h2>¡Lo lamentamos!</h2>
      <p>{`" ${window.location} " no es una dirección válida en nuestra tienda o se encuentra fuera de servicio`}</p>
    </div>
  );
};

export default PageNotFound;
