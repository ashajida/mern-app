import { 
    Section,
    Wrapper,
    Heading,
    Form,
    AddFormContainer as Container,
    InputWrapper, 
    Input,
    FileInput,
    Textarea,
    AddFormButton as Button,
    FileLabel,
    Select,
    Option,
} from "./AddRecipe.elements";
import { Fragment, useState, useEffect, useContext } from "react";
import { FaUpload } from "react-icons/fa";
import { useForm } from '../../../hooks/AddRecipe/useForm';
import { InputMessage } from "../../Elements.extend";
import { useHistory } from "react-router-dom";
import Switch from "../Switch";
import RecipesContext from "../../../providers/RecipesContext";

const AddRecipeForm = () => {

    // Form values
    const [values, setValues] = useState({
        title: '',
        content: '',
        image: ''
    });
    const [featured, setFeatured] = useState(0);
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);

    // Error alerts
    const [uploadError, setUploadError] = useState({
        error: false,
        message: '',
    })

    // Recipes Context
    const { recipes, setRecipes } = useContext(RecipesContext);

    const cachedCategories= localStorage.getItem('categories');

    useEffect(() => {

        if(cachedCategories !== null) {
            setCategories(JSON.parse(cachedCategories));
        } else {
            fetch('/api/categories')
            .then((res) => res.json())
            .then(res => {
                setCategories(res);
            });
        }

        return () => {
            setCategories([])
        }
       
    }, [])

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleFeatured = () => {
        setFeatured(!featured);
    }

    const history = useHistory();

    // Handle form submission 
    const submitCb = () => {

        const { title, content, image } = values;
        
        const formData = new FormData();
        formData.append('file', image);
        formData.append('title', title);
        formData.append('category', category);
        formData.append('content', content);
        formData.append('featured', featured)

        fetch('/api/recipes', { 
            method: 'POST',
            body: formData,
        })
        .then((res) => res.json())
        .then((res)=> {
            setRecipes([
                ...recipes,
                res
            ]);
            localStorage.setItem('recipes', JSON.stringify([...recipes, res]))
            history.push('/dashboard');
        })
        .catch(() => {
            setUploadError({
                message: 'Something went wrong, please try again',
                error: true
            });
        });

    }


    const { 
        submit,
        handleChange,
        handleFileChange,
        titleError,
        contentError,
        imageError,
    } = useForm(values, setValues, submitCb);

    return (
        <Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <Heading>Add New Recipe</Heading>
                        {uploadError.error &&  <InputMessage>{uploadError.message}</InputMessage>}
                        <Form encType='multipart/form-data' onSubmit={ submit } id="addRecipe">
                        {imageError.error && <InputMessage>{imageError.message}</InputMessage>}
                            <InputWrapper file>
                                <FileLabel htmlFor="file">
                                    <FaUpload />
                                    <FileInput values={ values.image } type="file" name="image" accept="image/*" id="file" onChange={handleFileChange}/>
                                </FileLabel>
                            </InputWrapper>
                            <Switch value={ featured } handleFeatured={ handleFeatured }/>
                            <InputWrapper>
                                {titleError.error && <InputMessage>{titleError.message}</InputMessage>}
                                <Input type="text" placeholder="Title" name="title" onChange={ handleChange } value={values.title} />
                            </InputWrapper>
                            <InputWrapper>
                                {contentError.error && <InputMessage>{contentError.message}</InputMessage>}
                                <Textarea placeholder="Content" name="content" onChange={ handleChange } value={values.content} />
                            </InputWrapper>
                            <InputWrapper>
                                <Select value={category} onChange={handleCategory}>
                                    <Option value="0">
                                        Select Category
                                    </Option>
                                    {
                                        categories.map(category => {
                                            return(
                                                <Option value={category.id} key={category.id} >
                                                   { category.name }
                                                </Option>
                                            )
                                        })
                                    }
                                </Select>
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


export default AddRecipeForm;