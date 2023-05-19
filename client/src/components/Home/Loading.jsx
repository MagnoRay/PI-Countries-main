import styled from "./Home.module.css"
import loading from "../../image/loading.gif"

const Loading = () => {
    return(
        <div className={styled.divload}>
            <img className={styled.divimg} src={loading} alt={loading}/>
            <span className={styled.spanload}>Cargando...</span>
        </div>
    )
}

export default Loading;