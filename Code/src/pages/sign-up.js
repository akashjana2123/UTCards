import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const onLOGINTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-3xs bg-white h-[64rem] overflow-hidden text-center text-[3.5rem] text-primary-2 font-montserrat">
      <img
        className="absolute top-[6.375rem] left-[56.625rem] w-[13.5rem] h-[13.5rem] overflow-hidden object-cover"
        alt=""
        src="/iconfinder-vector-65-09-473792-1@2x.png"
      />
      <div className="absolute top-[19.875rem] left-[53.313rem] font-black flex items-center justify-center w-[19.688rem] h-[4.563rem]">
        UTCards
      </div>
      <div className="absolute top-[0rem] left-[0rem] [background:linear-gradient(163.07deg,_#201658,_rgba(29,_36,_202,_0.74)_49.56%,_rgba(152,_171,_238,_0.4)_89.67%,_rgba(249,_232,_201,_0))] w-[35.313rem] h-[64rem]" />
      <div className="absolute top-[19.375rem] left-[24.813rem] w-[10.563rem] h-[15.188rem] text-[1.563rem] text-white">
        <img
          className="absolute top-[0rem] left-[0rem] rounded-31xl w-[10.563rem] h-[15.188rem]"
          alt=""
          src="/rectangle-279.svg"
        />
        <b
          className="absolute top-[0rem] left-[2.063rem] cursor-pointer"
          onClick={onLOGINTextClick}
        >
          LOGIN
        </b>
        <div className="absolute top-[6.688rem] left-[1.313rem] font-semibold text-label-color-light-primary">
          SIGN UP
        </div>
      </div>
      <div className="absolute top-[27rem] left-[calc(50%_+_133px)] rounded-11xl bg-lavender-200 shadow-[0px_10px_10px_rgba(0,_0,_0,_0.1)] w-[21.875rem] h-[25rem] flex flex-col items-start justify-center py-[1.875rem] px-[1rem] box-border gap-[1.25rem_0rem] text-[1.063rem] text-label-color-light-primary font-roboto">
        <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.688rem]">
          <b className="relative tracking-[-0.41px] leading-[1.375rem]">
            Login
          </b>
        </div>
        <div className="w-[19.875rem] rounded-11xl bg-mediumslateblue shadow-[0px_30px_30px_rgba(57,_106,_255,_0.15)] [backdrop-filter:blur(4px)] box-border h-[2.563rem] flex flex-row items-center justify-start p-[0.625rem] text-gray-1000 border-[1px] border-solid border-gray-1100">
          <div className="relative tracking-[-0.41px] leading-[1.375rem] font-medium">
            User Name
          </div>
        </div>
        <div className="w-[19.875rem] rounded-11xl bg-mediumslateblue shadow-[0px_30px_30px_rgba(57,_106,_255,_0.15)] [backdrop-filter:blur(4px)] box-border h-[2.563rem] flex flex-row items-center justify-start p-[0.625rem] text-gray-1000 border-[1px] border-solid border-gray-1100">
          <div className="relative tracking-[-0.41px] leading-[1.375rem] font-medium">
            Email Address
          </div>
        </div>
        <div className="w-[19.875rem] rounded-11xl bg-mediumslateblue shadow-[0px_30px_30px_rgba(57,_106,_255,_0.15)] [backdrop-filter:blur(4px)] box-border h-[2.563rem] flex flex-row items-center justify-start p-[0.625rem] text-gray-1000 border-[1px] border-solid border-gray-1100">
          <div className="relative tracking-[-0.41px] leading-[1.375rem] font-extrabold">
            ******
          </div>
        </div>
        <div
          className="w-[19.875rem] rounded-11xl bg-blue-200 shadow-[0px_11px_49px_rgba(24,_20,_243,_0.63)] [backdrop-filter:blur(4px)] box-border flex flex-row items-center justify-center p-[0.625rem] cursor-pointer border-[1px] border-solid border-gray-1100"
          onClick={onFrameContainer4Click}
        >
          <div className="relative tracking-[-0.41px] leading-[1.375rem] font-extrabold">
            Create account
          </div>
        </div>
        <div className="w-[19.938rem] relative box-border h-[0.063rem] border-t-[1px] border-solid border-blue-400" />
        <div className="flex flex-row items-center justify-center p-[0.625rem] text-left text-[0.938rem]">
          <div className="relative tracking-[-0.41px] leading-[1.375rem]">
            <span>Already have an Account?</span>
            <span className="font-black"> Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
