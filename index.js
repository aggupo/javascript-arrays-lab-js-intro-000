const app = "I don't do much."

let kittens = ['Milo', 'Otis', 'Garfield'];

// describe('destructivelyAppendKitten(name)', function() {
//   it('appends a kitten to the end of the kittens array', function() {
//     destructivelyAppendKitten('Ralph')
//     expect(window.kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"])
//
//

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}
