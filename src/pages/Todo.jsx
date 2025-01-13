import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetServerRequest } from "../axios/GetServerRequest";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { PostServerRequest } from "../axios/PostServerRequest";
import { DeleteServerRequest } from "../axios/DeleteServerRequest";
import * as Yup from "yup";

export default function Todo() {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["todo"],
        queryFn: () => GetServerRequest("/todo"),
        refetchOnWindowFocus: false,
    });

    const queryClient = useQueryClient();

    const { mutate: todoMutate, isLoading: isMutating } = useMutation({
        mutationKey: ["addTodo"],
        mutationFn: (data) => PostServerRequest("todo", data),
        onSuccess: () => {
            queryClient.invalidateQueries(["todo"]);
        },
    });
    const { mutate: deleteTodo } = useMutation({
        mutationKey: ["deletTodo"],
        mutationFn: (id) => DeleteServerRequest(`todo/${id}`),
        onSuccess: () => queryClient.invalidateQueries(["todo"]),
        onError: (error) => console.error("There is error", error),
    });

    if (isLoading) return <h2>Loading...</h2>;
    if (isError) return <h2>Something Error</h2>;

    
    const initialValues = {
        title: "",
        priority: "",
        dueDate: "",
        completed: "",
    };
    const onSubmit = (values) => {
        todoMutate(values);
    };
    const validationSchema = Yup.object({
        title: Yup.string().required("this field is requered"),
        priority: Yup.string().required("this field is requered"),
        dueDate: Yup.date().required("this field is requered"),
    });

    return (
        <>
            <Formik  initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {(e) => {
                    console.log(e);
                    return (
                        <Form className="todo-form">
                            <Field name="title" placeholder="Enter The Title" />
                            <ErrorMessage className="todoErrorMessage" name="title" component={'p'}/>
                            <Field as="select" name="priority" placeholder="Enter The priority">
                                <option value=""></option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </Field>
                            <ErrorMessage className="todoErrorMessage" name="priority" component={'p'}/>
                            <Field type="date" name="dueDate" />
                            <ErrorMessage className="todoErrorMessage" name="dueDate" component={'p'}/>
                            <div className="comp">
                                <label htmlFor="completed">Complited</label>
                                <Field type="checkbox" id="completed" name="completed" />
                            </div>
                            <button type="submit" disabled={isMutating}>
                                {isMutating ? "Adding.." : "Add ToDO"}
                            </button>
                        </Form>
                    );
                }}
            </Formik>
            <div className="todo_container">
                {data.data.map((ele) => {
                    return (
                        <div key={ele.id} className={`todo_card ${ele.completed ? "done" : "pinding"}`}>
                            <h2>{ele.title}</h2>
                            <h4>{ele.dueDate ? ele.dueDate : "No Date"}</h4>
                            <p>{ele.priority}</p>
                            <button className="deleteTodo" onClick={() => deleteTodo(ele.id)}>
                                Delete Todo
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
