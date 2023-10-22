import { useCallback } from "react";
import { css, keyframes } from "@emotion/css";

const animationShadowInsetCenter = keyframes`
    0% {
        box-shadow: inset 0 0 0 0 transparent;
    }
    100% {
        box-shadow: inset 0 0 14px 0 rgb(0 0 0 / 50%);
    }
`;

const Desktop2 = () => {
  const onHOMEClick = useCallback(() => {
    window.open("https://www.isro.gov.in/Timeline.html");
  }, []);

  return (
    <div
      className={css`
        position: relative;
        background-color: var(--color-lightblue);
        width: 100%;
        height: 1024px;
        overflow: hidden;
        text-align: left;
        font-size: var(--font-size-5xl);
        color: var(--color-black);
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
        <source className={css``} src="/vid-20231022-wa0006.mp4" />
      </video>
      <header
        className={css`
          position: absolute;
          top: 20px;
          left: 21px;
          width: 1280px;
          height: 55px;
          text-align: left;
          font-size: var(--font-size-5xl);
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
            font-size: var(--font-size-6xl);
            color: inherit;
            display: inline-block;
            width: 119px;
            height: 36px;
            cursor: pointer;
          `}
          onClick={onHOMEClick}
        >
          HOME
        </a>
        <div
          className={css`
            position: absolute;
            top: 6px;
            left: 985px;
            display: inline-block;
            width: 152px;
            height: 49px;
          `}
        >
          NEWS
        </div>
        <a
          className={css`
            text-decoration: none;
            position: absolute;
            top: 8px;
            left: 1154px;
            color: inherit;
            display: inline-block;
            width: 126px;
            height: 21px;
          `}
        >
          Chat Bot
        </a>
        <div
          className={css`
            position: absolute;
            top: 4px;
            left: 607px;
            display: inline-block;
            width: 152px;
            height: 49px;
          `}
        >
          ABOUT
        </div>
      </header>
      <div
        className={css`
          position: absolute;
          top: 69px;
          left: 21px;
          font-family: var(--font-kyivtype-sans);
          display: inline-block;
          width: 430px;
          height: 44px;
        `}
      >
        YourHealthCompanion
      </div>
      <div
        className={css`
          position: absolute;
          top: 133px;
          left: -55px;
          font-size: var(--font-size-21xl);
          text-align: center;
          display: inline-block;
          width: 334px;
          height: 95px;
        `}
      >{`ABOUT `}</div>
      <div
        className={css`
          position: absolute;
          top: 201px;
          left: 90px;
          font-size: 32px;
          white-space: pre-wrap;
          display: inline-block;
          width: 1253px;
          height: 773px;
        `}
      >
        <p
          className={css`
            margin: 0;
          `}
        >
          "At MEDINFO MATTER, our mission is to empower individuals to take
          control of their health through our cutting-edge chronic disease
          predictor. Our journey began with a simple idea – to make health
          predictions accessible and understandable for everyone, assisting
          individuals in making informed decisions to prevent chronic diseases.
          Behind our project is a dedicated team of experts in healthcare, data
          science, and technology. We believe in transparency, accuracy, and
          accessibility as we work toward a world where health predictions are
          readily available and understandable to all. We use the latest
          technologies and data sources, prioritizing data security and privacy.
          Your data is protected by stringent protocols. If you have questions
          or feedback, we're eager to hear from you. Explore testimonials,
          updates, and our vision through visuals and multimedia. Try our
          predictor today and join us in our mission to make health predictions
          accessible to all. We've reviewed every word on this page for
          accuracy, and our organized and responsive design ensures you have a
          seamless experience, no matter the device. Thank you for being a part
          of our journey at MEDINFO MATTER."
        </p>
      </div>
    </div>
  );
};

export default Desktop2;
