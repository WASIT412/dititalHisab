export class Claim {
    ResourceId: number;
    Id: number;
    constructor(public client: string, public branch: string, public contact: string ) {
        
    }
}