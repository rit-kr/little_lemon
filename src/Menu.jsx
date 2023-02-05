function Menu() {
    return (
        <>
            <div className="container">

                <div className=" py-14 flex justify-between">
                    <h2 className="text-[#bca114] text-2xl font-medium">This weeks special</h2>
                    <button className="bg-[#f4ce14] py-1 px-4 rounded-lg">Reserve a Table</button>
                </div>
                <div className="py-6">
                    <div className="flex justify-between items-center  container">
                        <div className="flex basis-3/12 flex-col  items-start bg-[#edefee]">
                            <div className="rounded-xl">
                                <img src={'assets/icons/restauranfood.jpg'} alt="" />
                            </div>
                            <div className="flex justify-between">
                                <h2 className="text-[#bca114] font-medium">Geek Salad</h2>
                                <h3 className="text-[#a1aca8] font-medium">$12.99</h3>
                            </div>
                            <p className="text-[#a1aca8] py-4">we are a family owned mediterranean restaurant, focused on traditional receipt served in modern twist</p>
                            <p className="">Order a delivery</p>
                        </div>
                        <div className="flex basis-3/12 flex-col items-start bg-[#edefee]">
                            <div className="rounded-xl">
                                <img className="w-full" src={'assets/icons/restauranfood.jpg'} alt="" />
                            </div>
                            <div className="flex justify-between">
                                <h2 className="text-[#bca114] font-medium">Geek Salad</h2>
                                <h3 className="text-[#a1aca8] font-medium">$12.99</h3>
                            </div>
                            <p className="text-[#a1aca8] py-4">we are a family owned mediterranean restaurant, focused on traditional receipt served in modern twist</p>
                            <p className="">Order a delivery</p>
                        </div>
                        <div className="flex basis-3/12 flex-col items-start bg-[#edefee]">
                            <div className="rounded-xl">
                                <img src={'assets/icons/restauranfood.jpg'} alt="" />
                            </div>
                            <div className="flex justify-between">
                                <h2 className="text-[#bca114] font-medium">Geek Salad</h2>
                                <h3 className="text-[#a1aca8] font-medium">$12.99</h3>
                            </div>
                            <p className="text-[#a1aca8] py-4">we are a family owned mediterranean restaurant, focused on traditional receipt served in modern twist</p>
                            <p className="">Order a delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Menu;