import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Accounts = () => {
  const navigate = useNavigate();

  const onService1IconClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onSettingsSolid1Click = useCallback(() => {
    navigate("/setting-page-1");
  }, [navigate]);

  const onCreditCard1IconClick = useCallback(() => {
    navigate("/credit-cards");
  }, [navigate]);

  const onEconomicInvestment1IconClick = useCallback(() => {
    navigate("/investments");
  }, [navigate]);

  const onTransfer1IconClick = useCallback(() => {
    navigate("/transaction");
  }, [navigate]);

  const onLoan1IconClick = useCallback(() => {
    navigate("/loan");
  }, [navigate]);

  const onTransactionsTextClick = useCallback(() => {
    navigate("/transaction");
  }, [navigate]);

  const onInvestmentsTextClick = useCallback(() => {
    navigate("/investments");
  }, [navigate]);

  const onCreditCardsTextClick = useCallback(() => {
    navigate("/credit-cards");
  }, [navigate]);

  const onLoansTextClick = useCallback(() => {
    navigate("/loan");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onSettingTextClick = useCallback(() => {
    navigate("/setting-page-1");
  }, [navigate]);

  const onHome2IconClick = useCallback(() => {
    navigate("/main-dashboard");
  }, [navigate]);

  const onDashboardTextClick = useCallback(() => {
    navigate("/main-dashboard");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/simple-cards");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[64rem] overflow-hidden text-left text-[1.563rem] text-gray-300 font-heading-four-semibold-20p">
      <div className="absolute top-[0rem] left-[0rem] bg-ghostwhite w-[15.625rem] h-[64rem] hidden" />
      <div className="absolute top-[8.188rem] left-[0rem] w-[13.188rem] h-[33.563rem] text-[1.125rem] text-darkgray">
        <img
          className="absolute top-[24rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
          alt=""
          src="/service-1.svg"
          onClick={onService1IconClick}
        />
        <img
          className="absolute top-[32rem] left-[2.563rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
          alt=""
          src="/settings-solid-1.svg"
          onClick={onSettingsSolid1Click}
        />
        <img
          className="absolute top-[16rem] left-[2.688rem] w-[1.625rem] h-[1.625rem] overflow-hidden cursor-pointer"
          alt=""
          src="/creditcard-1.svg"
          onClick={onCreditCard1IconClick}
        />
        <img
          className="absolute top-[12rem] left-[2.75rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
          alt=""
          src="/economicinvestment-11.svg"
          onClick={onEconomicInvestment1IconClick}
        />
        <img
          className="absolute top-[4rem] left-[2.75rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
          alt=""
          src="/transfer-1.svg"
          onClick={onTransfer1IconClick}
        />
        <img
          className="absolute top-[20.063rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
          alt=""
          src="/loan-1.svg"
          onClick={onLoan1IconClick}
        />
        <div
          className="absolute top-[4.125rem] left-[5.938rem] font-medium cursor-pointer"
          onClick={onTransactionsTextClick}
        >
          Transactions
        </div>
        <div className="absolute top-[8.125rem] left-[5.938rem] font-medium text-blue-200">
          Accounts
        </div>
        <div
          className="absolute top-[12.125rem] left-[5.938rem] font-medium cursor-pointer"
          onClick={onInvestmentsTextClick}
        >
          Investments
        </div>
        <div
          className="absolute top-[16.125rem] left-[5.938rem] font-medium cursor-pointer"
          onClick={onCreditCardsTextClick}
        >
          Credit Cards
        </div>
        <div
          className="absolute top-[20.125rem] left-[5.938rem] font-medium cursor-pointer"
          onClick={onLoansTextClick}
        >
          Loans
        </div>
        <div
          className="absolute top-[24.125rem] left-[5.938rem] font-medium cursor-pointer"
          onClick={onServicesTextClick}
        >
          Services
        </div>
        <div className="absolute top-[28.125rem] left-[5.938rem] font-medium">
          My Privileges
        </div>
        <div
          className="absolute top-[32.125rem] left-[5.938rem] font-medium cursor-pointer"
          onClick={onSettingTextClick}
        >
          Setting
        </div>
        <img
          className="absolute top-[8.063rem] left-[2.75rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/user-3-11.svg"
        />
        <img
          className="absolute top-[28rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/econometrics-1.svg"
        />
        <div className="absolute top-[0rem] left-[0rem] w-[11.813rem] h-[10.75rem]">
          <img
            className="absolute top-[0rem] left-[2.75rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
            alt=""
            src="/home-2.svg"
            onClick={onHome2IconClick}
          />
          <div
            className="absolute top-[0.125rem] left-[5.938rem] font-medium cursor-pointer"
            onClick={onDashboardTextClick}
          >
            Dashboard
          </div>
          <div className="absolute top-[7rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue-200 w-[0.375rem] h-[3.75rem]" />
        </div>
      </div>
      <div className="absolute top-[16.813rem] left-[56.563rem] w-[21.875rem] h-[0.063rem]" />
      <div className="absolute top-[6.25rem] left-[15.625rem] bg-aliceblue-300 w-[74.375rem] h-[0.063rem]" />
      <div className="absolute top-[6.313rem] left-[15.625rem] bg-whitesmoke-100 w-[74.375rem] h-[57.875rem]" />
      <div className="absolute top-[17.125rem] left-[18.125rem] w-[45.625rem] h-[17.625rem] text-[1.375rem] text-darkslateblue-100">
        <div className="absolute top-[0rem] left-[0rem] font-semibold">
          Last Transaction
        </div>
        <div className="absolute top-[2.938rem] left-[0rem] w-[45.625rem] h-[14.688rem] text-[1rem] text-steelblue">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[45.625rem] h-[14.688rem]" />
          <div className="absolute top-[1.563rem] left-[1.563rem] w-[42.5rem] h-[3.438rem]">
            <div className="absolute top-[0.313rem] left-[5rem] w-[9.75rem] h-[2.75rem] text-gray-300">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Spotify Subscription
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                25 Jan 2021
              </div>
            </div>
            <div className="absolute top-[1.125rem] left-[31.375rem]">
              Pending
            </div>
            <div className="absolute top-[1.125rem] left-[23.875rem]">
              1234 ****
            </div>
            <div className="absolute top-[1.125rem] left-[16.688rem]">
              Shopping
            </div>
            <div className="absolute top-[1.125rem] left-[39.625rem] font-medium text-indianred text-right">
              -$150
            </div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[3.438rem] h-[3.438rem]"
              alt=""
              src="/group-328.svg"
            />
          </div>
          <div className="absolute top-[5.625rem] left-[1.563rem] w-[42.5rem] h-[3.438rem]">
            <div className="absolute top-[0.313rem] left-[5rem] w-[7.125rem] h-[2.75rem] text-gray-300">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Mobile Service
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                25 Jan 2021
              </div>
            </div>
            <div className="absolute top-[1.125rem] left-[31.375rem]">
              Completed
            </div>
            <div className="absolute top-[1.125rem] left-[23.875rem]">
              1234 ****
            </div>
            <div className="absolute top-[1.125rem] left-[16.688rem]">
              Service
            </div>
            <div className="absolute top-[1.125rem] left-[39.438rem] font-medium text-indianred text-right">
              -$340
            </div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[3.438rem] h-[3.438rem]"
              alt=""
              src="/group-327.svg"
            />
          </div>
          <div className="absolute top-[9.688rem] left-[1.563rem] w-[42.5rem] h-[3.438rem]">
            <div className="absolute top-[0.313rem] left-[5rem] w-[6.313rem] h-[2.75rem] text-gray-300">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Emilly Wilson
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                25 Jan 2021
              </div>
            </div>
            <div className="absolute top-[1.125rem] left-[31.375rem]">
              Completed
            </div>
            <div className="absolute top-[1.125rem] left-[23.875rem]">
              1234 ****
            </div>
            <div className="absolute top-[1.125rem] left-[16.688rem]">
              Transfer
            </div>
            <div className="absolute top-[1.125rem] left-[39.313rem] font-medium text-aquamarine text-right">
              +$780
            </div>
            <div className="absolute top-[0rem] left-[0rem] w-[3.438rem] h-[3.438rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-mistyrose w-[3.438rem] h-[3.438rem]" />
              <img
                className="absolute top-[0.938rem] left-[0.938rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
                alt=""
                src="/user2-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[36.25rem] left-[65.625rem] w-[21.875rem] h-[25.688rem] text-[1.375rem] text-darkslateblue-100">
        <div className="absolute top-[0rem] left-[0rem] font-semibold">
          Invoices Sent
        </div>
        <div className="absolute top-[2.938rem] left-[0rem] w-[21.875rem] h-[22.75rem] text-[1rem] text-darkgray">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[21.875rem] h-[22.75rem]" />
          <div className="absolute top-[1.875rem] left-[1.563rem] w-[18.75rem] h-[3.75rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[18.75rem] h-[3.75rem]">
              <div className="absolute top-[0rem] left-[0rem] w-[3.75rem] h-[3.75rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-lightcyan w-[3.75rem] h-[3.75rem]" />
                <img
                  className="absolute top-[1.125rem] left-[1.125rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
                  alt=""
                  src="/apple-2-1.svg"
                />
              </div>
              <div className="absolute top-[0.5rem] left-[5rem] w-[5.625rem] h-[2.75rem]">
                <div className="absolute top-[0rem] left-[0rem] font-medium">
                  Apple Store
                </div>
                <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                  5h ago
                </div>
              </div>
              <div className="absolute top-[1.313rem] left-[16.188rem] text-steelblue text-right">
                $450
              </div>
            </div>
          </div>
          <div className="absolute top-[17.063rem] left-[1.563rem] w-[18.75rem] h-[3.75rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-mistyrose w-[3.75rem] h-[3.75rem]" />
            <img
              className="absolute h-[41.67%] w-[8.33%] top-[30%] right-[85.67%] bottom-[28.33%] left-[6%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/user2-1.svg"
            />
            <div className="absolute top-[0.5rem] left-[5rem] w-[5.375rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                William
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                10 days ago
              </div>
            </div>
            <div className="absolute top-[1.313rem] left-[16.813rem] text-steelblue text-right">
              $90
            </div>
          </div>
          <div className="absolute top-[6.938rem] left-[1.563rem] w-[18.75rem] h-[3.75rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-cornsilk w-[3.75rem] h-[3.75rem]" />
            <div className="absolute top-[0.5rem] left-[5rem] w-[4.875rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Michael
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                2 days ago
              </div>
            </div>
            <div className="absolute top-[1.313rem] left-[16.375rem] text-steelblue text-right">
              $160
            </div>
            <img
              className="absolute top-[1.125rem] left-[1.125rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
              alt=""
              src="/user2-11.svg"
            />
          </div>
          <div className="absolute top-[12rem] left-[1.563rem] w-[18.75rem] h-[3.75rem] text-steelblue">
            <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-lavender-100 w-[3.75rem] h-[3.75rem]" />
            <div className="absolute top-[0.5rem] left-[5rem] font-medium text-darkgray">
              Playstation
            </div>
            <div className="absolute top-[2.125rem] left-[5rem] text-[0.938rem]">
              5 days ago
            </div>
            <div className="absolute top-[1.313rem] left-[15.75rem] text-right">
              $1085
            </div>
            <img
              className="absolute top-[1.125rem] left-[1.125rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
              alt=""
              src="/playstation-1.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[0rem] left-[0rem] w-[90rem] h-[6.25rem] text-[1.75rem] text-primary-2">
        <div className="absolute top-[0rem] left-[0rem] bg-white w-[90rem] h-[6.25rem]" />
        <div className="absolute top-[1.25rem] left-[2.563rem] w-[84.938rem] h-[3.75rem]">
          <div className="absolute top-[0rem] left-[15.563rem] w-[69.375rem] h-[3.75rem]">
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
              Accounts
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
          <div className="absolute top-[1.063rem] left-[0rem] w-[9.813rem] h-[2.25rem] text-[1.563rem] font-montserrat">
            <div className="absolute top-[0rem] left-[0rem] w-[9.813rem] h-[2.25rem]">
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
        </div>
      </div>
      <div className="absolute top-[0rem] left-[15.563rem] bg-aliceblue-300 w-[0.063rem] h-[66.375rem]" />
      <div className="absolute top-[17.125rem] left-[65.625rem] w-[21.875rem] h-[17.625rem] text-[0.75rem] text-gray-2000">
        <div className="absolute top-[2.938rem] left-[0rem] w-[21.875rem] h-[14.688rem] font-lato">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl [background:linear-gradient(107.38deg,_#2d60ff,_#539bff)] w-[21.875rem] h-[14.688rem]" />
          <div className="absolute top-[10.313rem] left-[0rem] rounded-t-none rounded-b-6xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.15),_rgba(255,_255,_255,_0))] w-[21.875rem] h-[4.375rem]" />
          <div className="absolute top-[5.688rem] left-[11.438rem] w-[4.375rem] h-[2.181rem]">
            <div className="absolute top-[0rem] left-[0rem]">VALID THRU</div>
            <div className="absolute top-[1.056rem] left-[0rem] text-[0.938rem] font-semibold text-white">
              12/22
            </div>
          </div>
          <div className="absolute top-[5.688rem] left-[1.625rem] w-[5.625rem] h-[2.181rem]">
            <div className="absolute top-[0rem] left-[0rem]">CARD HOLDER</div>
            <div className="absolute top-[1.056rem] left-[0rem] text-[0.938rem] font-semibold text-white">
              Eddy Cusuma
            </div>
          </div>
          <div className="absolute top-[1.5rem] left-[1.625rem] w-[3.938rem] h-[2.375rem] text-white">
            <div className="absolute top-[0rem] left-[0rem]">Balance</div>
            <div className="absolute top-[0.875rem] left-[0rem] text-[1.25rem] font-semibold">
              $5,756
            </div>
          </div>
          <img
            className="absolute top-[1.563rem] left-[18.188rem] w-[2.175rem] h-[2.175rem] object-cover"
            alt=""
            src="/chip-card@2x.png"
          />
          <div className="absolute top-[11.563rem] left-[1.625rem] w-[18.75rem] h-[1.875rem] text-[1.375rem] text-white">
            <div className="absolute top-[0.125rem] left-[0rem] font-semibold">
              3778 **** **** 1234
            </div>
            <img
              className="absolute top-[0rem] left-[16rem] w-[2.75rem] h-[1.875rem]"
              alt=""
              src="/group-17.svg"
            />
          </div>
        </div>
        <div className="absolute top-[0rem] left-[0rem] text-[1.375rem] font-semibold text-darkslateblue-100">
          My Card
        </div>
        <div className="absolute top-[0.313rem] left-[18.313rem] text-[1.063rem] font-semibold text-primary-2 text-right">
          See All
        </div>
      </div>
      <div className="absolute top-[8.188rem] left-[35.938rem] w-[15.938rem] h-[7.5rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[15.938rem] h-[7.5rem]" />
        <div className="absolute top-[1.563rem] left-[2.563rem] w-[10.813rem] h-[4.375rem]">
          <div className="absolute top-[0.438rem] left-[5.313rem] w-[5.5rem] h-[3.5rem]">
            <div className="absolute top-[1.625rem] left-[0rem] font-semibold">
              $5,600
            </div>
            <div className="absolute top-[0rem] left-[0rem] text-[1rem] text-steelblue">
              Income
            </div>
          </div>
          <img
            className="absolute top-[0rem] left-[0rem] w-[4.375rem] h-[4.375rem]"
            alt=""
            src="/group-400.svg"
          />
        </div>
      </div>
      <div className="absolute top-[8.188rem] left-[18.125rem] w-[15.938rem] h-[7.5rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[15.938rem] h-[7.5rem]" />
        <div className="absolute top-[1.563rem] left-[2.25rem] w-[11.438rem] h-[4.375rem]">
          <div className="absolute top-[0.438rem] left-[5.313rem] w-[6.125rem] h-[3.5rem]">
            <div className="absolute top-[1.625rem] left-[0rem] font-semibold">
              $12,750
            </div>
            <div className="absolute top-[0rem] left-[0rem] text-[1rem] text-steelblue">
              My Balance
            </div>
          </div>
          <img
            className="absolute top-[0rem] left-[0rem] w-[4.375rem] h-[4.375rem]"
            alt=""
            src="/group-494.svg"
          />
        </div>
      </div>
      <div className="absolute top-[8.188rem] left-[71.563rem] w-[15.938rem] h-[7.5rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[15.938rem] h-[7.5rem]" />
        <div className="absolute top-[1.563rem] left-[2.438rem] w-[11.125rem] h-[4.375rem]">
          <div className="absolute top-[0.438rem] left-[5.313rem] w-[5.813rem] h-[3.5rem]">
            <div className="absolute top-[1.625rem] left-[0rem] font-semibold">
              $7,920
            </div>
            <div className="absolute top-[0rem] left-[0rem] text-[1rem] text-steelblue">
              Total Saving
            </div>
          </div>
          <img
            className="absolute top-[0rem] left-[0rem] w-[4.375rem] h-[4.375rem]"
            alt=""
            src="/group-401.svg"
          />
        </div>
      </div>
      <div className="absolute top-[8.188rem] left-[53.75rem] w-[15.938rem] h-[7.5rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[15.938rem] h-[7.5rem]" />
        <div className="absolute top-[2rem] left-[7.875rem] w-[5.563rem] h-[3.5rem]">
          <div className="absolute top-[1.625rem] left-[0rem] font-semibold">
            $3,460
          </div>
          <div className="absolute top-[0rem] left-[0rem] text-[1rem] text-steelblue">
            Expense
          </div>
        </div>
        <img
          className="absolute top-[1.563rem] left-[2.563rem] w-[4.375rem] h-[4.375rem]"
          alt=""
          src="/group-402.svg"
        />
      </div>
      <div className="absolute top-[36.25rem] left-[18.125rem] w-[21.813rem] h-[25.688rem] text-center text-[0.875rem] text-steelblue">
        <div className="absolute top-[2.938rem] left-[0rem] rounded-6xl bg-white w-[21.813rem] h-[22.75rem] overflow-hidden">
          <div className="absolute top-[20.375rem] left-[0rem] w-[21.813rem] flex flex-row items-center justify-center gap-[0rem_1.25rem]">
            <div className="relative">Sat</div>
            <div className="relative">Sun</div>
            <div className="relative">Mon</div>
            <div className="relative">Tue</div>
            <div className="relative">Wed</div>
            <div className="relative">Thu</div>
            <div className="relative">Fri</div>
          </div>
          <div className="absolute top-[0.875rem] left-[1.25rem] flex flex-row items-start justify-start gap-[0rem_0.688rem] text-left text-[1rem] text-label-color-light-primary font-roboto">
            <div className="w-[1.125rem] relative rounded-8xs bg-royalblue shadow-[0px_0px_15px_rgba(17,_52,_133,_0.5)_inset] h-[1.125rem]" />
            <div className="relative">
              <span className="font-extrabold">$7,560</span>
              <span className="font-heading-four-semibold-20p text-steelblue">
                {" "}
                Debit
              </span>
            </div>
            <div className="w-[1.125rem] relative rounded-8xs bg-palevioletred shadow-[0px_0px_15px_rgba(172,_13,_108,_0.5)_inset] h-[1.125rem]" />
            <div className="relative">
              <span className="font-extrabold">$5,420</span>
              <span className="font-heading-four-semibold-20p text-steelblue">
                {" "}
                Credit
              </span>
            </div>
          </div>
          <div className="absolute top-[3.875rem] left-[1.375rem] flex flex-row items-end justify-start gap-[0rem_1rem]">
            <div className="w-[1.875rem] relative h-[13.125rem]">
              <div className="absolute top-[9.563rem] left-[0rem] rounded-3xs bg-blue-100 w-[1.875rem] h-[3.563rem]" />
              <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-orange w-[1.875rem] h-[9.563rem]" />
            </div>
            <div className="w-[1.875rem] relative h-[15.938rem]">
              <div className="absolute top-[8.563rem] left-[0rem] rounded-3xs bg-blue-100 w-[1.875rem] h-[7.375rem]" />
              <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-orange w-[1.875rem] h-[8.563rem]" />
            </div>
            <div className="w-[1.875rem] relative h-[5.625rem]">
              <div className="absolute top-[2rem] left-[0rem] rounded-3xs bg-blue-100 w-[1.875rem] h-[3.625rem]" />
              <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-orange w-[1.875rem] h-[2rem]" />
            </div>
            <div className="w-[1.875rem] relative rounded-3xs bg-blue-100 h-[9.875rem]" />
            <div className="w-[1.875rem] relative rounded-3xs bg-blue-100 h-[13.25rem]" />
            <div className="w-[1.875rem] relative h-[8.188rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-orange w-[1.875rem] h-[1.813rem]" />
              <div className="absolute top-[1.813rem] left-[0rem] rounded-3xs bg-blue-100 w-[1.875rem] h-[6.375rem]" />
            </div>
            <div className="w-[1.875rem] relative rounded-3xs bg-orange h-[13.375rem]" />
            <img
              className="w-[19.125rem] relative h-[15.938rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/-httpsapplottiefilescomanimationee8a33f5cc244d79984ae699e422884e@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[0rem] left-[0rem] text-[1.375rem] font-semibold text-darkslateblue-100 text-left">{`Debit & Credit Overview`}</div>
      </div>
      <div className="absolute top-[36.625rem] left-[calc(50%_-_50px)] w-[21.813rem] h-[18.625rem] text-center text-[1.313rem] text-white">
        <div className="absolute top-[2.163rem] left-[calc(50%_-_174.5px)] rounded-6xl bg-white w-[21.813rem] h-[16.463rem] overflow-hidden">
          <div className="absolute top-[9.65rem] left-[5.938rem] w-[10rem] h-[4.188rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-blue-200 shadow-[0px_0px_20px_5px_#1814f3] w-[10rem] h-[4.188rem]" />
            <b className="absolute top-[1.413rem] left-[2rem] flex items-center justify-center w-[6.063rem] h-[1.306rem]">
              Add Card
            </b>
          </div>
          <div
            className="absolute top-[4.213rem] left-[6rem] w-[9.938rem] h-[4.188rem] cursor-pointer"
            onClick={onGroupContainer1Click}
          >
            <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-blue-200 shadow-[0px_0px_20px_5px_#1814f3] w-[9.938rem] h-[4.188rem]" />
            <b className="absolute top-[1.413rem] left-[1.8rem] flex items-center justify-center w-[6.275rem] h-[1.306rem]">
              New Card
            </b>
          </div>
        </div>
        <div className="absolute top-[0rem] left-[0rem] text-[1.375rem] font-semibold text-darkslateblue-100 text-left inline-block w-[7.375rem] h-[1.038rem]">
          New Cards
        </div>
      </div>
    </div>
  );
};

export default Accounts;
