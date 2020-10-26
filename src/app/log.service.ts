import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  log(msg: any, identifier?: string) {
    console.log(`${new Date()}:${identifier ? ` ${identifier}:` : ''} ${JSON.stringify(msg)}`);
  }

}
