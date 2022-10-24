/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemT } from '../types';

const ITEMS_API = 'http://localhost:3000/base';
@Injectable({
    providedIn: 'root',
})

export class MainService {
    private items$ = new BehaviorSubject<ItemT[]>([]);

    constructor(private http: HttpClient) {}

    public init() {
        this.http.get<ItemT[]>(ITEMS_API).subscribe((items) => {
            this.items$.next(items);
        });
    }

    clear() {
        this.items$.next([]);
    }

    getItems() {
        return this.items$;
    }
}
