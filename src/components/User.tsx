/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { closeContext } from "../contexts";

type User = {
    name: string;
    email: string | null;
    digest: string;
}

type UserCreate = {
    name: string;
    email: string | null
    digest: string;
}

type UserUpdate = {
    name?: string;
    email?: string | null;
}


type CreateUserProps = {
    type: "create",
    submit: (payload: UserCreate) => Promise<unknown>;
    groupID: string;
}

type UpdateUserProps = {
    type: "update",
    submit: (payload: UserUpdate) => Promise<unknown>;
    existingUser: User;
    groupID: string;
}

export type UserProps = CreateUserProps | UpdateUserProps;

export const User = (props: UserProps) => {
    const close = useContext(closeContext);
    // apply defaults to props if create

    // prefill using existingUser if update
    return <div><h1>This is a user</h1></div>;
}
