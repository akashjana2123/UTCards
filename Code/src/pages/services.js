import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

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

  const onMyPrivilegesTextClick = useCallback(() => {
    navigate("/my-privileges");
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
    <div className="w-full relative bg-white h-[64rem] overflow-hidden text-left text-[1rem] text-gray-300 font-heading-four-semibold-20p">
      <div className="absolute top-[6.313rem] left-[15.625rem] bg-whitesmoke-100 w-[74.375rem] h-[57.688rem]" />
      <div className="absolute top-[0rem] left-[0rem] bg-ghostwhite w-[15.625rem] h-[64rem] hidden" />
      <div className="absolute top-[8.188rem] left-[0rem] w-[13.188rem] h-[33.625rem] text-[1.125rem] text-darkgray">
        <img
          className="absolute top-[24.063rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/service-11.svg"
        />
        <img
          className="absolute top-[32.063rem] left-[2.563rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
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
          className="absolute top-[20rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
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
        <div className="absolute top-[24.125rem] left-[5.938rem] font-medium text-blue-200">
          Services
        </div>
        <div
          className="absolute top-[28.125rem] left-[5.938rem] font-medium cursor-pointer"
          onClick={onMyPrivilegesTextClick}
        >
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
        <div className="absolute top-[0rem] left-[0rem] w-[11.813rem] h-[26.688rem]">
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
          <div className="absolute top-[22.938rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue-200 w-[0.375rem] h-[3.75rem]" />
        </div>
      </div>
      <div className="absolute top-[16.813rem] left-[56.563rem] w-[21.875rem] h-[0.063rem]" />
      <div className="absolute top-[6.25rem] left-[15.625rem] bg-aliceblue-300 w-[74.375rem] h-[0.063rem]" />
      <div className="absolute top-[8.188rem] left-[18.125rem] w-[69.375rem] h-[7.5rem] text-[1.25rem]">
        <div className="absolute top-[0rem] left-[23.75rem] w-[21.875rem] h-[7.5rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[21.875rem] h-[7.5rem]" />
          <div className="absolute top-[1.563rem] left-[4rem] w-[13.938rem] h-[4.375rem]">
            <div className="absolute top-[0.563rem] left-[5.75rem] w-[8.188rem] h-[3.188rem]">
              <div className="absolute top-[0rem] left-[0rem] font-semibold">
                Shopping
              </div>
              <div className="absolute top-[2rem] left-[0rem] text-[1rem] text-steelblue">
                Buy. Think. Grow.
              </div>
            </div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[4.375rem] h-[4.375rem]"
              alt=""
              src="/group-374.svg"
            />
          </div>
        </div>
        <div className="absolute top-[0rem] left-[0rem] w-[21.875rem] h-[7.5rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[21.875rem] h-[7.5rem]" />
          <div className="absolute top-[1.563rem] left-[3.25rem] w-[15.375rem] h-[4.375rem]">
            <div className="absolute top-[0.563rem] left-[5.75rem] w-[9.625rem] h-[3.188rem]">
              <div className="absolute top-[0rem] left-[0rem] font-semibold">
                Life Insurance
              </div>
              <div className="absolute top-[2rem] left-[0rem] text-[1rem] text-steelblue">
                Unlimited protection
              </div>
            </div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[4.375rem] h-[4.375rem]"
              alt=""
              src="/group-373.svg"
            />
          </div>
        </div>
        <div className="absolute top-[0rem] left-[47.5rem] w-[21.875rem] h-[7.5rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[21.875rem] h-[7.5rem]" />
          <div className="absolute top-[1.563rem] left-[3.938rem] w-[14.063rem] h-[4.375rem]">
            <div className="absolute top-[0.563rem] left-[5.75rem] w-[8.313rem] h-[3.188rem]">
              <div className="absolute top-[0rem] left-[0rem] font-semibold">
                Safety
              </div>
              <div className="absolute top-[2rem] left-[0rem] text-[1rem] text-steelblue">
                We are your allies
              </div>
            </div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[4.375rem] h-[4.375rem]"
              alt=""
              src="/group-375.svg"
            />
          </div>
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
              Services
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
      <div className="absolute top-[17.188rem] left-[18.125rem] text-[1.375rem] font-semibold text-primary-2">
        Bank Services List
      </div>
      <div className="absolute top-[20.625rem] left-[18.125rem] w-[69.375rem] h-[5.625rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-white w-[69.375rem] h-[5.625rem]" />
        <div className="absolute top-[1.438rem] left-[5.938rem] w-[9.938rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Business loans
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">{`It is a long established `}</div>
        </div>
        <div className="absolute top-[1.438rem] left-[21.125rem] w-[7.25rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
            Many publishing
          </div>
        </div>
        <div className="absolute top-[1.438rem] left-[33.5rem] w-[7.25rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
            Many publishing
          </div>
        </div>
        <div className="absolute top-[1.438rem] left-[45.875rem] w-[7.25rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
            Many publishing
          </div>
        </div>
        <div className="absolute top-[1.75rem] left-[58.125rem] w-[9.375rem] h-[2.188rem] text-center text-[0.938rem] text-steelblue">
          <div className="absolute top-[0.563rem] left-[1.938rem] font-medium">
            View Details
          </div>
          <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[9.375rem] h-[2.188rem] border-[1px] border-solid border-steelblue" />
        </div>
        <img
          className="absolute top-[0.938rem] left-[0.938rem] w-[3.75rem] h-[3.75rem]"
          alt=""
          src="/group-385.svg"
        />
      </div>
      <div className="absolute top-[27.5rem] left-[18.125rem] w-[69.375rem] h-[5.625rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-white w-[69.375rem] h-[5.625rem]" />
        <div className="absolute top-[1.438rem] left-[5.938rem] w-[9.938rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Checking accounts
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">{`It is a long established `}</div>
        </div>
        <div className="absolute top-[1.438rem] left-[21.125rem] w-[7.25rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
            Many publishing
          </div>
        </div>
        <div className="absolute top-[1.438rem] left-[33.5rem] w-[7.25rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
            Many publishing
          </div>
        </div>
        <div className="absolute top-[1.438rem] left-[45.875rem] w-[7.25rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
            Many publishing
          </div>
        </div>
        <div className="absolute top-[1.75rem] left-[58.125rem] w-[9.375rem] h-[2.188rem] text-center text-[0.938rem] text-steelblue">
          <div className="absolute top-[0.563rem] left-[1.938rem] font-medium">
            View Details
          </div>
          <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[9.375rem] h-[2.188rem] border-[1px] border-solid border-steelblue" />
        </div>
        <div className="absolute top-[0.938rem] left-[0.938rem] rounded-xl bg-cornsilk w-[3.75rem] h-[3.75rem]" />
        <img
          className="absolute top-[2.063rem] left-[2.063rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/briefcase-1.svg"
        />
      </div>
      <div className="absolute top-[41.25rem] left-[18.125rem] w-[69.375rem] h-[5.625rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-white w-[69.375rem] h-[5.625rem]" />
        <div className="absolute top-[1.438rem] left-[5.938rem] w-[10.625rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Debit and credit cards
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">{`It is a long established `}</div>
        </div>
        <div className="absolute top-[1.438rem] left-[21.125rem] w-[7.25rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
            Many publishing
          </div>
        </div>
        <div className="absolute top-[1.438rem] left-[33.5rem] w-[7.25rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
            Many publishing
          </div>
        </div>
        <div className="absolute top-[1.438rem] left-[45.875rem] w-[7.25rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
            Many publishing
          </div>
        </div>
        <div className="absolute top-[1.75rem] left-[58.125rem] w-[9.375rem] h-[2.188rem] text-center text-[0.938rem] text-steelblue">
          <div className="absolute top-[0.563rem] left-[1.938rem] font-medium">
            View Details
          </div>
          <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[9.375rem] h-[2.188rem] border-[1px] border-solid border-steelblue" />
        </div>
        <div className="absolute top-[0.938rem] left-[0.938rem] rounded-xl bg-lavender-100 w-[3.75rem] h-[3.75rem]" />
        <img
          className="absolute top-[2.063rem] left-[2.063rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/user-3-2.svg"
        />
      </div>
      <div className="absolute top-[48.125rem] left-[18.125rem] w-[69.375rem] h-[5.625rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-white w-[69.375rem] h-[5.625rem]" />
        <div className="absolute top-[1.438rem] left-[5.938rem] w-[9.938rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Life Insurance
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">{`It is a long established `}</div>
        </div>
        <div className="absolute top-[1.438rem] left-[21.125rem] w-[7.25rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
            Many publishing
          </div>
        </div>
        <div className="absolute top-[1.438rem] left-[33.5rem] w-[7.25rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
            Many publishing
          </div>
        </div>
        <div className="absolute top-[1.438rem] left-[45.875rem] w-[7.25rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
            Many publishing
          </div>
        </div>
        <div className="absolute top-[1.75rem] left-[58.125rem] w-[9.375rem] h-[2.188rem] text-center text-[0.938rem] text-steelblue">
          <div className="absolute top-[0.563rem] left-[1.938rem] font-medium">
            View Details
          </div>
          <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[9.375rem] h-[2.188rem] border-[1px] border-solid border-steelblue" />
        </div>
        <div className="absolute top-[0.938rem] left-[0.938rem] rounded-xl bg-lightcyan w-[3.75rem] h-[3.75rem]" />
        <img
          className="absolute top-[2.063rem] left-[2.063rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/shield-1.svg"
        />
      </div>
      <div className="absolute top-[55rem] left-[18.125rem] w-[69.375rem] h-[5.625rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-white w-[69.375rem] h-[5.625rem]" />
        <div className="absolute top-[1.438rem] left-[5.938rem] w-[9.938rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Business loans
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">{`It is a long established `}</div>
        </div>
        <div className="absolute top-[1.438rem] left-[21.125rem] w-[7.25rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
            Many publishing
          </div>
        </div>
        <div className="absolute top-[1.438rem] left-[33.5rem] w-[7.25rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
            Many publishing
          </div>
        </div>
        <div className="absolute top-[1.438rem] left-[45.875rem] w-[7.25rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
            Many publishing
          </div>
        </div>
        <div className="absolute top-[1.75rem] left-[58.125rem] w-[9.375rem] h-[2.188rem] text-center text-[0.938rem] text-steelblue">
          <div className="absolute top-[0.563rem] left-[1.938rem] font-medium">
            View Details
          </div>
          <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[9.375rem] h-[2.188rem] border-[1px] border-solid border-steelblue" />
        </div>
        <img
          className="absolute top-[0.938rem] left-[0.938rem] w-[3.75rem] h-[3.75rem]"
          alt=""
          src="/group-385.svg"
        />
      </div>
      <div className="absolute top-[34.375rem] left-[18.125rem] w-[69.375rem] h-[5.625rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-white w-[69.375rem] h-[5.625rem]" />
        <div className="absolute top-[1.438rem] left-[5.938rem] w-[9.938rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Savings accounts
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">{`It is a long established `}</div>
        </div>
        <div className="absolute top-[1.438rem] left-[21.125rem] w-[7.25rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
            Many publishing
          </div>
        </div>
        <div className="absolute top-[1.438rem] left-[33.5rem] w-[7.25rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
            Many publishing
          </div>
        </div>
        <div className="absolute top-[1.438rem] left-[45.875rem] w-[7.25rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Lorem Ipsum
          </div>
          <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
            Many publishing
          </div>
        </div>
        <div className="absolute top-[1.75rem] left-[58.125rem] w-[9.375rem] h-[2.188rem] text-center text-[0.938rem] text-blue-200">
          <div className="absolute top-[0.563rem] left-[1.938rem] font-medium">
            View Details
          </div>
          <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[9.375rem] h-[2.188rem] border-[1px] border-solid border-blue-200" />
        </div>
        <div className="absolute top-[0.938rem] left-[0.938rem] rounded-xl bg-mistyrose w-[3.75rem] h-[3.75rem]" />
        <img
          className="absolute h-[27.78%] w-[2.05%] top-[36.67%] right-[94.89%] bottom-[35.56%] left-[3.06%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
      </div>
      <div className="absolute top-[2.75rem] left-[2.563rem] w-[9.813rem] h-[2.25rem] text-[1.563rem] text-primary-2 font-montserrat">
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

export default Services;
