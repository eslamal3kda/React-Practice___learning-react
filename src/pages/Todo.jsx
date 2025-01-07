
import { useQuery } from "@tanstack/react-query";
import { GetServerRequest } from "../axios/GetServerRequest";
import { Field, Form, Formik } from "formik";

export default function Todo() {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["todo"],
        queryFn: () => GetServerRequest("/todo"),
        refetchOnWindowFocus: false,
    });
    if (isLoading) return <h2>Loading...</h2>;
    if (isError) return <h2>Something Error</h2>;
    console.log(data);
    const initialValues = {
        title:'',
        description:'',
    }
    const onSubmit = (values)=> console.log(values);
        

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <Field name="title" placeholder='Enter The Title' />
                    <Field name='description' placeholder='Enter The Description' /> 
                    <button type="submit">Add ToDO</button>
                </Form>
            </Formik>
            <div className="todo_container">
                {data.data.map((ele) => {
                    return (
                        <div key={ele.id} className={`todo_card ${ele.completed ? 'done':'pinding'}`}>
                            <h2>{ele.title}</h2>
                            <h4>{ele.dueDate? ele.dueDate :'No Date' }</h4>
                            <p>{ele.priority }</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
