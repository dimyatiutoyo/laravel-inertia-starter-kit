export interface User {
	id: number;
	uuid: string;
	name: string;
	email: string;
	email_verified_at: string;
	roles: Role[];
}

export interface Role {
	id: number;
	name: string;
	display_name?: string;
	description?: string;
	permissions: Permission[];
}

export interface Permission {
	id: number;
	name: string;
	display_name?: string;
	description?: string;
}

export type PageProps<
	T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
	auth: {
		user: User;
	};
};
