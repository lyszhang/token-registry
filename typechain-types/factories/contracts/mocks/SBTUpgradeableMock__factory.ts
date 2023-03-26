/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SBTUpgradeableMock,
  SBTUpgradeableMockInterface,
} from "../../../contracts/mocks/SBTUpgradeableMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURIInternal",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "existsInternal",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeMintInternal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeMintWithDataInternal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200296138038062002961833981810160405281019062000037919062000434565b60008060019054906101000a900460ff16159050808015620000695750600160008054906101000a900460ff1660ff16105b80620000a5575062000086306200019c60201b620007431760201c565b158015620000a45750600160008054906101000a900460ff1660ff16145b5b620000e7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000de9062000540565b60405180910390fd5b60016000806101000a81548160ff021916908360ff160217905550801562000125576001600060016101000a81548160ff0219169083151502179055505b620001378383620001bf60201b60201c565b8015620001935760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516200018a9190620005bc565b60405180910390a15b50505062000999565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff1662000211576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000208906200064f565b60405180910390fd5b6200022382826200022760201b60201c565b5050565b600060019054906101000a900460ff1662000279576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000270906200064f565b60405180910390fd5b81606590816200028a9190620008b2565b5080606690816200029c9190620008b2565b505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200030a82620002bf565b810181811067ffffffffffffffff821117156200032c576200032b620002d0565b5b80604052505050565b600062000341620002a1565b90506200034f8282620002ff565b919050565b600067ffffffffffffffff821115620003725762000371620002d0565b5b6200037d82620002bf565b9050602081019050919050565b60005b83811015620003aa5780820151818401526020810190506200038d565b60008484015250505050565b6000620003cd620003c78462000354565b62000335565b905082815260208101848484011115620003ec57620003eb620002ba565b5b620003f98482856200038a565b509392505050565b600082601f830112620004195762000418620002b5565b5b81516200042b848260208601620003b6565b91505092915050565b600080604083850312156200044e576200044d620002ab565b5b600083015167ffffffffffffffff8111156200046f576200046e620002b0565b5b6200047d8582860162000401565b925050602083015167ffffffffffffffff811115620004a157620004a0620002b0565b5b620004af8582860162000401565b9150509250929050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b600062000528602e83620004b9565b91506200053582620004ca565b604082019050919050565b600060208201905081810360008301526200055b8162000519565b9050919050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b6000620005a46200059e620005988462000562565b62000579565b6200056c565b9050919050565b620005b68162000583565b82525050565b6000602082019050620005d36000830184620005ab565b92915050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b600062000637602b83620004b9565b91506200064482620005d9565b604082019050919050565b600060208201905081810360008301526200066a8162000628565b9050919050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620006c457607f821691505b602082108103620006da57620006d96200067c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620007447fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000705565b62000750868362000705565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620007936200078d620007878462000768565b62000579565b62000768565b9050919050565b6000819050919050565b620007af8362000772565b620007c7620007be826200079a565b84845462000712565b825550505050565b600090565b620007de620007cf565b620007eb818484620007a4565b505050565b5b81811015620008135762000807600082620007d4565b600181019050620007f1565b5050565b601f82111562000862576200082c81620006e0565b6200083784620006f5565b8101602085101562000847578190505b6200085f6200085685620006f5565b830182620007f0565b50505b505050565b600082821c905092915050565b6000620008876000198460080262000867565b1980831691505092915050565b6000620008a2838362000874565b9150826002028217905092915050565b620008bd8262000671565b67ffffffffffffffff811115620008d957620008d8620002d0565b5b620008e58254620006ab565b620008f282828562000817565b600060209050601f8311600181146200092a576000841562000915578287015190505b62000921858262000894565b86555062000991565b601f1984166200093a86620006e0565b60005b8281101562000964578489015182556001820191506020850194506020810190506200093d565b8683101562000984578489015162000980601f89168262000874565b8355505b6001600288020188555050505b505050505050565b611fb880620009a96000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80636352211e116100715780636352211e1461018b57806370a08231146101bb57806395d89b41146101eb578063c87b56dd14610209578063e213f10b14610239578063ec94e0ba14610257576100b4565b806301ffc9a7146100b957806306fdde03146100e9578063122b780f1461010757806323b872dd146101375780633fba56c61461015357806342966c681461016f575b600080fd5b6100d360048036038101906100ce9190611323565b610273565b6040516100e0919061136b565b60405180910390f35b6100f1610355565b6040516100fe9190611416565b60405180910390f35b610121600480360381019061011c919061146e565b6103e7565b60405161012e919061136b565b60405180910390f35b610151600480360381019061014c91906114f9565b6103f9565b005b61016d60048036038101906101689190611681565b610469565b005b6101896004803603810190610184919061146e565b610479565b005b6101a560048036038101906101a0919061146e565b610485565b6040516101b291906116ff565b60405180910390f35b6101d560048036038101906101d0919061171a565b610536565b6040516101e29190611756565b60405180910390f35b6101f36105ed565b6040516102009190611416565b60405180910390f35b610223600480360381019061021e919061146e565b61067f565b6040516102309190611416565b60405180910390f35b610241610726565b60405161024e9190611416565b60405180910390f35b610271600480360381019061026c9190611771565b610735565b005b60007f304ad1f2000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061033e57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061034e575061034d82610766565b5b9050919050565b606060658054610364906117e0565b80601f0160208091040260200160405190810160405280929190818152602001828054610390906117e0565b80156103dd5780601f106103b2576101008083540402835291602001916103dd565b820191906000526020600020905b8154815290600101906020018083116103c057829003601f168201915b5050505050905090565b60006103f2826107d0565b9050919050565b61040a61040461083c565b82610844565b610449576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044090611883565b60405180910390fd5b610464838383604051806020016040528060008152506108d3565b505050565b61047483838361092f565b505050565b6104828161098a565b50565b6000806067600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361052d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052490611915565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036105a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059d906119a7565b60405180910390fd5b606860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060606680546105fc906117e0565b80601f0160208091040260200160405190810160405280929190818152602001828054610628906117e0565b80156106755780601f1061064a57610100808354040283529160200191610675565b820191906000526020600020905b81548152906001019060200180831161065857829003601f168201915b5050505050905090565b606061068a826107d0565b6106c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c090611a39565b60405180910390fd5b60006106d3610a9c565b905060008151116106f3576040518060200160405280600081525061071e565b806106fd84610ab3565b60405160200161070e929190611a95565b6040516020818303038152906040525b915050919050565b6060610730610a9c565b905090565b61073f8282610b81565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166067600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b600061084f826107d0565b61088e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088590611b2b565b60405180910390fd5b600061089983610485565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161491505092915050565b6108de848484610b9f565b6108ea84848484610dfa565b610929576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092090611bbd565b60405180910390fd5b50505050565b6109398383610f81565b6109466000848484610dfa565b610985576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097c90611bbd565b60405180910390fd5b505050565b600061099582610485565b90506109a38160008461115a565b6001606860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109f39190611c0c565b925050819055506067600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610a988160008461115f565b5050565b606060405180602001604052806000815250905090565b606060006001610ac284611164565b01905060008167ffffffffffffffff811115610ae157610ae0611556565b5b6040519080825280601f01601f191660200182016040528015610b135781602001600182028036833780820191505090505b509050600082602001820190505b600115610b76578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581610b6a57610b69611c40565b5b04945060008503610b21575b819350505050919050565b610b9b82826040518060200160405280600081525061092f565b5050565b8273ffffffffffffffffffffffffffffffffffffffff16610bbf82610485565b73ffffffffffffffffffffffffffffffffffffffff1614610c15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0c90611ce1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c84576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7b90611d73565b60405180910390fd5b610c8f83838361115a565b6001606860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cdf9190611c0c565b925050819055506001606860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d369190611d93565b92505081905550816067600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610df583838361115f565b505050565b6000610e1b8473ffffffffffffffffffffffffffffffffffffffff16610743565b15610f74578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02610e4461083c565b8786866040518563ffffffff1660e01b8152600401610e669493929190611e1c565b6020604051808303816000875af1925050508015610ea257506040513d601f19601f82011682018060405250810190610e9f9190611e7d565b60015b610f24573d8060008114610ed2576040519150601f19603f3d011682016040523d82523d6000602084013e610ed7565b606091505b506000815103610f1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1390611bbd565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050610f79565b600190505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ff0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe790611ef6565b60405180910390fd5b610ff9816107d0565b15611039576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103090611f62565b60405180910390fd5b6110456000838361115a565b6001606860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110959190611d93565b92505081905550816067600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46111566000838361115f565b5050565b505050565b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106111c2577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816111b8576111b7611c40565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106111ff576d04ee2d6d415b85acef810000000083816111f5576111f4611c40565b5b0492506020810190505b662386f26fc10000831061122e57662386f26fc10000838161122457611223611c40565b5b0492506010810190505b6305f5e1008310611257576305f5e100838161124d5761124c611c40565b5b0492506008810190505b612710831061127c57612710838161127257611271611c40565b5b0492506004810190505b6064831061129f576064838161129557611294611c40565b5b0492506002810190505b600a83106112ae576001810190505b80915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611300816112cb565b811461130b57600080fd5b50565b60008135905061131d816112f7565b92915050565b600060208284031215611339576113386112c1565b5b60006113478482850161130e565b91505092915050565b60008115159050919050565b61136581611350565b82525050565b6000602082019050611380600083018461135c565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156113c05780820151818401526020810190506113a5565b60008484015250505050565b6000601f19601f8301169050919050565b60006113e882611386565b6113f28185611391565b93506114028185602086016113a2565b61140b816113cc565b840191505092915050565b6000602082019050818103600083015261143081846113dd565b905092915050565b6000819050919050565b61144b81611438565b811461145657600080fd5b50565b60008135905061146881611442565b92915050565b600060208284031215611484576114836112c1565b5b600061149284828501611459565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006114c68261149b565b9050919050565b6114d6816114bb565b81146114e157600080fd5b50565b6000813590506114f3816114cd565b92915050565b600080600060608486031215611512576115116112c1565b5b6000611520868287016114e4565b9350506020611531868287016114e4565b925050604061154286828701611459565b9150509250925092565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61158e826113cc565b810181811067ffffffffffffffff821117156115ad576115ac611556565b5b80604052505050565b60006115c06112b7565b90506115cc8282611585565b919050565b600067ffffffffffffffff8211156115ec576115eb611556565b5b6115f5826113cc565b9050602081019050919050565b82818337600083830152505050565b600061162461161f846115d1565b6115b6565b9050828152602081018484840111156116405761163f611551565b5b61164b848285611602565b509392505050565b600082601f8301126116685761166761154c565b5b8135611678848260208601611611565b91505092915050565b60008060006060848603121561169a576116996112c1565b5b60006116a8868287016114e4565b93505060206116b986828701611459565b925050604084013567ffffffffffffffff8111156116da576116d96112c6565b5b6116e686828701611653565b9150509250925092565b6116f9816114bb565b82525050565b600060208201905061171460008301846116f0565b92915050565b6000602082840312156117305761172f6112c1565b5b600061173e848285016114e4565b91505092915050565b61175081611438565b82525050565b600060208201905061176b6000830184611747565b92915050565b60008060408385031215611788576117876112c1565b5b6000611796858286016114e4565b92505060206117a785828601611459565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806117f857607f821691505b60208210810361180b5761180a6117b1565b5b50919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b600061186d603183611391565b915061187882611811565b604082019050919050565b6000602082019050818103600083015261189c81611860565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b60006118ff602983611391565b915061190a826118a3565b604082019050919050565b6000602082019050818103600083015261192e816118f2565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b6000611991602a83611391565b915061199c82611935565b604082019050919050565b600060208201905081810360008301526119c081611984565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000611a23602f83611391565b9150611a2e826119c7565b604082019050919050565b60006020820190508181036000830152611a5281611a16565b9050919050565b600081905092915050565b6000611a6f82611386565b611a798185611a59565b9350611a898185602086016113a2565b80840191505092915050565b6000611aa18285611a64565b9150611aad8284611a64565b91508190509392505050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000611b15602c83611391565b9150611b2082611ab9565b604082019050919050565b60006020820190508181036000830152611b4481611b08565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000611ba7603283611391565b9150611bb282611b4b565b604082019050919050565b60006020820190508181036000830152611bd681611b9a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611c1782611438565b9150611c2283611438565b9250828203905081811115611c3a57611c39611bdd565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000611ccb602583611391565b9150611cd682611c6f565b604082019050919050565b60006020820190508181036000830152611cfa81611cbe565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611d5d602483611391565b9150611d6882611d01565b604082019050919050565b60006020820190508181036000830152611d8c81611d50565b9050919050565b6000611d9e82611438565b9150611da983611438565b9250828201905080821115611dc157611dc0611bdd565b5b92915050565b600081519050919050565b600082825260208201905092915050565b6000611dee82611dc7565b611df88185611dd2565b9350611e088185602086016113a2565b611e11816113cc565b840191505092915050565b6000608082019050611e3160008301876116f0565b611e3e60208301866116f0565b611e4b6040830185611747565b8181036060830152611e5d8184611de3565b905095945050505050565b600081519050611e77816112f7565b92915050565b600060208284031215611e9357611e926112c1565b5b6000611ea184828501611e68565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000611ee0602083611391565b9150611eeb82611eaa565b602082019050919050565b60006020820190508181036000830152611f0f81611ed3565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000611f4c601c83611391565b9150611f5782611f16565b602082019050919050565b60006020820190508181036000830152611f7b81611f3f565b905091905056fea264697066735822122084cb301235434ba164a4e1f8cf01366c2064926a3a57158408a915ee522ade6264736f6c63430008110033";

type SBTUpgradeableMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SBTUpgradeableMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SBTUpgradeableMock__factory extends ContractFactory {
  constructor(...args: SBTUpgradeableMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SBTUpgradeableMock> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<SBTUpgradeableMock>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): SBTUpgradeableMock {
    return super.attach(address) as SBTUpgradeableMock;
  }
  override connect(signer: Signer): SBTUpgradeableMock__factory {
    return super.connect(signer) as SBTUpgradeableMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SBTUpgradeableMockInterface {
    return new utils.Interface(_abi) as SBTUpgradeableMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SBTUpgradeableMock {
    return new Contract(address, _abi, signerOrProvider) as SBTUpgradeableMock;
  }
}
