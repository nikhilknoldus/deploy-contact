import * as React from "react";
import useForm from "react-hook-form";
import "./create-contact.styles.scss";
import { Link, RouteComponentProps } from "react-router-dom";
import { ContactContext } from "../../store/context";
import CustomButton from "../../shared/components/custom-button/custom-button.component";

interface IContact {
    name: string;
    email: string;
    phone?: number;
}

const CreateContact: React.FC<RouteComponentProps> = ({ history, location }) => {

    const { register, handleSubmit, errors, reset } = useForm<IContact>({
        mode: "onChange",
    });

    React.useEffect(() => {
        reset();
    }, [location.state, reset]);

    const dispatchContact: any = React.useContext(ContactContext);

    const onSubmit = handleSubmit((data: any, e: any) => {
        if (location.state) {
            dispatchContact({
                type: "UPDATE_CONTACT",
                payload: { ...data, favourite: location.state.favourite },
            });
        } else {
            dispatchContact({ type: "ADD_CONTACT", payload: { ...data, favourite: false } });
        }
        e.target.reset();
        history.push("/");
    });

    return (
        <div className="form-container">
            <form onSubmit={onSubmit}>
                <input name="name" defaultValue={location.state ? location.state.name : ""}
                    ref={register({ required: true })} placeholder="Name" />
                <p>{errors.name && '⚠ Name is required'}</p>

                <input name="email" defaultValue={location.state ? location.state.email : ""}
                    ref={register({
                        required: true,
                        min: 5, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    })} placeholder="Email" disabled={location.state ? true : false} />
                <p>{errors.email && '⚠ Valid email is required'}</p>

                <input type="tel" name="phone" defaultValue={location.state ? location.state.phone : ""}
                    ref={register({ maxLength: 10, pattern: /^[0-9]/i })} placeholder="Phone" />
                <p>{errors.phone && '⚠ Enter a valid 10 digit number'}</p>

                <CustomButton>
                    {location.state ? "Edit" : "Create"}</CustomButton>
                <Link to="/"><CustomButton>Cancel</CustomButton></Link>
            </form>
        </div>
    );
};

export default CreateContact;
