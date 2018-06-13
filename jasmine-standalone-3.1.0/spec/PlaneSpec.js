'use strict'
describe('Plane',function(){
  var plane;
  var airport;

  describe('when its not stormy',function(){
    beforeEach(function(){
      plane = new Plane();
      airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff']);
    });

    it('can land at an airport', function(){
      plane.land(airport);
      expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });
    it('can takeoff from an airport', function(){
      plane.land(airport);
      plane.takeoff();
      expect(airport.clearForTakeOff).toHaveBeenCalled();
    });
  });

  // describe('when its not stormy',function(){
  //   beforeEach(function(){
  //     plane = new Plane();
  //   });
  //   it('cannot take off from an airport when its stormy',function(){
  //     plane.land(airport);
  //     plane.takeoff();
  //     expect(airport.clearForTakeOff).toHaveBeenCalled();
  //   });
  // });
});
