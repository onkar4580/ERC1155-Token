const { expect } = require("chai");

describe("RockPaperScissors Test", function() {
    it("Should mint rock", async function() {

    const accounts = await ethers.getSigners();

    const rockPaperScissors = await ethers.getContractFactory("rockPaperScissors");
    const items = await rockPaperScissors.deploy();

    await items.mintRock();
    const balance = await items.balanceOf(accounts[0].address,1)
    expect(10).to.equal(Number(balance.toString()));

    });

    it("Should mint paper", async function() {

        const accounts = await ethers.getSigners();
    
        const rockPaperScissors = await ethers.getContractFactory("rockPaperScissors");
        const items = await rockPaperScissors.deploy();
    
        await items.mintPaper();
        const balance = await items.balanceOf(accounts[0].address,2)
        expect(10).to.equal(Number(balance.toString()));
        
    });

    it("Should mint Scissors", async function() {

        const accounts = await ethers.getSigners();
    
        const rockPaperScissors = await ethers.getContractFactory("rockPaperScissors");
        const items = await rockPaperScissors.deploy();
    
        await items.mintScissors();
        const balance = await items.balanceOf(accounts[0].address,3)
        expect(10).to.equal(Number(balance.toString()));

    });

});
