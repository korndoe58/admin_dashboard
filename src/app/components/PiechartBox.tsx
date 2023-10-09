'use client'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className="h-full " >
        <h1 className=" font-bold text-2xl pb-3">Leads by Source</h1>
        <div className="flex flex-col justify-around h-max xl:h-full">
            <div >
              <ResponsiveContainer width="99%" height={300}>
                <PieChart>
                  <Tooltip
                    contentStyle={{ background: "white", borderRadius: "5px" }}
                  />
                  <Pie
                    data={data}
                    innerRadius={"70%"}
                    outerRadius={"90%"}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((item) => (
                      <Cell key={item.name} fill={item.color}  />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-around items-center">
              {data.map((item) => (
                <div className="text-right" key={item.name}>
                  <div className=" text-xs flex justify-center items-center gap-1 xl:text-base">
                    <div className="bg-red-600 text-white min-w-[1rem] h-4  rounded-[50%] flex justify-center items-center " style={{ backgroundColor: item.color }} />
                    <span>{item.name}</span>
                  </div>
                  <span className="text-xs xl:text-base" >{item.value}</span>
                </div>
              ))}
            </div>
        </div>
    </div>
  );
};

export default PieChartBox;