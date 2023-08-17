import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const LoanPage: React.FC = () => {
  const navigate = useNavigate();

  const [groupeightvalue, setGroupeightvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[250px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="bg-white-A700 flex flex-col gap-[50px] items-center justify-start py-[30px] w-full">
            <div className="flex flex-row items-center justify-center w-[65%] md:w-full">
              <Img
                className="h-10 md:h-auto object-cover w-10"
                src="images/img_logo_indigo_600.png"
                alt="LOGO"
              />
              <Text
                className="ml-1 sm:text-[21px] md:text-[23px] text-[25px] text-indigo-600"
                size="txtInterBold25"
              >
                FirstBank
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start mb-[334px] w-full">
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[65%] md:w-full">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_home_25X25.svg"
                    alt="home"
                  />
                  <Text
                    className="text-bluegray-400 text-lg"
                    size="txtInterMedium18Bluegray400"
                  >
                    Dashboard
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/transaction")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[73%] md:w-full">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_glyph.svg"
                    alt="Glyph"
                  />
                  <Text
                    className="text-bluegray-400 text-lg"
                    size="txtInterMedium18Bluegray400"
                  >
                    Transactions
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/accounts")}
              >
                <div className="flex flex-row gap-5 items-start justify-start md:ml-[0] ml-[23px] w-[59%] md:w-full">
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
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/investments")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[70%] md:w-full">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_map.svg"
                    alt="map"
                  />
                  <Text
                    className="text-bluegray-400 text-lg"
                    size="txtInterMedium18Bluegray400"
                  >
                    Investments
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/creditcards")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[72%] md:w-full">
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
              </div>
              <div className="flex flex-row gap-[34px] items-center justify-start w-[55%] md:w-full">
                <Line className="bg-indigo-600 h-[60px] rounded-br-[10px] rounded-tr-[10px] w-1.5" />
                <div className="flex flex-row gap-5 items-start justify-start w-[71%]">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_question_25X25.svg"
                    alt="question"
                  />
                  <Text
                    className="text-indigo-600 text-lg"
                    size="txtInterMedium18"
                  >
                    Loans
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/services")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[56%] md:w-full">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_service1.svg"
                    alt="serviceOne"
                  />
                  <Text
                    className="text-bluegray-400 text-lg"
                    size="txtInterMedium18Bluegray400"
                  >
                    Services
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start p-[17px] w-full">
                <div className="flex flex-row gap-5 items-center justify-center w-3/4 md:w-full">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_lightbulb.svg"
                    alt="lightbulb"
                  />
                  <Text
                    className="text-bluegray-400 text-lg"
                    size="txtInterMedium18Bluegray400"
                  >
                    My Privileges
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/settingeditprofile")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-1/2 md:w-full">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="text-bluegray-400 text-lg"
                    size="txtInterMedium18Bluegray400"
                  >
                    Setting
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
        <div className="flex flex-1 flex-col gap-[31px] items-center justify-start md:px-5 w-full">
          <div className="bg-white-A700 border-b border-gray-300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
            <Text
              className="ml-5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
              size="txtInterSemiBold28"
            >
              Loan
            </Text>
            <Input
              name="GroupEight"
              placeholder="Search for something"
              value={groupeightvalue}
              onChange={(e) => setGroupeightvalue(e)}
              className="leading-[normal] p-0 placeholder:text-bluegray-400 sm:pr-5 text-[15px] text-bluegray-400 text-left w-full"
              wrapClassName="bg-gray-101 flex md:flex-1 md:ml-[0] ml-[533px] md:mt-0 my-[5px] pr-[35px] py-4 rounded-[25px] w-[23%] md:w-full"
              prefix={
                <Img
                  className="cursor-pointer h-5 ml-[25px] mr-[15px] my-[15px]"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#888ea2"
                  className="cursor-pointer h-5 my-auto"
                  onClick={() => setGroupeightvalue("")}
                  style={{
                    visibility:
                      groupeightvalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={20}
                  width={20}
                  viewBox="0 0 20 20"
                />
              }
            ></Input>
            <Button className="bg-gray-102 flex h-[50px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[5px] p-3 rounded-[50%] w-[50px]">
              <Img
                className="h-[25px]"
                src="images/img_settings_50X50.svg"
                alt="settings One"
              />
            </Button>
            <Button className="bg-gray-102 flex h-[50px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[5px] p-3 rounded-[50%] w-[50px]">
              <Img
                className="h-[25px]"
                src="images/img_notification.svg"
                alt="notification"
              />
            </Button>
            <Img
              className="h-[60px] md:h-auto md:ml-[0] ml-[35px] rounded-[50%] w-[60px]"
              src="images/img_ellipse1.png"
              alt="EllipseOne"
            />
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-[94%] md:w-full">
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
                <div className="flex flex-row gap-[15px] items-center justify-start w-[99%] md:w-full">
                  <Button className="bg-gray-102 flex h-[70px] items-center justify-center p-5 rounded-[50%] w-[70px]">
                    <Img
                      className="h-[30px]"
                      src="images/img_user_70X70.svg"
                      alt="user One"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Personal Loans
                    </Text>
                    <Text
                      className="text-bluegray-900 text-xl"
                      size="txtInterSemiBold20Bluegray900"
                    >
                      $50,000
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-[21px] sm:px-5 rounded-[25px] w-full">
                <div className="flex flex-row gap-[15px] items-center justify-start my-1 w-full">
                  <Button className="bg-gray-102 flex h-[70px] items-center justify-center p-5 rounded-[50%] w-[70px]">
                    <Img
                      className="h-[30px]"
                      src="images/img_bag.svg"
                      alt="bag"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Corporate Loans
                    </Text>
                    <Text
                      className="text-bluegray-900 text-xl"
                      size="txtInterSemiBold20Bluegray900"
                    >
                      $100,000
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
                <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                  <Button className="bg-gray-102 flex h-[70px] items-center justify-center p-5 rounded-[50%] w-[70px]">
                    <Img
                      className="h-[30px]"
                      src="images/img_graph1.svg"
                      alt="graphOne"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Business Loans
                    </Text>
                    <Text
                      className="text-bluegray-900 text-xl"
                      size="txtInterSemiBold20Bluegray900"
                    >
                      $500,000
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-[21px] sm:px-5 rounded-[25px] w-full">
                <div className="flex flex-row gap-3 items-center justify-start my-1 w-full">
                  <Button className="bg-gray-102 flex h-[70px] items-center justify-center p-5 rounded-[50%] w-[70px]">
                    <Img
                      className="h-[30px]"
                      src="images/img_airplane.svg"
                      alt="airplane"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Custom Loans
                    </Text>
                    <Text
                      className="text-bluegray-900 text-lg"
                      size="txtInterSemiBold18"
                    >
                      Choose Money
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col gap-[15px] items-start justify-start w-full">
              <Text
                className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                size="txtInterSemiBold22"
              >
                Active Loans Overview
              </Text>
              <div className="bg-white-A700 flex flex-col gap-3 items-start justify-end p-[21px] sm:px-5 rounded-[25px] w-full">
                <List
                  className="flex flex-col gap-[15px] items-center md:ml-[0] ml-[9px] w-[99%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
                      <Text
                        className="text-base text-bluegray-400"
                        size="txtInterMedium16Bluegray400"
                      >
                        SL No
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[54px] text-base text-bluegray-400"
                        size="txtInterMedium16Bluegray400"
                      >
                        Loan Money
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[74px] text-base text-bluegray-400"
                        size="txtInterMedium16Bluegray400"
                      >
                        Left to repay
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[76px] text-base text-bluegray-400"
                        size="txtInterMedium16Bluegray400"
                      >
                        Duration
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[105px] text-base text-bluegray-400"
                        size="txtInterMedium16Bluegray400"
                      >
                        Interest rate
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[53px] text-base text-bluegray-400"
                        size="txtInterMedium16Bluegray400"
                      >
                        Installment
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[87px] text-base text-bluegray-400"
                        size="txtInterMedium16Bluegray400"
                      >
                        Repay
                      </Text>
                    </div>
                    <Line className="bg-gray-103 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start rounded-[17.5px] w-[99%] md:w-full">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        01.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[78px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $100,000
                      </Text>
                      <Text
                        className="ml-24 md:ml-[0] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $40,500
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[109px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        8 Months
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[99px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        12%
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[117px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $2,000 / month
                      </Text>
                      <Button className="border border-indigo-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] ml-[57px] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-500">
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray-105 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start rounded-[17.5px] w-[99%] md:w-full">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        02.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[76px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $500,000
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[94px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $250,000
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[100px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        36 Months
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[89px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        10%
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[116px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $8,000 / month
                      </Text>
                      <Button className="border border-indigo-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] ml-[57px] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-500">
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray-105 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start rounded-[17.5px] w-[99%] md:w-full">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        03.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[75px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $900,000
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[94px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $40,500
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[109px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        12 Months
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[92px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        12%
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[117px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $5,000 / month
                      </Text>
                      <Button className="border border-indigo-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] ml-[57px] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-500">
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray-105 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start rounded-[17.5px] w-[99%] md:w-full">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        04.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[75px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $50,000
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[104px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $40,500
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[109px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        25 Months
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[90px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        5%
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[124px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $2,000 / month
                      </Text>
                      <Button className="border border-indigo-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] ml-[57px] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-500">
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray-105 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start rounded-[17.5px] w-[99%] md:w-full">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        05.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[76px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $50,000
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[104px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $40,500
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[109px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        5 Months
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[99px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        16%
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[116px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $10,000 / month
                      </Text>
                      <Button className="border border-indigo-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] ml-[49px] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-500">
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray-105 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start rounded-[17.5px] w-[99%] md:w-full">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        06.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[76px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $80,000
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[104px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $25,500
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[110px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        14 Months
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[91px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        8%
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[124px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $2,000 / month
                      </Text>
                      <Button className="border border-indigo-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] ml-[57px] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-500">
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray-105 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start rounded-[17.5px] w-[99%] md:w-full">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        07.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[78px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $12,000
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[106px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $5,500
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[120px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        9 Months
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[99px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        13%
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[116px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $500 / month
                      </Text>
                      <Button className="border border-indigo-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] ml-[71px] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-500">
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray-105 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start rounded-[17.5px] w-[99%] md:w-full">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        08.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[76px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $160,000
                      </Text>
                      <Text
                        className="ml-24 md:ml-[0] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $100,800
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[102px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        3 Months
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[99px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        12%
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[117px] text-base text-bluegray-900"
                        size="txtInterRegular16Bluegray900"
                      >
                        $900 / month
                      </Text>
                      <Button className="border border-indigo-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] ml-[70px] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-500">
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray-103 h-px w-full" />
                  </div>
                </List>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[9px] w-[84%] md:w-full">
                  <Text
                    className="text-base text-red-700"
                    size="txtInterMedium16Red700"
                  >
                    Total
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[62px] text-base text-red-700"
                    size="txtInterMedium16Red700"
                  >
                    $125,0000
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[85px] text-base text-red-700"
                    size="txtInterMedium16Red700"
                  >
                    $750,000
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[417px] text-base text-red-700"
                    size="txtInterMedium16Red700"
                  >
                    $50,000 / month
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanPage;
