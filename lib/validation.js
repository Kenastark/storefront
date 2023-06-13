export function signUpValidation(values) {
    const errors = {};
    // validate email
    if (!values.email) {
        errors.email = "Required field"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address"
        if (values.email.includes(" ")) {
            errors.email = "Invalid email address and whitespaces are not allowed"
        }
    }
    // validate name
    if (!values.firstname) {
        errors.firstname = "Required field"
    }
    if (!values.lastname) {
        errors.lastname = "Required field"
    }
    else if (values.firstname.length<3||values.firstname.length>20) {
        errors.firstname= "firstname should be greater or equal to 3 characters long and less than 20 characters long"
    } else if (values.firstname.includes(" ")) {
        errors.firstname = "whitespaces are not allowed"
    }
    else if (values.lastname.length<3||values.lastname.length>20) {
        errors.lastname= "lastname should be greater or equal to 3 characters long and less than 20 characters long"
    } else if (values.lastname.includes(" ")) {
        errors.lastname = "whitespaces are not allowed"
    }

    // validate password
    if (values.password.length<6||values.password.length>20) {
        errors.password = "Password must be greater than 6 characters long or less than 20 characters long"
    } else if (values.password.includes(" ")) {
        errors.password = "whitespaces are not allowed"
    }

    // validate phone number
    else if (values.phone.length11||values.phone.length>15) {
        errors.phone= "Phone number should be greater or equal to 11 characters long and less than or equal to 15 characters long"
    } else if (values.username.includes(" ")) {
        errors.phone = "whitespaces are not allowed"
    }

    console.log(errors);
    return errors
}