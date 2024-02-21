import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onSIGNUPTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/main-dashboard");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/main-dashboard");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-3xs bg-white h-[64rem] overflow-hidden text-center text-[3.5rem] text-primary-2 font-montserrat">
      <img
        className="absolute top-[6.375rem] left-[56.563rem] w-[13.5rem] h-[13.5rem] overflow-hidden object-cover"
        alt=""
        src="/iconfinder-vector-65-09-473792-1@2x.png"
      />
      <div className="absolute top-[19.875rem] left-[53.5rem] font-black flex items-center justify-center w-[19.5rem] h-[4.563rem]">
        UTCards
      </div>
      <div className="absolute top-[0rem] left-[-4.062rem] [background:linear-gradient(164.84deg,_#201658,_rgba(29,_36,_202,_0.74)_49.56%,_rgba(152,_171,_238,_0.4)_89.67%,_rgba(249,_232,_201,_0))] w-[39.375rem] h-[64rem]" />
      <div className="absolute top-[13.125rem] left-[24.75rem] w-[10.563rem] h-[15.5rem] text-[1.563rem] text-label-color-light-primary">
        <img
          className="absolute top-[0rem] left-[0rem] rounded-31xl w-[10.563rem] h-[15.188rem]"
          alt=""
          src="/rectangle-279.svg"
        />
        <b className="absolute top-[6.938rem] left-[2.063rem]">LOGIN</b>
        <div
          className="absolute top-[13.625rem] left-[1.313rem] font-semibold text-white cursor-pointer"
          onClick={onSIGNUPTextClick}
        >
          SIGN UP
        </div>
      </div>
      <div
        className="absolute top-[27.688rem] left-[51.938rem] rounded-11xl bg-lavender-200 shadow-[0px_10px_10px_rgba(0,_0,_0,_0.1)] w-[22.75rem] h-[24.625rem] overflow-hidden flex flex-col items-center justify-center py-[1.875rem] px-[1.25rem] box-border gap-[1.25rem_0rem] cursor-pointer text-[1.063rem] text-gray-1000 font-roboto"
        onClick={onFrameContainer1Click}
      >
        <Form className="w-[19.875rem] [border:none] bg-[transparent] font-roboto font-medium text-[1.063rem] text-gray-1000">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" />
        </Form>
        <div className="w-[19.875rem] rounded-11xl bg-mediumslateblue shadow-[0px_30px_30px_rgba(57,_106,_255,_0.15)] [backdrop-filter:blur(4px)] box-border h-[2.563rem] flex flex-row items-center justify-start p-[0.625rem] border-[1px] border-solid border-gray-1100">
          <div className="relative tracking-[-0.41px] leading-[1.375rem] font-extrabold">
            ******
          </div>
        </div>
        <div
          className="w-[13.375rem] rounded-11xl bg-blue-200 shadow-[0px_11px_49px_rgba(24,_20,_243,_0.63)] [backdrop-filter:blur(4px)] box-border flex flex-row items-center justify-center p-[0.625rem] cursor-pointer text-white border-[1px] border-solid border-gray-1100"
          onClick={onFrameContainer12Click}
        >
          <div className="relative tracking-[-0.41px] leading-[1.375rem] font-extrabold">
            Login
          </div>
        </div>
        <div className="w-[19.5rem] flex flex-col items-center justify-center py-[1.25rem] px-[1rem] box-border gap-[0.938rem_0rem] text-left text-label-color-light-primary">
          <div className="rounded-81xl [background:linear-gradient(180deg,_rgba(24,_20,_243,_0.1),_rgba(255,_255,_255,_0.1))] shadow-[0px_10px_30px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center py-[0.875rem] px-[2.5rem] gap-[0rem_0.438rem] border-[1px] border-solid border-blue-200">
            <img
              className="w-[1rem] relative h-[1.063rem] overflow-hidden shrink-0"
              alt=""
              src="/google-1.svg"
            />
            <div className="w-[9.813rem] relative tracking-[-0.41px] leading-[1.375rem] font-medium flex items-center shrink-0">
              Continue with Google
            </div>
          </div>
          <div className="w-[16.25rem] rounded-81xl [background:linear-gradient(180deg,_rgba(24,_20,_243,_0.1),_rgba(255,_255,_255,_0.1))] shadow-[0px_10px_30px_rgba(0,_0,_0,_0.25)] box-border h-[3.125rem] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[0.875rem] px-[2.5rem] gap-[0rem_0.625rem] font-default-bold-body border-[1px] border-solid border-blue-200">
            <div className="relative tracking-[-0.41px] leading-[1.375rem] font-semibold">
              􀣺
            </div>
            <div className="relative tracking-[-0.41px] leading-[1.375rem] font-medium font-roboto">
              Continue with Apple
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
