import { BaseModel } from '../base.model';

export class CodeModel extends BaseModel 
{

  //constructor(code: string, description: string) { this.code = code, this.description = description }
    Code: string;
    Description: string;
    FrenchDescription: string;
    Inactive: boolean;
    IsBusy: boolean;
    IsSelfBusy: boolean;
}
