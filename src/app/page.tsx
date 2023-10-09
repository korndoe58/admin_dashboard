import BarChartBox from "./components/Barchartbox";
import BigChartBox from "./components/Bigchartbox";
import Box1 from "./components/TopDeals";
import ChartBox from "./components/ChartBox";
import PieChartBox from "./components/PiechartBox";
import TopDeals from "./components/TopDeals";

 const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

 const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
 const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

 const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};
const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

 


export default function Home() {
  return (
  <div className='  grid h-[calc(100vh-4rem)] w-full  gap-4 grid-cols-1 p-4 overflow-y-hidden md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  xl:grid-rows-4  '>
    <div className=' bg-white/60 p-4 rounded-xl border-2 h-max  md:px-6  xl:row-span-3 xl:h-full'><TopDeals/></div>
    <div className='bg-white/60 p-4 rounded-xl border-2 xl:row-span-1'><ChartBox{...chartBoxUser}/></div>
    <div className='bg-white/60 p-4 rounded-xl border-2 xl:row-span-1'><ChartBox{...chartBoxProduct}/></div>
    <div className='bg-white/60 p-4 rounded-xl border-2 xl:row-span-3 xl:h-full'><PieChartBox /></div>
    <div className='bg-white/60 p-4 rounded-xl border-2'><ChartBox {...chartBoxConversion} /></div>
    <div className='bg-white/60 p-4 rounded-xl border-2'><ChartBox {...chartBoxRevenue} /></div>
    <div className='bg-white/60 p-4 rounded-xl border-2 hidden md:block md:col-span-2 md:px-6 xl:row-span-2 xl:col-span-2'><BigChartBox/></div>
    <div className='bg-white/60 p-4 rounded-xl border-2'><BarChartBox {...barChartBoxVisit} /></div>
    <div className='bg-white/60 p-4 rounded-xl border-2' ><BarChartBox {...barChartBoxRevenue} /></div>
  </div>  
  
    )
}
