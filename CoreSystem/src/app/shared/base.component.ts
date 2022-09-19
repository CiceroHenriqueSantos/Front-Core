import { FormGroup } from "@angular/forms";
import SelectModel from "../models/select.model";

export class BaseComponent {


    displayAutoComplete(c: SelectModel) {
        return c?.description;
    }

    buildFilter(filter: any, form: FormGroup) {

        let entity = form.getRawValue();
        Object.keys(form.getRawValue()).forEach((key: string) => {
            if (Array.isArray(entity[key]) && entity[key].length == 0) {
                delete filter[key];
            } else if (Array.isArray(entity[key]) && entity[key].length > 0) {
                filter[key] = entity[key] + '';
            }
            if (!!entity[key] && !Array.isArray(entity[key])) {
                filter[key] = entity[key];
            }

            if (filter[key] == null || entity[key].length == 0) {
                delete filter[key];
            }
        });

        return filter;
    }
}