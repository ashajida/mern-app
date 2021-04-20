export const validation = ({title, image, setTitleError, setImageError }) => {
         
    let error = false;

    // check if title is empty
     if(!title) {
        setTitleError({
            error: true,
            message: 'title is required'
        });

        error = true;
    } else {
        setTitleError({
            error: false,
            message: ''
        });
    }


      // check if content is empty
      if(!image) {
        setImageError({
            error: true,
            message: 'Image is required'
        });
        error = true;
    } else {
        setImageError({
            error: false,
            message: ''
        });
    }

    return error;

}