
const soloString = (n) => {
    if (/^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$/.test(n)) {
        return true;
      }
      return false;
}
// input.name.length <3
export const validate = (input) => {
    let errors = {}
    if(!input.name){
        errors.name = "Por favor ingresa una actividad";
    }
    else if(input.name.length < 3) errors.name = "Actividad debe tener mayor a tres caracteres";
    else if(input.name.length > 25) errors.name = "Actividad debe tener menor a veinticinco caracteres";
    else if(!soloString(input.name)) errors.name = "Solo Caracteres";
    else if(!input.difficulty) errors.difficulty = "seleccionar una dificultad";
    else if(!input.duration) errors.duration = "Ingresa tiempo de duración";
    else if(input.duration < '01:00' || input.duration > '12:00' ) errors.duration = "Duración entre 1 y 12 horas"
    else if(!input.season) errors.season = "Seleccionar una estación";
    else if(input.countryname.length===0) errors.countryname = "Debe seleccionar al menos un país";

    return errors;
}