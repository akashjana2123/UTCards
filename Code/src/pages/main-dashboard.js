import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MainDashboard = () => {
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

  return (
    <div className="w-full relative bg-white h-[74rem] overflow-hidden text-left text-[1.375rem] text-primary-2 font-heading-four-semibold-20p">
      <div className="absolute top-[6.313rem] left-[15.625rem] bg-whitesmoke-100 w-[74.375rem] h-[67.688rem]" />
      <div className="absolute top-[26.938rem] left-[65.625rem] w-[21.875rem] h-[22.938rem]">
        <div className="absolute top-[0rem] left-[0rem] font-semibold">
          Expense Statistics
        </div>
        <div className="absolute top-[2.813rem] left-[0rem] w-[21.875rem] h-[20.125rem] text-center text-[1rem] text-white">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[21.875rem] h-[20.125rem]" />
          <img
            className="absolute h-[81.27%] w-[76.89%] top-[10.84%] right-[11.4%] bottom-[7.89%] left-[11.71%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group1.svg"
          />
          <b className="absolute top-[4rem] left-[6.5rem] leading-[1.125rem] inline-block w-[6.263rem] h-[2.531rem]">
            <p className="m-0">30%</p>
            <p className="m-0 text-[0.813rem]">Entertainment</p>
          </b>
          <b className="absolute top-[10.25rem] left-[3.5rem] leading-[1.125rem] inline-block w-[4.925rem] h-[2.531rem]">
            <p className="m-0">20%</p>
            <p className="m-0 text-[0.813rem]">Investment</p>
          </b>
          <b className="absolute top-[7.144rem] left-[12.438rem] leading-[1.125rem] inline-block w-[5.275rem] h-[2.531rem]">
            <p className="m-0">15%</p>
            <p className="m-0 text-[0.813rem]">Bill Expense</p>
          </b>
          <b className="absolute top-[12.125rem] left-[12.125rem] leading-[1.125rem] inline-block w-[3.025rem] h-[2.531rem]">
            <p className="m-0">35%</p>
            <p className="m-0 text-[0.813rem]">Others</p>
          </b>
        </div>
      </div>
      <div className="absolute top-[7.813rem] left-[65.625rem] w-[21.875rem] h-[17.625rem]">
        <div className="absolute top-[0rem] left-[0rem] font-semibold">
          Recent Transaction
        </div>
        <div className="absolute top-[2.938rem] left-[0rem] w-[21.875rem] h-[14.688rem] text-[1rem] text-gray-300">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[21.875rem] h-[14.688rem]" />
          <div className="absolute top-[5.625rem] left-[1.563rem] w-[18.813rem] h-[3.438rem]">
            <div className="absolute top-[0.375rem] left-[4.5rem] w-[7.375rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Deposit Paypal
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                25 January 2021
              </div>
            </div>
            <div className="absolute top-[1.125rem] left-[14.688rem] font-medium text-mediumaquamarine text-right">
              +$2,500
            </div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[3.438rem] h-[3.438rem]"
              alt=""
              src="/group-314.svg"
            />
          </div>
          <div className="absolute top-[1.563rem] left-[1.563rem] w-[18.813rem] h-[3.438rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[18.813rem] h-[3.438rem]">
              <div className="absolute top-[0.375rem] left-[4.5rem] w-[10.438rem] h-[2.75rem]">
                <div className="absolute top-[0rem] left-[0rem] font-medium">
                  Deposit from my Card
                </div>
                <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                  28 January 2021
                </div>
              </div>
              <div className="absolute top-[1.125rem] left-[15.75rem] font-medium text-tomato text-right">
                -$850
              </div>
              <img
                className="absolute top-[0rem] left-[0rem] w-[3.438rem] h-[3.438rem]"
                alt=""
                src="/group-313.svg"
              />
            </div>
          </div>
          <div className="absolute top-[9.688rem] left-[1.563rem] w-[18.813rem] h-[3.438rem]">
            <div className="absolute top-[0.375rem] left-[4.5rem] w-[7.25rem] h-[2.75rem]">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Jemi Wilson
              </div>
              <div className="absolute top-[1.625rem] left-[0rem] text-[0.938rem] text-steelblue">
                21 January 2021
              </div>
            </div>
            <div className="absolute top-[1.125rem] left-[14.625rem] font-medium text-mediumaquamarine text-right">
              +$5,400
            </div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[3.438rem] h-[3.438rem]"
              alt=""
              src="/group-315.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[51.375rem] left-[18.125rem] w-[27.813rem] h-[20.188rem]">
        <div className="absolute top-[0rem] left-[0rem] font-semibold">
          Quick Transfer
        </div>
        <div className="absolute top-[2.938rem] left-[0rem] w-[27.813rem] h-[17.25rem] text-[1rem] text-gray-300">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[27.813rem] h-[17.25rem]" />
          <div className="absolute top-[2.188rem] left-[1.563rem] w-[24.625rem] h-[7.938rem]">
            <div className="absolute top-[0rem] left-[15rem] w-[4.438rem] h-[7.938rem]">
              <div className="absolute top-[5.313rem] left-[0rem] w-[4.438rem] h-[2.625rem]">
                <div className="absolute top-[0rem] left-[0rem]">Workman</div>
                <div className="absolute top-[1.5rem] left-[0.25rem] text-[0.938rem] text-steelblue">
                  Designer
                </div>
              </div>
              <img
                className="absolute top-[0rem] left-[0.063rem] w-[4.375rem] h-[4.375rem] object-contain"
                alt=""
                src="/mask-group1@2x.png"
              />
            </div>
            <div className="absolute top-[0rem] left-[0rem] w-[5.313rem] h-[7.938rem]">
              <div className="absolute top-[5.313rem] left-[0rem] w-[5.313rem] h-[2.625rem]">
                <div className="absolute top-[0rem] left-[0rem]">
                  Livia Bator
                </div>
                <div className="absolute top-[1.5rem] left-[1.5rem] text-[0.938rem] text-steelblue">
                  CEO
                </div>
              </div>
              <img
                className="absolute top-[0rem] left-[0.313rem] w-[4.375rem] h-[4.375rem] object-cover"
                alt=""
                src="/mask-group2@2x.png"
              />
            </div>
            <div className="absolute top-[0rem] left-[7.063rem] w-[5.875rem] h-[7.938rem]">
              <div className="absolute top-[5.313rem] left-[0rem] w-[5.875rem] h-[2.625rem]">
                <div className="absolute top-[0rem] left-[0rem]">
                  Randy Press
                </div>
                <div className="absolute top-[1.5rem] left-[1.125rem] text-[0.938rem] text-steelblue">
                  Director
                </div>
              </div>
              <img
                className="absolute top-[0rem] left-[0.75rem] w-[4.375rem] h-[4.375rem] object-cover"
                alt=""
                src="/mask-group3@2x.png"
              />
            </div>
            <img
              className="absolute top-[2.563rem] left-[21.5rem] w-[3.125rem] h-[3.125rem]"
              alt=""
              src="/group-56.svg"
            />
          </div>
          <div className="absolute top-[11.938rem] left-[1.563rem] w-[24.688rem] h-[3.125rem] text-steelblue">
            <div className="absolute top-[1rem] left-[0rem]">Write Amount</div>
            <div className="absolute top-[0rem] left-[8.125rem] w-[16.563rem] h-[3.125rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-31xl bg-aliceblue-100 w-[16.563rem] h-[3.125rem]" />
              <div className="absolute top-[1rem] left-[1.875rem]">525.50</div>
              <div className="absolute top-[0rem] left-[8.75rem] w-[7.813rem] h-[3.125rem] text-white">
                <div className="absolute top-[0rem] left-[0rem] rounded-31xl bg-blue-200 shadow-[4px_4px_18px_-2px_rgba(231,_228,_232,_0.8)] w-[7.813rem] h-[3.125rem]" />
                <div className="absolute h-[58%] w-[61.6%] top-[32%] right-[19.2%] bottom-[10%] left-[19.2%]">
                  <img
                    className="absolute h-[78.62%] w-[33.77%] top-[21.38%] right-[0%] bottom-[0%] left-[66.23%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group2.svg"
                  />
                  <div className="absolute top-[0rem] left-[0rem] font-medium">
                    Send
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[51.375rem] left-[47.813rem] w-[39.688rem] h-[20.188rem]">
        <div className="absolute top-[0rem] left-[0rem] font-semibold">
          Balance History
        </div>
        <div className="absolute top-[2.938rem] left-[0rem] w-[39.688rem] h-[17.25rem] text-[0.875rem] text-steelblue">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[39.688rem] h-[17.25rem]" />
          <div className="absolute h-[9.24%] w-[77.8%] top-[83.08%] right-[12.44%] bottom-[7.68%] left-[9.76%]">
            <div className="absolute h-[67.06%] w-[4.05%] top-[31.76%] left-[0%] inline-block [-webkit-text-stroke:1px_#718ebf]">
              Jul
            </div>
            <div className="absolute h-[67.06%] w-[5.47%] top-[31.76%] left-[13.85%] inline-block [-webkit-text-stroke:1px_#718ebf]">
              Aug
            </div>
            <div className="absolute h-[67.06%] w-[5.26%] top-[31.76%] left-[31.78%] inline-block [-webkit-text-stroke:1px_#718ebf]">
              Sep
            </div>
            <div className="absolute h-[67.06%] w-[4.86%] top-[31.76%] left-[47.57%] inline-block [-webkit-text-stroke:1px_#718ebf]">
              Oct
            </div>
            <div className="absolute h-[67.06%] w-[5.47%] top-[31.76%] left-[63.56%] inline-block [-webkit-text-stroke:1px_#718ebf]">{`Nov `}</div>
            <div className="absolute h-[67.06%] w-[5.47%] top-[32.94%] left-[79.35%] inline-block [-webkit-text-stroke:1px_#718ebf]">
              Dec
            </div>
            <div className="absolute h-[67.06%] w-[4.86%] top-[31.76%] left-[95.14%] inline-block [-webkit-text-stroke:1px_#718ebf]">
              Jan
            </div>
            <img
              className="absolute h-[16.86%] w-[0.2%] top-[0%] right-[99.6%] bottom-[83.14%] left-[0.2%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group3.svg"
            />
            <img
              className="absolute h-[16.86%] w-[0.2%] top-[0%] right-[83.81%] bottom-[83.14%] left-[15.99%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group3.svg"
            />
            <img
              className="absolute h-[16.86%] w-[0.2%] top-[0%] right-[68.02%] bottom-[83.14%] left-[31.78%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group3.svg"
            />
            <img
              className="absolute h-[16.86%] w-[0.2%] top-[0%] right-[52.23%] bottom-[83.14%] left-[47.57%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group3.svg"
            />
            <img
              className="absolute h-[16.86%] w-[0.2%] top-[0%] right-[36.23%] bottom-[83.14%] left-[63.56%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group3.svg"
            />
            <img
              className="absolute h-[16.86%] w-[0.2%] top-[0%] right-[20.45%] bottom-[83.14%] left-[79.35%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group3.svg"
            />
            <img
              className="absolute h-[16.86%] w-[0.2%] top-[0%] right-[4.66%] bottom-[83.14%] left-[95.14%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group3.svg"
            />
          </div>
          <div className="absolute h-[71.2%] w-[6.77%] top-[13.37%] right-[90.08%] bottom-[15.43%] left-[3.15%] text-right text-[0.813rem]">
            <div className="absolute h-[5.14%] w-[52.09%] top-[94.86%] right-[1.4%] bottom-[0%] left-[46.51%] text-[0.75rem]">
              <img
                className="absolute h-[9.9%] w-[28.57%] top-[49.5%] right-[0%] bottom-[40.59%] left-[71.43%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector1.svg"
              />
              <div className="absolute h-full w-[33.48%] top-[0%] left-[0%] flex items-center [-webkit-text-stroke:1px_#718ebf]">
                0
              </div>
            </div>
            <div className="absolute h-[5.14%] w-full top-[71.3%] right-[0%] bottom-[23.56%] left-[0%]">
              <img
                className="absolute h-[9.9%] w-[14.65%] top-[47.52%] right-[0%] bottom-[42.57%] left-[85.35%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector2.svg"
              />
              <div className="absolute h-full w-[67.44%] top-[0%] left-[0%] flex items-center [-webkit-text-stroke:1px_#718ebf]">
                200
              </div>
            </div>
            <div className="absolute h-[5.29%] w-full top-[47.68%] right-[0%] bottom-[47.02%] left-[0%]">
              <img
                className="absolute h-[9.62%] w-[14.65%] top-[50%] right-[0%] bottom-[40.38%] left-[85.35%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector3.svg"
              />
              <div className="absolute h-full w-[66.51%] top-[0%] left-[0%] flex items-center [-webkit-text-stroke:1px_#718ebf]">
                400
              </div>
            </div>
            <div className="absolute h-[5.29%] w-full top-[23.61%] right-[0%] bottom-[71.09%] left-[0%]">
              <img
                className="absolute h-[9.62%] w-[14.65%] top-[50%] right-[0%] bottom-[40.38%] left-[85.35%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector3.svg"
              />
              <div className="absolute h-full w-[66.51%] top-[0%] left-[0%] flex items-center [-webkit-text-stroke:1px_#718ebf]">
                600
              </div>
            </div>
            <div className="absolute h-[5.29%] w-full top-[0%] right-[0%] bottom-[94.71%] left-[0%]">
              <img
                className="absolute h-[9.62%] w-[14.65%] top-[50%] right-[0%] bottom-[40.38%] left-[85.35%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector3.svg"
              />
              <div className="absolute h-full w-[66.51%] top-[0%] left-[0%] flex items-center [-webkit-text-stroke:1px_#718ebf]">
                800
              </div>
            </div>
          </div>
          <img
            className="absolute h-[67.54%] w-[86.14%] top-[15.18%] right-[3.94%] bottom-[17.28%] left-[9.92%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group4.svg"
          />
          <img
            className="absolute top-[2.5rem] left-[3.938rem] w-[34.188rem] h-[11.063rem]"
            alt=""
            src="/vector4.svg"
          />
        </div>
      </div>
      <div className="absolute top-[0rem] left-[0rem] w-[90rem] h-[6.313rem] text-[1.75rem]">
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
              Overview
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
        <div className="absolute top-[6.25rem] left-[15.625rem] bg-aliceblue-300 w-[74.375rem] h-[0.063rem]" />
      </div>
      <div className="absolute top-[0rem] left-[0rem] w-[15.625rem] h-[74rem] text-[1.125rem] text-darkgray">
        <div className="absolute top-[7.125rem] left-[0rem] w-[13.188rem] h-[34.625rem]">
          <img
            className="absolute top-[25.063rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
            alt=""
            src="/service-1.svg"
            onClick={onService1IconClick}
          />
          <img
            className="absolute top-[33.063rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
            alt=""
            src="/settings-solid-1.svg"
            onClick={onSettingsSolid1Click}
          />
          <img
            className="absolute top-[17.063rem] left-[2.688rem] w-[1.625rem] h-[1.625rem] overflow-hidden cursor-pointer"
            alt=""
            src="/creditcard-1.svg"
            onClick={onCreditCard1IconClick}
          />
          <img
            className="absolute top-[13.063rem] left-[2.75rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
            alt=""
            src="/economicinvestment-11.svg"
            onClick={onEconomicInvestment1IconClick}
          />
          <img
            className="absolute top-[5.063rem] left-[2.75rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
            alt=""
            src="/transfer-1.svg"
            onClick={onTransfer1IconClick}
          />
          <img
            className="absolute top-[21.125rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
            alt=""
            src="/loan-1.svg"
            onClick={onLoan1IconClick}
          />
          <div className="absolute top-[5.188rem] left-[5.938rem] font-medium">
            Transactions
          </div>
          <div
            className="absolute top-[9.188rem] left-[5.938rem] font-medium cursor-pointer"
            onClick={onAccountsTextClick}
          >
            Accounts
          </div>
          <div
            className="absolute top-[13.188rem] left-[5.938rem] font-medium cursor-pointer"
            onClick={onInvestmentsTextClick}
          >
            Investments
          </div>
          <div
            className="absolute top-[17.188rem] left-[5.938rem] font-medium cursor-pointer"
            onClick={onCreditCardsTextClick}
          >
            Credit Cards
          </div>
          <div
            className="absolute top-[21.188rem] left-[5.938rem] font-medium cursor-pointer"
            onClick={onLoansTextClick}
          >
            Loans
          </div>
          <div
            className="absolute top-[25.188rem] left-[5.938rem] font-medium cursor-pointer"
            onClick={onServicesTextClick}
          >
            Services
          </div>
          <div className="absolute top-[29.188rem] left-[5.938rem] font-medium">
            My Privileges
          </div>
          <div
            className="absolute top-[33.188rem] left-[6.063rem] font-medium cursor-pointer"
            onClick={onSettingTextClick}
          >
            Setting
          </div>
          <img
            className="absolute top-[9.125rem] left-[2.75rem] w-[1.563rem] h-[1.563rem] overflow-hidden cursor-pointer"
            alt=""
            src="/user-3-1.svg"
            onClick={onUser31Click}
          />
          <img
            className="absolute top-[29.063rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
            alt=""
            src="/econometrics-1.svg"
          />
          <div className="absolute top-[0rem] left-[0rem] w-[11.813rem] h-[3.75rem] text-primary-3">
            <img
              className="absolute top-[1.063rem] left-[2.75rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
              alt=""
              src="/home-21.svg"
            />
            <div className="absolute top-[1.188rem] left-[5.938rem] font-medium">
              Dashboard
            </div>
            <div className="absolute top-[0rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-primary-3 w-[0.375rem] h-[3.75rem]" />
          </div>
        </div>
        <div className="absolute top-[0rem] left-[15.563rem] bg-aliceblue-300 w-[0.063rem] h-[74rem]" />
      </div>
      <div className="absolute top-[7.813rem] left-[18.125rem] w-[45.625rem] h-[17.625rem] text-[0.75rem]">
        <div className="absolute top-[0rem] left-[0rem] text-[1.375rem] font-semibold">
          My Cards
        </div>
        <div className="absolute top-[2.938rem] left-[0rem] w-[21.875rem] h-[14.688rem] text-white font-lato">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl [background:linear-gradient(107.38deg,_#4c49ed,_#0a06f4)] w-[21.875rem] h-[14.688rem]" />
          <div className="absolute top-[5.938rem] left-[1.625rem] w-[14.188rem] h-[2.181rem] text-gray-2000">
            <div className="absolute top-[0rem] left-[9.813rem] w-[4.375rem] h-[2.181rem]">
              <div className="absolute top-[0rem] left-[0rem]">VALID THRU</div>
              <div className="absolute top-[1.056rem] left-[0rem] text-[0.938rem] font-semibold text-white">
                12/22
              </div>
            </div>
            <div className="absolute top-[0rem] left-[0rem] w-[5.625rem] h-[2.181rem]">
              <div className="absolute top-[0rem] left-[0rem]">CARD HOLDER</div>
              <div className="absolute top-[1.056rem] left-[0rem] text-[0.938rem] font-semibold text-white">
                Eddy Cusuma
              </div>
            </div>
          </div>
          <div className="absolute top-[1.5rem] left-[1.625rem] w-[3.938rem] h-[2.375rem]">
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
          <div className="absolute top-[10.313rem] left-[0rem] w-[21.875rem] h-[4.375rem] text-[1.375rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-t-none rounded-b-6xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.15),_rgba(255,_255,_255,_0))] w-[21.875rem] h-[4.375rem]" />
            <div className="absolute top-[1.25rem] left-[1.625rem] w-[18.75rem] h-[1.875rem]">
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
        </div>
        <div className="absolute top-[2.938rem] left-[23.75rem] w-[21.875rem] h-[14.688rem] text-steelblue font-lato">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white box-border w-[21.875rem] h-[14.688rem] border-[1px] border-solid border-aliceblue-500" />
          <div className="absolute top-[10.313rem] left-[0rem] rounded-t-none rounded-b-6xl box-border w-[21.875rem] h-[4.375rem] border-[1px] border-solid border-aliceblue-600" />
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
            src="/chip-card2@2x.png"
          />
          <div className="absolute top-[11.563rem] left-[1.625rem] w-[18.75rem] h-[1.875rem] text-[1.375rem] text-primary-2">
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
        <div className="absolute top-[0.313rem] left-[41.625rem] text-[1.063rem] font-semibold text-right">
          See All
        </div>
      </div>
      <div className="absolute top-[30.75rem] left-[18.125rem] flex flex-col items-start justify-start gap-[0.5rem_0rem] text-[1.125rem]">
        <div className="relative font-semibold">Pay Using UPI</div>
        <div className="w-[21.875rem] relative h-[12.638rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[21.875rem] h-[12.638rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[21.875rem] h-[12.638rem]" />
            <div className="absolute top-[0rem] left-[0rem] rounded-6xl w-[21.875rem] h-[12.625rem] flex flex-row flex-wrap items-center justify-center py-[0.313rem] px-[1.875rem] box-border gap-[1.25rem]">
              <img
                className="w-[8.163rem] relative h-[4.081rem]"
                alt=""
                src="/group-884.svg"
              />
              <div className="w-[8.163rem] relative h-[4.081rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-whitesmoke-800 shadow-[0px_6px_5px_rgba(0,_0,_0,_0.1)] w-[8.163rem] h-[4.081rem]" />
                <img
                  className="absolute top-[0.85rem] left-[0.513rem] rounded-3xs w-[7.144rem] h-[2.381rem] object-cover"
                  alt=""
                  src="/paytm@2x.png"
                />
              </div>
              <div className="w-[8.163rem] relative h-[4.081rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-whitesmoke-800 shadow-[0px_6px_5px_rgba(0,_0,_0,_0.1)] w-[8.163rem] h-[4.081rem]" />
                <img
                  className="absolute h-[61.1%] w-[30.55%] top-[19.45%] right-[34.76%] bottom-[19.45%] left-[34.69%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/phone-pay.svg"
                />
              </div>
              <div className="w-[8.163rem] relative h-[4.081rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-whitesmoke-800 shadow-[0px_6px_5px_rgba(0,_0,_0,_0.1)] w-[8.163rem] h-[4.081rem]" />
                <img
                  className="absolute h-[49.62%] w-[35.15%] top-[25.11%] right-[32.47%] bottom-[25.27%] left-[32.39%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/bhim.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[29.375rem] left-[41.875rem] flex flex-col items-start justify-start gap-[0.625rem_0rem] text-steelblue">
        <div className="w-[21.875rem] relative h-[18.813rem] z-[0]">
          <div className="absolute top-[0rem] left-[0rem] font-semibold text-primary-2 inline-block w-[10.969rem] h-[1.375rem]">
            Weekly Activity
          </div>
          <div className="absolute top-[2.306rem] left-[0rem] rounded-6xl bg-white w-[21.875rem] h-[16.506rem]" />
          <div className="absolute top-[2.938rem] left-[11rem] w-[9rem] h-[0.938rem] text-[0.75rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[9rem] h-[0.938rem]">
              <div className="absolute top-[0rem] left-[0rem] w-[4.125rem] h-[0.938rem]">
                <div className="absolute top-[0.188rem] left-[0rem] rounded-[50%] bg-turquoise w-[0.563rem] h-[0.563rem]" />
                <div className="absolute top-[0rem] left-[0.813rem]">
                  Purchase
                </div>
              </div>
              <div className="absolute top-[0rem] left-[4.813rem] w-[4.188rem] h-[0.938rem]">
                <div className="absolute top-[0.188rem] left-[0rem] rounded-[50%] bg-blue-200 w-[0.563rem] h-[0.563rem]" />
                <div className="absolute top-[0rem] left-[0.75rem] inline-block w-[3.438rem]">
                  Withdraw
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[4.25rem] left-[0.625rem] w-[1.625rem] h-[12.563rem] text-right text-[0.813rem]">
            <div className="absolute top-[0rem] left-[0rem]">500</div>
            <div className="absolute top-[2.313rem] left-[0.063rem]">400</div>
            <div className="absolute top-[4.625rem] left-[0.063rem]">300</div>
            <div className="absolute top-[6.938rem] left-[0rem]">200</div>
            <div className="absolute top-[9.25rem] left-[0rem]">100</div>
            <div className="absolute top-[11.563rem] left-[0.875rem]">0</div>
          </div>
        </div>
        <div className="w-[18.063rem] absolute my-0 mx-[!important] top-[4.688rem] left-[2.688rem] h-[11.688rem] z-[1]">
          <div className="absolute top-[0rem] left-[0rem] bg-whitesmoke-500 w-[18.063rem] h-[0.063rem]" />
          <div className="absolute top-[2.325rem] left-[0rem] bg-whitesmoke-500 w-[18.063rem] h-[0.063rem]" />
          <div className="absolute top-[4.65rem] left-[0rem] bg-whitesmoke-500 w-[18.063rem] h-[0.063rem]" />
          <div className="absolute top-[6.975rem] left-[0rem] bg-whitesmoke-500 w-[18.063rem] h-[0.063rem]" />
          <div className="absolute top-[9.3rem] left-[0rem] bg-whitesmoke-500 w-[18.063rem] h-[0.063rem]" />
          <div className="absolute top-[11.625rem] left-[0rem] bg-whitesmoke-500 w-[18.063rem] h-[0.063rem]" />
        </div>
        <div className="w-[17.813rem] my-0 mx-[!important] absolute top-[16.625rem] left-[2.688rem] flex flex-row items-center justify-center gap-[0rem_1.25rem] z-[2] text-center text-[0.813rem]">
          <div className="relative">Sat</div>
          <div className="relative">Sun</div>
          <div className="relative">Mon</div>
          <div className="relative">Tue</div>
          <div className="relative">Wed</div>
          <div className="relative">Thu</div>
          <div className="relative">Fri</div>
        </div>
        <div className="w-[0.938rem] absolute my-0 mx-[!important] top-[5.25rem] left-[2.938rem] h-[11.063rem] z-[3]">
          <div className="absolute top-[2.125rem] left-[0rem] rounded-11xl bg-blue-200 w-[0.938rem] h-[8.938rem]" />
          <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-turquoise w-[0.938rem] h-[2.125rem]" />
        </div>
        <div className="w-[0.938rem] absolute my-0 mx-[!important] top-[5.688rem] left-[5.625rem] h-[10.625rem] z-[4]">
          <div className="absolute top-[5.25rem] left-[0rem] rounded-11xl bg-blue-200 w-[0.938rem] h-[5.375rem]" />
          <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-turquoise w-[0.938rem] h-[5.25rem]" />
        </div>
        <div className="w-[0.938rem] absolute my-0 mx-[!important] top-[12.688rem] left-[8.438rem] h-[3.688rem] z-[5]">
          <div className="absolute top-[2.644rem] left-[0rem] rounded-11xl bg-blue-200 w-[0.938rem] h-[1.044rem]" />
          <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-turquoise w-[0.938rem] h-[2.644rem]" />
        </div>
        <div className="w-[0.938rem] absolute my-0 mx-[!important] top-[10.938rem] left-[11.25rem] h-[5.375rem] z-[6]">
          <div className="absolute top-[3.85rem] left-[0rem] rounded-11xl bg-blue-200 w-[0.938rem] h-[1.525rem]" />
          <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-turquoise w-[0.938rem] h-[3.85rem]" />
        </div>
        <div className="w-[0.938rem] absolute my-0 mx-[!important] top-[10.688rem] left-[14.125rem] h-[5.625rem] z-[7]">
          <div className="absolute top-[3.625rem] left-[0rem] rounded-11xl bg-blue-200 w-[0.938rem] h-[2rem]" />
          <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-turquoise w-[0.938rem] h-[3.625rem]" />
        </div>
        <div className="w-[0.938rem] absolute my-0 mx-[!important] top-[13.313rem] left-[17rem] h-[3rem] z-[8]">
          <div className="absolute top-[0.688rem] left-[0rem] rounded-11xl bg-blue-200 w-[0.938rem] h-[2.313rem]" />
          <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-turquoise w-[0.938rem] h-[0.688rem]" />
        </div>
        <div className="w-[0.938rem] absolute my-0 mx-[!important] top-[6.125rem] left-[19.5rem] h-[10.188rem] z-[9]">
          <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-turquoise w-[0.938rem] h-[1.875rem]" />
          <div className="absolute top-[1.875rem] left-[0rem] rounded-11xl bg-blue-200 w-[0.938rem] h-[8.313rem]" />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
