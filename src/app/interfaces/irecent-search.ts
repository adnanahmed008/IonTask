import { ESearchType } from "../enums";
import { User, Institute } from "../models";

export interface IRecentSearch {
    type: ESearchType;
    text?: string;
    user?: User;
    institute?: Institute;
}