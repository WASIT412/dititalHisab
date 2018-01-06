import { SimpleModel } from "./simple.model";

export class ExpenseCodeModel extends SimpleModel {
    public GLAccountCode: string = '';
    public FlatFee: boolean = false;
    public BlendedFee: boolean = false;
    public DefaultUnitRate: number;
    public IsMileage: boolean = false;
    public IsReimbursable: boolean = false;
    public DeductibleUnits: any;
    public MinCharacters: any;
    public CreatedBy: any;
    public CreatedByNetworkID: any;
    public LastChangedBy: string;
    public LastChangedByNetworkID: string = '';
    public UtcCreatedDate: any;
    public UtcLastChangedDate: string = '';
    public ApprovalThresholdAmount: any;
    public UserThresholds: Threshold[] = [];
    public InActive: boolean;
    public constructor(init?: Partial<ExpenseCodeModel>) {
        super();
        Object.assign(this, init);
    }
}

export class Threshold {
    CreatedBy: string;
    CreatedByNetworkID: string;
    CreatedDate: string;
    ExpenseCode: string;
    ID: number;
    LastChangedBy: string;
    LastChangedByNetworkID: string;
    LastChangedDate: string;
    ThresholdAmount: string;
    UTCCreatedDate: string;
    UTCLastChangedDate: string;
    UserID: string;
}

