export interface CreateEventPayload {
  location: string;
  picture: string;
  created_by: string;
  description: string;
  venue_time: string;
}

export interface EventDetails {
  id: number;
  picture: string;
  venue_time: string;
  name: string;
  attendees: string[];
  description: string;
  location: string;
}

export interface EventList {
  id: number;
  picture: string;
  venue_time: string;
  name: string;
  attendees: Attendee[];
  created_by: number;
}

export interface Attendee {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  profile_pic: string;
  description: string;
  phone_number: string;
  address: string;
  followers: any;
}
