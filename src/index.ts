import crypto from 'crypto'; 

interface BlockShape {
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}
class Block implements BlockShape {
    public hash:string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ) {
        this.hash = Block.calcHash(this.prevHash, this.height, this.data);
    }
    static calcHash(prevHash: string, height: number, data: string) {
        const toHash = '${prevHash}${height}${data}';
    }
}