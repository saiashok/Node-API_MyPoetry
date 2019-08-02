import { IPoem } from "./IPoemModel";

export interface IPoemList{
    poems : ListOfPoem;
}

export interface ListOfPoem{
    poemlist: IPoem[];
}