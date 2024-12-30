import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function Login() {
    const initialValues = {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    const onSubmit = (value) => {
        console.log(value);
    };
    const validationSchema = Yup.object({
        userName: Yup.string().min(3, "Username must be at least 3 characters long").max(20, "Username must not exceed 20 characters").required("Username is required ").matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
        email: Yup.string().email().required("Please enter a valid email address"),
        password: Yup.string()
            .required("password is required")
            .min(8, "Password must be at least 8 characters long")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter")
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[@$!%*?&#)(]/, "Password must contain at least one special character (@$!%*?&#)"),

        confirmPassword: Yup.string()
            .required("Confirm password is required")
            .oneOf([Yup.ref("password"), null], "Passwords must match"),
    });
    return (
        <div className="login-form">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {(formik) => {
                    return (
                        <>
                            {console.log(formik)}

                            <Form>
                                <div className="input-container">
                                    <label htmlFor="userName">Enter your username</label>
                                    <Field type={"text"} id={"userName"} name={"userName"} placeholder={""} />
                                    <ErrorMessage name="userName" component={"p"} />
                                </div>
                                <div className="input-container">
                                    <label htmlFor="email">Enter your e-mail</label>
                                    <Field type={"text"} id={"email"} name={"email"} placeholder={""} />
                                    <ErrorMessage name="email" component={"p"} />
                                </div>
                                <div className="input-container">
                                    <label htmlFor="password">enter your password</label>
                                    <Field type={"text"} id={"password"} name={"password"} placeholder={""} />
                                    <ErrorMessage name="password" component={"p"} />
                                </div>
                                <div className="input-container">
                                    <label htmlFor="confirmPassword">confirm password</label>
                                    <Field type={"text"} id={"confirmPassword"} name={"confirmPassword"} placeholder={""} />
                                    <ErrorMessage name="confirmPassword" component={"p"} />
                                </div>
                                <button type="submit" className="login-btn">
                                    log in
                                </button>
                            </Form>
                        </>
                    );
                }}
            </Formik>
        </div>
    );
}
