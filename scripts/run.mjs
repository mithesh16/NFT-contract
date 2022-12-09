

// import fetch from 'node-fetch';



const main = async () => {
    // let uris = [];
    // let names = [];
    // let strength = []
    // let power = []
    // let speed = [];
    
    
    //   const token = 3323216527965309
    //   let url = `https://www.superheroapi.com/api.php/${token}`
    //   for (let i = 1; i <=2; i++) {
    //     await fetch(`${url}/${i}`)
    //       .then(response => response.json())
    //       .then(json => {
    //         names.push(json.name)
    //         uris.push(json.image.url)
    //         strength.push(json.powerstats.strength)
    //         power.push(json.powerstats.power)
    //         speed.push(json.powerstats.speed)
    //       })
    //   }
    //   strength.forEach((ele,index)=>{
    //     if(ele=='null'){
    //     strength[index]='10'
    // }
    // })
    // speed.forEach((ele,index)=>{
    //     if(ele=='null'){
    //     speed[index]='10'
    // }
    // })
    // power.forEach((ele,index)=>{
    //     if(ele=='null'){
    //     power[index]='10'
    // }
    // })
    const nftContractFactory = await hre.ethers.getContractFactory('NFT');
    const nftContract = await nftContractFactory.deploy(
        ["NARUTO","SASUKE","SAKURA"],
    ["https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png/revision/latest/scale-to-width-down/300?cb=20210223094656",
    "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest/scale-to-width-down/300?cb=20170716092103",
    "https://static.wikia.nocookie.net/naruto/images/6/64/Sakura_Part_1.png/revision/latest/scale-to-width-down/300?cb=20170726101444"],
    [90,100,60],
    [200,100,100],
    [200,100,100]
    );
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
   
    // for(let i=0;i<2;i++){
    let txn=await nftContract.mintNFT(1);
     await txn.wait();
    //}
}

const runmain=async () =>{
    try{
        await main();
        process.exit(0);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
};

runmain();
