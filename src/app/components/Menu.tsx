import Image from "next/image";
import Link from "next/link";

export default function Menu(){
    const menu = [
        {
          id: 1,
          title: "main",
          listItems: [
            {
              id: 1,
              title: "Homepage",
              url: "/",
              icon: "home.svg",
            },
            {
              id: 2,
              title: "Profile",
              url: "/users/1",
              icon: "user.svg",
            },
          ],
        },
        {
          id: 2,
          title: "lists",
          listItems: [
            {
              id: 1,
              title: "Users",
              url: "/users",
              icon: "user.svg",
            },
            {
              id: 2,
              title: "Products",
              url: "/products",
              icon: "product.svg",
            },
            {
              id: 3,
              title: "Orders",
              url: "/orders",
              icon: "order.svg",
            },
            {
              id: 4,
              title: "Posts",
              url: "/posts",
              icon: "post.svg",
            },
          ],
        },
        {
          id: 3,
          title: "general",
          listItems: [
            {
              id: 1,
              title: "Elements",
              url: "/",
              icon: "element.svg",
            },
            {
              id: 2,
              title: "Notes",
              url: "/",
              icon: "note.svg",
            },
            {
              id: 3,
              title: "Forms",
              url: "/",
              icon: "form.svg",
            },
            {
              id: 4,
              title: "Calendar",
              url: "/",
              icon: "calendar.svg",
            },
          ],
        },
        {
          id: 4,
          title: "Maintenance",
          listItems: [
            {
              id: 1,
              title: "Settings",
              url: "/",
              icon: "setting.svg",
            },
            {
              id: 2,
              title: "Backups",
              url: "/",
              icon: "backup.svg",
            },
          ],
        },
        {
          id: 5,
          title: "analytics",
          listItems: [
            {
              id: 1,
              title: "Charts",
              url: "/",
              icon: "chart.svg",
            },
            {
              id: 2,
              title: "Logs",
              url: "/",
              icon: "log.svg",
            },
          ],
        },
      ];
    return(
        <div className="bg-white/10 h-[calc(100vh-4rem)] w-max p-4  flex flex-col  gap-4">
        {menu.map((item)=>(
            <div key={item.id} >
                {/* main */}
                <h3 key={item.id} className=" hidden uppercase text-[.7rem] md:block">{item.title}</h3>
                {item.listItems.map((listItem)=>(
                    <Link key={listItem.id} href={listItem.url} className="flex justify-start items-center gap-2 p-2 hover:backdrop-blur-sm hover:bg-white/60 rounded-lg ">
                        <Image src={listItem.icon} width={20} height={20} alt="home" style={{stroke:'black'}}/>
                        <h1 className=" hidden md:block md:px-2">{listItem.title}</h1>
                    </Link>

                ))}
            </div>

        ))}
        </div>
    )

}