import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Slider, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TransactionPage: React.FC = () => {
  const navigate = useNavigate();

  const [groupeightvalue, setGroupeightvalue] = React.useState<string>("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

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
              <div className="flex flex-row gap-[34px] items-center justify-start w-[79%] md:w-full">
                <Line className="bg-indigo-600 h-[60px] rounded-br-[10px] rounded-tr-[10px] w-1.5" />
                <div className="flex flex-row gap-5 items-center justify-start w-4/5">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_file_25X25.svg"
                    alt="file"
                  />
                  <Text
                    className="text-indigo-600 text-lg"
                    size="txtInterMedium18"
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
                    alt="file One"
                  />
                  <Text
                    className="text-bluegray-400 text-lg"
                    size="txtInterMedium18Bluegray400"
                  >
                    Credit Cards
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/loan")}
              >
                <div className="flex flex-row gap-5 items-start justify-start md:ml-[0] ml-[23px] w-[45%] md:w-full">
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
        <div className="flex flex-1 flex-col gap-[25px] items-center justify-start md:px-5 w-full">
          <div className="bg-white-A700 border-b border-gray-300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
            <Text
              className="ml-5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
              size="txtInterSemiBold28"
            >
              Transactions
            </Text>
            <Input
              name="GroupEight"
              placeholder="Search for something"
              value={groupeightvalue}
              onChange={(e) => setGroupeightvalue(e)}
              className="leading-[normal] p-0 placeholder:text-bluegray-400 sm:pr-5 text-[15px] text-bluegray-400 text-left w-full"
              wrapClassName="bg-gray-101 flex md:flex-1 md:ml-[0] ml-[424px] md:mt-0 my-[5px] pr-[35px] py-4 rounded-[25px] w-[23%] md:w-full"
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
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[66%] md:w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                      size="txtInterSemiBold22"
                    >
                      My Cards
                    </Text>
                    <Button className="bg-transparent cursor-pointer font-semibold leading-[normal] min-w-[93px] text-[17px] text-bluegray-900 text-center">
                      + Add Card
                    </Button>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                    <div className="bg-indigo-600 flex md:flex-1 flex-col gap-[33px] items-center justify-end pt-6 rounded-[25px] w-[48%] md:w-full">
                      <div className="flex flex-col gap-7 items-start justify-start w-[87%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700 text-xs"
                              size="txtInterRegular12WhiteA700"
                            >
                              Balance
                            </Text>
                            <Text
                              className="mt-1 text-white-A700 text-xl"
                              size="txtInterRegular20"
                            >
                              $5,756
                            </Text>
                          </div>
                          <Img
                            className="h-[34px] md:h-auto object-cover w-[34px]"
                            src="images/img_chipcard.png"
                            alt="ChipCard"
                          />
                        </div>
                        <div className="flex flex-row gap-[59px] items-center justify-start ml-0.5 md:ml-[0] w-[76%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700_b2 text-xs"
                              size="txtInterRegular12"
                            >
                              CARD HOLDER
                            </Text>
                            <Text
                              className="mt-1 text-[15px] text-white-A700"
                              size="txtInterRegular15"
                            >
                              Eddy Cusuma
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700_b2 text-xs"
                              size="txtInterRegular12"
                            >
                              VALID THRU
                            </Text>
                            <Text
                              className="mt-1 text-[15px] text-white-A700"
                              size="txtInterRegular15"
                            >
                              12/22
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Input
                        name="Group319"
                        placeholder="3778 **** **** 1234"
                        className="leading-[normal] md:text-xl p-0 placeholder:text-white-A700 sm:pl-5 sm:text-lg text-[22px] text-left text-white-A700 w-full"
                        wrapClassName="bg-gradient  flex pl-6 py-[21px] rounded-bl-[25px] rounded-br-[25px] w-full"
                        suffix={
                          <Img
                            className="ml-[35px] mr-6 my-5"
                            src="images/img_contrast.svg"
                            alt="contrast"
                          />
                        }
                      ></Input>
                    </div>
                    <div className="bg-indigo-500 flex md:flex-1 flex-col gap-[33px] items-center justify-end pt-6 rounded-[25px] w-[48%] md:w-full">
                      <div className="flex flex-col gap-7 items-start justify-start w-[87%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700 text-xs"
                              size="txtInterRegular12WhiteA700"
                            >
                              Balance
                            </Text>
                            <Text
                              className="mt-1 text-white-A700 text-xl"
                              size="txtInterRegular20"
                            >
                              $5,756
                            </Text>
                          </div>
                          <Img
                            className="h-[34px] md:h-auto object-cover w-[34px]"
                            src="images/img_chipcard.png"
                            alt="ChipCard One"
                          />
                        </div>
                        <div className="flex flex-row gap-[59px] items-center justify-start ml-0.5 md:ml-[0] w-[76%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700_b2 text-xs"
                              size="txtInterRegular12"
                            >
                              CARD HOLDER
                            </Text>
                            <Text
                              className="mt-1 text-[15px] text-white-A700"
                              size="txtInterRegular15"
                            >
                              Eddy Cusuma
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700_b2 text-xs"
                              size="txtInterRegular12"
                            >
                              VALID THRU
                            </Text>
                            <Text
                              className="mt-1 text-[15px] text-white-A700"
                              size="txtInterRegular15"
                            >
                              12/22
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Input
                        name="Group319 One"
                        placeholder="3778 **** **** 1234"
                        className="leading-[normal] md:text-xl p-0 placeholder:text-white-A700 sm:pl-5 sm:text-lg text-[22px] text-left text-white-A700 w-full"
                        wrapClassName="bg-gradient  flex pl-6 py-[21px] rounded-bl-[25px] rounded-br-[25px] w-full"
                        suffix={
                          <Img
                            className="ml-[35px] mr-6 my-5"
                            src="images/img_contrast.svg"
                            alt="contrast"
                          />
                        }
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[32%] md:w-full">
                <Text
                  className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22"
                >
                  My Expense
                </Text>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-6 sm:px-5 rounded-[25px] w-full">
                  <div className="flex flex-row items-start justify-start rounded-[10px] w-[99%] md:w-full">
                    <div className="flex flex-col gap-[9px] items-center justify-start mt-[69px] rounded-[10px] w-[13%]">
                      <div className="bg-gray-102 h-[93px] rounded-[10px] w-full"></div>
                      <Text
                        className="text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        Aug
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-center justify-start ml-[15px] mt-5 rounded-[10px] w-[13%]">
                      <div className="bg-gray-102 h-[142px] rounded-[10px] w-full"></div>
                      <Text
                        className="text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        Sep
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-center justify-start ml-[15px] mt-[66px] rounded-[10px] w-[13%]">
                      <div className="bg-gray-102 h-24 rounded-[10px] w-full"></div>
                      <Text
                        className="text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        Oct
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-center justify-start ml-[15px] mt-[113px] rounded-[10px] w-[13%]">
                      <div className="bg-gray-102 h-[49px] rounded-[10px] w-full"></div>
                      <Text
                        className="text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        Nov
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-start ml-1.5 rounded-[10px] w-[19%]">
                      <Text
                        className="text-bluegray-800 text-sm"
                        size="txtInterMedium14"
                      >
                        $12,500
                      </Text>
                      <div className="bg-indigo-600 h-[137px] rounded-[10px] w-[68%]"></div>
                      <Text
                        className="text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        Dec
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-center justify-start ml-1.5 mt-[74px] rounded-[10px] w-[13%]">
                      <div className="bg-gray-102 h-[88px] rounded-[10px] w-full"></div>
                      <Text
                        className="text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        Jan
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-end justify-start w-full">
              <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                <Text
                  className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22"
                >
                  Recent Transactions
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[38%] md:w-full">
                    <div className="flex flex-col gap-2 items-center justify-start w-[35%] sm:w-full">
                      <Text
                        className="text-base text-blue-A700"
                        size="txtInterMedium16BlueA700"
                      >
                        All Transactions
                      </Text>
                      <Line className="bg-blue-A700 h-[3px] rounded-tl-[10px] rounded-tr-[10px] w-full" />
                    </div>
                    <Text
                      className="sm:ml-[0] ml-[71px] text-base text-bluegray-400"
                      size="txtInterMedium16Bluegray400"
                    >
                      Income
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[82px] text-base text-bluegray-400"
                      size="txtInterMedium16Bluegray400"
                    >
                      Expense
                    </Text>
                  </div>
                  <Line className="bg-gray-300 h-px w-full" />
                </div>
              </div>
              <Slider
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 2 },
                  1050: { items: 3 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                activeSlideCSS="scale-[1.00]"
                ref={sliderRef}
                className="w-full"
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="bg-white-A700 flex flex-col gap-[15px] items-center justify-end mx-2.5 p-[17px] rounded-[25px]">
                      <div className="flex flex-col gap-[11px] items-center justify-start mt-[5px] w-[98%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                          <Text
                            className="text-base text-bluegray-400"
                            size="txtInterMedium16Bluegray400"
                          >
                            Description
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[143px] text-base text-bluegray-400"
                            size="txtInterMedium16Bluegray400"
                          >
                            Transaction ID
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[43px] text-base text-bluegray-400"
                            size="txtInterMedium16Bluegray400"
                          >
                            Type
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[87px] text-base text-bluegray-400"
                            size="txtInterMedium16Bluegray400"
                          >
                            Card
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[97px] text-base text-bluegray-400"
                            size="txtInterMedium16Bluegray400"
                          >
                            Date
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[162px] text-base text-bluegray-400"
                            size="txtInterMedium16Bluegray400"
                          >
                            Amount
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[49px] text-base text-bluegray-400"
                            size="txtInterMedium16Bluegray400"
                          >
                            Receipt
                          </Text>
                        </div>
                        <Line className="bg-gray-300 h-px w-full" />
                      </div>
                      <List
                        className="flex flex-col gap-[15px] items-center w-[98%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <Button className="border-2 border-red-700 border-solid flex h-[30px] items-center justify-center p-[9px] rounded-[50%] w-[30px]">
                              <Img src="images/img_arrow.svg" alt="Arrow" />
                            </Button>
                            <Text
                              className="ml-3.5 md:ml-[0] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              Spotify Subscription
                            </Text>
                            <Text
                              className="ml-8 md:ml-[0] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              #12548796
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[67px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              Shopping
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[53px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              1234 ****
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[59px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              28 Jan, 12.30 AM
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[67px] text-base text-red-700"
                              size="txtInterMedium16Red700"
                            >
                              -$2,500
                            </Text>
                            <Button className="border border-indigo-600 border-solid cursor-pointer leading-[normal] min-w-[100px] md:ml-[0] ml-[47px] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-600">
                              Download
                            </Button>
                          </div>
                          <Line className="bg-gray-105 h-px w-full" />
                        </div>
                        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <Button className="border-2 border-green-600 border-solid flex h-[30px] items-center justify-center p-[9px] rounded-[50%] w-[30px]">
                              <Img
                                src="images/img_arrow_green_600.svg"
                                alt="Arrow One"
                              />
                            </Button>
                            <Text
                              className="ml-3.5 md:ml-[0] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              Freepik Sales
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[83px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              #12548796
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[67px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              Transfer
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[62px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              1234 ****
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[59px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              25 Jan, 10.40 PM
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[67px] text-base text-green-600"
                              size="txtInterMedium16Green600"
                            >
                              +$750
                            </Text>
                            <Button className="border border-indigo-600 border-solid cursor-pointer leading-[normal] min-w-[100px] md:ml-[0] ml-[59px] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-600">
                              Download
                            </Button>
                          </div>
                          <Line className="bg-gray-105 h-px w-full" />
                        </div>
                        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <Button className="border-2 border-red-700 border-solid flex h-[30px] items-center justify-center p-[9px] rounded-[50%] w-[30px]">
                              <Img src="images/img_arrow.svg" alt="Arrow Two" />
                            </Button>
                            <Text
                              className="ml-3.5 md:ml-[0] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              Mobile Service
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[73px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              #12548796
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[67px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              Service
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[68px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              1234 ****
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[59px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              20 Jan, 10.40 PM
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[67px] text-base text-red-700"
                              size="txtInterMedium16Red700"
                            >
                              -$150
                            </Text>
                            <Button className="border border-indigo-600 border-solid cursor-pointer leading-[normal] min-w-[100px] ml-16 md:ml-[0] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-600">
                              Download
                            </Button>
                          </div>
                          <Line className="bg-gray-105 h-px w-full" />
                        </div>
                        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <Button className="border-2 border-red-700 border-solid flex h-[30px] items-center justify-center p-[9px] rounded-[50%] w-[30px]">
                              <Img
                                src="images/img_arrow.svg"
                                alt="Arrow Three"
                              />
                            </Button>
                            <Text
                              className="ml-3.5 md:ml-[0] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              Wilson
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[135px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              #12548796
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[67px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              Transfer
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[62px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              1234 ****
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[59px] text-base text-bluegray-900"
                              size="txtInterRegular16Bluegray900"
                            >
                              15 Jan, 03.29 PM
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[67px] text-base text-red-700"
                              size="txtInterMedium16Red700"
                            >
                              -$1050
                            </Text>
                            <Button className="border border-indigo-600 border-solid cursor-pointer leading-[normal] min-w-[100px] md:ml-[0] ml-[54px] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-600">
                              Download
                            </Button>
                          </div>
                          <Line className="bg-gray-105 h-px w-full" />
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-3 items-center justify-start w-full">
                            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                              <Button className="border-2 border-green-600 border-solid flex h-[30px] items-center justify-center p-[9px] rounded-[50%] w-[30px]">
                                <Img
                                  src="images/img_arrow_green_600.svg"
                                  alt="Arrow Four"
                                />
                              </Button>
                              <Text
                                className="ml-3.5 md:ml-[0] text-base text-bluegray-900"
                                size="txtInterRegular16Bluegray900"
                              >
                                Emilly
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[141px] text-base text-bluegray-900"
                                size="txtInterRegular16Bluegray900"
                              >
                                #12548796
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[67px] text-base text-bluegray-900"
                                size="txtInterRegular16Bluegray900"
                              >
                                Transfer
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[62px] text-base text-bluegray-900"
                                size="txtInterRegular16Bluegray900"
                              >
                                1234 ****
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[59px] text-base text-bluegray-900"
                                size="txtInterRegular16Bluegray900"
                              >
                                14 Jan, 10.40 PM
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[69px] text-base text-green-600"
                                size="txtInterMedium16Green600"
                              >
                                +$840
                              </Text>
                              <Button className="border border-indigo-600 border-solid cursor-pointer leading-[normal] min-w-[100px] md:ml-[0] ml-[58px] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-600">
                                Download
                              </Button>
                            </div>
                            <Line className="bg-gray-105 h-px w-full" />
                          </div>
                        </div>
                      </List>
                    </div>
                  </React.Fragment>
                ))}
              />
              <div className="flex flex-row items-center justify-end w-[30%] md:w-full">
                <div className="flex flex-row items-center justify-evenly w-[28%]">
                  <Img
                    className="cursor-pointer h-6 w-6"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                    onClick={() => sliderRef.current?.slidePrev?.()}
                  />
                  <Text
                    className="text-[15px] text-indigo-600"
                    size="txtInterMedium15"
                  >
                    Previous
                  </Text>
                </div>
                <Button className="bg-indigo-600 cursor-pointer font-medium h-10 leading-[normal] ml-3 py-[11px] rounded-[10px] text-[15px] text-center text-white-A700 w-10">
                  1
                </Button>
                <Text
                  className="ml-[11px] text-[15px] text-indigo-600"
                  size="txtInterMedium15"
                >
                  2
                </Text>
                <Text
                  className="ml-[27px] text-[15px] text-indigo-600"
                  size="txtInterMedium15"
                >
                  3
                </Text>
                <Text
                  className="ml-[27px] text-[15px] text-indigo-600"
                  size="txtInterMedium15"
                >
                  4
                </Text>
                <div className="flex flex-row items-center justify-evenly ml-7 w-[19%]">
                  <Text
                    className="text-[15px] text-indigo-600"
                    size="txtInterMedium15"
                  >
                    Next
                  </Text>
                  <Img
                    className="cursor-pointer h-6 w-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                    onClick={() => sliderRef.current?.slideNext?.()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionPage;
