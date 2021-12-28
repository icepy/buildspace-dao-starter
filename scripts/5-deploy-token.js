import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0xE97510738B97163Ab694C49dd258A2a772140096");

async function run(){
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "101DAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "SNYJ",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
}

run();