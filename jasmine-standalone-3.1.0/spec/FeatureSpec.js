'use strict';
describe('Feature Test',function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane;
    airport = new Airport;
  });

  it('instructs a plane to land at an airport',function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to takeoff', function(){
    plane.land(airport)
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

});
