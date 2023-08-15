import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const dateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SettingEditProfilePage = () => {
  const navigate = useNavigate();

  const [groupeightvalue, setGroupeightvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[250px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
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
          <div className="bg-white-A700 flex flex-col gap-[52px] items-center justify-end p-[30px] sm:px-5 rounded-[25px] w-[94%] md:w-full">
            <div className="flex flex-col items-start justify-start mt-[7px] w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[39%] md:w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-[29%] sm:w-full">
                  <Text
                    className="text-base text-indigo-600"
                    size="txtInterMedium16Indigo600"
                  >
                    Edit Profile
                  </Text>
                  <Line className="bg-indigo-600 h-[3px] rounded-tl-[10px] rounded-tr-[10px] w-full" />
                </div>
                <Text
                  className="common-pointer sm:ml-[0] ml-[57px] text-base text-bluegray-400"
                  size="txtInterMedium16Bluegray400"
                  onClick={() => navigate("/settingpagepreferences")}
                >
                  Preferences
                </Text>
                <Text
                  className="common-pointer sm:ml-[0] ml-[76px] text-base text-bluegray-400"
                  size="txtInterMedium16Bluegray400"
                  onClick={() => navigate("/settingpagesecurity")}
                >
                  Security
                </Text>
              </div>
              <Line className="bg-gray-300 h-px w-full" />
            </div>
            <div className="flex md:flex-col flex-row md:gap-[53px] items-start justify-between w-full">
              <div className="h-[130px] md:mt-0 mt-[3px] relative w-[13%] md:w-full">
                <Img
                  className="absolute h-[130px] inset-[0] justify-center m-auto rounded-[50%] w-[130px]"
                  src="images/img_ellipse1.png"
                  alt="EllipseTwentyEight"
                />
                <Button className="absolute bg-indigo-600 bottom-[12%] flex h-[30px] items-center justify-center p-[7px] right-[0] rounded-[50%] w-[30px]">
                  <Img
                    className="h-[15px]"
                    src="images/img_ticket_30X30.svg"
                    alt="ticket"
                  />
                </Button>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start w-[83%] md:w-full">
                <div className="md:gap-5 gap-[29px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-full">
                    <Text
                      className="text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Your Name
                    </Text>
                    <Input
                      name="language"
                      placeholder="Charlene Reed "
                      className="leading-[normal] p-0 placeholder:text-bluegray-900 sm:pr-5 text-[15px] text-bluegray-900 text-left w-full"
                      wrapClassName="bg-white-A700 border border-gray-300 border-solid pl-5 pr-[35px] py-4 rounded-[15px] w-full"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-full">
                    <Text
                      className="text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      User Name
                    </Text>
                    <Input
                      name="language One"
                      placeholder="Charlene Reed "
                      className="leading-[normal] p-0 placeholder:text-bluegray-900 sm:pr-5 text-[15px] text-bluegray-900 text-left w-full"
                      wrapClassName="bg-white-A700 border border-gray-300 border-solid pl-5 pr-[35px] py-4 rounded-[15px] w-full"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-full">
                    <Text
                      className="text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Email
                    </Text>
                    <Input
                      name="email One"
                      placeholder="charlenereed@gmail.com "
                      className="leading-[normal] p-0 placeholder:text-bluegray-900 sm:pr-5 text-[15px] text-bluegray-900 text-left w-full"
                      wrapClassName="bg-white-A700 border border-gray-300 border-solid pl-5 pr-[35px] py-4 rounded-[15px] w-full"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-full">
                    <Text
                      className="text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Password
                    </Text>
                    <Input
                      name="password One"
                      placeholder="**********"
                      className="leading-[normal] p-0 placeholder:text-bluegray-900 sm:pr-5 text-[15px] text-bluegray-900 text-left w-full"
                      wrapClassName="bg-white-A700 border border-gray-300 border-solid pb-5 pl-5 pr-[35px] pt-4 rounded-[15px] w-full"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between mt-[22px] w-full">
                  <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start w-[49%] md:w-full">
                    <Text
                      className="text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Date of Birth
                    </Text>
                    <SelectBox
                      className="bg-white-A700 border border-gray-300 border-solid leading-[normal] pl-5 py-4 rounded-[15px] text-[15px] text-bluegray-900 text-left w-full"
                      placeholderClassName="text-bluegray-900"
                      indicator={
                        <Img
                          className="h-1.5 mr-[25px] w-3"
                          src="images/img_arrowright_bluegray_400.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="date"
                      options={dateOptionsList}
                      isSearchable={false}
                      placeholder="25 January 1990"
                    />
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[49%] md:w-full">
                    <Text
                      className="text-base text-bluegray-400"
                      size="txtInterRegular16Bluegray400"
                    >
                      Present Address
                    </Text>
                    <Input
                      name="Group195"
                      placeholder="San Jose, California, USA"
                      className="leading-[normal] p-0 placeholder:text-bluegray-900 sm:pr-5 text-[15px] text-bluegray-900 text-left w-full"
                      wrapClassName="bg-white-A700 border border-gray-300 border-solid pl-5 pr-[35px] py-4 rounded-[15px] w-full"
                    ></Input>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-[22px] items-center mt-[22px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row gap-[29px] items-center justify-between rounded-[15px] w-full">
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[49%] md:w-full">
                      <Text
                        className="text-base text-bluegray-400"
                        size="txtInterRegular16Bluegray400"
                      >
                        Permanent Address
                      </Text>
                      <Input
                        name="Group195 One"
                        placeholder="San Jose, California, USA"
                        className="leading-[normal] p-0 placeholder:text-bluegray-900 sm:pr-5 text-[15px] text-bluegray-900 text-left w-full"
                        wrapClassName="bg-white-A700 border border-gray-300 border-solid pl-5 pr-[35px] py-4 rounded-[15px] w-full"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[49%] md:w-full">
                      <Text
                        className="text-base text-bluegray-400"
                        size="txtInterRegular16Bluegray400"
                      >
                        City
                      </Text>
                      <Input
                        name="Group195 One"
                        placeholder="San Jose"
                        className="leading-[normal] p-0 placeholder:text-bluegray-900 sm:pr-5 text-[15px] text-bluegray-900 text-left w-full"
                        wrapClassName="bg-white-A700 border border-gray-300 border-solid pl-5 pr-[35px] py-4 rounded-[15px] w-full"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row gap-[29px] items-center justify-between rounded-[15px] w-full">
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[49%] md:w-full">
                      <Text
                        className="text-base text-bluegray-400"
                        size="txtInterRegular16Bluegray400"
                      >
                        Postal Code
                      </Text>
                      <Input
                        name="zipcode"
                        placeholder="45962"
                        className="leading-[normal] p-0 placeholder:text-bluegray-900 sm:pr-5 text-[15px] text-bluegray-900 text-left w-full"
                        wrapClassName="bg-white-A700 border border-gray-300 border-solid pl-5 pr-[35px] py-4 rounded-[15px] w-full"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[49%] md:w-full">
                      <Text
                        className="text-base text-bluegray-400"
                        size="txtInterRegular16Bluegray400"
                      >
                        Country
                      </Text>
                      <Input
                        name="Group195 Two"
                        placeholder="USA"
                        className="leading-[normal] p-0 placeholder:text-bluegray-900 sm:pr-5 text-[15px] text-bluegray-900 text-left w-full"
                        wrapClassName="bg-white-A700 border border-gray-300 border-solid pl-5 pr-[35px] py-4 rounded-[15px] w-full"
                      ></Input>
                    </div>
                  </div>
                </List>
                <Button className="bg-indigo-600 cursor-pointer font-medium leading-[normal] min-w-[190px] md:ml-[0] ml-[675px] mt-[30px] py-3.5 rounded-[15px] text-center text-lg text-white-A700">
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingEditProfilePage;
