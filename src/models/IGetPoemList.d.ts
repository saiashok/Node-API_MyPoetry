import { IPoem } from "./IPoemModel";
import { IErrorResponse } from "./IErrorModel";
import { IPoemList } from "./IPoemListModel";

export interface IGetPoem{
    response?: IPoemList;
    error?: IErrorResponse;
}