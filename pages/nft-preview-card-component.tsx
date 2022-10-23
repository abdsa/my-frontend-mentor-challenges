import type { NextPage } from "next";
import styles from "../styles/n-p-c-c.module.css";
import Head from "next/head";
import Image from "next/image";
import avatar from "../public/n-p-c-c-images/image-avatar.png";
import equilibrium from "../public/image-equilibrium.jpg"

const NFTpreviewCard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Equilibrium #3429</title>
      </Head>

      <main className={`my-10 grid place-content-center place-items-center`}>
        <div
          className={`${styles.card} flex max-w-[250px] scale-[1.5] flex-col gap-3 rounded-lg bg-card p-2`}
        >
          <div
            className={`${styles.cardImage} ${styles.hoverState} aspect-[1/1] rounded-lg`}
          ></div>
          <Image src={equilibrium} alt={""}></Image>
          <h1 className={`${styles.hoverState} text-white`}>Equilibrium #3429</h1>
          <div className="text-[13px] text-soft-blue">
            Our Equilibrium collection promotes balance and calm.
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-1 text-[10px] font-bold text-cyan">
              <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                  fill="#00FFF8"
                />
              </svg>{" "}
              0.041 ETH
            </div>
            <div className="flex items-center gap-1 text-[10px] text-soft-blue">
              <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                  fill="#8BACD9"
                />
              </svg>
              3 days left
            </div>
          </div>
          <hr className="border-soft-blue opacity-25" />

          <div className="flex items-center text-[10px] text-soft-blue">
            <div className="h-5 w-5 rounded-full border border-white">
              <Image
                src={avatar}
                alt="An avatar of Jules Wyvern"
                width={"20px"}
                height={"20px"}
              />
            </div>
            <span className="ml-2">Creation of</span>
            <span className={`${styles.hoverState} text-white`}>&nbsp;Jules Wyvern</span>
          </div>
        </div>
      </main>

      <footer className="text-soft-blue">
        Challenge by
        <a
          rel="noreferrer"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          &nbsp;Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="#" className="text-cyan">
          Abd Sab
        </a>
        .
      </footer>

      <style global jsx>
        {`
          * {
            --mainBG: hsl(217, 54%, 11%);
            --cardBG: 216deg 50% 16%;
            --white: 0deg 0% 100%;
            --soft-blue: 215deg 51% 70%;
            --cyan: 178 100% 50%;
            --very-dark-blue-line: hsl(217, 55%, 10%);
            --very-dark-blue: hsl(216, 57%, 11%);
          }

          html,
          body {
            width: 100%;
            height: 100%;
          }

          body {
            background-color: var(--mainBG);
            font-family: "Outfit", sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default NFTpreviewCard;
