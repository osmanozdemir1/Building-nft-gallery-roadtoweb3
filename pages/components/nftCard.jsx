export const NFTCard = ({nft}) => {

    return (
        <div className="w-1/4 flex flex-col">
            <div className="rounded-md">
                <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway}></img>
            </div>
            <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110">
                <div className=""></div>
                    <h2 className="text-xl text-gray-800">{nft.title}</h2>
                    <p className="text-gray-600">{nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>
                    <p className="text-gray-600">{`${nft.contract.address.substr(0, 5)}...${nft.contract.address.substr(nft.contract.address.length - 4)}`} <button onClick={
                        () => {
                            let addr = nft.contract.address;
                            navigator.clipboard.writeText(addr);
                        }
                    }><i><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg></i></button></p>
                </div>
                <div className="flex-grow mt-2">
                    <p className="text-gray-600">{nft.description?.substr(0, 150)}</p>
                </div>
                <div className="flex justify-center mb-1">
                    <a target={"_blank"} href={`https://etherscan.io/token/${nft.contract.address}`} className="py-2 px-4 bg-blue-500 w-1/2 text-center rounded-m text-white cursor-pointer">View on etherscan</a>
                </div>
            </div>
    )
}