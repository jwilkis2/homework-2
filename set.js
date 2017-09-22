class mySet {
    constructor () {
        this.inputs = {};
    }

    add(a) {
        //console.log('calling add method');

        if(typeof a == 'string') {

            this.inputs[a] = true;
    
        } else {
            try {
                throw new Error('incorrect element type');
            } catch (e) {
                console.log(e.name + ': ' + e.message);
            }
        }        
    }

    remove(a) {
        //console.log('calling remove method');
        
        if(typeof a == 'string') {
            
            delete this.inputs[a];
    
        } else {
            try {
                throw new Error('incorrect element type');
            } catch (e) {
                console.log(e.name + ': ' + e.message);
            }
        }
    }

    toString() {
        return Object.keys(this.inputs)
    }
}