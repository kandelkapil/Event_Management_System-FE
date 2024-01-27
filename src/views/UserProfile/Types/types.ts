 export interface UserUpdatePayload {
  id: number;
  name?: string;
  username?: string;
  profile_pic?: string;
  followers?: number;
  address?: string;
  phone?: string;
  description?: string;
}
