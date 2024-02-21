import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Transaction = () => {
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

  const onLoan1IconClick = useCallback(() => {
    navigate("/loan");
  }, [navigate]);

  const onAccountsTextClick = useCallback(() => {
    navigate("/accounts");
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

  const onUser31Click = useCallback(() => {
    navigate("/accounts");
  }, [navigate]);

  const onHome2IconClick = useCallback(() => {
    navigate("/main-dashboard");
  }, [navigate]);

  const onDashboardTextClick = useCallback(() => {
    navigate("/main-dashboard");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[64rem] overflow-hidden text-left text-[1rem] text-primary-2 font-heading-four-semibold-20p">
      <div className="absolute top-[6.313rem] left-[15.625rem] bg-whitesmoke-100 w-[74.375rem] h-[57.688rem]" />
      <div className="absolute top-[0rem] left-[0rem] bg-ghostwhite w-[15.625rem] h-[64rem] hidden" />
      <div className="absolute top-[8.188rem] left-[0rem] w-[13.188rem] h-[33.563rem] text-[1.125rem] text-darkgray">
        <img
          className="absolute top-[24rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
          alt=""
          src="/service-1.svg"
          onClick={onService1IconClick}
        />
        <img
          className="absolute top-[32rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
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
          className="absolute top-[4rem] left-[2.75rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/transfer-11.svg"
        />
        <img
          className="absolute top-[20.063rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
          alt=""
          src="/loan-1.svg"
          onClick={onLoan1IconClick}
        />
        <div className="absolute top-[4.125rem] left-[5.938rem] font-medium text-blue-200">
          Transactions
        </div>
        <div
          className="absolute top-[8.125rem] left-[5.938rem] font-medium cursor-pointer"
          onClick={onAccountsTextClick}
        >
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
          className="absolute top-[32.125rem] left-[6.063rem] font-medium cursor-pointer"
          onClick={onSettingTextClick}
        >
          Setting
        </div>
        <img
          className="absolute top-[8.063rem] left-[2.75rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
          alt=""
          src="/user-3-1.svg"
          onClick={onUser31Click}
        />
        <img
          className="absolute top-[28rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/econometrics-1.svg"
        />
        <div className="absolute top-[0rem] left-[0rem] w-[11.813rem] h-[6.688rem]">
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
          <div className="absolute top-[2.938rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue-200 w-[0.375rem] h-[3.75rem]" />
        </div>
      </div>
      <div className="absolute top-[16.813rem] left-[56.563rem] w-[21.875rem] h-[0.063rem]" />
      <div className="absolute top-[7.813rem] left-[18.125rem] text-[1.375rem] font-semibold">
        My Cards
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
              Transactions
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
      <div className="absolute top-[6.25rem] left-[15.625rem] bg-aliceblue-300 w-[74.375rem] h-[0.063rem]" />
      <div className="absolute top-[8.125rem] left-[57.938rem] text-[1.063rem] font-semibold">
        + Add Card
      </div>
      <div className="absolute top-[0rem] left-[15.563rem] bg-aliceblue-300 w-[0.063rem] h-[64rem]" />
      <div className="absolute top-[7.813rem] left-[65.625rem] text-[1.375rem] font-semibold">
        My Expense
      </div>
      <div className="absolute top-[10.75rem] left-[65.625rem] w-[21.875rem] h-[14.063rem] text-center text-[0.813rem] text-steelblue">
        <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[21.875rem] h-[14.063rem]" />
        <div className="absolute top-[1.375rem] left-[14rem] text-[0.875rem] font-medium text-primary-2">
          $12,500
        </div>
        <div className="absolute top-[11.5rem] left-[1.938rem]">Aug</div>
        <div className="absolute top-[11.5rem] left-[5.25rem]">Sep</div>
        <div className="absolute top-[11.5rem] left-[8.563rem]">Oct</div>
        <div className="absolute top-[11.5rem] left-[11.688rem]">Nov</div>
        <div className="absolute top-[11.5rem] left-[14.938rem]">Dec</div>
        <div className="absolute top-[11.5rem] left-[18.313rem]">Jan</div>
        <div className="absolute top-[5.125rem] left-[1.563rem] rounded-3xs bg-aliceblue-200 w-[2.313rem] h-[5.813rem]" />
        <div className="absolute top-[2.063rem] left-[4.813rem] rounded-3xs bg-aliceblue-200 w-[2.313rem] h-[8.875rem]" />
        <div className="absolute top-[4.938rem] left-[8.063rem] rounded-3xs bg-aliceblue-200 w-[2.313rem] h-[6rem]" />
        <div className="absolute top-[7.875rem] left-[11.313rem] rounded-3xs bg-aliceblue-200 w-[2.313rem] h-[3.063rem]" />
        <div className="absolute top-[2.875rem] left-[14.563rem] rounded-3xs bg-turquoise shadow-[0px_0px_35px_rgba(18,_136,_126,_0.2)] w-[2.313rem] h-[8.063rem]" />
        <div className="absolute top-[5.438rem] left-[17.813rem] rounded-3xs bg-aliceblue-200 w-[2.313rem] h-[5.5rem]" />
      </div>
      <div className="absolute top-[26.313rem] left-[18.125rem] text-[1.375rem] font-semibold">
        Recent Transactions
      </div>
      <div className="absolute top-[10.75rem] left-[18.125rem] w-[21.875rem] h-[14.063rem] text-[0.75rem] text-gray-2000 font-lato">
        <div className="absolute top-[0rem] left-[0rem] rounded-6xl [background:linear-gradient(107.38deg,_#4c49ed,_#0a06f4)] w-[21.875rem] h-[14.063rem]" />
        <div className="absolute top-[9.688rem] left-[0rem] rounded-t-none rounded-b-6xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.15),_rgba(255,_255,_255,_0))] w-[21.875rem] h-[4.375rem]" />
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
        <div className="absolute top-[10.938rem] left-[1.625rem] w-[18.75rem] h-[1.875rem] text-[1.375rem] text-white">
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
      <div className="absolute top-[10.75rem] left-[41.875rem] w-[21.875rem] h-[14.063rem] text-[0.75rem] text-steelblue font-lato">
        <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white box-border w-[21.875rem] h-[14.063rem] border-[1px] border-solid border-aliceblue-500" />
        <div className="absolute top-[9.688rem] left-[0rem] rounded-t-none rounded-b-6xl box-border w-[21.875rem] h-[4.375rem] border-[1px] border-solid border-aliceblue-600" />
        <div className="absolute top-[5.688rem] left-[11.438rem] w-[4.375rem] h-[2.181rem]">
          <div className="absolute top-[0rem] left-[0rem]">VALID THRU</div>
          <div className="absolute top-[1.056rem] left-[0rem] text-[0.938rem] font-semibold text-primary-2">
            12/22
          </div>
        </div>
        <div className="absolute top-[5.688rem] left-[1.625rem] w-[5.625rem] h-[2.181rem]">
          <div className="absolute top-[0rem] left-[0rem]">CARD HOLDER</div>
          <div className="absolute top-[1.056rem] left-[0rem] text-[0.938rem] font-semibold text-primary-2">
            Eddy Cusuma
          </div>
        </div>
        <div className="absolute top-[1.5rem] left-[1.625rem] w-[3.938rem] h-[2.375rem]">
          <div className="absolute top-[0rem] left-[0rem]">Balance</div>
          <div className="absolute top-[0.875rem] left-[0rem] text-[1.25rem] font-semibold text-primary-2">
            $5,756
          </div>
        </div>
        <img
          className="absolute top-[1.563rem] left-[18.188rem] w-[2.175rem] h-[2.175rem] object-cover"
          alt=""
          src="/chip-card1@2x.png"
        />
        <div className="absolute top-[10.938rem] left-[1.625rem] w-[18.75rem] h-[1.875rem] text-[1.375rem] text-primary-2">
          <div className="absolute top-[0.125rem] left-[0rem] font-semibold">
            3778 **** **** 1234
          </div>
          <img
            className="absolute top-[0rem] left-[16rem] w-[2.75rem] h-[1.875rem]"
            alt=""
            src="/group-171.svg"
          />
        </div>
      </div>
      <div className="absolute top-[29.688rem] left-[18.813rem] font-medium text-blue-200">
        All Transactions
      </div>
      <div className="absolute top-[29.688rem] left-[31.625rem] font-medium text-steelblue">
        Income
      </div>
      <div className="absolute top-[29.688rem] left-[40.313rem] font-medium text-steelblue">
        Expense
      </div>
      <div className="absolute top-[31.5rem] left-[18.125rem] bg-whitesmoke-700 w-[69.375rem] h-[0.063rem]" />
      <div className="absolute top-[31.375rem] left-[18.125rem] rounded-t-3xs rounded-b-none bg-blue-200 w-[9.063rem] h-[0.188rem]" />
      <div className="absolute top-[33.125rem] left-[18.125rem] w-[69.375rem] h-[24.813rem] text-gray-300">
        <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[69.375rem] h-[24.813rem]" />
        <div className="absolute top-[1.375rem] left-[1.875rem] w-[63.125rem] h-[1.188rem] text-steelblue">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Description
          </div>
          <div className="absolute top-[0rem] left-[31.875rem] font-medium">
            Card
          </div>
          <div className="absolute top-[0rem] left-[40.25rem] font-medium">
            Date
          </div>
          <div className="absolute top-[0rem] left-[24.063rem] font-medium">
            Type
          </div>
          <div className="absolute top-[0rem] left-[14.438rem] font-medium">
            Transaction ID
          </div>
          <div className="absolute top-[0rem] left-[52.625rem] font-medium">
            Amount
          </div>
          <div className="absolute top-[0rem] left-[59.5rem] font-medium">
            Receipt
          </div>
        </div>
        <div className="absolute top-[4.25rem] left-[1.875rem] w-[65.625rem] h-[2.188rem]">
          <img
            className="absolute top-[0.125rem] left-[0rem] w-[1.875rem] h-[1.875rem]"
            alt=""
            src="/group-73.svg"
          />
          <div className="absolute top-[0.5rem] left-[2.75rem]">
            Spotify Subscription
          </div>
          <div className="absolute top-[0.5rem] left-[23.938rem]">Shopping</div>
          <div className="absolute top-[0.5rem] left-[14.313rem]">
            #12548796
          </div>
          <div className="absolute top-[0.5rem] left-[31.75rem]">1234 ****</div>
          <div className="absolute top-[0.5rem] left-[40.125rem]">
            28 Jan, 12.30 AM
          </div>
          <div className="absolute top-[0.5rem] left-[52.5rem] font-medium text-indianred">
            -$2,500
          </div>
          <div className="absolute top-[0rem] left-[59.375rem] w-[6.25rem] h-[2.188rem] text-[0.938rem] text-darkslateblue-200">
            <div className="absolute top-[0.563rem] left-[0.938rem]">
              Download
            </div>
            <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[6.25rem] h-[2.188rem] border-[1px] border-solid border-darkslateblue-200" />
          </div>
        </div>
        <div className="absolute top-[8.375rem] left-[1.875rem] w-[65.625rem] h-[2.188rem]">
          <div className="absolute top-[0.5rem] left-[14.313rem]">
            #12548796
          </div>
          <img
            className="absolute top-[0.125rem] left-[0rem] w-[1.875rem] h-[1.875rem]"
            alt=""
            src="/group-731.svg"
          />
          <div className="absolute top-[0.5rem] left-[2.75rem]">
            Freepik Sales
          </div>
          <div className="absolute top-[0.5rem] left-[23.938rem]">Transfer</div>
          <div className="absolute top-[0.5rem] left-[31.75rem]">1234 ****</div>
          <div className="absolute top-[0.5rem] left-[40.125rem]">
            25 Jan, 10.40 PM
          </div>
          <div className="absolute top-[0.5rem] left-[52.5rem] font-medium text-aquamarine">
            +$750
          </div>
          <div className="absolute top-[0rem] left-[59.375rem] w-[6.25rem] h-[2.188rem] text-[0.938rem] text-darkslateblue-200">
            <div className="absolute top-[0.563rem] left-[0.938rem]">
              Download
            </div>
            <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[6.25rem] h-[2.188rem] border-[1px] border-solid border-darkslateblue-200" />
          </div>
        </div>
        <div className="absolute top-[12.5rem] left-[1.875rem] w-[65.625rem] h-[2.188rem]">
          <div className="absolute top-[0.5rem] left-[14.313rem]">
            #12548796
          </div>
          <img
            className="absolute top-[0.125rem] left-[0rem] w-[1.875rem] h-[1.875rem]"
            alt=""
            src="/group-73.svg"
          />
          <div className="absolute top-[0.5rem] left-[2.75rem]">
            Mobile Service
          </div>
          <div className="absolute top-[0.5rem] left-[23.938rem]">Service</div>
          <div className="absolute top-[0.5rem] left-[31.75rem]">1234 ****</div>
          <div className="absolute top-[0.5rem] left-[40.125rem]">
            20 Jan, 10.40 PM
          </div>
          <div className="absolute top-[0.5rem] left-[52.5rem] font-medium text-indianred">
            -$150
          </div>
          <div className="absolute top-[0rem] left-[59.375rem] w-[6.25rem] h-[2.188rem] text-[0.938rem] text-blue-200">
            <div className="absolute top-[0.563rem] left-[0.938rem]">
              Download
            </div>
            <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[6.25rem] h-[2.188rem] border-[1px] border-solid border-blue-200" />
          </div>
        </div>
        <div className="absolute top-[16.625rem] left-[1.875rem] w-[65.625rem] h-[2.188rem]">
          <div className="absolute top-[0.5rem] left-[14.313rem]">
            #12548796
          </div>
          <img
            className="absolute top-[0.125rem] left-[0rem] w-[1.875rem] h-[1.875rem]"
            alt=""
            src="/group-73.svg"
          />
          <div className="absolute top-[0.5rem] left-[2.75rem]">Wilson</div>
          <div className="absolute top-[0.5rem] left-[23.938rem]">Transfer</div>
          <div className="absolute top-[0.5rem] left-[31.75rem]">1234 ****</div>
          <div className="absolute top-[0.5rem] left-[40.125rem]">
            15 Jan, 03.29 PM
          </div>
          <div className="absolute top-[0.5rem] left-[52.5rem] font-medium text-indianred">
            -$1050
          </div>
          <div className="absolute top-[0rem] left-[59.375rem] w-[6.25rem] h-[2.188rem] text-[0.938rem] text-darkslateblue-200">
            <div className="absolute top-[0.563rem] left-[0.938rem]">
              Download
            </div>
            <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[6.25rem] h-[2.188rem] border-[1px] border-solid border-darkslateblue-200" />
          </div>
        </div>
        <div className="absolute top-[20.75rem] left-[1.875rem] w-[65.625rem] h-[2.188rem]">
          <div className="absolute top-[0.5rem] left-[14.313rem]">
            #12548796
          </div>
          <img
            className="absolute top-[0.125rem] left-[0rem] w-[1.875rem] h-[1.875rem] object-contain"
            alt=""
            src="/group-732@2x.png"
          />
          <div className="absolute top-[0.5rem] left-[2.75rem]">Emilly</div>
          <div className="absolute top-[0.5rem] left-[23.938rem]">Transfer</div>
          <div className="absolute top-[0.5rem] left-[31.75rem]">1234 ****</div>
          <div className="absolute top-[0.5rem] left-[40.125rem]">
            14 Jan, 10.40 PM
          </div>
          <div className="absolute top-[0.5rem] left-[52.5rem] font-medium text-aquamarine">
            +$840
          </div>
          <div className="absolute top-[0rem] left-[59.375rem] w-[6.25rem] h-[2.188rem] text-[0.938rem] text-darkslateblue-200">
            <div className="absolute top-[0.563rem] left-[0.938rem]">
              Download
            </div>
            <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[6.25rem] h-[2.188rem] border-[1px] border-solid border-darkslateblue-200" />
          </div>
        </div>
        <div className="absolute top-[3.25rem] left-[1.875rem] bg-aliceblue-300 w-[65.625rem] h-[0.063rem]" />
        <div className="absolute top-[7.375rem] left-[1.875rem] bg-whitesmoke-400 w-[65.625rem] h-[0.063rem]" />
        <div className="absolute top-[11.5rem] left-[1.875rem] bg-whitesmoke-400 w-[65.625rem] h-[0.063rem]" />
        <div className="absolute top-[15.625rem] left-[1.875rem] bg-whitesmoke-400 w-[65.625rem] h-[0.063rem]" />
        <div className="absolute top-[19.75rem] left-[1.875rem] bg-whitesmoke-400 w-[65.625rem] h-[0.063rem]" />
      </div>
      <div className="absolute top-[59.813rem] left-[68.875rem] w-[18.563rem] h-[2.5rem] text-[0.938rem] text-blue-200">
        <div className="absolute top-[0.688rem] left-[15.625rem] w-[2.938rem] h-[1.125rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Next
          </div>
          <img
            className="absolute top-[0.188rem] left-[2.563rem] w-[0.375rem] h-[0.75rem] object-contain"
            alt=""
            src="/vector-2.svg"
          />
        </div>
        <div className="absolute top-[0.688rem] left-[0rem] w-[4.688rem] h-[1.125rem]">
          <div className="absolute top-[0rem] left-[0.813rem] font-medium">
            Previous
          </div>
          <img
            className="absolute top-[0.188rem] left-[0rem] w-[0.375rem] h-[0.75rem] object-contain"
            alt=""
            src="/vector-21.svg"
          />
        </div>
        <div className="absolute top-[0.688rem] left-[10.938rem] font-medium">
          3
        </div>
        <div className="absolute top-[0.688rem] left-[13.25rem] font-medium">
          4
        </div>
        <div className="absolute top-[0rem] left-[5.438rem] rounded-3xs bg-blue-200 w-[2.5rem] h-[2.5rem]" />
        <div className="absolute top-[0.688rem] left-[6.438rem] font-medium text-white">
          1
        </div>
        <div className="absolute top-[0.688rem] left-[8.625rem] font-medium">
          2
        </div>
      </div>
      <div className="absolute top-[2.313rem] left-[2.688rem] w-[9.813rem] h-[2.25rem] text-[1.563rem] font-montserrat">
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

export default Transaction;
