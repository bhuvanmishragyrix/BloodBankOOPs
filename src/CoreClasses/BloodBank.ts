import InventoryEntry from "./InventoryEntry";
import BloodGroup from "./BloodGroup";

class BloodBank {
    private inventory: InventoryEntry[];

    constructor() {
        this.inventory = [];
    }

    addToInventory(inventoryEntry: InventoryEntry) {
        let bloodGroup = this.doesBloodGroupExist(inventoryEntry.getBloodGroup());

        if (bloodGroup) {
            let updatedInventory = this.inventory.map((el) => {
                if (el.getBloodGroup().getBloodGroup() === inventoryEntry.getBloodGroup().getBloodGroup()) {
                    let inventoryEntryLocal = el;
                    inventoryEntryLocal.updateAmountPresent(inventoryEntry.getAmountPresent());
                    return inventoryEntryLocal;
                }
                else {
                    el
                }
            });

            this.inventory = updatedInventory;
        }
        else {
            this.inventory.push(inventoryEntry);
        }
    }

    checkIfBloodGroupAndRequiredAmountExists(bloodGroup: BloodGroup, amount: number): boolean {

        let doesBloodGroupExist;
        doesBloodGroupExist = this.doesBloodGroupExist(bloodGroup);

        if (doesBloodGroupExist) {
            let bloodGroupEntry = this.inventory.find((el) => {
                if (el.getBloodGroup().getBloodGroup() === bloodGroup.getBloodGroup()) {
                    return true;
                }
                else {
                    return false;
                }
            });

            if (bloodGroupEntry.getAmountPresent() >= amount) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            throw Error("Blood Group Doesn't exist in bank!");
        }
    }

    doesBloodGroupExist(bloodGroup: BloodGroup): boolean {
        let doesBloodGroupExist = null;
        doesBloodGroupExist = this.inventory.find((el) => {
            if (el.getBloodGroup().getBloodGroup() === bloodGroup.getBloodGroup()) {
                return true;
            }
            else {
                return false
            }
        })

        if (doesBloodGroupExist === null) {
            return false;
        }
        else {
            return true;
        }
    }

    checkAndSubtractAmountFromInventory(bloodGroup: BloodGroup, amount: number) {
        if (this.checkIfBloodGroupAndRequiredAmountExists(bloodGroup, amount)) {
            let updatedInventory = this.inventory.map((el) => {
                if (el.getBloodGroup().getBloodGroup() === bloodGroup.getBloodGroup()) {
                    el.updateAmountPresent(amount);
                    return el;
                }
                else {
                    return el;
                }
            });

            this.inventory = updatedInventory;
        }
        else {
            throw Error("Blood group or required amount does not exist!");
        }
    }

    getInventory() {
        return this.inventory;
    }
}