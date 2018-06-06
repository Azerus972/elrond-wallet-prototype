import { UUID } from 'angular2-uuid';

export class Node {
  selectedNodeType: any;
  selectedNodeAction: any;
  selectedDistributon: any;
  selectedPKSource: any;
  instanceName: string;
  instanceIp: string;
  instancePort: any;
  instanceGenesisCoins: any;
  instanceRestorePath: string;
  instanceBlockchainPath: string;
  instanceNodeDistribution: any;
  privateKey: string;
  publicKey: string;
  peerIp: string;
  peerPort: string;
  peerTable: any[];
  step: number;

  public static getDefault() {
    const node = new Node();

    node.selectedNodeType = null;
    node.selectedNodeAction = null;
    node.selectedDistributon = null;
    node.selectedPKSource = 2;
    node.instanceName = `Elrond Instance - test - ${UUID.UUID()}`;
    node.instanceIp = '127.0.0.1';
    node.instancePort = '31201';
    node.instanceGenesisCoins = 21000000;
    node.instanceRestorePath = '';
    node.instanceBlockchainPath = '';
    node.instanceNodeDistribution = 1024;
    node.privateKey = '';
    node.publicKey = '';
    node.peerIp = '';
    node.peerPort = '';
    node.peerTable = [];
    node.step = 0;
    return node;
  }

}