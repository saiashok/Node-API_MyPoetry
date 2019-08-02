import { IPoem } from "./IPoemModel";
import { IErrorResponse } from "./IerrorModel";
import { IPoemList } from "./IPoemListModel";

export interface IGetPoem{
    response?: IPoemList;
    error?: IErrorResponse;
}