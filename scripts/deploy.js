const main = async () => {
    const vending_machine = await hre.ethers.getContractFactory('VendingMachine');
    const VendingMachine = await vending_machine.deploy();
    await VendingMachine.deployed();
    console.log('Contract deployed to:', VendingMachine.address);
};

const runMain = async () => {
    try {
        await main()
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();