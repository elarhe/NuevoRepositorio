import { useState } from 'react'
import './App.css'

import NewsCard from './Components/NewsCard/NewsCard';
import NewsDer from './Components/NewsDer/NewsDer';
import NewsAnuncio from './Components/anuncioNarrow/anuncioNarrow';
import UltimasNoticias from './Components/UltimasNoticias/ultimasNoticias';

function App() {
    const [count, setCount] = useState(0)

    const [show, setShow] = useState(false);

    return (
    <>
        <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid m-996 divs-center">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse f-basis-no" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Resultados</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Fútbol</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Videos</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex">
                    <a className="navbar-brand margin-auto" href="#">
                        <svg>
                            <path d="M43.878 12.834c-2.914-2.575-6.26-2.677-12.282-4.181-1.862-.459-2.446-1.835-2.51-2.588-.076-.753.025-2.077 1.407-2.944.761-.484 1.927-.815 3.638-.815 4.27 0 7.376 2.384 8.606 5.493.038.103.14.178.24.178h1.535c.14 0 .267-.128.267-.268V.763c0-.14-.128-.254-.267-.254h-1.546c-.063 0-.165.026-.229.153a6.313 6.313 0 0 1-.773 1.084c-.164.166-.545.319-.951.153C39.644 1.2 37.135 0 34.03 0c-6.92 0-9.481 4.194-9.481 7.61 0 1.976.937 4.614 3.435 6.08 2.738 1.619 6.628 2.46 9.468 2.907 2.522.407 4.461 1.3 4.461 3.569 0 2.51-2.65 3.53-5.677 3.53-2.865 0-5.463-.88-7.326-2.574-1.293-1.173-2.627-2.912-2.817-3.212-.19-.3-.255-.306-.414-.306h-1.345c-.101 0-.317.076-.317.306v2.881c0 .739-.622 1.199-1.179 1.199-.609 0-1.178-.497-1.178-1.173V8.206c0-5.85-3.878-8.182-9.81-8.182-4.22 0-9.455 1.912-10.152 5.62-.012.077-.076.344-.076.728 0 1.606 1.293 2.919 2.89 2.919 1.318 0 2.51-.854 2.775-2.09.253-1.16-.405-1.568-.405-2.46 0-.358.11-.745.359-1.044.637-.801 2.429-1.289 3.734-1.289 3.447 0 4.31 1.95 4.233 4.016v3.657c0 .128-.09.243-.215.255C1.977 12.642 0 16.122 0 19.831 0 23.539 2.725 26 6.996 26c4.27 0 6.12-1.453 8.327-3.824.127-.14.368-.089.443.09.71 1.923 2.192 3.734 5.425 3.734 3.232 0 4.677-1.849 5.044-3.646a.262.262 0 0 1 .456-.127C27.755 23.489 30.58 26 36.081 26c8.67 0 10.444-4.69 10.444-7.623-.012-2.587-1.04-4.027-2.649-5.543h.001zm-28.669 2.93c0 2.945-1.197 5.242-4.189 6.186-2 .59-3.782-.48-4.432-1.918-.83-1.84-.164-3.525 1.084-4.533 1.642-1.326 4.353-2.223 7.232-2.728a.268.268 0 0 1 .304.254c.012.485.001 2.74.001 2.74z"></path>
                        </svg>
                    </a>
                </div>
                <div className="collapse navbar-collapse right-menu f-basis-no">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Retos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="bi bi-envelope"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="bi bi-person-fill"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Edición <select><option>es</option><option>en</option></select></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </header>

        <main>
        <div className="container">
    <div className="row">
        
        <div className="col-12 col-md-8"> 
            <div className="row"> 
                <div className="col-12"> 
                    <NewsCard isVideo="true"></NewsCard>
                </div>
                <div className="col-6"> 
                    <NewsCard></NewsCard>
                </div>
                <div className="col-6"> 
                    <NewsCard></NewsCard>
                </div>
                <div className="col-6"> 
                    <NewsCard></NewsCard>
                </div>
                <div className="col-6"> 
                    <NewsCard></NewsCard>
                </div>
                <div className="col-6"> 
                    <NewsCard></NewsCard>
                </div>
                <div className="col-6"> 
                    <NewsCard></NewsCard>
                </div>
            </div>
            
        </div>
        <div className="col-12 col-md-4">
            <NewsDer></NewsDer>
            <NewsCard isVideo="true"></NewsCard>
            <NewsAnuncio></NewsAnuncio>
            <UltimasNoticias></UltimasNoticias>
        </div>
    </div>
</div>

        </main>

        <footer></footer>

    </>
    )
}

export default App
