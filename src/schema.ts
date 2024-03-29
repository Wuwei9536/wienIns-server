
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class CreateCatInput {
    name?: string;
    age?: number;
}

export class DeleteCatInput {
    id: number;
}

export class UpdateCatInput {
    id: number;
    name?: string;
    age?: number;
}

export class Cat {
    id?: number;
    name?: string;
    age?: number;
}

export abstract class IMutation {
    abstract createCat(createCatInput?: CreateCatInput): Cat | Promise<Cat>;

    abstract deleteCat(deleteCatInput?: DeleteCatInput): Cat | Promise<Cat>;

    abstract updateCat(updateCatInput?: UpdateCatInput): Cat | Promise<Cat>;
}

export abstract class IQuery {
    abstract getCats(): Cat[] | Promise<Cat[]>;

    abstract cat(id: string): Cat | Promise<Cat>;
}

export abstract class ISubscription {
    abstract catCreated(): Cat[] | Promise<Cat[]>;
}
