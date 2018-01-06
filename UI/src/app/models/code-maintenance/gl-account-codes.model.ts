import { CodeModel } from './code.model';

export class GlAccountCodeModel extends CodeModel 
{

  //constructor(code: string, description: string) { this.code = code, this.description = description }
  Sequence: number;
  GLCode: string;
  RptDescription: string;
  RptFrenchDescription: string;
}
