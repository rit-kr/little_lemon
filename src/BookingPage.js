import { useState } from "react";
import { useForm } from "react-hook-form";


function BookingPage(props) {
    const [bookTable, setBookTable] = useState(props.table);
    const { register, errors, handleSubmit } = useForm();


    const onSubmit = (data) => {
        console.log("RESULT", data);
        setBookTable(bookTable.concat(data))
      };
      console.log(bookTable)
    return (
        <>
            <form className= "flex flex-col max-w-lg py-8" onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Choose date:
                    <input type="date"
                            {...register("date", {required: true})}
                    />
                </label>
                <label>
                    Choose time:
                    <select name="Time" {...register("time", { required: true })}>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                </label>
                <label>
                    Number of guests:
                    <input type="number"
                    placeholder="1"
                    {...register("number of guests", { required: true, minLength: 1, maxLength: 10 })}
                    />
                </label>
                <label>
                    Occasion:
                    <select name="Occasion" {...register("occasion", { required: true })}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Other</option>

                    </select>
                </label>
                <input className="bg-[#f4ce14] py-1 px-4 rounded-lg" type="submit" value="Make Your reservation" />
            </form>
        </>
    );
}
export default BookingPage;