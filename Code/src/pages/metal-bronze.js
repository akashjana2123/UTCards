import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MetalBronze = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/bank-type");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-900 h-[161.938rem] overflow-hidden text-right text-[5rem] text-white font-heading-four-semibold-20p">
      <div className="absolute w-full top-[0rem] right-[0%] left-[0%] bg-gray-700 h-[21.375rem] overflow-hidden font-poppins">
        <div className="absolute top-[6.938rem] left-[8.875rem] capitalize font-medium">
          Metal - Bronze
        </div>
      </div>
      <div className="absolute top-[29.125rem] left-[13.125rem] rounded-21xl box-border w-[90.25rem] h-[125.063rem] overflow-hidden text-left text-[1.25rem] text-label-color-light-primary border-[1px] border-dashed border-blueviolet-100">
        <div className="absolute top-[90.688rem] left-[10.188rem] w-[35.875rem] h-[24.375rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-13xl [background:linear-gradient(rgba(220,_207,_255,_0.2),_rgba(220,_207,_255,_0.2)),_linear-gradient(143.15deg,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0)),_linear-gradient(244.71deg,_#576265,_#757a7b_10.42%,_#576265_18.75%,_#576265_45.9%,_#848b8a_52.1%,_#9ea1a1_84.96%,_#576265)] w-[35.875rem] h-[24.375rem]" />
          <div className="absolute top-[2.75rem] left-[2.5rem] text-[1.5rem] uppercase font-medium">
            BAHADIR NUROGLU
          </div>
          <div className="absolute top-[10.25rem] left-[2.5rem] font-medium">
            Card Number
          </div>
          <div className="absolute top-[12.5rem] left-[2.5rem] text-[2rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            2243 6652 9435 9982
          </div>
          <div className="absolute top-[18.75rem] left-[29.313rem] rounded-lg bg-gray-1900 box-border w-[4.063rem] h-[3.125rem] overflow-hidden border-[2px] border-solid border-gray-1800">
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
            className="absolute top-[2rem] left-[28.375rem] w-[5rem] h-[3.5rem]"
            alt=""
            src="/bank.svg"
          />
          <div className="absolute top-[18.875rem] left-[2.5rem] font-medium">
            Expirty Date
          </div>
          <div className="absolute top-[20.875rem] left-[2.5rem] font-semibold">
            10/25
          </div>
        </div>
        <div className="absolute top-[42.375rem] left-[48.875rem] w-[24.938rem] h-[35rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-13xl [background:linear-gradient(rgba(255,_107,_0,_0.32),_rgba(255,_107,_0,_0.32)),_linear-gradient(143.15deg,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0)),_linear-gradient(244.71deg,_#576265,_#757a7b_10.42%,_#576265_18.75%,_#576265_45.9%,_#848b8a_52.1%,_#9ea1a1_84.96%,_#576265)] w-[24.938rem] h-[35rem]" />
          <div className="absolute top-[24.188rem] left-[2rem] text-[1.5rem] uppercase font-medium">
            BAHADIR NUROGLU
          </div>
          <div className="absolute top-[15.563rem] left-[2rem] font-medium">
            Card Number
          </div>
          <div className="absolute top-[18.063rem] left-[2rem] text-[1.75rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            2243 6652 9435 9982
          </div>
          <div className="absolute w-full top-[28rem] right-[0%] left-[0%] rounded-t-none rounded-b-13xl bg-gray-400 h-[7rem] overflow-hidden text-white">
            <img
              className="absolute top-[-3.937rem] left-[0rem] w-[40.875rem] h-[13.75rem] object-cover opacity-[0.1]"
              alt=""
              src="/texture1@2x.png"
            />
            <div className="absolute top-[3.75rem] left-[2rem] font-semibold">
              10/25
            </div>
            <div className="absolute top-[1.75rem] left-[2rem] font-medium text-silver">
              Expirty Date
            </div>
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
            className="absolute top-[2.5rem] left-[2rem] w-[5rem] h-[3.5rem]"
            alt=""
            src="/bank.svg"
          />
        </div>
        <div className="absolute top-[84.563rem] left-[55.875rem] w-[24.938rem] h-[35rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-13xl [background:linear-gradient(rgba(255,_107,_0,_0.32),_rgba(255,_107,_0,_0.32)),_linear-gradient(143.15deg,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0)),_linear-gradient(244.71deg,_#576265,_#757a7b_10.42%,_#576265_18.75%,_#576265_45.9%,_#848b8a_52.1%,_#9ea1a1_84.96%,_#576265)] w-[24.938rem] h-[35rem]" />
          <div className="absolute top-[23.688rem] left-[2rem] text-[1.5rem] uppercase font-medium">
            BAHADIR NUROGLU
          </div>
          <div className="absolute top-[15.063rem] left-[2rem] font-medium">
            Card Number
          </div>
          <div className="absolute top-[17.563rem] left-[2rem] text-[1.75rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            2243 6652 9435 9982
          </div>
          <div className="absolute top-[31.5rem] left-[2rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            10/25
          </div>
          <div className="absolute top-[29.5rem] left-[2rem] font-medium [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            Expirty Date
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
            className="absolute top-[2.5rem] left-[2rem] w-[5rem] h-[3.5rem]"
            alt=""
            src="/bank.svg"
          />
        </div>
        <div className="absolute top-[42.375rem] left-[16.438rem] w-[24.938rem] h-[35rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-13xl [background:linear-gradient(rgba(220,_207,_255,_0.2),_rgba(220,_207,_255,_0.2)),_linear-gradient(143.15deg,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0)),_linear-gradient(244.71deg,_#576265,_#757a7b_10.42%,_#576265_18.75%,_#576265_45.9%,_#848b8a_52.1%,_#9ea1a1_84.96%,_#576265)] w-[24.938rem] h-[35rem]" />
          <div className="absolute top-[24.188rem] left-[2rem] text-[1.5rem] uppercase font-medium">
            BAhadır Nuroğlu
          </div>
          <div className="absolute top-[15.813rem] left-[2rem] font-medium">
            Card Number
          </div>
          <div className="absolute top-[18.063rem] left-[2rem] text-[1.75rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            2243 6652 9435 9982
          </div>
          <div className="absolute w-full top-[28rem] right-[0%] left-[0%] rounded-t-none rounded-b-13xl bg-gray-400 h-[7rem] overflow-hidden text-silver">
            <img
              className="absolute top-[-3.937rem] left-[0rem] w-[40.875rem] h-[13.75rem] object-cover opacity-[0.1]"
              alt=""
              src="/texture1@2x.png"
            />
            <div className="absolute top-[1.75rem] left-[2rem] font-medium">
              Expirty Date
            </div>
            <div className="absolute top-[3.75rem] left-[2rem] font-semibold text-white">
              10/25
            </div>
          </div>
          <div className="absolute top-[2.688rem] left-[18.875rem] rounded-lg bg-gray-1900 box-border w-[4.063rem] h-[3.125rem] overflow-hidden border-[2px] border-solid border-gray-1800">
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
            className="absolute top-[2.5rem] left-[2rem] w-[5rem] h-[3.5rem]"
            alt=""
            src="/bank.svg"
          />
        </div>
        <div className="absolute top-[5.5rem] left-[48.875rem] w-[35.875rem] h-[24.375rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-13xl [background:linear-gradient(rgba(255,_107,_0,_0.32),_rgba(255,_107,_0,_0.32)),_linear-gradient(143.15deg,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0)),_linear-gradient(244.71deg,_#576265,_#757a7b_10.42%,_#576265_18.75%,_#576265_45.9%,_#848b8a_52.1%,_#9ea1a1_84.96%,_#576265)] w-[35.875rem] h-[24.375rem]" />
          <div className="absolute top-[2.75rem] left-[2.5rem] text-[1.5rem] uppercase font-medium">
            BAHADIR NUROGLU
          </div>
          <div className="absolute top-[10.25rem] left-[2.5rem] font-medium">
            Card Number
          </div>
          <div className="absolute top-[12.5rem] left-[2.5rem] text-[2rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            2243 6652 9435 9982
          </div>
          <div className="absolute top-[17.375rem] left-[0rem] rounded-t-none rounded-b-13xl bg-gray-400 w-[35.875rem] h-[7rem] overflow-hidden text-silver">
            <img
              className="absolute top-[-3.937rem] left-[0rem] w-[40.875rem] h-[13.75rem] object-cover opacity-[0.1]"
              alt=""
              src="/texture1@2x.png"
            />
            <div className="absolute top-[1.75rem] left-[2.5rem] font-medium">
              Expirty Date
            </div>
            <div className="absolute top-[3.75rem] left-[2.5rem] font-semibold text-white">
              10/25
            </div>
            <img
              className="absolute top-[1.75rem] left-[28.375rem] w-[5rem] h-[3.5rem]"
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
        <div className="absolute top-[5.5rem] left-[5.5rem] w-[35.875rem] h-[24.375rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-13xl [background:linear-gradient(rgba(220,_207,_255,_0.2),_rgba(220,_207,_255,_0.2)),_linear-gradient(143.15deg,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0)),_linear-gradient(244.71deg,_#576265,_#757a7b_10.42%,_#576265_18.75%,_#576265_45.9%,_#848b8a_52.1%,_#9ea1a1_84.96%,_#576265)] w-[35.875rem] h-[24.375rem]" />
          <div className="absolute top-[2.75rem] left-[2.5rem] text-[1.5rem] uppercase font-medium">
            BAHADIR NUROGLU
          </div>
          <div className="absolute top-[10.25rem] left-[2.5rem] font-medium">
            Card Number
          </div>
          <div className="absolute top-[12.5rem] left-[2.5rem] text-[2rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            2243 6652 9435 9982
          </div>
          <div className="absolute top-[17.375rem] left-[0rem] rounded-t-none rounded-b-13xl bg-gray-400 w-[35.875rem] h-[7rem] overflow-hidden text-silver">
            <img
              className="absolute top-[-3.937rem] left-[0rem] w-[40.875rem] h-[13.75rem] object-cover opacity-[0.1]"
              alt=""
              src="/texture1@2x.png"
            />
            <div className="absolute top-[1.75rem] left-[2.5rem] font-medium">
              Expirty Date
            </div>
            <div className="absolute top-[3.75rem] left-[2.5rem] font-semibold text-white">
              10/25
            </div>
            <img
              className="absolute h-3/6 w-[13.94%] top-[25%] right-[6.97%] bottom-[25%] left-[79.09%] max-w-full overflow-hidden max-h-full"
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
      </div>
      <div
        className="absolute top-[156.25rem] left-[102.313rem] w-[10rem] h-[3.125rem] cursor-pointer text-center text-[1.125rem]"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0rem] left-[0rem] rounded-4xs bg-blue-200 w-[10rem] h-[3.125rem]" />
        <div className="absolute top-[0.875rem] left-[1.625rem] font-medium">
          CHECK OUT
        </div>
      </div>
    </div>
  );
};

export default MetalBronze;
