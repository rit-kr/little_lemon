
import { NavLink } from "react-router-dom";

function Reservation() {
    return (
        <>
            <div className="py-6 bg-[#495e57]">
                <div className="flex justify-between items-center container">
                    <div className="flex basis-3/12 flex-col items-start">
                        <h2 className="text-[#bca114] text-2xl font-medium">Little Lemon</h2>
                        <h3 className="text-[#a1aca8] text-xl font-medium">Chicago</h3>
                        <p className="text-[#a1aca8] py-4">we are a family owned mediterranean restaurant, focused on traditional receipt served in modern twist</p>
                        <NavLink to="/booking">
                            <button className="bg-[#f4ce14] py-1 px-4 rounded-lg" to="/booking" >Reserve a Table</button>
                        </NavLink>
                    </div>
                    <div className=" w-48 h-40 rounded-xl">
                        <img src={'assets/icons/restauranfood.jpg'} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Reservation;