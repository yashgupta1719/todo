import {Injectable} from '@angular/core';
@Injectable()

export class Todow{
    WorkList = [{name:'task1'}];


getWork(){
    return this.WorkList
}
setWork(wl){
    this.WorkList.push(wl)
}
getdel(name){
    this.WorkList.splice(this.WorkList.indexOf(name),1);
}
}