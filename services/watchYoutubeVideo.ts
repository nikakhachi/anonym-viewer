import Puppeteer, { Browser, Page } from "puppeteer";
import { waitNSeconds } from "./waitNSeconds";

const watchYoutubeVideo = async (youtubeLink: string, proxy: string) => {
  try {
    console.log("Starting Up..");
    const browser: Browser = await Puppeteer.launch({ args: [`--proxy-server=socks5://${proxy}`] });
    const page: Page = await browser.newPage();
    await page.goto(youtubeLink, {
      waitUntil: "domcontentloaded",
    });
    console.log("Starting Video Watching..");
    await page.evaluate(() => {
      setTimeout(() => {
        // Handle Paused Video On Start
        const playPauseButton = document.querySelector(".ytp-play-button");
        const isVideoPaused = () => (playPauseButton?.getAttribute("title") === "Play (k)" ? true : false);
        // @ts-ignore
        if (isVideoPaused()) playPauseButton.click();
        // Handle Paused Video On Start
        // ********
        // Handle Cookie Window On Start
        const isCookieWindow =
          // @ts-ignore
          document.querySelector(".style-scope .ytd-consent-bump-v2-lightbox")?.children?.[3]?.children?.[1]?.innerText === "Before you continue to YouTube";
        // @ts-ignore
        const agreeButton = document.querySelectorAll(".style-scope .ytd-button-renderer .style-primary .size-default")[1];
        // @ts-ignore
        if (isCookieWindow) agreeButton.click();
        // Handle Cookie Window On Start
      }, 2000);
    });
    await waitNSeconds(35);
    console.log("Close The Browser");
    await browser.close();
  } catch (error) {
    console.log(error);
  }
};

export default watchYoutubeVideo;
