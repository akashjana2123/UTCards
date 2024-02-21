import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const IPhone13ProMax = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/accounts");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[99.625rem] overflow-hidden text-left text-[1.25rem] text-label-color-light-primary font-heading-four-semibold-20p">
      <b className="absolute top-[2.438rem] left-[2.5rem] text-[3.938rem] font-lekton">
        ORDER SUMMARY
      </b>
      <div className="absolute top-[16rem] left-[41.375rem] text-[1.688rem] font-roboto">
        <p className="m-0 font-black">Name:</p>
        <p className="m-0 text-[1.5rem] font-kurale">BAHADUR NUROGLU</p>
      </div>
      <div className="absolute top-[21.5rem] left-[41.375rem]">
        <p className="m-0">
          <span className="font-extrabold font-heading-four-semibold-20p">
            Color:
          </span>
          <span>{` `}</span>
        </p>
        <p className="m-0">Custom</p>
      </div>
      <div className="absolute top-[21.75rem] left-[48.875rem] text-[1.188rem]">
        <p className="m-0 font-black">Size:</p>
        <p className="m-0">Physical</p>
      </div>
      <div className="absolute top-[26.813rem] left-[41.375rem] text-[1.125rem]">
        <span className="font-black">CVV:</span>
        <span>{` `}</span>
        <span className="font-semibold">XXX</span>
      </div>
      <div className="absolute top-[26.813rem] left-[48.938rem] w-[6.25rem] h-[2.188rem]">
        <div className="absolute top-[0rem] left-[4.188rem] rounded-sm bg-gainsboro-200 w-[2.063rem] h-[2.125rem]" />
        <div className="absolute top-[0.063rem] left-[0rem] w-[6.188rem] h-[2.125rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-sm bg-gainsboro-200 w-[2.125rem] h-[2.125rem]" />
          <img
            className="absolute h-[79.41%] w-[31.31%] top-[8.82%] right-[67.68%] bottom-[11.76%] left-[1.01%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector14.svg"
          />
          <img
            className="absolute h-[5.88%] w-[31.31%] top-[47.06%] right-[0%] bottom-[47.06%] left-[68.69%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector15.svg"
          />
          <div className="absolute top-[0.313rem] left-[2.813rem] inline-block w-[0.563rem] h-[1.563rem]">
            1
          </div>
        </div>
      </div>
      <div className="absolute top-[66.25rem] left-[18.813rem] w-[23.538rem] h-[5.238rem] text-[2rem] font-lekton">
        <div className="absolute top-[1.95rem] left-[1.263rem] w-[20.213rem] h-[2.15rem]">
          <b className="absolute top-[0rem] left-[0rem] inline-block w-[10.638rem] h-[2.15rem]">
            SCALE+91
          </b>
          <div className="absolute top-[0.338rem] left-[16.825rem] text-[1.125rem] font-semibold font-heading-four-semibold-20p text-blue-200 inline-block w-[3.394rem] h-[1.475rem]">
            Apply
          </div>
        </div>
        <div className="absolute top-[0rem] left-[0rem] w-[23.538rem] h-[5.238rem] text-[0.938rem] text-dimgray font-heading-four-semibold-20p">
          <div className="absolute top-[0.806rem] left-[0rem] rounded-8xs box-border w-[23.538rem] h-[4.431rem] border-[1px] border-solid border-dimgray" />
          <div className="absolute top-[0rem] left-[0.8rem] w-[7.844rem] h-[1.613rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-white w-[7.844rem] h-[1.613rem]" />
            <div className="absolute top-[0.2rem] left-[0.463rem] inline-block w-[6.981rem] h-[1.206rem]">
              Discount Code
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[73.188rem] left-[16.063rem] w-[30.125rem] h-[10.525rem] text-[1.438rem] text-dimgray">
        <div className="absolute top-[0rem] left-[0rem] font-medium inline-block w-[6.038rem] h-[1.838rem]">
          Subtotal
        </div>
        <div className="absolute top-[0rem] left-[25.313rem] font-medium font-roboto text-label-color-light-primary inline-block w-[4.813rem] h-[1.688rem]">
          ₹200
        </div>
        <div className="absolute top-[2.256rem] left-[0rem] font-medium inline-block w-[10.006rem] h-[1.838rem]">
          Shipping Cost
        </div>
        <div className="absolute top-[2.313rem] left-[25.625rem] text-label-color-light-primary inline-block w-[4.188rem] h-[1.688rem] font-lekton">
          <b>+</b>
          <span className="font-medium font-roboto">₹</span>
          <b>50</b>
        </div>
        <div className="absolute top-[4.594rem] left-[0rem] font-medium inline-block w-[11rem] h-[1.838rem]">
          Discount (20%)
        </div>
        <div className="absolute top-[4.675rem] left-[23.488rem] text-blue-200 inline-block w-[5.788rem] h-[1.669rem] font-lekton">
          <b>-</b>
          <span className="font-medium font-roboto">₹</span>
          <b>52.18</b>
        </div>
        <div className="absolute top-[8.481rem] left-[0rem] font-medium inline-block w-[3.556rem] h-[1.838rem]">
          Total
        </div>
        <div className="absolute top-[8.519rem] left-[22.331rem] text-[1.688rem] font-medium font-roboto text-label-color-light-primary inline-block w-[6.95rem] h-[2.006rem]">
          ₹198.00
        </div>
      </div>
      <div
        className="absolute top-[86.625rem] left-[17.313rem] w-[26.844rem] h-[5.688rem] cursor-pointer text-[2rem] text-white font-lekton"
        onClick={onGroupContainer3Click}
      >
        <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-blue-100 shadow-[0px_0px_20px_5px_#1a16f3] w-[26.844rem] h-[5.688rem]" />
        <b className="absolute top-[1.669rem] left-[8.569rem] inline-block w-[9.706rem] h-[2.425rem]">
          Checkout
        </b>
      </div>
      <div className="absolute top-[7.75rem] left-[2.5rem] rounded-13xl bg-gray-600 [backdrop-filter:blur(40px)] w-[36.063rem] h-[24.5rem] overflow-hidden text-white">
        <img
          className="absolute top-[-12.812rem] left-[-17.125rem] w-[39.3rem] h-[44.969rem] object-contain"
          alt=""
          src="/vector16.svg"
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
          className="absolute top-[18.875rem] left-[28.438rem] w-[5rem] h-[3.5rem] hidden"
          alt=""
          src="/bank.svg"
        />
      </div>
      <div className="absolute top-[10.25rem] left-[41.375rem] text-[1.688rem] inline-block w-[14.25rem] h-[4rem]">
        <p className="m-0 font-black">Type:</p>
        <p className="m-0 font-kurale">Credit Card</p>
      </div>
      <div className="absolute top-[45.563rem] left-[41.688rem] text-[1.688rem] font-roboto">
        <p className="m-0 font-black">Name:</p>
        <p className="m-0 text-[1.5rem] font-kurale">BAHADUR NUROGLU</p>
      </div>
      <div className="absolute top-[51.063rem] left-[41.688rem]">
        <p className="m-0">
          <span className="font-extrabold">Color:</span>
          <span className="font-heading-four-semibold-20p">{` `}</span>
        </p>
        <p className="m-0">Dark</p>
      </div>
      <div className="absolute top-[51.313rem] left-[49.188rem] text-[1.188rem]">
        <p className="m-0 font-black">Size:</p>
        <p className="m-0">Physical</p>
      </div>
      <div className="absolute top-[56.375rem] left-[41.688rem] text-[1.125rem]">
        <span className="font-black">CVV:</span>
        <span>{` `}</span>
        <span className="font-semibold">XXX</span>
      </div>
      <div className="absolute top-[56.375rem] left-[49.25rem] w-[6.25rem] h-[2.188rem]">
        <div className="absolute top-[0rem] left-[4.188rem] rounded-sm bg-gainsboro-200 w-[2.063rem] h-[2.125rem]" />
        <div className="absolute top-[0.063rem] left-[0rem] w-[6.188rem] h-[2.125rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-sm bg-gainsboro-200 w-[2.125rem] h-[2.125rem]" />
          <img
            className="absolute h-[79.41%] w-[31.31%] top-[8.82%] right-[67.68%] bottom-[11.76%] left-[1.01%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector14.svg"
          />
          <img
            className="absolute h-[5.88%] w-[31.31%] top-[47.06%] right-[0%] bottom-[47.06%] left-[68.69%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector15.svg"
          />
          <div className="absolute top-[0.313rem] left-[2.813rem] inline-block w-[0.563rem] h-[1.563rem]">
            1
          </div>
        </div>
      </div>
      <div className="absolute top-[39.813rem] left-[41.688rem] text-[1.688rem] inline-block w-[14.25rem] h-[4rem]">
        <p className="m-0 font-black">Type:</p>
        <p className="m-0 font-kurale">Debit Card</p>
      </div>
      <div className="absolute top-[37.063rem] left-[2.5rem] w-[35.875rem] h-[24.375rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-13xl [background:linear-gradient(rgba(220,_207,_255,_0.2),_rgba(220,_207,_255,_0.2)),_linear-gradient(143.15deg,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0)),_linear-gradient(244.71deg,_#576265,_#757a7b_10.42%,_#576265_18.75%,_#576265_45.9%,_#848b8a_52.1%,_#9ea1a1_84.96%,_#576265)] w-[35.875rem] h-[24.375rem]" />
        <div className="absolute top-[2.75rem] left-[2.5rem] text-[1.5rem] uppercase font-medium">
          BAHADIR NUROGLU
        </div>
        <div className="absolute top-[10.25rem] left-[2.5rem] font-medium">
          Card Number
        </div>
        <div className="absolute top-[12.5rem] left-[2.5rem] text-[2rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)]">
          2243 6652 9435 9969
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
            className="absolute top-[1.875rem] left-[28.375rem] w-[5rem] h-[3.5rem]"
            alt=""
            src="/banktype6.svg"
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
      <img
        className="absolute top-[26.875rem] left-[30.875rem] w-[5rem] h-[3.5rem]"
        alt=""
        src="/banktype6.svg"
      />
      <div className="absolute top-[6.781rem] left-[calc(50%_-_482px)] box-border w-[60.25rem] h-[0.063rem] border-t-[1px] border-solid border-gray-100" />
    </div>
  );
};

export default IPhone13ProMax;
