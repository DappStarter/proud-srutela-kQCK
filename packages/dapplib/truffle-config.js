require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign strong rice still million hockey another army giant'; 
let testAccounts = [
"0x31a33b6f9aeaeef982ee3ad176088b0597f06a2f07f13b212c2ca24f1ad12ed8",
"0x95553b349ff3c0beec3dd9a6387ce774f9b40fbb1e06447fafaebd02008de4b3",
"0xb5f78271d330d4bb748e559584ad1bfd2c273e6bd2cdc7dab160260ccd9ec5ee",
"0xad6cafed87b7ca62ee4624e1f19e5963163343d0a588561769d98dc1e036633d",
"0x5af121033c2710f6666c151cc5be7444f4829f6028e6326b3624d7a0e430c5f2",
"0x5a2d87c224ed4ffe6c7f6c62aeba75c9529268db1e31302fe1a427e1841cb4d4",
"0xed079b4a63ad388613131f5ba408e3614a54f2a197a6600cf98ce5d368fd8378",
"0x505a346b78a8079a1148eb832ae8083753f412c76eee5b0126030b30295b2a77",
"0x85a6a7de790a774309b65f8d6cf4751b8208455fd9d1c62a08ec3e46e644c1bc",
"0xdb6a9676475abbc72708480088499c5cd899be403ce11bc6a12bc3bbf45d00c7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


