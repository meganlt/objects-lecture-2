// Objects Review
// Object Literal Syntax (create some objects: hats)
// Properties of our object: fabric, Fitted, brim type, ear flaps, color
let dev = {
    fabric: 'cotton',
    fitted: false,
    brimType: 'flat',
    earFlaps: false,
    color: 'purple'
}

let karter = {
    fabric: 'polyester',
    fitted: false,
    brimType: 'flat',
    earFlaps: false,
    color: 'purple'
}
// karter.pointy = false

let megan = {
    fabric: 'wool',
    fitted: true,
    brimType: 'round',
    earFlaps: false,
    color: 'burgundy',
    pointy: true
} // end object (it's my witchy hat)

let junior = {
    fabric: 'cotton',
    fitted: false,
    brimType: 'curved',
    earFlaps: false,
    color: 'black'
}

// can access properties (aka "key value pairs") with "."
// can set values of properties and create new ones whenever.

// Let's put these hats on a shelf. (array)
let shelf = [ dev, karter, megan, junior ];

// Write a function that displays all hats on the shelf (use for loop)
function showHats(){
    for( let i=0; i<shelf.length; i++){
        console.log( shelf[i] );
    } // end for
    return true;
} // end func

// Display only hats of a given material
function showHatsWithMaterial( materialCheck ){
    for( let i=0; i<shelf.length; i++ ){
        if( shelf[ i ].fabric === materialCheck ){
            console.log( shelf[ i ] );
        }
    } // end for
    return true;
} // end func