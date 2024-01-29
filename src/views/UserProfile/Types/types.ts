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

export interface UserProfile {
  username: string;
  firstName: string;
  lastName: string;
  phone: string;
  followers: number;
  description: string;
  address: string;
  profile_pic: string;
}
