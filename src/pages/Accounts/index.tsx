import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const AccountsPage: React.FC = () => {
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
              <div className="flex flex-row gap-[34px] items-center justify-start w-[67%] md:w-full">
                <Line className="bg-indigo-600 h-[60px] rounded-br-[10px] rounded-tr-[10px] w-1.5" />
                <div className="flex flex-row gap-5 items-start justify-start w-[77%]">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_user_25X25.svg"
                    alt="user"
                  />
                  <Text
                    className="text-indigo-600 text-lg"
                    size="txtInterMedium18"
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
        <div className="flex flex-1 flex-col gap-[31px] items-center justify-start md:px-5 w-full">
          <div className="bg-white-A700 border-b border-gray-300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
            <Text
              className="ml-5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
              size="txtInterSemiBold28"
            >
              Accounts
            </Text>
            <Input
              name="GroupEight"
              placeholder="Search for something"
              value={groupeightvalue}
              onChange={(e) => setGroupeightvalue(e)}
              className="leading-[normal] p-0 placeholder:text-bluegray-400 sm:pr-5 text-[15px] text-bluegray-400 text-left w-full"
              wrapClassName="bg-gray-101 flex md:flex-1 md:ml-[0] ml-[470px] md:mt-0 my-[5px] pr-[35px] py-4 rounded-[25px] w-[23%] md:w-full"
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
          <div className="flex flex-col gap-[23px] items-center justify-start w-[94%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-col items-center justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-center w-[90%] md:w-full">
                    <Button className="bg-gray-102 flex h-[70px] items-center justify-center p-5 rounded-[50%] w-[70px]">
                      <Img
                        className="h-[30px]"
                        src="images/img_info.svg"
                        alt="info"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start">
                      <Text
                        className="text-base text-bluegray-400"
                        size="txtInterRegular16Bluegray400"
                      >
                        My Balance
                      </Text>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-indigo-600"
                        size="txtInterSemiBold25"
                      >
                        $12,750
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-center w-[85%] md:w-full">
                    <Button className="bg-gray-102 flex h-[70px] items-center justify-center p-5 rounded-[50%] w-[70px]">
                      <Img src="images/img_group400.svg" alt="Group400" />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start">
                      <Text
                        className="text-base text-bluegray-400"
                        size="txtInterRegular16Bluegray400"
                      >
                        Income
                      </Text>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-indigo-600"
                        size="txtInterSemiBold25"
                      >
                        $5,600
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="bg-white-A700 flex md:flex-1 flex-row gap-[15px] items-center justify-center p-[25px] sm:px-5 rounded-[25px] w-[23%] md:w-full">
                <Button className="bg-gray-102 flex h-[70px] items-center justify-center ml-4 p-5 rounded-[50%] w-[70px]">
                  <Img
                    className="h-[30px]"
                    src="images/img_clock_70X70.svg"
                    alt="clock"
                  />
                </Button>
                <div className="flex flex-col gap-[7px] items-start justify-start mr-[15px]">
                  <Text
                    className="text-base text-bluegray-400"
                    size="txtInterRegular16Bluegray400"
                  >
                    Expense
                  </Text>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-indigo-600"
                    size="txtInterSemiBold25"
                  >
                    $3,460
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[25px] sm:px-5 rounded-[25px] w-[23%] md:w-full">
                <div className="flex flex-row gap-[15px] items-center justify-center w-[87%] md:w-full">
                  <Button className="bg-gray-102 flex h-[70px] items-center justify-center p-5 rounded-[50%] w-[70px]">
                    <Img
                      className="h-[30px]"
                      src="images/img_ticket.svg"
                      alt="ticket"
                    />
                  </Button>
                  <div className="flex flex-col gap-[7px] items-start justify-start">
                    <Text
                      className="text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Total Saving
                    </Text>
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-indigo-600"
                      size="txtInterSemiBold25"
                    >
                      $7,920
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[66%] md:w-full">
                <Text
                  className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22"
                >
                  Last Transaction
                </Text>
                <List
                  className="bg-white-A700 flex flex-col gap-2.5 items-center p-[25px] sm:px-5 rounded-[25px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Button className="bg-gray-102 flex h-[55px] items-center justify-center p-3.5 rounded-[20px] w-[55px]">
                      <Img
                        className="h-[27px]"
                        src="images/img_alarm.svg"
                        alt="alarm"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[25px]">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Spotify Subscription
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        25 Jan 2021
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[31px] text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Shopping
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[43px] text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      1234 ****
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[45px] text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Pending
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[70px] text-base text-red-700"
                      size="txtInterMedium16Red700"
                    >
                      -$150
                    </Text>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Button className="bg-gray-102 flex h-[55px] items-center justify-center p-[15px] rounded-[20px] w-[55px]">
                      <Img
                        className="h-[25px]"
                        src="images/img_group327.svg"
                        alt="Group327"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[25px]">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Mobile Service
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        25 Jan 2021
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[73px] text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Service
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[58px] text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      1234 ****
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[45px] text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Completed
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[46px] text-base text-red-700"
                      size="txtInterMedium16Red700"
                    >
                      -$340
                    </Text>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Button className="bg-gray-102 flex h-[55px] items-center justify-center p-[15px] rounded-[20px] w-[55px]">
                      <Img
                        className="h-[25px]"
                        src="images/img_group326.svg"
                        alt="Group326"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[25px]">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Emilly Wilson
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        25 Jan 2021
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[86px] text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Transfer
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[52px] text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      1234 ****
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[45px] text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Completed
                    </Text>
                    <Text
                      className="ml-11 md:ml-[0] text-base text-green-600"
                      size="txtInterMedium16Green600"
                    >
                      +$780
                    </Text>
                  </div>
                </List>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                      size="txtInterSemiBold22"
                    >
                      My Card
                    </Text>
                    <Text
                      className="common-pointer mt-[5px] text-[17px] text-bluegray-900"
                      size="txtInterSemiBold17"
                      onClick={() => navigate("/investments")}
                    >
                      See All
                    </Text>
                  </div>
                  <div className="bg-indigo-600 flex flex-col gap-[37px] items-center justify-end pt-6 rounded-[25px] w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-[86%] md:w-full">
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
                      <div className="flex flex-row gap-[59px] items-center justify-start w-[77%] md:w-full">
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
                      name="Group1033"
                      placeholder="3778 **** **** 1234"
                      className="leading-[normal] md:text-xl p-0 placeholder:text-white-A700 sm:pl-5 sm:text-lg text-[22px] text-left text-white-A700 w-full"
                      wrapClassName="bg-gradient  flex pl-[26px] py-[21px] rounded-bl-[25px] rounded-br-[25px] w-full"
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
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[66%] md:w-full">
                <Text
                  className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22"
                >
                  Debit & Credit Overview
                </Text>
                <div className="bg-white-A700 flex flex-col items-center justify-end p-[27px] sm:px-5 rounded-[25px] w-full">
                  <div className="flex flex-col gap-[27px] items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between rounded-[5px] w-full">
                      <Text
                        className="text-base text-bluegray-400"
                        size="txtInterRegular16Bluegray400"
                      >
                        <span className="text-bluegray-801 font-inter text-left font-normal">
                          $7,560
                        </span>
                        <span className="text-bluegray-400 font-inter text-left font-normal">
                          {" "}
                          Debited &{" "}
                        </span>
                        <span className="text-bluegray-801 font-inter text-left font-normal">
                          $5,420
                        </span>
                        <span className="text-bluegray-400 font-inter text-left font-normal">
                          {" "}
                          Credited in this Week
                        </span>
                      </Text>
                      <div className="flex sm:flex-1 flex-row gap-[25px] items-center justify-between rounded-[5px] w-1/4 sm:w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-start rounded-[5px] w-[41%]">
                          <div className="bg-indigo-600 h-[15px] my-0.5 rounded-[5px] shadow-bs1 w-[15px]"></div>
                          <Text
                            className="text-base text-bluegray-400"
                            size="txtInterRegular16Bluegray400"
                          >
                            Debit
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-start rounded-[5px] w-[45%]">
                          <div className="bg-indigo-200 h-[15px] my-0.5 rounded-[5px] w-[15px]"></div>
                          <Text
                            className="text-base text-bluegray-400"
                            size="txtInterRegular16Bluegray400"
                          >
                            Credit
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start rounded-[10px] w-full">
                      <div className="flex flex-col gap-3 items-center justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                          <div className="bg-indigo-600 h-[135px] sm:mt-0 mt-[99px] rounded-[10px] w-[5%]"></div>
                          <div className="bg-indigo-200 h-[234px] rounded-[10px] w-[5%]"></div>
                          <div className="bg-indigo-600 h-[106px] sm:mt-0 mt-32 rounded-[10px] w-[5%]"></div>
                          <div className="bg-indigo-200 h-[186px] sm:mt-0 mt-12 rounded-[10px] w-[5%]"></div>
                          <div className="bg-indigo-600 h-[102px] sm:mt-0 mt-[132px] rounded-[10px] w-[5%]"></div>
                          <div className="bg-indigo-200 h-[139px] sm:mt-0 mt-[95px] rounded-[10px] w-[5%]"></div>
                          <div className="bg-indigo-600 h-[212px] sm:mt-0 mt-[22px] rounded-[10px] w-[5%]"></div>
                          <div className="bg-indigo-200 h-[123px] sm:mt-0 mt-[111px] rounded-[10px] w-[5%]"></div>
                          <div className="bg-indigo-600 h-[150px] sm:mt-0 mt-[84px] rounded-[10px] w-[5%]"></div>
                          <div className="bg-indigo-200 h-[214px] sm:mt-0 mt-5 rounded-[10px] w-[5%]"></div>
                          <div className="bg-indigo-600 h-[158px] sm:mt-0 mt-[76px] rounded-[10px] w-[5%]"></div>
                          <div className="bg-indigo-200 h-[105px] sm:mt-0 mt-[129px] rounded-[10px] w-[5%]"></div>
                          <div className="bg-indigo-600 h-[179px] sm:mt-0 mt-[55px] rounded-[10px] w-[5%]"></div>
                          <div className="bg-indigo-200 h-[216px] sm:mt-0 mt-[18px] rounded-[10px] w-[5%]"></div>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[93%] md:w-full">
                          <Text
                            className="text-bluegray-400 text-sm"
                            size="txtInterRegular14"
                          >
                            Sat
                          </Text>
                          <Text
                            className="text-bluegray-400 text-sm"
                            size="txtInterRegular14"
                          >
                            Sun
                          </Text>
                          <Text
                            className="text-bluegray-400 text-sm"
                            size="txtInterRegular14"
                          >
                            Mon
                          </Text>
                          <Text
                            className="text-bluegray-400 text-sm"
                            size="txtInterRegular14"
                          >
                            Tue
                          </Text>
                          <Text
                            className="text-bluegray-400 text-sm"
                            size="txtInterRegular14"
                          >
                            Wed
                          </Text>
                          <Text
                            className="text-bluegray-400 text-sm"
                            size="txtInterRegular14"
                          >
                            Thu
                          </Text>
                          <Text
                            className="h-[17px] text-bluegray-400 text-sm"
                            size="txtInterRegular14"
                          >
                            Fri
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[32%] md:w-full">
                <Text
                  className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22"
                >
                  Invoices Sent
                </Text>
                <List
                  className="bg-white-A700 flex flex-col gap-[21px] items-center p-[25px] sm:px-5 rounded-[25px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-center justify-start w-full">
                    <Button className="bg-gray-102 flex h-[60px] items-center justify-center p-[17px] rounded-[20px] w-[60px]">
                      <Img
                        className="h-[25px]"
                        src="images/img_refresh.svg"
                        alt="refresh"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-5">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Apple Store
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        5h ago
                      </Text>
                    </div>
                    <Text
                      className="ml-[87px] text-base text-indigo-600"
                      size="txtInterBold16Indigo600"
                    >
                      $450
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-full">
                    <Button className="bg-gray-102 flex h-[60px] items-center justify-center p-[17px] rounded-[20px] w-[60px]">
                      <Img
                        className="h-[25px]"
                        src="images/img_group326.svg"
                        alt="Group934"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-5">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Michael
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        2 days ago
                      </Text>
                    </div>
                    <Text
                      className="ml-[102px] text-base text-indigo-600"
                      size="txtInterBold16Indigo600"
                    >
                      $160
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-full">
                    <Button className="bg-gray-102 flex h-[60px] items-center justify-center p-[17px] rounded-[20px] w-[60px]">
                      <Img
                        className="h-[25px]"
                        src="images/img_volume.svg"
                        alt="volume"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-5">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Playstation
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        5 days ago
                      </Text>
                    </div>
                    <Text
                      className="ml-[84px] text-base text-indigo-600"
                      size="txtInterBold16Indigo600"
                    >
                      $1085
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-full">
                    <Button className="bg-gray-102 flex h-[60px] items-center justify-center p-[17px] rounded-[20px] w-[60px]">
                      <Img
                        className="h-[25px]"
                        src="images/img_group326.svg"
                        alt="Group936"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-5">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        William
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        10 days ago
                      </Text>
                    </div>
                    <Text
                      className="ml-[102px] text-base text-indigo-600"
                      size="txtInterBold16Indigo600"
                    >
                      $90
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountsPage;
