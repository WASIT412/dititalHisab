import { TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { HttpModule, Response, ResponseOptions, XHRBackend, RequestMethod } from '@angular/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { CodeMaintenanceService } from './code-maintenance.service';
import { Constants } from '../../app.constants';
import { APP_BASE_HREF } from '@angular/common';
describe('Code-Maintenance-Service', () => {
 
  beforeEach(async() => {

    TestBed.configureTestingModule({
      declarations: [],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule, RouterModule.forRoot([])],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, { provide: Constants.URL_ADDRESS_CODE, useValue: 'http://example.com' }, CodeMaintenanceService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  
  describe('getAddressCodes()', () => {

  

    it('should return an Observable<Array<AddressCodeModel>>',
      inject([CodeMaintenanceService, XHRBackend], (CodeMaintenanceService, mockBackend) => {
        const mockResponse = {
          data: [
            { code: 'Test code1', description: 'Test Desc 1', frenchDescription:'frn desc 1' },
           { code: 'Test code2', description: 'Test Desc 2', frenchDescription: 'frn desc 2' },
           { code: 'Test code3', description: 'Test Desc 3', frenchDescription: 'frn desc 3' },
            { code: 'Test code4', description: 'Test Desc 4', frenchDescription: 'frn desc 4' },
          ]
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
      })); //server test
      //  describe('getAddressCodes from server', () => {
    it('should return an Observable<Array<AddressCodeModel> from server>',
      inject([CodeMaintenanceService, XHRBackend], (CodeMaintenanceService, mockBackend) => {
            CodeMaintenanceService.getAddressCodes().subscribe((res) => {
              expect(res.genericList.length).toBeGreaterThan(0);
              expect(res.genericList[0].code).toEqual('test code');
              expect(res.genericList[1].code).toEqual('test code');
              // expect(res.genericList.code).toEqual('Test code3');
              //expect(res[3].code).toEqual('Test code4');
            })}));
      //  });
        //loca test
        //describe('getAddressCodes from testing object', () => {
    it('should return an Observable<Array<AddressCodeModel> from local variable>',
      inject([CodeMaintenanceService, XHRBackend], (CodeMaintenanceService, mockBackend) => {
        CodeMaintenanceService.getAddressCodes().subscribe((res) => {
          const mockResponse = {
            data: [
              { code: 'Test code1', description: 'Test Desc 1', frenchDescription: 'frn desc 1' },
              { code: 'Test code2', description: 'Test Desc 2', frenchDescription: 'frn desc 2' },
              { code: 'Test code3', description: 'Test Desc 3', frenchDescription: 'frn desc 3' },
              { code: 'Test code4', description: 'Test Desc 4', frenchDescription: 'frn desc 4' },
            ]
          };
          mockResponse.data
          expect(mockResponse.data.length).toBeGreaterThan(3);
          expect(mockResponse.data[0].code).toEqual('Test code1');
          expect(mockResponse.data[1].code).toEqual('Test code2');
          // expect(res.genericList.code).toEqual('Test code3');
          //expect(res[3].code).toEqual('Test code4');
        })
      }));

    it('should delete AddressCode from local variable',
      inject([CodeMaintenanceService, XHRBackend], (CodeMaintenanceService, mockBackend) => {
       
       // CodeMaintenanceService.deleteAddressCodeByCode('Test code1').subscribe((res) => {
       //   expect(res.genericList.length).toBeGreaterThan(3);
 
       // })
      }));

    it('Request Type',
      inject([CodeMaintenanceService, XHRBackend], (CodeMaintenanceService, mockBackend) => {
        mockBackend.connections.subscribe((connection: MockConnection) => {
          expect(connection.request.url).toEqual(Constants.URL_ADDRESS_CODE);
        //  expect(connection.request.method).toEqual(RequestMethod.Get);
        })
      }));

    

  });

});
