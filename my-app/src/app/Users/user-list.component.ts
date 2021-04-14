import { Component, OnInit } from "@angular/core";
import { IUser } from "./User";

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html'
})

export class UserListComponent implements OnInit {
    pageTitle: string = "User List Title";
    filteredUser: IUser[] = []; 
    users: IUser[] = [
        {
            "userId": 1,
            "fullName": "Mohamad Lawand",
            "email": "mohamad@email.com",
            "phone": 123123,
            "country": "Lebanon"
        },
        {
            "userId": 2,
            "fullName": "Richard Feynman",
            "email": "richard@email.com",
            "phone": 111222333,
            "country": "United States"
        },
        {
            "userId": 3,
            "fullName": "Neil Degrass Tyson",
            "email": "neil@email.com",
            "phone": 99000999,
            "country": "United States"
        }
    ];
    phoneNumberVisible : boolean = false;
    private _listFilter: string = '';

    get listFiler(): string {
        return this._listFilter;
    }

    set listFiler(value: string){
        this._listFilter = value;
        // Adding the filtration process 
        this.filteredUser = this.performFiltration(value);
    }

    // Defining a new method
    showNumbers(): void {
        this.phoneNumberVisible = !this.phoneNumberVisible;
    }

    ngOnInit(): void {
        console.log("I am loading on ngOnInit");
        this.listFiler = '';
    }

    performFiltration(filterBy: string) : IUser[] {
        filterBy = filterBy.toLowerCase();
        return this.users.filter((user: IUser) => user.fullName.toLowerCase().includes(filterBy));
    }
}