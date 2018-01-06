import { SimpleModel } from "../code-maintenance/simple.model";

export class TimeCodeModel extends SimpleModel {
   
    
    
    IncludeInList: string;
    ServiceItemCode: string;
    Unbillable: boolean;
    DisallowBackDate: boolean;
    Add1DescReqd: boolean;
    ServiceFee: boolean;
    EnableEmail: boolean;

    UserThresholds:[{
        TemplateCode: string,
        LossDescriptionCode: string,
        AccountID: string,
        Organization: string,

    }]

}

export let timeCode :TimeCodeModel=
{
    Code: 'A1',
    Description: 'A1',
    FrenchDescription: 'A1',
    Inactive: true,
    IsBusy: false,
    IsSelfBusy: false,
    IncludeInList: 'A1',
    ServiceItemCode: 'A1',
    Unbillable: false,
    DisallowBackDate: false,
    Add1DescReqd: false,
    ServiceFee: false,
    EnableEmail: false,
    CreatedDate: new Date(),
    LastChangedDate: new Date(),
    MinAmount:123,
    AdditionalDescriptionRequired:false,
    NoCharge:false,
    NoTax:false,
    AlwaysTax:false,
    UserThresholds: [
      {
        TemplateCode: 'Y1',
        LossDescriptionCode: 'Q1',
        AccountID: '123',
        Organization: 'QWE'
      },
      {
        TemplateCode: 'Y2',
        LossDescriptionCode: 'QW',
        AccountID: '234',
        Organization: 'EQWE'
      }
    ]


}