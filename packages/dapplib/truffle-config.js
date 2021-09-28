require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remain method idea arm broken twelve'; 
let testAccounts = [
"0xf0aeb71bb45489a0af3efb02d3c6430ad0f15296b175ebc3f6621935bb93f67f",
"0x6674f873ac57c945573b39f8fed131632d4042daf3b85e8f7a912f92cb5cbf38",
"0x04136ead87972b9750f30c80ed9b4c2a516dfc4dc1e7b71019c86f2bb70a7308",
"0x57a2cda988ee44f05eb3913cc317a8bfae2555ebc7dafabfd053fb927a749fe1",
"0x27e87dd42c4cb41bb04933ceb635e4a80cb5a4b67b9e957ce197793e690de1e5",
"0x785d76b23353aac2afb4fcf35ad33a132bc92e950856fecf50c2d249d8686153",
"0x824d67f6d266e307fb32fe90539902ccf5a55c6524e5ed63a7f8b99a49429e14",
"0x986f42a3e73de287dfbc4dccf988906cebae00583fc7b443c3651daa832f012f",
"0x950895c0b96b8d09f5b117c8fb1364c2b8e09b667553c2cbb31809222bce8bb9",
"0xb256fe1bff06755087f914ed091d43bcfce837d925f3f12a41d578871d0187f8"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

