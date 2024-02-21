import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SettingPage1 = () => {
  const navigate = useNavigate();

  const onEditProfileTextClick = useCallback(() => {
    navigate("/setting-page-1");
  }, [navigate]);

  const onSecurityTextClick = useCallback(() => {
    navigate("/setting-page-3");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[64rem] overflow-hidden text-left text-[1.125rem] text-primary-2 font-heading-four-semibold-20p">
      <div className="absolute top-[6.313rem] left-[15.625rem] bg-whitesmoke-100 w-[74.375rem] h-[57.688rem]" />
      <div className="absolute top-[0rem] left-[0rem] bg-ghostwhite w-[15.625rem] h-[64rem] hidden" />
      <div className="absolute top-[8.188rem] left-[0rem] w-[13.188rem] h-[34.688rem] text-darkgray">
        <img
          className="absolute top-[24rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/service-1.svg"
        />
        <img
          className="absolute top-[32.063rem] left-[2.563rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/settings-solid-11.svg"
        />
        <img
          className="absolute top-[16rem] left-[2.688rem] w-[1.625rem] h-[1.625rem] overflow-hidden"
          alt=""
          src="/creditcard-1.svg"
        />
        <img
          className="absolute top-[12rem] left-[2.75rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/economicinvestment-11.svg"
        />
        <img
          className="absolute top-[4rem] left-[2.75rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/transfer-1.svg"
        />
        <img
          className="absolute top-[20rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/loan-1.svg"
        />
        <div className="absolute top-[4.125rem] left-[5.938rem] font-medium">
          Transactions
        </div>
        <div className="absolute top-[8.125rem] left-[5.938rem] font-medium">
          Accounts
        </div>
        <div className="absolute top-[12.125rem] left-[5.938rem] font-medium">
          Investments
        </div>
        <div className="absolute top-[16.125rem] left-[5.938rem] font-medium">
          Credit Cards
        </div>
        <div className="absolute top-[20.125rem] left-[5.938rem] font-medium">
          Loans
        </div>
        <div className="absolute top-[24.125rem] left-[5.938rem] font-medium">
          Services
        </div>
        <div className="absolute top-[28.125rem] left-[5.938rem] font-medium">
          My Privileges
        </div>
        <div className="absolute top-[32.125rem] left-[5.938rem] font-medium text-blue-200">
          Setting
        </div>
        <img
          className="absolute top-[8.063rem] left-[2.75rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/user-3-1.svg"
        />
        <img
          className="absolute top-[28rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/econometrics-1.svg"
        />
        <div className="absolute top-[0rem] left-[0rem] w-[11.813rem] h-[34.688rem]">
          <img
            className="absolute top-[0rem] left-[2.75rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
            alt=""
            src="/home-2.svg"
          />
          <div className="absolute top-[0.125rem] left-[5.938rem] font-medium">
            Dashboard
          </div>
          <div className="absolute top-[30.938rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue-200 w-[0.375rem] h-[3.75rem]" />
        </div>
      </div>
      <div className="absolute top-[16.813rem] left-[56.563rem] w-[21.875rem] h-[0.063rem]" />
      <div className="absolute top-[6.25rem] left-[15.625rem] bg-aliceblue-300 w-[74.375rem] h-[0.063rem]" />
      <div className="absolute top-[8.188rem] left-[18.125rem] w-[69.375rem] h-[33.188rem] text-[1rem] text-gray-300">
        <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[69.375rem] h-[33.188rem]" />
        <div
          className="absolute top-[2.313rem] left-[2.875rem] font-medium text-steelblue cursor-pointer"
          onClick={onEditProfileTextClick}
        >
          Edit Profile
        </div>
        <div className="absolute top-[2.313rem] left-[12.563rem] font-medium text-blue-200">
          Preferences
        </div>
        <div
          className="absolute top-[2.313rem] left-[23.125rem] font-medium text-steelblue cursor-pointer"
          onClick={onSecurityTextClick}
        >
          Security
        </div>
        <div className="absolute top-[4.125rem] left-[1.875rem] bg-whitesmoke-300 w-[65.625rem] h-[0.063rem]" />
        <div className="absolute top-[4rem] left-[11.875rem] rounded-t-3xs rounded-b-none bg-blue-200 w-[7.125rem] h-[0.188rem]" />
        <div className="absolute top-[6.813rem] left-[1.875rem] w-[31.875rem] h-[5rem]">
          <div className="absolute top-[0rem] left-[0rem]">Currency</div>
          <div className="absolute top-[1.875rem] left-[0rem] w-[31.875rem] h-[3.125rem] text-[0.938rem] text-steelblue">
            <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-white box-border w-[31.875rem] h-[3.125rem] border-[1px] border-solid border-aliceblue-600" />
            <div className="absolute top-[1rem] left-[1.25rem]">USD</div>
          </div>
        </div>
        <div className="absolute top-[6.813rem] left-[35.625rem] w-[31.875rem] h-[5rem]">
          <div className="absolute top-[0rem] left-[0rem]">Time Zone</div>
          <div className="absolute top-[1.875rem] left-[0rem] w-[31.875rem] h-[3.125rem] text-[0.938rem] text-steelblue">
            <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-white box-border w-[31.875rem] h-[3.125rem] border-[1px] border-solid border-aliceblue-600" />
            <div className="absolute top-[1rem] left-[1.25rem]">
              (GMT-12:00) International Date Line
            </div>
          </div>
        </div>
        <div className="absolute top-[13.5rem] left-[1.875rem] text-[1.063rem] font-medium text-darkslateblue-100">
          Notification
        </div>
        <div className="absolute top-[16rem] left-[1.875rem] w-[19.938rem] h-[1.919rem]">
          <div className="absolute top-[0.375rem] left-[4.75rem]">
            I send or receive digita currency
          </div>
          <div className="absolute top-[0rem] left-[0rem] w-[3.5rem] h-[1.919rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-turquoise w-[3.5rem] h-[1.919rem]" />
            <div className="absolute top-[0.125rem] left-[1.688rem] rounded-[50%] bg-white shadow-[0px_2px_5px_rgba(0,_0,_0,_0.1)] w-[1.688rem] h-[1.688rem]" />
          </div>
        </div>
        <div className="absolute top-[18.875rem] left-[1.875rem] w-[16.375rem] h-[1.919rem]">
          <div className="absolute top-[0.375rem] left-[4.813rem]">
            I receive merchant order
          </div>
          <div className="absolute top-[0rem] left-[0rem] w-[3.5rem] h-[1.919rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-aliceblue-600 w-[3.5rem] h-[1.919rem]" />
            <div className="absolute top-[0.125rem] left-[0.125rem] rounded-[50%] bg-white shadow-[0px_2px_5px_rgba(0,_0,_0,_0.1)] w-[1.688rem] h-[1.688rem]" />
          </div>
        </div>
        <div className="absolute top-[21.75rem] left-[1.875rem] w-[25rem] h-[1.919rem]">
          <div className="absolute top-[0.375rem] left-[4.813rem]">
            There are recommendation for my account
          </div>
          <div className="absolute top-[0rem] left-[0rem] w-[3.5rem] h-[1.919rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-turquoise w-[3.5rem] h-[1.919rem]" />
            <div className="absolute top-[0.125rem] left-[1.688rem] rounded-[50%] bg-white shadow-[0px_2px_5px_rgba(0,_0,_0,_0.1)] w-[1.688rem] h-[1.688rem]" />
          </div>
        </div>
        <div className="absolute top-[28.188rem] left-[55.625rem] w-[11.875rem] h-[3.125rem] text-center text-[1.125rem] text-white">
          <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-blue-200 w-[11.875rem] h-[3.125rem]" />
          <div className="absolute top-[0.875rem] left-[4.625rem] font-medium">
            Save
          </div>
        </div>
      </div>
      <div className="absolute top-[0rem] left-[0rem] w-[90rem] h-[6.25rem] text-[1.75rem]">
        <div className="absolute top-[0rem] left-[0rem] bg-white w-[90rem] h-[6.25rem]" />
        <div className="absolute top-[1.25rem] left-[18.125rem] w-[69.375rem] h-[3.75rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[69.375rem] h-[3.75rem]">
            <img
              className="absolute top-[0rem] left-[65.625rem] w-[3.75rem] h-[3.75rem] object-cover"
              alt=""
              src="/mask-group@2x.png"
            />
            <img
              className="absolute top-[0.313rem] left-[55.313rem] w-[3.125rem] h-[3.125rem]"
              alt=""
              src="/group-4.svg"
            />
            <img
              className="absolute top-[0.313rem] left-[60.313rem] w-[3.125rem] h-[3.125rem]"
              alt=""
              src="/group-3.svg"
            />
            <div className="absolute top-[0.813rem] left-[0rem] font-semibold">
              Setting
            </div>
            <div className="absolute top-[0.313rem] left-[37.5rem] w-[15.938rem] h-[3.125rem] text-[0.938rem] text-lightsteelblue">
              <div className="absolute top-[0rem] left-[0rem] rounded-21xl bg-whitesmoke-100 w-[15.938rem] h-[3.125rem]" />
              <img
                className="absolute top-[0.938rem] left-[1.563rem] w-[1.25rem] h-[1.25rem] overflow-hidden"
                alt=""
                src="/magnifyingglass-1.svg"
              />
              <div className="absolute top-[1rem] left-[3.75rem]">
                Search for something
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0rem] left-[15.563rem] bg-aliceblue-300 w-[0.063rem] h-[64rem]" />
      <div className="absolute top-[2.625rem] left-[2.563rem] w-[9.813rem] h-[2.25rem] text-[1.563rem] font-montserrat">
        <img
          className="absolute top-[0rem] left-[0rem] w-[2.25rem] h-[2.25rem] overflow-hidden object-cover"
          alt=""
          src="/iconfinder-vector-65-09-473792-11@2x.png"
        />
        <div className="absolute top-[0.25rem] left-[2.813rem] font-extrabold">
          UTCards
        </div>
      </div>
    </div>
  );
};

export default SettingPage1;
