import watchYoutubeVideo from "./services/watchYoutubeVideo";
import { logMyIp } from "./services/logMyIp";
import { getProcessArgs } from "./services/getProcessArgs";
import { waitNSeconds } from "./services/waitNSeconds";

const args: any = getProcessArgs();

const OPEN_PORTS = ["9050", "9052", "9053", "9054", "9055", "9056", "9057", "9058", "9059"];

const loopFunctions = async (loopNum: number, portIndex: number) => {
  try {
    console.log(`${loopNum} Views will be added to the video`);
    console.log("------------");
    for (let i = 0; i < loopNum; i++) {
      // const PORT = OPEN_PORTS[i % OPEN_PORTS.length];
      const PORT = OPEN_PORTS[portIndex];
      console.log("\n");
      console.log(`Connecting to Tor Proxy PORT : ${PORT}`);
      const proxy = `127.0.0.1:${PORT}`;
      await logMyIp(proxy);
      await watchYoutubeVideo("https://www.youtube.com/watch?v=o4WccB2yqlk", proxy);
      console.log(`Views generated : ${i + 1}`);
      console.log("------------");
    }
    console.log(`${loopNum} Views added`);
  } catch (error: any) {
    console.error("\n", error.message, "\n");
  }
};

loopFunctions(args.n, args.p);
