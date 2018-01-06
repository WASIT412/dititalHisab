import {
  FormType
} from './../../helpers/lookup';

export const NAV = {
  paths: {
    'dashboard': {
      parent: '',
      navTitle: 'Dashboard',
      title: 'Dashboard',
      breadcrumb: 'Dashboard',
      iconName: 'fa fa-dashboard',
      api: '',
      roles: ''
    },
    'cms-assistant': {
      parent: 'dashboard',
      navTitle: 'CMS Assistant',
      title: 'CMS Assistant',
      breadcrumb: 'CMS Assistant',
      iconName: 'fa fa-calendar',
      api: '',
      roles: ''
    },
    'crawford-task-list': {
      parent: 'dashboard',
      navTitle: 'Crawford Task List',
      title: 'Crawford Task List',
      breadcrumb: 'Crawford Task List',
      iconName: 'fa fa-list',
      api: '',
      roles: ''
    },
    'diary': {
      parent: 'dashboard',
      navTitle: 'Diary',
      title: 'Diary',
      breadcrumb: 'Diary',
      iconName: 'fa fa-calendar-check-o',
      api: '',
      roles: ''
    },
    'dockets-by-day': {
      parent: 'dashboard',
      navTitle: 'Dockets by Day',
      title: 'Dockets by Day',
      breadcrumb: '',
      iconName: 'fa fa-calendar-check-o',
      api: '',
      roles: ''
    },
    'note-search': {
      parent: 'dashboard',
      navTitle: 'Note Search',
      title: 'Note Search',
      breadcrumb: 'Note Search',
      iconName: 'fa fa-sticky-note-o',
      api: '',
      roles: ''
    },

    'occurrences': {
      parent: '',
      navTitle: 'Occurrences',
      title: 'Occurrences',
      breadcrumb: 'Occurrences',
      iconName: 'fa fa-exclamation-triangle',
      api: '',
      roles: ''
    },
    'incidents': {
      parent: 'occurrences',
      navTitle: 'Incidents',
      title: 'Incidents',
      breadcrumb: 'Incidents',
      iconName: 'fa fa-exclamation-circle',
      api: '',
      roles: ''
    },
    'claims': {
      parent: 'occurrences',
      navTitle: 'Claims',
      title: 'Claims',
      breadcrumb: 'Claims',
      iconName: 'fa fa-folder-open',
      api: '',
      roles: ''
    },

    'administration': {
      parent: '',
      navTitle: 'Administration',
      title: 'Administration',
      breadcrumb: 'Administration',
      iconName: 'fa fa-wrench',
      api: '',
      roles: ''
    },
    'accounts': {
      parent: 'administration',
      navTitle: 'Accounts',
      title: 'Accounts',
      breadcrumb: 'Accounts',
      iconName: 'fa fa-users',
      api: '',
      roles: ''
    },
    'bank-accounts': {
      parent: 'administration',
      navTitle: 'Bank accounts',
      title: 'Bank accounts',
      breadcrumb: 'Bank accounts',
      iconName: 'fa fa-bank',
      api: '',
      roles: ''
    },
    'code-maintenance': {
      parent: 'administration',
      navTitle: 'CODE MAINTENANCE',
      title: 'CODE MAINTENANCE',
      breadcrumb: 'CODE MAINTENANCE',
      iconName: 'fa fa-wrench',
      api: '',
      roles: '',
      type: FormType.None
    },
    'ab-secondary-injury-codes': {
      parent: 'code-maintenance',
      navTitle: 'AB Secondary Injury Codes',
      title: 'AB Secondary Injury Codes',
      breadcrumb: 'AB Secondary Injury Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'account-policy-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Account Policy Type Codes',
      title: 'Account Policy Type Codes',
      breadcrumb: 'Account Policy Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'acknowledgement-method-codes': {
      parent: 'code-maintenance',
      navTitle: 'Acknowledgement Method Codes',
      title: 'Acknowledgement Method Codes',
      breadcrumb: 'Acknowledgement Method Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'acknowledgement-to-codes': {
      parent: 'code-maintenance',
      navTitle: 'Acknowledgement To Codes',
      title: 'Acknowledgement To Codes',
      breadcrumb: 'Acknowledgement To Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'address-codes': {
      parent: 'code-maintenance',
      navTitle: 'Address Codes',
      title: 'Address Codes',
      breadcrumb: 'Address Codes',
      iconName: '',
      api: 'addresscodes',
      roles: '',
      type: FormType.List,
      child: {
        'add': {
          title: 'New Address Code',
          breadcrumb: 'New Address Code',
          api: 'addresscodes',
          roles: '',
          type: FormType.Add
        },
        'edit': {
          title: 'Edit',
          breadcrumb: 'Edit',
          api: 'addresscodes',
          roles: '',
          type: FormType.Edit

        },
        'details': {
          title: ':id',
          breadcrumb: ':id',
          api: 'addresscodes',
          roles: '',
          type: FormType.Details

        }
      }
    },
    'adjuster-rate-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Adjuster Rate Type Codes',
      title: 'Adjuster Rate Type Codes',
      breadcrumb: 'Adjuster Rate Type Codes',
      iconName: '',
      api: '',
      roles: '',
      type: FormType.None
    },
    'appeals-outcome-codes': {
      parent: 'code-maintenance',
      navTitle: 'Appeals Outcome Codes',
      title: 'Appeals Outcome Codes',
      breadcrumb: 'Appeals Outcome Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'application-xs': {
      parent: 'code-maintenance',
      navTitle: 'Application Xs',
      title: 'Application Xs',
      breadcrumb: 'Application Xs',
      iconName: '',
      api: '',
      roles: ''
    },
    'assignment-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Assignment Type Codes',
      title: 'Assignment Type Codes',
      breadcrumb: 'Assignment Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'attribute-causes': {
      parent: 'code-maintenance',
      navTitle: 'Attribute Causes',
      title: 'Attribute Causes',
      breadcrumb: 'Attribute Causes',
      iconName: '',
      api: '',
      roles: ''
    },
    'attribute-cause-codes': {
      parent: 'code-maintenance',
      navTitle: 'Attribute Cause Codes',
      title: 'Attribute Cause Codes',
      breadcrumb: 'Attribute Cause Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'bank-account-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Bank Account Type Codes',
      title: 'Bank Account Type Codes',
      breadcrumb: 'Bank Account Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'beneficiary-relationship-codes': {
      parent: 'code-maintenance',
      navTitle: 'Beneficiary Relationship Codes',
      title: 'Beneficiary Relationship Codes',
      breadcrumb: 'Beneficiary Relationship Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'beneficiary-representative-codes': {
      parent: 'code-maintenance',
      navTitle: 'Beneficiary Representative Codes',
      title: 'Beneficiary Representative Codes',
      breadcrumb: 'Beneficiary Representative Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'billing-handling-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Billing Handling Type Codes',
      title: 'Billing Handling Type Codes',
      breadcrumb: 'Billing Handling Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'body-part-codes': {
      parent: 'code-maintenance',
      navTitle: 'Body Part Codes',
      title: 'Body Part Codes',
      breadcrumb: 'Body Part Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'body-side-codes': {
      parent: 'code-maintenance',
      navTitle: 'Body Side Codes',
      title: 'Body Side Codes',
      breadcrumb: 'Body Side Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'bordereau-field-codes': {
      parent: 'code-maintenance',
      navTitle: 'Bordereau Field Codes',
      title: 'Bordereau Field Codes',
      breadcrumb: 'Bordereau Field Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'branch-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Branch Type Codes',
      title: 'Branch Type Codes',
      breadcrumb: 'Branch Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'case-categories': {
      parent: 'code-maintenance',
      navTitle: 'Case Categories',
      title: 'Case Categories',
      breadcrumb: 'Case Categories',
      iconName: '',
      api: '',
      roles: ''
    },
    'catastrophic-loss-codes': {
      parent: 'code-maintenance',
      navTitle: 'Catastrophic Loss Codes',
      title: 'Catastrophic Loss Codes',
      breadcrumb: 'Catastrophic Loss Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'cause-for-monthly-benefit-codes': {
      parent: 'code-maintenance',
      navTitle: 'Cause For Monthly Benefit Codes',
      title: 'Cause For Monthly Benefit Codes',
      breadcrumb: 'Cause For Monthly Benefit Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'cause-of-injury-codes': {
      parent: 'code-maintenance',
      navTitle: 'Cause Of Injury Codes',
      title: 'Cause Of Injury Codes',
      breadcrumb: 'Cause Of Injury Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'cause-of-loss-codes': {
      parent: 'code-maintenance',
      navTitle: 'Cause Of Loss Codes',
      title: 'Cause Of Loss Codes',
      breadcrumb: 'Cause Of Loss Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'change-log-change-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Change Log Change Type Codes',
      title: 'Change Log Change Type Codes',
      breadcrumb: 'Change Log Change Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'change-log-status-codes': {
      parent: 'code-maintenance',
      navTitle: 'Change Log Status Codes',
      title: 'Change Log Status Codes',
      breadcrumb: 'Change Log Status Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'change-log-task-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Change Log Task Type Codes',
      title: 'Change Log Task Type Codes',
      breadcrumb: 'Change Log Task Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'check-digit-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Check Digit Type Codes',
      title: 'Check Digit Type Codes',
      breadcrumb: 'Check Digit Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'chq-req-payment-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Chq Req Payment Type Codes',
      title: 'Chq Req Payment Type Codes',
      breadcrumb: 'Chq Req Payment Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'claimant-involvement-codes': {
      parent: 'code-maintenance',
      navTitle: 'Claimant Involvement Codes',
      title: 'Claimant Involvement Codes',
      breadcrumb: 'Claimant Involvement Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'claimant-status-codes': {
      parent: 'code-maintenance',
      navTitle: 'Claimant Status Codes',
      title: 'Claimant Status Codes',
      breadcrumb: 'Claimant Status Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'claimanttypecodes': {
      parent: 'code-maintenance',
      navTitle: 'Claimant Type Codes',
      title: 'Claimant Type Codes',
      breadcrumb: 'Claimant Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'claim-assignment-status-codes': {
      parent: 'code-maintenance',
      navTitle: 'Claim Assignment Status Codes',
      title: 'Claim Assignment Status Codes',
      breadcrumb: 'Claim Assignment Status Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'claim-reports-to-codes': {
      parent: 'code-maintenance',
      navTitle: 'Claim Reports To Codes',
      title: 'Claim Reports To Codes',
      breadcrumb: 'Claim Reports To Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'claim-status-codes': {
      parent: 'code-maintenance',
      navTitle: 'Claim Status Codes',
      title: 'Claim Status Codes',
      breadcrumb: 'Claim Status Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'claim-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Claim Type Codes',
      title: 'Claim Type Codes',
      breadcrumb: 'Claim Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'claim-type-key-codes': {
      parent: 'code-maintenance',
      navTitle: 'Claim Type Key Codes',
      title: 'Claim Type Key Codes',
      breadcrumb: 'Claim Type Key Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'compensation-level-codes': {
      parent: 'code-maintenance',
      navTitle: 'Compensation Level Codes',
      title: 'Compensation Level Codes',
      breadcrumb: 'Compensation Level Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'compensation-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Compensation Type Codes',
      title: 'Compensation Type Codes',
      breadcrumb: 'Compensation Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'complaint-action-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Complaint Action Type Codes',
      title: 'Complaint Action Type Codes',
      breadcrumb: 'Complaint Action Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'complaint-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Complaint Type Codes',
      title: 'Complaint Type Codes',
      breadcrumb: 'Complaint Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'cost-transfer-recd-codes': {
      parent: 'code-maintenance',
      navTitle: 'Cost Transfer Recd Codes',
      title: 'Cost Transfer Recd Codes',
      breadcrumb: 'Cost Transfer Recd Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'countries': {
      parent: 'code-maintenance',
      navTitle: 'Countries',
      title: 'Countries',
      breadcrumb: 'Countries',
      iconName: '',
      api: '',
      roles: ''
    },
    'country-codes': {
      parent: 'code-maintenance',
      navTitle: 'Country Codes',
      title: 'Country Codes',
      breadcrumb: 'Country Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'coverage-codes': {
      parent: 'code-maintenance',
      navTitle: 'Coverage Codes',
      title: 'Coverage Codes',
      breadcrumb: 'Coverage Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'coverage-denial-method-codes': {
      parent: 'code-maintenance',
      navTitle: 'Coverage Denial Method Codes',
      title: 'Coverage Denial Method Codes',
      breadcrumb: 'Coverage Denial Method Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'coverage-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Coverage Type Codes',
      title: 'Coverage Type Codes',
      breadcrumb: 'Coverage Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'cpp-status-codes': {
      parent: 'code-maintenance',
      navTitle: 'CPP Status Codes',
      title: 'CPP Status Codes',
      breadcrumb: 'CPP Status Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'crit-cnjuryfatality-codes': {
      parent: 'code-maintenance',
      navTitle: 'Crit Injury Fatality Codes',
      title: 'Crit Injury Fatality Codes',
      breadcrumb: 'Crit Injury Fatality Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'damaged-object-codes': {
      parent: 'code-maintenance',
      navTitle: 'Damaged Object Codes',
      title: 'Damaged Object Codes',
      breadcrumb: 'Damaged Object Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'data-src-ref-num-codes': {
      parent: 'code-maintenance',
      navTitle: 'Data Src Ref Num Codes',
      title: 'Data Src Ref Num Codes',
      breadcrumb: 'Data Src Ref Num Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'date-frequency-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Date Frequency Type Codes',
      title: 'Date Frequency Type Codes',
      breadcrumb: 'Date Frequency Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'ded-collection-method-codes': {
      parent: 'code-maintenance',
      navTitle: 'Ded Collection Method Codes',
      title: 'Ded Collection Method Codes',
      breadcrumb: 'Ded Collection Method Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'deductible-resolution-codes': {
      parent: 'code-maintenance',
      navTitle: 'Deductible Resolution Codes',
      title: 'Deductible Resolution Codes',
      breadcrumb: 'Deductible Resolution Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'defense-counsel-appointment-method-codes': {
      parent: 'code-maintenance',
      navTitle: 'Defense Counsel Appointment Method Codes',
      title: 'Defense Counsel Appointment Method Codes',
      breadcrumb: 'Defense Counsel Appointment Method Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'degree-of-sickness-codes': {
      parent: 'code-maintenance',
      navTitle: 'Degree Of Sickness Codes',
      title: 'Degree Of Sickness Codes',
      breadcrumb: 'Degree Of Sickness Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'diary-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Diary Type Codes',
      title: 'Diary Type Codes',
      breadcrumb: 'Diary Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'disability-codes': {
      parent: 'code-maintenance',
      navTitle: 'Disability Codes',
      title: 'Disability Codes',
      breadcrumb: 'Disability Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'document-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Document Type Codes',
      title: 'Document Type Codes',
      breadcrumb: 'Document Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'driver-codes': {
      parent: 'code-maintenance',
      navTitle: 'Driver Codes',
      title: 'Driver Codes',
      breadcrumb: 'Driver Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'elimination-period-codes': {
      parent: 'code-maintenance',
      navTitle: 'Elimination Period Codes',
      title: 'Elimination Period Codes',
      breadcrumb: 'Elimination Period Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'employment-status-codes': {
      parent: 'code-maintenance',
      navTitle: 'Employment Status Codes',
      title: 'Employment Status Codes',
      breadcrumb: 'Employment Status Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'entitlement-decision-codes': {
      parent: 'code-maintenance',
      navTitle: 'Entitlement Decision Codes',
      title: 'Entitlement Decision Codes',
      breadcrumb: 'Entitlement Decision Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'exchange-rates': {
      parent: 'code-maintenance',
      navTitle: 'Exchange Rates',
      title: 'Exchange Rates',
      breadcrumb: 'Exchange Rates',
      iconName: '',
      api: '',
      roles: ''
    },
    'expense-codes': {
      parent: 'code-maintenance',
      navTitle: 'Expense Codes',
      title: 'Expense Codes',
      breadcrumb: 'Expense Codes',
      iconName: '',
      api: 'expensecodes',
      roles: '',
      type: FormType.List,
      child: {
        'add': {
          title: 'New Expense Code',
          breadcrumb: 'New Expense Code',
          api: 'expensecodes',
          roles: '',
          type: FormType.Add
        },
        'edit': {
          title: 'Edit',
          breadcrumb: 'Edit',
          api: 'expensecodes',
          roles: '',
          type: FormType.Edit

        },
        'details': {
          title: ':id',
          breadcrumb: ':id',
          api: 'expensecodes',
          roles: '',
          type: FormType.Details

        }
      }
    },
    'external-service-codes': {
      parent: 'code-maintenance',
      navTitle: 'External Service Codes',
      title: 'External Service Codes',
      breadcrumb: 'External Service Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'features': {
      parent: 'code-maintenance',
      navTitle: 'Features',
      title: 'Features',
      breadcrumb: 'Features',
      iconName: '',
      api: '',
      roles: ''
    },
    'fuel-surcharges': {
      parent: 'code-maintenance',
      navTitle: 'Fuel Surcharges',
      title: 'Fuel Surcharges',
      breadcrumb: 'Fuel Surcharges',
      iconName: '',
      api: '',
      roles: ''
    },
    'fund-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Fund Type Codes',
      title: 'Fund Type Codes',
      breadcrumb: 'Fund Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'gl-account-codes': {
      parent: 'code-maintenance',
      navTitle: 'GL Account Codes',
      title: 'GL Account Codes',
      breadcrumb: 'GL Account Codes',
      iconName: '',
      api: 'glAccountcodes',
      roles: '',
      type: FormType.List,
      child: {
        'add': {
          title: 'New GLAccount Code',
          breadcrumb: 'New GLAccount Code',
          api: 'glAccountcodes',
          roles: '',
          type: FormType.Add
        },
        'edit': {
          title: 'Edit',
          breadcrumb: 'Edit',
          api: 'glAccountcodes',
          roles: '',
          type: FormType.Edit

        },
        'details': {
          title: ':id',
          breadcrumb: ':id',
          api: 'glAccountcodes',
          roles: '',
          type: FormType.Details

        }
      }
    },
    'glld-peril-loss-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'GLLD Peril Loss Type Codes',
      title: 'GLLD Peril Loss Type Codes',
      breadcrumb: 'GLLD Peril Loss Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'icd9-diagnosis-codes': {
      parent: 'code-maintenance',
      navTitle: 'ICD9 Diagnosis Codes',
      title: 'ICD9 Diagnosis Codes',
      breadcrumb: 'ICD9 Diagnosis Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'icd9-external-cause-of-injury-codes': {
      parent: 'code-maintenance',
      navTitle: 'ICD9 External Cause Of Injury Codes',
      title: 'ICD9 External Cause Of Injury Codes',
      breadcrumb: 'ICD9 External Cause Of Injury Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'identifier-codes': {
      parent: 'code-maintenance',
      navTitle: 'Identifier Codes',
      title: 'Identifier Codes',
      breadcrumb: 'Identifier Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'industry-sector-odes': {
      parent: 'code-maintenance',
      navTitle: 'Industry Sector Codes',
      title: 'Industry Sector Codes',
      breadcrumb: 'Industry Sector Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'industry-sub-sector-codes': {
      parent: 'code-maintenance',
      navTitle: 'Industry Sub Sector Codes',
      title: 'Industry Sub Sector Codes',
      breadcrumb: 'Industry Sub Sector Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'injury-type-codes': {
      parent: 'code-maintenance',
      navTitle: 'Injury Type Codes',
      title: 'Injury Type Codes',
      breadcrumb: 'Injury Type Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'insight-compliance-levels': {
      parent: 'code-maintenance',
      navTitle: 'Insight Compliance Levels',
      title: 'Insight Compliance Levels',
      breadcrumb: 'Insight Compliance Levels',
      iconName: '',
      api: '',
      roles: ''
    },
    'inv-credit-codes': {
      parent: 'code-maintenance',
      navTitle: 'Inv Credit Codes',
      title: 'Inv Credit Codes',
      breadcrumb: 'Inv Credit Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'invoice-adjustment-codes': {
      parent: 'code-maintenance',
      navTitle: 'Invoice Adjustment Codes',
      title: 'Invoice Adjustment Codes',
      breadcrumb: 'Invoice Adjustment Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'invoicing-method-codes': {
      parent: 'code-maintenance',
      navTitle: 'Invoicing Method Codes',
      title: 'Invoicing Method Codes',
      breadcrumb: 'Invoicing Method Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'invoicing-to-codes': {
      parent: 'code-maintenance',
      navTitle: 'Invoicing To Codes',
      title: 'Invoicing To Codes',
      breadcrumb: 'Invoicing To Codes',
      iconName: '',
      api: '',
      roles: ''
    },
    'companies': {
      parent: 'administration',
      navTitle: 'Companies',
      title: 'Companies',
      breadcrumb: 'Companies',
      iconName: 'fa fa-building-o',
      api: '',
      roles: ''
    },
    'crowford-fee-schedule': {
      parent: 'administration',
      navTitle: 'Crowford Fee Schedule',
      title: 'Crowford Fee Schedule',
      breadcrumb: 'Crowford Fee Schedule',
      iconName: 'fa fa-dollar',
      api: '',
      roles: ''
    },
    'organizations': {
      parent: 'administration',
      navTitle: 'Organizations',
      title: 'Organizations',
      breadcrumb: 'Organizations',
      iconName: 'fa fa-building',
      api: '',
      roles: ''
    },
    'partnerships': {
      parent: 'administration',
      navTitle: 'Partnerships',
      title: 'Partnerships',
      breadcrumb: 'Partnerships',
      iconName: 'fa fa-handshake-o',
      api: '',
      roles: ''
    },
    'storages': {
      parent: 'administration',
      navTitle: 'Storages',
      title: 'Storages',
      breadcrumb: 'Storages',
      iconName: 'fa fa-database',
      api: '',
      roles: ''
    },
    'trust-accounts': {
      parent: 'administration',
      navTitle: 'Trust Accounts',
      title: 'Trust Accounts',
      breadcrumb: 'Trust Accounts',
      iconName: 'fa fa-calculator',
      api: '',
      roles: ''
    },
    'vendors': {
      parent: 'administration',
      navTitle: 'Vendors',
      title: 'Vendors',
      breadcrumb: 'Vendors',
      iconName: 'fa fa-shopping-cart',
      api: '',
      roles: ''
    },
    'users': {
      parent: 'administration',
      navTitle: 'Users',
      title: 'Users',
      breadcrumb: 'Users',
      iconName: 'fa fa-user',
      api: '',
      roles: ''
    },
    'xpert-management': {
      parent: 'administration',
      navTitle: 'Xpert Management',
      title: 'Xpert Management',
      breadcrumb: 'Xpert Management',
      iconName: 'fa fa-external-link',
      api: '',
      roles: ''
    },

    'reports': {
      parent: '',
      navTitle: 'Reports',
      title: 'Reports',
      breadcrumb: 'Reports',
      iconName: 'fa fa-file-text',
      api: '',
      roles: ''
    },
    'standard-reports': {
      parent: 'reports',
      navTitle: 'Standard Reports',
      title: 'Standard Reports',
      breadcrumb: 'Standard Reports',
      iconName: 'fa fa-file-text-o',
      api: '',
      roles: ''
    },
    'my-reports': {
      parent: 'reports',
      navTitle: 'My Reports',
      title: 'My Reports',
      breadcrumb: 'My Reports',
      iconName: 'fa fa-file-text-o',
      api: '',
      roles: ''
    },
    'scheduled-reports': {
      parent: 'reports',
      navTitle: 'Scheduled Reports',
      title: 'Scheduled Reports',
      breadcrumb: 'Scheduled Reports',
      iconName: 'fa fa-file-text-o',
      api: '',
      roles: ''
    },
    'non-claim-reports': {
      parent: 'reports',
      navTitle: 'Non-Claim Reports',
      title: 'Non-Claim Reports',
      breadcrumb: 'Non-Claim Reports',
      iconName: 'fa fa-file-text-o',
      api: '',
      roles: ''
    },

    'finance': {
      parent: '',
      navTitle: 'Finance',
      title: 'Finance',
      breadcrumb: 'Finance',
      iconName: 'fa fa-usd',
      api: '',
      roles: ''
    },
    'payments': {
      parent: 'finance',
      navTitle: 'Payments',
      title: 'Payments',
      breadcrumb: 'Payments',
      iconName: '',
      api: '',
      roles: ''
    },
    'finance-payments': {
      parent: 'payments',
      navTitle: 'Payments',
      title: 'Payments',
      breadcrumb: 'Payments',
      iconName: '',
      api: '',
      roles: ''
    },
    'payment-requests': {
      parent: 'payments',
      navTitle: 'Payment Requests',
      title: 'Payment Requests',
      breadcrumb: 'Payment Requests',
      iconName: '',
      api: '',
      roles: ''
    },
    'recovery-requests': {
      parent: 'payments',
      navTitle: 'Recovery Requests',
      title: 'Recovery Requests',
      breadcrumb: 'Recovery Requests',
      iconName: '',
      api: '',
      roles: ''
    },
    'trust-fee-payments': {
      parent: 'payments',
      navTitle: 'Trust Fee Payments',
      title: 'Trust Fee Payments',
      breadcrumb: 'Trust Fee Payments',
      iconName: '',
      api: '',
      roles: ''
    },
    'trust-replenishments': {
      parent: 'payments',
      navTitle: 'Trust Replenishments',
      title: 'Trust Replenishments',
      breadcrumb: 'Trust Replenishments',
      iconName: '',
      api: '',
      roles: ''
    },
    'requests': {
      parent: 'trust-replenishments',
      navTitle: 'Requests',
      title: 'Requests',
      breadcrumb: 'Requests',
      iconName: '',
      api: '',
      roles: ''
    },
    'invoices': {
      parent: 'trust-replenishments',
      navTitle: 'Invoices',
      title: 'Invoices',
      breadcrumb: 'Invoices',
      iconName: '',
      api: '',
      roles: ''
    },
    'invoices-payments': {
      parent: 'trust-replenishments',
      navTitle: 'Invoices Payments',
      title: 'Invoices Payments',
      breadcrumb: 'Invoices Payments',
      iconName: '',
      api: '',
      roles: ''
    },
    'invoices-adjustments': {
      parent: 'trust-replenishments',
      navTitle: 'Invoices Adjustments',
      title: 'Invoices Adjustments',
      breadcrumb: 'Invoices Adjustments',
      iconName: '',
      api: '',
      roles: ''
    },
    'trust-reconciliations': {
      parent: 'payments',
      navTitle: 'Trust Reconciliations',
      title: 'Trust Reconciliations',
      breadcrumb: 'Trust Reconciliations',
      iconName: '',
      api: '',
      roles: ''
    },
    'trust-transactions': {
      parent: 'payments',
      navTitle: 'Trust Transactions',
      title: 'Trust Transactions',
      breadcrumb: 'Trust Transactions',
      iconName: '',
      api: '',
      roles: ''
    },
    'finance-invoices': {
      parent: 'finance',
      navTitle: 'Invoices',
      title: 'Invoices',
      breadcrumb: 'Invoices',
      iconName: '',
      api: '',
      roles: ''
    },
    'trial-fees': {
      parent: 'finance',
      navTitle: 'Trial Fees',
      title: 'Trial Fees',
      breadcrumb: 'Trial Fees',
      iconName: '',
      api: '',
      roles: ''
    },
    'postings': {
      parent: 'finance',
      navTitle: 'Postings',
      title: 'Postings',
      breadcrumb: 'Postings',
      iconName: '',
      api: '',
      roles: ''
    },

    'approvals': {
      parent: '',
      navTitle: 'Approvals',
      title: 'Approvals',
      breadcrumb: 'Approvals',
      iconName: 'fa fa-check-square-o',
      api: '',
      roles: ''
    },
    'dockets': {
      parent: 'approvals',
      navTitle: 'Dockets',
      title: 'Dockets',
      breadcrumb: 'Dockets',
      iconName: 'fa fa-file-text-o',
      api: '',
      roles: ''
    },
    'documents': {
      parent: 'approvals',
      navTitle: 'Documents',
      title: 'Documents',
      breadcrumb: 'Documents',
      iconName: 'fa fa-file-text-o',
      api: '',
      roles: ''
    },

    'claim-assignments': {
      parent: '',
      navTitle: 'Claim Assignments',
      title: 'Claim Assignments',
      breadcrumb: 'Claim Assignments',
      iconName: 'fa fa-tasks',
      api: '',
      roles: ''
    },
    'procedures': {
      parent: '',
      navTitle: 'Procedures',
      title: 'Procedures',
      breadcrumb: 'Procedures',
      iconName: 'fa fa-cogs',
      api: '',
      roles: ''
    },
    'time-codes': {
      parent: 'code-maintenance',
      navTitle: 'Time Code',
      title: 'Time Code',
      breadcrumb: 'Time Code',
      iconName: '',
      api: 'expensecodes',
      roles: '',
      type: FormType.List,
      child: {
        'add': {
          title: 'New Time Code',
          breadcrumb: 'New Time Code',
          api: 'expencescodes',
          roles: '',
          type: FormType.Add
        },
        'edit': {
          title: 'Edit',
          breadcrumb: 'Edit',
          api: 'expencescodes',
          roles: '',
          type: FormType.Edit

        },
        'details': {
          title: ':id',
          breadcrumb: ':id',
          api: 'expencescodes',
          roles: '',
          type: FormType.Details

        }
      }
    },

  }
};
