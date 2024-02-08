import React, {useState} from "react";
import { Avatar } from "antd";
import { Input, Card } from "antd";
const { Search } = Input;
import { Link } from "react-router-dom";
import { content } from "../../../Content.js";
import newspaper from "../../../assets/icon/newspaper.png";
import search from "../../../assets/icon/search.png";
import speaker from "../../../assets/icon/marketing.png";


function main() {
  const newsData = content.newsData;

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNewsData, setFilteredNewsData] = useState(
    newsData.news_content
  );

  const handleSearch = (value) => {
    setSearchQuery(value);
    const filteredData = newsData.news_content.filter((news) =>
      news.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredNewsData(filteredData);
  };
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
                        src={newspaper}
                        alt=""
                        className="h-10 mt-4 md:h-20 md:mt-8 lg:h-28 lg:mt-10"
                      />
                    </div>
                  }
                  className="bg-white hover:shadow-2xl"
                />
              </a>
              <p className="hidden md:flex justify-center pt-4 text-white text-xl lg:text-2xl">
                ข่าวทั่วไป
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
                        src={search}
                        alt=""
                        className="h-10 mt-4 md:h-20 md:mt-8 lg:h-28 lg:mt-10"
                      />
                    </div>
                  }
                  className="bg-white"
                />
              </a>
              <p className="hidden md:flex justify-center pt-4 text-white text-xl lg:text-2xl">
                ข่าววิจัย
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
                        src={speaker}
                        alt=""
                        className="h-10 mt-4 md:h-20 md:mt-8 lg:h-28 lg:mt-10"
                      />
                    </div>
                  }
                  className="bg-white"
                />
              </a>
              <p className="hidden md:flex justify-center pt-4 text-white text-xl lg:text-2xl">
                ข่าวประชาสัมพันธ์
              </p>
            </div>
          </div>
        </div>
        <div className="flex mx-auto justify-center">
          <input
            type="text"
            placeholder="ค้นหา..."
            onChange={(e) => handleSearch(e.target.value)}
            value={searchQuery}
            className="rounded-2xl w-80 h-9 p-4 focus:outline-none"
          />
        </div>
      </div>

      {/* Blog Group */}
      <div className="py-24">
        {filteredNewsData.map((news) => (
          <div
            key={news.id}
            className="flex flex-col md:flex-row mx-auto w-[400px] md:w-[740px] lg:w-1/2 flex-1 justify-center items-center"
          >
            <section className="flex mx-auto p-4 md:p-6">
              <article className="mb-8">
                <img
                  alt={news.title}
                  className="w-full h-64 object-cover rounded-lg"
                  height={400}
                  src={news.image}
                  style={{
                    aspectRatio: "800/400",
                    objectFit: "cover",
                  }}
                  width={800}
                />
                <Link to={`/plant/${news.id}`} className="text-black">
                  <h2 className="mt-4 text-2xl font-bold">{news.title}</h2>
                </Link>
                <p className="mt-2 text-gray-500 hidden md:flex">
                  {news.content}
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
