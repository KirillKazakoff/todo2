/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ItemT } from '../types';

const ITEMS_API = 'http://localhost:3000/base';
@Injectable({
    providedIn: 'root',
})
export class MainService {
    private items$ = new BehaviorSubject<ItemT[]>([]);
    items: ItemT[] = [];

    constructor(private http: HttpClient) {}

    public init() {
        this.http.get<ItemT[]>(ITEMS_API).subscribe((items) => {
            this.items$.next(items);
            this.items = items;
        });
    }

    clear() {
        this.items$.next([]);
    }

    filter(filter: string) {
        let result = this.items;
        if (filter !== 'all') {
            result = this.items.filter((item) => {
                return filter === 'done' ? item.done : !item.done;
            });
        }
        this.items$.next(result);
    }

    getItems() {
        return this.items$;
    }
}
