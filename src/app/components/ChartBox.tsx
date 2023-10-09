'use client'
import Image from "next/image"
import Link from "next/link"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: object[];
  };

export default function ChartBox (props: Props)  {
    
  return (
    <div className="flex  min-h-[25vh] md:h-full md:min-h-max ">
        {/* left */}
        <div className="flex-1 flex flex-col justify-between">
            <div className="flex justify-start items-center">
                <Image src={props.icon} width={20} height={20} alt="logo"/>
                <h1 className="text-xs">{props.title}</h1>
            </div>
            <h2 className="text-2xl font-semibold">{props.number}</h2>
            <Link className="text-xs" href={'/'}>View all</Link>
        </div>
        
        {/* right */}
        <div className="flex-1 flex flex-col justify-center items-end  ">
            <div className="w-full h-full ">
                <ResponsiveContainer  width="99%" height='100%' >
                    
                    <LineChart  data={props.chartData}>
                        <Line
                         type="monotone" 
                         dataKey={props.dataKey} 
                         stroke={props.color} 
                         strokeWidth={2} />
                    </LineChart>
                    
                </ResponsiveContainer>
            </div>
            <h2 className="text-xl text-green-400 font-semibold" style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}>{props.percentage}%</h2>
            <h2 className="text-xs" >this month</h2>
        </div>
    </div>
  )
}
