import Image from "next/image";

export default  function TopDeals() {
    const topDealUsers = [
        {
          id: 1,
          img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
          username: "Elva McDonald",
          email: "elva@gmail.com",
          amount: "3.668",
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
          username: "Linnie Nelson",
          email: "linnie@gmail.com",
          amount: "3.256",
        },
        {
          id: 3,
          img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
          username: "Brent Reeves",
          email: "brent@gmail.com",
          amount: "2.998",
        },
        {
          id: 4,
          img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
          username: "Adeline Watson",
          email: "adeline@gmail.com",
          amount: "2.512",
        },
        {
          id: 5,
          img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
          username: "Juan Harrington",
          email: "juan@gmail.com",
          amount: "2.134",
        },
        {
          id: 6,
          img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
          username: "Augusta McGee",
          email: "augusta@gmail.com",
          amount: "1.932",
        },
        {
          id: 7,
          img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
          username: "Angel Thomas",
          email: "angel@gmail.com",
          amount: "1.560",
        },
      ];
    return (
    <main className="lg:h-full  ">
        <h1 className=" font-bold text-2xl pb-3">Top Deals</h1>
        <div className=" h-full flex flex-col justify-start gap-7 ">
            {topDealUsers.map((item)=>(
            <div key={item.id} className="flex justify-between items-center pb-3 ">
                <div className="flex gap-3 items-center">
                  <div>
                    <Image className=" " src={'/noavatar.png'} width={30} height={20} alt="p" style={{borderRadius:'50%'}}/>
                  </div>
                    <div className="flex flex-col text-xs xl:text-base  ">
                        <span>{item.username}</span>
                        <span>{item.email}</span>
                    </div>
                </div>
                <span className=" font-semibold">${item.amount}</span>

            </div>
            

            ))}
        </div>
    </main>
    )  
}