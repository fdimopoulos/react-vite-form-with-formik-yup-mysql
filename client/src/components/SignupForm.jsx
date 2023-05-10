import { useFormik } from "formik";
import { userSchema } from "../schemas/userSchema";
import Axios from "axios";

function SignupForm() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
            },
            validationSchema: userSchema,
            onSubmit: (values, actions) => {
                Axios.post("http://localhost:3001/register", {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password,
                    confirmPassword: values.confirmPassword,
                });
                console.log(values); // you can see all the data from the user in the console when you click the submit button
                actions.resetForm(); // reset the form when you click submit button
            },
        });

    return (
        <div>
            <h2>Sign Up Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name..."
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur} // check if an input has been touched or not
                    className={
                        errors.firstName && touched.firstName
                            ? "input-error"
                            : ""
                    }
                />
                {errors.firstName && touched.firstName && (
                    <p className="error">{errors.firstName}</p>
                )}
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name..."
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                        errors.lastName && touched.lastName ? "input-error" : ""
                    }
                />
                {errors.lastName && touched.lastName && (
                    <p className="error">{errors.lastName}</p>
                )}
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email..."
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                        errors.email && touched.email ? "input-error" : ""
                    }
                />
                {errors.email && touched.email && (
                    <p className="error">{errors.email}</p>
                )}
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password..."
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                        errors.password && touched.password ? "input-error" : ""
                    }
                />
                {errors.password && touched.password && (
                    <p className="error">{errors.password}</p>
                )}
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password..."
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                        errors.confirmPassword && touched.confirmPassword
                            ? "input-error"
                            : ""
                    }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                )}
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default SignupForm;
