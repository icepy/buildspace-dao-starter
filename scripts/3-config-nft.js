import sdk from "./1-initialize-sdk.js";
import { readFileSync } from 'fs';

const bundleDrop = sdk.getBundleDropModule('0xBAB86c4b731b382b4D2167e7b69Fd862187bE712');

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "ShiNianYiJian",
        description: "This NFT will give you access to 101DAO!",
        image: readFileSync("scripts/assets/shinianyijian.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()