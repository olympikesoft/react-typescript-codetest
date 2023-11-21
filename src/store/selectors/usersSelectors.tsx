import { User } from "../../interfaces";

export const selectUsers = (state: { users: { users: User[]; }; }): User[] => {
    return state.users.users || [];
};