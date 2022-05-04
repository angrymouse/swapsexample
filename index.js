const { DirectSecp256k1HdWallet, Registry } = require("@cosmjs/proto-signing");
const {
	defaultRegistryTypes,
	SigningStargateClient,
} = require("@cosmjs/stargate");
const clptx = require("./sifnode/clp/v1/tx");
const myRegistry = new Registry(defaultRegistryTypes);

const mnemonic = ""; // Replace with your own mnemonic
(async () => {
	Object.entries(clptx).forEach((c) => {
		console.log(c);
		if (c[0] == "protobufPackage" || c[0] == "__esModule") {
			return;
		}
		myRegistry.register("/" + clptx.protobufPackage + "." + c[0], c[1]);
	});
	const fee = {
		amount: [
			{
				denom: "rowan",
				amount: "10000000000000",
			},
		],
		gas: "280000",
	};

	const signer = await DirectSecp256k1HdWallet.fromMnemonic(
		mnemonic,
		{ prefix: "sif" } // Replace with your own Bech32 address prefix
	);
	const [firstAccount] = await signer.getAccounts();
	const client = await SigningStargateClient.connectWithSigner(
		"https://rpc.sifchain.finance", // Replace with your own RPC endpoint
		signer,
		{ registry: myRegistry }
	);
	console.log(client);
	client.signAndBroadcast(
		firstAccount.address,
		[
			{
				typeUrl: "/sifnode.clp.v1.MsgSwap",

				value: clptx["MsgSwap"].fromPartial({
					signer: firstAccount.address,
					sentAsset: "idk, instert your here",
					receivedAsset: "and here",
					sentAmount: "69",
					minReceivingAmount: "100500",
				}),
			},
			{
				typeUrl: "/sifnode.clp.v1.MsgSwap",

				value: clptx["MsgSwap"].fromPartial({
					signer: firstAccount.address,
					sentAsset: "idk, instert your here",
					receivedAsset: "and here",
					sentAmount: "69",
					minReceivingAmount: "100500",
				}),
			},
		],
		fee,
		"SifReCompound rewards recompound. Stake now with Another.Software!\n https://another.software/sifrecompound"
	);
})();
// Inside an async function...
