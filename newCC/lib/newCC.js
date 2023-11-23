'use strict';

const {Contract}=require('fabric-contract-api');
const { newCCContract } = require('..');

class newCC extends Contract{

    //functions will go here
    constructor(){
        super('newCCContract');
        this.TxId=''
    }

    async beforeTransaction(ctx){
        this.TxId=ctx.stub.getTxID();
        console.log('We can do some logging for ${this.TxId} !!')
    }

    async afterTransaction(ctx,result){
        console.log('TX ${this.TxId} done !!')
    }

}
module.exports=newCCContract