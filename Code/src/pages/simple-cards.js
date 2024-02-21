import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SimpleCards = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/gradient-cards");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-900 h-[157.563rem] overflow-hidden text-left text-[1.25rem] text-white font-heading-four-semibold-20p">
      <div className="absolute top-[29.125rem] left-[13.125rem] rounded-21xl box-border w-[90.25rem] h-[119.75rem] overflow-hidden border-[1px] border-dashed border-blueviolet-100">
        <div className="absolute top-[42.375rem] left-[16.438rem] rounded-13xl bg-gray-500 [backdrop-filter:blur(40px)] box-border w-[24.938rem] h-[35rem] overflow-hidden border-[1px] border-solid border-gray-1500">
          <div className="absolute top-[23.938rem] left-[1.875rem] text-[1.5rem] uppercase font-medium">
            BAHADIR NUROGLU
          </div>
          <div className="absolute top-[15.563rem] left-[2rem] text-silver">
            Card Number
          </div>
          <div className="absolute top-[17.813rem] left-[2rem] text-[1.75rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            2243 6652 9435 9982
          </div>
          <div className="absolute top-[29.75rem] left-[2rem] font-medium text-silver">
            Expirty Date
          </div>
          <div className="absolute top-[31.75rem] left-[2rem] font-semibold">
            10/25
          </div>
          <div className="absolute top-[2.5rem] left-[18.875rem] rounded-lg bg-gray-1900 box-border w-[4.063rem] h-[3.125rem] overflow-hidden border-[2px] border-solid border-gray-1800">
            <img
              className="relative w-[1.375rem] h-[3.125rem]"
              alt=""
              src="/vector17.svg"
            />
            <img
              className="relative w-[1.813rem] h-[3.219rem]"
              alt=""
              src="/vector18.svg"
            />
          </div>
          <img
            className="absolute h-[10%] w-[20.05%] top-[7.14%] right-[73.93%] bottom-[82.86%] left-[6.02%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bank.svg"
          />
        </div>
        <div className="absolute top-[42.375rem] left-[48.875rem] rounded-13xl bg-whitesmoke-600 [backdrop-filter:blur(40px)] box-border w-[24.938rem] h-[35rem] overflow-hidden text-gray-600 border-[1px] border-solid border-gray-1200">
          <div className="absolute top-[23.938rem] left-[2rem] text-[1.5rem] uppercase font-medium">
            BAHADIR NUROGLU
          </div>
          <div className="absolute top-[15.563rem] left-[2rem]">
            Card Number
          </div>
          <div className="absolute top-[17.813rem] left-[2rem] text-[1.75rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            2243 6652 9435 9982
          </div>
          <div className="absolute top-[29.75rem] left-[2rem] font-medium">
            Expirty Date
          </div>
          <div className="absolute top-[31.75rem] left-[2rem] font-semibold">
            10/25
          </div>
          <div className="absolute top-[2.5rem] left-[18.875rem] rounded-lg bg-gray-1400 box-border w-[4.063rem] h-[3.125rem] overflow-hidden border-[2px] border-solid border-gray-1300">
            <img
              className="relative w-[1.375rem] h-[3.125rem]"
              alt=""
              src="/vector21.svg"
            />
            <img
              className="relative w-[1.813rem] h-[3.219rem]"
              alt=""
              src="/vector22.svg"
            />
          </div>
          <img
            className="absolute top-[2.5rem] left-[2.063rem] w-[5rem] h-[3.5rem]"
            alt=""
            src="/bank1.svg"
          />
        </div>
        <div className="absolute top-[89.875rem] left-[5.5rem] rounded-13xl bg-gray-500 [backdrop-filter:blur(40px)] box-border w-[35.875rem] h-[24.375rem] border-[1px] border-solid border-gray-1900">
          <div className="absolute top-[0.063rem] left-[28.125rem] rounded-tl-none rounded-tr-13xl rounded-br-13xl rounded-bl-none bg-whitesmoke-200 w-[7.688rem] h-[24.25rem] overflow-hidden" />
          <div className="absolute top-[10.25rem] left-[2.5rem] text-silver">
            Card Number
          </div>
          <div className="absolute top-[12.5rem] left-[2.5rem] text-[2rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            2243 6652 9435 9982
          </div>
          <div className="absolute top-[2.5rem] left-[2.5rem] text-[1.5rem] uppercase font-medium">
            BAHADIR NUROGLU
          </div>
          <div className="absolute top-[18.625rem] left-[2.5rem] text-silver">
            Expirty Date
          </div>
          <div className="absolute top-[20.625rem] left-[2.5rem] font-semibold">
            10/25
          </div>
          <div className="absolute top-[18.813rem] left-[30rem] rounded-lg bg-gray-1400 box-border w-[4.063rem] h-[3.125rem] overflow-hidden border-[2px] border-solid border-gray-1300">
            <img
              className="relative w-[1.375rem] h-[3.125rem]"
              alt=""
              src="/vector21.svg"
            />
            <img
              className="relative w-[1.813rem] h-[3.219rem]"
              alt=""
              src="/vector22.svg"
            />
          </div>
          <img
            className="absolute top-[2.063rem] left-[29.5rem] w-[5rem] h-[3.5rem]"
            alt=""
            src="/bank1.svg"
          />
        </div>
        <div className="absolute top-[5.5rem] left-[5.5rem] rounded-13xl bg-gray-500 [backdrop-filter:blur(40px)] box-border w-[35.875rem] h-[24.375rem] overflow-hidden border-[1px] border-solid border-gray-1500">
          <div className="absolute top-[2.75rem] left-[2.5rem] text-[1.5rem] uppercase font-medium">
            BAHADIR NUROGLU
          </div>
          <div className="absolute top-[10.25rem] left-[2.5rem] text-silver">
            Card Number
          </div>
          <div className="absolute top-[12.5rem] left-[2.5rem] text-[2rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            2243 6652 9435 9982
          </div>
          <div className="absolute top-[17.375rem] left-[0rem] rounded-t-none rounded-b-13xl bg-gray-800 w-[35.875rem] h-[7rem] overflow-hidden text-silver">
            <div className="absolute top-[1.75rem] left-[2.5rem] flex flex-col items-start justify-center gap-[0.5rem_0rem]">
              <div className="relative font-medium">Expirty Date</div>
              <div className="relative font-semibold text-white">10/25</div>
            </div>
            <img
              className="absolute h-3/6 w-[13.94%] top-[25%] right-[5.57%] bottom-[25%] left-[80.49%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/bank.svg"
            />
          </div>
          <div className="absolute top-[7.125rem] left-[29.313rem] rounded-lg bg-gray-1900 box-border w-[4.063rem] h-[3.125rem] overflow-hidden border-[2px] border-solid border-gray-1800">
            <img
              className="relative w-[1.375rem] h-[3.125rem]"
              alt=""
              src="/vector17.svg"
            />
            <img
              className="relative w-[1.813rem] h-[3.219rem]"
              alt=""
              src="/vector18.svg"
            />
          </div>
        </div>
        <div className="absolute top-[5.5rem] left-[48.875rem] rounded-13xl bg-whitesmoke-600 [backdrop-filter:blur(40px)] box-border w-[35.875rem] h-[24.375rem] overflow-hidden text-gray-600 border-[1px] border-solid border-gray-1500">
          <div className="absolute top-[2.75rem] left-[2.5rem] text-[1.5rem] uppercase font-medium">
            BAHADIR NUROGLU
          </div>
          <div className="absolute top-[10.25rem] left-[2.5rem]">
            Card Number
          </div>
          <div className="absolute top-[12.5rem] left-[2.5rem] text-[2rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            2243 6652 9435 9982
          </div>
          <div className="absolute top-[17.375rem] left-[0rem] rounded-t-none rounded-b-13xl bg-white w-[35.875rem] h-[7rem] overflow-hidden">
            <div className="absolute top-[1.75rem] left-[2.5rem] flex flex-col items-start justify-center gap-[0.5rem_0rem]">
              <div className="relative font-medium">Expirty Date</div>
              <div className="relative font-semibold">10/25</div>
            </div>
            <img
              className="absolute top-[1.75rem] left-[28.375rem] w-[5rem] h-[3.5rem]"
              alt=""
              src="/bank1.svg"
            />
          </div>
          <div className="absolute top-[7.125rem] left-[29.313rem] rounded-lg bg-gray-1400 box-border w-[4.063rem] h-[3.125rem] overflow-hidden border-[2px] border-solid border-gray-1300">
            <img
              className="relative w-[1.375rem] h-[3.125rem]"
              alt=""
              src="/vector21.svg"
            />
            <img
              className="relative w-[1.813rem] h-[3.219rem]"
              alt=""
              src="/vector22.svg"
            />
          </div>
        </div>
        <div className="absolute top-[89.875rem] left-[48.875rem] rounded-13xl bg-whitesmoke-600 [backdrop-filter:blur(40px)] box-border w-[35.875rem] h-[24.375rem] text-gray-600 border-[1px] border-solid border-gray-1600">
          <div className="absolute top-[0.063rem] left-[28.125rem] rounded-tl-none rounded-tr-13xl rounded-br-13xl rounded-bl-none bg-gray-600 w-[7.688rem] h-[24.25rem] overflow-hidden" />
          <div className="absolute top-[10.25rem] left-[2.5rem]">
            Card Number
          </div>
          <div className="absolute top-[12.5rem] left-[2.5rem] text-[2rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            2243 6652 9435 9982
          </div>
          <div className="absolute top-[2.75rem] left-[2.5rem] text-[1.5rem] uppercase font-medium">
            BAHADIR NUROGLU
          </div>
          <div className="absolute top-[18.625rem] left-[2.688rem]">
            Expirty Date
          </div>
          <div className="absolute top-[20.625rem] left-[2.688rem] font-semibold">
            10/25
          </div>
          <div className="absolute top-[18.625rem] left-[30rem] rounded-lg bg-gray-1900 box-border w-[4.063rem] h-[3.125rem] overflow-hidden border-[2px] border-solid border-gray-1800">
            <img
              className="relative w-[1.375rem] h-[3.125rem]"
              alt=""
              src="/vector17.svg"
            />
            <img
              className="relative w-[1.813rem] h-[3.219rem]"
              alt=""
              src="/vector18.svg"
            />
          </div>
          <img
            className="absolute top-[2.063rem] left-[29.5rem] w-[5rem] h-[3.5rem]"
            alt=""
            src="/bank.svg"
          />
        </div>
      </div>
      <div className="absolute w-[99.95%] top-[0rem] right-[0.05%] left-[0%] bg-gray-700 h-[21.375rem] overflow-hidden text-[5rem] font-poppins">
        <div className="absolute top-[6.938rem] left-[8.875rem] capitalize font-medium">
          Simple
        </div>
      </div>
      <div
        className="absolute top-[151rem] left-[103.375rem] w-[10.563rem] h-[3.938rem] cursor-pointer text-center text-[1.125rem]"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0rem] left-[0rem] rounded-4xs bg-blue-200 w-[10.563rem] h-[3.938rem]" />
        <div className="absolute top-[1.1rem] left-[2.575rem] font-medium inline-block w-[5.413rem] h-[1.731rem]">
          NEXT
        </div>
      </div>
    </div>
  );
};

export default SimpleCards;
