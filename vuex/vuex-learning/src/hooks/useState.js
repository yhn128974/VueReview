import { mapState } from "vuex";
import {useMappers} from "./usemapper";

export function useState(mapper) {
 return  useMappers(mapper,mapState)
}
