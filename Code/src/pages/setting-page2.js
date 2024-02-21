import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SettingPage2 = () => {
  const navigate = useNavigate();

  const onService1IconClick = useCallback(() => {
    navigate("/services");
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

  const onServicesTextClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onMyPrivilegesTextClick = useCallback(() => {
    navigate("/my-privileges");
  }, [navigate]);

  const onUser31Click = useCallback(() => {
    navigate("/accounts");
  }, [navigate]);

  const onEconometrics1IconClick = useCallback(() => {
    navigate("/my-privileges");
  }, [navigate]);

  const onHome2IconClick = useCallback(() => {
    navigate("/main-dashboard");
  }, [navigate]);

  const onDashboardTextClick = useCallback(() => {
    navigate("/main-dashboard");
  }, [navigate]);

  const onPreferencesTextClick = useCallback(() => {
    navigate("/setting-page-2");
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
          className="absolute top-[24rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
          alt=""
          src="/service-1.svg"
          onClick={onService1IconClick}
        />
        <img
          className="absolute top-[32.063rem] left-[2.563rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/settings-solid-11.svg"
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
        <div
          className="absolute top-[24.125rem] left-[5.938rem] font-medium cursor-pointer"
          onClick={onServicesTextClick}
        >
          Services
        </div>
        <div
          className="absolute top-[28.125rem] left-[5.938rem] font-medium cursor-pointer"
          onClick={onMyPrivilegesTextClick}
        >
          My Privileges
        </div>
        <div className="absolute top-[32.125rem] left-[5.938rem] font-medium text-blue-200">
          Setting
        </div>
        <img
          className="absolute top-[8.063rem] left-[2.75rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
          alt=""
          src="/user-3-1.svg"
          onClick={onUser31Click}
        />
        <img
          className="absolute top-[28rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
          alt=""
          src="/econometrics-1.svg"
          onClick={onEconometrics1IconClick}
        />
        <div className="absolute top-[0rem] left-[0rem] w-[11.813rem] h-[34.688rem]">
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
          <div className="absolute top-[30.938rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue-200 w-[0.375rem] h-[3.75rem]" />
        </div>
      </div>
      <div className="absolute top-[16.813rem] left-[56.563rem] w-[21.875rem] h-[0.063rem]" />
      <div className="absolute top-[6.25rem] left-[15.625rem] bg-aliceblue-300 w-[74.375rem] h-[0.063rem]" />
      <div className="absolute top-[8.188rem] left-[18.125rem] w-[69.375rem] h-[44.813rem] text-[1rem] text-gray-300">
        <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[69.375rem] h-[44.813rem]" />
        <img
          className="absolute top-[7.625rem] left-[1.875rem] w-[8.25rem] h-[8.125rem] object-cover"
          alt=""
          src="/group-206@2x.png"
        />
        <div className="absolute top-[2.313rem] left-[1.875rem] w-[65.625rem] h-[1.875rem] text-steelblue">
          <div className="absolute top-[0rem] left-[1rem] font-medium text-blue-200">
            Edit Profile
          </div>
          <div
            className="absolute top-[0rem] left-[10.688rem] font-medium cursor-pointer"
            onClick={onPreferencesTextClick}
          >
            Preferences
          </div>
          <div
            className="absolute top-[0rem] left-[21.25rem] font-medium cursor-pointer"
            onClick={onSecurityTextClick}
          >
            Security
          </div>
          <div className="absolute top-[1.813rem] left-[0rem] bg-whitesmoke-300 w-[65.625rem] h-[0.063rem]" />
          <div className="absolute top-[1.688rem] left-[0rem] rounded-t-3xs rounded-b-none bg-blue-200 w-[7.125rem] h-[0.188rem]" />
        </div>
        <div className="absolute top-[7.438rem] left-[13.438rem] w-[26.125rem] h-[5rem]">
          <div className="absolute top-[0rem] left-[0rem]">Your Name</div>
          <div className="absolute top-[1.875rem] left-[0rem] w-[26.125rem] h-[3.125rem] text-[0.938rem] text-steelblue">
            <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-white box-border w-[26.125rem] h-[3.125rem] border-[1px] border-solid border-aliceblue-600" />
            <div className="absolute top-[1rem] left-[1.25rem]">{`Charlene Reed `}</div>
          </div>
        </div>
        <div className="absolute top-[13.813rem] left-[13.438rem] w-[26.125rem] h-[5rem]">
          <div className="absolute top-[0rem] left-[0rem]">Email</div>
          <div className="absolute top-[1.875rem] left-[0rem] w-[26.125rem] h-[3.125rem] text-[0.938rem] text-steelblue">
            <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-white box-border w-[26.125rem] h-[3.125rem] border-[1px] border-solid border-aliceblue-600" />
            <div className="absolute top-[1rem] left-[1.25rem]">{`charlenereed@gmail.com `}</div>
          </div>
        </div>
        <div className="absolute top-[7.438rem] left-[41.375rem] w-[26.125rem] h-[5rem]">
          <div className="absolute top-[0rem] left-[0rem]">User Name</div>
          <div className="absolute top-[1.875rem] left-[0rem] w-[26.125rem] h-[3.125rem] text-[0.938rem] text-steelblue">
            <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-white box-border w-[26.125rem] h-[3.125rem] border-[1px] border-solid border-aliceblue-600" />
            <div className="absolute top-[1rem] left-[1.25rem]">{`Charlene Reed `}</div>
          </div>
        </div>
        <div className="absolute top-[13.813rem] left-[41.375rem] w-[26.125rem] h-[5rem]">
          <div className="absolute top-[0rem] left-[0rem]">Password</div>
          <div className="absolute top-[1.875rem] left-[0rem] w-[26.125rem] h-[3.125rem] text-[0.938rem] text-steelblue">
            <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-white box-border w-[26.125rem] h-[3.125rem] border-[1px] border-solid border-aliceblue-600" />
            <div className="absolute top-[1rem] left-[1.25rem]">**********</div>
          </div>
        </div>
        <div className="absolute top-[20.188rem] left-[41.375rem] w-[26.125rem] h-[5rem]">
          <div className="absolute top-[0rem] left-[0rem]">Present Address</div>
          <div className="absolute top-[1.875rem] left-[0rem] w-[26.125rem] h-[3.125rem] text-[0.938rem] text-steelblue">
            <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-white box-border w-[26.125rem] h-[3.125rem] border-[1px] border-solid border-aliceblue-600" />
            <div className="absolute top-[1rem] left-[1.25rem]">
              San Jose, California, USA
            </div>
          </div>
        </div>
        <div className="absolute top-[26.563rem] left-[41.375rem] w-[26.125rem] h-[5rem]">
          <div className="absolute top-[0rem] left-[0rem]">City</div>
          <div className="absolute top-[1.875rem] left-[0rem] w-[26.125rem] h-[3.125rem] text-[0.938rem] text-steelblue">
            <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-white box-border w-[26.125rem] h-[3.125rem] border-[1px] border-solid border-aliceblue-600" />
            <div className="absolute top-[1rem] left-[1.25rem]">San Jose</div>
          </div>
        </div>
        <div className="absolute top-[32.938rem] left-[41.375rem] w-[26.125rem] h-[5rem]">
          <div className="absolute top-[0rem] left-[0rem]">Country</div>
          <div className="absolute top-[1.875rem] left-[0rem] w-[26.125rem] h-[3.125rem] text-[0.938rem] text-steelblue">
            <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-white box-border w-[26.125rem] h-[3.125rem] border-[1px] border-solid border-aliceblue-600" />
            <div className="absolute top-[1rem] left-[1.25rem]">USA</div>
          </div>
        </div>
        <div className="absolute top-[26.563rem] left-[13.438rem] w-[26.125rem] h-[5rem]">
          <div className="absolute top-[0rem] left-[0rem]">
            Permanent Address
          </div>
          <div className="absolute top-[1.875rem] left-[0rem] w-[26.125rem] h-[3.125rem] text-[0.938rem] text-steelblue">
            <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-white box-border w-[26.125rem] h-[3.125rem] border-[1px] border-solid border-aliceblue-600" />
            <div className="absolute top-[1rem] left-[1.25rem]">
              San Jose, California, USA
            </div>
          </div>
        </div>
        <div className="absolute top-[32.938rem] left-[13.438rem] w-[26.125rem] h-[5rem]">
          <div className="absolute top-[0rem] left-[0rem]">Postal Code</div>
          <div className="absolute top-[1.875rem] left-[0rem] w-[26.125rem] h-[3.125rem] text-[0.938rem] text-steelblue">
            <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-white box-border w-[26.125rem] h-[3.125rem] border-[1px] border-solid border-aliceblue-600" />
            <div className="absolute top-[1rem] left-[1.25rem]">123456</div>
          </div>
        </div>
        <div className="absolute top-[20.188rem] left-[13.438rem] w-[26.125rem] h-[5rem]">
          <div className="absolute top-[0rem] left-[0rem]">Date of Birth</div>
          <div className="absolute top-[1.875rem] left-[0rem] rounded-mini bg-white box-border w-[26.125rem] h-[3.125rem] border-[1px] border-solid border-aliceblue-600" />
          <div className="absolute top-[2.875rem] left-[1.25rem] text-[0.938rem] text-steelblue">
            25 January 1990
          </div>
          <img
            className="absolute top-[3.25rem] left-[23.813rem] w-[0.75rem] h-[0.375rem]"
            alt=""
            src="/vector-4.svg"
          />
        </div>
        <div className="absolute top-[39.813rem] left-[55.625rem] w-[11.875rem] h-[3.125rem] text-center text-[1.125rem] text-white">
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

export default SettingPage2;
