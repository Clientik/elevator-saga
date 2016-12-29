{
    init: function(elevators, floors) {
        var floorQueue = [];

        // Set up elevator behaviour
        elevators.forEach(function(elevator) {
        	// Initialize destination queue so idle elevators start on floor 0
        	elevator.destinationQueue = [0];

        	// Handle floor button presses
	        elevator.on("floor_button_pressed", function(floorNum) {
	        	elevator.destinationQueue.push(floorNum);
	        	elevator.checkDestinationQueue;
	        });

	        // Whenever the elevator is idle (has no more queued destinations) ...
	        elevator.on("idle", function() {
	            elevator.destinationQueue.push(floorQueue.shift());
	            elevator.checkDestinationQueue();
	        });
        });

        // Set up floor behaviour
        floors.forEach(function(floor) {
        	floor.on("up_button_pressed", function() { 
        		floorQueue.push(floor.floorNum());
        	});

        	floor.on("down_button_pressed", function() { 
        		floorQueue.push(floor.floorNum());
        	});
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}