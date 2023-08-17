import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const dateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CreditCardsPage: React.FC = () => {
  const navigate = useNavigate();

  const [groupeightvalue, setGroupeightvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto pb-[30px] w-full">
        <Sidebar className="!sticky !w-[250px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="flex flex-col gap-[50px] items-center justify-start mb-[364px] mt-[30px] w-full">
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
            <div className="flex flex-col items-start justify-start w-full">
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
              <div className="flex flex-row gap-[34px] items-center justify-start w-[78%] md:w-full">
                <Line className="bg-indigo-600 h-[60px] rounded-br-[10px] rounded-tr-[10px] w-1.5" />
                <div className="flex flex-row gap-5 items-center justify-start w-4/5">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_file_1.svg"
                    alt="file"
                  />
                  <Text
                    className="text-indigo-600 text-lg"
                    size="txtInterMedium18"
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
              Credit Cards
            </Text>
            <Input
              name="GroupEight"
              placeholder="Search for something"
              value={groupeightvalue}
              onChange={(e) => setGroupeightvalue(e)}
              className="leading-[normal] p-0 placeholder:text-bluegray-400 sm:pr-5 text-[15px] text-bluegray-400 text-left w-full"
              wrapClassName="bg-gray-101 flex md:flex-1 md:ml-[0] ml-[429px] md:mt-0 my-[5px] pr-[35px] py-4 rounded-[25px] w-[23%] md:w-full"
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
          <div className="flex flex-col gap-[25px] items-center justify-start w-[94%] md:w-full">
            <div className="flex flex-col gap-[19px] items-start justify-start w-full">
              <Text
                className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                size="txtInterSemiBold22"
              >
                My Cards
              </Text>
              <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                <div className="bg-indigo-600 flex flex-1 flex-col gap-[33px] items-center justify-end pt-6 rounded-[25px] w-full">
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
                <div className="bg-indigo-500 flex flex-1 flex-col gap-[33px] items-center justify-end pt-6 rounded-[25px] w-full">
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
                <div className="bg-indigo-300 border border-gray-103 border-solid flex flex-1 flex-col gap-[33px] items-center justify-end pt-6 rounded-[25px] w-full">
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
                        alt="ChipCard Two"
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
                    name="Group319 Two"
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
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[32%] md:w-full">
                <Text
                  className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22"
                >
                  Card Expense Statistics
                </Text>
                <div className="bg-white-A700 flex flex-col gap-4 items-center justify-end p-7 sm:px-5 rounded-[25px] w-full">
                  <Img
                    className="h-[186px] mt-0.5 w-[64%]"
                    src="images/img_group346chart.svg"
                    alt="Group346Chart"
                  />
                  <List
                    className="flex flex-col gap-3.5 items-center w-[86%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                      <div className="flex flex-row gap-3 items-start justify-start w-[39%]">
                        <div className="bg-indigo-100 h-[15px] rounded-[50%] w-[15px]"></div>
                        <Text
                          className="text-[15px] text-bluegray-400"
                          size="txtInterMedium15Bluegray400"
                        >
                          DBL Bank
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-start justify-start w-2/5">
                        <div className="bg-indigo-500 h-[15px] rounded-[50%] w-[15px]"></div>
                        <Text
                          className="text-[15px] text-bluegray-400"
                          size="txtInterMedium15Bluegray400"
                        >
                          BRC Bank
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-row gap-3 items-start justify-start w-[41%]">
                        <div className="bg-indigo-600 h-[15px] rounded-[50%] w-[15px]"></div>
                        <Text
                          className="text-[15px] text-bluegray-400"
                          size="txtInterMedium15Bluegray400"
                        >
                          ABM Bank
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-start justify-start w-[41%]">
                        <div className="bg-indigo-200 h-[15px] rounded-[50%] w-[15px]"></div>
                        <Text
                          className="text-[15px] text-bluegray-400"
                          size="txtInterMedium15Bluegray400"
                        >
                          MCP Bank
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[66%] md:w-full">
                <Text
                  className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22"
                >
                  Card List
                </Text>
                <List
                  className="flex flex-col gap-5 items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                    <Button className="bg-gray-102 flex h-[60px] items-center justify-center p-[17px] rounded-[20px] w-[60px]">
                      <Img
                        className="h-[26px]"
                        src="images/img_file_1.svg"
                        alt="file One"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[15px]">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Card Type
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        Secondary
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[43px]">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Bank
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        DBL Bank
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] items-center justify-start ml-11 md:ml-[0]">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Card Number
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        **** **** 5600
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[47px]">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Namain Card
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        William{" "}
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[34px] text-[15px] text-indigo-500"
                      size="txtInterMedium15Indigo500"
                    >
                      View Details
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                    <Button className="bg-gray-102 flex h-[60px] items-center justify-center p-[17px] rounded-[20px] w-[60px]">
                      <Img
                        className="h-[26px]"
                        src="images/img_file_1.svg"
                        alt="file Two"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[15px]">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Card Type
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        Secondary
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[43px]">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Bank
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        BRC Bank
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[43px]">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Card Number
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        **** **** 4300
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[46px]">
                      <Text
                        className="text-base text-indigo-600"
                        size="txtInterMedium16Indigo600"
                      >
                        Namain Card
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        Michel
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[34px] text-[15px] text-indigo-500"
                      size="txtInterMedium15Indigo500"
                    >
                      View Details
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                    <Button className="bg-gray-102 flex h-[60px] items-center justify-center p-[17px] rounded-[20px] w-[60px]">
                      <Img
                        className="h-[26px]"
                        src="images/img_file_1.svg"
                        alt="file Three"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[15px]">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Card Type
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        Secondary
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[43px]">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Bank
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        ABM Bank
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] items-center justify-start ml-10 md:ml-[0]">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Card Number
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        **** **** 7560
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-12 md:ml-[0]">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Namain Card
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        Edward
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[34px] text-[15px] text-indigo-500"
                      size="txtInterMedium15Indigo500"
                    >
                      View Details
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[66%] md:w-full">
                <Text
                  className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22"
                >
                  Add New Card
                </Text>
                <div className="bg-white-A700 flex flex-col items-start justify-start p-[27px] sm:px-5 rounded-[25px] w-full">
                  <Text
                    className="leading-[28.00px] md:ml-[0] ml-[3px] text-base text-bluegray-400 w-[94%] sm:w-full"
                    size="txtInterRegular16Bluegray400"
                  >
                    Credit Card generally means a plastic card issued by
                    Scheduled Commercial Banks assigned to a Cardholder, with a
                    credit limit, that can be used to purchase goods and
                    services on credit or obtain cash advances.
                  </Text>
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[3px] mt-[29px] rounded-[15px] w-full">
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[48%] md:w-full">
                      <Text
                        className="text-base text-bluegray-400"
                        size="txtInterRegular16Bluegray400"
                      >
                        Card Type
                      </Text>
                      <Input
                        name="Group195"
                        placeholder="Classic"
                        className="leading-[normal] p-0 placeholder:text-bluegray-900 sm:pr-5 text-[15px] text-bluegray-900 text-left w-full"
                        wrapClassName="bg-white-A700 border border-gray-300 border-solid pl-5 pr-[35px] py-4 rounded-[15px] w-full"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[48%] md:w-full">
                      <Text
                        className="text-base text-bluegray-400"
                        size="txtInterRegular16Bluegray400"
                      >
                        Name On Card
                      </Text>
                      <Input
                        name="Group195 One"
                        placeholder="My Cards"
                        className="leading-[normal] p-0 placeholder:text-bluegray-900 sm:pr-5 text-[15px] text-bluegray-900 text-left w-full"
                        wrapClassName="bg-white-A700 border border-gray-300 border-solid pl-5 pr-[35px] py-4 rounded-[15px] w-full"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[3px] mt-[22px] w-full">
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[48%] md:w-full">
                      <Text
                        className="text-base text-bluegray-400"
                        size="txtInterRegular16Bluegray400"
                      >
                        Card Number
                      </Text>
                      <Input
                        name="Group195 Two"
                        placeholder="**** **** **** ****"
                        className="leading-[normal] p-0 placeholder:text-bluegray-900 sm:pr-5 text-[15px] text-bluegray-900 text-left w-full"
                        wrapClassName="bg-white-A700 border border-gray-300 border-solid pb-5 pl-5 pr-[35px] pt-4 rounded-[15px] w-full"
                        type="password"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start w-[48%] md:w-full">
                      <Text
                        className="text-base text-bluegray-400"
                        size="txtInterRegular16Bluegray400"
                      >
                        Expiration Date
                      </Text>
                      <SelectBox
                        className="bg-white-A700 border border-gray-300 border-solid leading-[normal] pl-5 py-4 rounded-[15px] text-[15px] text-bluegray-900 text-left w-full"
                        placeholderClassName="text-bluegray-900"
                        indicator={
                          <Img
                            className="h-6 mr-[19px] w-6"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="date"
                        options={dateOptionsList}
                        isSearchable={false}
                        placeholder="25 January 2025"
                      />
                    </div>
                  </div>
                  <Button className="bg-indigo-600 cursor-pointer font-medium leading-[normal] mb-[11px] min-w-[160px] md:ml-[0] ml-[3px] mt-[30px] py-3.5 rounded-[9px] text-center text-lg text-white-A700">
                    Add Card
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[32%] md:w-full">
                <Text
                  className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22"
                >
                  Card Setting
                </Text>
                <List
                  className="bg-white-A700 flex flex-col gap-5 items-center p-[30px] sm:px-5 rounded-[25px] w-full"
                  orientation="vertical"
                >
                  <div className="flex md:flex-1 flex-row gap-5 items-center justify-start w-[88%] md:w-full">
                    <Button className="bg-gray-102 flex h-[60px] items-center justify-center p-[17px] rounded-[20px] w-[60px]">
                      <Img
                        className="h-[25px]"
                        src="images/img_videocamera_60X60.svg"
                        alt="videocamera"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Block Card
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        Instantly block your card
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-5 items-center justify-start w-[90%] md:w-full">
                    <Button className="bg-gray-102 flex h-[60px] items-center justify-center p-[17px] rounded-[20px] w-[60px]">
                      <Img
                        className="h-[25px]"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Change Pin Code
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        Choose another pin code
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-5 items-center justify-start w-[94%] md:w-full">
                    <Button className="bg-gray-102 flex h-[60px] items-center justify-center p-[17px] rounded-[20px] w-[60px]">
                      <Img
                        className="h-[25px]"
                        src="images/img_google_60X60.svg"
                        alt="google"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Add to Google Pay
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        Withdraw without any card
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-5 items-center justify-start w-[94%] md:w-full">
                    <Button className="bg-gray-102 flex h-[60px] items-center justify-center p-[17px] rounded-[20px] w-[60px]">
                      <Img
                        className="h-[25px]"
                        src="images/img_maximize.svg"
                        alt="maximize"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Add to Apple Pay
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        Withdraw without any card
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-5 items-center justify-start w-[94%] md:w-full">
                    <Button className="bg-gray-102 flex h-[60px] items-center justify-center p-[17px] rounded-[20px] w-[60px]">
                      <Img
                        className="h-[25px]"
                        src="images/img_maximize.svg"
                        alt="maximize One"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start">
                      <Text
                        className="text-base text-bluegray-900"
                        size="txtInterMedium16Bluegray900"
                      >
                        Add to Apple Store
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        Withdraw without any card
                      </Text>
                    </div>
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

export default CreditCardsPage;
