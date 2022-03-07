import { Types } from "mongoose";
import { TokenModel } from "../entity/models/token.models";
import { tokenService } from "../utils/token.utils";

const { createRefreshToken } = tokenService;

export const createRefreshTokenService = async ( userId: string | Types.ObjectId ): Promise<string> => {
  try {
    const refreshToken = createRefreshToken({ id: userId });
    const token = new TokenModel({
      owner: userId,
      token: refreshToken,
    });
    return (await token.save()).token;
  } catch (error: any) {
    throw new Error(`Error creating a new refresh token ${error.message}`);
  }
}