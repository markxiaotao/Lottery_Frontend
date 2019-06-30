import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadresultService } from './../uploadresult.service';
import { LotteryResult } from './../Entity/lotteryResult';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatInput, MatSort } from '@angular/material';

class Row {
  id: number;
  firstPrize: number;
  date: string;
  threeDigitPrefix: string;
  threeDigitSuffix: string;
  twoDigitSuffix: number;
  firstPrizeNei: string;
  secondPrize: string;
  thirdPrize: string;
  fourthPrize: string;
  fifthPrize: string; 
}
@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent implements OnInit {
    types = ['All', 'First Prize', 'Three Digit Prefix',
    'Three Digit Suffix',
    'Two Digit Suffix',
    'First Prize Nei',
    'Second Prize',
    'Third Prize',
    'Fourth Prize',
    'Fifth Prize'];
    showfirstPrize: boolean;
    showthreeDigitPrefix: boolean;
    showthreeDigitSuffix: boolean;
    showtwoDigitSuffix: boolean;
    showfirstPrizeNei: boolean;
    showsecondPrize: boolean;
    showthirdPrize: boolean;
    showfourthPrize: boolean;
    showfifthPrize: boolean;
    type :string ;
    results: LotteryResult[];
    resTable = new MatTableDataSource<Row>();
    @ViewChild(MatSort,null) sort: MatSort;
    columns: string[] = [
      'id',
      'firstPrize',
      'date',
      'threeDigitPrefix',
      'threeDigitSuffix',
      'twoDigitSuffix',
      'firstPrizeNei',
      'secondPrize',
      'thirdPrize',
      'fourthPrize',
      'fifthPrize'
    ];
    filterForm: FormGroup;
    date: string;

    constructor(private up: UploadresultService,
                private fb: FormBuilder) {
        this.filterForm = this.fb.group({
            type:  null,
            date: null,
        });
        this.up.viewLotteryResults().subscribe(results => {
            this.results = results;
            this.makeRows();
        });
    }

    makeRows() {
        if (!(this.results)) return;
        
        let data: Row[] = new Array<Row>();
        for (let result of this.results) {
            let row: Row = {
              id: result.id,
              firstPrize: result.firstPrize,
              date: result.date,
              threeDigitPrefix: result.threeDigitPrefix.toString(),
              threeDigitSuffix: result.threeDigitSuffix.toString(),
              twoDigitSuffix: result.twoDigitSuffix,
              firstPrizeNei: result.firstPrizeNei.toString(),
              secondPrize: result.secondPrize.toString(),
              thirdPrize: result.thirdPrize.toString(),
              fourthPrize: result.fourthPrize.toString(),
              fifthPrize: result.fifthPrize.toString()
            };
            data.push(row);
        }
        this.resTable.data = data;
        
    }

    filterPred = (row: Row, date: string) => {
        let accept: boolean = row.date.toLowerCase().indexOf(date.substring(1)) > -1;
        return accept;
    }
    updateTypeFilter(event:any){
      this.type = event.target.value;
      console.log(this.type)
      if(this.type == 'First Prize'){
        this.showfirstPrize = true;
        this.showthreeDigitPrefix = false;
        this.showthreeDigitSuffix= false;
        this.showtwoDigitSuffix = false;
        this.showfirstPrizeNei = false;
        this.showsecondPrize  = false;
        this.showthirdPrize = false;
        this.showfourthPrize = false;
        this.showfifthPrize = false;
      }else if(this.type == 'Three Digit Prefix'){
        this.showfirstPrize = false;
        this.showthreeDigitPrefix = true;
        this.showthreeDigitSuffix= false;
        this.showtwoDigitSuffix = false;
        this.showfirstPrizeNei = false;
        this.showsecondPrize  = false;
        this.showthirdPrize = false;
        this.showfourthPrize = false;
        this.showfifthPrize = false;
      }else if(this.type == 'Three Digit Suffix'){
        this.showfirstPrize = false;
        this.showthreeDigitPrefix = false;
        this.showthreeDigitSuffix= true;
        this.showtwoDigitSuffix = false;
        this.showfirstPrizeNei = false;
        this.showsecondPrize  = false;
        this.showthirdPrize = false;
        this.showfourthPrize = false;
        this.showfifthPrize = false;
      }else if(this.type == 'Two Digit Suffix'){
        this.showfirstPrize = false;
        this.showthreeDigitPrefix = false;
        this.showthreeDigitSuffix= false;
        this.showtwoDigitSuffix = true;
        this.showfirstPrizeNei = false;
        this.showsecondPrize  = false;
        this.showthirdPrize = false;
        this.showfourthPrize = false;
        this.showfifthPrize = false;
      }else if(this.type == 'First Prize Nei'){
        this.showfirstPrize = false;
        this.showthreeDigitPrefix = false;
        this.showthreeDigitSuffix= false;
        this.showtwoDigitSuffix = false;
        this.showfirstPrizeNei = true;
        this.showsecondPrize  = false;
        this.showthirdPrize = false;
        this.showfourthPrize = false;
        this.showfifthPrize = false;
      }else if(this.type == 'Second Prize'){
        this.showfirstPrize = false;
        this.showthreeDigitPrefix = false;
        this.showthreeDigitSuffix= false;
        this.showtwoDigitSuffix = false;
        this.showfirstPrizeNei = false;
        this.showsecondPrize  = true;
        this.showthirdPrize = false;
        this.showfourthPrize = false;
        this.showfifthPrize = false;
      }else if(this.type == 'Third Prize'){
        this.showfirstPrize = false;
        this.showthreeDigitPrefix = false;
        this.showthreeDigitSuffix= false;
        this.showtwoDigitSuffix = false;
        this.showfirstPrizeNei = false;
        this.showsecondPrize  = false;
        this.showthirdPrize = true;
        this.showfourthPrize = false;
        this.showfifthPrize = false;
      }else if(this.type == 'Fourth Prize'){
        this.showfirstPrize = false;
        this.showthreeDigitPrefix = true;
        this.showthreeDigitSuffix= false;
        this.showtwoDigitSuffix = false;
        this.showfirstPrizeNei = false;
        this.showsecondPrize  = false;
        this.showthirdPrize = false;
        this.showfourthPrize = true;
        this.showfifthPrize = false;
      }else if(this.type == 'Fifth Prize'){
        this.showfirstPrize = false;
        this.showthreeDigitPrefix = false;
        this.showthreeDigitSuffix= false;
        this.showtwoDigitSuffix = false;
        this.showfirstPrizeNei = false;
        this.showsecondPrize  = false;
        this.showthirdPrize = false;
        this.showfourthPrize = false;
        this.showfifthPrize = true;
      }else{
        this.showfirstPrize = true;
        this.showthreeDigitPrefix = true;
        this.showthreeDigitSuffix= true;
        this.showtwoDigitSuffix = true;
        this.showfirstPrizeNei = true;
        this.showsecondPrize  = true;
        this.showthirdPrize = true;
        this.showfourthPrize = true;
        this.showfifthPrize = true;
      }
      console.log(this.showfirstPrize,
        this.showthreeDigitPrefix,
        this.showthreeDigitSuffix,
        this.showtwoDigitSuffix,
        this.showfirstPrizeNei,
        this.showsecondPrize,
        this.showthirdPrize,
        this.showfourthPrize,
        this.showfifthPrize,)
    }

    updateFilter(event:any) {
        let fmVal = this.filterForm.value;
        let date = fmVal.date == null ? "" :
        fmVal.date.trim().toLowerCase();
        this.resTable.filter = "." + date;
        this.makeRows();
        console.log(this.resTable.data)
        console.log(this.type)
    }

    ngOnInit() {
        this.resTable.sort = this.sort;
        this.resTable.filterPredicate = this.filterPred;
        this.resTable.filter = ".";
        // this.type = 'All';
        this.showfirstPrize = true;
        this.showthreeDigitPrefix  = true;
        this.showthreeDigitSuffix = true;
        this.showtwoDigitSuffix = true;
        this.showfirstPrizeNei = true;
        this.showsecondPrize = true;
        this.showthirdPrize = true;
        this.showfourthPrize = true;
        this.showfifthPrize = true;
    }
}
