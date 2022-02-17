import { Types } from "mongoose";

export interface IClient {
  _id: Types.ObjectId;
  user_id: Types.ObjectId;
  profile: {
    first_name: string;
    last_name: string;
    phone_number: string;
    address: string;
    city: string;
    country: string;
    description: string;
    created_at: Date;
    updated_at: Date;
  };
}

export type clientRequest = {
  _id?: Types.ObjectId;
  user_id: Types.ObjectId;
  profile : {
    first_name: string | undefined;
    last_name: string | undefined;
    phone_number?: string;
    address?: string;
    city?: string;
    country?: string;
    description?: string;
    created_at?: Date;
    updated_at?: Date;
  }
}
