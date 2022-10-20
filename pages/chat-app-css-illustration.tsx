import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import avatar from "../public/c-a-c-i-images/avatar.jpg";
import dogImage1 from "../public/c-a-c-i-images/dog-image-1.jpg";
import dogImage2 from "../public/c-a-c-i-images/dog-image-2.jpg";
import dogImage3 from "../public/c-a-c-i-images/dog-image-3.jpg";

import styles from "../styles/c-a-c-i.module.css";
Image;
const ChatAppIllustration: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dowlk</title>
      </Head>
      <main className="grid h-screen w-screen grid-cols-1 place-items-center gap-3 lg:grid-cols-[500px,500px] lg:grid-rows-1 place-content-center overflow-">
        <div className="absolute z-10 h-[45%] w-[40rem] rounded-b-[50rem] -left-[300px] self-start justify-self-start bg-gradient-to-b from-light-magenta to-light-violet lg:h-[90%] lg:left-0"></div>
        <div className="absolute z-10 h-[45%] w-[40rem] rounded-t-[50rem] -right-[300px] self-end justify-self-end bg-gradient-to-b from-light-magenta to-light-violet opacity-10 lg:h-[90%] lg:right-0"></div>
        <div className="relative z-20 mt-20 grid w-[330px] scale-[0.8] rounded-[35px] bg-white p-[10px] shadow-[0px_10px_20px_5px_rgb(0,0,0,0.1)] lg:mt-0 lg:scale-[1]">
          <div className="notch absolute left-[25%] h-6 w-[50%] rounded-b-xl bg-white"></div>
          <div className="h-full w-full rounded-[25px] bg-light-grayish-violet-app-background">
            <div className="contact h-16 w-full rounded-t-[25px] rounded-b-[5px] bg-gradient-to-r from-light-violet to-light-magenta px-2 pt-5 text-white shadow-[0px_10px_10px_0px_rgb(0,0,0,0.1)]">
              <div className="flex justify-center gap-3">
                <div className="h-8 w-8 rounded-full border border-white">
                  <Image
                    alt="The contact's avatar"
                    className="rounded-full"
                    src={avatar}
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col text-[12px]">
                  <span className="font-bold">Samuel Green</span>
                  <span className="text-[10px] font-extralight opacity-70">
                    Available to Walk
                  </span>
                </div>
              </div>
            </div>
            <div className="grid gap-2 px-[7px] py-3 text-[12px]">
              <div className="max-w-[220px] break-words rounded-[10px] rounded-bl-[5px] bg-[#ECE5F3] pt-3 pb-3 pr-4 pl-3 text-moderate-violet-chat-on-the-left">
                That sounds great. I&apos;d be happy with that.
              </div>
              <div className="max-w-[220px] break-words rounded-[10px] rounded-bl-[5px] bg-[#ECE5F3] pt-3 pb-3 pr-4 pl-3 text-moderate-violet-chat-on-the-left">
                Could you send over some pictures of your dog, please?
              </div>
              <div className="mt-2 grid max-w-[180px] grid-cols-3 grid-rows-1 gap-2 place-self-end">
                <Image
                  src={dogImage1}
                  alt="a happy dog"
                  className="rounded-[10px]"
                />
                <Image
                  src={dogImage2}
                  alt="a happy dog"
                  className="rounded-[10px]"
                />
                <Image
                  src={dogImage3}
                  alt="a happy dog"
                  className="rounded-[10px]"
                />
              </div>

              <div className="max-w-[220px] place-self-end break-words rounded-[10px] rounded-br-[5px] bg-white px-2 py-[6px] shadow-lg">
                Here are a few pictures. She&apos;s a happy girl!
              </div>
              <div className="max-w-[220px] place-self-end break-words rounded-[10px] rounded-br-[5px] bg-white px-2 py-[6px] shadow-lg">
                Can you make it?
              </div>
              <div className="mt-3 max-w-[220px] break-words rounded-[10px] rounded-bl-[5px] bg-[#ECE5F3] p-2 text-moderate-violet-chat-on-the-left">
                She looks so happy! The time we discussed works. How long shall
                I take her out for?
              </div>

              <div className="grid max-w-[250px] grid-cols-2 grid-rows-1 place-items-center rounded-[10px] rounded-bl-[5px] bg-gradient-to-r from-light-magenta to-light-violet py-[10px] pr-5 pl-10 text-white">
                <div className="flex items-center justify-between gap-6">
                  <div className="h-6 w-6 rounded-full border border-very-light-magenta-radio-button-outline bg-transparent"></div>
                  <span className="w-[100px] justify-self-start">
                    30 minute walk
                  </span>
                </div>
                <span className="place-self-end text-[15px] font-bold">
                  $29
                </span>
              </div>
              <div className="grid max-w-[250px] grid-cols-2 grid-rows-1 place-items-center rounded-[10px] rounded-bl-[5px] bg-gradient-to-r from-light-magenta to-light-violet py-[10px] pr-5 pl-10 text-white">
                <div className="flex items-center justify-between gap-6">
                  <div className="h-6 w-6 rounded-full border border-very-light-magenta-radio-button-outline bg-transparent"></div>
                  <span className="w-[100px] justify-self-start">
                    1 hour walk
                  </span>
                </div>
                <span className="place-self-end text-[15px] font-bold">
                  $49
                </span>
              </div>
              <div className="flex">
                <div className="mt-2 w-full rounded-full bg-white py-2 pr-3 text-gray-400">
                  <div className="grid grid-cols-2 grid-rows-1 place-items-center">
                    Type a message...
                    <div className="relative h-9 w-9 justify-self-end rounded-full bg-very-dark-desaturated-violet-submit-button-background p-1">
                      <div className="submit-arrow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-20 grid place-items-center gap-2 lg:place-items-start">
          <h1 className="justify-start text-center text-[3rem] text-very-dark-desaturated-violet-main-heading lg:text-start">
            Simple booking
          </h1>
          <p className="max-w-[clamp(45ch,50%,75ch)] px-3 text-center text-[1rem] text-dark-Grayish-violet-paragraph lg:text-start lg:p-0">
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </div>
      </main>

      <style global jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");
          * {
            --pale-violet: 276 100% 81%;
            --moderate-violet-chat-on-the-left: 276 55% 52%;
            --desaturated-ark-violet-chat-on-the-right: 271 15% 43%;
            --grayish-lue-placeholder-text: 206 6% 79%;
            --very-dark-desaturated-violet-main-heading: 271 36% 24%;
            --dark-Grayish-violet-paragraph: 270 7% 64%;
            --light-magenta: 293 100% 63%;
            --light-violet: 264 100% 61%;
            --white: hsl(0, 0%, 100%);
            --light-grayish-violet-app-background: 70 20% 96%;
            --very-dark-desaturated-violet-submit-button-background: 271 36% 24%;
            --very-light-magenta-radio-button-outline: 289 100% 72%;
          }

          body,
          html {
            width: 100%;
            height: 100%;
            overflow-x: hidden
          }

          body {
            font-family: "Rubik", sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .submit-arrow:after {
            content: "";
            width: 10px;
            height: 2px;
            background-color: white;
            position: absolute;
            border-radius: 5px;
            top: 35%;
            left: 38%;
            transform: rotate(45deg);
          }

          .submit-arrow:before {
            content: "";
            width: 10px;
            height: 2px;
            background-color: white;
            position: absolute;
            border-radius: 5px;
            top: 54%;
            left: 38%;
            transform: rotate(-45deg);
          }

          .style {
            position: relative;

            border-bottom-right-radius: 40%;
            border-bottom-left-radius: 40%;
            width: 200px;
            z-index: -1;
            height: 200px;
            background: linear-gradient(
              to bottom,
              hsl(293deg 100% 63%),
              hsl(264deg 100% 61%)
            );
          }
        `}
      </style>
    </>
  );
};

export default ChatAppIllustration;
