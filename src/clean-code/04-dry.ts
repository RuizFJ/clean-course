type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ){} 

    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if (this[key].length === 0) throw new Error(`Property ${key} is empty`);
                    break;
                case 'number':
                    if (this[key] === 0) throw new Error(`Property ${key} is zero`);
                    break;
                default:
                    throw new Error(`Property ${key} has an invalid type`);
            }
        }
        return true;
    }

    toString() {
        if ( !this.isProductReady() ) return ;
        return `Product: ${ this.name }, Price: $${ this.price }, Size: ${ this.size }`;
    }
}

(() => {
    const bluePants = new Product('Blue large pants', 29.99, 'L');
    console.log(bluePants.toString());

})();