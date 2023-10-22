import { useCallback } from "react";
import { css, keyframes } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const animationShadowInsetCenter = keyframes`
    0% {
        box-shadow: inset 0 0 0 0 transparent;
    }
    100% {
        box-shadow: inset 0 0 14px 0 rgb(0 0 0 / 50%);
    }
`;

const Desktop1 = () => {
  const navigate = useNavigate();

  const onNEWSClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onABOUTTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={css`
        position: relative;
        background-color: var(--color-lightblue);
        width: 100%;
        height: 1024px;
        overflow: hidden;
        text-align: center;
        font-size: var(--font-size-21xl);
        color: var(--color-whitesmoke);
        font-family: var(--font-poppins);
      `}
    >
      <video
        className={css`
          position: absolute;
          top: 66px;
          left: 0px;
          background-color: var(--color-lightblue);
          width: 1429px;
          height: 958px;
        `}
        autoPlay
        muted
        loop
        controls
      >
        <source className={css``} src="/vid-20231022-wa0009.mp4" />
      </video>
      <div
        className={css`
          position: absolute;
          top: 317px;
          left: 304px;
          display: inline-block;
          width: 858px;
          height: 243px;
          &:hover {
            color: var(--color-ghostwhite);
          }
        `}
      >
        <p
          className={css`
            margin: 0;
          `}
        >{`WELCOME `}</p>
        <p
          className={css`
            margin: 0;
          `}
        >{`TO `}</p>
        <p
          className={css`
            margin: 0;
          `}
        >
          MEDINFO Matter
        </p>
      </div>
      <header
        className={css`
          position: absolute;
          top: 20px;
          left: 21px;
          width: 1280px;
          height: 55px;
          text-align: left;
          font-size: var(--font-size-6xl);
          color: var(--color-black);
          font-family: var(--font-inter);
          &:hover {
            animation: 3s ease 0s 1 normal none ${animationShadowInsetCenter};
            opacity: 1;
          }
        `}
        id="Header"
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            font-size: var(--font-size-17xl);
            font-family: var(--font-kyivtype-sans);
            display: inline-block;
            width: 320px;
            height: 49px;
          `}
        >
          MedInfoMatter
        </div>
        <a
          className={css`
            text-decoration: none;
            position: absolute;
            top: 6px;
            left: 806px;
            color: inherit;
            display: inline-block;
            width: 119px;
            height: 36px;
            cursor: pointer;
          `}
          onClick={onNEWSClick}
        >
          NEWS
        </a>
        <div
          className={css`
            position: absolute;
            top: 6px;
            left: 985px;
            font-size: var(--font-size-5xl);
            display: inline-block;
            width: 152px;
            height: 49px;
            cursor: pointer;
          `}
          onClick={onABOUTTextClick}
        >
          ABOUT
        </div>
        <a
          className={css`
            text-decoration: none;
            position: absolute;
            top: 8px;
            left: 1154px;
            font-size: var(--font-size-5xl);
            color: inherit;
            display: inline-block;
            width: 126px;
            height: 21px;
          `}
        >
          Chat Bot
        </a>
        <a
          className={css`
            text-decoration: none;
            position: absolute;
            top: 9px;
            left: 652px;
            color: inherit;
            display: inline-block;
            width: 119px;
            height: 36px;
          `}
        >
          HOME
        </a>
      </header>
      <div
        className={css`
          position: absolute;
          top: 69px;
          left: 22px;
          font-size: var(--font-size-5xl);
          font-family: var(--font-kyivtype-sans);
          color: var(--color-black);
          text-align: left;
          display: inline-block;
          width: 430px;
          height: 44px;
        `}
      >
        YourHealthCompanion
      </div>
    </div>
  );
};

export default Desktop1;
