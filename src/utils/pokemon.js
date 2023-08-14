export const getAllPokemon = (url) => {
    // このpromiseはfetch.then.thenが終わるのを待つ という約束をしている
    //resolveは成功、rejectは拒否
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => resolve(data));
    });
};

export const getPokemon = (url) =>{
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((res) => res.json())
            .then((data) => { 
                // console.log(data);
                resolve(data) });
    });
};