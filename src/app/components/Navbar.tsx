import Image from "next/image"
import Link from "next/link"

export default  function Navbar() {
   
    return (
    <main className="bg-white/10 h-16 w-full flex justify-between items-center  p-4">
        {/* logo */}
            <Link href={'/'}  className="flex justify-center items-center ">
                <Image src={'/logo.svg'} width={20} height={20} alt="logo"/>
                <h1>Supakorn Admin</h1>
            </Link>
        {/* right menu */}
        <div className="flex justify-between  items-center gap-5">
            <div className=" hidden md:flex justify-around items-center gap-2" >
                <Image src={'/search.svg'} width={20} height={20} alt="logo"/>
                <Image src={'/app.svg'} width={20} height={20} alt="logo"/>
                <Image src={'/expand.svg'} width={20} height={20} alt="logo"/>
                <div className=" relative">
                <Image src={'/notifications.svg'} width={20} height={20} alt="logo"/>
                <span className="animate-bounce bg-red-600 text-white min-w-[1rem] h-4  rounded-[50%] absolute top-[-.75rem] right-[-.75rem] flex justify-center items-center">1</span>
                </div>
            </div>
            <div className="hidden md:flex justify-center items-center">
                <Image src={'logo.svg'} width={20} height={20} alt="user"/>
                <span>User</span>
            </div>
            <Image src={'/settings.svg'} width={20} height={20} alt="logo"/>


        </div>
    </main>
    )  
}