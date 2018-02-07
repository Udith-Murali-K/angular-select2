import {Component, OnInit, Input,EventEmitter , Output} from '@angular/core';
import {Http} from '@angular/http';


@Component({
    selector: 'app-cr-select',
    templateUrl: './cr-select.component.html',
    styleUrls: ['./cr-select.component.css']
})
export class CrSelectComponent implements OnInit {

    @Input() type: string;
    @Input() entity: string;
    @Output() onPick = new EventEmitter<string>();
    options:any  = [];
    typeObject:any={};

    optionSelected:any;
    
    constructor(public http:Http) {

    }
    ngOnInit() {
        this.typeCheck();
    }



    typeCheck() {
        switch (this.type) {
            case 'ajax':
                this.http.get(this.entity).subscribe(res=> {
                    let data = res.json();
                    this.options=[];
                    for (var st in data) {
                        console.log(st);
                        this.options.push({'id': data[st].id, 'text': data[st].name});
                    }
                   console.log(this.options);
                });
                break;
            case 'local':
                this.options = JSON.parse(localStorage.getItem(this.entity));
                console.log(this.options);
                break;
            case 'array':
                this.options = this.entity;
                console.log(this.options);
                break;
        }
    }


    onSelect({id, text}) {

      console.log(id)
        this.onPick.emit(text)
    }






}
