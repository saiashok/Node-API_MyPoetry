import { IPoem } from "./IPoemModel";
import { IErrorResponse } from "./IErrorModel";

export interface IGetPoem{
    response?: IPoem;
    error?: IErrorResponse;
}