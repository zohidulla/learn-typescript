// const cars: string[] = ['Ford', ' Audi']
// const cars2: Array<string> = ['Frod', 'Audi']

// const promise = new Promise<string>(resolve => {
//   setTimeout(() => {
//     resolve('Promise resolved')
//   }, 2000);
// })

// promise.then(data => {
//   console.log(data);
// })

//*************************************************************************************************

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
  return Object.assign({}, a, b)  
}
const merged = mergeObjects({ name: 'Vladilen' }, { age: 26 })
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2019 })

// const merged3 = mergeObjects({a: 1}, 'bbb')
// console.log(merged3); 

//*************************************************************************************************

interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
  return {
    value,
    count: `This is object ${value.length} values`
  }
}

// console.log(withCount('hfkjdhjkfh kjdhfjkhdjkfdhkf'));
// console.log(withCount(['I', 'am', 'Array']));
// console.log(withCount(20));
// console.log(withCount({length: 22}));

//*************************************************************************************************

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}

const person = {
  name: 'Vladilen',
  age: 26,
  job: 'Javascript'
}
// console.log(getObjectValue(person, 'name'));
// console.log(getObjectValue(person, 'age'));
// console.log(getObjectValue(person, 'job'));

//*************************************************************************************************

class Collection<T extends number | string | boolean> {
  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item)
  }

  remove(item: T) {
    this._items = this._items.filter(i => i !== item)
  }

  get items(): T[] {
    return this._items
  }
}

// const strings = new Collection<string>(['I', 'am', 'Strings'])
// strings.add('!!!')
// strings.remove('am')
// console.log(strings.items);

// const numbers = new Collection<number>([1, 2, 3])
// numbers.add(4)
// numbers.remove(3)
// console.log(numbers.items);

// const objs = new Collection([{ a: 1 }, { b: 2 }])
// objs.remove({ b: 2 })
// console.log(objs.items);

//*************************************************************************************************

