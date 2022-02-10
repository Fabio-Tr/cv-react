function Projects() {

    return (
        <div className="container col-12 d-flex align-items-center project-container rounded pt-3" id="project">
            <div className="row d-flex align-items-center">

                <h2 className="col-12 yellow-text font-gothic text-start" id="projectTitle">I MIEI PROGETTI</h2>

                <div className="card col-12 col-md-3 pt-3 card-project">
                    <img src="/img/peterhouse-home.png" className="card-img-top"
                        alt="Anteprima progetto Peters house"/>
                        <div className="card-body">
                            <h5 className="card-title">Peter's House</h5>
                            <p className="card-text">Progetto per un sito vetrina di due case vacanze (ancora in
                                sviluppo)</p>
                            <a href="http://peters-house.herokuapp.com/" className="btn btn-primary">Vai al
                                sito</a>
                        </div>
                </div>
            </div>
        </div>
    )


}

export default Projects

