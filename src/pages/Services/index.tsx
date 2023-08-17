import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ServicesPage: React.FC = () => {
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
              <div className="flex flex-row gap-[34px] items-center justify-start w-[64%] md:w-full">
                <Line className="bg-indigo-600 h-[60px] rounded-br-[10px] rounded-tr-[10px] w-1.5" />
                <div className="flex flex-row gap-5 items-center justify-start w-3/4">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_call.svg"
                    alt="call"
                  />
                  <Text
                    className="text-indigo-600 text-lg"
                    size="txtInterMedium18"
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
              Services
            </Text>
            <Input
              name="GroupEight"
              placeholder="Search for something"
              value={groupeightvalue}
              onChange={(e) => setGroupeightvalue(e)}
              className="leading-[normal] p-0 placeholder:text-bluegray-400 sm:pr-5 text-[15px] text-bluegray-400 text-left w-full"
              wrapClassName="bg-gray-101 flex md:flex-1 md:ml-[0] ml-[482px] md:mt-0 my-[5px] pr-[35px] py-4 rounded-[25px] w-[23%] md:w-full"
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
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
                <div className="flex flex-row gap-[22px] items-center justify-start w-[82%] md:w-full">
                  <Button className="bg-gray-102 flex h-[70px] items-center justify-center p-5 rounded-[50%] w-[70px]">
                    <Img
                      className="h-[30px]"
                      src="images/img_location.svg"
                      alt="location"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="text-indigo-600 text-xl"
                      size="txtInterSemiBold20"
                    >
                      Life Insurance
                    </Text>
                    <Text
                      className="text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Unlimited protection
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
                <div className="flex flex-row gap-[22px] items-center justify-start w-3/4 md:w-full">
                  <Button className="bg-gray-102 flex h-[70px] items-center justify-center p-5 rounded-[50%] w-[70px]">
                    <Img
                      className="h-[30px]"
                      src="images/img_bag_70X70.svg"
                      alt="bag"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="text-indigo-600 text-xl"
                      size="txtInterSemiBold20"
                    >
                      Shopping
                    </Text>
                    <Text
                      className="text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Buy. Think. Grow.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
                <div className="flex flex-row gap-[22px] items-center justify-start w-3/4 md:w-full">
                  <Button className="bg-gray-102 flex h-[70px] items-center justify-center p-5 rounded-[50%] w-[70px]">
                    <Img
                      className="h-[30px]"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="text-indigo-600 text-xl"
                      size="txtInterSemiBold20"
                    >
                      Safety
                    </Text>
                    <Text
                      className="text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      We are your allies
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col gap-7 items-start justify-start w-full">
              <Text
                className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                size="txtInterSemiBold22"
              >
                Bank Services List
              </Text>
              <List
                className="flex flex-col gap-5 items-center w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                  <Button className="bg-gray-102 flex h-[60px] items-center justify-center p-[17px] rounded-[20px] w-[60px]">
                    <Img
                      className="h-[25px]"
                      src="images/img_question_60X60.svg"
                      alt="question One"
                    />
                  </Button>
                  <div className="flex flex-col gap-[7px] items-start justify-start ml-5 md:ml-[0]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Business loans
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      It is a long established{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[85px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <Button className="border border-indigo-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[150px] ml-20 md:ml-[0] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-500">
                    View Details
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                  <Button className="bg-gray-102 flex h-[60px] items-center justify-center p-[17px] rounded-[20px] w-[60px]">
                    <Img
                      className="h-[25px]"
                      src="images/img_bag.svg"
                      alt="bag One"
                    />
                  </Button>
                  <div className="flex flex-col gap-[7px] items-start justify-start ml-5 md:ml-[0]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Checking accounts
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      It is a long established{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[85px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <Button className="border border-indigo-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[150px] ml-20 md:ml-[0] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-500">
                    View Details
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                  <Button className="bg-gray-102 flex h-[60px] items-center justify-center p-[17px] rounded-[20px] w-[60px]">
                    <Img src="images/img_graph1.svg" alt="Group" />
                  </Button>
                  <div className="flex flex-col gap-[7px] items-start justify-start ml-5 md:ml-[0]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Savings accounts
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      It is a long established{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[85px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <Button className="border border-indigo-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[150px] ml-20 md:ml-[0] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-500">
                    View Details
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                  <Button className="bg-gray-102 flex h-[60px] items-center justify-center p-[17px] rounded-[20px] w-[60px]">
                    <Img
                      className="h-[25px]"
                      src="images/img_user_70X70.svg"
                      alt="user One"
                    />
                  </Button>
                  <div className="flex flex-col gap-[7px] items-start justify-start ml-5 md:ml-[0]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Debit and credit cards
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      It is a long established{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[73px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <Button className="border border-indigo-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[150px] ml-20 md:ml-[0] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-500">
                    View Details
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                  <Button className="bg-gray-102 flex h-[60px] items-center justify-center p-[17px] rounded-[20px] w-[60px]">
                    <Img
                      className="h-[25px]"
                      src="images/img_checkmark_60X60.svg"
                      alt="checkmark One"
                    />
                  </Button>
                  <div className="flex flex-col gap-[7px] items-start justify-start ml-5 md:ml-[0]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Life Insurance
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      It is a long established{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[85px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <Button className="border border-indigo-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[150px] ml-20 md:ml-[0] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-500">
                    View Details
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                  <Button className="bg-gray-102 flex h-[60px] items-center justify-center p-[17px] rounded-[20px] w-[60px]">
                    <Img
                      className="h-[25px]"
                      src="images/img_question_60X60.svg"
                      alt="question Two"
                    />
                  </Button>
                  <div className="flex flex-col gap-[7px] items-start justify-start ml-5 md:ml-[0]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Business loans
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      It is a long established{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[85px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <Button className="border border-indigo-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[150px] ml-20 md:ml-[0] py-2 rounded-[17.5px] text-[15px] text-center text-indigo-500">
                    View Details
                  </Button>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
