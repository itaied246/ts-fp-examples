import * as _ from "ramda";
import { User } from "./user/user";
import { Maybe } from "ramda-fantasy";

const itai :User = {
    id: 1,
    name: "Itai Edri",
    address: {
        street: {
            name: "Rotchild",
            number: 100
        }
    }
}

const lidor :User = {
    id: 2,
    name: "Lidor Cohen"
}

const main = () => {
    console.log(Maybe.maybe("Address is empty", 
                            _.identity, 
                            getStreetNumber(itai)));
    // 100                            

    console.log(Maybe.maybe("Address is empty", 
                            _.identity, 
                            getStreetNumber(lidor)));
    // Address is empty                             
}

// getStreetNumber :: User => Maybe number
const getStreetNumber = _.compose(_.map(_.prop("number")), 
                                  _.map(_.prop("street")), 
                                  Maybe.toMaybe, 
                                  _.prop("address"));
    

main();