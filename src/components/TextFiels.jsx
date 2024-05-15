import { useId } from "react"

const TextField = ({ type = "text", labelText = "", isError = false, errorMsg = "", ...attributes }) => {
    const htmlFor = useId()

    return (
        <div>
            <label id={htmlFor} htmlFor={htmlFor} className="text-sm font-bold text-primary">
                {labelText}
            </label>
            <div>
            <input type={type} className="w-full rounded-md p-2 focus:border-primary focus:ring-white  text-sm"
           aria-labelledby={htmlFor}
           autoComplete="off"
           {...attributes}
            />

            </div>

        </div>

    );
};

export default TextField;
