import {Component, OnInit} from '@angular/core';
import {Breakfast} from "../../../../features/restaurant/models/breakfast-model";
import {BreakfastService} from "../../../../features/restaurant/services/breakfast.service";

@Component({
  selector: 'app-breakfast-page',
  templateUrl: './breakfast-page.component.html',
  styleUrls: ['./breakfast-page.component.scss'],
  providers: [BreakfastService]
})
export class BreakfastPageComponent implements OnInit {

  breakfasts?: Breakfast[];

  constructor(private breakfastService: BreakfastService) { }

  ngOnInit(): void {
    this.breakfastService.getBreakfasts().subscribe(breakfastList => {
      this.breakfasts = breakfastList;
    });
  }
}