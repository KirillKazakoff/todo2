import { Component } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
    selector: 'app-filtration',
    template: `
        <div>insert a filter here</div>
        <input
            class="input filter-input"
            [(ngModel)]="filter"
            (input)="filterItems()"
        />
        <button (click)="clear()"></button>
    `,
})
export class FiltrationComponent {
    constructor(private mainService: MainService) {}

    filter: 'all' | 'active' | 'done' = 'all';

    filterItems() {
        this.mainService.filter(this.filter);
    }
    clear() {
        this.mainService.clear();
    }
}
