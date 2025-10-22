import "./ultimasNoticias.css"

function UltimasNoticias(props) {
    let auxClass = props.auxClass ? props.auxClass : "col-12";
    auxClass += " card-news-der"

    return (
        
        <div className={auxClass}>
            <div className="card-image-der">
                <div className="div-title-ultimas">
                    <div className="d-flex">
                        <div>19:00</div>
                        <div>BAYERN-BRUJAS</div>
                    </div>
                    <div>Bayern - Brujas en directo: UEFA Champions League hoy en vivo</div>
                </div>
                <div className="div-title-ultimas">
                    <div className="d-flex">
                        <div>19:00</div>
                        <div>BAYERN-BRUJAS</div>
                    </div>
                    <div>Bayern - Brujas en directo: UEFA Champions League hoy en vivo</div>
                </div>
                <div className="div-title-ultimas">
                    <div className="d-flex">
                        <div>19:00</div>
                        <div>BAYERN-BRUJAS</div>
                    </div>
                    <div>Bayern - Brujas en directo: UEFA Champions League hoy en vivo</div>
                </div>
                <div className="div-title-ultimas">
                    <div className="d-flex">
                        <div>19:00</div>
                        <div>BAYERN-BRUJAS</div>
                    </div>
                    <div>Bayern - Brujas en directo: UEFA Champions League hoy en vivo</div>
                </div>
                <div className="div-title-ultimas">
                    <div className="d-flex">
                        <div>19:00</div>
                        <div>BAYERN-BRUJAS</div>
                    </div>
                    <div>Bayern - Brujas en directo: UEFA Champions League hoy en vivo</div>
                </div>
            </div>
            
        </div>

    );

}

export default UltimasNoticias;