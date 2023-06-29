import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;
// min 5 characters, max 20 characters, 1 uppercase letter, 1 lowercase letter, 1 numeric digit.

export const userSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, "First Name is too short")
        .max(30, "First Name must be no more than 30 characters")
        .required("Required"),
    lastName: Yup.string()
        .min(3, "Last Name is too short")
        .max(30, "Last Name must be no more than 30 characters")
        .required("Required"),
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Required"),
    password: Yup.string()
        .min(5, "Password is too short")
        .max(20, "Password must be no more than 20 characters")
        .matches(passwordRules, {
            message: "Please create a stronger password",
        })
        .required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
});
