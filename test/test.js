const { expect } = require("chai");
const hre = require("hardhat");

describe("RockPaperScissors Test", function() {

    it("Should mint rock", async function() {

    const accounts = await ethers.getSigners();

    const rockPaperScissors = await ethers.getContractFactory("rockPaperScissors");
    const items = await rockPaperScissors.deploy();
    await items.mintRock();

    const balance = await items.balanceOf(accounts[0].address,1)
    console.log("balance of accounts[0]", Number(balance));

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
    /*
    it("Test for safetransferfrom", async function() {
        const accounts = await ethers.getSigners();
        //const account2 = await ethers.getSigners();

        const rockPaperScissors = await ethers.getContractFactory("rockPaperScissors");
        const items = await rockPaperScissors.deploy();
        await items.mintRock();

        const balance = await items.balanceOf(accounts[0].address,1)
    
        console.log("balance of accounts[0]", Number(balance));

        await items.safeTransferFrom(accounts[0].address, accounts[1].address, 1, 5,"0x")
        expect(items.balanceOf(accounts[1].address,1)).to.equal(5);

        console.log(Number(items.balanceOf(accounts[1].address,1)));
        
    

    }); */

});

describe("For safeTransferFrom", function() {

    it("Test for safetransferfrom", async function() {
        const accounts = await ethers.getSigners();
        //const account2 = await ethers.getSigners();

        const rockPaperScissors = await ethers.getContractFactory("rockPaperScissors");
        const items = await rockPaperScissors.deploy();
        await items.mintRock();

        const balance = await items.balanceOf(accounts[0].address,1)
    
        console.log("balance of accounts[0]", Number(balance));

        await items.safeTransferFrom(accounts[0].address, accounts[1].address, 1, 5,"0x00")
        expect(await items.balanceOf(accounts[1].address,1)).to.equal(5);

        console.log("Balance of accounts[1]",Number( await items.balanceOf(accounts[1].address,1)));
        
    

    }); 
});

describe("For safeBatchTransferFrom", function() {

    it("Test for safeBatchTransferFrom", async function() {
        const accounts = await ethers.getSigners();
        
        const rockPaperScissors = await ethers.getContractFactory("rockPaperScissors");
        const items = await rockPaperScissors.deploy();
        await items.mintRock();
        await items.mintPaper();
        await items.mintScissors();

        let array_id = new Array(1,2,3);
        let array_amount = new Array(5,5,5);

        await items.safeBatchTransferFrom(accounts[0].address,accounts[1].address,[array_id[0],array_id[1],array_id[2]],[array_amount[0],array_amount[1],array_amount[2]],"0x00");

        console.log(await items.balanceOfBatch([accounts[0].address,accounts[1].address],[array_id[0],array_id[2]]));
        
    });

}); 

describe("For setApprovalForAll", function() {

    it("Test for setApprovalAll", async function() {
        const accounts = await ethers.getSigners();
        
        const rockPaperScissors = await ethers.getContractFactory("rockPaperScissors");
        const items = await rockPaperScissors.deploy();
        await items.mintRock();

        await items.setApprovalForAll(accounts[1].address, true) 
        console.log(await items.isApprovedForAll([accounts[0].address,accounts[1].address]));
       

        
    });

}); 
