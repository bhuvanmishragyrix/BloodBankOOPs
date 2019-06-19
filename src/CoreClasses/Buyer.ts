import Person from "./Person";
import BloodGroup from "./BloodGroup";

class Buyer extends Person {
    private requiredBloodGroup: BloodGroup;

    constructor(name: string, phone: number, requiredBloodGroup: BloodGroup) {
        super(name, phone);
        this.requiredBloodGroup = requiredBloodGroup;
    }

    getBuyerName() {
        return this.name;
    }

    getBuyerPhone() {
        return this.phone;
    }

    getBuyerBloodGroup() {
        return this.requiredBloodGroup;
    }
}

export default Buyer;