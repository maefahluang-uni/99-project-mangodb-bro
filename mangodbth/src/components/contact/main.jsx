//kluai
import React from "react";
import { Card, Row, Col, Collapse, Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

function hero() {
  return (
    <section className="flex mx-auto justify-center p-16">
      <Card className="bg-[#ffffff] flex flex-col w-full lg:w-2/3 h-auto shadow-xl">
        <Row gutter={12} className="block md:flex lg:flex">
          <Col xs={24} sm={24} md={24} lg={8} className="mx-auto">
            <Card className="bg-[#016A70]">
              <div className="flex flex-col w-full h-96 text-white font-[Prompt] justify-between">
                <div className="flex flex-col justify-center p-2">
                  <h1 className="flex justify-center text-2xl font-semibold">
                    ข้อมูลการติดต่อ
                  </h1>
                  <span className="text-md md:text-lg pt-4">
                    หากมีข้อสงสัยหรือข้อเสนอแนะเกี่ยวกับเว็บไซต์สามารถติดต่อเราได้ที่
                  </span>
                </div>
                <div className="flex flex-col py-5 justify-center items-center">
                  <div className="flex flex-col lg:flex-row p-2">
                    <h1 className="text-md flex justify-center">เบอร์โทร:</h1>
                    <h1 className="text-md pl-2">099-999-9999</h1>
                  </div>
                  <div className="flex flex-col lg:flex-row p-2">
                    <h1 className="text-md flex justify-center">อีเมล:</h1>
                    <h1 className="text-md pl-2">demo@gmail.com</h1>
                  </div>
                  <div className="flex flex-col lg:flex-row p-2">
                    <h1 className="text-md flex justify-center">ที่อยู่:</h1>
                    <h1 className="text-md pl-2">132 XXXX 012345 Thailand</h1>
                  </div>
                </div>
                <div className="flex flex-col">
                  <ul className="flex justify-center">
                    <li className="px-4">
                      <a href="https://www.facebook.com/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} className="h-6" />
                      </a>
                    </li>
                    <li className="px-4">
                      <a
                        href="https://www.youtube.com/channel/UCnAOCWliq7WWmBdYBp8RRlA"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} className="h-6" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={16}
            className="sm:pt-5 md:pt-0 mx-auto"
          >
            <div className="flex flex-col text-center justify-center font-[Prompt]">
              <h1 className="text-3xl font-semibold py-5">คำถามที่พบบ่อย</h1>
            </div>
            <div className="lg:mx-16 ">
              <Collapse
                size="small"
                className="bg-white"
                items={[
                  {
                    key: "1",
                    label: "This is small size panel header",
                    children: <p>A dog is a type of domesticated animal.</p>,
                  },
                ]}
              />
              <Divider orientation="center"></Divider>
              <Collapse
                size="small"
                className="bg-white"
                items={[
                  {
                    key: "1",
                    label: "This is small size panel header",
                    children: <p>A dog is a type of domesticated animal.</p>,
                  },
                ]}
              />
              <Divider orientation="center"></Divider>
              <Collapse
                size="small"
                className="bg-white"
                items={[
                  {
                    key: "1",
                    label: "This is small size panel header",
                    children: <p>A dog is a type of domesticated animal.</p>,
                  },
                ]}
              />
              <Divider orientation="center"></Divider>
            </div>
          </Col>
        </Row>
      </Card>
    </section>
  );
}

export default hero;
