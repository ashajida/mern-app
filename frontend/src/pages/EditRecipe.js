import { Fragment } from "react";
import Edit from "../components/Admin/EditRecipe";


const EditRecipe = ({match: { params }}) => {

    return(
        <Fragment>
           <Edit id={params.id}/>
        </Fragment>
    );
}

export default EditRecipe;