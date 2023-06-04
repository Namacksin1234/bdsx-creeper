"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("bdsx/common");
const event_1 = require("bdsx/event");
event_1.events.levelExplode.on(ev => {
    const entity = ev.entity.getEntityTypeId();
    if (entity === 0xb21) {
        return common_1.CANCEL;
    }
    ;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXFDO0FBQ3JDLHNDQUFvQztBQUVwQyxjQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUMsRUFBRTtJQUN6QixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNDLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtRQUNsQixPQUFPLGVBQU0sQ0FBQztLQUNqQjtJQUFBLENBQUM7QUFDTixDQUFDLENBQUMsQ0FBQyJ9