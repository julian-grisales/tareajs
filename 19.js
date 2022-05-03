let letra= prompt("ingrasa letra: " );

function validator(letra) 
{
    if(letra.length > 1)
    {
        return "No se puede procesar el dato"
    }
    else
    {
        let helper = false;
        switch(letra)
        {
            case "a":
                return "Es vocal";
                break;

            case "e":
                return "Es vocal";
                break;

            case "i":
                return "Es vocal";
                break;

            case "o":
                return "Es vocal";
                break;

            case "u":
                return "Es vocal";
                break;

            default:
                helper = true;
        }
        if(helper)
        {
            return "No es una vocal"
        }
    }
}

console.log=(validator(letra));