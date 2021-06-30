const lib = require('arklibtest');
const testMyaddress = "0x287A135702555F69BA6eE961f69ee60Fbb87A0e8";
const testMyaddress2 = "0x122008FCb819B484206A30E3DE50eC99c7bf7307";
async function test() {    
    var address = await lib.login("f394fb63726c2f8ac52928a7e4524adea2084ecbe87a5d87f63c2ec54e66fa1e").then(console.log);
    console.log({ address });
    var name = await lib.name();
    console.log({ name});
    var symbol =await lib.symbol();
    console.log({ symbol });
    var balance1 = await lib.balanceOf(testMyaddress);
    console.log({ balance1 });
    var balance2 = await lib.balanceOf(testMyaddress2);
    console.log({ balance2 });
    await lib.transfer(testMyaddress2, 10 * 1E18);
    var balance1 = await lib.balanceOf(testMyaddress);
    console.log({ balance1 });
    var balance2 = await lib.balanceOf(testMyaddress2);
    console.log({ balance2 });
}
test();