import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import sprite from "../../assets/sprite.svg";
import pill from "../../images/white round pill.png";
import lines from "../../images/three lines.png";
import {
  ContentWrpr,
  InputWrpr,
  InputsWrpr,
  LinesImg,
  LogInBtn,
  LoginPageWrpr,
  LogoWrpr,
  PillImg,
  Title,
} from "./LoginPage.styled";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Mail is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginThunk(data));
  };

  return (
    <LoginPageWrpr>
      <LogoWrpr>
        <img src="/logo.svg" alt="Logo" width={44} height={44} />
        <p>E-Pharmacy</p>
      </LogoWrpr>
      <ContentWrpr>
        <Title>
          Your medication, delivered Say goodbye to all{" "}
          <span>your healthcare</span> worries with us
        </Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputsWrpr>
            <InputWrpr>
              <input
                type="text"
                name="email"
                placeholder="Email address"
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </InputWrpr>
            <InputWrpr>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                {...register("password")}
              />
              <svg
                width="18"
                height="18"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <use href={sprite + (showPassword ? "#eye-off" : "#eye")}></use>
              </svg>
              {errors.password && <p>{errors.password.message}</p>}
            </InputWrpr>
          </InputsWrpr>
          <LogInBtn type="submit">Log in</LogInBtn>
        </form>
      </ContentWrpr>
      <PillImg src={pill} alt="Pill" />
      <LinesImg src={lines} alt="Lines" />
    </LoginPageWrpr>
  );
};

export default LoginPage;
