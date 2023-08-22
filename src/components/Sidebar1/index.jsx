import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="bg-white-A700 border-gray-300 border-r border-solid flex flex-col md:gap-10 gap-[67px] items-center justify-start sm:pr-5 pr-[30px] py-[30px] w-full">
          <div className="flex flex-row items-center justify-center w-[74%] md:w-full">
            <Img
              className="h-10 md:h-auto object-cover w-10"
              src="images/img_logo.png"
              alt="LOGO"
            />
            <Text
              className="ml-1 sm:text-[21px] md:text-[23px] text-[25px] text-indigo-600"
              size="txtInterBold25"
            >
              FirstBank
            </Text>
          </div>
          <div className="flex flex-col gap-[23px] justify-start mb-[294px] w-[92%] md:w-full">
            <div className="flex flex-col gap-10 items-start justify-start ml-10 md:ml-[0] w-[81%] md:w-full">
              <div className="flex flex-row gap-5 items-start justify-start w-[87%] md:w-full">
                <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_home_25X25.svg"
                  alt="home"
                />
                <Text
                  className="mt-1 text-bluegray-400 text-lg"
                  size="txtInterMedium18Bluegray400"
                >
                  Dashboard
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-start justify-start w-[98%] md:w-full">
                <Img
                  className="h-[25px] w-[25px]"
                  src="defaultNoData.png"
                  alt="transferOne"
                />
                <Text
                  className="mt-1 text-bluegray-400 text-lg"
                  size="txtInterMedium18Bluegray400"
                >
                  Transactions
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-center justify-start w-[79%] md:w-full">
                <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_user.svg"
                  alt="user"
                />
                <Text
                  className="text-bluegray-400 text-lg"
                  size="txtInterMedium18Bluegray400"
                >
                  Accounts
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-start justify-start w-[94%] md:w-full">
                <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_map.svg"
                  alt="map"
                />
                <Text
                  className="mt-1 text-bluegray-400 text-lg"
                  size="txtInterMedium18Bluegray400"
                >
                  Investments
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-center justify-start w-[96%] md:w-full">
                <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_file.svg"
                  alt="file"
                />
                <Text
                  className="text-bluegray-400 text-lg"
                  size="txtInterMedium18Bluegray400"
                >
                  Credit Cards
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-center justify-start w-[61%] md:w-full">
                <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_question.svg"
                  alt="question"
                />
                <Text
                  className="text-bluegray-400 text-lg"
                  size="txtInterMedium18Bluegray400"
                >
                  Loans
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-start justify-start w-3/4 md:w-full">
                <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_service1.svg"
                  alt="serviceOne"
                />
                <Text
                  className="mt-1 text-bluegray-400 text-lg"
                  size="txtInterMedium18Bluegray400"
                >
                  Services
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-end justify-start w-full">
                <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_lightbulb.svg"
                  alt="lightbulb"
                />
                <Text
                  className="mt-1.5 text-bluegray-400 text-lg"
                  size="txtInterMedium18Bluegray400"
                >
                  My Privileges
                </Text>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start w-[74%] md:w-full">
              <Line className="bg-indigo-600 h-[60px] rounded-br-[10px] rounded-tr-[10px] w-1.5" />
              <Img
                className="h-[25px] ml-[34px] w-[25px]"
                src="images/img_settings_25X25.svg"
                alt="settings"
              />
              <Text
                className="ml-5 text-indigo-600 text-lg"
                size="txtInterMedium18"
              >
                Setting
              </Text>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
