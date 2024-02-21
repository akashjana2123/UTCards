import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BankType = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-900 h-[54.875rem] overflow-hidden text-left text-[5rem] text-white font-poppins">
      <div className="absolute w-full top-[0rem] right-[0%] left-[0%] bg-gray-700 h-[21.375rem] overflow-hidden">
        <div className="absolute top-[6.938rem] left-[8.875rem] capitalize font-medium">{`Bank Type `}</div>
      </div>
      <div className="absolute top-[33.625rem] left-[17.688rem] rounded-xl box-border w-[52rem] overflow-hidden flex flex-row items-center justify-center py-[2.5rem] px-[1.25rem] gap-[0rem_4rem] border-[4px] border-dashed border-blueviolet-200">
        <img
          className="w-[5rem] relative h-[3.5rem] overflow-hidden shrink-0"
          alt=""
          src="/typeamerican-express.svg"
        />
        <img
          className="w-[5rem] relative h-[3.5rem] overflow-hidden shrink-0"
          alt=""
          src="/typemastercard.svg"
        />
        <img className="w-[5rem] relative h-[3.5rem]" alt="" src="/bank.svg" />
        <img
          className="w-[5rem] relative h-[3.5rem]"
          alt=""
          src="/typediscover.svg"
        />
        <img
          className="w-[5rem] relative h-[3.5rem]"
          alt=""
          src="/banktype6.svg"
        />
      </div>
      <div
        className="absolute top-[47.25rem] left-[36.063rem] w-[19.563rem] h-[3.625rem] cursor-pointer text-center text-[1.125rem] font-heading-four-semibold-20p"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0rem] left-[0rem] rounded-4xs bg-blue-200 w-[19.563rem] h-[3.625rem]" />
        <div className="absolute top-[1rem] left-[2.375rem] font-medium inline-block w-[14.4rem] h-[1.594rem]">{`PROCEED TO CHECK OUT `}</div>
      </div>
    </div>
  );
};

export default BankType;
