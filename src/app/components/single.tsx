'use client'
import {
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  
  type Props = {
    id: number;
    img?: string;
    title: string;
    info: object;
    chart?: {
      dataKeys: { name: string; color: string }[];
      data: object[];
    };
    activities?: { time: string; text: string }[];
  };
  
  const Single = (props: Props) => {
    return (
      <div className="flex p-4 h-full gap-4">
        <div className="flex flex-col justify-between flex-1 h-full ">
          <div className="">
            <div className=" flex gap-4 items-center pb-3">
              {props.img && <img src={props.img} alt=""  style={{width:'100px',height:"100px",borderRadius:'1rem'}}/>}
              <h1 className="text-4xl">{props.title}</h1>
              <button className=" border-2 p-2 rounded-lg" >Update</button>
            </div>
            <div className="">
              {Object.entries(props.info).map((item,index) => (
                <div className="flex gap-2 text-base pb-3" key={index}>
                  <span className="font-bold" >{item[0]}</span>
                  <span className="itemValue" >{item[1]}</span>
                </div>
              ))}
            </div>
          </div>
          <hr />
          {props.chart && (
            <div className=" h-[80%] w-[80%]">
              <ResponsiveContainer width="99%" height="99%">
                <LineChart
                 
                  data={props.chart.data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {props.chart.dataKeys.map((dataKey,index) => (
                    <Line key={index}
                      type="monotone"
                      dataKey={dataKey.name}
                      stroke={dataKey.color}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
        <div className="flex-1 h-full p-4 py-8">
          <h2 className="text-2xl pb-8">Latest Activities</h2>
          {props.activities && (
            <ul className="flex flex-col gap-6">
              {props.activities.map((activity,index) => (
                <li key={index} className=" border-l-4 flex flex-col gap-4 justify-between ">
                  <div className="  p-2 ">
                    <p>{activity.text}</p>
                    <time>{activity.time}</time>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };
  
  export default Single;