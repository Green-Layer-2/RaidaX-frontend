import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');

@Injectable({
  providedIn: 'root'
})
export class ApiService implements HttpInterceptor {

  public baseURL = environment.base_url;
  public checkURL = environment.connection_url;


  constructor(private http: HttpClient, @Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const timeoutValue = req.headers.get('timeout') || this.defaultTimeout;
    const timeoutValueNumeric = Number(timeoutValue);
    return next.handle(req).pipe(timeout(timeoutValueNumeric));
  }



  async init() {
    return await this.http.get(this.checkURL).toPromise();
  }

  async raidaEcho() {
    return await this.http.get(this.baseURL + 'echo').toPromise();
  }

  async doTaskPoll(taskID: any) {
    return await this.http.get(this.baseURL + 'tasks/' + taskID).toPromise();
  }

  async doCheck(taskID: any) {
    return await this.http.get(this.baseURL + 'tasks/' + taskID).toPromise();
  }

  async getWallet() {
    return await this.http.get(this.baseURL + 'wallets').toPromise();
  }

  async addWallet(idata: any) {
    return await this.http.post(this.baseURL + 'wallets', idata).toPromise();
  }

  async deleteWallet(data: any) {
    return await this.http.delete(this.baseURL + 'wallets/' + data).toPromise();
  }

  async walletname(data: any) {
    return await this.http.get(this.baseURL + 'wallets/' + data).toPromise();
  }

  async getTransaction(data: any) {
    return await this.http.get(this.baseURL + 'wallets/' + data + '?contents=true').toPromise();
  }
  async import(data: any) {
    return await this.http.post(this.baseURL + 'import', data).toPromise();
  }

  async export(data: any) {
    return await this.http.post(this.baseURL + 'export', data).toPromise();
  }

  async transfer(data: any) {
    return await this.http.post(this.baseURL + 'transfer', data).toPromise();
  }

  async getVersion() {
    return await this.http.get(this.baseURL + 'info').toPromise();
  }

  async getNews() {
    return await this.http.get(this.baseURL + 'news').toPromise();
  }

  async deletetransaction(data: any) {
    return await this.http.delete(this.baseURL + 'transactions/' + data).toPromise();
  }

  async rename(name: string, data: any) {
    return await this.http.put(this.baseURL + 'wallets/' + name, data).toPromise();
  }

  async getReceipts(name: string, data: any) {
    return await this.http.get(this.baseURL + 'transactions/' + name + "/" + data).toPromise();
  }

  async importFile() {
    return await this.http.get(this.baseURL + 'filepicker?type=file').toPromise();
  }

  async leftover(name: string) {
    return await this.http.get(this.baseURL + 'wallets/' + name + '/leftovers').toPromise();
  }

  async suspect(data: any) {
    return await this.http.post(this.baseURL + 'import?type=suspect', data).toPromise();
  }

  async convert(data: any) {
    return await this.http.post(this.baseURL + 'convert', data).toPromise();
  }

  async fixlimbo(data: any) {
    return await this.http.post(this.baseURL + 'fixlost', data).toPromise();
  }

  async setting() {
    return await this.http.get(this.baseURL + 'settings').toPromise();
  }

  async settingTask(data: any) {
    return await this.http.post(this.baseURL + 'settings', data).toPromise();
  }

  async withdraw(data: any) {
    return await this.http.post(this.baseURL + 'withdraw', data).toPromise();
  }


  async fix(data: any) {
    return await this.http.put(this.baseURL + 'fix', data).toPromise();
  }

  async getFix() {
    return await this.http.get(this.baseURL + 'fix').toPromise();
  }

  async postFix(data: any) {
    return await this.http.post(this.baseURL + 'fix', data).toPromise();
  }

  async health(data: any) {
    return await this.http.post(this.baseURL + 'health', data).toPromise();
  }

  async backup(data: any) {
    return this.http.post(this.baseURL + 'backup', data).toPromise();
  }

  async filePick() {
    return this.http.get(this.baseURL + 'filepicker').toPromise();
  }
}

@Injectable()
export class DataService {

  private data: string;

  setData(data: string) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  hasData() {
    return this.data && this.data.length;
  }
}
