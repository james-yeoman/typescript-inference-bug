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

type UserPropsBase = {
    close: () => void;
    groupID: string;
}

type CreateUserProps = {
    type: "create",
    submit: (payload: UserCreate) => Promise<unknown>;
}

type UpdateUserProps = {
    type: "update",
    submit: (payload: UserUpdate) => Promise<unknown>;
    existingUser: User;
}

export type UserProps = UserPropsBase & (CreateUserProps | UpdateUserProps);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const User = (props: UserProps) => {
    // apply defaults to props if create

    // prefill using existingUser if update
    return <div><h1>This is a user</h1></div>;
}
