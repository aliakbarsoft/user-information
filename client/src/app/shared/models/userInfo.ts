export interface UserInfo {
    id: number;
    external_id: number;
    name: string;
    surname: string;
    middle_name: string;
    gender: string;
    birthday: string;
    address: string;
    activation_date: string;
    activated: number;
    email: string
}

export interface UserRole {
    roleName: string;
    branchName: string;
    schoolName: string;
    assignmentDate: Date;
    updateDate: Date;
}