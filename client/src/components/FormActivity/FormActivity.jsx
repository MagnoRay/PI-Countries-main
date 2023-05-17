import { Link } from "react-router-dom";
import styled from "./FormActivity.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { filterDuration, getCountries, getFilterActivity, getFilterCountry, insertActiviy } from "../../redux/actions";
import { validate } from "./validate";

const FormActivity = () => {
    const dispatch = useDispatch()

    const countryname = useSelector((state)=>state.country)
    const arrduration = useSelector((state)=>state.duration)

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryname: []
    });
    console.log("input", input);
    const [errors, setErrors] = useState("");

    useEffect(()=>{
        dispatch(getFilterCountry());
        dispatch(filterDuration());
    }, [dispatch]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const {name, difficulty, duration, season, countryname} = input;
        if(name && difficulty && duration && season && countryname !== 0){
            dispatch(insertActiviy(input))
            alert('Actividad Creado Satisfactoriamente.')
        }else{
            alert('Falta información en algún campo.')
        }
        setInput({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countryname: []
        })
        dispatch(getCountries());
        dispatch(getFilterActivity());
    }

    let disabledBtn = Object.values(validate(input)).length > 0;

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(
            validate({
                ...input,
                [e.target.name]: [e.target.value]
            })
        )
    }

    useEffect(()=>{
        setErrors(
            validate({
                ...input
            })
        )
    }, [input])

    const handleSelect = (e) => {
        if(!input.countryname.includes(e.target.value)){
            setInput({
                ...input,
                countryname: [...input.countryname, e.target.value]
            })
        }
    }

    const handleDeleteCountry = (e) =>{
        setInput({
            ...input,
            countryname: input.countryname.filter((t)=>t !== e)
        })
    }

    

    return(
        <div className={styled.divform}>
            <Link className={styled.linkback} to="/home">
                <button className={styled.buttonback}>Back</button>
            </Link>
            <form className={styled.formco} onSubmit={(e)=>handleSubmit(e)}>
                <ul className={styled.ul1}>
                    <li>
                        <label>Actividad </label>
                        <input type="text" name="name" value={input.name} onChange={(e)=>handleInput(e)} className={errors.name? styled.warning : styled.textcorrect}/>
                        {errors.name ?<p className={styled.warningtext}>{errors.name}</p>:''}
                    </li>
                    <li>
                        <label>Dificultad </label>
                        <select name="difficulty" value={input.difficulty} onChange={(e)=>handleInput(e)} className={errors.difficulty? styled.warning : styled.textcorrect }>
                            <option defaultValue="" disabled={input.difficulty}>Dificultad</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>  
                        {errors.difficulty? <p className={styled.warningtext}>{errors.difficulty}</p>:''}
                    </li>
                    <li>
                        <label>Duración </label>
                        <select name="duration" value={input.duration} onChange={(e)=>handleInput(e)} className={errors.duration? styled.warning : styled.textcorrect}>
                            <option defaultValue="" disabled={input.duration}>Duración</option>
                            {
                                arrduration.map((d)=>{
                                    return(
                                        <option key={d}>
                                            {d}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        {errors.duration? <p className={styled.warningtext}>{errors.duration}</p>:''}
                    </li>
                    <li>
                        <label>Temporada </label>
                        <select name="season" value={input.season} onChange={(e)=>handleInput(e)} className={errors.season? styled.warning : styled.textcorrect}>
                            <option defaultValue="" disabled={input.season} >Estacion</option>
                            <option value="Invierno">Invierno</option>
                            <option value="Primavera">Primavera</option>
                            <option value="Verano">Verano</option>
                            <option value="Otoño">Otoño</option>
                        </select>
                        {errors.season? <p className={styled.warningtext}>{errors.season}</p>:''}
                    </li>
                    <li>
                        <label>País </label>
                        <select disabled={input.countryname>=2} onChange={(e)=>handleSelect(e)} defaultValue="title" className={errors.countryname? styled.warning : styled.textcorrect}>
                            <option name="countryname" value="title" disabled defaultValue="">País</option>
                            {
                                countryname.map((c)=>{
                                    return(
                                        <option key={c}>
                                        {c[0].toUpperCase()+c.slice(1)}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        <ul>
                            {input.countryname.map((c)=>{
                                return(
                                    <li key={c} className={styled.licountry}>
                                    {c[0].toUpperCase()+c.slice(1)}
                                    <button onClick={()=>handleDeleteCountry(c)} className={styled.deletebuttonco}> 
                                        x
                                    </button>
                                    </li>
                                )
                            })}
                        </ul>
                        {errors.countryname? <p className={styled.warningtext}>{errors.countryname}</p>:''}
                    </li>
                    <button type="submit" disabled={disabledBtn} className={styled.createbutton}>Crear</button>
                </ul>
            </form>
        </div>
    )
}

export default FormActivity;