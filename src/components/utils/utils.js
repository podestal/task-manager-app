import { v4 as uuid } from "uuid";

export const idGenerator = () => {
    return uuid()
}