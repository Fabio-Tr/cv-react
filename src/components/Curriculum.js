
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Curriculum() {

    return (
        <div className="container col-12 justify-content-center cv-container rounded" id="cv">
        <div className="row justify-content-center">
            <h2 className="text-center yellow-text font-gothic" id="curriculumTitle">CURRICULUM VITAE</h2>

            <nav>
                <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                    <button className="nav-link active yellow-text yellow-border px-1" id="nav-home-tab"
                        data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab"
                        aria-controls="nav-home" aria-selected="true">Competenze</button>
                    <button className="nav-link yellow-text yellow-border px-1" id="nav-profile-tab"
                        data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab"
                        aria-controls="nav-profile" aria-selected="false">Formazione</button>
                    <button className="nav-link yellow-text yellow-border px-1" id="nav-contact-tab"
                        data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab"
                        aria-controls="nav-contact" aria-selected="false">Esperienze</button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">

                <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                    aria-labelledby="nav-home-tab">

                    <h4 className="font-gothic pt-3">Competenze tecniche</h4>
                    <div className="pb-2">
                        <span className="badge my-rounded-pill m-1">Git</span>
                        <span className="badge my-rounded-pill m-1">Cli</span>
                        <span className="badge my-rounded-pill m-1">Html5</span>
                        <span className="badge my-rounded-pill m-1">CSS3</span>
                        <span className="badge my-rounded-pill m-1">Javascript</span>
                        <span className="badge my-rounded-pill m-1">Bootstrap</span>
                        <span className="badge my-rounded-pill m-1 m-1">Php</span>
                        <span className="badge my-rounded-pill m-1">OOP</span>
                        <span className="badge my-rounded-pill m-1">Laravel</span>
                        <span className="badge my-rounded-pill m-1">MySql</span>
                        <span className="badge my-rounded-pill m-1">Agile methodology</span>
                        <span className="badge my-rounded-pill m-1">Scrum</span>
                    </div>
                    <h4 className="font-gothic pt-3">Competenze interpersonali</h4>
                    <div className="pb-2">
                        <span className="badge my-rounded-pill m-1">Lavoro in team</span>
                        <span className="badge my-rounded-pill m-1">Lavoro per obiettivi</span>
                        <span className="badge my-rounded-pill m-1">Organizzazione del lavoro</span>
                        <span className="badge my-rounded-pill m-1">Problem solving</span>
                    </div>

                </div>

                <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                    aria-labelledby="nav-profile-tab">
                    <h4 className="font-gothic pt-3">Istruzione e formazione</h4>
                    <p className="">
                        2021 <br/>
                        <strong className="yellow-text">Aulab Hackademy</strong> <br/>
                        Coding Bootcamp per Web Developers <br/>
                        Console Linux, pagine statiche Html/Css, basi di Javascript, Bootstrap 4 (Grid
                        system),
                        GitLab,
                        Seo
                        e posizionamento motori di ricerca <br/>
                        Sviluppo applicativi dinamici in Php, Laravel, OOP, database relazionali sql,
                        Eloquent
                        Orm
                        <br/> <br/>
                        2004 - 2009 <br/>
                        <strong className="yellow-text">Liceo Scientifico Sperimentale PNI Moscati,
                            Grottaglie (TA)</strong> <br/>
                        Diploma in materie scientifiche ed informatiche
                    </p>

                </div>

                <div className="tab-pane fade" id="nav-contact" role="tabpanel"
                    aria-labelledby="nav-contact-tab">
                    <h4 className="font-gothic pt-3">Esperienze lavorative</h4>
                    <p className="">
                        12/2021 <br/>
                        Aulab Hackademy <br/>
                        <strong className="yellow-text">Full-Stack Web Developer - Progetto
                            Presto.it</strong> <br/>
                        Simulazione lavorativa in team utilizzando il framework Scrum per la creazione di
                        un e-commerce customer-to-customer. Il progetto è presente sulla mia pagina Github.
                        <br/><br/>
                        3/06/2019 – 31/12/2019 <br/>
                        Adecco Professional Solutions <br/>
                        <strong className="yellow-text">Store Activator OTS</strong> <br/>
                        Gestione di una rete di punti vendita con passaggi settimanali prefissati con il
                        compito
                        di
                        gestire
                        gli allestimenti sia fuori banco che a lineare con attenzione alla freschezza del
                        prodotto e
                        alla
                        corretta esposizione ed i rapporti col cliente - Rifacimenti display - Rilevazioni -
                        Ordini
                        in
                        diretta - Altre varie mansioni
                        <br/> <br/>
                        1/11/2014 – 2/06/2019 <br/>
                        Sinerga Promocast – Sinerga Promostor <br/>
                        <strong className="yellow-text">Merchandiser con differenti mansioni</strong>
                        <br/> <br/>
                        2014 - 2016 <br/>
                        Annozero – Athesis – Simmat - Arcadia <br/>
                        <strong className="yellow-text">Merchindiser con differenti mansioni per differenti
                            aziende</strong>
                    </p>

                </div>

            </div>



        </div>
    </div>
    )
}

export default Curriculum