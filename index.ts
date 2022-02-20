import watchYoutubeVideo from "./services/watchYoutubeVideo";
import { logMyIp } from "./services/logMyIp";
import { getProcessArgs } from "./services/getProcessArgs";
import logger from "./utils/logger";
import { logMemoryUsage } from "./services/logMemoryUsage";

const args: any = getProcessArgs();

const OPEN_PORTS = ["9050", "9052", "9053", "9054", "9055", "9056", "9057", "9058", "9059"];

const loopFunctions = async (loopNum: number, portIndex: number) => {
  try {
    logger.info(`${loopNum} Views will be added to the video \n`);
    for (let i = 0; i < loopNum; i++) {
      // const PORT = OPEN_PORTS[i % OPEN_PORTS.length];
      const PORT = OPEN_PORTS[portIndex];
      logger.debug(`Connecting to Tor Proxy PORT : ${PORT}`);
      const proxy = `127.0.0.1:${PORT}`;
      await logMyIp(proxy);
      await watchYoutubeVideo("https://www.youtube.com/watch?v=o4WccB2yqlk", proxy);
      logMemoryUsage();
      logger.debug(`Views generated : ${i + 1} \n`);
    }
    logger.info(`${loopNum} Views added`);
    logger.info(`Whole Memory Report : \n`);
    logMemoryUsage();
  } catch (error: any) {
    logger.error("Root ERROR : ", error);
  }
};

loopFunctions(args.n, args.p);
