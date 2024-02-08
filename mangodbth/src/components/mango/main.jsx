import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, Select, Col, Row } from "antd";
const { Search } = Input;

function mango() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/getmango")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  });

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto justify-center max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="flex justify-center text-3xl font-bold pb-4">
          สายพันธุ์ทั้งหมด
        </h2>
        <div className="bg-[#016A70] p-4 flex items-center mb-6 rounded-xl">
          <Row justify="space-around" align="middle" gutter={16}>
            <Col span={12}>
              <Search
                className="flex-grow mr-4 bg-white rounded-md"
                placeholder="ค้นหา..."
              />
            </Col>
            <Col span={4}>
              <h1 className="text-white font-semibold">Filter By</h1>
            </Col>
            <Col span={4}>
              <Select
                defaultValue="lucy"
                onChange={handleChange}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </Col>
            <Col span={4}>
              <Select
                defaultValue="lucy"
                onChange={handleChange}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </Col>
          </Row>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((data) => (
            <div key={data.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={data.mangoImg}
                  alt="#"
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div className="flex mx-auto justify-center">
                  <h3 className="text-xl font-bold text-gray-700">
                    <a href={data.mangoName}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {data.mangoName}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default mango;
