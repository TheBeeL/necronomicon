import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Page from "../components/Page";
import Role from "../components/Role";
import Token from "../components/Token";

import roles from "~/data/roles/tb";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trouble Brewing</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black">
        {/* <div className="fixed top-0 left-0 h-[29.7cm] w-[21cm] bg-black/50"></div> */}
        <Page className="hidden py-[0.5cm]">
          <div className="flex justify-around">
            <Token {...roles.chef} />
            <Token {...roles.empath} />
            <Token {...roles.fortune_teller} />
            <Token {...roles.investigator} />
          </div>
          <div className="-mt-4 flex justify-center gap-6">
            <Token {...roles.librarian} />
            <Token {...roles.monk} />
            <Token {...roles.mayor} />
          </div>
          <div className="-mt-4 flex justify-around">
            <Token {...roles.raven_keeper} />
            <Token {...roles.slayer} />
            <Token {...roles.soldier} />
            <Token {...roles.undertaker} />
          </div>
          <div className="-mt-4 flex justify-center gap-6">
            <Token {...roles.virgin} />
            <Token {...roles.washerwoman} />
            <Token {...roles.butler} />
          </div>
          <div className="-mt-4 flex justify-around">
            <Token {...roles.drunk} />
            <Token {...roles.recluse} />
            <Token {...roles.saint} />
            <Token {...roles.baron} />
          </div>
          <div className="-mt-4 flex justify-center gap-6">
            <Token {...roles.poisoner} />
            <Token {...roles.scarlet_woman} />
            <Token {...roles.spy} />
          </div>
          <div className="-mt-4 flex justify-around">
            <Token {...roles.imp} />
            <Token label="orologiaio" iconSrc="snv/clockmaker" />
            <Token label="artista" iconSrc="snv/artist" />
            <Token label="imbranato" iconSrc="snv/klutz" />
          </div>
        </Page>
        <Page className="overflow-hidden">
          <div
            style={{ backgroundImage: "url('/images/tb/sheet.webp')" }}
            className="script h-full w-full"
          >
            <Image
              src="/images/tb/logo.webp"
              width={1000}
              height={50}
              className="logo"
              alt="logo"
            />
            <div className="town-side side font-script-title flex items-center justify-center uppercase text-amber-200">
              cittadini
            </div>
            <div className="town columns-2 pr-8 pt-3">
              <Role {...roles.librarian} />
              <Role {...roles.undertaker} />
              <Role {...roles.chef} />
              <Role {...roles.raven_keeper} />
              <Role {...roles.empath} />
              <Role {...roles.fortune_teller} />
              <Role {...roles.investigator} />
              <Role {...roles.washerwoman} />
              <Role {...roles.monk} />
              <Role {...roles.mayor} />
              <Role {...roles.soldier} />
              <Role {...roles.virgin} />
              <Role {...roles.slayer} />
            </div>
            <div className="town -ml-10 w-80 border-b-2 border-black/50"></div>
            <div className="out-side side font-script-title flex items-center justify-center uppercase text-amber-200">
              emarginati
            </div>
            <div className="out columns-2 pr-8 pt-6">
              <Role {...roles.butler} />
              <Role {...roles.recluse} />
              <Role {...roles.saint} />
              <Role {...roles.drunk} />
            </div>
            <div className="out -ml-10 w-80 border-b-2 border-black/50"></div>
            <div className="minions-side side font-script-title flex items-center justify-center uppercase text-amber-200">
              seguaci
            </div>
            <div className="minions columns-2 pr-8 pt-6">
              <Role {...roles.poisoner} />
              <Role {...roles.baron} />
              <Role {...roles.scarlet_woman} />
              <Role {...roles.spy} />
            </div>
            <div className="minions -ml-10 w-80 border-b-2 border-black/50"></div>
            <div className="demons-side side font-script-title mt-4 flex items-center justify-end uppercase text-amber-200">
              demoni
            </div>
            <div className="demons relative  columns-2 pt-6">
              <Role {...roles.imp} />
              <div
                className="absolute bottom-0 -left-10 flex h-[110px] w-full items-end"
                style={{ gridArea: "bottom" }}
              >
                <Image src="/images/tb/sheet-bottom.webp" fill alt="bottom" />
                <div className="absolute bottom-2 ml-[30px] flex w-full justify-center font-serif">
                  <p className="block w-24 text-center text-sm text-black/60">
                    * Non la Prima Notte
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Page>
      </main>
    </>
  );
};

export default Home;
