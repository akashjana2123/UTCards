import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const CreditCards = () => {
  const navigate = useNavigate();

  const onService1IconClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onSettingsSolid1Click = useCallback(() => {
    navigate("/setting-page-1");
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

  const onAccountsTextClick = useCallback(() => {
    navigate("/accounts");
  }, [navigate]);

  const onInvestmentsTextClick = useCallback(() => {
    navigate("/investments");
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

  const onGroupContainer4Click = useCallback(() => {
    navigate("/simple-cards");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[82.438rem] overflow-hidden text-left text-[1.375rem] text-darkslateblue-100 font-heading-four-semibold-20p">
      <div className="absolute top-[6.313rem] left-[15.625rem] bg-whitesmoke-100 w-[74.375rem] h-[76.125rem]" />
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
          className="absolute top-[16rem] left-[2.688rem] w-[1.625rem] h-[1.625rem] overflow-hidden"
          alt=""
          src="/creditcard-11.svg"
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
        <div className="absolute top-[16.125rem] left-[5.938rem] font-medium text-blue-200">
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
        <div className="absolute top-[0rem] left-[0rem] w-[11.813rem] h-[18.688rem]">
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
          <div className="absolute top-[14.938rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue-200 w-[0.375rem] h-[3.75rem]" />
        </div>
      </div>
      <div className="absolute top-[16.813rem] left-[56.563rem] w-[21.875rem] h-[0.063rem]" />
      <div className="absolute top-[6.25rem] left-[15.625rem] bg-aliceblue-300 w-[74.375rem] h-[0.063rem]" />
      <div className="absolute top-[10.75rem] left-[18.125rem] w-[21.875rem] h-[14.063rem] text-[0.75rem] text-gray-2000 font-lato">
        <div className="absolute top-[0rem] left-[0rem] rounded-6xl [background:linear-gradient(107.38deg,_#2d60ff,_#539bff)] w-[21.875rem] h-[14.063rem]" />
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
      <div className="absolute top-[10.75rem] left-[41.875rem] w-[21.875rem] h-[14.063rem] text-[0.75rem] text-gray-2000 font-lato">
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
      <div className="absolute top-[10.75rem] left-[65.625rem] w-[21.875rem] h-[14.063rem] text-[0.75rem] text-steelblue font-lato">
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
      <div className="absolute top-[0rem] left-[0rem] w-[90rem] h-[6.25rem] text-[1.75rem] text-primary-2">
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
              Credit Cards
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
      <div className="absolute top-[7.813rem] left-[18.125rem] font-semibold">
        My Cards
      </div>
      <div className="absolute top-[26.313rem] left-[18.125rem] w-[21.875rem] h-[22.313rem]">
        <div className="absolute top-[0rem] left-[0rem] font-semibold">
          Card Expense Statistics
        </div>
        <div className="absolute top-[2.938rem] left-[0rem] w-[21.875rem] h-[19.375rem] text-[0.938rem] text-steelblue">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[21.875rem] h-[19.375rem]" />
          <img
            className="absolute h-[60.03%] w-[53.71%] top-[9.68%] right-[22%] bottom-[30.29%] left-[24.29%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-346.svg"
          />
          <div className="absolute top-[14.5rem] left-[3.125rem] w-[6rem] h-[1.125rem]">
            <div className="absolute top-[0.063rem] left-[0rem] rounded-[50%] bg-royalblue w-[0.938rem] h-[0.938rem]" />
            <div className="absolute top-[0rem] left-[1.688rem] font-medium">
              DBL Bank
            </div>
          </div>
          <div className="absolute top-[16.5rem] left-[3.125rem] w-[6.313rem] h-[1.125rem]">
            <div className="absolute top-[0.063rem] left-[0rem] rounded-[50%] bg-turquoise w-[0.938rem] h-[0.938rem]" />
            <div className="absolute top-[0rem] left-[1.688rem] font-medium">
              ABM Bank
            </div>
          </div>
          <div className="absolute top-[14.5rem] left-[12.438rem] w-[6.125rem] h-[1.125rem]">
            <div className="absolute top-[0.063rem] left-[0rem] rounded-[50%] bg-palevioletred w-[0.938rem] h-[0.938rem]" />
            <div className="absolute top-[0rem] left-[1.688rem] font-medium">
              BRC Bank
            </div>
          </div>
          <div className="absolute top-[16.5rem] left-[12.438rem] w-[6.313rem] h-[1.125rem]">
            <div className="absolute top-[0.063rem] left-[0rem] rounded-[50%] bg-goldenrod w-[0.938rem] h-[0.938rem]" />
            <div className="absolute top-[0rem] left-[1.688rem] font-medium">
              MCP Bank
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[50.125rem] left-[65.625rem] w-[21.875rem] h-[30.438rem]">
        <div className="absolute top-[0rem] left-[0rem] font-semibold">
          Card Setting
        </div>
        <div className="absolute top-[2.938rem] left-[0rem] w-[21.875rem] h-[27.5rem] text-[1rem] text-gray-300">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[21.875rem] h-[27.5rem]" />
          <div className="absolute top-[6.875rem] left-[1.875rem] w-[16.188rem] h-[3.75rem]">
            <div className="absolute top-[0.5rem] left-[5rem] w-[11.188rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Change Pin Code
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                Choose another pin code
              </div>
            </div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[3.75rem] h-[3.75rem]"
              alt=""
              src="/group-166.svg"
            />
          </div>
          <div className="absolute top-[11.875rem] left-[1.875rem] w-[16.938rem] h-[3.75rem]">
            <div className="absolute top-[0.5rem] left-[5rem] w-[11.938rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Add to Google Pay
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                Withdraw without any card
              </div>
            </div>
            <div className="absolute top-[0rem] left-[0rem] w-[3.75rem] h-[3.75rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-mistyrose w-[3.75rem] h-[3.75rem]" />
              <img
                className="absolute top-[1.125rem] left-[1.125rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
                alt=""
                src="/003googleglasslogo.svg"
              />
            </div>
          </div>
          <div className="absolute top-[1.875rem] left-[1.875rem] w-[15.938rem] h-[3.75rem]">
            <div className="absolute top-[0.438rem] left-[5rem] w-[10.938rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Block Card
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                Instantly block your card
              </div>
            </div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[3.75rem] h-[3.75rem]"
              alt=""
              src="/group-165.svg"
            />
          </div>
          <div className="absolute top-[16.875rem] left-[1.875rem] w-[16.938rem] h-[3.75rem]">
            <div className="absolute top-[0.5rem] left-[5rem] w-[11.938rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Add to Apple Pay
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                Withdraw without any card
              </div>
            </div>
            <div className="absolute top-[0rem] left-[0rem] w-[3.75rem] h-[3.75rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-lightcyan w-[3.75rem] h-[3.75rem]" />
              <img
                className="absolute top-[1.125rem] left-[1.125rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
                alt=""
                src="/apple-2-1.svg"
              />
            </div>
          </div>
          <div className="absolute top-[21.875rem] left-[1.875rem] w-[16.938rem] h-[3.75rem]">
            <div className="absolute top-[0.5rem] left-[5rem] w-[11.938rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Add to Apple Store
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                Withdraw without any card
              </div>
            </div>
            <div className="absolute top-[0rem] left-[0rem] w-[3.75rem] h-[3.75rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-lightcyan w-[3.75rem] h-[3.75rem]" />
              <img
                className="absolute top-[1.125rem] left-[1.125rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
                alt=""
                src="/apple-2-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[50.125rem] left-[18.188rem] font-semibold">
        Add New Card
      </div>
      <div className="absolute top-[53.063rem] left-[18.125rem] w-[45.625rem] h-[27.5rem] text-[1rem] text-steelblue">
        <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[45.625rem] h-[27.5rem]" />
        <div className="absolute top-[1.688rem] left-[1.875rem] leading-[1.75rem] inline-block w-[39.563rem]">
          Credit Card generally means a plastic card issued by Scheduled
          Commercial Banks assigned to a Cardholder, with a credit limit, that
          can be used to purchase goods and services on credit or obtain cash
          advances.
        </div>
        <div className="absolute top-[8.75rem] left-[1.875rem] w-[41.875rem] h-[16.375rem] text-gray-300">
          <div className="absolute top-[0rem] left-[0rem] w-[20rem] h-[5rem]">
            <div className="absolute top-[0rem] left-[0rem]">Card Type</div>
            <div className="absolute top-[1.875rem] left-[0rem] w-[20rem] h-[3.125rem] text-[0.938rem] text-steelblue">
              <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-white box-border w-[20rem] h-[3.125rem] border-[1px] border-solid border-aliceblue-600" />
              <div className="absolute top-[1rem] left-[1.25rem]">Classic</div>
            </div>
          </div>
          <div className="absolute top-[0rem] left-[21.875rem] w-[20rem] h-[5rem]">
            <div className="absolute top-[0rem] left-[0rem]">Name On Card</div>
            <div className="absolute top-[1.875rem] left-[0rem] w-[20rem] h-[3.125rem] text-[0.938rem] text-steelblue">
              <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-white box-border w-[20rem] h-[3.125rem] border-[1px] border-solid border-aliceblue-600" />
              <div className="absolute top-[1rem] left-[1.25rem]">My Cards</div>
            </div>
          </div>
          <div className="absolute top-[6.375rem] left-[0rem] w-[20rem] h-[5rem]">
            <div className="absolute top-[0rem] left-[0rem]">Card Number</div>
            <div className="absolute top-[1.875rem] left-[0rem] w-[20rem] h-[3.125rem] text-[0.938rem] text-steelblue">
              <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-white box-border w-[20rem] h-[3.125rem] border-[1px] border-solid border-aliceblue-600" />
              <div className="absolute top-[1rem] left-[1.25rem]">
                **** **** **** ****
              </div>
            </div>
          </div>
          <div className="absolute top-[6.375rem] left-[21.875rem] w-[20rem] h-[5rem]">
            <div className="absolute top-[0rem] left-[0rem]">
              Expiration Date
            </div>
            <div className="absolute top-[1.875rem] left-[0rem] w-[20rem] h-[3.125rem] text-[0.938rem] text-steelblue">
              <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-white box-border w-[20rem] h-[3.125rem] border-[1px] border-solid border-aliceblue-600" />
              <img
                className="absolute top-[1.375rem] left-[17.688rem] w-[0.75rem] h-[0.375rem]"
                alt=""
                src="/vector-4.svg"
              />
              <div className="absolute top-[1rem] left-[1.25rem]">
                25 January 2025
              </div>
            </div>
          </div>
          <div
            className="absolute top-[13.25rem] left-[0rem] w-[10rem] h-[3.125rem] cursor-pointer text-[1.125rem] text-white"
            onClick={onGroupContainer4Click}
          >
            <div className="absolute top-[0rem] left-[0rem] rounded-4xs bg-blue-200 w-[10rem] h-[3.125rem]" />
            <div className="absolute top-[0.875rem] left-[2.438rem] font-medium">
              Add Card
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[26.313rem] left-[41.875rem] w-[45.625rem] h-[22.313rem]">
        <div className="absolute top-[0rem] left-[0rem] font-semibold">
          Card List
        </div>
        <div className="absolute top-[2.938rem] left-[0rem] w-[45.625rem] h-[19.375rem] text-[1rem] text-gray-300">
          <div className="absolute top-[0rem] left-[0rem] w-[45.625rem] h-[5.625rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-white w-[45.625rem] h-[5.625rem]" />
            <div className="absolute top-[0.938rem] left-[0.938rem] rounded-xl bg-lavender-100 w-[3.75rem] h-[3.75rem]" />
            <img
              className="absolute top-[2rem] left-[2rem] w-[1.625rem] h-[1.625rem] overflow-hidden"
              alt=""
              src="/creditcard-12.svg"
            />
            <div className="absolute top-[1.438rem] left-[5.625rem] w-[4.938rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Card Type
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                Secondary
              </div>
            </div>
            <div className="absolute top-[1.438rem] left-[13.25rem] w-[4.313rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Bank
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                DBL Bank
              </div>
            </div>
            <div className="absolute top-[1.438rem] left-[29.875rem] w-[6.188rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Namain Card
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">{`William `}</div>
            </div>
            <div className="absolute top-[1.438rem] left-[20.313rem] w-[6.625rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Card Number
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                **** **** 5600
              </div>
            </div>
            <div className="absolute top-[2.25rem] left-[38.188rem] text-[0.938rem] font-medium text-blue-200">
              View Details
            </div>
          </div>
          <div className="absolute top-[6.875rem] left-[0rem] w-[45.625rem] h-[5.625rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-white w-[45.625rem] h-[5.625rem]" />
            <div className="absolute top-[0.938rem] left-[0.938rem] rounded-xl bg-mistyrose w-[3.75rem] h-[3.75rem]" />
            <img
              className="absolute top-[2rem] left-[2rem] w-[1.625rem] h-[1.625rem] overflow-hidden"
              alt=""
              src="/creditcard-13.svg"
            />
            <div className="absolute top-[1.438rem] left-[5.625rem] w-[4.938rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Card Type
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                Secondary
              </div>
            </div>
            <div className="absolute top-[1.438rem] left-[13.25rem] w-[4.375rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Bank
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                BRC Bank
              </div>
            </div>
            <div className="absolute top-[1.438rem] left-[29.875rem] w-[6.188rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Namain Card
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                Michel
              </div>
            </div>
            <div className="absolute top-[1.438rem] left-[20.313rem] w-[6.688rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Card Number
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                **** **** 4300
              </div>
            </div>
            <div className="absolute top-[2.25rem] left-[38.188rem] text-[0.938rem] font-medium text-blue-200">
              View Details
            </div>
          </div>
          <div className="absolute top-[13.75rem] left-[0rem] w-[45.625rem] h-[5.625rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-white w-[45.625rem] h-[5.625rem]" />
            <div className="absolute top-[0.938rem] left-[0.938rem] rounded-xl bg-cornsilk w-[3.75rem] h-[3.75rem]" />
            <img
              className="absolute top-[2rem] left-[2rem] w-[1.625rem] h-[1.625rem] overflow-hidden"
              alt=""
              src="/creditcard-14.svg"
            />
            <div className="absolute top-[1.438rem] left-[5.625rem] w-[4.938rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Card Type
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                Secondary
              </div>
            </div>
            <div className="absolute top-[1.438rem] left-[13.25rem] w-[4.563rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Bank
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                ABM Bank
              </div>
            </div>
            <div className="absolute top-[1.438rem] left-[29.875rem] w-[6.188rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Namain Card
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                Edward
              </div>
            </div>
            <div className="absolute top-[1.438rem] left-[20.313rem] w-[6.563rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Card Number
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                **** **** 7560
              </div>
            </div>
            <div className="absolute top-[2.25rem] left-[38.188rem] text-[0.938rem] font-medium text-blue-200">
              View Details
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0rem] left-[15.563rem] bg-aliceblue-300 w-[0.063rem] h-[82.438rem]" />
      <div className="absolute top-[2.313rem] left-[2.563rem] w-[9.813rem] h-[2.25rem] text-[1.563rem] text-primary-2 font-montserrat">
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

export default CreditCards;
