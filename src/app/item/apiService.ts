// /* eslint-disable class-methods-use-this */
// /* eslint-disable no-underscore-dangle */
// /* eslint-disable no-restricted-syntax */
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { UserT } from '../../types.type';
// import { initialDb } from '../../init';
// import { request } from './request';

// @Injectable({
//     providedIn: 'root',
// })
// export class ApiService {
//     users: UserT[] = [];
//     private users$ = new BehaviorSubject<UserT[]>([]);
//     constructor() {
//         this.users$.subscribe((data) => {
//             this.users = data;
//         });
//     }

//     async getUsers() {
//         const res = await request();
//         this.users$.next(res);
//         console.log(res);
//         return this.users$;
//     }

//     async post(user: UserT) {
//         await request({
//             settings: {
//                 method: 'POST',
//                 body: JSON.stringify(user),
//             },
//         });
//         await this.getUsers();
//         // this.users$.next([...this.users, user]);
//     }

//     async put(user: any) {
//         await request({
//             url: user._id,
//             settings: {
//                 method: 'PUT',
//                 body: JSON.stringify({ user }),
//             },
//         });

//         const replacedIndex = this.users.indexOf(user);
//         this.users.splice(replacedIndex, 1);
//         this.users.splice(replacedIndex, 0, user);
//         this.users$.next(this.users);
//     }

//     async deleteUser(id: any) {
//         await request({
//             url: id,
//             settings: {
//                 method: 'DELETE',
//             },
//         });

//         this.users$.next(this.users.filter((user: any) => user._id !== id));
//     }

//     async refresh() {
//         for await (const user of this.users) {
//             this.deleteUser(user.id);
//         }

//         for await (const user of initialDb) {
//             this.post(user);
//         }
//     }
// }
