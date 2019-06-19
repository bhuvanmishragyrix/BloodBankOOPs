class BloodGroup {
    private bloodGroup: string = null;

    constructor(bloodGroup: string) {
        switch (bloodGroup) {
            case 'O+':
                this.bloodGroup = bloodGroup;
                break;
            case 'O-':
                this.bloodGroup = bloodGroup;
                break;
            default:
                throw Error("Blood group not supported!");
        }
    }

    getBloodGroup() {
        return this.bloodGroup;
    }

}

export default BloodGroup;