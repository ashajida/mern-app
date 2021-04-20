import { 
    Section,
    Wrapper,
    Heading,
    Form,
    AddFormContainer as Container,
    InputWrapper, 
    Input,
    FileInput,
    Button,
    FileLabel
} from "./Category.elements";
import { Fragment, useState, useContext } from "react";
import { FaUpload } from "react-icons/fa";
import {useForm} from '../../../hooks/AddCategory/useForm';
import { InputMessage } from "../../Elements.extend";
import Switch from "../Switch";
import { useHistory } from "react-router-dom";
import CategoriesContext from "../../../providers/CategoriesContext";

const CategoryForm = () => {

    // Form values
    const [values, setValues] = useState({
        image: '',
        title: ''
    });

    const [featured, setFeatured] = useState(false);

    const handleFeatured = () => {
        setFeatured(!featured);
    }

    // Error 
    const [ uploadError, setUploadError ] = useState({
        error: false,
        message: ''
    })

    const history = useHistory();

    const { categories, setCategories } = useContext(CategoriesContext);

    // Handle form submission
    const submitCb = () => {

        const {title, image} = values;
        
        const formData = new FormData();
        formData.append('file', image);
        formData.append('name', title);
        formData.append('featured', featured ? 1 : 0);

        const token = localStorage.getItem('accessToken');

        fetch('/api/categories', { 
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${JSON.parse(token)}`,
            }
        })
        .then((res) => res.json())
        .then((res) => {
            setCategories([
                ...categories,
                res
            ]);
            localStorage.setItem('categories', JSON.stringify([...categories, res]));
            history.push('/dashboard');
        })
        .catch((err) => {
            setUploadError({
                error: true,
                message: 'Something went wrong, try again'
            });
        });

    }

    const { 
        submit,
        handleChange,
        handleFileChange,
        titleError,
        imageError,
    } = useForm(values, setValues, submitCb);

    const { title }  = values;

    return (
        <Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <Heading>Add New Category</Heading>
                        {uploadError.error &&  <InputMessage>{uploadError.message}</InputMessage>}
                        <Form encType='multipart/form-data' onSubmit={submit} id="addRecipe">
                            { imageError.error && <InputMessage>{imageError.message}</InputMessage> }
                            <InputWrapper file>
                                <FileLabel for="file">
                                    <FaUpload />
                                    <FileInput name="image" type="file" accept="image/*" id="file" onChange={ handleFileChange }/>
                                </FileLabel>
                            </InputWrapper>
                            <Switch  value={ featured } handleFeatured={ handleFeatured }/>
                            { titleError.error && <InputMessage>{titleError.message}</InputMessage> }
                            <InputWrapper>
                                <Input name="title" type="text" placeholder="Title" onChange={handleChange} value={title} />
                            </InputWrapper>
                            <InputWrapper>
                                <Button type="submit" form="addRecipe">Submit</Button>
                            </InputWrapper>
                        </Form>
                    </Wrapper>
                </Container>
            </Section>
        </Fragment>
    );
}


export default CategoryForm;