export async function getData(){
    try {
        const data = await fetch('https://api.chucknorris.io/jokes/categories').then(res => res.json());
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getCategory(category:any){
    try {
        const joke = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`).then(res => res.json());
        console.log(joke);
        return joke;
    } catch (error) {
        console.log(error);
    }
}