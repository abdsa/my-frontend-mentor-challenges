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
      <main className="grid grid-cols-1 grid-rows-2 place-items-center lg:grid-cols-2 lg:grid-rows-1">
        <div className="relative grid h-[450px] w-[200px] rounded-[20px] p-[8px] shadow-[9px_20px_40px_1px_rgb(0,0,0,0.1)]">
          <div className="notch absolute left-[28%] h-6 w-24 rounded-b-xl bg-white"></div>
          <div className="h-full w-full rounded-[15px] bg-light-grayish-violet-app-background">
            <div className="contact h-14 w-full rounded-t-[15px] rounded-b-[5px] bg-gradient-to-r from-light-violet to-light-magenta px-2 pt-5 text-white shadow-[0px_10px_10px_0px_rgb(0,0,0,0.1)]">
              <div className="flex justify-center gap-3">
                <div className="h-6 w-6 rounded-full border border-white">
                  <Image
                    alt="The contact's avatar"
                    className="rounded-full"
                    src={avatar}
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex flex-col text-[10px]">
                  <span className="font-bold">Samuel Green</span>
                  <span className="text-[7px] font-extralight opacity-70">
                    Available to Walk
                  </span>
                </div>
              </div>
            </div>
            <div className="grid gap-2 px-[7px] py-3 text-[7.5px]">
              <div className="max-w-[130px] break-words rounded-[10px] rounded-bl-[5px] bg-[#ECE5F3] p-2 text-moderate-violet-chat-on-the-left">
                That sounds great. I&apos;d be happy with that.
              </div>
              <div className="max-w-[130px] break-words rounded-[10px] rounded-bl-[5px] bg-[#ECE5F3] p-2 text-moderate-violet-chat-on-the-left">
                Could you send over some pictures of your dog, please?
              </div>
              <div className="place-self-end grid grid-rows-1 grid-cols-3 gap-2 max-w-[130px]">
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

              <div className="max-w-[130px] place-self-end break-words rounded-[10px] rounded-br-[5px] bg-white p-2 shadow-lg">
                Here are a few pictures. She&apos;s a happy girl!
              </div>
              <div className="max-w-[130px] place-self-end break-words rounded-[10px] rounded-br-[5px] bg-white p-2 shadow-lg">
                Can you make it?
              </div>
              <div className="max-w-[130px] break-words rounded-[10px] rounded-bl-[5px] bg-[#ECE5F3] p-2 text-moderate-violet-chat-on-the-left">
                She looks so happy! The time we discussed works. How long shall I take her out for?
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col place-items-center gap-2 lg:place-items-start">
          <h1 className="text-3xl font-bold text-very-dark-desaturated-violet-main-heading">
            Simple booking
          </h1>
          <p className="max-w-[clamp(45ch,50%,75ch)] text-center text-xs text-dark-Grayish-violet-paragraph lg:text-start">
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
          }

          body {
            font-family: "Rubik", sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default ChatAppIllustration;
