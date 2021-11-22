
import { MathHelper } from "."
import apple from '../assets/apple.png'
import banana from '../assets/banana.png'
import mango from '../assets/mango.png'
import orange from '../assets/orange.png'
import pear from '../assets/pear.png'
import pineapple from '../assets/pineapple.png'
import plum from '../assets/plum.png'
import pomegranate from '../assets/pomegranate.png'
import strawberry from '../assets/strawberry.png'
import watermelon from '../assets/watermelon.png'
import lemon from '../assets/lemon.png'
import carrot from '../assets/carrot.png'
import cherry from '../assets/cherry.png'
import peach from '../assets/peach.png'
import dragon_fruit from '../assets/dragon_fruit.png'

const Names1 = ['ارحام', 'آیان', 'آیان', 'آریان', 'زیان', 'انس', 'ریحان', 'حذیفہ', 'زین', 'ریعان', 'ازلان', 'عمران', 'شایان', 'علی ', 'حمزہ ']
const Names2 = ['احد', 'احمد', 'فیصل ', 'ایاز', 'عفان', 'ابرار', 'حسن', 'ارون', 'امان', 'انس', 'ریعان', 'ارسلان', 'شعیب', 'طلحہ', 'حسنين']
const objectNameAndImage = [
    { objName: " علی", img: apple },
    { objName: " علی", img: banana },
    { objName: " علی", img: mango },
    { objName: " علی", img: orange },
    { objName: " علی", img: pear },
    { objName: " علی", img: pineapple },
    { objName: " علی", img: plum },
    { objName: " علی", img: pomegranate },
    { objName: " علی", img: strawberry },
    { objName: " علی", img: watermelon },
    { objName: " علی", img: lemon },
    { objName: " علی", img: carrot },
    { objName: " علی", img: cherry },
    { objName: " علی", img: peach },
    { objName: " علی", img: dragon_fruit },
]



const getRandomSentenceParams = () => {
    const index_1 = MathHelper.getRandomInt(0, Names1.length - 1)
    const index_2 = MathHelper.getRandomInt(0, Names2.length - 1)
    const index_3 = MathHelper.getRandomInt(0, objectNameAndImage.length - 1)

    const firstName = Names1[index_1]
    const secondName = Names2[index_2]
    const objectName = objectNameAndImage[index_3].objName
    const img = objectNameAndImage[index_3].img
    return {firstName, secondName, objectName, img}
}

export default {
    getRandomSentenceParams
}