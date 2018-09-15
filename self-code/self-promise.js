// new Promise( (resolve, reject) => { resolve() }).then((data)=>{/****/})
function selfPromise(fn){

    let status = 'pending'; // pending fulfilled rejected
    let cbData = undefined; // 返回的值 
    let nextQueue = [];
    let self = this;

    // setTimeout(()=>{
        fn(self.resolve, self.reject);
    // })

    selfPromise.prototype.resolve = (data) => {
        if(self.status === 'pending'){
            self.status = 'fulfilled';
            self.cbData = data;
            let nextFn = nextQueue.shift();
            if(nextFn){
                nextFn.resolve(self.cbData);
            }
        }
    }

    selfPromise.prototype.reject = () => {
        if(self.status === 'pending'){
            self.status = 'rejected';
            self.cbData = data;
            let nextFn = nextQueue.shift();
            if(nextFn){
                nextFn.reject(self.cbData);
            }
        }
    }

    selfPromise.prototype.then = (...args) => {
        if (!args.length ||  typeof args[0] !== 'function'){
            console.error('then function received bad argument');
            return;
        }
        return new selfPromise( (resolve, reject) => {
            switch (this.status){
                case 'pending':
                    let o = {
                        resolve: function(data){ 
                            var vauleTmp = args[0](data);
                            if(vauleTmp instanceof selfPromise){
                                vauleTmp.then(args);
                            } else {
                                resolve(vauleTmp)
                            }
                        },
                        reject: function(data){
                            var vauleTmp = args[1](data);
                            if(vauleTmp instanceof selfPromise){
                                vauleTmp.then(args);
                            } else {
                                reject(vauleTmp)
                            }
                        }
                    }
                    nextQueue.push(o);
                    break;
                case 'fulfilled':
                    var vauleTmp = args[0](self.cbData);
                    if(vauleTmp instanceof selfPromise){
                        vauleTmp.then(args);
                    } else {
                        resolve(vauleTmp)
                    }
                    break;
                case 'rejected':
                    if (typeof args[1] === 'function'){
                        var vauleTmp = args[1](self.cbData);
                            if(vauleTmp instanceof selfPromise){
                                vauleTmp.then(args);
                            } else {
                                reject(vauleTmp)
                            }
                    }
                    break;
            }
        })
    }

    selfPromise.prototype.catch = () => {

    }

    selfPromise.prototype.finally = () => {

    }
}