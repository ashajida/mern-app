export const inputValidation = ({email, setEmailError, password, username, setPasswordError, setUsernameError }, type) => {
         
        let error = false;

        // check if email is valid
         if(!email) {
            setEmailError({
                error: true,
                message: 'Email is required'
            });

            error = true;
        } else {
            setEmailError({
                error: false,
                message: ''
            });
        }

        // check if password is valid 
        if(!password) {
            setPasswordError({
                error: true,
                message: 'Password is required'
            });
            error = true;
        } else if(password.length < 8) {
            setPasswordError({
                error: true,
                message: 'Password must be at least 8 characters'
            });
            error = true;
        } else {
            setPasswordError({
                error: false,
                message: ''
            });
        }

        if(type == 'REGISTER') { 

                // check if password is valid 
            if(!username) {
                setUsernameError({
                    error: true,
                    message: 'Username is required'
                });
                error = true;
            } else {
                setUsernameError({
                    error: false,
                    message: ''
                });
            }
         }


        return error;

}