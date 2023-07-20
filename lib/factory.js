"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFactory = void 0;
class Factory {
    constructor(objectConstructor) {
        this.object = new objectConstructor();
    }
    withProperties(properties) {
        this.object = Object.assign(Object.assign({}, this.object), properties);
        return this;
    }
    build() {
        return this.object;
    }
}
function makeFactory(objectConstructor) {
    return new Factory(objectConstructor);
}
exports.makeFactory = makeFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU0sT0FBTztJQUdaLFlBQVksaUJBQThCO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxjQUFjLENBQUMsVUFBc0I7UUFDcEMsSUFBSSxDQUFDLE1BQU0sbUNBQVEsSUFBSSxDQUFDLE1BQU0sR0FBSyxVQUFVLENBQUUsQ0FBQztRQUNoRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Q0FDRDtBQUVELFNBQVMsV0FBVyxDQUFJLGlCQUE4QjtJQUNyRCxPQUFPLElBQUksT0FBTyxDQUFJLGlCQUFpQixDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUdBLGtDQUFXIn0=