import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UploadresultService } from '../uploadresult.service';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER } from '@angular/cdk/overlay/typings/overlay-directives';


@Component({
  selector: 'app-upload-result',
  templateUrl: './upload-result.component.html',
  styleUrls: ['./upload-result.component.css']
})
export class UploadResultComponent implements OnInit {
  fb: FormBuilder = new FormBuilder();
  uploadForm: FormGroup = this.fb.group({
    fp: [null],
    tdp: [null],
    sdf: [null],
    td: [null],
    fpn: [null],
    tnp: [null],
    tp: [null],
    fnp: [null],
    fps: [null],
  });
  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient, private up: UploadresultService,) { }

  ngOnInit() {
  }

  onSubmit(event) {
    let firstPrize = this.uploadForm.value.fp;
    let twoDigitSuffix = this.uploadForm.value.td;
    
    let threeDigitPrefix: [] = this.uploadForm.value.tdp.split(",").map(Number);
    console.log(threeDigitPrefix)
    let threeDigitSuffix: [] = this.uploadForm.value.sdf.split(",").map(Number);
    let firstPrizeNei: [] = this.uploadForm.value.fpn.split(",").map(Number);
    let secondPrize: [] = this.uploadForm.value.tnp.split(",").map(Number);
    let thirdPrize: [] = this.uploadForm.value.tp.split(",").map(Number);
    let fourthPrize: [] = this.uploadForm.value.fnp.split(",").map(Number);
    let fifthPrize: [] = this.uploadForm.value.fps.split(",").map(Number);
    let lotteryResult = {
    firstPrize,
    threeDigitPrefix,
    threeDigitSuffix,
    twoDigitSuffix,
    firstPrizeNei,
    secondPrize,
    thirdPrize,
    fourthPrize,
    fifthPrize
    };
    this.up.uploadLotteryResult(lotteryResult).subscribe(data => {
      this.router.navigate(['/']);
      });

    
    }


}
