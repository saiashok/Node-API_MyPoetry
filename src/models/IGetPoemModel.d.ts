import { IPoem } from "./IPoemModel";
import { IErrorResponse } from "./IerrorModel";

export interface IGetPoem{
    response?: IPoem;
    error?: IErrorResponse;
}