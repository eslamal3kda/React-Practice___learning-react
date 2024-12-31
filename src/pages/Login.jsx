import { Form, Formik } from "formik";
import * as Yup from "yup";
import WrapperInput from "../components/WrapperInput";
import Swal from "sweetalert2";

export default function Login() {
    const initialValues = {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    const onSubmit = (value) => {
        Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
          });
    };
    const validationSchema = Yup.object({
        userName: Yup.string()
            .min(3, "Username must be at least 3 characters long")
            .max(20, "Username must not exceed 20 characters")
            .required("Username is required ")
            .matches(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
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
                {() => {
                    return (
                        <>
                            {/* {console.log(formik)} */}
                            <Form>
                                <WrapperInput name={"userName"} type={"text"} label={"Enter Your Username"} placeholder={"Enter Your Username"} />
                                <WrapperInput name={"email"} type={"text"} label={"Enter Your E-Mail"} placeholder={"Enter Your E-Mail"} />
                                <WrapperInput name={"password"} type={"password"} label={"Enter Your Password"} placeholder={"Enter Your Password"} />
                                <WrapperInput name={"confirmPassword"} type={"password"} label={"Confirm Password"} placeholder={"Confirm Password"} />
                                <button type="submit" className="login-btn"> log in</button>
                            </Form>
                        </>
                    );
                }}
            </Formik>
        </div>
    );
}
