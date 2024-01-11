export class joblist{
    id!:string
    jobTitle!:string;
    jobSummary!:string;
    locationId!:string;
    companyId!:any;
    categoryId!:string;
    industryId!:string;
    postedBy!:any|undefined;
    postedDate!:string;
}

// export class removejoblist{
//     id!:string
//     jobTitle!:string;
//     jobSummary!:string;
//     locationId!:string;
//     companyId!:any;
//     categoryId!:string;
//     industryId!:string;
//     postedBy!:any|undefined;
//     postedDate!:string;
// }

export class getinglocation{
    id! :string;
    name! :string;
    discription! :string
}

export class getingcompany{
    id!:string
    legalName!:string;
    summary!:string;
    industryId!:string;
    email!:string;
    phone!:string;
    address!:string;
    website!:string; 
    location!:string; 
}
export class getingcategory{
    id!:string;
    name!:string;
    description!:string;
}

export class getingindustry{
    id!:string; 
    name!:string; 
    description!:string;
}