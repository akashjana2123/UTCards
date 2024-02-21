import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const GradientCards = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/glassmorphism-cards");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-900 h-[200.625rem] overflow-hidden text-left text-[1.25rem] text-white font-heading-four-semibold-20p">
      <div className="absolute top-[29.375rem] left-[13.125rem] rounded-21xl box-border w-[90.25rem] h-[119.75rem] overflow-hidden border-[1px] border-dashed border-blueviolet-100">
        <div className="absolute top-[42.375rem] left-[16.438rem] rounded-13xl bg-gray-600 [backdrop-filter:blur(40px)] w-[24.938rem] h-[35rem] overflow-hidden">
          <img
            className="absolute top-[27.313rem] left-[-6.437rem] rounded-11xl w-[36.194rem] h-[10.369rem] object-contain"
            alt=""
            src="/line-15.svg"
          />
          <img
            className="absolute top-[-1.812rem] left-[-5.312rem] w-[12.688rem] h-[22.563rem] object-contain"
            alt=""
            src="/vector-1.svg"
          />
          <img
            className="absolute top-[-1.812rem] left-[0rem] w-[21.344rem] h-[7.55rem]"
            alt=""
            src="/vector-22.svg"
          />
          <img
            className="absolute top-[0rem] left-[0.063rem] w-[24.875rem] h-[35rem] object-cover opacity-[0.2]"
            alt=""
            src="/texture2@2x.png"
          />
          <div className="absolute top-[29.75rem] left-[2.063rem] font-medium text-silver">
            Expirty Date
          </div>
          <div className="absolute top-[31.75rem] left-[2.063rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            10/25
          </div>
          <div className="absolute top-[23.938rem] left-[1.875rem] text-[1.5rem] uppercase font-medium [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            BAHADIR NUROGLU
          </div>
          <div className="absolute top-[15.563rem] left-[2rem] text-silver">
            Card Number
          </div>
          <div className="absolute top-[17.813rem] left-[2rem] text-[1.75rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            2243 6652 9435 9982
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
            className="absolute h-[10%] w-[20.05%] top-[7.14%] right-[71.68%] bottom-[82.86%] left-[8.27%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bank.svg"
          />
        </div>
        <div className="absolute top-[42.375rem] left-[48.875rem] rounded-13xl bg-gray-600 [backdrop-filter:blur(40px)] w-[24.938rem] h-[35rem] overflow-hidden">
          <img
            className="absolute top-[14.306rem] left-[-3.062rem] w-[31.194rem] h-[14.331rem] object-contain"
            alt=""
            src="/vector-23.svg"
          />
          <img
            className="absolute top-[0rem] left-[0.063rem] w-[24.875rem] h-[35rem] object-cover opacity-[0.2]"
            alt=""
            src="/texture2@2x.png"
          />
          <div className="absolute top-[15.563rem] left-[2.063rem] text-silver">
            Card Number
          </div>
          <div className="absolute top-[17.813rem] left-[2.063rem] text-[1.75rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            2243 6652 9435 9982
          </div>
          <div className="absolute top-[23.938rem] left-[2.063rem] text-[1.5rem] uppercase font-medium [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            BAHADIR NUROGLU
          </div>
          <div className="absolute top-[29.75rem] left-[2.063rem] font-medium text-silver">
            Expirty Date
          </div>
          <div className="absolute top-[31.75rem] left-[2.063rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
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
            className="absolute top-[2.5rem] left-[2.063rem] w-[5rem] h-[3.5rem]"
            alt=""
            src="/bank.svg"
          />
        </div>
        <div className="absolute top-[89.875rem] left-[5.5rem] rounded-13xl bg-gray-600 [backdrop-filter:blur(40px)] w-[35.875rem] h-[24.375rem] overflow-hidden">
          <img
            className="absolute top-[-4.575rem] left-[-5.456rem] w-[44.113rem] h-[45.944rem] object-contain"
            alt=""
            src="/vector-5.svg"
          />
          <img
            className="absolute top-[0rem] left-[0rem] rounded-13xl w-[35.875rem] h-[24.375rem] object-cover opacity-[0.2]"
            alt=""
            src="/texture3@2x.png"
          />
          <div className="absolute top-[12.5rem] left-[2.5rem] text-[2rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            2243 6652 9435 9982
          </div>
          <div className="absolute top-[10.25rem] left-[2.5rem] text-silver">
            Card Number
          </div>
          <div className="absolute top-[2.844rem] left-[2.5rem] text-[1.5rem] uppercase font-medium">
            BAHADIR NUROGLU
          </div>
          <div className="absolute top-[18.75rem] left-[29.313rem] rounded-lg bg-gray-1900 box-border w-[4.063rem] h-[3.125rem] overflow-hidden text-silver border-[2px] border-solid border-gray-1800">
            <div className="absolute top-[-0.125rem] left-[-26.812rem]">
              Expirty Date
            </div>
            <div className="absolute top-[1.875rem] left-[-26.812rem] font-semibold text-white [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
              10/25
            </div>
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
          <div className="absolute top-[18.875rem] left-[2.563rem] text-silver">
            Expirty Date
          </div>
          <div className="absolute top-[20.875rem] left-[2.563rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            10/25
          </div>
          <img
            className="absolute top-[2rem] left-[28.375rem] w-[5rem] h-[3.5rem]"
            alt=""
            src="/bank.svg"
          />
        </div>
        <div className="absolute top-[5.5rem] left-[5.5rem] rounded-13xl bg-gray-600 [backdrop-filter:blur(40px)] w-[35.875rem] h-[24.375rem] overflow-hidden">
          <img
            className="absolute top-[-2.519rem] left-[12.163rem] w-[28.969rem] h-[31.781rem] object-contain"
            alt=""
            src="/vector19.svg"
          />
          <img
            className="absolute top-[0rem] left-[0.063rem] w-[35.875rem] h-[24.375rem] object-cover opacity-[0.2]"
            alt=""
            src="/texture@2x.png"
          />
          <div className="absolute top-[2.75rem] left-[2.563rem] text-[1.5rem] uppercase font-medium [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            BAHADIR NUROGLU
          </div>
          <div className="absolute top-[10.188rem] left-[2.563rem] text-silver">
            Card Number
          </div>
          <div className="absolute top-[12.438rem] left-[2.563rem] text-[2rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            2243 6652 9435 9982
          </div>
          <div className="absolute top-[18.875rem] left-[2.563rem] font-medium text-silver">
            Expirty Date
          </div>
          <div className="absolute top-[20.875rem] left-[2.563rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            10/25
          </div>
          <div className="absolute top-[7.125rem] left-[29.375rem] rounded-lg bg-gray-1900 box-border w-[4.063rem] h-[3.125rem] overflow-hidden border-[2px] border-solid border-gray-1800">
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
            className="absolute h-[14.36%] w-[13.94%] top-[77.44%] right-[6.79%] bottom-[8.21%] left-[79.27%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bank.svg"
          />
        </div>
        <div className="absolute top-[5.5rem] left-[48.875rem] rounded-13xl bg-gray-600 [backdrop-filter:blur(40px)] w-[35.875rem] h-[24.375rem] overflow-hidden">
          <img
            className="absolute top-[-12.812rem] left-[-17.125rem] w-[39.3rem] h-[44.969rem] object-contain"
            alt=""
            src="/vector20.svg"
          />
          <img
            className="absolute top-[0rem] left-[0.063rem] w-[35.875rem] h-[24.375rem] object-cover opacity-[0.2]"
            alt=""
            src="/texture@2x.png"
          />
          <div className="absolute top-[2.5rem] left-[2.563rem] text-[1.5rem] uppercase font-medium [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            BAHADIR NUROGLU
          </div>
          <div className="absolute top-[10.188rem] left-[2.5rem] text-silver">
            Card Number
          </div>
          <div className="absolute top-[12.438rem] left-[2.5rem] text-[2rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            2243 6652 9435 9982
          </div>
          <div className="absolute top-[18.875rem] left-[2.563rem] font-medium text-silver">
            Expirty Date
          </div>
          <div className="absolute top-[20.875rem] left-[2.563rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            10/25
          </div>
          <div className="absolute top-[7.125rem] left-[29.375rem] rounded-lg bg-gray-1900 box-border w-[4.063rem] h-[3.125rem] overflow-hidden border-[2px] border-solid border-gray-1800">
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
            className="absolute top-[18.875rem] left-[28.438rem] w-[5rem] h-[3.5rem]"
            alt=""
            src="/bank.svg"
          />
        </div>
        <div className="absolute top-[89.875rem] left-[48.875rem] rounded-13xl bg-gray-600 [backdrop-filter:blur(40px)] w-[35.875rem] h-[24.375rem] overflow-hidden">
          <div className="absolute top-[-6.594rem] left-[1.219rem] rounded-[50%] [filter:blur(116.49px)] box-border w-[33.431rem] h-[10.431rem] border-[66.9px] border-solid border-gradient-style-6" />
          <img
            className="absolute top-[0rem] left-[0.063rem] rounded-13xl w-[35.875rem] h-[24.375rem] object-cover opacity-[0.2]"
            alt=""
            src="/texture3@2x.png"
          />
          <div className="absolute top-[10.25rem] left-[2.563rem] text-silver">
            Card Number
          </div>
          <div className="absolute top-[12.5rem] left-[2.563rem] text-[2rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            2243 6652 9435 9982
          </div>
          <div className="absolute top-[2.75rem] left-[2.563rem] text-[1.5rem] uppercase font-medium">
            BAHADIR NUROGLU
          </div>
          <div className="absolute top-[18.875rem] left-[2.563rem] text-silver">
            Expirty Date
          </div>
          <div className="absolute top-[20.875rem] left-[2.563rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
            10/25
          </div>
          <div className="absolute top-[18.75rem] left-[29.375rem] rounded-lg bg-gray-1900 box-border w-[4.063rem] h-[3.125rem] overflow-hidden border-[2px] border-solid border-gray-1800">
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
            className="absolute top-[2rem] left-[28.438rem] w-[5rem] h-[3.5rem]"
            alt=""
            src="/bank.svg"
          />
        </div>
      </div>
      <div className="absolute w-[99.95%] top-[0rem] right-[0.05%] left-[0%] bg-gray-700 h-[21.375rem] overflow-hidden text-[5rem] font-poppins">
        <div className="absolute top-[6.938rem] left-[8.875rem] capitalize font-medium">
          Gradient
        </div>
      </div>
      <div className="absolute top-[162.75rem] left-[5.5rem] rounded-21xl bg-gray-700 w-[105.5rem] h-[33.813rem] overflow-hidden text-[2rem] text-gray-200 font-jetbrains-mono">
        <div className="absolute top-[5.5rem] left-[5.5rem] text-[2.5rem] tracking-[0.2em] uppercase font-extrabold text-white">
          Customize
        </div>
        <div className="absolute top-[13.813rem] left-[5.5rem] flex flex-col items-center justify-start gap-[1.625rem_0rem]">
          <div className="w-[10.25rem] relative rounded-181xl [background:linear-gradient(92.32deg,_rgba(216,_21,_243,_0.9),_rgba(21,_123,_243,_0.9))] h-[10.25rem]" />
          <div className="relative tracking-[0.12em] uppercase">Style 1</div>
        </div>
        <div className="absolute top-[13.813rem] left-[22rem] flex flex-col items-center justify-start gap-[1.625rem_0rem]">
          <div className="w-[10.25rem] relative rounded-181xl [background:linear-gradient(90.49deg,_rgba(21,_230,_243,_0.9),_rgba(21,_243,_43,_0.9))] h-[10.25rem]" />
          <div className="relative tracking-[0.12em] uppercase">Style 2</div>
        </div>
        <div className="absolute top-[13.813rem] left-[38.5rem] flex flex-col items-center justify-start gap-[1.625rem_0rem]">
          <div className="w-[10.25rem] relative rounded-181xl bg-gradient-style-3 h-[10.25rem]" />
          <div className="relative tracking-[0.12em] uppercase">Style 3</div>
        </div>
        <div className="absolute top-[13.813rem] left-[55rem] flex flex-col items-center justify-start gap-[1.625rem_0rem]">
          <div className="w-[10.25rem] relative rounded-181xl [background:linear-gradient(267.69deg,_rgba(115,_134,_60,_0.75),_rgba(255,_233,_39,_0.61))] h-[10.25rem]" />
          <div className="relative tracking-[0.12em] uppercase">Style 4</div>
        </div>
        <div className="absolute top-[13.813rem] left-[71.5rem] flex flex-col items-center justify-start gap-[1.625rem_0rem]">
          <div className="w-[10.25rem] relative rounded-181xl [background:linear-gradient(92.63deg,_rgba(223,_0,_120,_0.9),_rgba(189,_255,_0,_0.9))] h-[10.25rem]" />
          <div className="relative tracking-[0.12em] uppercase">Style 5</div>
        </div>
        <div className="absolute top-[13.813rem] left-[88rem] flex flex-col items-center justify-start gap-[1.625rem_0rem]">
          <div className="w-[10.25rem] relative rounded-181xl [background:linear-gradient(91.64deg,_rgba(0,_255,_71,_0.9),_rgba(106,_143,_255,_0.9)_53.65%,_rgba(189,_0,_255,_0.9))] h-[10.25rem]" />
          <div className="relative tracking-[0.12em] uppercase">Style 6</div>
        </div>
      </div>
      <div
        className="absolute top-[195.688rem] left-[102.438rem] w-[10rem] h-[3.125rem] cursor-pointer text-center text-[1.125rem]"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0rem] left-[0rem] rounded-4xs bg-blue-200 w-[10rem] h-[3.125rem]" />
        <div className="absolute top-[0.875rem] left-[3.438rem] font-medium">
          NEXT
        </div>
      </div>
    </div>
  );
};

export default GradientCards;
