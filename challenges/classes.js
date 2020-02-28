// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerClass {
    constructor(properties) {
        this.length = properties.length,
        this.width = properties.width,
        this.height = properties.height  
    }
    volume() {
        return this.length * this.width * this.height;
      }
    surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
      }
  }
  class cuboidClass extends CuboidMakerClass {
      constructor(qproperties) {
          super(qproperties)
      }
      qvolume() {
        return this.length * this.width * this.height;
      }
      qsurfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
      }
  };

  const qcuboid = new CuboidMaker ({
    length: 4,
    width: 5,
    height: 5
  });
    //Should work but returns NaN

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(qcuboid.volume()); // 100
//console.log(`Wrong`);
console.log(qcuboid.surfaceArea()); // 130
//console.log(`Wrong`);
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.