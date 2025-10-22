import "./NewsDer.css"

function NewsDer(props) {

    /*
        let auxClass;

        if(props.auxClass != undefined && props.auxClass != null){
            auxClass = props.auxClass;
        } else {
            auxClass = "col-12";
        }

        ES IGUAL A :
    */

    /* 
        Parcialmente igual a :

        let auxClass = props.auxClass != undefined && props.auxClass != null ? props.auxClass : "col-12";
        let auxClass = props.auxClass ? props.auxClass : "col-12";
    */
    let auxClass = props.auxClass ? props.auxClass : "col-12";
//    let isVideo = props.isVideo != undefined && props.isVideo != null ? props.isVideo : false;


    auxClass += " card-news-der"

    return (
        
        <div className={auxClass}>
            <div className="card-image-der">
                <a href="#">
                    <div className="card-image" style={{backgroundImage: `url("https://tpc.googlesyndication.com/simgad/16853709048225951470")`}}>
                        
                    </div>
                </a>
            </div>
            
        </div>

    );

}

export default NewsDer;