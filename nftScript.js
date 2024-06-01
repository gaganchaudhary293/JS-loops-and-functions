// create a variable to hold your NFTs
let nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, creator) {
    const nft = {
        name: name,
        description: description,
        creator: creator
    };
    nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    nftCollection.forEach(nft => {
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Creator: " + nft.creator);
        console.log('-----------------------------');
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// call your functions below this line
mintNFT("CryptoPunk", "A unique punk rock NFT", "John Doe");
mintNFT("ArtBlock", "Generative Art NFT", "Jane Smith");
mintNFT("MetaHero", "Superhero-themed NFT", "Alice Johnson");

listNFTs();
console.log("Total Supply: " + getTotalSupply());
