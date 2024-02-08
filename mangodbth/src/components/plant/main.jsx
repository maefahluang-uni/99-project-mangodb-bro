//first
import React, { useState, useEffect } from "react";
import { Avatar } from "antd";
import { Input, Card } from "antd";
const { Search } = Input;
import { Link } from "react-router-dom";
import { content } from "../../../Content.js";
import pot from "../../../assets/icon/potted.png";
import water from "../../../assets/icon/watering.png";
import grow from "../../../assets/icon/growing.png";
import axios from "axios";


function main() {
  // const blogData = content.blogData;

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/getplant")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  });


  // const [searchQuery, setSearchQuery] = useState("");
  // const [filteredBlogData, setFilteredBlogData] = useState(data);

  // const handleSearch = (value) => {
  //   setSearchQuery(value);
  //   const filteredData = data.filter((blog) =>
  //     blog.title.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setFilteredBlogData(filteredData);
  // };

  return (
    <section>
      <div className="bg-[#016A70] py-8">
        <div className="flex mx-auto justify-center">
          <h1 className="text-5xl font-bold text-white">หมวดหมู่</h1>
        </div>

        {/* Avatar Group */}
        <div className="flex items-center justify-center md:justify-around py-16">
          <div className="w-1/2 flex justify-center md:justify-around">
            <div className="flex-row">
              <a href="#" className="mx-2">
                <Avatar
                  size={{
                    xs: 75,
                    sm: 75,
                    md: 150,
                    lg: 200,
                    xl: 200,
                    xxl: 200,
                  }}
                  src={
                    <div className="flex mx-auto justify-center items-center">
                      <img
                        src={pot}
                        alt=""
                        className="h-10 mt-4 md:h-20 md:mt-8 lg:h-28 lg:mt-10"
                      />
                    </div>
                  }
                  className="bg-white hover:shadow-2xl"
                />
              </a>
              <p className="hidden md:flex justify-center pt-4 text-white text-xl lg:text-2xl">
                วิธีการปลูก
              </p>
            </div>
            <div>
              <a href="#" className="mx-2">
                <Avatar
                  size={{
                    xs: 75,
                    sm: 75,
                    md: 150,
                    lg: 200,
                    xl: 200,
                    xxl: 200,
                  }}
                  src={
                    <div className="flex mx-auto justify-center items-center">
                      <img
                        src={water}
                        alt=""
                        className="h-10 mt-4 md:h-20 md:mt-8 lg:h-28 lg:mt-10"
                      />
                    </div>
                  }
                  className="bg-white hover:shadow-2xl"
                />
              </a>
              <p className="hidden md:flex justify-center pt-4 text-white text-xl lg:text-2xl">
                การดูแลรักษา
              </p>
            </div>
            <div>
              <a href="#" className="mx-2">
                <Avatar
                  size={{
                    xs: 75,
                    sm: 75,
                    md: 150,
                    lg: 200,
                    xl: 200,
                    xxl: 200,
                  }}
                  src={
                    <div className="flex mx-auto justify-center items-center">
                      <img
                        src={grow}
                        alt=""
                        className="h-10 mt-4 md:h-20 md:mt-8 lg:h-28 lg:mt-10"
                      />
                    </div>
                  }
                  className="bg-white hover:shadow-2xl"
                />
              </a>
              <p className="hidden md:flex justify-center pt-4 text-white text-xl lg:text-2xl">
                การขยายพันธุ์
              </p>
            </div>
          </div>
        </div>
        <div className="flex mx-auto justify-center">
          <input
            type="text"
            placeholder="ค้นหา..."
            // onChange={(e) => handleSearch(e.target.value)}
            // value={searchQuery}
            className="rounded-2xl w-80 h-9 p-4 focus:outline-none"
          />
        </div>
      </div>

      {/* Blog Group */}
      <div className="py-24">
        {data.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col md:flex-row mx-auto w-[400px] md:w-[740px] lg:w-1/2 flex-1 justify-center items-center"
          >
            <section className="flex mx-auto p-4 md:p-6">
              <article className="mb-8">
                <img
                  alt={blog.title}
                  className="w-full h-64 object-cover rounded-lg"
                  height={400}
                  src={blog.image}
                  style={{
                    aspectRatio: "800/400",
                    objectFit: "cover",
                  }}
                  width={800}
                />
                <Link to={`/plant/${blog.id}`} className="text-black">
                  <h2 className="mt-4 text-2xl font-bold">{blog.title}</h2>
                </Link>
                <p className="mt-2 text-gray-500 hidden md:flex">
                  {blog.content}
                </p>
                <a className="mt-2 flex justify-end text-blue-500" href="#">
                  Read more
                </a>
              </article>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
}

export default main;