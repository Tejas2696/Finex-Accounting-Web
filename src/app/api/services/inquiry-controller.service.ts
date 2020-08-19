import { Injectable } from '@angular/core';
import { ApiConfiguration } from '../api-configuration';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { InquiryEntity } from '../models/inquiry-entity';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../strict-http-response';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InquiryControllerService extends BaseService {

  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  sendInquiryUsingPOSTResponse(params: InquiryEntity): Observable<StrictHttpResponse<string>> {
    // console.log('params', params);
    // let __params = this.newParams();
    // let __headers = new HttpHeaders();

    let __body: any = null;

    __body = params;
    console.log('__body', __body);
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/email/sendEmail`,
      __body);

      console.log('req', req);

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as StrictHttpResponse<string>;
      })
    );
  }

  sendInquiryUsingPOST(params: InquiryEntity): Observable<string> {
    return this.sendInquiryUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

}
