import Magician from "../class/Magician";


let mage = new Magician("sofia");

test('Проверки атаки под воздействием "дурмана"', () => {
  mage.stoned = 2;
  expect(mage.attack).toBe(85)
})