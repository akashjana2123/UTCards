import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Loan = () => {
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
    <div className="w-full relative bg-white h-[64rem] overflow-hidden text-left text-[1.125rem] text-gray-300 font-heading-four-semibold-20p">
      <div className="absolute top-[0rem] left-[0rem] bg-ghostwhite w-[15.625rem] h-[64rem] hidden" />
      <div className="absolute top-[8.188rem] left-[0rem] w-[13.188rem] h-[33.563rem] text-darkgray">
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
          className="absolute top-[20rem] left-[2.688rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/loan-11.svg"
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
        <div className="absolute top-[20.125rem] left-[5.938rem] font-medium text-blue-200">
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
        <div className="absolute top-[0rem] left-[0rem] w-[11.813rem] h-[22.688rem]">
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
          <div className="absolute top-[18.938rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue-200 w-[0.375rem] h-[3.75rem]" />
        </div>
      </div>
      <div className="absolute top-[16.813rem] left-[56.563rem] w-[21.875rem] h-[0.063rem]" />
      <div className="absolute top-[6.25rem] left-[15.625rem] bg-aliceblue-300 w-[74.375rem] h-[0.063rem]" />
      <div className="absolute top-[6.313rem] left-[15.625rem] bg-whitesmoke-100 w-[74.375rem] h-[57.688rem]" />
      <div className="absolute top-[17.188rem] left-[18.125rem] text-[1.375rem] font-semibold text-darkslateblue-100">
        Active Loans Overview
      </div>
      <div className="absolute top-[19.813rem] left-[18.125rem] w-[69.375rem] h-[39.063rem] text-[1rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[69.375rem] h-[39.063rem]" />
        <div className="absolute top-[1.375rem] left-[1.875rem] w-[61.25rem] h-[1.188rem] text-steelblue">
          <div className="absolute top-[0rem] left-[6.25rem] font-medium">
            Loan Money
          </div>
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            SL No
          </div>
          <div className="absolute top-[0rem] left-[16.75rem] font-medium">
            Left to repay
          </div>
          <div className="absolute top-[0rem] left-[27.625rem] font-medium">
            Duration
          </div>
          <div className="absolute top-[0rem] left-[38.313rem] font-medium">
            Interest rate
          </div>
          <div className="absolute top-[0rem] left-[47.5rem] font-medium">
            Installment
          </div>
          <div className="absolute top-[0rem] left-[58.25rem] font-medium">
            Repay
          </div>
        </div>
        <div className="absolute top-[4.25rem] left-[1.875rem] w-[64.625rem] h-[2.188rem]">
          <div className="absolute top-[0.5rem] left-[6.25rem]">$100,000</div>
          <div className="absolute top-[0.5rem] left-[0rem]">01.</div>
          <div className="absolute top-[0.5rem] left-[16.75rem]">$40,500</div>
          <div className="absolute top-[0.5rem] left-[27.625rem]">8 Months</div>
          <div className="absolute top-[0.5rem] left-[38.313rem]">12%</div>
          <div className="absolute top-[0.5rem] left-[47.5rem]">
            $2,000 / month
          </div>
          <div className="absolute top-[0rem] left-[58.375rem] w-[6.25rem] h-[2.188rem] text-center text-[0.938rem] text-blue-200">
            <div className="absolute top-[0.5rem] left-[1.75rem] font-medium">
              Repay
            </div>
            <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[6.25rem] h-[2.188rem] border-[1px] border-solid border-blue-200" />
          </div>
        </div>
        <div className="absolute top-[8.313rem] left-[1.875rem] w-[64.625rem] h-[2.188rem]">
          <div className="absolute top-[0.5rem] left-[6.25rem]">$500,000</div>
          <div className="absolute top-[0.5rem] left-[0rem]">02.</div>
          <div className="absolute top-[0.5rem] left-[16.75rem]">$250,000</div>
          <div className="absolute top-[0.5rem] left-[27.625rem]">
            36 Months
          </div>
          <div className="absolute top-[0.5rem] left-[38.313rem]">10%</div>
          <div className="absolute top-[0.5rem] left-[47.5rem]">
            $8,000 / month
          </div>
          <div className="absolute top-[0rem] left-[58.375rem] w-[6.25rem] h-[2.188rem] text-center text-[0.938rem]">
            <div className="absolute top-[0.5rem] left-[1.75rem] font-medium">
              Repay
            </div>
            <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[6.25rem] h-[2.188rem] border-[1px] border-solid border-gray-300" />
          </div>
        </div>
        <div className="absolute top-[7.313rem] left-[1.875rem] bg-whitesmoke-400 w-[65.625rem] h-[0.063rem]" />
        <div className="absolute top-[11.375rem] left-[1.875rem] bg-whitesmoke-400 w-[65.625rem] h-[0.063rem]" />
        <div className="absolute top-[12.375rem] left-[1.875rem] w-[65.625rem] h-[3.125rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[64.625rem] h-[2.188rem]">
            <div className="absolute top-[0.5rem] left-[6.25rem]">$900,000</div>
            <div className="absolute top-[0.5rem] left-[0rem]">03.</div>
            <div className="absolute top-[0.5rem] left-[16.75rem]">$40,500</div>
            <div className="absolute top-[0.5rem] left-[27.625rem]">
              12 Months
            </div>
            <div className="absolute top-[0.5rem] left-[38.313rem]">12%</div>
            <div className="absolute top-[0.5rem] left-[47.5rem]">
              $5,000 / month
            </div>
            <div className="absolute top-[0rem] left-[58.375rem] w-[6.25rem] h-[2.188rem] text-center text-[0.938rem]">
              <div className="absolute top-[0.5rem] left-[1.75rem] font-medium">
                Repay
              </div>
              <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[6.25rem] h-[2.188rem] border-[1px] border-solid border-gray-300" />
            </div>
          </div>
          <div className="absolute top-[3.063rem] left-[0rem] bg-whitesmoke-400 w-[65.625rem] h-[0.063rem]" />
        </div>
        <div className="absolute top-[16.438rem] left-[1.875rem] w-[65.625rem] h-[3.125rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[64.625rem] h-[2.188rem]">
            <div className="absolute top-[0.5rem] left-[6.25rem]">$50,000</div>
            <div className="absolute top-[0.5rem] left-[0rem]">04.</div>
            <div className="absolute top-[0.5rem] left-[16.75rem]">$40,500</div>
            <div className="absolute top-[0.5rem] left-[27.625rem]">
              25 Months
            </div>
            <div className="absolute top-[0.5rem] left-[38.313rem]">5%</div>
            <div className="absolute top-[0.5rem] left-[47.5rem]">
              $2,000 / month
            </div>
            <div className="absolute top-[0rem] left-[58.375rem] w-[6.25rem] h-[2.188rem] text-center text-[0.938rem]">
              <div className="absolute top-[0.5rem] left-[1.75rem] font-medium">
                Repay
              </div>
              <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[6.25rem] h-[2.188rem] border-[1px] border-solid border-gray-300" />
            </div>
          </div>
          <div className="absolute top-[3.063rem] left-[0rem] bg-whitesmoke-400 w-[65.625rem] h-[0.063rem]" />
        </div>
        <div className="absolute top-[20.5rem] left-[1.875rem] w-[64.625rem] h-[2.188rem]">
          <div className="absolute top-[0.5rem] left-[6.25rem]">$50,000</div>
          <div className="absolute top-[0.5rem] left-[0rem]">05.</div>
          <div className="absolute top-[0.5rem] left-[16.75rem]">$40,500</div>
          <div className="absolute top-[0.5rem] left-[27.625rem]">5 Months</div>
          <div className="absolute top-[0.5rem] left-[38.313rem]">16%</div>
          <div className="absolute top-[0.5rem] left-[47.5rem]">
            $10,000 / month
          </div>
          <div className="absolute top-[0rem] left-[58.375rem] w-[6.25rem] h-[2.188rem] text-center text-[0.938rem]">
            <div className="absolute top-[0.5rem] left-[1.75rem] font-medium">
              Repay
            </div>
            <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[6.25rem] h-[2.188rem] border-[1px] border-solid border-gray-300" />
          </div>
        </div>
        <div className="absolute top-[23.563rem] left-[1.875rem] bg-whitesmoke-400 w-[65.625rem] h-[0.063rem]" />
        <div className="absolute top-[27.625rem] left-[1.875rem] bg-whitesmoke-400 w-[65.625rem] h-[0.063rem]" />
        <div className="absolute top-[31.688rem] left-[1.875rem] bg-whitesmoke-400 w-[65.625rem] h-[0.063rem]" />
        <div className="absolute top-[24.563rem] left-[1.875rem] w-[64.625rem] h-[2.188rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[64.625rem] h-[2.188rem]">
            <div className="absolute top-[0.5rem] left-[6.25rem]">$80,000</div>
            <div className="absolute top-[0.5rem] left-[0rem]">06.</div>
            <div className="absolute top-[0.5rem] left-[16.75rem]">$25,500</div>
            <div className="absolute top-[0.5rem] left-[27.625rem]">
              14 Months
            </div>
            <div className="absolute top-[0.5rem] left-[38.313rem]">8%</div>
            <div className="absolute top-[0.5rem] left-[47.5rem]">
              $2,000 / month
            </div>
            <div className="absolute top-[0rem] left-[58.375rem] w-[6.25rem] h-[2.188rem] text-center text-[0.938rem]">
              <div className="absolute top-[0.5rem] left-[1.75rem] font-medium">
                Repay
              </div>
              <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[6.25rem] h-[2.188rem] border-[1px] border-solid border-gray-300" />
            </div>
          </div>
        </div>
        <div className="absolute top-[28.625rem] left-[1.875rem] w-[64.625rem] h-[2.188rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[64.625rem] h-[2.188rem]">
            <div className="absolute top-[0.5rem] left-[6.25rem]">$12,000</div>
            <div className="absolute top-[0.5rem] left-[0rem]">07.</div>
            <div className="absolute top-[0.5rem] left-[16.75rem]">$5,500</div>
            <div className="absolute top-[0.5rem] left-[27.625rem]">
              9 Months
            </div>
            <div className="absolute top-[0.5rem] left-[38.313rem]">13%</div>
            <div className="absolute top-[0.5rem] left-[47.5rem]">
              $500 / month
            </div>
            <div className="absolute top-[0rem] left-[58.375rem] w-[6.25rem] h-[2.188rem] text-center text-[0.938rem]">
              <div className="absolute top-[0.5rem] left-[1.75rem] font-medium">
                Repay
              </div>
              <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[6.25rem] h-[2.188rem] border-[1px] border-solid border-gray-300" />
            </div>
          </div>
        </div>
        <div className="absolute top-[32.688rem] left-[1.875rem] w-[64.625rem] h-[2.188rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[64.625rem] h-[2.188rem]">
            <div className="absolute top-[0.5rem] left-[6.25rem]">$160,000</div>
            <div className="absolute top-[0.5rem] left-[0rem]">08.</div>
            <div className="absolute top-[0.5rem] left-[16.75rem]">
              $100,800
            </div>
            <div className="absolute top-[0.5rem] left-[27.625rem]">
              3 Months
            </div>
            <div className="absolute top-[0.5rem] left-[38.313rem]">12%</div>
            <div className="absolute top-[0.5rem] left-[47.5rem]">
              $900 / month
            </div>
            <div className="absolute top-[0rem] left-[58.375rem] w-[6.25rem] h-[2.188rem] text-center text-[0.938rem]">
              <div className="absolute top-[0.5rem] left-[1.75rem] font-medium">
                Repay
              </div>
              <div className="absolute top-[0rem] left-[0rem] rounded-31xl box-border w-[6.25rem] h-[2.188rem] border-[1px] border-solid border-gray-300" />
            </div>
          </div>
        </div>
        <div className="absolute top-[3.25rem] left-[1.875rem] bg-aliceblue-300 w-[65.625rem] h-[0.063rem]" />
        <div className="absolute top-[35.75rem] left-[1.875rem] bg-aliceblue-300 w-[65.625rem] h-[0.063rem]" />
        <div className="absolute top-[36.563rem] left-[1.875rem] w-[55.563rem] h-[1.188rem] text-indianred">
          <div className="absolute top-[0rem] left-[6.25rem] font-medium">
            $125,0000
          </div>
          <div className="absolute top-[0rem] left-[16.75rem] font-medium">
            $750,000
          </div>
          <div className="absolute top-[0rem] left-[47.5rem] font-medium">
            $50,000 / month
          </div>
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Total
          </div>
        </div>
      </div>
      <div className="absolute top-[8.188rem] left-[18.125rem] w-[69.375rem] h-[7.5rem] text-[1.25rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[15.938rem] h-[7.5rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[15.938rem] h-[7.5rem]" />
          <div className="absolute top-[1.563rem] left-[1.688rem] w-[12.563rem] h-[4.375rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[12.563rem] h-[4.375rem]">
              <img
                className="absolute top-[0rem] left-[0rem] w-[4.375rem] h-[4.375rem]"
                alt=""
                src="/group-299.svg"
              />
              <div className="absolute top-[0.625rem] left-[5.313rem] w-[7.25rem] h-[3.188rem]">
                <div className="absolute top-[1.688rem] left-[0rem] font-semibold">
                  $50,000
                </div>
                <div className="absolute top-[0rem] left-[0rem] text-[1rem] text-steelblue">
                  Personal Loans
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[0rem] left-[17.813rem] w-[15.938rem] h-[7.5rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[15.938rem] h-[7.5rem]" />
          <div className="absolute top-[1.563rem] left-[1.375rem] w-[13.25rem] h-[4.375rem]">
            <div className="absolute top-[0.625rem] left-[5.313rem] w-[7.938rem] h-[3.188rem]">
              <div className="absolute top-[1.688rem] left-[0rem] font-semibold">
                $100,000
              </div>
              <div className="absolute top-[0rem] left-[0rem] text-[1rem] text-steelblue">
                Corporate Loans
              </div>
            </div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[4.375rem] h-[4.375rem]"
              alt=""
              src="/group-290.svg"
            />
          </div>
        </div>
        <div className="absolute top-[0rem] left-[53.438rem] w-[15.938rem] h-[7.5rem] text-[1rem] text-steelblue">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[15.938rem] h-[7.5rem]" />
          <div className="absolute top-[1.563rem] left-[1.313rem] w-[13.313rem] h-[4.375rem]">
            <div className="absolute top-[0.625rem] left-[5.125rem] w-[8.188rem] h-[3.063rem]">
              <div className="absolute top-[0rem] left-[0rem]">
                Custom Loans
              </div>
              <div className="absolute top-[1.688rem] left-[0rem] text-[1.125rem] font-semibold text-gray-300">
                Choose Money
              </div>
            </div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[4.375rem] h-[4.375rem]"
              alt=""
              src="/group-296.svg"
            />
          </div>
        </div>
        <div className="absolute top-[0rem] left-[35.625rem] w-[15.938rem] h-[7.5rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-white w-[15.938rem] h-[7.5rem]" />
          <div className="absolute top-[1.563rem] left-[1.625rem] w-[12.688rem] h-[4.375rem]">
            <div className="absolute top-[0.625rem] left-[5.313rem] w-[7.375rem] h-[3.188rem]">
              <div className="absolute top-[1.688rem] left-[0rem] font-semibold">
                $500,000
              </div>
              <div className="absolute top-[0rem] left-[0rem] text-[1rem] text-steelblue">
                Business Loans
              </div>
            </div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[4.375rem] h-[4.375rem]"
              alt=""
              src="/group-293.svg"
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
              Loans
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
      <div className="absolute top-[2.563rem] left-[2.563rem] w-[9.813rem] h-[2.25rem] text-[1.563rem] text-primary-2 font-montserrat">
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

export default Loan;
