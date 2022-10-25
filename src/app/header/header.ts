import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <app-filtration></app-filtration>
        <h2>
            <span>{{ length }}</span>
            <ng-template #one>item</ng-template>
            <ng-template #many>items</ng-template>
            <ng-container *ngIf="length; then one; else many"></ng-container>
        </h2>
    `,
})
export class HeaderComponent {
    @Input() length?: number;
}
