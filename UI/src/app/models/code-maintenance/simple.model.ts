import { CodeModel } from "./code.model";

export class SimpleModel extends CodeModel 
{
    public MinAmount:number;
    public AdditionalDescriptionRequired: boolean= false;
    public NoCharge: boolean= false;
    public NoTax: boolean= false;
    public AlwaysTax: boolean= false;
}