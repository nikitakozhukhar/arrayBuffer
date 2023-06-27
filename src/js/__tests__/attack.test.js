import Magician from "../class/Magician";


let mage = new Magician("sofia");

test('Проверки атаки без "дурмана"', () => {
  mage.attack = 2;
  expect(mage.attack).toBe(90)
})
