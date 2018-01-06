import { Injectable } from '@angular/core';
import {Claim} from './incidents/claim';

const CLAIM_LIST : Claim[] = [{Id: 123, ResourceId: 10, client: 'Saved Client', branch: 'Test', contact: 'Saif'}];

@Injectable()
export class IncidentService {
    static claimListInitialized = false;

    initialized():Promise<boolean>{

        return new Promise<boolean>(resolve => {
            IncidentService.claimListInitialized = true;
            resolve(IncidentService.claimListInitialized);
        });
    }

    isInitialized():Promise<boolean>{
        console.log(IncidentService.claimListInitialized);
                return new Promise<boolean>(resolve => {
                    resolve(IncidentService.claimListInitialized);
                });
            }
    // 
    getClaims(): Promise<Claim[]> {
        return new Promise<Claim[]>(resolve => {
            resolve(CLAIM_LIST);
        });
    }

    getClaim(localId: number): Promise<Claim> {
        return new Promise<Claim>(resolve => {
            var claims = CLAIM_LIST.filter(x => x.ResourceId === localId);
            if (claims.length == 0)
                resolve(null);
            else if (claims.length == 1)
                resolve(claims[0]);
            else
                console.log('More than one claim found with same local Id');
        });
    }

    // This just add the object locally to save further in db use save version of the method
    addClaim(claim: Claim): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            try {
                if (claim && !claim.ResourceId) {
                    //first local data
                    if (CLAIM_LIST.length == 0) {
                      claim.ResourceId = 1;
                    }
                    // subsequest local data
                    else {
                        var localId = CLAIM_LIST[CLAIM_LIST.length - 1].ResourceId;
                        claim.ResourceId = localId + 1;
                    }
                    CLAIM_LIST.push(claim);
                    resolve(true);
                }
            }
            catch (e) {
                resolve(false);
            }
        });
    }

    saveClaim(claim: Claim): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            try {
                if (claim && claim.ResourceId) {
                    // do your magic here to save data to persistent datasource
                    claim.Id = claim.ResourceId;
                    resolve(true);
                }
            }
            catch (e) {
                resolve(false);
            }
        });
    }

}
