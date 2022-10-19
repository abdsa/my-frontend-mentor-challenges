import type { NextPage } from "next";
import Image from "next/image";
import avatar from "../public/images/image-avatar.png"
const Home: NextPage = () => {
  return (
    <>
      <div className="grid place-items-center place-content-center my-10">
        <div className="card p-2 bg-card min-w-[150px] max-w-[250px] rounded-lg flex flex-col gap-3">
          <div className="card-image rounded-lg aspect-[1/1] hover-state"></div>
          <div className="text-white hover-state">Equilibrium #3429</div>
          <div className="text-soft-blue text-[13px]">
            Our Equilibrium collection promotes balance and calm.
          </div>
          <div className="flex justify-between">
            <div className="text-cyan text-[10px] font-bold flex gap-1 items-center">
              <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                  fill="#00FFF8"
                />
              </svg>{" "}
              0.041 ETH
            </div>
            <div className="text-soft-blue flex gap-1 items-center text-[10px]">
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

          <div className="text-soft-blue flex text-[10px] items-center">
            <Image
              src={avatar}
              alt="An avatar of Jules Wyvern"
              className="rounded-full border border-white"
              style={{borderRadius: 9999, borderWidth: 1, marginRight: 8, borderColor: "white"}}
              width={"20px"}
              height={"20px"}
            />
            <span className="ml-2">Creation of</span>
            <span className="text-white hover-state">Jules Wyvern</span>
          </div>
        </div>
      </div>

      <div className="text-soft-blue">
        Challenge by
        <a
          rel="noreferrer"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="#" className="text-cyan">
          Abd Sab
        </a>
        .
      </div>
    </>
  );
};

export default Home;
