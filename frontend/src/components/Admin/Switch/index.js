import { Fragment } from "react"
import { SwitchHeading, Input, Label, SwitchWrapper, InputWrapper } from "./Switch.elements";

const Switch = ({ handleFeatured, value }) => {

    return(
        <Fragment>
            <InputWrapper featured>
                <SwitchHeading>is Featured?</SwitchHeading>
                <SwitchWrapper for="featured"  isActive={value ? true : false}>
                    <Input name="featured" type='checkbox' id="featured" featured value={ value } />
                    <Label onClick={handleFeatured} isActive={value ? true : false}></Label>
                </SwitchWrapper>
            </InputWrapper>
        </Fragment>
    );
}

export default Switch;