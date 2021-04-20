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
    Option
} from "./EditRecipe.elements";
import { Fragment, useState, useEffect, useContext } from "react";
import { FaUpload } from "react-icons/fa";
import CategoriesContext from "../../../providers/CategoriesContext";
import FeaturedCheckbox from "../Switch";
import { useHistory } from "react-router-dom";
import RecipesContext from "../../../providers/RecipesContext";

const Edit = ({ id  }) => {

    // Form values
    const [image, setImage] = useState('');
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [message, setMessage] = useState('');
    const [category, setCategory] = useState('');
    const [featured, setFeatured] = useState(0);

    // const [ recipe, setRecipe ] = useState(RecipesContext);
    const { categories, setCategories } = useContext(CategoriesContext);

    const { recipes, setRecipes } = useContext(RecipesContext);

    const cachedCategories = localStorage.getItem('categories');


    useEffect(() => {

        fetch(`/api/recipes/${id}`)
        .then(res => res.json())
        .then(res => {
            setTitle(res.title);
            setContent(res.body);
            setCategory(res.categoryId);
            setFeatured(res.featured);
        });

        if(cachedCategories !== null) {
            setCategories(JSON.parse(cachedCategories));
        } else {
            fetch('/api/categories')
            .then((res) => res.json())
            .then(res => {
                setCategories(res);
                localStorage.setItem('categories', JSON.stringify(res));
            });
        }
         
    },[]);

    // Handle input value change
    const handleFileChange = (e) => {
       setImage(e.target.files[0]);
    }

    const handleTitle = (e) => {
        setTitle(e.target.value);
     }

     const handleContent = (e) => {
        setContent(e.target.value);
     }

     const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleFeatured = () => {
        setFeatured(!featured);
    }

    const history = useHistory();

    // Handle form submission
    const submit = (e) => {

       e.preventDefault();
    
       const formData = new FormData();
       formData.append('title', title);
       formData.append('content', content);
       formData.append('categoryId', category);
       formData.append('featured', featured)

       if(e.target.file.files.length > 0) {
            formData.append('file', image);
       }

        fetch(`/api/recipes/${id}/edit`, { 
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(res => {

            const updatedRecipes = recipes.map((recipe) => {
                if(recipe.id == res.id) {
                    recipe = res;
                }
                return recipe;
            });

            setRecipes(updatedRecipes);
            localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
            
            history.push('/dashboard');

        });

    }

    return (
        <Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <Heading>Edit Recipe</Heading>
                        {message && message}
                        <Form encType='multipart/form-data' onSubmit={submit} id="addRecipe">
                            <InputWrapper file>
                                <FileLabel for="file">
                                    <FaUpload />
                                    <FileInput name="file" type="file" accept="image/*" id="file" onChange={handleFileChange}/>
                                </FileLabel>
                            </InputWrapper>
                            <InputWrapper>
                                <FeaturedCheckbox value={ featured } handleFeatured={ handleFeatured } />
                            </InputWrapper>
                            <InputWrapper>
                                <Input type="text" placeholder="Title" onChange={handleTitle} value={title} />
                            </InputWrapper>
                            <InputWrapper>
                                <Textarea placeholder="Content" onChange={handleContent} value={content} />
                            </InputWrapper>
                            <InputWrapper>
                                <Select value={category} onChange={handleCategory}>
                                    {
                                        categories.map(category => {
                                            return(
                                                <Option value={category.id}>
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


export default Edit;